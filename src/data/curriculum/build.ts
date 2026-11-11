import type { ConceptItem, FlashItem, QuizItem, StudyItem } from "@/feed/types";

export type Serie = 1 | 2 | 3;
export type Bimestre = 1 | 2 | 3 | 4;

/** One block of the high-school curriculum: a subject's content for one bimestre of one série. */
export interface CurriculumTopic {
  id: string;
  subject: string;
  serie: Serie;
  bimestre: Bimestre;
  name: string;
  /** Account (sub-subject page) that publishes this topic's cards. */
  page: string;
}

export interface SubjectCurriculum {
  topics: CurriculumTopic[];
  items: StudyItem[];
}

/**
 * Small DSL to write curriculum content compactly:
 *   const s = subject("biologia");
 *   const t = s.topic(1, 1, "Bioquímica");
 *   s.quiz(t, "Pergunta?", ["a", "b", "c", "d"], 2, "Explicação");
 */
export function subject(pageId: string) {
  const topics: CurriculumTopic[] = [];
  const items: StudyItem[] = [];
  const count: Record<string, number> = {};
  const nextId = (t: CurriculumTopic) => `${t.id}-${(count[t.id] = (count[t.id] ?? 0) + 1)}`;

  return {
    topic(serie: Serie, bimestre: Bimestre, name: string, page: string = pageId): CurriculumTopic {
      const t = { id: `cur-${pageId}-${serie}-${bimestre}-${topics.filter((x) => x.serie === serie && x.bimestre === bimestre).length + 1}`, subject: pageId, serie, bimestre, name, page };
      topics.push(t);
      return t;
    },
    quiz(t: CurriculumTopic, question: string, options: string[], answer: number, explanation: string): void {
      const item: QuizItem = { id: nextId(t), pageId: t.page, kind: "quiz", title: t.name, tags: [t.name.toLowerCase(), `${t.serie}º ano`], topicId: t.id, question, options, answer, explanation };
      items.push(item);
    },
    flash(t: CurriculumTopic, front: string, back: string, hint?: string): void {
      const item: FlashItem = { id: nextId(t), pageId: t.page, kind: "flash", title: t.name, tags: [t.name.toLowerCase(), `${t.serie}º ano`], topicId: t.id, front, back, hint };
      items.push(item);
    },
    concept(t: CurriculumTopic, beats: string[], takeaway: string): void {
      const item: ConceptItem = { id: nextId(t), pageId: t.page, kind: "concept", title: t.name, tags: [t.name.toLowerCase(), `${t.serie}º ano`], topicId: t.id, beats, takeaway };
      items.push(item);
    },
    done: (): SubjectCurriculum => ({ topics, items }),
  };
}
