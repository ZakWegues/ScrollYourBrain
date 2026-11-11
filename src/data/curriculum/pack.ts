import type { ConceptItem, FlashItem, QuizItem, StudyItem } from "@/feed/types";
import type { Bimestre, CurriculumTopic, Serie, SubjectCurriculum } from "./build";

type Card =
  | { k: "q"; question: string; options: string[]; answer: number; explanation: string }
  | { k: "f"; front: string; back: string; hint?: string }
  | { k: "c"; beats: string[]; takeaway: string };

export const q = (question: string, options: string[], answer: number, explanation: string): Card => ({ k: "q", question, options, answer, explanation });
export const f = (front: string, back: string, hint?: string): Card => ({ k: "f", front, back, hint });
export const c = (beats: string[], takeaway: string): Card => ({ k: "c", beats, takeaway });

/**
 * Adds a finer-grained topic (a subtopic of a bimestre) published by an account,
 * with its cards written compactly: pack(MATEMATICA, "financeira", 1, 1, "Porcentagem", [q(...), f(...), c(...)]).
 */
export function pack(cur: SubjectCurriculum, page: string, serie: Serie, bimestre: Bimestre, name: string, cards: Card[]): void {
  const subject = cur.topics[0].subject;
  const n = cur.topics.filter((t) => t.serie === serie && t.bimestre === bimestre).length + 1;
  const topic: CurriculumTopic = { id: `cur-${subject}-${serie}-${bimestre}-${n}`, subject, serie, bimestre, name, page };
  cur.topics.push(topic);
  const base = { pageId: page, title: name, tags: [name.toLowerCase(), `${serie}º ano`], topicId: topic.id };
  cards.forEach((card, i) => {
    const id = `${topic.id}-${i + 1}`;
    let item: StudyItem;
    if (card.k === "q") item = { ...base, id, kind: "quiz", question: card.question, options: card.options, answer: card.answer, explanation: card.explanation } satisfies QuizItem;
    else if (card.k === "f") item = { ...base, id, kind: "flash", front: card.front, back: card.back, hint: card.hint } satisfies FlashItem;
    else item = { ...base, id, kind: "concept", beats: card.beats, takeaway: card.takeaway } satisfies ConceptItem;
    cur.items.push(item);
  });
}
