import { dayKey } from "./streak";

export interface PlannedExam {
  id: string;
  title: string;
  /** Local day key of the exam. */
  date: string;
  pageIds: string[];
  createdAt: number;
}

/** Whole days from today until the exam (0 = today, negative = past). */
export function daysUntil(date: string, today: Date = new Date()): number {
  const a = new Date(`${dayKey(today)}T12:00:00`).getTime();
  const b = new Date(`${date}T12:00:00`).getTime();
  return Math.round((b - a) / 86_400_000);
}

/**
 * Cards per day to go through the material about twice before the exam,
 * kept between 5 and 40 so the plan stays realistic.
 */
export function suggestedDaily(materialCards: number, days: number): number {
  if (days <= 0) return Math.min(40, Math.max(5, materialCards));
  return Math.min(40, Math.max(5, Math.ceil((materialCards * 2) / days)));
}

export const addDays = (date: Date, n: number) => {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
};

export function countdownLabel(days: number): string {
  if (days < 0) return "já passou";
  if (days === 0) return "é hoje!";
  if (days === 1) return "é amanhã";
  return `faltam ${days} dias`;
}
