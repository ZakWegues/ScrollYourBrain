import { useCallback, useEffect, useMemo, useState } from "react";
import { nextItems, type EngineState, type Signals } from "@/feed/engine";
import { withFamilies } from "@/data/pages";
import { createRng } from "@/feed/sources/generators";
import { contentForStudent } from "@/feed/sources/library";
import { fetchWikiBatch } from "@/feed/sources/wiki";
import { CURATED_VIDEOS } from "@/feed/sources/youtube";
import type { FeedEntry, PageId, StudyItem, WikiItem } from "@/feed/types";
import { useLibrary } from "@/store/library";
import { useNetwork } from "@/store/network";
import { dueCards, useReview } from "@/store/review";
import { useResume } from "@/store/resume";
import { useSettings, VIDEO_EVERY } from "@/store/settings";

export type FeedSource =
  | { type: "forYou" }
  | { type: "following" }
  | { type: "mix" }
  | { type: "page"; pageId: PageId }
  | { type: "list"; items: StudyItem[] };

const BATCH = 6;

// Wikipedia articles are shared by every feed instance and refilled in the background.
const wikiCache: WikiItem[] = [];
let wikiInFlight = false;
let wikiRetryAt = 0;

async function refillWiki() {
  if (wikiInFlight || Date.now() < wikiRetryAt || wikiCache.length >= 8) return;
  wikiInFlight = true;
  const batch = await fetchWikiBatch(4);
  wikiInFlight = false;
  if (batch.length === 0) wikiRetryAt = Date.now() + 60_000;
  for (const item of batch) if (!wikiCache.some((w) => w.id === item.id)) wikiCache.push(item);
}

/** Every video that failed to play in this session; never served again. */
export const blockedItems = new Set<string>();

function currentSignals(): Signals {
  const lib = useLibrary.getState();
  return {
    followed: new Set(Object.keys(lib.followed)),
    interests: new Set(useSettings.getState().interests),
    pageLikes: lib.pageLikes,
    pageSkips: lib.pageSkips,
  };
}

const studentContent = () => {
  const { serie, myTopics } = useSettings.getState();
  return contentForStudent(serie, myTopics);
};

export function useFeed(source: FeedSource) {
  const followedKey = useLibrary((s) => Object.keys(s.followed).sort().join(","));
  // The Mix draws from the accounts whose cards you liked.
  const likedPagesKey = useLibrary((s) => [...new Set(Object.values(s.liked).map((l) => l.item.pageId))].sort().join(","));
  const customVideos = useLibrary((s) => s.customVideos);
  const customItems = useLibrary((s) => s.customItems);
  const dataSaver = useSettings((s) => s.dataSaver);

  const pages = useMemo<PageId[] | undefined>(() => {
    // Following a subject follows all of its accounts too.
    if (source.type === "following") return followedKey ? withFamilies(followedKey.split(",")) : [];
    if (source.type === "mix") return likedPagesKey ? likedPagesKey.split(",") : [];
    if (source.type === "page") return withFamilies([source.pageId]);
    return undefined;
  }, [source, followedKey, likedPagesKey]);

  const [rng] = useState(() => createRng(Date.now() & 0xffffffff));
  // Engine memory lives for the lifetime of this feed instance; it is mutated, never rendered.
  const [memory] = useState<{ engine: EngineState; counter: number }>(() => ({ engine: { recent: [], kinds: [] }, counter: 0 }));

  const toEntries = useCallback(
    (items: StudyItem[]) => items.map((item) => ({ key: `${item.id}#${memory.counter++}`, item })),
    [memory],
  );

  const build = useCallback(
    (count: number): FeedEntry[] => {
      if (source.type === "list") return [];
      if (pages && pages.length === 0) return [];
      const usedWiki = new Set(memory.engine.recent);
      // Offline, only content that works without internet goes in (no videos, no new articles).
      const online = useNetwork.getState().online;
      const pool = online
        ? [...studentContent(), ...CURATED_VIDEOS, ...customVideos, ...customItems, ...wikiCache.filter((w) => !usedWiki.has(w.id))]
        : [...studentContent(), ...customItems];
      const items = nextItems(count, {
        pool,
        signals: currentSignals(),
        rng,
        state: memory.engine,
        pages,
        blocked: blockedItems,
        videoEvery: online && !useSettings.getState().dataSaver ? VIDEO_EVERY[useSettings.getState().videoFrequency] : undefined,
      });
      // One review card that is due today goes near the top of each batch.
      const recent = new Set(memory.engine.recent);
      const due = dueCards(useReview.getState().cards).find((c) => !recent.has(c.item.id) && (!pages || pages.includes(c.item.pageId)));
      if (due && items.length > 1) {
        items[1] = due.item;
        memory.engine.recent.push(due.item.id);
      }
      // Drop served wiki articles from the cache so the next ones are new.
      for (const item of items) {
        const idx = wikiCache.findIndex((w) => w.id === item.id);
        if (idx >= 0) wikiCache.splice(idx, 1);
      }
      return toEntries(items);
    },
    [source.type, pages, customVideos, customItems, rng, toEntries, memory],
  );

  // First page is built once; callers remount (via `key`) to switch sources.
  // "Para você" reopens on the card you were on, followed by fresh ones.
  const [entries, setEntries] = useState<FeedEntry[]>(() => {
    if (source.type === "list") return toEntries(source.items);
    if (source.type !== "forYou") return build(BATCH);
    const ids = useResume.getState().forYou;
    const known = new Map([...studentContent(), ...CURATED_VIDEOS, ...customVideos, ...customItems].map((i) => [i.id, i]));
    const resumed = ids.map((id) => known.get(id)).filter((i): i is StudyItem => !!i && !blockedItems.has(i.id));
    memory.engine.recent.push(...resumed.map((i) => i.id));
    return [...toEntries(resumed), ...build(BATCH)];
  });

  const online = useNetwork((s) => s.online);
  useEffect(() => {
    if (online && !dataSaver && source.type !== "list") void refillWiki();
  }, [online, dataSaver, source.type, entries.length]);

  const loadMore = useCallback(() => {
    if (source.type === "list") return;
    setEntries((prev) => [...prev, ...build(BATCH)]);
  }, [build, source.type]);

  /** Removes an entry that cannot be shown (e.g. a video that failed) and tops up the feed. */
  const drop = useCallback(
    (key: string) => {
      setEntries((prev) => {
        const next = prev.filter((e) => e.key !== key);
        return source.type === "list" ? next : [...next, ...build(1)];
      });
    },
    [build, source.type],
  );

  return { entries, loadMore, drop, needsFollow: (source.type === "following" || source.type === "mix") && pages?.length === 0 };
}
