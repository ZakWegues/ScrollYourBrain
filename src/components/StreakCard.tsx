import { StyleSheet, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { lastNDays } from "@/lib/streak";
import { useProgress, useToday } from "@/store/progress";
import { radius, useColors } from "@/theme";
import { AppText, Icon } from "./ui";

/** Current streak, record and a 7-day bar chart of studied cards against the goal. */
export function StreakCard() {
  const c = useColors();
  const { streak, count, goal, done } = useToday();
  const best = useProgress((s) => s.bestStreak);
  const days = useProgress((s) => s.days);
  const week = lastNDays(days, 7);
  const max = Math.max(goal, ...week.map((d) => d.count));

  return (
    <View style={[styles.card, { backgroundColor: c.surface, borderColor: c.border }]} testID="streak-card">
      <View style={styles.head}>
        <View style={[styles.flame, { backgroundColor: "rgba(251,146,60,0.16)" }]}>
          <Icon name="fire" size={28} color={streak > 0 ? "#FB923C" : c.textMute} />
        </View>
        <View style={{ flex: 1 }}>
          <AppText variant="title">{streak} {streak === 1 ? "dia" : "dias"}</AppText>
          <AppText variant="caption" dim>Sequência atual · recorde {Math.max(best, streak)}</AppText>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <AppText variant="headline" style={{ color: done ? c.success : c.text }}>{Math.min(count, goal)}/{goal}</AppText>
          <AppText variant="caption" dim>{done ? "meta batida" : "hoje"}</AppText>
        </View>
      </View>
      <View style={styles.chart}>
        {week.map((d, i) => {
          const hit = d.count >= goal;
          const h = Math.max(4, (d.count / max) * 64);
          return (
            <View key={d.key} style={styles.col}>
              <View style={styles.barBox}>
                <View style={[styles.goalLine, { bottom: (goal / max) * 64, borderColor: c.border }]} />
                <Animated.View entering={FadeInUp.delay(i * 50)} style={[styles.bar, { height: h, backgroundColor: hit ? c.success : d.count > 0 ? c.accent : c.surface2 }]} />
              </View>
              <AppText variant="caption" style={{ color: d.isToday ? c.text : c.textDim, fontSize: 11 }}>{d.isToday ? "hoje" : d.label}</AppText>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, borderRadius: radius.lg, borderWidth: StyleSheet.hairlineWidth },
  head: { flexDirection: "row", alignItems: "center", gap: 12 },
  flame: { width: 48, height: 48, borderRadius: 24, alignItems: "center", justifyContent: "center" },
  chart: { flexDirection: "row", gap: 8, marginTop: 16 },
  col: { flex: 1, alignItems: "center", gap: 6 },
  barBox: { height: 64, width: "100%", justifyContent: "flex-end", alignItems: "center" },
  goalLine: { position: "absolute", left: 0, right: 0, borderTopWidth: 1, borderStyle: "dashed" },
  bar: { width: "70%", borderRadius: 6 },
});
