#!/usr/bin/env node
/**
 * Builds src/feed/sources/videos.json: Portuguese study videos (Shorts + short lessons) per account.
 * Uses yt-dlp for search and YouTube oEmbed to confirm each video can be embedded and whether it is vertical.
 *
 *   YTDLP=/path/to/yt-dlp node scripts/curate-videos.mjs [--only funcoes,genetica] [--more]
 * --more keeps the current list and only searches for what is missing to reach the quota.
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
const PER_ACCOUNT = { shorts: 8, lessons: 3 };

/** account → search terms (the first ones matter most). */
const QUERIES = {
  funcoes: ["função afim", "função quadrática", "função exponencial"],
  algebra: ["equação do segundo grau", "regra de três", "progressão aritmética"],
  geometria: ["geometria espacial volume", "teorema de pitágoras", "área de figuras planas"],
  trigonometria: ["trigonometria seno cosseno", "ciclo trigonométrico", "relações trigonométricas", "lei dos senos", "radianos"],
  estatistica: ["probabilidade enem", "média mediana moda", "análise combinatória", "princípio fundamental da contagem", "probabilidade macete"],
  financeira: ["juros compostos", "porcentagem enem", "matemática financeira", "juros simples", "desconto porcentagem", "inflação matemática", "juros compostos professor", "matemática financeira enem macete"],
  cinematica: ["cinemática física", "movimento uniformemente variado", "queda livre física", "velocidade média física", "mruv física", "lançamento oblíquo", "movimento uniforme física professor", "velocidade relativa física", "gráficos cinemática"],
  dinamica: ["leis de newton", "força de atrito", "gravitação universal"],
  energia: ["energia mecânica conservação", "energia cinética e potencial", "trabalho e potência física", "potência física", "energia potencial elástica", "energia física professor", "conservação da energia exercício"],
  termologia: ["calorimetria", "termodinâmica física", "dilatação térmica"],
  optica: ["óptica espelhos", "lentes refração física"],
  ondas: ["ondulatória física", "acústica som física", "efeito doppler"],
  eletricidade: ["lei de ohm", "circuitos elétricos física", "eletromagnetismo"],
  "fisica-moderna": ["efeito fotoelétrico", "relatividade restrita", "física quântica", "dualidade onda partícula", "física moderna enem", "radioatividade física"],
  atomistica: ["modelos atômicos", "tabela periódica", "separação de misturas", "distribuição eletrônica", "número atômico e massa"],
  ligacoes: ["ligações químicas", "polaridade das moléculas", "ácidos e bases", "ligação iônica e covalente", "geometria molecular"],
  solucoes: ["concentração de soluções química", "propriedades coligativas", "diluição de soluções", "concentração comum química", "solubilidade química"],
  "fisico-quimica": ["termoquímica", "equilíbrio químico", "eletroquímica pilha"],
  organica: ["funções orgânicas", "isomeria", "polímeros química", "hidrocarbonetos química", "nomenclatura orgânica"],
  estequiometria: ["estequiometria", "mol massa molar", "cálculo estequiométrico", "reagente limitante", "número de avogadro", "balanceamento de equações químicas", "mol química professor", "estequiometria professor", "regra de três química", "rendimento de reação química", "pureza de reagentes"],
  citologia: ["citologia organelas", "mitose e meiose", "membrana plasmática"],
  genetica: ["primeira lei de mendel", "genética biologia", "mendel ervilhas", "heredograma", "grupos sanguíneos genética", "DNA e RNA", "síntese de proteínas", "segunda lei de mendel", "leis de mendel resumo", "genótipo e fenótipo", "dominância e recessividade", "genética professor", "herança genética biologia", "cruzamento genético exercício", "primeira lei de mendel exercício", "probabilidade genética", "genética enem questão"],
  evolucao: ["evolução darwin lamarck", "seleção natural", "evolução biológica professor", "especiação biologia"],
  ecologia: ["cadeia alimentar", "ciclos biogeoquímicos", "relações ecológicas"],
  fisiologia: ["sistema digestório", "sistema imunológico", "sistema nervoso", "sistema circulatório", "sistema respiratório", "hormônios biologia", "fisiologia humana professor", "sistema endócrino"],
  "seres-vivos": ["vírus e bactérias", "botânica", "zoologia"],
  antiguidade: ["egito antigo", "grécia antiga", "roma antiga", "mesopotâmia história", "democracia ateniense", "império romano"],
  "medieval-moderna": ["feudalismo", "revolução francesa", "revolução industrial"],
  "brasil-colonia": ["brasil colônia", "ciclo do ouro", "independência do brasil"],
  "brasil-republica": ["era vargas", "ditadura militar no brasil", "república velha"],
  guerras: ["primeira guerra mundial", "segunda guerra mundial", "segunda guerra mundial resumo", "holocausto história", "guerra do vietnã"],
  "mundo-atual": ["guerra fria", "muro de berlim", "globalização"],
  cartografia: ["cartografia escala", "biomas brasileiros", "climas do brasil", "fuso horário geografia", "coordenadas geográficas"],
  populacao: ["transição demográfica", "urbanização", "migração geografia", "pirâmide etária", "êxodo rural", "densidade demográfica", "urbanização geografia aula", "população brasileira geografia", "migrações geografia aula"],
  "economia-geo": ["matriz energética brasileira", "questão agrária", "industrialização brasileira", "agronegócio geografia", "fontes de energia geografia", "industrialização geografia enem", "geografia econômica enem", "setores da economia geografia"],
  geopolitica: ["blocos econômicos", "geopolítica", "refugiados", "otan geografia", "brics geografia", "conflito israel palestina", "geopolítica professor de geografia", "organizações internacionais geografia", "geopolítica aula", "oriente médio geografia", "organizações internacionais onu"],
  gramatica: ["crase", "concordância verbal", "orações subordinadas"],
  literatura: ["romantismo literatura", "semana de arte moderna", "machado de assis realismo", "modernismo literatura", "barroco literatura", "parnasianismo"],
  interpretacao: ["figuras de linguagem", "interpretação de texto enem", "funções da linguagem"],
  redacao: ["redação enem", "proposta de intervenção", "repertório redação", "competências da redação enem", "conectivos redação", "tema da redação enem", "redação nota mil dicas", "como fazer introdução redação", "conectivos para redação"],
  grammar: ["simple past inglês", "present perfect inglês", "verbos irregulares inglês", "simple present inglês aula"],
  reading: ["inglês enem", "falsos cognatos", "reading comprehension inglês", "inglês enem interpretação", "dicas inglês enem"],
  filosofia: ["sócrates platão aristóteles", "contratualistas", "kant ética", "filosofia enem", "mito da caverna", "nietzsche filosofia", "descartes penso logo existo"],
  sociologia: ["durkheim weber marx", "indústria cultural", "movimentos sociais"],
  macetes: ["dicas enem", "como estudar para o enem", "técnica de estudo", "dica para o enem", "chute no enem", "como fazer redação nota 1000"],
  astronomia: ["sistema solar", "buraco negro"],
  programacao: ["lógica de programação", "algoritmo"],
};

const EN = /\b(the|and|how|what|why|with|your|you|this|for|is|of)\b/gi;
const PT = /[ãõçáéíóúâêô]|\b(de|da|do|que|como|para|em|um|uma|na|no|os|as|aula|resumo|enem)\b/gi;
const looksPortuguese = (t) => (t.match(PT) ?? []).length >= 1 && (t.match(EN) ?? []).length <= 1;
const BAD = /\b(live|ao vivo|podcast|react|trailer|clipe|music|música oficial|asmr|unboxing)\b/i;
/** Content for small children or from another language slips through search; keep it out. */
const KIDS = /kids|crianças|infantil|lingokids|gloob|turma da mônica|bob esponja|kaboo|creche|abelhinha|turminha|smile and learn|cartoon network|lala lel|tia mari|kidspace|pé de sonho|\b[1-7][º°] ?ano\b|\b[1-7][º°][a-z]\b/i;
const FOREIGN = /\b(el|los|las|del|en la|hoy|explicado en|con|une|c'est|qu'est|uitleg|de basis|experimentos con|línea|historia fácil|estudiantes|qué|cómo|ley)\b|la différence|expliquée|théorie|dibuja|\bhow (do|does|to)\b|\b(leyes|mentira|creímos|revolución)\b|¿/i;
/** Ads, health tips and other off-topic videos found while reviewing the list. */
const BLOCK = new Set([
  "kGCoCDT2Xq4", "J19uO6YQgd8", "_yWaLP_1jyk", "AgwCdLX9Ia0", "LnsOEMdmt-E", "3_AYTkfakos", "jGdJysIgurw",
  "Rv3uqBH9FGk", "k7Eg0J1Hfus", "Did1iwB21mo", "Y-WCacUIouM", "j7mY8oi_iJ4", "7Izmy2Dznb4", "V3XGT6to7U0",
  "t4z4z208iJU", "aHvFfYkehg0", "RolewrVctrE", "XIYKXM3soKk", "TOWsUmCcmPA", "g7SbyPSQ5Rk", "6UpSb4V-Ls0",
  "zAzOy32-8Pw", "jE9Qb1alPRw", "m7O_zhxyOUk", "Potc8R65eeE", "D-wTlJMQ5Mw", "WZ7ECJURI8Q",
  "F2QI57N6S7E", "qBaqNd5oXk8", "dAY5w9qL9bA", "nlitKA0QFs4", "f3HQRDjWUo0", "hDwhOz9wYsA", "f7AjQGe-Mmc",
  "wW9HxyR8FoQ", "Zrxlb11yhSA", "kwRpn3waFF4", "V0jU379OWck", "4AKi5Ox5rDo", "E0tevqnTgtM", "b9f_l71TxxI",
  "th-OmhXQ560", "UvuE4uJWFLo", "iyZG9jb8a8I", "lZNyFrjeNvs", "lSq2Ue95gxQ", "K-W7w48t920", "ZEcFhaQI2CQ",
  "AbVDlYyQjs8", "ILinUnuQFRE", "MYGyfE7haGQ", "Th07sWaHZ08", "2yLGep0Ck8w", "6mv3zLtugW8", "ZUHDS-a0Rk0",
  "qqS4bQKVECU", "grM9JVNlbq4", "FUwYbVnJvfs", "btdwdWJNS-M", "pm24WeIyZhk", "99Hi5nw89dc", "i4iET-48NN0",
  "VIXL8ugj0ts", "HYeceGTACCs", "8fkdQg4JOo8", "qo6NO6IQ8p4", "OVKZp_msc2Y", "UtS0ivdpR0Y", "gs4WlD9FQfk",
  "-wV_RkPv0Yc", "5kPPCTFxWbE", "sjz8UXkj08Q", "yEB1VAj-zJU", "4rT5qAavcIM", "hzdwNthMxVg", "hgL9QRLZ6Cg",
  "Lj9UT-SUv48", "0z0tZXyLjko", "lH3nPHjqaQs", "2Q6CDCGoN9M", "9XW0YHYZy84", "a1h3LzZu3zI", "HWyBfCCXrqs",
  "Ux5ODhqXt08", "kIeryfq0jqY", "5bwLbXFPEu0", "9MJdrDYL8tA", "1c54uJXLbNI", "bSbFIUD1R1A", "teyMa7slqWw",
  "_NKxuSHjPtY", "PGI16P7jGnI", "TuQg6mpCpDU", "dPP_JXQOf9U", "5i54RNjQJHg", "Y0P9Iq_O5cA", "q_PL0_wYc7I",
  "cqdJY7i1lCU", "zJmAUTNkLas", "lU7j2V4ShSQ", "K_z1Jd2G78I", "MqjlzZLpa0w", "FIeBDL2ElHY", "lL62WkzMG2k",
  "5zf-k8WKplY", "IBr4kD9-3n4",
  "e8s4h5Tp56s", "ka4Ku4qvUq4", "p4I1nQJsXeU", "w2R8e6cS4vA", "Kc8XsTIZLz4", "oe1PTYTplNs", "iODJ_tWGcNY",
  "jA_dwVCNmIo", "ebzVaOn_aPk", "KiRJ7NBf9To", "jYVEWxIcDKk", "Ar37W37OLnk", "K310yODkHq4", "9rpMyXTveGA",
  "7stJd8PHIAo", "hWmu9WlxOKo", "LoEqV9YPy5M", "nXzcaVvscog", "XmDgQpKxxt0", "iwJqzBJJZ6k", "ntkis45a5gE",
  "oi6PXsGJWSM", "xQgSlktskeU", "-ZtFBP7U5F0", "49jMeYSkuCE", "Fv62UFsmMJo", "S_0ymdA8SDE", "EEHisgVN-XU",
  "VQn9BXEmy4U", "ERU_4W4mS2U", "SD-mKK8jIWg", "frOuRauUaMY", "l2DbbzOA2dI", "b_ir_YcxlZ4", "lS0-GSGHBsA",
  "4gzKKhYNv0c",
  "UiWOj5-E-Vw", "ptHh5km-Tfw", "r4MppibQvq4", "czxdfCBZBaw", "Xyr8gTOBGFc", "sPbw9gesX3w", "lfET2bQ8O8E",
  "v9yYC5K_Cno", "CyTsOEDtEQ8", "D63iwt8L1d4", "Jvyd2-EZgms", "r5v61b8C_zk", "tx_OYGGyY5A", "MH_IL4gPiUA",
  "0na8uFgTqzc", "9emZxeo6dhg", "V-0CR9zC5-A", "mkZ_1B0Hsy0", "ehliu_4Nb4g", "ZgLQGCxhYz0", "AjaTBr7jYDk",
  "5VC_LSX3DEQ", "HzCRhBpbdyM", "F3lNveY-OPY", "g-OoyqeISeQ", "-JFLzQCmUDc",
]);
const BLOCK_TEXT = /importadora|relé|weg harry|g5 solar|rota do milh|sistema imunológico\b.*(fortalecer|melhorar)|(fortalece|melhora).*sistema imunológico|branded content|data science|unimed|reforma agrária|libras|imobili|unitel|prefeitura|depoimento|inaugura|previsão climática|imóveis|investimentos|trabalho de (escola|física)|\bgrupo \d+ turma|sem estudar|e-book/i;
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

async function curate(account, terms, existing = [], skip = []) {
  const picked = [...existing];
  const seen = new Set([...existing, ...skip].map((v) => v.id));
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
  // Plain terms first, then the same terms aimed at ENEM/high school, summaries and tricks, until the quota is met.
  const all = [...terms, ...["enem", "ensino médio", "resumo", "macete", "em 1 minuto"].flatMap((s) => terms.map((t) => `${t} ${s}`))];
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
const more = process.argv.includes("--more");
const saved = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : [];
const previous = more ? [] : only ? saved.filter((v) => !only.includes(v.pageId)) : [];
const found = await pool(accounts, 4, async ([account, terms]) => {
  const list = await curate(account, terms, more ? saved.filter((v) => v.pageId === account) : [], more ? saved : []);
  console.log(`${account}: ${list.filter((v) => v.kind === "short").length} shorts, ${list.filter((v) => v.kind === "lesson").length} aulas`);
  return list;
});
const ids = new Set();
const untouched = more ? saved.filter((v) => !accounts.some(([a]) => a === v.pageId)) : [];
const all = [...previous, ...untouched, ...found].filter((v) => !ids.has(v.id) && ids.add(v.id)).sort((a, b) => a.pageId.localeCompare(b.pageId) || a.kind.localeCompare(b.kind));
writeFileSync(OUT, JSON.stringify(all, null, 1) + "\n");
console.log(`total: ${all.length}`);
