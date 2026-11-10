import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import type { ComponentProps, ReactNode } from "react";
import { Platform, Pressable, StyleSheet, Text, View, type PressableProps, type StyleProp, type TextProps, type TextStyle, type ViewStyle } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { getPage } from "@/data/pages";
import { useSettings } from "@/store/settings";
import { fonts, radius, useColors } from "@/theme";

export type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];
export const Icon = MaterialCommunityIcons;

type Variant = "display" | "title" | "headline" | "body" | "label" | "caption";

const variantStyle: Record<Variant, object> = {
  display: { fontFamily: fonts.display, fontSize: 34, lineHeight: 40, letterSpacing: -0.8 },
  title: { fontFamily: fonts.display, fontSize: 26, lineHeight: 32, letterSpacing: -0.5 },
  headline: { fontFamily: fonts.displayMid, fontSize: 18, lineHeight: 24, letterSpacing: -0.2 },
  body: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22 },
  label: { fontFamily: fonts.bodyBold, fontSize: 14, lineHeight: 18 },
  caption: { fontFamily: fonts.bodyMid, fontSize: 12, lineHeight: 16, letterSpacing: 0.2 },
};

/** Themed text. Scales with the "Texto confortável" setting and, up to a limit, with the system font size. */
export function AppText({ variant = "body", dim, style, ...rest }: TextProps & { variant?: Variant; dim?: boolean }) {
  const c = useColors();
  const scale = useSettings((s) => s.textScale);
  const flat = StyleSheet.flatten([variantStyle[variant], { color: dim ? c.textDim : c.text }, style]) as TextStyle;
  const sized = scale === 1 ? flat : { ...flat, fontSize: flat.fontSize && flat.fontSize * scale, lineHeight: flat.lineHeight && flat.lineHeight * scale };
  return <Text maxFontSizeMultiplier={1.3} {...rest} style={sized} />;
}

/** Frosted surface; blur where the platform renders it cheaply, a translucent fill elsewhere. */
export function Glass({ children, style, intensity = 40 }: { children?: ReactNode; style?: StyleProp<ViewStyle>; intensity?: number }) {
  const c = useColors();
  return (
    <View style={[styles.glass, { borderColor: c.border, backgroundColor: c.glass }, style]}>
      {Platform.OS !== "android" && <BlurView intensity={intensity} tint="dark" style={[StyleSheet.absoluteFill, styles.under]} />}
      {children}
    </View>
  );
}

export function PageAvatar({ pageId, size = 40 }: { pageId: string; size?: number }) {
  const page = getPage(pageId);
  return (
    <LinearGradient colors={page.colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ width: size, height: size, borderRadius: size / 2, alignItems: "center", justifyContent: "center" }}>
      <Icon name={page.icon as IconName} size={size * 0.52} color="#fff" />
    </LinearGradient>
  );
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/** Pressable that springs down slightly on touch. Layout styles apply to the pressable itself. */
export function Bouncy({ children, style, scaleTo = 0.92, ...rest }: Omit<PressableProps, "style"> & { style?: StyleProp<ViewStyle>; scaleTo?: number; children?: ReactNode }) {
  const scale = useSharedValue(1);
  const anim = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));
  return (
    <AnimatedPressable
      {...rest}
      style={[style, anim]}
      onPressIn={(e) => { scale.set(withSpring(scaleTo, { mass: 1, damping: 18, stiffness: 420 })); rest.onPressIn?.(e); }}
      onPressOut={(e) => { scale.set(withSpring(1, { mass: 1, damping: 20, stiffness: 380 })); rest.onPressOut?.(e); }}
    >
      {children}
    </AnimatedPressable>
  );
}

/** Pill switcher. `fill` stretches it to the full width with equal segments. */
export function Segmented<T extends string>({ value, options, onChange, fill }: { value: T; options: { value: T; label: string }[]; onChange: (v: T) => void; fill?: boolean }) {
  const c = useColors();
  return (
    <View style={[styles.segment, fill && styles.segmentFill, { backgroundColor: c.surface2, borderColor: c.border }]}>
      {options.map((o) => {
        const on = o.value === value;
        return (
          <Pressable key={o.value} onPress={() => onChange(o.value)} style={[styles.segmentItem, fill && styles.segmentItemFill, on && { backgroundColor: c.text }]} accessibilityRole="tab" accessibilityState={{ selected: on }}>
            <AppText variant="label" numberOfLines={1} style={{ color: on ? c.bg : c.textDim }}>{o.label}</AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

export function Chip({ label, active, onPress, icon }: { label: string; active?: boolean; onPress?: () => void; icon?: IconName }) {
  const c = useColors();
  return (
    <Bouncy onPress={onPress} style={[styles.chip, { borderColor: active ? c.accent : c.border, backgroundColor: active ? "rgba(139,92,246,0.18)" : c.surface }]}>
      {icon && <Icon name={icon} size={16} color={active ? c.text : c.textDim} />}
      <AppText variant="label" style={{ color: active ? c.text : c.textDim }}>{label}</AppText>
    </Bouncy>
  );
}

export function GradientButton({ label, onPress, icon, style }: { label: string; onPress: () => void; icon?: IconName; style?: StyleProp<ViewStyle> }) {
  return (
    <Bouncy onPress={onPress} style={style}>
      <LinearGradient colors={["#8B5CF6", "#22D3EE"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.gradBtn}>
        {icon && <Icon name={icon} size={18} color="#fff" />}
        <AppText variant="label" style={{ color: "#fff" }}>{label}</AppText>
      </LinearGradient>
    </Bouncy>
  );
}

const styles = StyleSheet.create({
  // zIndex 0 makes the surface its own stacking context so the blur (zIndex -1) stays behind inputs on web.
  glass: { overflow: "hidden", borderRadius: radius.lg, borderWidth: StyleSheet.hairlineWidth, zIndex: 0 },
  under: { zIndex: -1 },
  segment: { flexDirection: "row", borderRadius: radius.pill, padding: 4, borderWidth: StyleSheet.hairlineWidth, alignSelf: "flex-start" },
  segmentItem: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: radius.pill },
  segmentFill: { alignSelf: "stretch" },
  segmentItemFill: { flex: 1, alignItems: "center", paddingHorizontal: 4 },
  chip: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 14, paddingVertical: 9, borderRadius: radius.pill, borderWidth: 1 },
  gradBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingHorizontal: 20, paddingVertical: 13, borderRadius: radius.pill },
});
