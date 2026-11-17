import { create } from "zustand";

/** Whether the "Seu dia" sheet is open (opened from the goal ring, a nudge or a notification). */
export const useTodaySheet = create<{ open: boolean }>()(() => ({ open: false }));
export const openToday = () => useTodaySheet.setState({ open: true });
