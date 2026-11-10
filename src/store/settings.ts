import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ThemeMode } from "@/theme";
import type { PageId } from "@/feed/types";
import { persistStorage } from "./storage";

export interface SettingsState {
  theme: ThemeMode;
  autoplay: boolean;
  startMuted: boolean;
  haptics: boolean;
  dataSaver: boolean;
  reduceMotion: boolean;
  interests: PageId[];
  /** Cards per day that count toward the streak. */
  dailyGoal: number;
  /** First-launch onboarding finished. */
  onboarded: boolean;
  set: (patch: Partial<Omit<SettingsState, "set" | "toggleInterest" | "reset">>) => void;
  toggleInterest: (id: PageId) => void;
  reset: () => void;
}

const defaults = {
  theme: "amoled" as ThemeMode,
  autoplay: true,
  startMuted: false,
  haptics: true,
  dataSaver: false,
  reduceMotion: false,
  interests: [] as PageId[],
  dailyGoal: 10,
  onboarded: false,
};

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      ...defaults,
      set: (patch) => set(patch),
      toggleInterest: (id) =>
        set((s) => ({ interests: s.interests.includes(id) ? s.interests.filter((i) => i !== id) : [...s.interests, id] })),
      // Keep the user past onboarding after a reset; only preferences go back to defaults.
      reset: () => set({ ...defaults, onboarded: true }),
    }),
    {
      name: "syb-settings",
      storage: persistStorage,
      version: 2,
      // v1 had no goal or onboarding flag; existing users keep their settings and see onboarding once.
      migrate: (persisted) => ({ ...defaults, ...(persisted as object) }),
    },
  ),
);
