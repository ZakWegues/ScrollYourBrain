import { create } from "zustand";
import { persist } from "zustand/middleware";
import { persistStorage } from "./storage";

interface DailyState {
  /** Day key → answered right. */
  answered: Record<string, boolean>;
  answer: (day: string, correct: boolean) => void;
  reset: () => void;
}

/** Answers to the question of the day. */
export const useDaily = create<DailyState>()(
  persist(
    (set) => ({
      answered: {},
      answer: (day, correct) => set((s) => (day in s.answered ? s : { answered: { ...s.answered, [day]: correct } })),
      reset: () => set({ answered: {} }),
    }),
    { name: "syb-daily", storage: persistStorage, version: 1 },
  ),
);
