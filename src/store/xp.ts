import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "@/components/Toast";
import { haptic } from "@/lib/haptics";
import { XP_FOR, levelInfo, rewardsBetween, type XpEvent } from "@/lib/xp";
import { persistStorage } from "./storage";

interface XpState {
  xp: number;
  counts: Partial<Record<XpEvent, number>>;
  reset: () => void;
}

export const useXp = create<XpState>()(
  persist(
    (set) => ({
      xp: 0,
      counts: {},
      reset: () => set({ xp: 0, counts: {} }),
    }),
    { name: "syb-xp", storage: persistStorage, version: 1 },
  ),
);

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
