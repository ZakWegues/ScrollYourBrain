import type { VideoItem } from "@/feed/types";

/** "Assistir depois" entries, newest first. */
export const watchLaterList = (items: Record<string, { item: VideoItem; at: number }>) =>
  Object.values(items)
    .sort((a, b) => b.at - a.at)
    .map((x) => x.item);
