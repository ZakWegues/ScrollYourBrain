import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNetwork } from "@/store/network";
import { radius, space, useColors } from "@/theme";
import { AppText, Glass, Icon } from "./ui";

/** Small pill under the status bar while offline (after a short grace period, to avoid flicker). */
export function OfflineBadge() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const online = useNetwork((s) => s.online);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setShown(!online), online ? 0 : 1500);
    return () => clearTimeout(id);
  }, [online]);

  if (!shown) return null;
  return (
    <View style={[styles.wrap, { top: insets.top + 52 }]} pointerEvents="none">
      <Animated.View entering={FadeInUp} exiting={FadeOutUp}>
        <Glass style={[styles.pill, { borderColor: c.border }]}>
          <Icon name="wifi-off" size={16} color={c.save} />
          <AppText variant="caption">Sem internet · seus cards continuam aqui</AppText>
        </Glass>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { position: "absolute", left: 0, right: 0, alignItems: "center", zIndex: 55 },
  pill: { flexDirection: "row", alignItems: "center", gap: space.sm, paddingHorizontal: space.md, paddingVertical: space.sm, borderRadius: radius.pill },
});
