import { dayKey } from "./streak";

export interface TopicLog {
  studied: number;
  answered: number;
  correct: number;
  seconds: number;
}

export interface DayLog extends TopicLog {
  reviews: number;
  exams: number;
  focus: number;
  topics: Record<string, TopicLog>;
}

export type ActivityLog = Record<string, DayLog>;
export type Counter = "studied" | "answered" | "correct" | "seconds" | "reviews" | "exams" | "focus";
const TOPIC_COUNTERS = ["studied", "answered", "correct", "seconds"] as const;

const emptyTopic = (): TopicLog => ({ studied: 0, answered: 0, correct: 0, seconds: 0 });
export const emptyDay = (): DayLog => ({ ...emptyTopic(), reviews: 0, exams: 0, focus: 0, topics: {} });

/** Returns a new log with `amounts` added to `day` (and to the topic, for per-topic counters). */
export function bump(log: ActivityLog, day: string, pageId: string | undefined, amounts: Partial<Record<Counter, number>>): ActivityLog {
  const prev = log[day] ?? emptyDay();
  const next: DayLog = { ...prev, topics: { ...prev.topics } };
  for (const [key, value] of Object.entries(amounts) as [Counter, number][]) next[key] += value;
  if (pageId) {
    const topic = { ...(next.topics[pageId] ?? emptyTopic()) };
    for (const key of TOPIC_COUNTERS) topic[key] += amounts[key] ?? 0;
    next.topics[pageId] = topic;
  }
  return { ...log, [day]: next };
}

const shift = (date: Date, days: number) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

export interface TopicSummary extends TopicLog {
  pageId: string;
  accuracy: number | null;
}

export interface Summary extends TopicLog {
  reviews: number;
  exams: number;
  focus: number;
  activeDays: number;
  accuracy: number | null;
  topics: TopicSummary[];
  /** One entry per day of the range, oldest first. */
  daily: { key: string; studied: number; seconds: number }[];
}

/** Totals for the last `days` days ending today (`days = null` → everything logged). */
export function summarize(log: ActivityLog, days: number | null, today: Date = new Date()): Summary {
  const keys = Object.keys(log).sort();
  const first = keys[0] ? new Date(`${keys[0]}T12:00:00`) : today;
  const span = days ?? Math.max(1, Math.round((today.getTime() - first.getTime()) / 86_400_000) + 1);
  const out: Summary = { ...emptyTopic(), reviews: 0, exams: 0, focus: 0, activeDays: 0, accuracy: null, topics: [], daily: [] };
  const topics: Record<string, TopicLog> = {};
  for (let i = span - 1; i >= 0; i--) {
    const key = dayKey(shift(today, -i));
    const day = log[key];
    out.daily.push({ key, studied: day?.studied ?? 0, seconds: day?.seconds ?? 0 });
    if (!day) continue;
    if (day.studied > 0 || day.seconds > 0) out.activeDays++;
    for (const c of ["studied", "answered", "correct", "seconds", "reviews", "exams", "focus"] as const) out[c] += day[c];
    for (const [pageId, t] of Object.entries(day.topics)) {
      const acc = (topics[pageId] ??= emptyTopic());
      for (const c of TOPIC_COUNTERS) acc[c] += t[c];
    }
  }
  out.accuracy = out.answered ? Math.round((out.correct / out.answered) * 100) : null;
  out.topics = Object.entries(topics)
    .map(([pageId, t]) => ({ pageId, ...t, accuracy: t.answered ? Math.round((t.correct / t.answered) * 100) : null }))
    .sort((a, b) => b.seconds - a.seconds || b.studied - a.studied);
  return out;
}

/** Calendar grid for a heatmap: `weeks` columns (Monday first), each with 7 days; future days are null. */
export function heatmap(log: ActivityLog, weeks: number, today: Date = new Date()): ({ key: string; studied: number } | null)[][] {
  const weekday = (today.getDay() + 6) % 7; // Monday = 0
  const start = shift(today, -weekday - (weeks - 1) * 7);
  return Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const date = shift(start, w * 7 + d);
      if (date > today) return null;
      const key = dayKey(date);
      return { key, studied: log[key]?.studied ?? 0 };
    }),
  );
}

/** "1 h 05 min", "12 min", "45 s". */
export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${Math.round(seconds)} s`;
  const m = Math.round(seconds / 60);
  if (m < 60) return `${m} min`;
  return `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, "0")} min`;
}
