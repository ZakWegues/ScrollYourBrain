import type { ConceptItem, FlashItem, MultiItem, OpenItem, QuizItem, StudyItem } from "@/feed/types";
import type { Bimestre, CurriculumTopic, Serie, SubjectCurriculum } from "./build";

type Card =
  | { k: "q"; question: string; options: string[]; answer: number; explanation: string }
  | { k: "f"; front: string; back: string; hint?: string }
  | { k: "c"; beats: string[]; takeaway: string }
  | { k: "m"; question: string; options: string[]; answers: number[]; explanation: string }
  | { k: "o"; question: string; model: string; points: [string, ...string[]][] };

const slug = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const q = (question: string, options: string[], answer: number, explanation: string): Card => ({ k: "q", question, options, answer, explanation });
export const f = (front: string, back: string, hint?: string): Card => ({ k: "f", front, back, hint });
export const c = (beats: string[], takeaway: string): Card => ({ k: "c", beats, takeaway });
/** "Marque todas as certas": `answers` lists every right option. */
export const m = (question: string, options: string[], answers: number[], explanation: string): Card => ({ k: "m", question, options, answers, explanation });
/** Dissertativa: a model answer and key points, each as [label, ...words that show the point is there]. */
export const o = (question: string, model: string, points: [string, ...string[]][]): Card => ({ k: "o", question, model, points });

function toItem(card: Card, base: Omit<StudyItem, "id" | "kind">, id: string): StudyItem {
  if (card.k === "q") return { ...base, id, kind: "quiz", question: card.question, options: card.options, answer: card.answer, explanation: card.explanation } satisfies QuizItem;
  if (card.k === "f") return { ...base, id, kind: "flash", front: card.front, back: card.back, hint: card.hint } satisfies FlashItem;
  if (card.k === "m") return { ...base, id, kind: "multi", question: card.question, options: card.options, answers: card.answers, explanation: card.explanation } satisfies MultiItem;
  if (card.k === "o")
    return { ...base, id, kind: "open", question: card.question, model: card.model, points: card.points.map(([label, ...terms]) => ({ label, terms: terms.length ? terms : [label] })) } satisfies OpenItem;
  return { ...base, id, kind: "concept", beats: card.beats, takeaway: card.takeaway } satisfies ConceptItem;
}

/** Adds cards to a topic that already exists (found by name), keeping its account, série and bimestre. */
export function extend(cur: SubjectCurriculum, topicName: string, cards: Card[]): void {
  const topic = cur.topics.find((t) => t.name === topicName);
  if (!topic) throw new Error(`unknown topic: ${topicName}`);
  const base = { pageId: topic.page, title: topic.name, tags: [topic.name.toLowerCase(), `${topic.serie}º ano`], topicId: topic.id };
  const already = cur.items.filter((i) => i.topicId === topic.id && /-x\d+$/.test(i.id)).length;
  cards.forEach((card, i) => cur.items.push(toItem(card, base, `${topic.id}-x${already + i + 1}`)));
}

/**
 * Adds a finer-grained topic (a subtopic of a bimestre) published by an account,
 * with its cards written compactly: pack(MATEMATICA, "financeira", 1, 1, "Porcentagem", [q(...), f(...), c(...)]).
 */
export function pack(cur: SubjectCurriculum, page: string, serie: Serie, bimestre: Bimestre, name: string, cards: Card[]): void {
  const subject = cur.topics[0].subject;
  // The id comes from the name, not the call order, so saved marks (my topics, mastered, custom modes) survive new packs.
  const topic: CurriculumTopic = { id: `cur-${subject}-${serie}-${bimestre}-${slug(name)}`, subject, serie, bimestre, name, page };
  cur.topics.push(topic);
  const base = { pageId: page, title: name, tags: [name.toLowerCase(), `${serie}º ano`], topicId: topic.id };
  cards.forEach((card, i) => cur.items.push(toItem(card, base, `${topic.id}-${i + 1}`)));
}
