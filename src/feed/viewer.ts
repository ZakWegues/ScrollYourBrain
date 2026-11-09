import { create } from "zustand";
import type { StudyItem } from "./types";

/** Hands a fixed list of items to the full-screen viewer route. */
export const useViewer = create<{ items: StudyItem[]; start: number; title: string; open: (items: StudyItem[], start: number, title: string) => void }>()((set) => ({
  items: [],
  start: 0,
  title: "",
  open: (items, start, title) => set({ items, start, title }),
}));
