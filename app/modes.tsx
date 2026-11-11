import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppText, Bouncy, Icon, type IconName } from "@/components/ui";
import { MODE_INFO, MODE_ORDER, modeKey, modeTitle, type ModeConfig } from "@/lib/modes";
import { useModes } from "@/store/modes";
import { startWeakExam } from "@/feed/practice";
import { radius, space, TOUCH, useColors } from "@/theme";

export const openMode = (config: ModeConfig) => router.push({ pathname: "/mode", params: { c: JSON.stringify(config) } });

/** Hub of study modes: ENEM, vestibular and school exams per subject. */
export default function Modes() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const recent = useModes((s) => s.recent);
  const saved = useModes((s) => s.saved);

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={[styles.top, { paddingTop: insets.top + space.xs }]}>
        <Bouncy onPress={() => (router.canGoBack() ? router.back() : router.replace("/explore"))} style={styles.iconBtn} accessibilityLabel="Voltar">
          <Icon name="chevron-left" size={30} color={c.text} />
        </Bouncy>
        <AppText variant="label">Modos de prova</AppText>
        <View style={styles.iconBtn} />
      </View>
      <ScrollView contentContainerStyle={{ padding: space.lg, paddingBottom: insets.bottom + space.xxl }} showsVerticalScrollIndicator={false}>
        <AppText variant="title">Para que prova você está estudando?</AppText>
        <AppText dim style={{ marginTop: space.xs, marginBottom: space.lg }}>Cada modo mostra só o conteúdo que cai, com feed, revisão e simulado.</AppText>
        <View style={styles.grid}>
          {MODE_ORDER.map((kind, i) => {
            const info = MODE_INFO[kind];
            return (
              <Animated.View key={kind} entering={FadeInDown.delay(i * 40).springify().damping(26).stiffness(280).mass(1)} style={styles.cell}>
                <Bouncy onPress={() => router.push({ pathname: "/mode", params: { kind } })} scaleTo={0.96} style={styles.card} accessibilityLabel={info.title} testID={`mode-${kind}`}>
                  <LinearGradient colors={info.colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
                  <Icon name={info.icon as IconName} size={30} color="#fff" />
                  <View style={{ flex: 1 }} />
                  <AppText variant="headline" style={{ color: "#fff" }}>{info.title}</AppText>
                  <AppText variant="caption" style={{ color: "rgba(255,255,255,0.88)" }} numberOfLines={2}>{info.description}</AppText>
                </Bouncy>
              </Animated.View>
            );
          })}
        </View>

        <Bouncy onPress={() => router.push({ pathname: "/mode", params: { c: JSON.stringify({ kind: "anual", topicIds: [] }) } })} scaleTo={0.98} style={[styles.customize, { borderColor: c.accent, backgroundColor: c.surface }]} accessibilityLabel="Criar prova personalizada" testID="mode-custom-new">
          <Icon name="playlist-edit" size={24} color={c.accent} />
          <View style={{ flex: 1 }}>
            <AppText variant="label">Prova personalizada</AppText>
            <AppText variant="caption" dim>Várias matérias e os assuntos exatos que vão cair</AppText>
          </View>
          <Icon name="chevron-right" size={22} color={c.textDim} />
        </Bouncy>
        <Bouncy onPress={startWeakExam} scaleTo={0.98} style={[styles.customize, { borderColor: c.danger, backgroundColor: c.surface }]} accessibilityLabel="Simulado dos pontos fracos" testID="mode-weak">
          <Icon name="target" size={24} color={c.danger} />
          <View style={{ flex: 1 }}>
            <AppText variant="label">Pontos fracos</AppText>
            <AppText variant="caption" dim>Simulado com o que você mais erra</AppText>
          </View>
          <Icon name="chevron-right" size={22} color={c.textDim} />
        </Bouncy>

        {[{ heading: "Seus modos", list: saved }, { heading: "Continuar", list: recent.filter((r) => !saved.some((x) => modeKey(x) === modeKey(r))) }].filter((g) => g.list.length > 0).map((g) => (
          <View key={g.heading}>
            <AppText variant="headline" style={{ marginTop: space.xl, marginBottom: space.md }}>{g.heading}</AppText>
            {g.list.map((cfg) => {
              const { title, subtitle } = modeTitle(cfg);
              const info = MODE_INFO[cfg.kind];
              return (
                <Bouncy key={JSON.stringify(cfg)} onPress={() => openMode(cfg)} scaleTo={0.98} style={[styles.recent, { backgroundColor: c.surface, borderColor: c.border }]} accessibilityLabel={`${title}, ${subtitle}`}>
                  <LinearGradient colors={info.colors} style={styles.recentIcon}>
                    <Icon name={info.icon as IconName} size={20} color="#fff" />
                  </LinearGradient>
                  <View style={{ flex: 1 }}>
                    <AppText variant="label" numberOfLines={1}>{title}</AppText>
                    <AppText variant="caption" dim numberOfLines={1}>{subtitle}</AppText>
                  </View>
                  <Icon name="chevron-right" size={22} color={c.textDim} />
                </Bouncy>
              );
            })}
          </View>
        ))}

        <Bouncy onPress={() => router.push("/exam")} scaleTo={0.98} style={[styles.free, { borderColor: c.border }]} accessibilityLabel="Simulado livre">
          <Icon name="timer-outline" size={20} color={c.text} />
          <AppText variant="label" style={{ flex: 1 }}>Simulado livre por tema</AppText>
          <Icon name="chevron-right" size={22} color={c.textDim} />
        </Bouncy>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: space.sm },
  iconBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  grid: { flexDirection: "row", flexWrap: "wrap", marginHorizontal: -space.xs },
  cell: { width: "50%", padding: space.xs },
  card: { height: 150, padding: space.lg, borderRadius: radius.lg, overflow: "hidden" },
  recent: { flexDirection: "row", alignItems: "center", gap: space.md, padding: space.md, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, marginBottom: space.sm },
  recentIcon: { width: 40, height: 40, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  customize: { flexDirection: "row", alignItems: "center", gap: space.md, padding: space.lg, borderRadius: radius.lg, borderWidth: 1.5, marginTop: space.md },
  free: { flexDirection: "row", alignItems: "center", gap: space.md, padding: space.md, borderRadius: radius.md, borderWidth: 1, borderStyle: "dashed", marginTop: space.xl },
});
