import { ACCOUNT_GENERATORS } from "@/feed/sources/generators-accounts";
import type { Rng } from "@/feed/sources/gen-utils";
import type { QuestionItem, StudyItem } from "@/feed/types";
import { summarize, type ActivityLog } from "./stats";
import { mastery } from "./xp";

/** Accounts with enough answers to judge, weakest first. */
export function weakAccounts(log: ActivityLog, limit = 4, minAnswered = 3): string[] {
  return summarize(log, null)
    .topics.filter((t) => t.answered >= minAnswered)
    .map((t) => ({ id: t.pageId, score: mastery(t), acc: t.correct / t.answered }))
    .filter((t) => t.acc < 0.85)
    .sort((a, b) => a.acc - b.acc || a.score - b.score)
    .slice(0, limit)
    .map((t) => t.id);
}

function shuffle<T>(list: T[], rng: Rng): T[] {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Questions for a "weak points" exam: up to half are questions you got wrong and haven't fixed yet,
 * the rest come from your weakest accounts (bundled questions first, then generated ones).
 */
export function weakPool(opts: { log: ActivityLog; mistakes: readonly QuestionItem[]; content: readonly StudyItem[]; count: number; rng: Rng }): QuestionItem[] {
  const { log, mistakes, content, count, rng } = opts;
  const picked = new Map<string, QuestionItem>();
  for (const q of shuffle([...mistakes], rng).slice(0, Math.ceil(count / 2))) picked.set(q.id, q);
  const weak = weakAccounts(log);
  const fromContent = shuffle(content.filter((i): i is QuestionItem => (i.kind === "quiz" || i.kind === "multi") && weak.includes(i.pageId)), rng);
  for (const q of fromContent) if (picked.size < count) picked.set(q.id, q);
  const gens = weak.flatMap((id) => ACCOUNT_GENERATORS[id] ?? []);
  for (let tries = 0; picked.size < count && gens.length > 0 && tries < count * 10; tries++) {
    const item = gens[Math.floor(rng() * gens.length)](rng);
    if (item.kind === "quiz" && !picked.has(item.id)) picked.set(item.id, item);
  }
  return shuffle([...picked.values()], rng);
}
