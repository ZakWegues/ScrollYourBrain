import { create } from "zustand";
import { persist } from "zustand/middleware";
import { persistStorage } from "./storage";

/** 1 = seen, 2 = answered right once, 3 = answered right twice or more. */
export type SeenLevel = 1 | 2 | 3;

/** Generated cards get fresh ids every time; only bundled and saved cards are worth remembering. */
const remembers = (id: string) => !id.startsWith("gen-") && !id.startsWith("g-");
const LIMIT = 12_000;

interface SeenState {
  seen: Record<string, SeenLevel>;
  markSeen: (id: string) => void;
  markRight: (id: string) => void;
  reset: () => void;
}

/** Which cards the student has already met, so the feed can show new ones first. */
export const useSeen = create<SeenState>()(
  persist(
    (set, get) => ({
      seen: {},
      markSeen: (id) => {
        if (!remembers(id) || get().seen[id]) return;
        set((s) => ({ seen: trim({ ...s.seen, [id]: 1 }) }));
      },
      markRight: (id) => {
        if (!remembers(id)) return;
        const prev = get().seen[id] ?? 1;
        const next = Math.min(3, prev + 1) as SeenLevel;
        if (next !== get().seen[id]) set((s) => ({ seen: trim({ ...s.seen, [id]: next }) }));
      },
      reset: () => set({ seen: {} }),
    }),
    { name: "syb-seen", storage: persistStorage, version: 1 },
  ),
);

/** Keeps the record bounded: past the limit, the oldest entries go (objects keep insertion order). */
function trim(seen: Record<string, SeenLevel>): Record<string, SeenLevel> {
  const keys = Object.keys(seen);
  if (keys.length <= LIMIT) return seen;
  return Object.fromEntries(keys.slice(keys.length - LIMIT).map((k) => [k, seen[k]]));
}
