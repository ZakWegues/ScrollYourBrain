import type { VideoItem } from "@/feed/types";
import CURATED from "./videos.json";

interface CuratedVideo {
  id: string;
  pageId: string;
  kind: "short" | "lesson";
  title: string;
  channel: string;
  duration: number;
  vertical: boolean;
}

const minutes = (s: number) => (s < 60 ? `${s}s` : `${Math.round(s / 60)} min`);

/**
 * Portuguese study videos (Shorts and short lessons) curated per account by scripts/curate-videos.mjs.
 * Any video that fails to load is skipped automatically by the feed.
 */
export const CURATED_VIDEOS: VideoItem[] = (CURATED as CuratedVideo[]).map((v) => ({
  id: `yt-${v.id}`,
  pageId: v.pageId,
  kind: "video",
  youtubeId: v.id,
  title: v.title,
  caption: `${v.channel} · ${v.kind === "short" ? "Short" : "Aula"} · ${minutes(v.duration)}`,
  tags: [v.kind === "short" ? "short" : "aula", v.channel.toLowerCase()],
  vertical: v.kind === "short" || v.vertical,
  channel: v.channel,
  duration: v.duration,
}));

/** Extracts a YouTube video id from a URL (watch, youtu.be, shorts, embed) or a raw id. */
export function parseYouTubeId(input: string): string | null {
  const text = input.trim();
  if (/^[\w-]{11}$/.test(text)) return text;
  const match = text.match(/(?:youtu\.be\/|v=|\/shorts\/|\/embed\/|\/live\/)([\w-]{11})/);
  return match ? match[1] : null;
}

export const youtubeThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
