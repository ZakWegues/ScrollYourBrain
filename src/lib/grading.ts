import type { KeyPoint, MultiItem } from "@/feed/types";

export interface MultiGrade {
  /** Exactly the right set was marked. */
  ok: boolean;
  /** Right options that were marked. */
  hits: number;
  /** Right options left unmarked. */
  misses: number;
  /** Wrong options that were marked. */
  wrong: number;
  /** How many options are right. */
  total: number;
}

/** Grades a "marque todas as certas" answer: only the exact set is a hit; the counts explain partial answers. */
export function gradeMulti(item: Pick<MultiItem, "answers">, picked: readonly number[]): MultiGrade {
  const right = new Set(item.answers);
  const marked = new Set(picked);
  let hits = 0;
  let wrong = 0;
  for (const i of marked) {
    if (right.has(i)) hits++;
    else wrong++;
  }
  const misses = right.size - hits;
  return { ok: misses === 0 && wrong === 0, hits, misses, wrong, total: right.size };
}

/** Lowercase, no accents, single spaces: so "Mitocôndria" and "mitocondria" match. */
export const normalizeText = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9%]+/g, " ").trim();

/** Which key points a written answer mentions (any of each point's terms, as whole words or word starts). */
export function matchPoints(text: string, points: readonly KeyPoint[]): boolean[] {
  const t = ` ${normalizeText(text)} `;
  return points.map((p) =>
    p.terms.some((term) => {
      const n = normalizeText(term);
      return n.length > 0 && t.includes(` ${n}`);
    }),
  );
}

/** Self-assessment after reading the model answer. "Parte" counts as not yet right, so it comes back in review. */
export type SelfGrade = "right" | "partial" | "wrong";
export const selfGradeOk = (g: SelfGrade) => g === "right";
