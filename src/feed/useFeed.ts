import { useCallback, useEffect, useMemo, useState } from "react";
import { nextItems, type EngineState, type Signals } from "@/feed/engine";
import { createRng } from "@/feed/sources/generators";
import { SEED } from "@/feed/sources/seed";
import { fetchWikiBatch } from "@/feed/sources/wiki";
import { CURATED_VIDEOS } from "@/feed/sources/youtube";
import type { FeedEntry, PageId, StudyItem, WikiItem } from "@/feed/types";
import { useLibrary } from "@/store/library";
import { dueCards, useReview } from "@/store/review";
import { useSettings } from "@/store/settings";

export type FeedSource =
  | { type: "forYou" }
  | { type: "following" }
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

export function useFeed(source: FeedSource) {
  const followedKey = useLibrary((s) => Object.keys(s.followed).sort().join(","));
  const customVideos = useLibrary((s) => s.customVideos);
  const customItems = useLibrary((s) => s.customItems);
  const dataSaver = useSettings((s) => s.dataSaver);

  const pages = useMemo<PageId[] | undefined>(() => {
    if (source.type === "following") return followedKey ? followedKey.split(",") : [];
    if (source.type === "page") return [source.pageId];
    return undefined;
  }, [source, followedKey]);

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
      const pool = [...SEED, ...CURATED_VIDEOS, ...customVideos, ...customItems, ...wikiCache.filter((w) => !usedWiki.has(w.id))];
      const items = nextItems(count, {
        pool,
        signals: currentSignals(),
        rng,
        state: memory.engine,
        pages,
        blocked: blockedItems,
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
  const [entries, setEntries] = useState<FeedEntry[]>(() => (source.type === "list" ? toEntries(source.items) : build(BATCH)));

  useEffect(() => {
    if (!dataSaver && source.type !== "list") void refillWiki();
  }, [dataSaver, source.type, entries.length]);

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

  return { entries, loadMore, drop, needsFollow: source.type === "following" && pages?.length === 0 };
}
