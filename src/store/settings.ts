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
  /** Text size multiplier (1, 1.15 or 1.3). */
  textScale: number;
  highContrast: boolean;
  /** Read each card aloud when it appears. */
  autoSpeak: boolean;
  /** Daily reminder time as minutes after midnight, or null when off. */
  reminder: number | null;
  /** Ensino médio série (1, 2 or 3); null shows content from every série. */
  serie: 1 | 2 | 3 | null;
  /** Curriculum topics the student's school covers; null follows the série's default. */
  myTopics: string[] | null;
  /** How many gesture hints were shown (they stop after a few). */
  hintsShown: number;
  /** Saving a quiz or flashcard also adds it to spaced review. */
  saveToReview: boolean;
  /** How often videos show up in the feed. */
  videoFrequency: VideoFrequency;
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
  textScale: 1,
  highContrast: false,
  autoSpeak: false,
  reminder: null as number | null,
  serie: null as 1 | 2 | 3 | null,
  myTopics: null as string[] | null,
  hintsShown: 0,
  saveToReview: true,
  videoFrequency: "balanced" as VideoFrequency,
};

export type VideoFrequency = "more" | "balanced" | "less";
/** A video at least every N cards. */
export const VIDEO_EVERY: Record<VideoFrequency, number> = { more: 2, balanced: 3, less: 6 };

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
      version: 5,
      // v1 had no goal or onboarding flag; existing users keep their settings and see onboarding once.
      migrate: (persisted) => ({ ...defaults, ...(persisted as object) }),
    },
  ),
);
