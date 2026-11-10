import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withDelay, withSequence, withSpring, withTiming } from "react-native-reanimated";
import { AppText } from "./ui";
import { LogoMark } from "./Logo";

/** Picks up where the native splash ends (same mark, same background) and hands off to the app. */
export function AnimatedSplash({ bg, onDone, reduceMotion }: { bg: string; onDone: () => void; reduceMotion: boolean }) {
  const mark = useSharedValue(1);
  const word = useSharedValue(0);
  const fade = useSharedValue(1);

  useEffect(() => {
    if (reduceMotion) {
      fade.value = withTiming(0, { duration: 200 }, (ok) => ok && runOnJS(onDone)());
      return;
    }
    mark.value = withSequence(withTiming(0.88, { duration: 160, easing: Easing.out(Easing.quad) }), withSpring(1.06, { mass: 1, damping: 9, stiffness: 180 }));
    word.value = withDelay(220, withSpring(1, { mass: 1, damping: 16, stiffness: 140 }));
    fade.value = withDelay(820, withTiming(0, { duration: 280, easing: Easing.in(Easing.quad) }, (ok) => ok && runOnJS(onDone)()));
  }, [fade, mark, word, onDone, reduceMotion]);

  const root = useAnimatedStyle(() => ({ opacity: fade.value }));
  const markStyle = useAnimatedStyle(() => ({ transform: [{ scale: mark.value * (1 + (1 - fade.value) * 0.6) }] }));
  const wordStyle = useAnimatedStyle(() => ({ opacity: word.value, transform: [{ translateY: (1 - word.value) * 16 }] }));

  return (
    <Animated.View style={[StyleSheet.absoluteFill, styles.root, { backgroundColor: bg }, root]} pointerEvents="none">
      <Animated.View style={markStyle}>
        <LogoMark size={168} />
      </Animated.View>
      <Animated.View style={[styles.word, wordStyle]}>
        <AppText variant="title">ScrollYourBrain</AppText>
        <View style={{ height: 4 }} />
        <AppText variant="caption" dim>Estude no ritmo do scroll</AppText>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: { alignItems: "center", justifyContent: "center", zIndex: 100 },
  word: { position: "absolute", bottom: "22%", alignItems: "center" },
});
