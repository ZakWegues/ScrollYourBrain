import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { VideoItem } from "@/feed/types";
import { persistStorage } from "./storage";

interface WatchLaterState {
  /** Video id → the video and when it was added. */
  items: Record<string, { item: VideoItem; at: number }>;
  /** Adds or removes a video; returns true when it is now on the list. */
  toggle: (item: VideoItem) => boolean;
  remove: (id: string) => void;
  reset: () => void;
}

/** "Assistir depois": videos kept to watch calmly later, in the in-app player. */
export const useWatchLater = create<WatchLaterState>()(
  persist(
    (set, get) => ({
      items: {},
      toggle: (item) => {
        const on = !get().items[item.id];
        set((s) => {
          const items = { ...s.items };
          if (on) items[item.id] = { item, at: Date.now() };
          else delete items[item.id];
          return { items };
        });
        return on;
      },
      remove: (id) =>
        set((s) => {
          const items = { ...s.items };
          delete items[id];
          return { items };
        }),
      reset: () => set({ items: {} }),
    }),
    { name: "syb-watchlater", storage: persistStorage, version: 1 },
  ),
);

export { watchLaterList } from "@/lib/watchLater";
