import { router } from "expo-router";
import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feed } from "@/components/Feed";
import { StreakPill } from "@/components/StreakPill";
import { useLibrary } from "@/store/library";
import { AppText, Bouncy, GradientButton, Icon, Segmented } from "@/components/ui";
import type { FeedSource } from "@/feed/useFeed";
import { useColors } from "@/theme";

type Mode = "forYou" | "following";

export default function FeedScreen() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const [mode, setMode] = useState<Mode>("forYou");
  const source = useMemo<FeedSource>(() => ({ type: mode }), [mode]);
  const followedKey = useLibrary((s) => Object.keys(s.followed).sort().join(","));
  // Rebuild the feed when switching modes, or when the followed pages change while on "Seguindo".
  const feedKey = mode === "following" ? `following:${followedKey}` : "forYou";

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <Feed
        key={feedKey}
        source={source}
        emptyState={
          <View style={styles.empty}>
            <Icon name="account-heart-outline" size={56} color={c.accent} />
            <AppText variant="title" style={{ textAlign: "center", marginTop: 14 }}>Siga páginas para montar seu feed</AppText>
            <AppText dim style={{ textAlign: "center", marginTop: 8, marginBottom: 22 }}>
              Toque no + do avatar em qualquer card ou explore os temas.
            </AppText>
            <GradientButton label="Explorar páginas" icon="compass-outline" onPress={() => router.navigate("/explore")} />
          </View>
        }
      />
      <View style={[styles.top, { paddingTop: insets.top + 10 }]} pointerEvents="box-none">
        <Segmented<Mode> value={mode} onChange={setMode} options={[{ value: "forYou", label: "Para você" }, { value: "following", label: "Seguindo" }]} />
        <View style={styles.right}>
          <StreakPill />
          <Bouncy onPress={() => router.navigate("/explore")} style={styles.search} accessibilityLabel="Pesquisar">
            <Icon name="magnify" size={26} color="#fff" />
          </Bouncy>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { position: "absolute", top: 0, left: 0, right: 0, paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  right: { flexDirection: "row", alignItems: "center", gap: 2 },
  search: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
  empty: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 32, paddingBottom: 80 },
});
