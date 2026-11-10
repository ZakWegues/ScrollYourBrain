import { useEffect } from "react";
import { Platform } from "react-native";
import { StreakWidget } from "./StreakWidget";

/** Refreshes the home-screen widget whenever streak or today's count changes (Android only). */
export function useWidgetSync(streak: number, count: number, goal: number, enabled: boolean) {
  useEffect(() => {
    if (!enabled || Platform.OS !== "android") return;
    // Loaded lazily so web and iOS never touch the Android-only module.
    import("react-native-android-widget")
      .then(({ requestWidgetUpdate }) =>
        requestWidgetUpdate({ widgetName: "Streak", renderWidget: () => <StreakWidget streak={streak} count={count} goal={goal} /> }),
      )
      .catch(() => {});
  }, [streak, count, goal, enabled]);
}
