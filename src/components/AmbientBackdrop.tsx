import { LinearGradient } from "@/components/LinearGradient";
import { useEffect, useMemo } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import Animated, { Easing, cancelAnimation, useAnimatedStyle, useSharedValue, withRepeat, withTiming, type SharedValue } from "react-native-reanimated";
import Svg, { Circle, Path } from "react-native-svg";
import { getPage } from "@/data/pages";
import { useSettings } from "@/store/settings";
import { useColors, useTheme } from "@/theme";

/** A slow, endless 0→1 loop (or a still 0 when motion is reduced). */
function useLoop(duration: number, reverse = true): SharedValue<number> {
  const reduce = useSettings((s) => s.reduceMotion);
  const t = useSharedValue(0);
  useEffect(() => {
    if (reduce) {
      cancelAnimation(t);
      t.set(0.5);
      return;
    }
    t.set(withRepeat(withTiming(1, { duration, easing: reverse ? Easing.inOut(Easing.sin) : Easing.linear }), -1, reverse));
    return () => cancelAnimation(t);
  }, [duration, reduce, reverse, t]);
  return t;
}

/** A colour that eases to each new value instead of jumping. */
function useEasedColor(color: string): SharedValue<string> {
  const v = useSharedValue(color);
  useEffect(() => {
    v.set(withTiming(color, { duration: 1100, easing: Easing.inOut(Easing.quad) }));
  }, [color, v]);
  return v;
}

function Orbs({ a, b }: { a: string; b: string }) {
  const t = useLoop(22000);
  const ca = useEasedColor(a);
  const cb = useEasedColor(b);
  const orbA = useAnimatedStyle(() => ({ backgroundColor: ca.get(), transform: [{ translateX: -40 + t.get() * 80 }, { translateY: -30 + t.get() * 60 }, { scale: 1 + t.get() * 0.08 }] }));
  const orbB = useAnimatedStyle(() => ({ backgroundColor: cb.get(), transform: [{ translateX: 40 - t.get() * 80 }, { translateY: 40 - t.get() * 70 }, { scale: 1.06 - t.get() * 0.06 }] }));
  return (
    <>
      <Animated.View style={[styles.orb, { top: "6%", left: "-28%" }, orbA]} />
      <Animated.View style={[styles.orb, { bottom: "2%", right: "-32%" }, orbB]} />
    </>
  );
}

function Band({ duration, shift, tilt, top, width, from, to }: { duration: number; shift: number; tilt: number; top: string; width: number; from: string; to: string }) {
  const t = useLoop(duration);
  const style = useAnimatedStyle(() => ({ transform: [{ translateX: -shift + t.get() * shift * 2 }, { rotate: `${tilt}deg` }], opacity: 0.55 + t.get() * 0.25 }));
  return (
    <Animated.View style={[styles.band, { width: width * 1.8, left: -width * 0.4, top: top as `${number}%` }, style]}>
      <LinearGradient colors={["transparent", `${from}99`, `${to}55`, "transparent"]} locations={[0, 0.35, 0.65, 1]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={StyleSheet.absoluteFill} />
    </Animated.View>
  );
}

function AuroraBands({ colors, width }: { colors: readonly [string, string, string]; width: number }) {
  return (
    <>
      <Band duration={26000} shift={width * 0.25} tilt={-14} top="8%" width={width} from={colors[0]} to={colors[1]} />
      <Band duration={33000} shift={width * 0.3} tilt={-6} top="25%" width={width} from={colors[1]} to={colors[2]} />
      <Band duration={41000} shift={width * 0.2} tilt={10} top="42%" width={width} from={colors[2]} to={colors[0]} />
    </>
  );
}

/** Deterministic star positions so the sky never reshuffles. */
function makeStars(count: number) {
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  return Array.from({ length: count }, () => ({ x: rnd() * 100, y: rnd() * 100, r: 0.4 + rnd() * 1.3, o: 0.25 + rnd() * 0.7 }));
}
const STARS = makeStars(90);

function Stars({ tint, width, height }: { tint: string; width: number; height: number }) {
  const drift = useLoop(90000);
  const twinkle = useLoop(4200);
  const ct = useEasedColor(tint);
  const field = useAnimatedStyle(() => ({ transform: [{ translateY: -20 + drift.get() * 40 }] }));
  const bright = useAnimatedStyle(() => ({ opacity: 0.35 + twinkle.get() * 0.65 }));
  const nebula = useAnimatedStyle(() => ({ backgroundColor: ct.get(), transform: [{ scale: 1 + drift.get() * 0.1 }] }));
  const [dim, sparkle] = [STARS.filter((_, i) => i % 5 !== 0), STARS.filter((_, i) => i % 5 === 0)];
  const dots = (list: typeof STARS) => (
    <Svg width={width} height={height + 40}>
      {list.map((s, i) => <Circle key={i} cx={(s.x / 100) * width} cy={(s.y / 100) * (height + 40)} r={s.r} fill="#fff" opacity={s.o} />)}
    </Svg>
  );
  return (
    <>
      <Animated.View style={[styles.orb, { top: "18%", left: "-20%", opacity: 0.22 }, nebula]} />
      <Animated.View style={[StyleSheet.absoluteFill, { top: -20 }, field]}>{dots(dim)}</Animated.View>
      <Animated.View style={[StyleSheet.absoluteFill, { top: -20 }, field, bright]}>{dots(sparkle)}</Animated.View>
    </>
  );
}

/** One seamless wave strip, twice the screen width, sliding left forever. */
function wavePath(w: number, h: number, amp: number, phase: number) {
  const steps = 8;
  let d = `M 0 ${h}`;
  for (let i = 0; i <= steps * 2; i++) {
    const x = (i / steps) * w;
    const y = h * 0.35 + Math.sin((i / steps) * Math.PI * 2 + phase) * amp;
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return `${d} L ${2 * w} ${h} Z`;
}

function Waves({ colors, tint, width, height }: { colors: readonly [string, string, string]; tint: string; width: number; height: number }) {
  const t1 = useLoop(24000, false);
  const t2 = useLoop(37000, false);
  const h = height * 0.45;
  const w1 = useAnimatedStyle(() => ({ transform: [{ translateX: -t1.get() * width }] }));
  const w2 = useAnimatedStyle(() => ({ transform: [{ translateX: -width + t2.get() * width }] }));
  const ct = useEasedColor(tint);
  const glow = useAnimatedStyle(() => ({ backgroundColor: ct.get() }));
  const paths = useMemo(() => [wavePath(width, h, h * 0.06, 0), wavePath(width, h, h * 0.08, 1.7)], [width, h]);
  return (
    <>
      <Animated.View style={[styles.orb, { top: "10%", right: "-30%", opacity: 0.2 }, glow]} />
      <Animated.View style={[styles.wave, { height: h, width: width * 2 }, w2]}>
        <Svg width={width * 2} height={h}><Path d={paths[1]} fill={colors[2]} opacity={0.3} /></Svg>
      </Animated.View>
      <Animated.View style={[styles.wave, { height: h, width: width * 2 }, w1]}>
        <Svg width={width * 2} height={h}><Path d={paths[0]} fill={colors[0]} opacity={0.36} /></Svg>
      </Animated.View>
    </>
  );
}

/**
 * The theme's ambient background, drawn once behind the whole feed so it stays still while
 * cards scroll over it. Its tint eases toward the colours of the account on screen.
 */
export function AmbientBackdrop({ pageId }: { pageId?: string }) {
  const c = useColors();
  const theme = useTheme();
  const { width, height } = useWindowDimensions();
  const [a, b] = pageId ? getPage(pageId).colors : [theme.ambient[0], theme.ambient[1]];
  return (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: c.bg, overflow: "hidden" }]} pointerEvents="none">
      {theme.backdrop === "orbs" && <Orbs a={a} b={b} />}
      {theme.backdrop === "aurora" && <AuroraBands colors={[theme.ambient[0], a, theme.ambient[2]]} width={width} />}
      {theme.backdrop === "stars" && <Stars tint={a} width={width} height={height} />}
      {theme.backdrop === "waves" && <Waves colors={theme.ambient} tint={a} width={width} height={height} />}
      <LinearGradient colors={["transparent", c.bg]} locations={[0.3, 1]} style={[StyleSheet.absoluteFill, { opacity: 0.55 }]} />
      <View style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(0,0,0,0.18)" }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  orb: { position: "absolute", width: 440, height: 440, borderRadius: 220, opacity: 0.28 },
  band: { position: "absolute", height: 220 },
  wave: { position: "absolute", left: 0, bottom: "14%" },
});
