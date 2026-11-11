import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { QuizItem } from "@/feed/types";
import { persistStorage } from "./storage";

export interface Mistake {
  item: QuizItem;
  /** How many times it was answered wrong. */
  wrong: number;
  lastAt: number;
  /** Answered right after being wrong. */
  fixed: boolean;
}

interface MistakesState {
  items: Record<string, Mistake>;
  record: (item: QuizItem, correct: boolean) => void;
  remove: (id: string) => void;
  clearFixed: () => void;
  reset: () => void;
}

/** Every question answered wrong, kept until it is answered right ("caderno de erros"). */
export const useMistakes = create<MistakesState>()(
  persist(
    (set, get) => ({
      items: {},
      record: (item, correct) => {
        const prev = get().items[item.id];
        if (correct && !prev) return;
        const next: Mistake = correct ? { ...prev!, fixed: true, lastAt: Date.now() } : { item, wrong: (prev?.wrong ?? 0) + 1, lastAt: Date.now(), fixed: false };
        set((s) => ({ items: { ...s.items, [item.id]: next } }));
      },
      remove: (id) =>
        set((s) => {
          const items = { ...s.items };
          delete items[id];
          return { items };
        }),
      clearFixed: () => set((s) => ({ items: Object.fromEntries(Object.entries(s.items).filter(([, m]) => !m.fixed)) })),
      reset: () => set({ items: {} }),
    }),
    { name: "syb-mistakes", storage: persistStorage, version: 1 },
  ),
);

export const pendingMistakes = (items: Record<string, Mistake>) =>
  Object.values(items).filter((m) => !m.fixed).sort((a, b) => b.lastAt - a.lastAt);
