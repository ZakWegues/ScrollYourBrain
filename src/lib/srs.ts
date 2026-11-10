import { dayKey } from "./streak";

/** Spaced-repetition state of one item (a simplified SM-2). */
export interface SrsState {
  /** Ease factor, never below 1.3. */
  ease: number;
  /** Days until the next review. */
  interval: number;
  /** Successful reviews in a row. */
  reps: number;
  lapses: number;
  /** Local day key when the item is due again. */
  due: string;
}

export type Grade = "again" | "hard" | "good" | "easy";

export const GRADES: Grade[] = ["again", "hard", "good", "easy"];

export const newSrs = (today: Date = new Date()): SrsState => ({ ease: 2.5, interval: 0, reps: 0, lapses: 0, due: dayKey(today) });

const addDays = (date: Date, days: number) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

/** Next state after a review. "again" keeps the item due today so it comes back in the same session. */
export function schedule(state: SrsState, grade: Grade, today: Date = new Date()): SrsState {
  if (grade === "again") {
    return { ...state, ease: Math.max(1.3, state.ease - 0.2), interval: 0, reps: 0, lapses: state.lapses + 1, due: dayKey(today) };
  }
  const ease = Math.max(1.3, state.ease + (grade === "hard" ? -0.15 : grade === "easy" ? 0.15 : 0));
  let interval: number;
  if (state.reps === 0) interval = grade === "easy" ? 3 : 1;
  else if (state.reps === 1) interval = grade === "hard" ? 2 : grade === "easy" ? 5 : 3;
  else interval = state.interval * (grade === "hard" ? 1.2 : grade === "easy" ? ease * 1.3 : ease);
  interval = Math.max(1, Math.round(interval));
  return { ease, interval, reps: state.reps + 1, lapses: state.lapses, due: dayKey(addDays(today, interval)) };
}

export const isDue = (state: SrsState, today: Date = new Date()) => state.due <= dayKey(today);

/** Human label for how long until the next review after a grade, e.g. "agora", "1 dia", "2 sem". */
export function nextLabel(state: SrsState, grade: Grade, today: Date = new Date()): string {
  const next = schedule(state, grade, today);
  if (grade === "again") return "agora";
  const d = next.interval;
  if (d < 7) return `${d} ${d === 1 ? "dia" : "dias"}`;
  if (d < 30) return `${Math.round(d / 7)} sem`;
  if (d < 365) return `${Math.round(d / 30)} ${Math.round(d / 30) === 1 ? "mês" : "meses"}`;
  return `${Math.round(d / 365)} ano${Math.round(d / 365) > 1 ? "s" : ""}`;
}
