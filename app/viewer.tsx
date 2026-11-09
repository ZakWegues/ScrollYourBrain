import { router } from "expo-router";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feed } from "@/components/Feed";
import { AppText, Bouncy, Icon } from "@/components/ui";
import type { FeedSource } from "@/feed/useFeed";
import { useViewer } from "@/feed/viewer";
import { useColors } from "@/theme";

/** Full-screen feed over a fixed list (saved, liked, search results). */
export default function Viewer() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const { items, start, title } = useViewer();
  const source = useMemo<FeedSource>(() => ({ type: "list", items }), [items]);

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <Feed source={source} initialIndex={start} />
      <View style={[styles.top, { paddingTop: insets.top + 8 }]} pointerEvents="box-none">
        <Bouncy onPress={() => (router.canGoBack() ? router.back() : router.replace("/"))} style={styles.back} accessibilityLabel="Voltar">
          <Icon name="chevron-left" size={30} color="#fff" />
        </Bouncy>
        <AppText variant="label">{title}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { position: "absolute", left: 0, right: 0, top: 0, flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: 8 },
  back: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
});
