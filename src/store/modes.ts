import { create } from "zustand";
import { persist } from "zustand/middleware";
import { modeKey, type ModeConfig } from "@/lib/modes";
import { persistStorage } from "./storage";

interface ModesState {
  /** Most recent study modes, newest first (max 6). */
  recent: ModeConfig[];
  /** Curriculum topics the user marked as mastered. */
  mastered: Record<string, number>;
  remember: (config: ModeConfig) => void;
  toggleMastered: (topicId: string) => boolean;
  reset: () => void;
}

export const useModes = create<ModesState>()(
  persist(
    (set, get) => ({
      recent: [],
      mastered: {},
      remember: (config) => {
        const key = modeKey(config);
        set((s) => ({ recent: [config, ...s.recent.filter((c) => modeKey(c) !== key)].slice(0, 6) }));
      },
      toggleMastered: (topicId) => {
        const now = !get().mastered[topicId];
        set((s) => {
          const mastered = { ...s.mastered };
          if (now) mastered[topicId] = Date.now();
          else delete mastered[topicId];
          return { mastered };
        });
        return now;
      },
      reset: () => set({ recent: [], mastered: {} }),
    }),
    { name: "syb-modes", storage: persistStorage, version: 1 },
  ),
);
