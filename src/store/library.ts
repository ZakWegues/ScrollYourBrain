import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PageId, StudyItem, VideoItem } from "@/feed/types";
import { persistStorage } from "./storage";

export interface Snapshot {
  item: StudyItem;
  at: number;
}

interface QuizStats {
  answered: number;
  correct: number;
  streak: number;
  best: number;
}

interface LibraryData {
  liked: Record<string, Snapshot>;
  saved: Record<string, Snapshot>;
  followed: Record<PageId, number>;
  pageLikes: Record<PageId, number>;
  pageSkips: Record<PageId, number>;
  quiz: QuizStats;
  customVideos: VideoItem[];
}

export interface LibraryState extends LibraryData {
  toggleLike: (item: StudyItem) => boolean;
  toggleSave: (item: StudyItem) => boolean;
  toggleFollow: (pageId: PageId) => boolean;
  recordSkip: (pageId: PageId) => void;
  recordAnswer: (correct: boolean) => void;
  addCustomVideo: (video: VideoItem) => void;
  removeCustomVideo: (id: string) => void;
  clearHistory: () => void;
  reset: () => void;
}

const empty: LibraryData = {
  liked: {},
  saved: {},
  followed: {},
  pageLikes: {},
  pageSkips: {},
  quiz: { answered: 0, correct: 0, streak: 0, best: 0 },
  customVideos: [],
};

const without = <T,>(record: Record<string, T>, key: string) => {
  const next = { ...record };
  delete next[key];
  return next;
};

export const useLibrary = create<LibraryState>()(
  persist(
    (set, get) => ({
      ...empty,
      toggleLike: (item) => {
        const liked = !get().liked[item.id];
        set((s) => ({
          liked: liked ? { ...s.liked, [item.id]: { item, at: Date.now() } } : without(s.liked, item.id),
          pageLikes: { ...s.pageLikes, [item.pageId]: Math.max(0, (s.pageLikes[item.pageId] ?? 0) + (liked ? 1 : -1)) },
        }));
        return liked;
      },
      toggleSave: (item) => {
        const saved = !get().saved[item.id];
        set((s) => ({ saved: saved ? { ...s.saved, [item.id]: { item, at: Date.now() } } : without(s.saved, item.id) }));
        return saved;
      },
      toggleFollow: (pageId) => {
        const following = !get().followed[pageId];
        set((s) => ({ followed: following ? { ...s.followed, [pageId]: Date.now() } : without(s.followed, pageId) }));
        return following;
      },
      recordSkip: (pageId) => set((s) => ({ pageSkips: { ...s.pageSkips, [pageId]: (s.pageSkips[pageId] ?? 0) + 1 } })),
      recordAnswer: (correct) =>
        set(({ quiz }) => {
          const streak = correct ? quiz.streak + 1 : 0;
          return {
            quiz: { answered: quiz.answered + 1, correct: quiz.correct + (correct ? 1 : 0), streak, best: Math.max(quiz.best, streak) },
          };
        }),
      addCustomVideo: (video) =>
        set((s) => ({ customVideos: [video, ...s.customVideos.filter((v) => v.youtubeId !== video.youtubeId)] })),
      removeCustomVideo: (id) => set((s) => ({ customVideos: s.customVideos.filter((v) => v.id !== id) })),
      clearHistory: () => set({ pageLikes: {}, pageSkips: {}, quiz: empty.quiz }),
      reset: () => set(empty),
    }),
    { name: "syb-library", storage: persistStorage, version: 1 },
  ),
);
