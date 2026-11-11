import { ROOT_PAGES, SUB_PAGES, familyOf } from "@/data/pages";
import { createRng, generateFor, type Rng } from "@/feed/sources/generators";
import { CONTENT } from "@/feed/sources/library";
import type { PageId, QuizItem } from "@/feed/types";

/** Pages whose generator produces quizzes, so their exams can be as long as needed. */
const QUIZ_GENERATORS: readonly PageId[] = [
  "matematica", "geografia", "quimica", "programacao",
  "funcoes", "trigonometria", "estatistica", "financeira", "geometria", "cinematica", "eletricidade", "estequiometria", "energia",
  "genetica", "organica", "fisico-quimica", "termologia", "dinamica", "ondas", "optica", "solucoes", "algebra", "grammar",
];
/** Generators that serve a page: its own and its accounts'. */
const generatorsFor = (pageId?: PageId) => (pageId ? QUIZ_GENERATORS.filter((g) => familyOf(pageId).includes(g)) : [...QUIZ_GENERATORS]);

export const MIN_EXAM_QUESTIONS = 5;
export const ALL_PAGES = "all";

const seedQuizzes = (pageId?: PageId) => {
  const family = pageId ? new Set(familyOf(pageId)) : null;
  return CONTENT.filter((i): i is QuizItem => i.kind === "quiz" && (!family || family.has(i.pageId)));
};

const availabilityCache = new Map<string, number>();

/** How many distinct questions an exam on this page can have, measured by sampling its generator. */
export function examAvailability(pageId?: PageId): number {
  const key = pageId ?? "all";
  const cached = availabilityCache.get(key);
  if (cached !== undefined) return cached;
  const ids = new Set(seedQuizzes(pageId).map((q) => q.id));
  const generators = generatorsFor(pageId);
  const rng = createRng(42);
  for (let i = 0; i < 600 && generators.length > 0; i++) {
    const item = generateFor(generators[i % generators.length], rng);
    if (item.kind === "quiz") ids.add(item.id);
  }
  availabilityCache.set(key, ids.size);
  return ids.size;
}

/** Subjects (or, with `accounts`, sub-subject accounts) that can host an exam, with how many questions each has. */
export const examPages = (accounts = false) =>
  (accounts ? SUB_PAGES : ROOT_PAGES).map((p) => ({ page: p, available: examAvailability(p.id) })).filter((p) => p.available >= MIN_EXAM_QUESTIONS);

function shuffle<T>(list: T[], rng: Rng): T[] {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Picks `count` distinct quiz questions for a page (or every page). Hand-written
 * questions come first; generated ones fill the rest when the page has a generator.
 */
export function buildExam({ pageId, count, rng, pool }: { pageId?: PageId; count: number; rng: Rng; pool?: readonly QuizItem[] }): QuizItem[] {
  const picked = new Map<string, QuizItem>();
  if (pool) {
    // A study mode supplies its own questions: no topic filter, no generated filler.
    for (const q of shuffle([...pool], rng)) if (picked.size < count) picked.set(q.id, q);
    return [...picked.values()];
  }
  for (const q of shuffle(seedQuizzes(pageId), rng)) {
    if (picked.size >= count) break;
    picked.set(q.id, q);
  }
  const generators = generatorsFor(pageId);
  for (let tries = 0; picked.size < count && generators.length > 0 && tries < count * 20; tries++) {
    const item = generateFor(generators[tries % generators.length], rng);
    if (item.kind === "quiz" && !picked.has(item.id)) picked.set(item.id, item);
  }
  return shuffle([...picked.values()], rng);
}

/** Score from 0 to 100. */
export const examScore = (correct: number, total: number) => (total === 0 ? 0 : Math.round((correct / total) * 100));
