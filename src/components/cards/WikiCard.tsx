import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Linking, StyleSheet, View } from "react-native";
import type { WikiItem } from "@/feed/types";
import { AppText, Bouncy, Glass, Icon } from "@/components/ui";
import { useSettings } from "@/store/settings";
import { radius, useColors } from "@/theme";
import { Backdrop } from "./Backdrop";
import type { CardProps } from "./types";

export function WikiCard({ item, active }: CardProps<WikiItem>) {
  const c = useColors();
  const dataSaver = useSettings((s) => s.dataSaver);
  const showImage = !!item.imageUrl && !dataSaver;
  return (
    <View style={StyleSheet.absoluteFill}>
      {showImage ? (
        <>
          <Image source={item.imageUrl} style={StyleSheet.absoluteFill} contentFit="cover" transition={250} />
          <LinearGradient colors={["rgba(0,0,0,0.25)", "rgba(0,0,0,0.35)", c.bg]} locations={[0, 0.4, 0.85]} style={StyleSheet.absoluteFill} />
        </>
      ) : (
        <Backdrop pageId={item.pageId} active={active} />
      )}
      <View style={styles.wrap}>
        <View style={styles.badge}>
          <Icon name="wikipedia" size={16} color={c.text} />
          <AppText variant="caption">VOCÊ SABIA?</AppText>
        </View>
        <AppText variant="display" style={{ marginBottom: 12 }}>{item.title}</AppText>
        <AppText style={{ fontSize: 16, lineHeight: 24 }} numberOfLines={9}>{item.extract}</AppText>
        <Bouncy onPress={() => Linking.openURL(item.url)} style={{ alignSelf: "flex-start", marginTop: 16 }} accessibilityRole="link">
          <Glass style={styles.link}>
            <AppText variant="label">Ler na Wikipédia</AppText>
            <Icon name="arrow-right" size={16} color={c.text} />
          </Glass>
        </Bouncy>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, justifyContent: "flex-end", paddingLeft: 20, paddingRight: 84, paddingBottom: 210 },
  badge: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 10 },
  link: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 16, paddingVertical: 10, borderRadius: radius.pill },
});
