import { createRng } from "@/feed/sources/generators";
import type { ActivityLog } from "./stats";
import { dayKey } from "./streak";

/** Weeks start on Monday; a week is identified by its Monday's day key. */
export function weekKey(date: Date = new Date()): string {
  const d = new Date(date);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return dayKey(d);
}

export function weekDays(key: string): string[] {
  const monday = new Date(`${key}T12:00:00`);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(d.getDate() + i);
    return dayKey(d);
  });
}

export interface Mission {
  id: string;
  label: string;
  icon: string;
  target: number;
  /** Progress from the week's activity log and per-day studied counts. */
  measure: (log: ActivityLog, days: Record<string, number>, goal: number, week: string[]) => number;
}

const sum = (log: ActivityLog, week: string[], pick: (d: ActivityLog[string]) => number) => week.reduce((n, k) => n + (log[k] ? pick(log[k]) : 0), 0);

const QUIZ_TOPICS: [string, string][] = [["matematica", "Matemática"], ["geografia", "Geografia"], ["quimica", "Química"], ["programacao", "Programação"]];

type Template = (rng: () => number) => Mission;

const TEMPLATES: Template[] = [
  (rng) => {
    const n = [40, 60, 80][Math.floor(rng() * 3)];
    return { id: `study-${n}`, label: `Estude ${n} cards`, icon: "cards-outline", target: n, measure: (log, _d, _g, w) => sum(log, w, (d) => d.studied) };
  },
  (rng) => {
    const n = [15, 25][Math.floor(rng() * 2)];
    return { id: `correct-${n}`, label: `Acerte ${n} quizzes`, icon: "check-circle-outline", target: n, measure: (log, _d, _g, w) => sum(log, w, (d) => d.correct) };
  },
  (rng) => {
    const [id, name] = QUIZ_TOPICS[Math.floor(rng() * QUIZ_TOPICS.length)];
    return { id: `topic-${id}`, label: `Acerte 10 quizzes de ${name}`, icon: "target", target: 10, measure: (log, _d, _g, w) => sum(log, w, (d) => d.topics[id]?.correct ?? 0) };
  },
  (rng) => {
    const n = [10, 20][Math.floor(rng() * 2)];
    return { id: `review-${n}`, label: `Revise ${n} cards`, icon: "history", target: n, measure: (log, _d, _g, w) => sum(log, w, (d) => d.reviews) };
  },
  (rng) => {
    const n = 1 + Math.floor(rng() * 2);
    return { id: `exam-${n}`, label: n === 1 ? "Termine 1 prova" : `Termine ${n} provas`, icon: "timer-outline", target: n, measure: (log, _d, _g, w) => sum(log, w, (d) => d.exams) };
  },
  (rng) => {
    const n = [3, 4, 5][Math.floor(rng() * 3)];
    return { id: `goal-${n}`, label: `Bata a meta em ${n} dias`, icon: "fire", target: n, measure: (_l, days, goal, w) => w.filter((k) => (days[k] ?? 0) >= goal).length };
  },
  (rng) => {
    const n = [30, 60][Math.floor(rng() * 2)];
    return { id: `minutes-${n}`, label: `Estude ${n} minutos`, icon: "clock-outline", target: n, measure: (log, _d, _g, w) => Math.floor(sum(log, w, (d) => d.seconds) / 60) };
  },
];

const hash = (s: string) => [...s].reduce((h, ch) => (Math.imul(h, 31) + ch.charCodeAt(0)) >>> 0, 7);

/** Three different missions for the week, the same for everyone on any device. */
export function missionsFor(week: string): Mission[] {
  const rng = createRng(hash(week));
  const order = TEMPLATES.map((t, i) => [i, rng()] as const).sort((a, b) => a[1] - b[1]).slice(0, 3).map(([i]) => i);
  return order.map((i) => TEMPLATES[i](rng));
}
