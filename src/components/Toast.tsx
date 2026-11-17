import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { create } from "zustand";
import { radius, space, useColors } from "@/theme";
import { AppText, Bouncy, Glass, Icon, type IconName } from "./ui";

interface ToastData {
  id: number;
  message: string;
  icon?: IconName;
  tone?: "default" | "success" | "error";
  action?: { label: string; onPress: () => void };
}

const useToastStore = create<{ current: ToastData | null; next: number; height: number }>()(() => ({ current: null, next: 1, height: 0 }));

/** Top offset of the toast, from the safe area. Other floating hints sit below it while it shows. */
export const TOAST_TOP = 54;

/** Height of the toast on screen (0 when none), so floating hints can move out of its way. */
export const useToastHeight = () => useToastStore((s) => (s.current ? s.height : 0));

/**
 * Shows a short message near the top of the screen, optionally with an action such as "Desfazer".
 * (At the bottom it covered the feed buttons and the tab bar.)
 */
export function toast(data: Omit<ToastData, "id">) {
  const id = useToastStore.getState().next;
  useToastStore.setState({ current: { ...data, id }, next: id + 1 });
}

export function ToastHost() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const current = useToastStore((s) => s.current);

  useEffect(() => {
    if (!current) return;
    const id = setTimeout(() => {
      if (useToastStore.getState().current?.id === current.id) useToastStore.setState({ current: null });
    }, current.action ? 4000 : 2200);
    return () => clearTimeout(id);
  }, [current]);

  if (!current) return null;
  const tint = current.tone === "success" ? c.success : current.tone === "error" ? c.danger : c.text;
  return (
    <View style={[styles.wrap, { top: insets.top + TOAST_TOP }]} pointerEvents="box-none" onLayout={(e) => useToastStore.setState({ height: e.nativeEvent.layout.height })}>
      <Animated.View key={current.id} entering={FadeInUp.springify().damping(26).stiffness(280).mass(1)} exiting={FadeOutUp.duration(160)}>
        <Glass style={[styles.toast, { borderColor: c.border }]} intensity={60}>
          {current.icon && <Icon name={current.icon} size={20} color={tint} />}
          <AppText variant="label" style={{ flex: 1 }} numberOfLines={2} accessibilityLiveRegion="polite">{current.message}</AppText>
          {current.action && (
            <Bouncy
              onPress={() => {
                current.action?.onPress();
                useToastStore.setState({ current: null });
              }}
              style={styles.action}
              accessibilityRole="button"
            >
              <AppText variant="label" style={{ color: c.accent2 }}>{current.action.label}</AppText>
            </Bouncy>
          )}
        </Glass>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { position: "absolute", left: space.lg, right: space.lg, zIndex: 60 },
  toast: { flexDirection: "row", alignItems: "center", gap: space.md, paddingHorizontal: space.lg, minHeight: 52, borderRadius: radius.lg, alignSelf: "center", maxWidth: 480, width: "100%" },
  action: { paddingHorizontal: space.sm, paddingVertical: space.sm },
});
