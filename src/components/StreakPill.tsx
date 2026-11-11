import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import { useToday } from "@/store/progress";
import { useColors } from "@/theme";
import { Bouncy, Icon } from "./ui";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const SIZE = 40;
const STROKE = 3.5;
const R = (SIZE - STROKE) / 2;
const CIRC = 2 * Math.PI * R;

/** A ring that fills toward today's goal, with the flame inside and the streak as a small badge. */
export function StreakPill() {
  const c = useColors();
  const { count, goal, streak, done } = useToday();
  const fill = useSharedValue(0);
  const bump = useSharedValue(1);

  useEffect(() => {
    fill.set(withTiming(Math.min(count / goal, 1), { duration: 450 }));
    if (count > 0) bump.set(withSequence(withSpring(1.12, { mass: 1, damping: 10, stiffness: 400 }), withSpring(1, { mass: 1, damping: 18, stiffness: 300 })));
  }, [count, goal, fill, bump]);

  const ring = useAnimatedProps(() => ({ strokeDashoffset: CIRC * (1 - fill.value) }));
  const pop = useAnimatedStyle(() => ({ transform: [{ scale: bump.value }] }));

  return (
    <Bouncy onPress={() => router.navigate("/library")} accessibilityLabel={`Sequência de ${streak} dias. Hoje ${count} de ${goal} cards.`} testID="streak-pill">
      <Animated.View style={[styles.pill, { backgroundColor: "rgba(0,0,0,0.45)" }, pop]}>
        <Svg width={SIZE} height={SIZE} style={StyleSheet.absoluteFill}>
          <Circle cx={SIZE / 2} cy={SIZE / 2} r={R} stroke="rgba(255,255,255,0.18)" strokeWidth={STROKE} fill="none" />
          <AnimatedCircle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={R}
            stroke={done ? c.success : c.accent2}
            strokeWidth={STROKE}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${CIRC} ${CIRC}`}
            animatedProps={ring}
            transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
          />
        </Svg>
        <Icon name={done ? "check-bold" : "fire"} size={19} color={done ? c.success : streak > 0 ? "#FB923C" : "rgba(255,255,255,0.6)"} />
        {streak > 0 && (
          <View style={[styles.badge, { backgroundColor: "#FB923C" }]}>
            <Text style={styles.badgeText} maxFontSizeMultiplier={1}>{streak > 99 ? "99+" : streak}</Text>
          </View>
        )}
      </Animated.View>
    </Bouncy>
  );
}

const styles = StyleSheet.create({
  pill: { width: SIZE, height: SIZE, borderRadius: SIZE / 2, alignItems: "center", justifyContent: "center" },
  badge: { position: "absolute", right: -6, bottom: -4, minWidth: 18, height: 18, paddingHorizontal: 4, borderRadius: 9, alignItems: "center", justifyContent: "center", borderWidth: 1.5, borderColor: "#000" },
  badgeText: { color: "#fff", fontSize: 10.5, fontWeight: "800", lineHeight: 13 },
});
