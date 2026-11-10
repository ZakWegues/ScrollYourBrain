import { FlexWidget, TextWidget } from "react-native-android-widget";

export interface StreakWidgetData {
  streak: number;
  count: number;
  goal: number;
}

/** Home-screen widget: streak, today's progress toward the goal and a bar. Tapping opens the app. */
export function StreakWidget({ streak, count, goal }: StreakWidgetData) {
  const done = count >= goal;
  const pct = Math.min(1, goal > 0 ? count / goal : 0);
  return (
    <FlexWidget
      clickAction="OPEN_APP"
      accessibilityLabel={`Sequência de ${streak} dias, ${count} de ${goal} cards hoje`}
      style={{ height: "match_parent", width: "match_parent", backgroundColor: "#0B0B0E", borderRadius: 24, padding: 16, flexDirection: "column", justifyContent: "space-between", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.08)" }}
    >
      <FlexWidget style={{ flexDirection: "row", alignItems: "center", width: "match_parent" }}>
        <TextWidget text="🔥" style={{ fontSize: 26 }} />
        <FlexWidget style={{ flexDirection: "column", marginLeft: 8 }}>
          <TextWidget text={`${streak} ${streak === 1 ? "dia" : "dias"}`} style={{ fontSize: 22, color: "#F5F5F7", fontWeight: "700" }} />
          <TextWidget text="de sequência" style={{ fontSize: 12, color: "#A1A1AA" }} />
        </FlexWidget>
      </FlexWidget>
      <FlexWidget style={{ flexDirection: "column", width: "match_parent" }}>
        <TextWidget
          text={done ? "Meta de hoje batida ✓" : `${count}/${goal} cards hoje`}
          style={{ fontSize: 13, color: done ? "#34D399" : "#F5F5F7", fontWeight: "600" }}
        />
        <FlexWidget style={{ width: "match_parent", height: 6, backgroundColor: "#1D1D26", borderRadius: 3, marginTop: 8, flexDirection: "row" }}>
          {pct > 0 && (
            <FlexWidget style={{ flex: Math.max(0.01, pct), height: 6, borderRadius: 3, backgroundGradient: { from: "#8B5CF6", to: done ? "#34D399" : "#22D3EE", orientation: "LEFT_RIGHT" } }} />
          )}
          {pct < 1 && <FlexWidget style={{ flex: Math.max(0.01, 1 - pct), height: 6 }} />}
        </FlexWidget>
      </FlexWidget>
    </FlexWidget>
  );
}
