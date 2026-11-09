import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn, FadeInDown, FadeOut, cancelAnimation, useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated";
import type { ConceptItem } from "@/feed/types";
import { AppText, Glass, Icon } from "@/components/ui";
import { useSettings } from "@/store/settings";
import { useColors } from "@/theme";
import { Backdrop } from "./Backdrop";
import type { CardProps } from "./types";

const BEAT_MS = 2800;

/** A short "video" rendered in code: beats appear one by one, Stories-style, then the takeaway. */
export function ConceptCard({ item, active, tapNonce }: CardProps<ConceptItem>) {
  const c = useColors();
  const reduceMotion = useSettings((s) => s.reduceMotion);
  const steps = item.beats.length + 1; // last step = takeaway
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const progress = useSharedValue(0);
  const [seen, setSeen] = useState({ active, tapNonce });
  if (seen.active !== active || seen.tapNonce !== tapNonce) {
    setSeen({ active, tapNonce });
    if (!active) {
      setStep(0);
      setPaused(false);
    } else if (seen.tapNonce !== tapNonce) {
      setPaused((p) => !p);
    }
  }

  useEffect(() => {
    cancelAnimation(progress);
    if (!active) {
      progress.value = 0;
      return;
    }
    if (paused || step >= steps - 1) return;
    const remaining = BEAT_MS * (1 - progress.value);
    progress.value = withTiming(1, { duration: remaining, easing: Easing.linear });
    const id = setTimeout(() => {
      progress.value = 0;
      setStep((s) => Math.min(s + 1, steps - 1));
    }, remaining);
    return () => clearTimeout(id);
  }, [active, paused, step, steps, progress]);

  const bar = useAnimatedStyle(() => ({ width: `${progress.value * 100}%` }));
  const enter = reduceMotion ? FadeIn.duration(150) : FadeInDown.springify().damping(16).stiffness(140);
  const done = step >= steps - 1;

  return (
    <View style={StyleSheet.absoluteFill}>
      <Backdrop pageId={item.pageId} active={active} />
      <View style={styles.bars}>
        {Array.from({ length: steps }, (_, i) => (
          <View key={i} style={[styles.track, { backgroundColor: "rgba(255,255,255,0.18)" }]}>
            {i < step && <View style={[styles.fill, { width: "100%" }]} />}
            {i === step && !done && <Animated.View style={[styles.fill, bar]} />}
            {i === step && done && <View style={[styles.fill, { width: "100%" }]} />}
          </View>
        ))}
      </View>
      <View style={styles.center}>
        <AppText variant="caption" dim style={styles.kicker}>{item.title.toUpperCase()}</AppText>
        {item.beats.slice(0, Math.min(step + 1, item.beats.length)).map((beat, i) => {
          const current = i === Math.min(step, item.beats.length - 1) && !done;
          return (
            <Animated.View key={i} entering={enter}>
              <AppText variant={current ? "title" : "headline"} style={{ color: current ? c.text : c.textDim, marginBottom: 14 }}>
                {beat}
              </AppText>
            </Animated.View>
          );
        })}
        {done && (
          <Animated.View entering={enter}>
            <Glass style={styles.takeaway}>
              <Icon name="lightbulb-on" size={20} color={c.save} />
              <AppText variant="label" style={{ flex: 1 }}>{item.takeaway}</AppText>
            </Glass>
          </Animated.View>
        )}
      </View>
      {paused && (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.pause} pointerEvents="none">
          <Icon name="pause" size={44} color="rgba(255,255,255,0.85)" />
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bars: { position: "absolute", top: 112, left: 16, right: 16, flexDirection: "row", gap: 4 },
  track: { flex: 1, height: 3, borderRadius: 2, overflow: "hidden" },
  fill: { height: 3, backgroundColor: "#fff", borderRadius: 2 },
  center: { flex: 1, justifyContent: "center", paddingLeft: 24, paddingRight: 84, paddingBottom: 120 },
  kicker: { letterSpacing: 2, marginBottom: 18 },
  takeaway: { flexDirection: "row", alignItems: "center", gap: 12, padding: 16, marginTop: 6 },
  pause: { ...StyleSheet.absoluteFill, alignItems: "center", justifyContent: "center" },
});
