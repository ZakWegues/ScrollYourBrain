import { Platform } from "react-native";
import { create } from "zustand";
import { useSettings } from "./settings";

interface PlaybackState {
  muted: boolean;
  setMuted: (muted: boolean) => void;
}

/** Session-wide mute state shared by every video card (browsers only autoplay muted). */
export const usePlayback = create<PlaybackState>()((set) => ({
  muted: Platform.OS === "web" || useSettings.getState().startMuted,
  setMuted: (muted) => set({ muted }),
}));
