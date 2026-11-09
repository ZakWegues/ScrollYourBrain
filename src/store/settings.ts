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
};

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      ...defaults,
      set: (patch) => set(patch),
      toggleInterest: (id) =>
        set((s) => ({ interests: s.interests.includes(id) ? s.interests.filter((i) => i !== id) : [...s.interests, id] })),
      reset: () => set(defaults),
    }),
    { name: "syb-settings", storage: persistStorage, version: 1 },
  ),
);
