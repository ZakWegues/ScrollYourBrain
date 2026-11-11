import { useState, type ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { radius, space, useColors } from "@/theme";
import { AppText, Bouncy, Icon, type IconName } from "./ui";

/** Open sections stay open while the app runs, so coming back to a tab keeps the same view. */
const remembered = new Map<string, boolean>();

/** A one-line header that opens to show more. Keeps screens short without hiding anything for good. */
export function Collapsible({ id, icon, iconColor, title, summary, children, defaultOpen = false, card = true }: {
  id: string;
  icon?: IconName;
  iconColor?: string;
  title: string;
  /** Shown next to the title while closed. */
  summary?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  /** Draw the header as a card (true) or as a plain row inside another card. */
  card?: boolean;
}) {
  const c = useColors();
  const [open, setOpen] = useState(() => remembered.get(id) ?? defaultOpen);
  const toggle = () => {
    remembered.set(id, !open);
    setOpen(!open);
  };
  return (
    <View style={styles.wrap}>
      <Bouncy
        onPress={toggle}
        scaleTo={0.98}
        style={[styles.head, card && [styles.card, { backgroundColor: c.surface, borderColor: c.border }]]}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        accessibilityLabel={`${title}${summary && !open ? `, ${summary}` : ""}`}
        testID={`section-${id}`}
      >
        {icon && <Icon name={icon} size={22} color={iconColor ?? c.accent2} />}
        <View style={styles.text}>
          <AppText variant="label" numberOfLines={1}>{title}</AppText>
          {!!summary && !open && <AppText variant="caption" dim numberOfLines={1}>{summary}</AppText>}
        </View>
        <Icon name={open ? "chevron-up" : "chevron-down"} size={22} color={c.textDim} />
      </Bouncy>
      {open && (
        <Animated.View entering={FadeIn.duration(160)} style={styles.body}>
          {children}
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: space.md },
  head: { flexDirection: "row", alignItems: "center", gap: space.md, minHeight: 48 },
  card: { paddingHorizontal: space.md, paddingVertical: space.sm, borderRadius: radius.lg, borderWidth: 1 },
  text: { flex: 1, minWidth: 0 },
  body: { marginTop: space.md },
});
