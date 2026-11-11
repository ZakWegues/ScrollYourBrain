import { create } from "zustand";

/** The current hour, refreshed every minute from the root layout (drives the automatic theme). */
export const useClock = create<{ hour: number }>()(() => ({ hour: new Date().getHours() }));

export function tickClock() {
  const hour = new Date().getHours();
  if (useClock.getState().hour !== hour) useClock.setState({ hour });
}
