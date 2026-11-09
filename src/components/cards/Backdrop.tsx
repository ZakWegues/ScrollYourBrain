import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, cancelAnimation, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { getPage } from "@/data/pages";
import { useColors } from "@/theme";
import { useSettings } from "@/store/settings";

/** Ambient animated background: two soft orbs in the page's colours drifting over the theme background. */
export function Backdrop({ pageId, active }: { pageId: string; active: boolean }) {
  const c = useColors();
  const [a, b] = getPage(pageId).colors;
  const reduceMotion = useSettings((s) => s.reduceMotion);
  const t = useSharedValue(0);

  useEffect(() => {
    if (active && !reduceMotion) {
      t.value = withRepeat(withTiming(1, { duration: 9000, easing: Easing.inOut(Easing.sin) }), -1, true);
    } else {
      cancelAnimation(t);
    }
  }, [active, reduceMotion, t]);

  const orbA = useAnimatedStyle(() => ({ transform: [{ translateX: -60 + t.value * 120 }, { translateY: -40 + t.value * 80 }, { scale: 1 + t.value * 0.15 }] }));
  const orbB = useAnimatedStyle(() => ({ transform: [{ translateX: 50 - t.value * 110 }, { translateY: 60 - t.value * 90 }, { scale: 1.1 - t.value * 0.12 }] }));

  return (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: c.bg, overflow: "hidden" }]} pointerEvents="none">
      <Animated.View style={[styles.orb, { top: "8%", left: "-25%", backgroundColor: a }, orbA]} />
      <Animated.View style={[styles.orb, { bottom: "4%", right: "-30%", backgroundColor: b }, orbB]} />
      <LinearGradient colors={["transparent", c.bg]} locations={[0.35, 1]} style={StyleSheet.absoluteFill} />
      <View style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(0,0,0,0.28)" }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  orb: { position: "absolute", width: 420, height: 420, borderRadius: 210, opacity: 0.32 },
});
