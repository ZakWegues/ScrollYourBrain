import { router } from "expo-router";
import { useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppText, Bouncy, Icon, type IconName } from "@/components/ui";
import { ACHIEVEMENTS } from "@/lib/achievements";
import { collectStats } from "@/store/achievementWatcher";
import { useProgress } from "@/store/progress";
import { radius, space, TOUCH, useColors } from "@/theme";

export default function Achievements() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const unlocked = useProgress((s) => s.achievements);
  const log = useProgress((s) => s.log);
  // Recomputed whenever activity changes.
  const stats = useMemo(() => collectStats(), [log, unlocked]); // eslint-disable-line react-hooks/exhaustive-deps
  const count = ACHIEVEMENTS.filter((a) => unlocked[a.id]).length;
  const sorted = [...ACHIEVEMENTS].sort((a, b) => (unlocked[b.id] ? 1 : 0) - (unlocked[a.id] ? 1 : 0));

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={[styles.top, { paddingTop: insets.top + space.xs }]}>
        <Bouncy onPress={() => (router.canGoBack() ? router.back() : router.replace("/library"))} style={styles.iconBtn} accessibilityLabel="Voltar">
          <Icon name="chevron-left" size={30} color={c.text} />
        </Bouncy>
        <AppText variant="label">Conquistas</AppText>
        <View style={styles.iconBtn} />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: space.lg, paddingBottom: insets.bottom + space.xxl }} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Icon name="trophy" size={48} color={c.save} />
          <AppText variant="display" style={{ marginTop: space.sm }}>{count}/{ACHIEVEMENTS.length}</AppText>
          <AppText dim>conquistas desbloqueadas</AppText>
        </View>
        <View style={styles.grid}>
          {sorted.map((a, i) => {
            const done = !!unlocked[a.id];
            const [cur, target] = a.progress(stats);
            return (
              <Animated.View key={a.id} entering={FadeInDown.delay(i * 25).springify().damping(26).stiffness(280).mass(1)} style={styles.cell}>
                <View style={[styles.badge, { backgroundColor: c.surface, borderColor: done ? a.color : c.border }]} accessibilityLabel={`${a.title}: ${a.description}. ${done ? "Desbloqueada" : `${cur} de ${target}`}`}>
                  <View style={[styles.medal, { backgroundColor: done ? a.color : c.surface2 }]}>
                    <Icon name={(done ? a.icon : "lock-outline") as IconName} size={26} color={done ? "#fff" : c.textMute} />
                  </View>
                  <AppText variant="label" style={styles.center} numberOfLines={1}>{a.title}</AppText>
                  <AppText variant="caption" dim style={styles.center} numberOfLines={2}>{a.description}</AppText>
                  {!done && (
                    <View style={[styles.track, { backgroundColor: c.surface2 }]}>
                      <View style={[styles.fill, { width: `${(cur / target) * 100}%`, backgroundColor: c.accent }]} />
                    </View>
                  )}
                  {done && <AppText variant="caption" style={{ color: a.color, marginTop: space.sm }}>{new Date(unlocked[a.id]).toLocaleDateString("pt-BR", { day: "numeric", month: "short" })}</AppText>}
                </View>
              </Animated.View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: space.sm },
  iconBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  hero: { alignItems: "center", paddingVertical: space.lg },
  grid: { flexDirection: "row", flexWrap: "wrap", marginHorizontal: -space.xs },
  cell: { width: "50%", padding: space.xs },
  badge: { alignItems: "center", padding: space.lg, borderRadius: radius.lg, borderWidth: 1, minHeight: 176 },
  medal: { width: 56, height: 56, borderRadius: 28, alignItems: "center", justifyContent: "center", marginBottom: space.sm },
  center: { textAlign: "center" },
  track: { height: 5, borderRadius: 3, overflow: "hidden", alignSelf: "stretch", marginTop: space.md },
  fill: { height: 5, borderRadius: 3 },
});
