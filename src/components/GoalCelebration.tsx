import { useEffect, useMemo } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import Animated, { Easing, FadeIn, FadeOut, ZoomIn, useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { haptic } from "@/lib/haptics";
import { useCelebration, useToday } from "@/store/progress";
import { useSettings } from "@/store/settings";
import { AppText, GradientButton, Icon } from "./ui";

const COLORS = ["#8B5CF6", "#22D3EE", "#FB923C", "#F472B6", "#34D399", "#FBBF24"];

function Particle({ angle, distance, color, delay, size }: { angle: number; distance: number; color: string; delay: number; size: number }) {
  const t = useSharedValue(0);
  useEffect(() => {
    t.set(withDelay(delay, withTiming(1, { duration: 1100, easing: Easing.out(Easing.cubic) })));
  }, [t, delay]);
  const style = useAnimatedStyle(() => ({
    opacity: 1 - t.value * t.value,
    transform: [
      { translateX: Math.cos(angle) * distance * t.value },
      { translateY: Math.sin(angle) * distance * t.value + 120 * t.value * t.value },
      { rotate: `${t.value * 540}deg` },
    ],
  }));
  return <Animated.View style={[styles.particle, { backgroundColor: color, width: size, height: size * 0.5 }, style]} />;
}

/** Full-screen burst shown once a day when the daily goal is reached. */
export function GoalCelebration() {
  const visible = useCelebration((s) => s.visible);
  const hide = useCelebration((s) => s.hide);
  const reduceMotion = useSettings((s) => s.reduceMotion);
  const { streak, goal } = useToday();
  const { width } = useWindowDimensions();
  const particles = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        angle: (i / 36) * Math.PI * 2 + (i % 3) * 0.2,
        distance: width * (0.35 + (i % 5) * 0.08),
        color: COLORS[i % COLORS.length],
        delay: (i % 4) * 40,
        size: 10 + (i % 3) * 4,
      })),
    [width],
  );

  useEffect(() => {
    if (!visible) return;
    haptic.success();
    const id = setTimeout(hide, 4500);
    return () => clearTimeout(id);
  }, [visible, hide]);

  if (!visible) return null;
  return (
    <Animated.View entering={FadeIn.duration(200)} exiting={FadeOut.duration(250)} style={[StyleSheet.absoluteFill, styles.root]} testID="goal-celebration">
      <View style={styles.center} pointerEvents="none">
        {!reduceMotion && particles.map((p, i) => <Particle key={i} {...p} />)}
      </View>
      <Animated.View entering={ZoomIn.springify().damping(18).stiffness(260).mass(1)} style={styles.card}>
        <Icon name="fire" size={64} color="#FB923C" />
        <AppText variant="title" style={{ textAlign: "center", marginTop: 6 }}>Meta do dia batida!</AppText>
        <AppText dim style={{ textAlign: "center", marginTop: 6 }}>
          {goal} cards estudados hoje. Sequência de {streak} {streak === 1 ? "dia" : "dias"}.
        </AppText>
        <GradientButton label="Continuar estudando" icon="arrow-right" onPress={hide} style={{ marginTop: 18 }} />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: { backgroundColor: "rgba(0,0,0,0.72)", alignItems: "center", justifyContent: "center", zIndex: 50 },
  center: { position: "absolute", top: "50%", left: "50%" },
  particle: { position: "absolute", borderRadius: 2 },
  card: { alignItems: "center", paddingHorizontal: 28, maxWidth: 340 },
});
