import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { StudyItem } from "@/feed/types";
import { isDue, newSrs, schedule, type Grade, type SrsState } from "@/lib/srs";
import { persistStorage } from "./storage";

export interface ReviewCard {
  item: StudyItem;
  srs: SrsState;
  addedAt: number;
}

/** Only items with a clear right answer can be reviewed. */
export const reviewable = (item: StudyItem) => item.kind === "quiz" || item.kind === "flash";

interface ReviewState {
  cards: Record<string, ReviewCard>;
  /** Adds an item to the queue (due today). Returns false when it was already there. */
  add: (item: StudyItem) => boolean;
  remove: (id: string) => void;
  grade: (id: string, grade: Grade) => void;
  /** Feeds a quiz answer given anywhere in the app into the queue. */
  recordQuiz: (item: StudyItem, correct: boolean) => void;
  reset: () => void;
}

export const useReview = create<ReviewState>()(
  persist(
    (set, get) => ({
      cards: {},
      add: (item) => {
        if (!reviewable(item) || get().cards[item.id]) return false;
        set((s) => ({ cards: { ...s.cards, [item.id]: { item, srs: newSrs(), addedAt: Date.now() } } }));
        return true;
      },
      remove: (id) =>
        set((s) => {
          const cards = { ...s.cards };
          delete cards[id];
          return { cards };
        }),
      grade: (id, grade) =>
        set((s) => {
          const card = s.cards[id];
          return card ? { cards: { ...s.cards, [id]: { ...card, srs: schedule(card.srs, grade) } } } : s;
        }),
      recordQuiz: (item, correct) => {
        const card = get().cards[item.id];
        if (card) get().grade(item.id, correct ? "good" : "again");
        else if (!correct) get().add(item);
      },
      reset: () => set({ cards: {} }),
    }),
    { name: "syb-review", storage: persistStorage, version: 1 },
  ),
);

export const dueCards = (cards: Record<string, ReviewCard>, today: Date = new Date()) =>
  Object.values(cards)
    .filter((c) => isDue(c.srs, today))
    .sort((a, b) => a.srs.due.localeCompare(b.srs.due) || a.addedAt - b.addedAt);

/** Number of items due today, re-rendering as the queue changes. */
export const useDueCount = () => useReview((s) => dueCards(s.cards).length);
