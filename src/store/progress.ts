import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { StudyItem } from "@/feed/types";
import { bump, type ActivityLog, type Counter } from "@/lib/stats";
import { currentStreak, dayKey } from "@/lib/streak";
import { useLibrary } from "./library";
import { persistStorage } from "./storage";
import { useSettings } from "./settings";

interface ProgressState {
  /** Cards studied per local day. */
  days: Record<string, number>;
  bestStreak: number;
  /** Day on which the "goal reached" celebration was last shown. */
  celebratedOn?: string;
  /** Best exam score (0–100) per page id, or "all". */
  examBest: Record<string, number>;
  /** Detailed per-day activity, the source for statistics and weekly challenges. */
  log: ActivityLog;
  /** Unlocked achievement id → timestamp. */
  achievements: Record<string, number>;
  /** Week key → ids of missions already completed (and celebrated). */
  challenges: Record<string, string[]>;
  /** Counts one studied card for today. Returns true when this card completed today's goal. */
  recordStudy: (pageId?: string) => boolean;
  logEvent: (pageId: string | undefined, amounts: Partial<Record<Counter, number>>) => void;
  markCelebrated: () => void;
  recordExam: (key: string, score: number) => boolean;
  reset: () => void;
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      days: {},
      bestStreak: 0,
      examBest: {},
      log: {},
      achievements: {},
      challenges: {},
      recordStudy: (pageId) => {
        const today = dayKey();
        const goal = useSettings.getState().dailyGoal;
        const count = (get().days[today] ?? 0) + 1;
        const days = { ...get().days, [today]: count };
        set({ days, bestStreak: Math.max(get().bestStreak, currentStreak(days, goal)), log: bump(get().log, today, pageId, { studied: 1 }) });
        return count === goal;
      },
      logEvent: (pageId, amounts) => set({ log: bump(get().log, dayKey(), pageId, amounts) }),
      markCelebrated: () => set({ celebratedOn: dayKey() }),
      recordExam: (key, score) => {
        const best = score > (get().examBest[key] ?? -1);
        if (best) set({ examBest: { ...get().examBest, [key]: score } });
        return best;
      },
      reset: () => set({ days: {}, bestStreak: 0, celebratedOn: undefined, examBest: {}, log: {}, achievements: {}, challenges: {} }),
    }),
    {
      name: "syb-progress",
      storage: persistStorage,
      version: 2,
      // v1 only counted cards per day; seed the activity log from those counts.
      migrate: (persisted) => {
        const old = (persisted ?? {}) as { days?: Record<string, number> };
        let log: ActivityLog = {};
        for (const [day, n] of Object.entries(old.days ?? {})) log = bump(log, day, undefined, { studied: n });
        return { achievements: {}, challenges: {}, ...(persisted as object), log } as never;
      },
    },
  ),
);

/** Today's count, the goal and the live streak, re-rendering when any of them change. */
export function useToday() {
  const days = useProgress((s) => s.days);
  const goal = useSettings((s) => s.dailyGoal);
  const count = days[dayKey()] ?? 0;
  return { count, goal, streak: currentStreak(days, goal), done: count >= goal };
}

/** Drives the one-off "goal reached" overlay. */
export const useCelebration = create<{ visible: boolean; hide: () => void }>()((set) => ({
  visible: false,
  hide: () => set({ visible: false }),
}));

/** Counts a studied card and shows the celebration the first time today's goal is reached. */
export function countStudy(pageId?: string) {
  const progress = useProgress.getState();
  const reached = progress.recordStudy(pageId);
  if (reached && progress.celebratedOn !== dayKey()) {
    progress.markCelebrated();
    useCelebration.setState({ visible: true });
  }
}

/** Records a quiz answer everywhere it matters: overall quiz stats and the per-topic log. */
export function trackAnswer(item: StudyItem, correct: boolean) {
  useLibrary.getState().recordAnswer(correct);
  useProgress.getState().logEvent(item.pageId, { answered: 1, correct: correct ? 1 : 0 });
}

const MAX_CARD_SECONDS = 180;

/** Adds time spent on a card to today's log, capped so an idle screen does not count. */
export function trackTime(pageId: string, ms: number) {
  const seconds = Math.min(Math.round(ms / 1000), MAX_CARD_SECONDS);
  if (seconds > 0) useProgress.getState().logEvent(pageId, { seconds });
}
