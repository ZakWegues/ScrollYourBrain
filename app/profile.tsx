import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppText, Bouncy, Icon, PageAvatar, type IconName } from "@/components/ui";
import { getPage } from "@/data/pages";
import { summarize } from "@/lib/stats";
import { levelInfo, mastery, REWARDS, TITLES, titleFor, XP_FOR, type XpEvent } from "@/lib/xp";
import { useProgress, useToday } from "@/store/progress";
import { useXp } from "@/store/xp";
import { startWeakExam } from "@/feed/practice";
import { radius, space, TOUCH, useColors } from "@/theme";

const EVENT_LABEL: Record<XpEvent, { label: string; icon: IconName }> = {
  study: { label: "Cards estudados", icon: "cards-outline" },
  correct: { label: "Acertos", icon: "check-circle-outline" },
  review: { label: "Revisões", icon: "history" },
  like: { label: "Curtidas", icon: "heart-outline" },
  save: { label: "Salvos", icon: "bookmark-outline" },
  goal: { label: "Metas batidas", icon: "flag-checkered" },
  exam: { label: "Simulados", icon: "timer-outline" },
  focus: { label: "Sessões de foco", icon: "meditation" },
  streak: { label: "Sequências", icon: "fire" },
  daily: { label: "Perguntas do dia", icon: "help-circle-outline" },
};

/** Level, title, rewards and how well you know each account. */
export default function Profile() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const xp = useXp((s) => s.xp);
  const counts = useXp((s) => s.counts);
  const log = useProgress((s) => s.log);
  const best = useProgress((s) => s.bestStreak);
  const { streak } = useToday();
  const { level, xpToNext, progress } = levelInfo(xp);
  const total = useMemo(() => summarize(log, null), [log]);
  const ranking = useMemo(
    () => total.topics.map((t) => ({ ...t, score: mastery(t) })).filter((t) => t.studied + t.answered > 0).sort((a, b) => b.score - a.score).slice(0, 12),
    [total],
  );

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + space.xxl }} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={[c.accent, c.accent2, c.bg]} locations={[0, 0.5, 1]} style={[styles.hero, { paddingTop: insets.top + 52 }]}>
          <View style={styles.levelRing}>
            <AppText variant="caption" style={styles.ringLabel}>NÍVEL</AppText>
            <AppText variant="display" style={{ color: "#fff" }}>{level}</AppText>
          </View>
          <AppText variant="title" style={{ color: "#fff", marginTop: space.md }}>{titleFor(level)}</AppText>
          <AppText style={{ color: "rgba(255,255,255,0.85)" }}>{xp} XP · faltam {xpToNext} para o nível {level + 1}</AppText>
          <View style={styles.heroTrack}>
            <View style={[styles.heroFill, { width: `${Math.max(4, progress * 100)}%` }]} />
          </View>
          <View style={styles.statsRow}>
            {[
              { n: total.studied, l: "cards" },
              { n: total.accuracy === null ? "–" : `${total.accuracy}%`, l: "acertos" },
              { n: streak, l: "dias seguidos" },
              { n: best, l: "recorde" },
            ].map((s) => (
              <View key={s.l} style={styles.stat}>
                <AppText variant="headline" style={{ color: "#fff" }}>{s.n}</AppText>
                <AppText variant="caption" style={{ color: "rgba(255,255,255,0.8)" }}>{s.l}</AppText>
              </View>
            ))}
          </View>
        </LinearGradient>

        <View style={{ paddingHorizontal: space.lg }}>
          <View style={[styles.sectionRow, styles.section]}>
            <AppText variant="headline" style={{ flex: 1 }}>Domínio por conta</AppText>
            <Bouncy onPress={startWeakExam} style={[styles.weakBtn, { borderColor: c.danger }]} accessibilityLabel="Treinar pontos fracos">
              <Icon name="target" size={16} color={c.danger} />
              <AppText variant="caption" style={{ color: c.danger }}>Treinar fracos</AppText>
            </Bouncy>
          </View>
          {ranking.length === 0 ? (
            <AppText dim>Responda quizzes no feed para ver o quanto você domina cada conta.</AppText>
          ) : (
            ranking.map((t) => (
              <Bouncy key={t.pageId} scaleTo={0.98} onPress={() => router.push(`/page/${t.pageId}`)} style={[styles.rank, { backgroundColor: c.surface, borderColor: c.border }]} accessibilityLabel={`${getPage(t.pageId).name}: domínio ${t.score}%`}>
                <PageAvatar pageId={t.pageId} size={34} />
                <View style={{ flex: 1 }}>
                  <View style={styles.rankHead}>
                    <AppText variant="label" numberOfLines={1} style={{ flex: 1 }}>{getPage(t.pageId).name}</AppText>
                    <AppText variant="label" style={{ color: t.score >= 70 ? c.success : t.score >= 40 ? c.save : c.textDim }}>{t.score}%</AppText>
                  </View>
                  <View style={[styles.track, { backgroundColor: c.surface2 }]}>
                    <View style={[styles.fill, { width: `${Math.max(3, t.score)}%`, backgroundColor: t.score >= 70 ? c.success : t.score >= 40 ? c.save : c.accent }]} />
                  </View>
                  <AppText variant="caption" dim>{t.correct}/{t.answered} acertos · {t.studied} cards</AppText>
                </View>
              </Bouncy>
            ))
          )}

          <AppText variant="headline" style={styles.section}>Recompensas</AppText>
          {REWARDS.map((r) => {
            const got = level >= r.level;
            return (
              <View key={`${r.kind}-${r.id}`} style={[styles.reward, { borderColor: c.border, opacity: got ? 1 : 0.6 }]}>
                <Icon name={got ? (r.kind === "theme" ? "palette" : "medal") : "lock-outline"} size={22} color={got ? c.save : c.textMute} />
                <AppText style={{ flex: 1 }}>{r.label}</AppText>
                <AppText variant="caption" dim>nível {r.level}</AppText>
              </View>
            );
          })}

          <AppText variant="headline" style={styles.section}>Títulos</AppText>
          <View style={styles.titles}>
            {TITLES.map((t) => (
              <View key={t.title} style={[styles.titleChip, { borderColor: level >= t.level ? c.accent : c.border, backgroundColor: level >= t.level ? "rgba(139,92,246,0.16)" : c.surface }]}>
                <AppText variant="label" style={{ color: level >= t.level ? c.text : c.textMute }}>{t.title}</AppText>
                <AppText variant="caption" dim>nv. {t.level}</AppText>
              </View>
            ))}
          </View>

          <AppText variant="headline" style={styles.section}>De onde vem seu XP</AppText>
          {(Object.keys(EVENT_LABEL) as XpEvent[]).map((e) => (
            <View key={e} style={[styles.reward, { borderColor: c.border }]}>
              <Icon name={EVENT_LABEL[e].icon} size={20} color={c.accent2} />
              <AppText style={{ flex: 1 }}>{EVENT_LABEL[e].label}</AppText>
              <AppText variant="caption" dim>{counts[e] ?? 0} × {XP_FOR[e]} XP</AppText>
            </View>
          ))}
        </View>
      </ScrollView>
      <Bouncy onPress={() => (router.canGoBack() ? router.back() : router.replace("/library"))} style={[styles.back, { top: insets.top + 6 }]} accessibilityLabel="Voltar">
        <Icon name="chevron-left" size={30} color="#fff" />
      </Bouncy>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: "center", paddingHorizontal: space.xl, paddingBottom: space.xl },
  levelRing: { width: 108, height: 108, borderRadius: 54, borderWidth: 3, borderColor: "rgba(255,255,255,0.7)", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.18)" },
  ringLabel: { color: "rgba(255,255,255,0.85)", letterSpacing: 1.5, fontSize: 10, lineHeight: 12 },
  heroTrack: { alignSelf: "stretch", height: 8, borderRadius: 4, backgroundColor: "rgba(0,0,0,0.25)", marginTop: space.md, overflow: "hidden" },
  heroFill: { height: "100%", borderRadius: 4, backgroundColor: "#fff" },
  statsRow: { flexDirection: "row", alignSelf: "stretch", justifyContent: "space-between", marginTop: space.lg },
  stat: { alignItems: "center", flex: 1 },
  section: { marginTop: space.xl, marginBottom: space.md },
  sectionRow: { flexDirection: "row", alignItems: "center", gap: space.sm },
  weakBtn: { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: space.md, paddingVertical: 6, borderRadius: radius.pill, borderWidth: 1 },
  rank: { flexDirection: "row", alignItems: "center", gap: space.md, padding: space.md, borderRadius: radius.lg, borderWidth: 1, marginBottom: space.sm },
  rankHead: { flexDirection: "row", alignItems: "center", gap: space.sm },
  track: { height: 6, borderRadius: 3, overflow: "hidden", marginVertical: 5 },
  fill: { height: "100%", borderRadius: 3 },
  reward: { flexDirection: "row", alignItems: "center", gap: space.md, paddingVertical: space.md, borderBottomWidth: StyleSheet.hairlineWidth, minHeight: TOUCH },
  titles: { flexDirection: "row", flexWrap: "wrap", gap: space.sm },
  titleChip: { paddingHorizontal: space.md, paddingVertical: space.sm, borderRadius: radius.md, borderWidth: 1, alignItems: "center" },
  back: { position: "absolute", left: 8, width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
});
