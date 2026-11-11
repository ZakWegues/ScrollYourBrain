import type { QuizItem } from "@/feed/types";

export type Rng = () => number;

export const int = (rng: Rng, min: number, max: number) => min + Math.floor(rng() * (max - min + 1));
export const pick = <T,>(rng: Rng, list: readonly T[]): T => list[Math.floor(rng() * list.length)];

/** Brazilian number format (comma decimals, dot thousands), up to 2 decimals. */
export const fmt = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

const NUMBER = /-?\d{1,3}(?:\.\d{3})*(?:,\d+)?|-?\d+(?:,\d+)?/;
const parsePt = (s: string) => Number(s.replace(/\./g, "").replace(",", "."));

/**
 * When deduplication leaves fewer than 3 wrong options, derive more from the correct answer by nudging
 * its first number (e.g. "R$ 1.210" → "R$ 1.211", "x = 3" → "x = 5"). Non-numeric answers are left as is.
 */
function padWrong(rng: Rng, correct: string, wrong: string[]): string[] {
  const out = [...wrong];
  const match = correct.match(NUMBER);
  if (!match) return out;
  const base = parsePt(match[0]);
  const step = Math.max(1, Math.round(Math.abs(base) / 10));
  const deltas = [step, -step, 2 * step, -2 * step, 3 * step, base === 0 ? 4 : base, 5 * step];
  for (let i = 0; out.length < 3 && i < deltas.length * 2; i++) {
    const v = base + deltas[(i + int(rng, 0, deltas.length - 1)) % deltas.length];
    const candidate = correct.replace(match[0], fmt(v));
    if (candidate !== correct && !out.includes(candidate)) out.push(candidate);
  }
  return out;
}

/** Builds a 4-option quiz with the right answer in a random slot; repeated or missing distractors are filled in. */
export function quizOf(
  rng: Rng,
  base: Omit<QuizItem, "kind" | "options" | "answer">,
  correct: string,
  wrong: string[],
): QuizItem {
  let unique = [...new Set(wrong.filter((w) => w !== correct))].slice(0, 3);
  if (unique.length < 3) unique = padWrong(rng, correct, unique);
  const answer = int(rng, 0, unique.length);
  const options = [...unique];
  options.splice(answer, 0, correct);
  return { ...base, kind: "quiz", options, answer };
}
