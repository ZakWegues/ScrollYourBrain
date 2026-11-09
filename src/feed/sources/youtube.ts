import type { VideoItem } from "@/feed/types";

/**
 * Curated educational videos. Any video that fails to load is skipped
 * automatically by the feed, so the list can be edited freely.
 */
export const CURATED_VIDEOS: VideoItem[] = [
  { id: "yt-aircAruvnKk", pageId: "programacao", kind: "video", youtubeId: "aircAruvnKk", title: "O que é uma rede neural?", caption: "3Blue1Brown explica, com animações, como uma rede neural reconhece dígitos.", tags: ["ia", "redes neurais"] },
  { id: "yt-fNk_zzaMoSs", pageId: "matematica", kind: "video", youtubeId: "fNk_zzaMoSs", title: "Vetores — Essência da Álgebra Linear", caption: "O ponto de partida da álgebra linear, visualmente.", tags: ["álgebra linear", "vetores"] },
  { id: "yt-WUvTyaaNkzM", pageId: "matematica", kind: "video", youtubeId: "WUvTyaaNkzM", title: "A essência do Cálculo", caption: "Derivadas e integrais sem decoreba, com intuição geométrica.", tags: ["cálculo"] },
  { id: "yt-spUNpyF58BY", pageId: "matematica", kind: "video", youtubeId: "spUNpyF58BY", title: "Transformada de Fourier, visualmente", caption: "Como decompor qualquer sinal em ondas simples.", tags: ["fourier", "sinais"] },
  { id: "yt-OmJ-4B-mS-Y", pageId: "matematica", kind: "video", youtubeId: "OmJ-4B-mS-Y", title: "O mapa da Matemática", caption: "Todas as áreas da matemática em um único mapa.", tags: ["visão geral"] },
  { id: "yt-ZihywtixUYo", pageId: "fisica", kind: "video", youtubeId: "ZihywtixUYo", title: "O mapa da Física", caption: "Da mecânica clássica à física quântica, em um panorama.", tags: ["visão geral"] },
  { id: "yt-zQGOcOUBi6s", pageId: "biologia", kind: "video", youtubeId: "zQGOcOUBi6s", title: "Como funciona o sistema imunológico", caption: "Kurzgesagt mostra a defesa do corpo contra uma infecção.", tags: ["imunologia"] },
];

/** Extracts a YouTube video id from a URL (watch, youtu.be, shorts, embed) or a raw id. */
export function parseYouTubeId(input: string): string | null {
  const text = input.trim();
  if (/^[\w-]{11}$/.test(text)) return text;
  const match = text.match(/(?:youtu\.be\/|v=|\/shorts\/|\/embed\/|\/live\/)([\w-]{11})/);
  return match ? match[1] : null;
}

export const youtubeThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
