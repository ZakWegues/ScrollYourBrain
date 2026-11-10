import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Animated, { FadeInDown, FadeInRight, FadeOutLeft, ZoomIn } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LogoMark } from "@/components/Logo";
import { AppText, Bouncy, GradientButton, Icon, type IconName } from "@/components/ui";
import { PAGES } from "@/data/pages";
import { haptic } from "@/lib/haptics";
import { useLibrary } from "@/store/library";
import { useSettings } from "@/store/settings";
import { radius, useColors } from "@/theme";

const MIN_TOPICS = 3;
const GOALS = [
  { value: 5, label: "Leve", desc: "~3 min por dia" },
  { value: 10, label: "Regular", desc: "~6 min por dia" },
  { value: 20, label: "Focado", desc: "~12 min por dia" },
  { value: 30, label: "Intenso", desc: "~20 min por dia" },
];

export default function Onboarding() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const settings = useSettings();
  const [step, setStep] = useState<0 | 1>(0);
  const [picked, setPicked] = useState<string[]>(settings.interests);
  const [goal, setGoal] = useState(settings.dailyGoal);
  const enough = picked.length >= MIN_TOPICS;

  const toggle = (id: string) => {
    haptic.select();
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  };

  const finish = () => {
    const lib = useLibrary.getState();
    for (const id of picked) if (!lib.followed[id]) lib.toggleFollow(id);
    settings.set({ interests: picked, dailyGoal: goal, onboarded: true });
    haptic.success();
    router.replace("/");
  };

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <LinearGradient colors={["rgba(139,92,246,0.28)", "transparent"]} style={styles.glow} pointerEvents="none" />
      <View style={[styles.progress, { top: insets.top + 12 }]}>
        {[0, 1].map((i) => (
          <View key={i} style={[styles.dot, { backgroundColor: i <= step ? c.accent : c.surface2, width: i === step ? 28 : 8 }]} />
        ))}
      </View>

      {step === 0 ? (
        <Animated.View key="topics" entering={FadeInRight} exiting={FadeOutLeft} style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ paddingTop: insets.top + 44, paddingHorizontal: 16, paddingBottom: 140 }} showsVerticalScrollIndicator={false}>
            <Animated.View entering={ZoomIn.springify().damping(26).stiffness(280).mass(1)} style={{ alignSelf: "center" }}>
              <LogoMark size={84} />
            </Animated.View>
            <AppText variant="display" style={styles.center}>O que você quer aprender?</AppText>
            <AppText dim style={[styles.center, { marginTop: 6, marginBottom: 20 }]}>
              Escolha pelo menos {MIN_TOPICS} temas. Eles abrem seu feed e você segue as páginas.
            </AppText>
            <View style={styles.grid}>
              {PAGES.map((p, i) => {
                const on = picked.includes(p.id);
                return (
                  <Animated.View key={p.id} entering={FadeInDown.delay(80 + i * 35).springify().damping(26).stiffness(280).mass(1)} style={styles.cell}>
                    <Bouncy
                      onPress={() => toggle(p.id)}
                      scaleTo={0.94}
                      style={[styles.topic, { borderColor: on ? "#fff" : c.border, backgroundColor: c.surface }]}
                      accessibilityRole="checkbox"
                      accessibilityState={{ checked: on }}
                      accessibilityLabel={p.name}
                      testID={`topic-${p.id}`}
                    >
                      {on && <LinearGradient colors={p.colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />}
                      <Icon name={p.icon as IconName} size={28} color={on ? "#fff" : p.colors[1]} />
                      <AppText variant="label" style={{ marginTop: 8, color: on ? "#fff" : c.text }} numberOfLines={1}>{p.name}</AppText>
                      {on && (
                        <Animated.View entering={ZoomIn.springify().damping(18).stiffness(320).mass(1)} style={styles.check}>
                          <Icon name="check" size={14} color="#000" />
                        </Animated.View>
                      )}
                    </Bouncy>
                  </Animated.View>
                );
              })}
            </View>
          </ScrollView>
          <View style={[styles.footer, { paddingBottom: insets.bottom + 16, backgroundColor: c.bg }]}>
            <GradientButton
              label={enough ? `Continuar com ${picked.length} temas` : `Escolha mais ${MIN_TOPICS - picked.length}`}
              icon={enough ? "arrow-right" : "gesture-tap"}
              onPress={() => (enough ? setStep(1) : haptic.error())}
              style={{ opacity: enough ? 1 : 0.45 }}
            />
          </View>
        </Animated.View>
      ) : (
        <Animated.View key="goal" entering={FadeInRight} exiting={FadeOutLeft} style={{ flex: 1, paddingTop: insets.top + 56, paddingHorizontal: 16 }}>
          <Icon name="fire" size={56} color="#FB923C" style={{ alignSelf: "center" }} />
          <AppText variant="display" style={styles.center}>Qual sua meta diária?</AppText>
          <AppText dim style={[styles.center, { marginTop: 6, marginBottom: 22 }]}>
            Bata a meta todo dia para manter sua sequência acesa. Dá para mudar depois nos Ajustes.
          </AppText>
          {GOALS.map((g, i) => {
            const on = g.value === goal;
            return (
              <Animated.View key={g.value} entering={FadeInDown.delay(i * 60).springify().damping(26).stiffness(280).mass(1)}>
                <Bouncy
                  onPress={() => { setGoal(g.value); haptic.select(); }}
                  scaleTo={0.97}
                  style={[styles.goal, { borderColor: on ? c.accent : c.border, backgroundColor: on ? "rgba(139,92,246,0.16)" : c.surface }]}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: on }}
                  testID={`goal-${g.value}`}
                >
                  <Icon name={on ? "radiobox-marked" : "radiobox-blank"} size={22} color={on ? c.accent : c.textDim} />
                  <View style={{ flex: 1 }}>
                    <AppText variant="label">{g.label}</AppText>
                    <AppText variant="caption" dim>{g.desc}</AppText>
                  </View>
                  <AppText variant="headline">{g.value} cards</AppText>
                </Bouncy>
              </Animated.View>
            );
          })}
          <View style={{ flex: 1 }} />
          <View style={[styles.row, { paddingBottom: insets.bottom + 16 }]}>
            <Bouncy onPress={() => setStep(0)} style={[styles.back, { borderColor: c.border }]} accessibilityLabel="Voltar">
              <Icon name="chevron-left" size={26} color={c.text} />
            </Bouncy>
            <GradientButton label="Começar a estudar" icon="play" onPress={finish} style={{ flex: 1 }} />
          </View>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  glow: { position: "absolute", top: 0, left: 0, right: 0, height: 360 },
  progress: { position: "absolute", left: 0, right: 0, flexDirection: "row", justifyContent: "center", gap: 6, zIndex: 2 },
  dot: { height: 8, borderRadius: 4 },
  center: { textAlign: "center", marginTop: 14 },
  grid: { flexDirection: "row", flexWrap: "wrap", marginHorizontal: -5 },
  cell: { width: "33.333%", padding: 5 },
  topic: { aspectRatio: 1, borderRadius: radius.lg, borderWidth: 1.5, alignItems: "center", justifyContent: "center", overflow: "hidden", padding: 8 },
  check: { position: "absolute", top: 8, right: 8, width: 20, height: 20, borderRadius: 10, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
  footer: { position: "absolute", left: 0, right: 0, bottom: 0, paddingHorizontal: 16, paddingTop: 12 },
  goal: { flexDirection: "row", alignItems: "center", gap: 12, padding: 16, borderRadius: radius.lg, borderWidth: 1.5, marginBottom: 10 },
  row: { flexDirection: "row", gap: 10, alignItems: "center" },
  back: { width: 50, height: 50, borderRadius: 25, borderWidth: 1, alignItems: "center", justifyContent: "center" },
});
