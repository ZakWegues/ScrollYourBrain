import { addDays } from "./planner";
import { dayKey } from "./streak";

export type FinalAction = "study" | "review" | "weak" | "mistakes" | "exam" | "macetes" | "rest";

export interface FinalTask {
  id: string;
  /** Local day key (YYYY-MM-DD). */
  day: string;
  /** Days before the exam (7…1). */
  before: number;
  title: string;
  detail: string;
  action: FinalAction;
}

const STEPS: { before: number; title: string; detail: string; action: FinalAction }[] = [
  { before: 7, title: "Mapear os assuntos", detail: "Estude o conteúdo da prova pelo feed e marque o que já domina.", action: "study" },
  { before: 6, title: "Revisão espaçada", detail: "Revise os cards que vencem hoje e os salvos da matéria.", action: "review" },
  { before: 5, title: "Mais estudo dirigido", detail: "Volte aos assuntos que ainda não marcou como dominados.", action: "study" },
  { before: 4, title: "Pontos fracos", detail: "Simulado com as contas em que você mais erra.", action: "weak" },
  { before: 3, title: "Caderno de erros", detail: "Refaça as questões que errou até acertar.", action: "mistakes" },
  { before: 2, title: "Simulado completo", detail: "Faça a prova inteira no tempo, como no dia.", action: "exam" },
  { before: 1, title: "Macetes e descanso", detail: "Leia os macetes, separe o material e durma cedo.", action: "macetes" },
];

/** A day-by-day plan for the last week before an exam. Days already past are dropped. */
export function finalPlan(examId: string, examDate: string, today: Date = new Date()): FinalTask[] {
  const exam = new Date(`${examDate}T12:00:00`);
  const todayKey = dayKey(today);
  return STEPS.map((s) => {
    const day = dayKey(addDays(exam, -s.before));
    return { id: `${examId}:${s.before}`, day, before: s.before, title: s.title, detail: s.detail, action: s.action };
  }).filter((t) => t.day >= todayKey);
}
