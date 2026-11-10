import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import { useToday } from "@/store/progress";
import { useColors } from "@/theme";
import { AppText, Bouncy, Icon } from "./ui";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const SIZE = 30;
const STROKE = 3.5;
const R = (SIZE - STROKE) / 2;
const CIRC = 2 * Math.PI * R;

/** Flame + streak count and a ring that fills toward today's goal. */
export function StreakPill() {
  const c = useColors();
  const { count, goal, streak, done } = useToday();
  const fill = useSharedValue(0);
  const bump = useSharedValue(1);

  useEffect(() => {
    fill.set(withTiming(Math.min(count / goal, 1), { duration: 450 }));
    if (count > 0) bump.set(withSequence(withSpring(1.12, { damping: 8, stiffness: 400 }), withSpring(1)));
  }, [count, goal, fill, bump]);

  const ring = useAnimatedProps(() => ({ strokeDashoffset: CIRC * (1 - fill.value) }));
  const pop = useAnimatedStyle(() => ({ transform: [{ scale: bump.value }] }));

  return (
    <Bouncy onPress={() => router.navigate("/library")} accessibilityLabel={`Sequência de ${streak} dias. Hoje ${count} de ${goal} cards.`} testID="streak-pill">
      <Animated.View style={[styles.pill, { backgroundColor: "rgba(0,0,0,0.45)", borderColor: c.border }, pop]}>
        <Icon name="fire" size={18} color={streak > 0 ? "#FB923C" : c.textMute} />
        <AppText variant="label">{streak}</AppText>
        <View style={styles.ring}>
          <Svg width={SIZE} height={SIZE}>
            <Circle cx={SIZE / 2} cy={SIZE / 2} r={R} stroke="rgba(255,255,255,0.15)" strokeWidth={STROKE} fill="none" />
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
          <View style={styles.ringLabel}>
            {done ? <Icon name="check" size={14} color={c.success} /> : <AppText variant="caption" style={{ fontSize: 10 }}>{count}</AppText>}
          </View>
        </View>
      </Animated.View>
    </Bouncy>
  );
}

const styles = StyleSheet.create({
  pill: { flexDirection: "row", alignItems: "center", gap: 6, paddingLeft: 10, paddingRight: 4, height: 38, borderRadius: 19, borderWidth: StyleSheet.hairlineWidth },
  ring: { width: SIZE, height: SIZE },
  ringLabel: { ...StyleSheet.absoluteFill, alignItems: "center", justifyContent: "center" },
});
