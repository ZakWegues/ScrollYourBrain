import { create } from "zustand";
import { dayKey } from "@/lib/streak";

/** The current hour and day, refreshed every minute from the root layout (automatic theme, question of the day). */
export const useClock = create<{ hour: number; day: string }>()(() => ({ hour: new Date().getHours(), day: dayKey() }));

export function tickClock() {
  const now = new Date();
  const hour = now.getHours();
  const day = dayKey(now);
  const s = useClock.getState();
  if (s.hour !== hour || s.day !== day) useClock.setState({ hour, day });
}
