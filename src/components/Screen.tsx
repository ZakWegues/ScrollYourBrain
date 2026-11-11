import type { ReactNode } from "react";
import { StyleSheet, View, type ScrollViewProps } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TAB_BAR_SPACE, useColors } from "@/theme";
import { AppText } from "./ui";

/** Scrollable tab screen with a large title, theme background and room for the floating tab bar. A focused input scrolls into view above the keyboard. */
export function Screen({ title, subtitle, right, children, ...rest }: ScrollViewProps & { title: string; subtitle?: string; right?: ReactNode; children: ReactNode }) {
  const c = useColors();
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAwareScrollView
      bottomOffset={TAB_BAR_SPACE}
      {...rest}
      style={{ flex: 1, backgroundColor: c.bg }}
      contentContainerStyle={{ paddingTop: insets.top + 16, paddingBottom: TAB_BAR_SPACE + insets.bottom + 16, paddingHorizontal: 16 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <AppText variant="display">{title}</AppText>
          {subtitle && <AppText dim style={{ marginTop: 2 }}>{subtitle}</AppText>}
        </View>
        {right}
      </View>
      {children}
    </KeyboardAwareScrollView>
  );
}

export function SectionTitle({ children, action }: { children: string; action?: ReactNode }) {
  return (
    <View style={styles.section}>
      <AppText variant="headline">{children}</AppText>
      {action}
    </View>
  );
}

export function Grid({ children }: { children: ReactNode[] }) {
  return (
    <View style={styles.grid}>
      {children.map((child, i) => (
        <View key={i} style={styles.cell}>{child}</View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "flex-end", marginBottom: 18 },
  section: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 26, marginBottom: 12 },
  grid: { flexDirection: "row", flexWrap: "wrap", marginHorizontal: -5 },
  cell: { width: "50%", padding: 5 },
});
