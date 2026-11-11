#!/usr/bin/env node
/**
 * Builds src/feed/sources/videos.json: Portuguese study videos (Shorts + short lessons) per account.
 * Uses yt-dlp for search and YouTube oEmbed to confirm each video can be embedded and whether it is vertical.
 *
 *   YTDLP=/path/to/yt-dlp node scripts/curate-videos.mjs [--only funcoes,genetica]
 * Behind an HTTP proxy, run with NODE_USE_ENV_PROXY=1.
 */
import { execFile } from "node:child_process";
import { writeFileSync, readFileSync, existsSync } from "node:fs";
import { promisify } from "node:util";

const run = promisify(execFile);
const YTDLP = process.env.YTDLP || "yt-dlp";
const OUT = new URL("../src/feed/sources/videos.json", import.meta.url);
const SHORTS = "EgIQCQ%253D%253D"; // type: Shorts
const UNDER4 = "EgIYAQ%253D%253D"; // duration: under 4 minutes
const PER_ACCOUNT = { shorts: 4, lessons: 3 };

/** account → search terms (the first ones matter most). */
const QUERIES = {
  funcoes: ["função afim", "função quadrática", "função exponencial"],
  algebra: ["equação do segundo grau", "regra de três", "progressão aritmética"],
  geometria: ["geometria espacial volume", "teorema de pitágoras", "área de figuras planas"],
  trigonometria: ["trigonometria seno cosseno", "ciclo trigonométrico"],
  estatistica: ["probabilidade enem", "média mediana moda", "análise combinatória"],
  financeira: ["juros compostos", "porcentagem enem", "matemática financeira"],
  cinematica: ["cinemática física", "movimento uniformemente variado", "queda livre física"],
  dinamica: ["leis de newton", "força de atrito", "gravitação universal"],
  energia: ["energia mecânica conservação", "energia cinética e potencial", "trabalho e potência física"],
  termologia: ["calorimetria", "termodinâmica física", "dilatação térmica"],
  optica: ["óptica espelhos", "lentes refração física"],
  ondas: ["ondulatória física", "acústica som física", "efeito doppler"],
  eletricidade: ["lei de ohm", "circuitos elétricos física", "eletromagnetismo"],
  "fisica-moderna": ["efeito fotoelétrico", "relatividade restrita", "física quântica", "dualidade onda partícula"],
  atomistica: ["modelos atômicos", "tabela periódica", "separação de misturas"],
  ligacoes: ["ligações químicas", "polaridade das moléculas", "ácidos e bases"],
  solucoes: ["concentração de soluções química", "propriedades coligativas"],
  "fisico-quimica": ["termoquímica", "equilíbrio químico", "eletroquímica pilha"],
  organica: ["funções orgânicas", "isomeria", "polímeros química"],
  estequiometria: ["estequiometria", "mol massa molar"],
  citologia: ["citologia organelas", "mitose e meiose", "membrana plasmática"],
  genetica: ["primeira lei de mendel", "genética biologia", "mendel ervilhas", "heredograma", "grupos sanguíneos genética", "DNA e RNA", "síntese de proteínas", "segunda lei de mendel"],
  evolucao: ["evolução darwin lamarck", "seleção natural"],
  ecologia: ["cadeia alimentar", "ciclos biogeoquímicos", "relações ecológicas"],
  fisiologia: ["sistema digestório", "sistema imunológico", "sistema nervoso"],
  "seres-vivos": ["vírus e bactérias", "botânica", "zoologia"],
  antiguidade: ["egito antigo", "grécia antiga", "roma antiga"],
  "medieval-moderna": ["feudalismo", "revolução francesa", "revolução industrial"],
  "brasil-colonia": ["brasil colônia", "ciclo do ouro", "independência do brasil"],
  "brasil-republica": ["era vargas", "ditadura militar no brasil", "república velha"],
  guerras: ["primeira guerra mundial", "segunda guerra mundial"],
  "mundo-atual": ["guerra fria", "muro de berlim", "globalização"],
  cartografia: ["cartografia escala", "biomas brasileiros", "climas do brasil"],
  populacao: ["transição demográfica", "urbanização", "migração geografia"],
  "economia-geo": ["matriz energética brasileira", "questão agrária", "industrialização brasileira"],
  geopolitica: ["blocos econômicos", "geopolítica", "refugiados"],
  gramatica: ["crase", "concordância verbal", "orações subordinadas"],
  literatura: ["romantismo literatura", "semana de arte moderna", "machado de assis realismo"],
  interpretacao: ["figuras de linguagem", "interpretação de texto enem", "funções da linguagem"],
  redacao: ["redação enem", "proposta de intervenção", "repertório redação"],
  grammar: ["simple past inglês", "present perfect inglês", "verbos irregulares inglês", "simple present inglês aula"],
  reading: ["inglês enem", "falsos cognatos"],
  filosofia: ["sócrates platão aristóteles", "contratualistas", "kant ética", "filosofia enem"],
  sociologia: ["durkheim weber marx", "indústria cultural", "movimentos sociais"],
  macetes: ["dicas enem", "como estudar para o enem", "técnica de estudo"],
  astronomia: ["sistema solar", "buraco negro"],
  programacao: ["lógica de programação", "algoritmo"],
};

const EN = /\b(the|and|how|what|why|with|your|you|this|for|is|of)\b/gi;
const PT = /[ãõçáéíóúâêô]|\b(de|da|do|que|como|para|em|um|uma|na|no|os|as|aula|resumo|enem)\b/gi;
const looksPortuguese = (t) => (t.match(PT) ?? []).length >= 1 && (t.match(EN) ?? []).length <= 1;
const BAD = /\b(live|ao vivo|podcast|react|trailer|clipe|music|música oficial|asmr|unboxing)\b/i;
/** Content for small children or from another language slips through search; keep it out. */
const KIDS = /kids|crianças|infantil|lingokids|smile and learn|cartoon network|lala lel|tia mari|kidspace|pé de sonho|\b[1-7][º°] ?ano\b|\b[1-7][º°][a-z]\b/i;
const FOREIGN = /\b(el|los|las|del|en la|hoy|explicado en|con|une|c'est|qu'est|uitleg|de basis|experimentos con|línea|historia fácil|estudiantes|qué|cómo|ley)\b|la différence|¿/i;
/** Ads, health tips and other off-topic videos found while reviewing the list. */
const BLOCK = new Set([
  "kGCoCDT2Xq4", "J19uO6YQgd8", "_yWaLP_1jyk", "AgwCdLX9Ia0", "LnsOEMdmt-E", "3_AYTkfakos", "jGdJysIgurw",
  "Rv3uqBH9FGk", "k7Eg0J1Hfus", "Did1iwB21mo", "Y-WCacUIouM", "j7mY8oi_iJ4", "7Izmy2Dznb4", "V3XGT6to7U0",
  "t4z4z208iJU", "aHvFfYkehg0", "RolewrVctrE", "XIYKXM3soKk", "TOWsUmCcmPA", "g7SbyPSQ5Rk", "6UpSb4V-Ls0",
  "zAzOy32-8Pw", "jE9Qb1alPRw", "m7O_zhxyOUk", "Potc8R65eeE", "D-wTlJMQ5Mw", "WZ7ECJURI8Q",
]);
const BLOCK_TEXT = /importadora|relé|weg harry|g5 solar|rota do milh|sistema imunológico\b.*(fortalecer|melhorar)|(fortalece|melhora).*sistema imunológico|branded content|data science|unimed/i;
const MIN_SHORT = 12;
const acceptable = (v) => !BLOCK.has(v.id) && !KIDS.test(`${v.title} ${v.channel}`) && !FOREIGN.test(v.title) && !BLOCK_TEXT.test(`${v.title} ${v.channel}`) && !(v.kind === "short" && v.duration < MIN_SHORT);

async function search(term, sp, max) {
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(term)}&sp=${sp}`;
  try {
    const { stdout } = await run(YTDLP, ["--flat-playlist", "--dump-json", "--playlist-end", String(max), "--extractor-args", "youtube:lang=pt", url], { maxBuffer: 1 << 26, timeout: 120_000 });
    return stdout.trim().split("\n").filter(Boolean).map((l) => JSON.parse(l));
  } catch {
    return [];
  }
}

async function oembed(id, short) {
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/${short ? "shorts/" : "watch?v="}${id}&format=json`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

/** Channels that look like teachers or study channels go first. */
const TEACHER = /prof|aula|enem|vestibular|escola|estud|descomplica|stoodi|me salva|khan|ferretto|evolucional|gis com giz|biologia|química|quimica|física|fisica|matemática|matematica|história|historia|geografia|português|portugues|redação|redacao|inglês|ingles|filosofia|sociologia/i;

const clean = (t) => t.replace(/#\S+/g, "").replace(/\s{2,}/g, " ").replace(/[\s|–-]+$/g, "").trim();

async function curate(account, terms) {
  const picked = [];
  const seen = new Set();
  const take = async (raw, kind, limit) => {
    const entries = [...raw].sort((a, b) => Number(TEACHER.test(b.channel ?? "")) - Number(TEACHER.test(a.channel ?? "")));
    for (const e of entries) {
      if (picked.filter((p) => p.kind === kind).length >= limit) return;
      if (!e.id || seen.has(e.id) || !e.duration) continue;
      seen.add(e.id);
      if (kind === "short" && (e.duration > 90 || e.duration < MIN_SHORT)) continue;
      if (kind === "lesson" && (e.duration < 60 || e.duration > 600)) continue;
      const meta = await oembed(e.id, kind === "short");
      if (!meta) continue;
      const title = clean(meta.title || e.title || "");
      if (!title || BAD.test(title) || !looksPortuguese(title)) continue;
      const video = { id: e.id, pageId: account, kind, title, channel: meta.author_name || e.channel || "", duration: Math.round(e.duration), vertical: meta.height > meta.width };
      if (!acceptable(video) || picked.some((p) => p.title === video.title)) continue;
      picked.push(video);
    }
  };
  // Plain terms first, then the same terms aimed at ENEM/high school when the quota is not met yet.
  const all = [...terms, ...terms.map((t) => `${t} enem`), ...terms.map((t) => `${t} ensino médio`)];
  const count = (kind) => picked.filter((p) => p.kind === kind).length;
  for (const term of all) if (count("short") < PER_ACCOUNT.shorts) await take(await search(term, SHORTS, 14), "short", PER_ACCOUNT.shorts);
  for (const term of all) if (count("lesson") < PER_ACCOUNT.lessons) await take(await search(term, UNDER4, 10), "lesson", PER_ACCOUNT.lessons);
  return picked;
}

async function pool(items, size, fn) {
  const out = [];
  let i = 0;
  await Promise.all(Array.from({ length: size }, async () => {
    while (i < items.length) {
      const item = items[i++];
      out.push(...(await fn(item)));
    }
  }));
  return out;
}

// --refilter: re-apply the filters to the saved list without searching again.
if (process.argv.includes("--refilter")) {
  const seenIds = new Set();
  const kept = JSON.parse(readFileSync(OUT, "utf8")).filter((v) => acceptable(v) && !seenIds.has(v.id) && seenIds.add(v.id));
  writeFileSync(OUT, JSON.stringify(kept, null, 1) + "\n");
  const per = {};
  for (const v of kept) per[v.pageId] = (per[v.pageId] ?? 0) + 1;
  console.log(`kept ${kept.length}; under 5: ${Object.keys(QUERIES).filter((a) => (per[a] ?? 0) < 5).join(",")}`);
  process.exit(0);
}

const only = process.argv.includes("--only") ? process.argv[process.argv.indexOf("--only") + 1].split(",") : null;
const accounts = Object.entries(QUERIES).filter(([a]) => !only || only.includes(a));
const previous = only && existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")).filter((v) => !only.includes(v.pageId)) : [];
const found = await pool(accounts, 4, async ([account, terms]) => {
  const list = await curate(account, terms);
  console.log(`${account}: ${list.filter((v) => v.kind === "short").length} shorts, ${list.filter((v) => v.kind === "lesson").length} aulas`);
  return list;
});
const ids = new Set();
const all = [...previous, ...found].filter((v) => !ids.has(v.id) && ids.add(v.id)).sort((a, b) => a.pageId.localeCompare(b.pageId) || a.kind.localeCompare(b.kind));
writeFileSync(OUT, JSON.stringify(all, null, 1) + "\n");
console.log(`total: ${all.length}`);
