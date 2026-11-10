import type { StudyItem } from "@/feed/types";
import type { Bimestre, CurriculumTopic, Serie } from "./build";
import { FISICA, MATEMATICA, QUIMICA } from "./exatas";
import { FILOSOFIA, INGLES, PORTUGUES, SOCIOLOGIA } from "./linguagens";
import { BIOLOGIA, GEOGRAFIA, HISTORIA } from "./natureza-humanas";
// Extra quizzes are appended to the blocks above when these modules load.
import "./more-exatas";
import "./more-humanas";

export type { Bimestre, CurriculumTopic, Serie } from "./build";

const ALL = [MATEMATICA, FISICA, QUIMICA, BIOLOGIA, HISTORIA, GEOGRAFIA, PORTUGUES, INGLES, FILOSOFIA, SOCIOLOGIA];

export const TOPICS: CurriculumTopic[] = ALL.flatMap((s) => s.topics);
export const CURRICULUM_ITEMS: StudyItem[] = ALL.flatMap((s) => s.items);
export const TOPIC_BY_ID: Record<string, CurriculumTopic> = Object.fromEntries(TOPICS.map((t) => [t.id, t]));

/** Subjects that have a high-school curriculum (per-subject modes). */
export const SCHOOL_SUBJECTS = ["matematica", "portugues", "fisica", "quimica", "biologia", "historia", "geografia", "ingles", "filosofia", "sociologia"] as const;

/** ENEM areas and the subjects in each. */
export const ENEM_AREAS = [
  { id: "linguagens", name: "Linguagens", subjects: ["portugues", "ingles"] },
  { id: "humanas", name: "Humanas", subjects: ["historia", "geografia", "filosofia", "sociologia"] },
  { id: "natureza", name: "Natureza", subjects: ["biologia", "fisica", "quimica"] },
  { id: "matematica", name: "Matemática", subjects: ["matematica"] },
] as const;

/** Typical school calendar: which months belong to each bimestre. */
export const MONTHS: { month: number; name: string; bimestre: Bimestre }[] = [
  { month: 2, name: "Fevereiro", bimestre: 1 }, { month: 3, name: "Março", bimestre: 1 }, { month: 4, name: "Abril", bimestre: 1 },
  { month: 5, name: "Maio", bimestre: 2 }, { month: 6, name: "Junho", bimestre: 2 }, { month: 7, name: "Julho", bimestre: 2 },
  { month: 8, name: "Agosto", bimestre: 3 }, { month: 9, name: "Setembro", bimestre: 3 },
  { month: 10, name: "Outubro", bimestre: 4 }, { month: 11, name: "Novembro", bimestre: 4 }, { month: 12, name: "Dezembro", bimestre: 4 },
];

export const bimestreOfMonth = (month: number): Bimestre => MONTHS.find((m) => m.month === month)?.bimestre ?? 1;

export function topicsWhere(f: { subjects?: readonly string[]; series?: readonly Serie[]; bimestres?: readonly Bimestre[] }): CurriculumTopic[] {
  return TOPICS.filter(
    (t) => (!f.subjects || f.subjects.includes(t.subject)) && (!f.series || f.series.includes(t.serie)) && (!f.bimestres || f.bimestres.includes(t.bimestre)),
  );
}

export function itemsForTopics(topicIds: readonly string[], extra: readonly StudyItem[] = []): StudyItem[] {
  const ids = new Set(topicIds);
  return [...CURRICULUM_ITEMS, ...extra].filter((i) => i.topicId && ids.has(i.topicId));
}
