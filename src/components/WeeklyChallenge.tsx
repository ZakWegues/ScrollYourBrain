import { StyleSheet, View } from "react-native";
import { missionsFor, weekDays, weekKey } from "@/lib/challenges";
import { useProgress } from "@/store/progress";
import { useSettings } from "@/store/settings";
import { radius, space, useColors } from "@/theme";
import { AppText, Icon, type IconName } from "./ui";

/** This week's three missions with progress bars. */
export function WeeklyChallenge() {
  const c = useColors();
  const log = useProgress((s) => s.log);
  const days = useProgress((s) => s.days);
  const goal = useSettings((s) => s.dailyGoal);
  const week = weekKey();
  const doneIds = useProgress((s) => s.challenges[week]);
  const missions = missionsFor(week);
  const keys = weekDays(week);
  const daysLeft = 7 - ((new Date().getDay() + 6) % 7) - 1;
  const complete = doneIds?.includes("all") ?? false;

  return (
    <View style={[styles.card, { backgroundColor: c.surface, borderColor: complete ? c.save : c.border }]} testID="weekly-challenge">
      <View style={styles.head}>
        <Icon name={complete ? "medal" : "medal-outline"} size={22} color={c.save} />
        <AppText variant="headline" style={{ flex: 1 }}>Desafio da semana</AppText>
        <AppText variant="caption" dim>{complete ? "completo!" : daysLeft === 0 ? "último dia" : `${daysLeft} ${daysLeft === 1 ? "dia" : "dias"}`}</AppText>
      </View>
      {missions.map((m) => {
        const value = Math.min(m.measure(log, days, goal, keys), m.target);
        const ok = value >= m.target;
        return (
          <View key={m.id} style={styles.row}>
            <View style={[styles.icon, { backgroundColor: ok ? "rgba(52,211,153,0.16)" : c.surface2 }]}>
              <Icon name={(ok ? "check" : m.icon) as IconName} size={16} color={ok ? c.success : c.textDim} />
            </View>
            <View style={{ flex: 1 }}>
              <View style={styles.labelRow}>
                <AppText variant="label" style={{ flex: 1, color: ok ? c.textDim : c.text }} numberOfLines={1}>{m.label}</AppText>
                <AppText variant="caption" dim>{value}/{m.target}</AppText>
              </View>
              <View style={[styles.track, { backgroundColor: c.surface2 }]}>
                <View style={[styles.fill, { width: `${(value / m.target) * 100}%`, backgroundColor: ok ? c.success : c.save }]} />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: space.lg, borderRadius: radius.lg, borderWidth: StyleSheet.hairlineWidth, gap: space.md },
  head: { flexDirection: "row", alignItems: "center", gap: space.sm },
  row: { flexDirection: "row", alignItems: "center", gap: space.md },
  icon: { width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  labelRow: { flexDirection: "row", alignItems: "baseline", gap: space.sm, marginBottom: 6 },
  track: { height: 6, borderRadius: 3, overflow: "hidden" },
  fill: { height: 6, borderRadius: 3 },
});
