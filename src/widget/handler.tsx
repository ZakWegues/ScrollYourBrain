import AsyncStorage from "@react-native-async-storage/async-storage";
import type { WidgetTaskHandlerProps } from "react-native-android-widget";
import { currentStreak, dayKey } from "@/lib/streak";
import { StreakWidget, type StreakWidgetData } from "./StreakWidget";

/** Reads the persisted stores directly; the widget runs without the app's React tree. */
export async function readWidgetData(): Promise<StreakWidgetData> {
  try {
    const [progress, settings] = await Promise.all([AsyncStorage.getItem("syb-progress"), AsyncStorage.getItem("syb-settings")]);
    const days: Record<string, number> = progress ? JSON.parse(progress).state?.days ?? {} : {};
    const goal: number = settings ? JSON.parse(settings).state?.dailyGoal ?? 10 : 10;
    return { streak: currentStreak(days, goal), count: days[dayKey()] ?? 0, goal };
  } catch {
    return { streak: 0, count: 0, goal: 10 };
  }
}

export async function widgetTaskHandler({ widgetAction, renderWidget }: WidgetTaskHandlerProps) {
  if (widgetAction === "WIDGET_DELETED") return;
  renderWidget(<StreakWidget {...(await readWidgetData())} />);
}
