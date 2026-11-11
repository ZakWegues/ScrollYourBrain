import { ACCOUNT_GENERATORS } from "@/feed/sources/generators-accounts";
import type { Rng } from "@/feed/sources/generators";
import type { QuizItem, StudyItem } from "@/feed/types";

export const BLITZ_SECONDS = 60;

/** Short questions read fast enough for a 60-second round. */
const quick = (q: QuizItem) => q.question.length <= 110 && q.options.every((o) => o.length <= 40);

/**
 * Questions for a lightning round: quick hand-written quizzes from the student's content,
 * shuffled, topped up with generated ones so the round never runs out.
 */
export function blitzQuestions(count: number, rng: Rng, pool: readonly StudyItem[]): QuizItem[] {
  const own = pool.filter((i): i is QuizItem => i.kind === "quiz" && quick(i));
  for (let i = own.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [own[i], own[j]] = [own[j], own[i]];
  }
  const out = own.slice(0, Math.ceil(count * 0.7));
  const gens = Object.values(ACCOUNT_GENERATORS).flat();
  const seen = new Set(out.map((q) => q.id));
  for (let tries = 0; out.length < count && tries < count * 10; tries++) {
    const item = gens[Math.floor(rng() * gens.length)](rng);
    if (item.kind === "quiz" && quick(item) && !seen.has(item.id)) {
      seen.add(item.id);
      out.splice(Math.floor(rng() * (out.length + 1)), 0, item);
    }
  }
  return out;
}
