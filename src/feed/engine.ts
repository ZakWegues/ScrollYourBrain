import { PAGES, rootOf } from "@/data/pages";
import { GENERATED_PAGES, generateFor, type Rng } from "@/feed/sources/generators";
import type { ItemKind, PageId, StudyItem } from "@/feed/types";

export interface Signals {
  followed: ReadonlySet<PageId>;
  interests: ReadonlySet<PageId>;
  pageLikes: Readonly<Record<PageId, number>>;
  pageSkips: Readonly<Record<PageId, number>>;
}

export interface EngineState {
  /** Ids shown most recently, newest last. */
  recent: string[];
  /** Kinds shown most recently, newest last. */
  kinds: ItemKind[];
  /** Cards served since the last video. */
  sinceVideo?: number;
}

export interface NextOptions {
  pool: readonly StudyItem[];
  signals: Signals;
  rng: Rng;
  state: EngineState;
  /** Restrict to these pages (e.g. the "Following" feed). */
  pages?: readonly PageId[];
  /** Item ids that must never be served (e.g. videos that failed to load). */
  blocked?: ReadonlySet<string>;
  /** Guarantee a video at least every N cards when the pool has fresh ones. */
  videoEvery?: number;
}

const RECENT_LIMIT = 40;

/**
 * How much a page should be favoured: following and "quero mais" likes boost it, quick skips lower it.
 * Following or picking a subject as an interest also boosts every account under it.
 */
export function pageWeight(pageId: PageId, s: Signals): number {
  const root = rootOf(pageId);
  const likes = Math.min(s.pageLikes[pageId] ?? 0, 6);
  const skips = Math.min(s.pageSkips[pageId] ?? 0, 6);
  const w =
    1 +
    (s.followed.has(pageId) ? 2 : s.followed.has(root) ? 1.5 : 0) +
    (s.interests.has(pageId) || s.interests.has(root) ? 1.2 : 0) +
    likes * 0.55 -
    skips * 0.25;
  return Math.max(0.15, w);
}

/** Videos from accounts you follow (or their subject) come first: three times the usual weight. */
export const videoWeight = (pageId: PageId, s: Signals) => pageWeight(pageId, s) * (s.followed.has(pageId) || s.followed.has(rootOf(pageId)) ? 3 : 1);

function weightedPick<T>(rng: Rng, entries: [T, number][]): T {
  const total = entries.reduce((sum, [, w]) => sum + w, 0);
  let roll = rng() * total;
  for (const [value, w] of entries) {
    roll -= w;
    if (roll <= 0) return value;
  }
  return entries[entries.length - 1][0];
}

function remember(state: EngineState, item: StudyItem) {
  state.recent.push(item.id);
  if (state.recent.length > RECENT_LIMIT) state.recent.shift();
  state.kinds.push(item.kind);
  if (state.kinds.length > 4) state.kinds.shift();
  state.sinceVideo = item.kind === "video" ? 0 : (state.sinceVideo ?? 0) + 1;
}

/**
 * Picks the next `count` items. Never returns fewer than `count`: when a page's
 * pool runs dry, a procedurally generated card fills the slot.
 */
export function nextItems(count: number, opts: NextOptions): StudyItem[] {
  const { pool, signals, rng, state, blocked } = opts;
  const pageIds = opts.pages && opts.pages.length > 0 ? opts.pages : PAGES.map((p) => p.id);
  const byPage = new Map<PageId, StudyItem[]>();
  for (const item of pool) {
    if (blocked?.has(item.id) || !pageIds.includes(item.pageId)) continue;
    const list = byPage.get(item.pageId) ?? [];
    list.push(item);
    byPage.set(item.pageId, list);
  }
  // Small pools cycle sooner, so they never starve.
  const window = Math.max(1, Math.min(RECENT_LIMIT, Math.floor(pool.length * 0.6)));
  const out: StudyItem[] = [];

  while (out.length < count) {
    const recent = new Set(state.recent.slice(-window));
    // Videos come regularly: every `videoEvery` cards, pick one from the allowed pages.
    if (opts.videoEvery && (state.sinceVideo ?? 0) >= opts.videoEvery - 1) {
      const videos = pageIds.flatMap((id) => (byPage.get(id) ?? []).filter((i) => i.kind === "video" && !recent.has(i.id)));
      if (videos.length > 0) {
        const video = weightedPick(rng, videos.map((v) => [v, videoWeight(v.pageId, signals)] as [StudyItem, number]));
        remember(state, video);
        out.push(video);
        continue;
      }
    }
    const freshFor = (id: PageId) => (byPage.get(id) ?? []).filter((i) => !recent.has(i.id));
    // A page whose cards were all seen recently and that has no generator yields its turn to the others.
    const usable = pageIds.filter((id) => freshFor(id).length > 0 || GENERATED_PAGES.includes(id));
    const choices = usable.length > 0 ? usable : pageIds;
    // Pick a subject first, then one of its accounts, so subjects with many accounts don't crowd the feed.
    const families = new Map<PageId, PageId[]>();
    for (const id of choices) families.set(rootOf(id), [...(families.get(rootOf(id)) ?? []), id]);
    const familyWeight = (ids: PageId[]) => Math.max(...ids.map((id) => pageWeight(id, signals))) * (ids.length > 1 ? 1.35 : 1);
    const family = weightedPick(rng, [...families.values()].map((ids) => [ids, familyWeight(ids)] as [PageId[], number]));
    const pageId = weightedPick(rng, family.map((id) => [id, pageWeight(id, signals)] as [PageId, number]));
    const fresh = freshFor(pageId);
    const lastTwo = state.kinds.slice(-2);
    // Written answers take effort: at most one in any four cards.
    const openNearby = state.kinds.slice(-3).includes("open");
    const repeatsKind = (i: StudyItem) => (lastTwo.length === 2 && lastTwo.every((k) => k === i.kind)) || (openNearby && i.kind === "open");
    const varied = fresh.filter((i) => !repeatsKind(i));
    const candidates = varied.length > 0 ? varied : fresh;

    let item: StudyItem;
    if (candidates.length > 0) {
      item = candidates[Math.floor(rng() * candidates.length)];
    } else {
      item = generateFor(pageId, rng);
      for (let tries = 0; tries < 6 && recent.has(item.id); tries++) item = generateFor(pageId, rng);
    }
    remember(state, item);
    out.push(item);
  }
  return out;
}

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const itemText = (i: StudyItem): string => {
  switch (i.kind) {
    case "concept": return [i.title, ...i.beats, i.takeaway].join(" ");
    case "quiz":
    case "multi": return [i.title, i.question, ...i.options, i.explanation].join(" ");
    case "open": return [i.title, i.question, i.model].join(" ");
    case "flash": return [i.title, i.front, i.back].join(" ");
    case "video": return [i.title, i.caption].join(" ");
    case "wiki": return [i.title, i.extract].join(" ");
  }
};

/** Accent-insensitive search over item text and tags; every word in the query must match. */
export function searchItems(pool: readonly StudyItem[], query: string): StudyItem[] {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  return pool.filter((i) => {
    const hay = normalize(`${itemText(i)} ${i.tags.join(" ")}`);
    return words.every((w) => hay.includes(w));
  });
}

export { normalize };
