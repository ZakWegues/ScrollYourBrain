import type { QuizItem, StudyItem } from "@/feed/types";

/** Small stable hash (djb2) of a string. */
function hash(text: string): number {
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
  return h >>> 0;
}

/** The question of the day: the same for everyone with the same content on the same day. */
export function dailyQuestion(day: string, pool: readonly StudyItem[]): QuizItem | null {
  const quizzes = pool.filter((i): i is QuizItem => i.kind === "quiz" && i.question.length <= 160);
  if (quizzes.length === 0) return null;
  return quizzes[hash(`daily-${day}`) % quizzes.length];
}

/** Consecutive days (ending today or yesterday) on which the daily question was answered. */
export function dailyStreak(answered: Readonly<Record<string, unknown>>, today: Date = new Date()): number {
  const key = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const d = new Date(today);
  if (!answered[key(d)]) d.setDate(d.getDate() - 1);
  let n = 0;
  while (answered[key(d)]) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}
