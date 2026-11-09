import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ItemTile } from "@/components/ItemTile";
import { Grid } from "@/components/Screen";
import { AppText, Bouncy, GradientButton, Icon, type IconName } from "@/components/ui";
import { getPage } from "@/data/pages";
import { SEED } from "@/feed/sources/seed";
import { CURATED_VIDEOS } from "@/feed/sources/youtube";
import { useViewer } from "@/feed/viewer";
import { haptic } from "@/lib/haptics";
import { useLibrary } from "@/store/library";
import { fonts, radius, useColors } from "@/theme";

export default function PageScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const page = getPage(id);
  const c = useColors();
  const insets = useSafeAreaInsets();
  const following = useLibrary((s) => !!s.followed[page.id]);
  const likes = useLibrary((s) => s.pageLikes[page.id] ?? 0);
  const customVideos = useLibrary((s) => s.customVideos);
  const toggleFollow = useLibrary((s) => s.toggleFollow);
  const openViewer = useViewer((s) => s.open);

  const items = useMemo(
    () => [...CURATED_VIDEOS, ...customVideos, ...SEED].filter((i) => i.pageId === page.id),
    [page.id, customVideos],
  );

  const watch = (start = 0) => {
    openViewer(items, start, page.name);
    router.push("/viewer");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ paddingBottom: insets.bottom + 32 }} showsVerticalScrollIndicator={false}>
      <View style={[styles.hero, { paddingTop: insets.top + 56 }]}>
        <LinearGradient colors={[page.colors[0], page.colors[1], c.bg]} locations={[0, 0.55, 1]} style={StyleSheet.absoluteFill} />
        <View style={[styles.heroIcon, { borderColor: "rgba(255,255,255,0.35)" }]}>
          <Icon name={page.icon as IconName} size={44} color="#fff" />
        </View>
        <AppText variant="display" style={{ color: "#fff", marginTop: 14 }}>{page.name}</AppText>
        <AppText variant="label" style={{ color: "rgba(255,255,255,0.8)" }}>{page.handle}</AppText>
        <AppText style={{ color: "rgba(255,255,255,0.9)", textAlign: "center", marginTop: 8, maxWidth: 320 }}>{page.description}</AppText>
        <View style={styles.stats}>
          <AppText variant="caption" style={styles.stat}>{items.length} matérias</AppText>
          <AppText variant="caption" style={styles.stat}>•</AppText>
          <AppText variant="caption" style={styles.stat}>{likes} curtidas suas</AppText>
        </View>
        <View style={styles.actions}>
          <Bouncy
            onPress={() => { toggleFollow(page.id); haptic.select(); }}
            style={[styles.followBtn, { backgroundColor: following ? "rgba(0,0,0,0.4)" : "#fff" }]}
            accessibilityLabel={following ? "Deixar de seguir" : "Seguir"}
            testID="page-follow"
          >
            <Icon name={following ? "check" : "plus"} size={18} color={following ? "#fff" : "#000"} />
            <AppText variant="label" style={{ color: following ? "#fff" : "#000", fontFamily: fonts.bodyBold }}>{following ? "Seguindo" : "Seguir"}</AppText>
          </Bouncy>
          <GradientButton label="Assistir" icon="play" onPress={() => watch(0)} />
        </View>
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        {items.length === 0 ? (
          <AppText dim style={{ textAlign: "center", marginTop: 20 }}>Os cards desta página chegam pelo feed Para você, atualizados a cada scroll.</AppText>
        ) : (
          <Grid>{items.map((item, i) => <ItemTile key={item.id} item={item} onPress={() => watch(i)} />)}</Grid>
        )}
      </View>

      <Bouncy onPress={() => router.back()} style={[styles.back, { top: insets.top + 6 }]} accessibilityLabel="Voltar">
        <Icon name="chevron-left" size={30} color="#fff" />
      </Bouncy>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: "center", paddingHorizontal: 24, paddingBottom: 26, marginBottom: 8 },
  heroIcon: { width: 92, height: 92, borderRadius: 46, borderWidth: 2, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.2)" },
  stats: { flexDirection: "row", gap: 8, marginTop: 12 },
  stat: { color: "rgba(255,255,255,0.85)" },
  actions: { flexDirection: "row", gap: 10, marginTop: 18 },
  followBtn: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 20, paddingVertical: 13, borderRadius: radius.pill },
  back: { position: "absolute", left: 8, width: 44, height: 44, alignItems: "center", justifyContent: "center" },
});
