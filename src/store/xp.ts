import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "@/components/Toast";
import { haptic } from "@/lib/haptics";
import { XP_FOR, levelInfo, rewardsBetween, type XpEvent } from "@/lib/xp";
import { persistStorage } from "./storage";

interface XpState {
  xp: number;
  /** Best lightning-quiz score (correct answers in 60 s). */
  blitzBest: number;
  /** "event:itemId" already rewarded, so toggling like/save on and off does not farm XP. */
  once: Record<string, 1>;
  counts: Partial<Record<XpEvent, number>>;
  reset: () => void;
}

export const useXp = create<XpState>()(
  persist(
    (set) => ({
      xp: 0,
      blitzBest: 0,
      once: {},
      counts: {},
      reset: () => set({ xp: 0, counts: {}, blitzBest: 0, once: {} }),
    }),
    { name: "syb-xp", storage: persistStorage, version: 1 },
  ),
);

/** Awards an event only the first time for a given item (likes and saves). */
export function awardXpOnce(event: XpEvent, itemId: string) {
  const key = `${event}:${itemId}`;
  if (useXp.getState().once[key]) return;
  useXp.setState((s) => ({ once: { ...s.once, [key]: 1 } }));
  awardXp(event);
}

/** Adds XP for an event and celebrates level-ups and their rewards. */
export function awardXp(event: XpEvent, times = 1) {
  const { xp, counts } = useXp.getState();
  const gained = XP_FOR[event] * times;
  const before = levelInfo(xp).level;
  const after = levelInfo(xp + gained).level;
  useXp.setState({ xp: xp + gained, counts: { ...counts, [event]: (counts[event] ?? 0) + times } });
  if (after > before) {
    const unlocked = rewardsBetween(before, after);
    haptic.success();
    toast({
      message: unlocked.length ? `Nível ${after}! Desbloqueou: ${unlocked.map((r) => r.label).join(", ")}` : `Você subiu para o nível ${after}!`,
      icon: "arrow-up-bold-circle",
      tone: "success",
    });
  }
}
