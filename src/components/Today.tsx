import { router } from "expo-router";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { daysUntil } from "@/lib/planner";
import { haptic } from "@/lib/haptics";
import { missionDone, missionsDone, planToday, type Mission } from "@/lib/today";
import { weakAccounts } from "@/lib/weak";
import { dayKey } from "@/lib/streak";
import { useClock } from "@/store/clock";
import { useDaily } from "@/store/daily";
import { useMistakes } from "@/store/mistakes";
import { usePlanner } from "@/store/planner";
import { useProgress, useToday } from "@/store/progress";
import { dueCards, useReview } from "@/store/review";
import { useSettings } from "@/store/settings";
import { openToday, useTodaySheet } from "@/store/todaySheet";
import { radius, space, useColors } from "@/theme";
import { Sheet } from "./Sheet";
import { AppText, Bouncy, Icon, type IconName } from "./ui";

/** Today's three missions, rebuilt whenever anything they depend on changes. */
export function useTodayPlan(): Mission[] {
  const today = useClock((s) => s.day);
  const cards = useReview((s) => s.cards);
  const mistakes = useMistakes((s) => s.items);
  const dailyAnswered = useDaily((s) => today in s.answered);
  const goal = useSettings((s) => s.dailyGoal);
  const interests = useSettings((s) => s.interests);
  const log = useProgress((s) => s.log);
  const studiedToday = useProgress((s) => s.days[today] ?? 0);
  const exams = usePlanner((s) => s.exams);
  return useMemo(() => {
    const startOfDay = new Date(`${today}T00:00:00`).getTime();
    const list = Object.values(mistakes);
    const next = Object.values(exams).filter((e) => daysUntil(e.date) >= 0).sort((a, b) => a.date.localeCompare(b.date))[0];
    return planToday({
      due: dueCards(cards).length,
      reviewsToday: log[today]?.reviews ?? 0,
      pendingMistakes: list.filter((m) => !m.fixed).length,
      fixedToday: list.filter((m) => m.fixed && m.lastAt >= startOfDay).length,
      dailyAnswered,
      goal,
      studiedToday,
      nextExam: next && { id: next.id, title: next.title, days: daysUntil(next.date), pageIds: next.pageIds },
      weak: weakAccounts(log),
      interests,
      log,
      today,
    });
  }, [today, cards, mistakes, dailyAnswered, goal, interests, log, studiedToday, exams]);
}

export { openToday };

function start(m: Mission, after?: () => void) {
  haptic.light();
  after?.();
  if (m.route.pathname === "/") router.navigate("/");
  else router.push(m.route as never);
}

function MissionRow({ m, onStart, last }: { m: Mission; onStart: () => void; last?: boolean }) {
  const c = useColors();
  const done = missionDone(m);
  const pct = Math.min(1, m.done / Math.max(1, m.total));
  return (
    <Bouncy
      onPress={onStart}
      scaleTo={0.98}
      style={[styles.row, !last && { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: c.border }]}
      accessibilityLabel={`${m.title}. ${m.detail}. ${done ? "Feita" : `${m.done} de ${m.total}`}`}
      testID={`mission-${m.kind}`}
    >
      <View style={[styles.icon, { backgroundColor: done ? "rgba(52,211,153,0.18)" : c.surface2 }]}>
        <Icon name={(done ? "check-bold" : m.icon) as IconName} size={20} color={done ? c.success : c.text} />
      </View>
      <View style={{ flex: 1, minWidth: 0 }}>
        <AppText variant="label" numberOfLines={1} style={done ? { color: c.success } : undefined}>{m.title}</AppText>
        <AppText variant="caption" dim numberOfLines={1}>{m.detail}</AppText>
        {m.total > 1 && (
          <View style={[styles.track, { backgroundColor: c.surface2 }]}>
            <View style={[styles.fill, { width: `${pct * 100}%`, backgroundColor: done ? c.success : c.accent }]} />
          </View>
        )}
      </View>
      {done ? (
        <AppText variant="caption" style={{ color: c.success }}>Feita</AppText>
      ) : (
        <View style={[styles.go, { backgroundColor: c.accent }]}>
          <Icon name="play" size={16} color="#fff" />
        </View>
      )}
    </Bouncy>
  );
}

/** "Seu dia" at the top of the Library: what to study today, one tap each. */
export function TodayCard() {
  const c = useColors();
  const missions = useTodayPlan();
  const done = missionsDone(missions);
  return (
    <View style={[styles.card, { backgroundColor: c.surface, borderColor: done === missions.length ? c.success : c.border }]} testID="today-card">
      <View style={styles.head}>
        <View style={{ flex: 1 }}>
          <AppText variant="headline">{done === missions.length ? "Dia completo! 🎉" : "Seu dia"}</AppText>
          <AppText variant="caption" dim>{done === missions.length ? "Tudo feito. Amanhã tem mais." : `${done} de ${missions.length} missões · toque para começar`}</AppText>
        </View>
        <Bouncy onPress={() => router.push("/journey")} style={[styles.journeyBtn, { borderColor: c.border }]} accessibilityLabel="Ver minha jornada" testID="journey-link">
          <Icon name="map-marker-path" size={16} color={c.accent2} />
          <AppText variant="caption" style={{ color: c.accent2 }}>Jornada</AppText>
        </Bouncy>
      </View>
      {missions.map((m, i) => <MissionRow key={m.id} m={m} onStart={() => start(m)} last={i === missions.length - 1} />)}
    </View>
  );
}

/** The same plan as a sheet, opened from the goal ring on the feed. */
export function TodaySheetHost() {
  const c = useColors();
  const open = useTodaySheet((s) => s.open);
  const close = () => useTodaySheet.setState({ open: false });
  const missions = useTodayPlan();
  const { count, goal, streak } = useToday();
  const best = useProgress((s) => s.bestStreak);
  const done = missionsDone(missions);
  const yesterday = useProgress((s) => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return s.days[dayKey(d)] ?? 0;
  });
  return (
    <Sheet visible={open} onClose={close} title="Seu dia">
      <View style={styles.stats}>
        <Stat icon="fire" color="#FB923C" value={`${streak}`} label={streak === 1 ? "dia seguido" : "dias seguidos"} />
        <Stat icon="cards-outline" color={c.accent2} value={`${count}/${goal}`} label="cards hoje" />
        <Stat icon="flag-checkered" color={c.success} value={`${done}/${missions.length}`} label="missões" />
      </View>
      <AppText variant="caption" dim style={{ marginBottom: space.sm }}>
        {streak === 0 && yesterday > 0 ? "A sequência zerou ontem. Bata a meta hoje para recomeçar." : streak > 0 && streak >= best ? "Você está no seu recorde de sequência!" : count >= goal ? "Meta de hoje garantida. O resto é bônus." : `Recorde: ${best} ${best === 1 ? "dia" : "dias"}.`}
      </AppText>
      <View style={[styles.card, { backgroundColor: c.surface, borderColor: c.border, marginTop: 0 }]}>
        {missions.map((m, i) => <MissionRow key={m.id} m={m} onStart={() => start(m, close)} last={i === missions.length - 1} />)}
      </View>
      <Bouncy onPress={() => { close(); router.push("/journey"); }} style={[styles.sheetLink, { borderColor: c.border }]} accessibilityLabel="Ver minha jornada" testID="sheet-journey">
        <Icon name="map-marker-path" size={20} color={c.accent2} />
        <AppText variant="label" style={{ flex: 1 }}>Minha jornada</AppText>
        <AppText variant="caption" dim>domínio por assunto</AppText>
        <Icon name="chevron-right" size={20} color={c.textDim} />
      </Bouncy>
    </Sheet>
  );
}

function Stat({ icon, color, value, label }: { icon: IconName; color: string; value: string; label: string }) {
  const c = useColors();
  return (
    <View style={[styles.stat, { backgroundColor: c.surface, borderColor: c.border }]}>
      <Icon name={icon} size={20} color={color} />
      <AppText variant="headline">{value}</AppText>
      <AppText variant="caption" dim numberOfLines={1}>{label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: radius.lg, borderWidth: 1, paddingHorizontal: space.md, paddingTop: space.md, marginTop: space.md },
  head: { flexDirection: "row", alignItems: "center", gap: space.sm, marginBottom: space.xs },
  journeyBtn: { flexDirection: "row", alignItems: "center", gap: 4, borderWidth: 1, borderRadius: radius.pill, paddingHorizontal: 10, minHeight: 36 },
  row: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 12, minHeight: 64 },
  icon: { width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" },
  track: { height: 4, borderRadius: 2, overflow: "hidden", marginTop: 6 },
  fill: { height: "100%", borderRadius: 2 },
  go: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  stats: { flexDirection: "row", gap: space.sm, marginBottom: space.md },
  stat: { flex: 1, alignItems: "center", paddingVertical: space.sm, borderRadius: radius.md, borderWidth: 1, gap: 2 },
  sheetLink: { flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 1, borderRadius: radius.md, padding: space.md, marginTop: space.md, minHeight: 52 },
});
