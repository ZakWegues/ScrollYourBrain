import { create } from "zustand";
import { persist } from "zustand/middleware";
import { persistStorage } from "./storage";

interface ResumeState {
  /** The "Para você" card on screen and the next few, so the feed reopens where you left off. */
  forYou: string[];
  setForYou: (ids: string[]) => void;
}

export const useResume = create<ResumeState>()(
  persist(
    (set) => ({
      forYou: [],
      setForYou: (ids) => set({ forYou: ids }),
    }),
    { name: "syb-resume", storage: persistStorage, version: 1 },
  ),
);
