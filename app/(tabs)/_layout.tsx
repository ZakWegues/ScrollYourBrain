import { mdiBookmarkMultiple, mdiBookmarkMultipleOutline, mdiCog, mdiCogOutline, mdiCompass, mdiCompassOutline, mdiPlayBoxMultiple, mdiPlayBoxMultipleOutline } from "@mdi/js";
import { BlurView } from "expo-blur";
import { Redirect } from "expo-router";
import { Tabs } from "expo-router/js-tabs";
import { Platform, StyleSheet } from "react-native";
import { JellyTabBar, pathIcon } from "react-native-jelly-tabs";
import { haptic } from "@/lib/haptics";
import { useSettings } from "@/store/settings";
import { fonts, useColors } from "@/theme";

const FeedIcon = pathIcon(mdiPlayBoxMultiple, { inactivePath: mdiPlayBoxMultipleOutline });
const ExploreIcon = pathIcon(mdiCompass, { inactivePath: mdiCompassOutline });
const LibraryIcon = pathIcon(mdiBookmarkMultiple, { inactivePath: mdiBookmarkMultipleOutline });
const SettingsIcon = pathIcon(mdiCog, { inactivePath: mdiCogOutline });
// pathIcon components are drawn natively by the jelly bar on Android; their colour prop is a plain string.

export default function TabLayout() {
  const c = useColors();
  const onboarded = useSettings((s) => s.onboarded);
  if (!onboarded) return <Redirect href="/onboarding" />;
  return (
    <Tabs
      screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: c.bg } }}
      screenListeners={{ tabPress: () => haptic.select() }}
      tabBar={(props) => (
        <JellyTabBar
          {...props}
          floating
          maxWidth={420}
          colors={{ surface: c.tab, selectedSurface: c.accent, activeContent: c.onAccent, inactiveContent: c.textDim }}
          opacity={{ surface: Platform.OS === "android" ? 0.96 : 0.78 }}
          backdrop={Platform.OS !== "android" ? <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill} /> : undefined}
          touchFeedbackColor={c.accent2}
          config={{ layout: { iconSize: 24, itemHeight: 52, trackHeight: 62 } }}
        />
      )}
    >
      <Tabs.Screen name="index" options={{ title: "Feed", tabBarIcon: FeedIcon as never, tabBarLabelStyle: { fontFamily: fonts.bodyBold } }} />
      <Tabs.Screen name="explore" options={{ title: "Explorar", tabBarIcon: ExploreIcon as never, tabBarLabelStyle: { fontFamily: fonts.bodyBold } }} />
      <Tabs.Screen name="library" options={{ title: "Biblioteca", tabBarIcon: LibraryIcon as never, tabBarLabelStyle: { fontFamily: fonts.bodyBold } }} />
      <Tabs.Screen name="settings" options={{ title: "Ajustes", tabBarIcon: SettingsIcon as never, tabBarLabelStyle: { fontFamily: fonts.bodyBold } }} />
    </Tabs>
  );
}
