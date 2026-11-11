import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { SpaceGrotesk_600SemiBold, SpaceGrotesk_700Bold } from "@expo-google-fonts/space-grotesk";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { DarkTheme, Stack, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AppState, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { AnimatedSplash } from "@/components/AnimatedSplash";
import { GoalCelebration } from "@/components/GoalCelebration";
import { ShareCardHost } from "@/components/ShareCard";
import { SheetsHost } from "@/components/Sheets";
import { OfflineBadge } from "@/components/OfflineBadge";
import { ToastHost } from "@/components/Toast";
import { useNetworkWatcher } from "@/store/network";
import { useAchievementWatcher } from "@/store/achievementWatcher";
import { useStoresHydrated } from "@/store/hydration";
import { scheduleReminder } from "@/lib/notifications";
import { useToday } from "@/store/progress";
import { useWidgetSync } from "@/widget/sync";
import { useSettings } from "@/store/settings";
import { useColors, useTheme } from "@/theme";
import { showTabBar } from "@/store/chrome";

SplashScreen.preventAutoHideAsync().catch(() => {});
SplashScreen.setOptions({ fade: true, duration: 150 });

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    ...MaterialCommunityIcons.font,
  });
  const hydrated = useStoresHydrated();
  useAchievementWatcher(hydrated);
  useNetworkWatcher();
  const reminder = useSettings((s) => s.reminder);
  const { streak, goal, count } = useToday();
  useWidgetSync(streak, count, goal, hydrated);
  // Keep the reminder text in sync with the current streak and goal.
  useEffect(() => {
    if (hydrated && reminder !== null) scheduleReminder(reminder, streak, goal).catch(() => {});
  }, [hydrated, reminder, streak, goal]);
  // Leaving or returning to the app cancels any half-finished swipe, so the tab bar must come back.
  useEffect(() => {
    const sub = AppState.addEventListener("change", () => showTabBar());
    return () => sub.remove();
  }, []);
  const c = useColors();
  const light = useTheme().light;
  const reduceMotion = useSettings((s) => s.reduceMotion);
  const [splashDone, setSplashDone] = useState(false);
  const ready = (fontsLoaded || !!fontError) && hydrated;

  useEffect(() => {
    if (ready) SplashScreen.hideAsync().catch(() => {});
  }, [ready]);

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(c.bg).catch(() => {});
  }, [c.bg]);

  const navTheme = useMemo(
    () => ({ ...DarkTheme, colors: { ...DarkTheme.colors, background: c.bg, card: c.bg, primary: c.accent, text: c.text, border: c.border } }),
    [c],
  );
  const finishSplash = useCallback(() => setSplashDone(true), []);

  if (!ready) return <View style={{ flex: 1, backgroundColor: c.bg }} />;

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: c.bg }}>
      <KeyboardProvider>
      <ThemeProvider value={navTheme}>
        <StatusBar style={light ? "dark" : "light"} />
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: c.bg }, animation: "slide_from_right" }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="page/[id]" />
          <Stack.Screen name="viewer" options={{ animation: "fade_from_bottom" }} />
          <Stack.Screen name="onboarding" options={{ animation: "fade", gestureEnabled: false }} />
          <Stack.Screen name="exam" options={{ animation: "slide_from_bottom" }} />
          <Stack.Screen name="review" options={{ animation: "slide_from_bottom" }} />
          <Stack.Screen name="import" options={{ animation: "slide_from_bottom" }} />
          <Stack.Screen name="notebook/[id]" />
          <Stack.Screen name="stats" />
          <Stack.Screen name="focus" options={{ animation: "fade", gestureEnabled: false }} />
          <Stack.Screen name="planner" />
          <Stack.Screen name="modes" />
          <Stack.Screen name="mode" />
          <Stack.Screen name="achievements" />
          <Stack.Screen name="my-topics" />
          <Stack.Screen name="profile" />
          <Stack.Screen name="blitz" options={{ animation: "slide_from_bottom" }} />
        </Stack>
        <OfflineBadge />
        <SheetsHost />
        <ShareCardHost />
        <ToastHost />
        <GoalCelebration />
        {!splashDone && <AnimatedSplash bg={c.bg} onDone={finishSplash} reduceMotion={reduceMotion} />}
      </ThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
