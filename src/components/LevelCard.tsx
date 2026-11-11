import { LinearGradient } from "@/components/LinearGradient";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { levelInfo, REWARDS, titleFor } from "@/lib/xp";
import { useXp } from "@/store/xp";
import { radius, space, useColors } from "@/theme";
import { AppText, Bouncy, Icon } from "./ui";

/** Level, title and progress to the next level; opens the profile. */
export function LevelCard() {
  const c = useColors();
  const xp = useXp((s) => s.xp);
  const { level, xpToNext, progress } = levelInfo(xp);
  const next = REWARDS.find((r) => r.level > level);
  return (
    <Bouncy onPress={() => router.push("/profile")} scaleTo={0.98} style={[styles.card, { backgroundColor: c.surface, borderColor: c.border }]} accessibilityLabel={`Nível ${level}, ${titleFor(level)}. Faltam ${xpToNext} XP.`} testID="level-card">
      <LinearGradient colors={[c.accent, c.accent2]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.badge}>
        <AppText variant="caption" style={styles.badgeLabel}>NÍVEL</AppText>
        <AppText variant="title" style={styles.badgeNum}>{level}</AppText>
      </LinearGradient>
      <View style={{ flex: 1 }}>
        <View style={styles.row}>
          <AppText variant="headline" style={{ flex: 1 }}>{titleFor(level)}</AppText>
          <AppText variant="caption" dim>{xp} XP</AppText>
        </View>
        <View style={[styles.track, { backgroundColor: c.surface2 }]}>
          <LinearGradient colors={[c.accent, c.accent2]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.fill, { width: `${Math.max(4, progress * 100)}%` }]} />
        </View>
        <AppText variant="caption" dim numberOfLines={1}>
          {xpToNext} XP para o nível {level + 1}{next ? ` · ${next.label}` : ""}
        </AppText>
      </View>
      <Icon name="chevron-right" size={22} color={c.textDim} />
    </Bouncy>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", alignItems: "center", gap: space.md, padding: space.md, borderRadius: radius.lg, borderWidth: 1, marginBottom: space.md },
  badge: { width: 58, height: 58, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  badgeLabel: { color: "rgba(255,255,255,0.85)", fontSize: 9, letterSpacing: 1 },
  badgeNum: { color: "#fff", marginTop: -4 },
  row: { flexDirection: "row", alignItems: "center" },
  track: { height: 8, borderRadius: 4, overflow: "hidden", marginVertical: 6 },
  fill: { height: "100%", borderRadius: 4 },
});
