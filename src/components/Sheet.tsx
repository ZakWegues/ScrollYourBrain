import { useEffect, useState, type ReactNode } from "react";
import { KeyboardAvoidingView, Modal, Platform, Pressable, StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { radius, space, useColors } from "@/theme";
import { AppText } from "./ui";

/** Bottom sheet with a dimmed backdrop. Tapping outside or the back button closes it. */
export function Sheet({ visible, onClose, title, children }: { visible: boolean; onClose: () => void; title?: string; children: ReactNode }) {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const [mounted, setMounted] = useState(visible);
  const y = useSharedValue(600);
  const fade = useSharedValue(0);

  if (visible && !mounted) setMounted(true);

  useEffect(() => {
    if (visible) {
      y.set(withSpring(0, { mass: 1, damping: 26, stiffness: 280 }));
      fade.set(withTiming(1, { duration: 200 }));
    } else if (mounted) {
      y.set(withTiming(600, { duration: 220, easing: Easing.in(Easing.quad) }));
      fade.set(withTiming(0, { duration: 220 }));
      const id = setTimeout(() => setMounted(false), 230);
      return () => clearTimeout(id);
    }
  }, [visible, mounted, y, fade]);

  const panel = useAnimatedStyle(() => ({ transform: [{ translateY: y.value }] }));
  const backdrop = useAnimatedStyle(() => ({ opacity: fade.value }));

  if (!mounted) return null;
  return (
    <Modal transparent visible statusBarTranslucent navigationBarTranslucent animationType="none" onRequestClose={onClose}>
      <KeyboardAvoidingView style={styles.root} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <Animated.View style={[StyleSheet.absoluteFill, styles.backdrop, backdrop]}>
          <Pressable style={StyleSheet.absoluteFill} onPress={onClose} accessibilityLabel="Fechar" />
        </Animated.View>
        <Animated.View style={[styles.panel, { backgroundColor: c.surface, borderColor: c.border, paddingBottom: insets.bottom + space.lg }, panel]}>
          <View style={[styles.handle, { backgroundColor: c.surface2 }]} />
          {title && <AppText variant="headline" style={styles.title}>{title}</AppText>}
          {children}
        </Animated.View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: "flex-end" },
  backdrop: { backgroundColor: "rgba(0,0,0,0.6)" },
  panel: { borderTopLeftRadius: radius.xl, borderTopRightRadius: radius.xl, borderWidth: StyleSheet.hairlineWidth, paddingHorizontal: space.lg, paddingTop: space.sm, maxHeight: "85%", width: "100%", maxWidth: 640, alignSelf: "center" },
  handle: { width: 40, height: 5, borderRadius: 3, alignSelf: "center", marginBottom: space.md },
  title: { marginBottom: space.md },
});
