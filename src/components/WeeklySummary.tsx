import { router } from "expo-router";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { getPage } from "@/data/pages";
import { summarize } from "@/lib/stats";
import { useProgress } from "@/store/progress";
import { radius, space, useColors } from "@/theme";
import { AppText, Bouncy, Icon, PageAvatar } from "./ui";

/** Last 7 days at a glance, compared with the 7 before. */
export function WeeklySummary() {
  const c = useColors();
  const log = useProgress((s) => s.log);
  const data = useMemo(() => {
    const two = summarize(log, 14).daily;
    const prev = two.slice(0, 7).reduce((n, d) => n + d.studied, 0);
    const week = summarize(log, 7);
    const favorite = week.topics.find((t) => t.studied > 0 || t.answered > 0);
    const best = [...week.daily].sort((a, b) => b.studied - a.studied)[0];
    return { week, prev, favorite, best };
  }, [log]);
  const { week, prev, favorite, best } = data;
  if (week.studied === 0 && prev === 0) return null;
  const delta = prev === 0 ? null : Math.round(((week.studied - prev) / prev) * 100);
  const sunday = new Date().getDay() === 0;
  const bestDay = best && best.studied > 0 ? new Date(`${best.key}T12:00:00`).toLocaleDateString("pt-BR", { weekday: "long" }) : null;

  return (
    <Bouncy onPress={() => router.push("/stats")} scaleTo={0.98} style={[styles.card, { backgroundColor: c.surface, borderColor: c.border }]} accessibilityLabel={`Resumo da semana: ${week.studied} cards`} testID="weekly-summary">
      <View style={styles.head}>
        <Icon name="calendar-week" size={20} color={c.accent2} />
        <AppText variant="label" style={{ flex: 1 }}>{sunday ? "Sua semana fechou" : "Resumo da semana"}</AppText>
        <Icon name="chevron-right" size={20} color={c.textDim} />
      </View>
      <View style={styles.row}>
        <View style={styles.stat}>
          <AppText variant="title">{week.studied}</AppText>
          <AppText variant="caption" dim>cards</AppText>
          {delta !== null && (
            <AppText variant="caption" style={{ color: delta >= 0 ? c.success : c.danger }}>
              {delta >= 0 ? "▲" : "▼"} {Math.abs(delta)}% vs. anterior
            </AppText>
          )}
        </View>
        <View style={styles.stat}>
          <AppText variant="title">{week.accuracy === null ? "–" : `${week.accuracy}%`}</AppText>
          <AppText variant="caption" dim>acertos</AppText>
        </View>
        <View style={styles.stat}>
          <AppText variant="title">{week.activeDays}/7</AppText>
          <AppText variant="caption" dim>dias ativos</AppText>
        </View>
      </View>
      {(favorite || bestDay) && (
        <View style={[styles.foot, { borderColor: c.border }]}>
          {favorite && (
            <View style={styles.fav}>
              <PageAvatar pageId={favorite.pageId} size={22} />
              <AppText variant="caption" dim numberOfLines={1} style={{ flex: 1 }}>Conta favorita: <AppText variant="caption">{getPage(favorite.pageId).name}</AppText></AppText>
            </View>
          )}
          {bestDay && <AppText variant="caption" dim>Melhor dia: {bestDay}</AppText>}
        </View>
      )}
    </Bouncy>
  );
}

const styles = StyleSheet.create({
  card: { padding: space.md, borderRadius: radius.lg, borderWidth: 1, marginBottom: space.md },
  head: { flexDirection: "row", alignItems: "center", gap: space.sm },
  row: { flexDirection: "row", marginTop: space.md },
  stat: { flex: 1 },
  foot: { borderTopWidth: StyleSheet.hairlineWidth, marginTop: space.md, paddingTop: space.sm, gap: 4 },
  fav: { flexDirection: "row", alignItems: "center", gap: space.sm },
});
