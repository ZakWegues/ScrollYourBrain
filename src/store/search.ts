import { create } from "zustand";
import { persist } from "zustand/middleware";
import { persistStorage } from "./storage";

const MAX = 8;

interface SearchState {
  /** Most recent first. */
  recent: string[];
  add: (query: string) => void;
  remove: (query: string) => void;
  clear: () => void;
}

/** Search history shown under the Explore search box. */
export const useSearch = create<SearchState>()(
  persist(
    (set, get) => ({
      recent: [],
      add: (query) => {
        const q = query.trim();
        if (q.length < 2) return;
        set({ recent: [q, ...get().recent.filter((r) => r.toLowerCase() !== q.toLowerCase())].slice(0, MAX) });
      },
      remove: (query) => set({ recent: get().recent.filter((r) => r !== query) }),
      clear: () => set({ recent: [] }),
    }),
    { name: "syb-search", storage: persistStorage, version: 1 },
  ),
);
