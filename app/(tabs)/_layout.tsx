import { mdiBookmarkMultiple, mdiBookmarkMultipleOutline, mdiCog, mdiCogOutline, mdiCompass, mdiCompassOutline, mdiPlayBoxMultiple, mdiPlayBoxMultipleOutline } from "@mdi/js";
import { BlurView } from "expo-blur";
import { Redirect } from "expo-router";
import { Tabs } from "expo-router/js-tabs";
import { useEffect } from "react";
import { Platform, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated";
import { JellyTabBar, pathIcon } from "react-native-jelly-tabs";
import { haptic } from "@/lib/haptics";
import { useChrome } from "@/store/chrome";
import { useSettings } from "@/store/settings";
import { fonts, useColors, useTheme } from "@/theme";

const FeedIcon = pathIcon(mdiPlayBoxMultiple, { inactivePath: mdiPlayBoxMultipleOutline });
const ExploreIcon = pathIcon(mdiCompass, { inactivePath: mdiCompassOutline });
const LibraryIcon = pathIcon(mdiBookmarkMultiple, { inactivePath: mdiBookmarkMultipleOutline });
const SettingsIcon = pathIcon(mdiCog, { inactivePath: mdiCogOutline });
// pathIcon components are drawn natively by the jelly bar on Android; their colour prop is a plain string.

/** Slides the floating bar out of the way while the feed is being scrolled. */
function AutoHide({ children }: { children: React.ReactNode }) {
  const hidden = useChrome((s) => s.tabBarHidden);
  const reduce = useSettings((s) => s.reduceMotion);
  const t = useSharedValue(0);
  useEffect(() => {
    t.set(withTiming(hidden ? 1 : 0, { duration: reduce ? 0 : hidden ? 220 : 280, easing: Easing.out(Easing.cubic) }));
  }, [hidden, reduce, t]);
  const style = useAnimatedStyle(() => ({ opacity: 1 - t.get() * 0.85, transform: [{ translateY: t.get() * 110 }] }));
  return (
    <Animated.View pointerEvents={hidden ? "none" : "box-none"} style={[styles.bar, style]}>
      {children}
    </Animated.View>
  );
}

export default function TabLayout() {
  const c = useColors();
  const light = useTheme().light;
  const onboarded = useSettings((s) => s.onboarded);
  if (!onboarded) return <Redirect href="/onboarding" />;
  return (
    <Tabs
      screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: c.bg } }}
      screenListeners={{ tabPress: () => haptic.select() }}
      tabBar={(props) => (
        <AutoHide>
        <JellyTabBar
          {...props}
          floating
          maxWidth={420}
          colors={{ surface: c.tab, selectedSurface: c.accent, activeContent: c.onAccent, inactiveContent: c.textDim }}
          opacity={{ surface: Platform.OS === "android" ? 0.96 : 0.78 }}
          backdrop={Platform.OS !== "android" ? <BlurView intensity={50} tint={light ? "light" : "dark"} style={StyleSheet.absoluteFill} /> : undefined}
          touchFeedbackColor={c.accent2}
          config={{ layout: { iconSize: 24, itemHeight: 52, trackHeight: 62 } }}
        />
        </AutoHide>
      )}
    >
      <Tabs.Screen name="index" options={{ title: "Feed", tabBarIcon: FeedIcon as never, tabBarLabelStyle: { fontFamily: fonts.bodyBold } }} />
      <Tabs.Screen name="explore" options={{ title: "Explorar", tabBarIcon: ExploreIcon as never, tabBarLabelStyle: { fontFamily: fonts.bodyBold } }} />
      <Tabs.Screen name="library" options={{ title: "Biblioteca", tabBarIcon: LibraryIcon as never, tabBarLabelStyle: { fontFamily: fonts.bodyBold } }} />
      <Tabs.Screen name="settings" options={{ title: "Ajustes", tabBarIcon: SettingsIcon as never, tabBarLabelStyle: { fontFamily: fonts.bodyBold } }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: { position: "absolute", left: 0, right: 0, bottom: 0 },
});
