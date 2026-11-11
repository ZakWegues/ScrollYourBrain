import type { FeedEntry } from "./types";

/** How far ahead (in cards) the next video starts loading. */
export const PRELOAD_AHEAD = 2;

/** Index of the next video card within PRELOAD_AHEAD cards after the active one, or -1. */
export function preloadIndex(entries: readonly FeedEntry[], active: number, ahead = PRELOAD_AHEAD): number {
  for (let i = active + 1; i <= active + ahead && i < entries.length; i++) if (entries[i].item.kind === "video") return i;
  return -1;
}

/** Thumbnails of the next few videos, to fetch before they show up. */
export function upcomingThumbs(entries: readonly FeedEntry[], active: number, count = 3, thumb: (id: string) => string): string[] {
  const out: string[] = [];
  for (let i = active + 1; i < entries.length && out.length < count; i++) {
    const it = entries[i].item;
    if (it.kind === "video") out.push(thumb(it.youtubeId));
  }
  return out;
}
