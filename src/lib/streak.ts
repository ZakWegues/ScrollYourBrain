/** Days are keyed by the user's local calendar date, e.g. "2026-11-10". */
export const dayKey = (date: Date = new Date()): string => {
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${m}-${d}`;
};

const shift = (date: Date, days: number) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

/**
 * Consecutive days that reached the goal. A streak stays alive through today
 * even before today's goal is met, as long as yesterday counted.
 */
export function currentStreak(days: Readonly<Record<string, number>>, goal: number, today: Date = new Date()): number {
  const hit = (d: Date) => (days[dayKey(d)] ?? 0) >= goal;
  let cursor = hit(today) ? today : shift(today, -1);
  let streak = 0;
  while (hit(cursor)) {
    streak++;
    cursor = shift(cursor, -1);
  }
  return streak;
}

export interface DayStat {
  key: string;
  count: number;
  /** Short weekday label in Portuguese, e.g. "seg". */
  label: string;
  isToday: boolean;
}

const WEEKDAYS = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

/** The last `n` days, oldest first, ending today. */
export function lastNDays(days: Readonly<Record<string, number>>, n: number, today: Date = new Date()): DayStat[] {
  return Array.from({ length: n }, (_, i) => {
    const date = shift(today, i - n + 1);
    const key = dayKey(date);
    return { key, count: days[key] ?? 0, label: WEEKDAYS[date.getDay()], isToday: i === n - 1 };
  });
}
