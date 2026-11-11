import { ENEM_AREAS, MONTHS, TOPIC_BY_ID, bimestreOfMonth, itemsForTopics, topicsWhere, type Bimestre, type CurriculumTopic, type Serie } from "@/data/curriculum";
import { getPage } from "@/data/pages";
import { MACETES } from "@/data/macetes";
import type { StudyItem } from "@/feed/types";

export type ModeKind = "enem" | "vestibular" | "anual" | "bimestral" | "mensal" | "atividade";

export interface ModeConfig {
  kind: ModeKind;
  subject?: string;
  serie?: Serie;
  bimestre?: Bimestre;
  month?: number;
  topicId?: string;
  /** ENEM area filter ("linguagens", "humanas", …); undefined = all areas. */
  area?: string;
  /** Custom mode: exactly these curriculum topics, from any subjects and séries. */
  topicIds?: string[];
  /** Optional name for a saved custom mode ("Prova de sexta"). */
  name?: string;
}

export const isCustom = (c: ModeConfig) => Array.isArray(c.topicIds);

export interface ModeInfo {
  title: string;
  icon: string;
  description: string;
  /** Per-subject modes need a subject and a série. */
  perSubject: boolean;
  /** Default exam length and seconds per question for the practice exam. */
  examCount: number;
  secondsPerQuestion: number;
  colors: readonly [string, string];
}

export const MODE_INFO: Record<ModeKind, ModeInfo> = {
  enem: { title: "ENEM", icon: "school", description: "As 4 áreas, conteúdo dos 3 anos e macetes", perSubject: false, examCount: 45, secondsPerQuestion: 180, colors: ["#2563EB", "#22D3EE"] },
  vestibular: { title: "Vestibular", icon: "bank", description: "Faculdade: todas as matérias do ensino médio", perSubject: false, examCount: 30, secondsPerQuestion: 180, colors: ["#7C3AED", "#EC4899"] },
  anual: { title: "Prova anual", icon: "calendar-text", description: "Uma matéria, o ano inteiro", perSubject: true, examCount: 20, secondsPerQuestion: 120, colors: ["#0EA5E9", "#6366F1"] },
  bimestral: { title: "Prova bimestral", icon: "calendar-range", description: "Uma matéria, um bimestre", perSubject: true, examCount: 15, secondsPerQuestion: 120, colors: ["#10B981", "#14B8A6"] },
  mensal: { title: "Prova mensal", icon: "calendar-month", description: "Uma matéria, o conteúdo do mês", perSubject: true, examCount: 10, secondsPerQuestion: 120, colors: ["#F59E0B", "#EF4444"] },
  atividade: { title: "Atividade", icon: "pencil-box-outline", description: "Um assunto, exercícios rápidos", perSubject: true, examCount: 5, secondsPerQuestion: 90, colors: ["#F43F5E", "#A855F7"] },
};

export const MODE_ORDER: ModeKind[] = ["enem", "vestibular", "anual", "bimestral", "mensal", "atividade"];

/** Whether the config has everything the mode needs to start. */
export function isComplete(c: ModeConfig): boolean {
  if (isCustom(c)) return c.topicIds!.length > 0;
  if (!MODE_INFO[c.kind].perSubject) return true;
  if (!c.subject || !c.serie) return false;
  if (c.kind === "bimestral") return !!c.bimestre;
  if (c.kind === "mensal") return !!c.month;
  if (c.kind === "atividade") return !!c.topicId;
  return true;
}

export function modeTopics(c: ModeConfig): CurriculumTopic[] {
  if (isCustom(c)) return c.topicIds!.map((id) => TOPIC_BY_ID[id]).filter(Boolean);
  switch (c.kind) {
    case "enem": {
      const area = ENEM_AREAS.find((a) => a.id === c.area);
      return topicsWhere({ subjects: area ? area.subjects : undefined });
    }
    case "vestibular":
      return topicsWhere({});
    case "anual":
      return topicsWhere({ subjects: [c.subject!], series: [c.serie!] });
    case "bimestral":
      return topicsWhere({ subjects: [c.subject!], series: [c.serie!], bimestres: [c.bimestre!] });
    case "mensal":
      return topicsWhere({ subjects: [c.subject!], series: [c.serie!], bimestres: [bimestreOfMonth(c.month!)] });
    case "atividade":
      return c.topicId && TOPIC_BY_ID[c.topicId] ? [TOPIC_BY_ID[c.topicId]] : [];
  }
}

/** Cards in scope; ENEM and vestibular also bring the exam tips. `extra` adds the user's own cards. */
export function modeItems(c: ModeConfig, extra: readonly StudyItem[] = []): StudyItem[] {
  const items = itemsForTopics(modeTopics(c).map((t) => t.id), extra);
  return c.kind === "enem" || c.kind === "vestibular" ? [...items, ...MACETES] : items;
}

export function modeTitle(c: ModeConfig): { title: string; subtitle: string } {
  const info = MODE_INFO[c.kind];
  if (isCustom(c)) {
    const topics = modeTopics(c);
    const subjects = [...new Set(topics.map((t) => t.subject))];
    const what = subjects.length === 1 ? getPage(subjects[0]).name : `${subjects.length} matérias`;
    return { title: `${info.title} · ${c.name?.trim() || "Personalizada"}`, subtitle: `${what} · ${topics.length} ${topics.length === 1 ? "assunto" : "assuntos"}` };
  }
  if (!info.perSubject) {
    const area = ENEM_AREAS.find((a) => a.id === c.area);
    return { title: info.title, subtitle: area ? area.name : c.kind === "enem" ? "Todas as áreas" : "Todas as matérias" };
  }
  const subject = c.subject ? getPage(c.subject).name : "";
  const serie = c.serie ? `${c.serie}º ano` : "";
  const detail =
    c.kind === "bimestral" ? `${c.bimestre}º bimestre` :
    c.kind === "mensal" ? MONTHS.find((m) => m.month === c.month)?.name ?? "" :
    c.kind === "atividade" ? TOPIC_BY_ID[c.topicId ?? ""]?.name ?? "" :
    "Ano todo";
  return { title: `${info.title} · ${subject}`, subtitle: [serie, detail].filter(Boolean).join(" · ") };
}

/** Stable key for records and recents. */
export const modeKey = (c: ModeConfig) =>
  isCustom(c)
    ? `${c.kind}:custom:${hash([...c.topicIds!].sort().join(","))}`
    : [c.kind, c.area, c.subject, c.serie, c.bimestre, c.month, c.topicId].filter((x) => x !== undefined).join(":");

/** Small stable string hash (djb2), so keys stay short. */
function hash(text: string): string {
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}
