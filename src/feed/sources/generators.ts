import type { FlashItem, PageId, QuizItem, StudyItem } from "@/feed/types";
import { ACCOUNT_GENERATORS } from "./generators-accounts";

export type Rng = () => number;

/** Small deterministic PRNG (mulberry32), so generated cards are reproducible in tests. */
export function createRng(seed: number): Rng {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const int = (rng: Rng, min: number, max: number) => min + Math.floor(rng() * (max - min + 1));
const pick = <T,>(rng: Rng, list: readonly T[]): T => list[Math.floor(rng() * list.length)];

/** Builds a 4-option quiz with the right answer in a random slot. */
function quiz(
  rng: Rng,
  base: Omit<QuizItem, "kind" | "options" | "answer">,
  correct: string,
  wrong: string[],
): QuizItem {
  const unique = Array.from(new Set(wrong.filter((w) => w !== correct))).slice(0, 3);
  const answer = int(rng, 0, unique.length);
  const options = [...unique];
  options.splice(answer, 0, correct);
  return { ...base, kind: "quiz", options, answer };
}

const fmt = (n: number) => n.toLocaleString("pt-BR");

function nearby(rng: Rng, value: number, spread: number): string[] {
  const out = new Set<number>();
  while (out.size < 3) {
    const delta = int(rng, -spread, spread);
    if (delta !== 0 && value + delta >= 0) out.add(value + delta);
  }
  return [...out].map(fmt);
}

const math: ((rng: Rng) => StudyItem)[] = [
  (rng) => {
    const a = int(rng, 6, 19), b = int(rng, 6, 19);
    return quiz(rng, { id: `gen-mat-mul-${a}x${b}`, pageId: "matematica", title: "Cálculo mental", tags: ["multiplicação"], question: `Quanto é ${a} × ${b}?`, explanation: `${a} × ${b} = ${fmt(a * b)}. Dica: ${a} × ${b} = ${a} × ${b - (b % 5)} + ${a} × ${b % 5}.` }, fmt(a * b), nearby(rng, a * b, 12));
  },
  (rng) => {
    const p = pick(rng, [5, 10, 15, 20, 25, 30, 40, 50, 75]);
    const v = int(rng, 2, 40) * 20;
    const r = (p * v) / 100;
    return quiz(rng, { id: `gen-mat-pct-${p}-${v}`, pageId: "matematica", title: "Porcentagem", tags: ["porcentagem"], question: `Quanto é ${p}% de ${fmt(v)}?`, explanation: `${p}% = ${p}/100. ${fmt(v)} × ${p}/100 = ${fmt(r)}.` }, fmt(r), nearby(rng, r, Math.max(5, Math.round(r / 3))));
  },
  (rng) => {
    const x = int(rng, -9, 12), a = int(rng, 2, 9), b = int(rng, -20, 20);
    const c = a * x + b;
    const sign = b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`;
    return quiz(rng, { id: `gen-mat-eq-${a}-${b}-${c}`, pageId: "matematica", title: "Equação do 1º grau", tags: ["álgebra"], question: `Resolva: ${a}x ${sign} = ${c}`, explanation: `Isole x: ${a}x = ${c} ${b >= 0 ? "−" : "+"} ${Math.abs(b)} = ${a * x}, logo x = ${x}.` }, `x = ${x}`, [x + 1, x - 1, x === 0 ? 2 : -x, x + 2].map((v) => `x = ${v}`));
  },
  (rng) => {
    const base = int(rng, 2, 9), exp = int(rng, 2, base <= 3 ? 8 : 4);
    const r = base ** exp;
    return quiz(rng, { id: `gen-mat-pow-${base}-${exp}`, pageId: "matematica", title: "Potências", tags: ["potenciação"], question: `Quanto é ${base}^${exp}?`, explanation: `${base}^${exp} = ${Array(exp).fill(base).join(" × ")} = ${fmt(r)}.` }, fmt(r), [fmt(base * exp), fmt(r + base), fmt(Math.max(1, r - base)), fmt(base ** (exp - 1))]);
  },
];

/** [country with its Portuguese contraction, country, capital]. */
const CAPITALS: [string, string, string][] = [
  ["da Austrália", "Austrália", "Camberra"], ["do Canadá", "Canadá", "Ottawa"], ["da Turquia", "Turquia", "Ancara"],
  ["do Marrocos", "Marrocos", "Rabat"], ["da Nova Zelândia", "Nova Zelândia", "Wellington"], ["da Suíça", "Suíça", "Berna"],
  ["da Nigéria", "Nigéria", "Abuja"], ["do Paquistão", "Paquistão", "Islamabad"], ["do Vietnã", "Vietnã", "Hanói"],
  ["do Egito", "Egito", "Cairo"], ["da Argentina", "Argentina", "Buenos Aires"], ["do Chile", "Chile", "Santiago"],
  ["do Peru", "Peru", "Lima"], ["da Colômbia", "Colômbia", "Bogotá"], ["do Japão", "Japão", "Tóquio"],
  ["da Coreia do Sul", "Coreia do Sul", "Seul"], ["do Quênia", "Quênia", "Nairóbi"], ["da Noruega", "Noruega", "Oslo"],
  ["da Polônia", "Polônia", "Varsóvia"], ["de Portugal", "Portugal", "Lisboa"], ["da Índia", "Índia", "Nova Délhi"],
  ["da Tailândia", "Tailândia", "Bangkok"], ["da Grécia", "Grécia", "Atenas"], ["da Irlanda", "Irlanda", "Dublin"],
];

const ELEMENTS: [string, string][] = [
  ["Ouro", "Au"], ["Prata", "Ag"], ["Ferro", "Fe"], ["Sódio", "Na"], ["Potássio", "K"], ["Chumbo", "Pb"], ["Cobre", "Cu"],
  ["Mercúrio", "Hg"], ["Estanho", "Sn"], ["Fósforo", "P"], ["Cálcio", "Ca"], ["Cloro", "Cl"], ["Hélio", "He"], ["Zinco", "Zn"],
];

const VOCAB: [string, string, string][] = [
  ["Overwhelmed", "Sobrecarregado(a)", "I feel overwhelmed by exams."],
  ["Reliable", "Confiável", "She is a reliable friend."],
  ["Thrive", "Prosperar / se desenvolver", "Plants thrive in sunlight."],
  ["Awkward", "Constrangedor / sem jeito", "That was an awkward silence."],
  ["Eager", "Ansioso (no bom sentido) / animado", "He is eager to learn."],
  ["Hindsight", "Visão em retrospecto", "In hindsight, it was a mistake."],
  ["Wholesome", "Saudável / do bem", "A wholesome movie for the family."],
  ["Bargain", "Pechincha", "This jacket was a bargain."],
  ["Nonetheless", "Mesmo assim", "It was hard; nonetheless, we finished."],
  ["Procrastinate", "Procrastinar", "Stop procrastinating and study!"],
];

const geo = (rng: Rng): StudyItem => {
  const [withArticle, country, capital] = pick(rng, CAPITALS);
  const wrong = CAPITALS.filter(([, , c]) => c !== capital).sort(() => rng() - 0.5).slice(0, 3).map(([, , c]) => c);
  return quiz(rng, { id: `gen-geo-${country}`, pageId: "geografia", title: "Capitais do mundo", tags: ["capitais"], question: `Qual é a capital ${withArticle}?`, explanation: `A capital ${withArticle} é ${capital}.` }, capital, wrong);
};

const chem = (rng: Rng): StudyItem => {
  const [name, symbol] = pick(rng, ELEMENTS);
  const wrong = ELEMENTS.filter(([, s]) => s !== symbol).sort(() => rng() - 0.5).slice(0, 3).map(([, s]) => s);
  return quiz(rng, { id: `gen-qui-${symbol}`, pageId: "quimica", title: "Símbolos químicos", tags: ["tabela periódica"], question: `Qual é o símbolo químico do elemento ${name}?`, explanation: `${name} = ${symbol}. Muitos símbolos vêm do latim.` }, symbol, wrong);
};

const english = (rng: Rng): FlashItem => {
  const [word, meaning, example] = pick(rng, VOCAB);
  return { id: `gen-ing-${word}`, pageId: "ingles", kind: "flash", title: "Vocabulário", tags: ["vocabulário"], front: word, back: `${meaning}\n“${example}”`, hint: "Tente adivinhar antes de virar." };
};

const binary = (rng: Rng): StudyItem => {
  const n = int(rng, 5, 63);
  const correct = n.toString(2);
  const wrong = [n + 1, n - 1, n ^ 4].filter((v) => v > 0 && v !== n).map((v) => v.toString(2));
  return quiz(rng, { id: `gen-dev-bin-${n}`, pageId: "programacao", title: "Binário", tags: ["binário"], question: `Como se escreve ${n} em binário?`, explanation: `${n} = ${correct
    .split("")
    .map((bit, i, arr) => (bit === "1" ? 2 ** (arr.length - 1 - i) : 0))
    .filter(Boolean)
    .join(" + ")} → ${correct}.` }, correct, wrong);
};

const GENERATORS: Partial<Record<PageId, ((rng: Rng) => StudyItem)[]>> = {
  matematica: math,
  geografia: [geo],
  quimica: [chem],
  ingles: [english],
  programacao: [binary],
  ...ACCOUNT_GENERATORS,
};

export const GENERATED_PAGES = Object.keys(GENERATORS);

/** Generates a fresh card for a page, or for any page with a generator when the page has none. */
export function generateFor(pageId: PageId, rng: Rng): StudyItem {
  const list = GENERATORS[pageId] ?? GENERATORS[pick(rng, GENERATED_PAGES)]!;
  return pick(rng, list)(rng);
}
