import * as Haptics from "expo-haptics";
import { Platform } from "react-native";
import { useSettings } from "@/store/settings";

const enabled = () => Platform.OS !== "web" && useSettings.getState().haptics;

export const haptic = {
  light: () => enabled() && Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {}),
  medium: () => enabled() && Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {}),
  select: () => enabled() && Haptics.selectionAsync().catch(() => {}),
  success: () => enabled() && Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {}),
  error: () => enabled() && Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {}),
};
