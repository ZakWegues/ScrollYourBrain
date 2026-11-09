import type { WikiItem } from "@/feed/types";

const ENDPOINT = "https://pt.wikipedia.org/api/rest_v1/page/random/summary";

interface Summary {
  type?: string;
  title?: string;
  extract?: string;
  pageid?: number;
  thumbnail?: { source?: string };
  originalimage?: { source?: string };
  content_urls?: { mobile?: { page?: string }; desktop?: { page?: string } };
}

/** Fetches one random article summary from Portuguese Wikipedia. Returns null on any failure. */
export async function fetchRandomWiki(signal?: AbortSignal): Promise<WikiItem | null> {
  try {
    const res = await fetch(ENDPOINT, { signal, headers: { Accept: "application/json" } });
    if (!res.ok) return null;
    const data = (await res.json()) as Summary;
    if (data.type !== "standard" || !data.title || !data.extract || data.extract.length < 80) return null;
    return {
      id: `wiki-${data.pageid ?? data.title}`,
      pageId: "curiosidades",
      kind: "wiki",
      title: data.title,
      tags: ["wikipédia"],
      extract: data.extract,
      imageUrl: data.originalimage?.source ?? data.thumbnail?.source,
      url: data.content_urls?.mobile?.page ?? data.content_urls?.desktop?.page ?? `https://pt.wikipedia.org/wiki/${encodeURIComponent(data.title)}`,
    };
  } catch {
    return null;
  }
}

/** Fetches up to `count` articles in parallel, dropping failures. */
export async function fetchWikiBatch(count: number, signal?: AbortSignal): Promise<WikiItem[]> {
  const results = await Promise.all(Array.from({ length: count }, () => fetchRandomWiki(signal)));
  return results.filter((r): r is WikiItem => r !== null);
}
