import type { QuizItem } from "@/feed/types";
import type { Bimestre, Serie, SubjectCurriculum } from "./build";

/** [question, options, answer index, explanation] */
export type Q = [string, string[], number, string];

/** Adds extra quizzes to an existing curriculum block (same topic id), so each bimestre has enough for a practice exam. */
export function more(cur: SubjectCurriculum, serie: Serie, bimestre: Bimestre, list: Q[]): void {
  const topic = cur.topics.find((t) => t.serie === serie && t.bimestre === bimestre);
  if (!topic) throw new Error(`No topic for ${serie}/${bimestre}`);
  list.forEach(([question, options, answer, explanation], i) => {
    const item: QuizItem = {
      id: `${topic.id}-x${i + 1}`, pageId: topic.subject, kind: "quiz", title: topic.name,
      tags: [topic.name.toLowerCase(), `${topic.serie}º ano`], topicId: topic.id, question, options, answer, explanation,
    };
    cur.items.push(item);
  });
}
