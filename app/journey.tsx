import { router } from "expo-router";
import { useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Collapsible } from "@/components/Collapsible";
import { useTodayPlan } from "@/components/Today";
import { AppText, Bouncy, Icon, PageAvatar } from "@/components/ui";
import { SCHOOL_SUBJECTS } from "@/data/curriculum";
import { getPage, SUB_PAGES } from "@/data/pages";
import { accountTotals } from "@/lib/today";
import { MASTERY_LEVELS, mastery, masteryLevel } from "@/lib/xp";
import { useProgress } from "@/store/progress";
import { useSettings } from "@/store/settings";
import { radius, space, TOUCH, useColors } from "@/theme";

interface Row { id: string; score: number; level: number; answered: number; accuracy: number | null }

/** Stars for a mastery level: one per level reached (5 in total). */
function Stars({ level, color }: { level: number; color: string }) {
  const c = useColors();
  return (
    <View style={{ flexDirection: "row", gap: 1 }} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {MASTERY_LEVELS.map((_, i) => <Icon key={i} name={i <= level ? "star" : "star-outline"} size={13} color={i <= level ? color : c.textMute} />)}
    </View>
  );
}

/** "Minha jornada": mastery of every account, grouped by subject, with the next step highlighted. */
export default function Journey() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const log = useProgress((s) => s.log);
  const interests = useSettings((s) => s.interests);
  const plan = useTodayPlan();
  const focus = plan.find((m) => m.kind === "exam" || m.kind === "weak" || m.kind === "explore");
  const nextId = focus?.route.pathname === "/lesson" ? focus.route.params.page : undefined;

  const bySubject = useMemo(() => {
    const totals = accountTotals(log);
    return SCHOOL_SUBJECTS.map((subject) => {
      const rows: Row[] = SUB_PAGES.filter((p) => p.parent === subject).map((p) => {
        const t = totals[p.id];
        const score = t ? mastery(t) : 0;
        return { id: p.id, score, level: masteryLevel(score), answered: t?.answered ?? 0, accuracy: t?.answered ? Math.round((t.correct / t.answered) * 100) : null };
      });
      const started = rows.filter((r) => r.answered > 0).length;
      const avg = rows.length ? Math.round(rows.reduce((n, r) => n + r.score, 0) / rows.length) : 0;
      return { subject, rows, started, avg };
    }).filter((s) => s.rows.length > 0);
  }, [log]);

  const all = bySubject.flatMap((s) => s.rows);
  const started = all.filter((r) => r.answered > 0).length;
  const advanced = all.filter((r) => r.level >= 3).length;
  // Subjects the student picked come first, then the rest by how far along they are.
  const ordered = [...bySubject].sort((a, b) => Number(interests.includes(b.subject)) - Number(interests.includes(a.subject)) || b.avg - a.avg);

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={[styles.top, { paddingTop: insets.top + space.xs }]}>
        <Bouncy onPress={() => (router.canGoBack() ? router.back() : router.replace("/library"))} style={styles.iconBtn} accessibilityLabel="Voltar">
          <Icon name="chevron-left" size={30} color={c.text} />
        </Bouncy>
        <AppText variant="label">Minha jornada</AppText>
        <View style={styles.iconBtn} />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: space.lg, paddingBottom: insets.bottom + space.xxl }} showsVerticalScrollIndicator={false}>
        <View style={[styles.hero, { backgroundColor: c.surface, borderColor: c.border }]}>
          <View style={styles.heroStat}>
            <AppText variant="display">{started}</AppText>
            <AppText variant="caption" dim>de {all.length} assuntos começados</AppText>
          </View>
          <View style={[styles.divider, { backgroundColor: c.border }]} />
          <View style={styles.heroStat}>
            <AppText variant="display" style={{ color: c.success }}>{advanced}</AppText>
            <AppText variant="caption" dim>Avançado ou Craque</AppText>
          </View>
        </View>
        <AppText variant="caption" dim style={{ marginBottom: space.md }}>
          O domínio sobe com acertos (e um pouco com cards estudados). Níveis: {MASTERY_LEVELS.map((l) => l.name).join(" → ")}.
        </AppText>

        {nextId && (
          <Bouncy onPress={() => router.push({ pathname: "/lesson", params: { page: nextId } })} scaleTo={0.98} style={[styles.next, { borderColor: c.accent, backgroundColor: c.surface }]} accessibilityLabel={`Próximo passo: aula de ${getPage(nextId).name}`} testID="journey-next">
            <PageAvatar pageId={nextId} size={40} />
            <View style={{ flex: 1 }}>
              <AppText variant="caption" style={{ color: c.accent2 }}>PRÓXIMO PASSO</AppText>
              <AppText variant="headline" numberOfLines={1}>{getPage(nextId).name}</AppText>
              <AppText variant="caption" dim numberOfLines={1}>{focus?.detail}</AppText>
            </View>
            <View style={[styles.play, { backgroundColor: c.accent }]}><Icon name="play" size={18} color="#fff" /></View>
          </Bouncy>
        )}

        {ordered.map(({ subject, rows, started: s, avg }) => (
          <Collapsible key={subject} id={`journey-${subject}`} icon="map-marker-path" iconColor={getPage(subject).colors[0]} title={getPage(subject).name} summary={`${s}/${rows.length} começados · ${avg}%`} defaultOpen={interests.includes(subject)}>
            {rows.map((r) => (
              <Bouncy key={r.id} onPress={() => router.push(`/page/${r.id}`)} scaleTo={0.98} style={[styles.row, { borderColor: r.id === nextId ? c.accent : c.border, backgroundColor: c.surface }]} accessibilityLabel={`${getPage(r.id).name}: ${MASTERY_LEVELS[r.level].name}, ${r.score}%`} testID={`journey-${r.id}`}>
                <PageAvatar pageId={r.id} size={34} />
                <View style={{ flex: 1, minWidth: 0 }}>
                  <View style={styles.rowHead}>
                    <AppText variant="label" numberOfLines={1} style={{ flex: 1 }}>{getPage(r.id).name}</AppText>
                    <Stars level={r.answered ? r.level : -1} color={c.save} />
                  </View>
                  <View style={[styles.track, { backgroundColor: c.surface2 }]}>
                    <View style={[styles.fill, { width: `${r.score}%`, backgroundColor: r.level >= 3 ? c.success : c.accent }]} />
                  </View>
                  <AppText variant="caption" dim numberOfLines={1}>
                    {r.answered ? `${MASTERY_LEVELS[r.level].name} · ${r.score}% · ${r.accuracy}% de acerto em ${r.answered}` : "Ainda não começou"}
                  </AppText>
                </View>
                <Bouncy onPress={() => router.push({ pathname: "/lesson", params: { page: r.id } })} style={styles.lessonBtn} accessibilityLabel={`Aula de ${getPage(r.id).name}`}>
                  <Icon name="school-outline" size={20} color={c.accent2} />
                </Bouncy>
              </Bouncy>
            ))}
          </Collapsible>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: space.sm },
  iconBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  hero: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderRadius: radius.lg, padding: space.lg, marginTop: space.sm, marginBottom: space.sm },
  heroStat: { flex: 1, alignItems: "center" },
  divider: { width: 1, alignSelf: "stretch", marginHorizontal: space.md },
  next: { flexDirection: "row", alignItems: "center", gap: 12, borderWidth: 1.5, borderRadius: radius.lg, padding: space.md, marginBottom: space.md },
  play: { width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" },
  row: { flexDirection: "row", alignItems: "center", gap: 12, borderWidth: 1, borderRadius: radius.md, padding: space.sm, marginBottom: space.sm },
  rowHead: { flexDirection: "row", alignItems: "center", gap: 6 },
  track: { height: 5, borderRadius: 3, overflow: "hidden", marginVertical: 5 },
  fill: { height: "100%", borderRadius: 3 },
  lessonBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
});
