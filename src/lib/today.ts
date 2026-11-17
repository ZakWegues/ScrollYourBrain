import { getPage, rootOf, SUB_PAGES } from "@/data/pages";
import type { PageId } from "@/feed/types";
import { countdownLabel } from "./planner";
import type { ActivityLog, TopicLog } from "./stats";
import { mastery } from "./xp";

/** Where a mission's "Começar" button goes. */
export type MissionRoute =
  | { pathname: "/review" }
  | { pathname: "/mistakes" }
  | { pathname: "/" }
  | { pathname: "/library" }
  | { pathname: "/final"; params: { exam: string } }
  | { pathname: "/lesson"; params: { page: string } };

export type MissionKind = "review" | "mistakes" | "daily" | "exam" | "weak" | "explore" | "goal";

export interface Mission {
  id: string;
  kind: MissionKind;
  title: string;
  detail: string;
  icon: string;
  done: number;
  total: number;
  route: MissionRoute;
}

export interface TodayInput {
  /** Review cards due now. */
  due: number;
  /** Reviews already done today. */
  reviewsToday: number;
  /** Mistakes not fixed yet, and mistakes fixed today. */
  pendingMistakes: number;
  fixedToday: number;
  dailyAnswered: boolean;
  goal: number;
  studiedToday: number;
  /** The nearest exam on the calendar (today or later). */
  nextExam?: { id: string; title: string; days: number; pageIds: PageId[] };
  /** Accounts the student gets wrong the most, weakest first. */
  weak: PageId[];
  /** Subjects picked in onboarding (root page ids). */
  interests: PageId[];
  log: ActivityLog;
  today: string;
}

const EXAM_WINDOW = 14;
const WEAK_TARGET = 8;
const EXPLORE_TARGET = 5;
const EXAM_TARGET = 10;

const isDone = (m: Mission) => m.done >= m.total;

/** Totals per account over the whole log. */
export function accountTotals(log: ActivityLog): Record<PageId, TopicLog> {
  const out: Record<PageId, TopicLog> = {};
  for (const day of Object.values(log)) {
    for (const [id, t] of Object.entries(day.topics ?? {})) {
      const acc = (out[id] ??= { studied: 0, answered: 0, correct: 0, seconds: 0 });
      acc.studied += t.studied;
      acc.answered += t.answered;
      acc.correct += t.correct;
      acc.seconds += t.seconds;
    }
  }
  return out;
}

/** Small stable hash, so "explore" suggestions change by day but not on every render. */
function hash(text: string): number {
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
  return h >>> 0;
}

/** The account of these subjects the student knows least (fewest answers, then lowest mastery). */
export function leastKnownAccount(subjects: readonly PageId[], totals: Record<PageId, TopicLog>, seed: string): PageId | undefined {
  const accounts = SUB_PAGES.filter((p) => subjects.includes(rootOf(p.id))).map((p) => p.id);
  if (accounts.length === 0) return undefined;
  const score = (id: PageId) => {
    const t = totals[id];
    return t ? mastery(t) * 10 + t.answered : 0;
  };
  const min = Math.min(...accounts.map(score));
  const tied = accounts.filter((id) => score(id) === min);
  return tied[hash(seed) % tied.length];
}

/** Answers today on accounts that pass the filter. */
const answeredToday = (log: ActivityLog, today: string, keep: (id: PageId) => boolean) =>
  Object.entries(log[today]?.topics ?? {}).reduce((n, [id, t]) => n + (keep(id) ? t.answered : 0), 0);

/**
 * Three missions for today, so the student never wonders what to study:
 * 1. memory (due reviews, else mistakes, else the question of the day);
 * 2. focus (the coming exam, else the weakest account, else an account not studied yet);
 * 3. the daily goal.
 */
export function planToday(i: TodayInput): Mission[] {
  const missions: Mission[] = [];

  // 1. Memory.
  if (i.due > 0 || i.reviewsToday > 0) {
    const total = Math.max(1, i.reviewsToday + i.due);
    missions.push({
      id: "review", kind: "review", icon: "history",
      title: i.due > 0 ? `Revisar ${i.due} ${i.due === 1 ? "card" : "cards"}` : "Revisão em dia",
      detail: i.due > 0 ? "Antes que você esqueça · poucos minutos" : `${i.reviewsToday} ${i.reviewsToday === 1 ? "revisão feita" : "revisões feitas"} hoje`,
      done: Math.min(i.reviewsToday, total), total, route: { pathname: "/review" },
    });
  } else if (i.pendingMistakes > 0 || i.fixedToday > 0) {
    const total = Math.min(5, i.pendingMistakes + i.fixedToday);
    missions.push({
      id: "mistakes", kind: "mistakes", icon: "alert-circle-outline",
      title: i.pendingMistakes > 0 ? "Refazer seus erros" : "Erros corrigidos",
      detail: i.pendingMistakes > 0 ? `${i.pendingMistakes} ${i.pendingMistakes === 1 ? "questão espera" : "questões esperam"} uma segunda chance` : "Caderno de erros zerado",
      done: Math.min(i.fixedToday, total), total, route: { pathname: "/mistakes" },
    });
  } else {
    missions.push({
      id: "daily", kind: "daily", icon: "help-circle-outline",
      title: "Pergunta do dia", detail: i.dailyAnswered ? "Respondida. Volte amanhã para outra" : "Uma questão nova por dia, na Biblioteca",
      done: i.dailyAnswered ? 1 : 0, total: 1, route: { pathname: "/library" },
    });
  }

  // 2. Focus.
  const exam = i.nextExam && i.nextExam.days >= 0 && i.nextExam.days <= EXAM_WINDOW ? i.nextExam : undefined;
  const totals = accountTotals(i.log);
  if (exam) {
    const subjects = exam.pageIds.map(rootOf);
    const target = leastKnownAccount(subjects, totals, i.today);
    const final = exam.days >= 1 && exam.days <= 7;
    missions.push({
      id: `exam-${exam.id}`, kind: "exam", icon: "calendar-star",
      title: `Preparar: ${exam.title}`,
      detail: `${countdownLabel(exam.days).replace(/^./, (ch) => ch.toUpperCase())} · ${EXAM_TARGET} questões da prova`,
      done: Math.min(EXAM_TARGET, answeredToday(i.log, i.today, (id) => subjects.includes(rootOf(id)))), total: EXAM_TARGET,
      route: final || !target ? { pathname: "/final", params: { exam: exam.id } } : { pathname: "/lesson", params: { page: target } },
    });
  } else if (i.weak.length > 0) {
    const id = i.weak[0];
    const t = totals[id];
    const acc = t?.answered ? Math.round((t.correct / t.answered) * 100) : 0;
    missions.push({
      id: `weak-${id}`, kind: "weak", icon: "arm-flex-outline",
      title: `Treinar ${getPage(id).name}`,
      detail: `Seu ponto fraco agora: ${acc}% de acerto`,
      done: Math.min(WEAK_TARGET, answeredToday(i.log, i.today, (x) => x === id)), total: WEAK_TARGET,
      route: { pathname: "/lesson", params: { page: id } },
    });
  } else {
    const subjects = i.interests.length > 0 ? i.interests : ["matematica", "biologia", "historia"];
    const id = leastKnownAccount(subjects, totals, i.today) ?? SUB_PAGES[0].id;
    missions.push({
      id: `explore-${id}`, kind: "explore", icon: "compass-outline",
      title: `Conhecer ${getPage(id).name}`,
      detail: "Uma aula rápida de um assunto novo para você",
      done: Math.min(EXPLORE_TARGET, answeredToday(i.log, i.today, (x) => x === id)), total: EXPLORE_TARGET,
      route: { pathname: "/lesson", params: { page: id } },
    });
  }

  // 3. The daily goal.
  missions.push({
    id: "goal", kind: "goal", icon: "fire",
    title: i.studiedToday >= i.goal ? "Meta batida!" : "Bater a meta do dia",
    detail: i.studiedToday >= i.goal ? "Sequência garantida hoje" : `Faltam ${i.goal - i.studiedToday} cards no feed`,
    done: Math.min(i.studiedToday, i.goal), total: i.goal, route: { pathname: "/" },
  });

  return missions;
}

/** How many of today's missions are complete. */
export const missionsDone = (missions: readonly Mission[]) => missions.filter(isDone).length;

/** The first mission still open, the one "Começar" should start. */
export const nextMission = (missions: readonly Mission[]) => missions.find((m) => !isDone(m));

export { isDone as missionDone };
