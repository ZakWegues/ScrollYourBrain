import { router, useIsFocused } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, View, useWindowDimensions } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feed } from "@/components/Feed";
import { StreakPill } from "@/components/StreakPill";
import { AppText, Bouncy, GradientButton, Icon } from "@/components/ui";
import type { FeedSource } from "@/feed/useFeed";
import { haptic } from "@/lib/haptics";
import { useLibrary } from "@/store/library";
import { useSettings } from "@/store/settings";
import { useColors, useTheme } from "@/theme";

type Mode = "forYou" | "following" | "mix";
const MODES: { value: Mode; label: string }[] = [
  { value: "forYou", label: "Para você" },
  { value: "following", label: "Seguindo" },
  { value: "mix", label: "Mix" },
];

/** Text tabs over the video, with a sliding underline (reels style). */
function FeedTabs({ value, onChange }: { value: Mode; onChange: (m: Mode) => void }) {
  // Tabs share the row with the goal ring and search: cap the comfortable-text boost and shrink on narrow
  // screens so the three labels always fit (about 175dp of text at normal size, 156dp taken by the sides).
  const scale = useSettings((s) => s.textScale);
  const { width } = useWindowDimensions();
  const fit = Math.min(scale, 1.1, (width - 156) / 175) / scale;
  const [boxes, setBoxes] = useState<Partial<Record<Mode, { x: number; w: number }>>>({});
  const x = useSharedValue(0);
  const w = useSharedValue(0);
  const box = boxes[value];
  useEffect(() => {
    if (!box) return;
    const spring = { mass: 1, damping: 22, stiffness: 260 };
    x.set(withSpring(box.x + box.w / 2 - 11, spring));
    w.set(withSpring(22, spring));
  }, [box, x, w]);
  const bar = useAnimatedStyle(() => ({ width: w.get(), transform: [{ translateX: x.get() }] }));
  return (
    <View style={styles.tabs} accessibilityRole="tablist">
      {MODES.map((m) => {
        const on = m.value === value;
        return (
          <Pressable
            key={m.value}
            onLayout={(e) => {
              const { x: bx, width } = e.nativeEvent.layout;
              setBoxes((b) => (b[m.value]?.x === bx && b[m.value]?.w === width ? b : { ...b, [m.value]: { x: bx, w: width } }));
            }}
            onPress={() => {
              if (!on) haptic.select();
              onChange(m.value);
            }}
            hitSlop={8}
            style={styles.tab}
            accessibilityRole="tab"
            accessibilityState={{ selected: on }}
            testID={`feed-tab-${m.value}`}
          >
            <AppText variant="label" numberOfLines={1} maxFontSizeMultiplier={1.1} style={[styles.tabText, { opacity: on ? 1 : 0.62, fontSize: (on ? 15.5 : 14.5) * fit }]}>{m.label}</AppText>
          </Pressable>
        );
      })}
      <Animated.View style={[styles.underline, bar]} />
    </View>
  );
}

export default function FeedScreen() {
  const c = useColors();
  const light = useTheme().light;
  const focused = useIsFocused();
  const insets = useSafeAreaInsets();
  const [mode, setMode] = useState<Mode>("forYou");
  const source = useMemo<FeedSource>(() => ({ type: mode }), [mode]);
  const hasFollowed = useLibrary((s) => Object.keys(s.followed).length > 0);
  const hasLiked = useLibrary((s) => Object.keys(s.liked).length > 0);
  // Rebuild the feed when switching modes, or when "Seguindo"/"Mix" go from empty to filled.
  const feedKey = mode === "following" ? `following:${hasFollowed}` : mode === "mix" ? `mix:${hasLiked}` : "forYou";

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      {/* The feed is always dark, so the status bar stays light here. */}
      {focused && light && <StatusBar style="light" />}
      <Feed
        key={feedKey}
        source={source}
        emptyState={
          mode === "mix" ? (
            <View style={styles.empty}>
              <Icon name="heart-multiple-outline" size={56} color={c.accent} />
              <AppText variant="title" style={styles.center}>Curta cards para montar seu Mix</AppText>
              <AppText dim style={[styles.center, styles.sub]}>O Mix junta as contas que você mais curtiu, com revisões no meio.</AppText>
              <GradientButton label="Ir para Para você" icon="play-box-multiple-outline" onPress={() => setMode("forYou")} />
            </View>
          ) : (
            <View style={styles.empty}>
              <Icon name="account-heart-outline" size={56} color={c.accent} />
              <AppText variant="title" style={styles.center}>Siga páginas para montar seu feed</AppText>
              <AppText dim style={[styles.center, styles.sub]}>Toque no + do avatar em qualquer card ou explore os temas.</AppText>
              <GradientButton label="Explorar páginas" icon="compass-outline" onPress={() => router.navigate("/explore")} />
            </View>
          )
        }
      />
      <View style={[styles.top, { paddingTop: insets.top + 8 }]} pointerEvents="box-none">
        <View style={styles.side}>
          <StreakPill />
        </View>
        <FeedTabs value={mode} onChange={setMode} />
        <View style={[styles.side, { alignItems: "flex-end" }]}>
          <Bouncy onPress={() => router.navigate("/explore")} style={styles.search} accessibilityLabel="Pesquisar">
            <Icon name="magnify" size={26} color="#fff" />
          </Bouncy>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { position: "absolute", top: 0, left: 0, right: 0, paddingHorizontal: 12, flexDirection: "row", alignItems: "center" },
  side: { width: 48, justifyContent: "center" },
  tabs: { flex: 1, minWidth: 0, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 14, paddingBottom: 6, marginHorizontal: 4 },
  tab: { paddingVertical: 6, flexShrink: 1 },
  tabText: { color: "#fff", textShadowColor: "rgba(0,0,0,0.55)", textShadowRadius: 6, textShadowOffset: { width: 0, height: 1 } },
  underline: { position: "absolute", left: 0, bottom: 2, height: 3, borderRadius: 2, backgroundColor: "#fff" },
  search: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
  empty: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 32, paddingBottom: 80 },
  center: { textAlign: "center", marginTop: 14 },
  sub: { marginTop: 8, marginBottom: 22 },
});
