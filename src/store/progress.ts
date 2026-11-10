import { create } from "zustand";
import { persist } from "zustand/middleware";
import { currentStreak, dayKey } from "@/lib/streak";
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
  /** Counts one studied card for today. Returns true when this card completed today's goal. */
  recordStudy: () => boolean;
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
      recordStudy: () => {
        const today = dayKey();
        const goal = useSettings.getState().dailyGoal;
        const count = (get().days[today] ?? 0) + 1;
        const days = { ...get().days, [today]: count };
        set({ days, bestStreak: Math.max(get().bestStreak, currentStreak(days, goal)) });
        return count === goal;
      },
      markCelebrated: () => set({ celebratedOn: dayKey() }),
      recordExam: (key, score) => {
        const best = score > (get().examBest[key] ?? -1);
        if (best) set({ examBest: { ...get().examBest, [key]: score } });
        return best;
      },
      reset: () => set({ days: {}, bestStreak: 0, celebratedOn: undefined, examBest: {} }),
    }),
    { name: "syb-progress", storage: persistStorage, version: 1 },
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
export function countStudy() {
  const progress = useProgress.getState();
  const reached = progress.recordStudy();
  if (reached && progress.celebratedOn !== dayKey()) {
    progress.markCelebrated();
    useCelebration.setState({ visible: true });
  }
}
