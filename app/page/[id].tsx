import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ItemTile } from "@/components/ItemTile";
import { Grid } from "@/components/Screen";
import { AppText, Bouncy, GradientButton, Icon, PageAvatar, type IconName } from "@/components/ui";
import { childrenOf, familyOf, getPage } from "@/data/pages";
import { CONTENT } from "@/feed/sources/library";
import { CURATED_VIDEOS } from "@/feed/sources/youtube";
import { examAvailability, MIN_EXAM_QUESTIONS } from "@/feed/exam";
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
  const customItems = useLibrary((s) => s.customItems);
  const toggleFollow = useLibrary((s) => s.toggleFollow);
  const openViewer = useViewer((s) => s.open);

  const subs = useMemo(() => childrenOf(page.id), [page.id]);
  const parent = page.parent ? getPage(page.parent) : null;
  const items = useMemo(() => {
    const family = new Set(familyOf(page.id));
    return [...CURATED_VIDEOS, ...customVideos, ...customItems, ...CONTENT].filter((i) => family.has(i.pageId));
  }, [page.id, customVideos, customItems]);
  const videos = items.filter((i) => i.kind === "video").length;

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
        {parent && (
          <Bouncy onPress={() => router.push(`/page/${parent.id}`)} style={styles.parent} accessibilityLabel={`Ver ${parent.name}`}>
            <Icon name={parent.icon as IconName} size={14} color="#fff" />
            <AppText variant="caption" style={{ color: "#fff" }}>Conta de {parent.name}</AppText>
            <Icon name="chevron-right" size={14} color="#fff" />
          </Bouncy>
        )}
        <AppText style={{ color: "rgba(255,255,255,0.9)", textAlign: "center", marginTop: 8, maxWidth: 320 }}>{page.description}</AppText>
        <View style={styles.stats}>
          <AppText variant="caption" style={styles.stat}>{items.length} cards</AppText>
          {videos > 0 && <AppText variant="caption" style={styles.stat}>• {videos} vídeos</AppText>}
          {subs.length > 0 && <AppText variant="caption" style={styles.stat}>• {subs.length} contas</AppText>}
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
        {examAvailability(page.id) >= MIN_EXAM_QUESTIONS && (
          <Bouncy onPress={() => router.push(`/exam?page=${page.id}`)} style={styles.examBtn} accessibilityLabel={`Fazer prova de ${page.name}`}>
            <Icon name="timer-outline" size={18} color="#fff" />
            <AppText variant="label" style={{ color: "#fff" }}>Fazer prova</AppText>
          </Bouncy>
        )}
      </View>

      {subs.length > 0 && (
        <View style={{ marginBottom: 14 }}>
          <AppText variant="headline" style={{ paddingHorizontal: 16, marginBottom: 10 }}>Contas de {page.name}</AppText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}>
            {subs.map((s) => (
              <Bouncy key={s.id} onPress={() => router.push(`/page/${s.id}`)} style={[styles.sub, { backgroundColor: c.surface, borderColor: c.border }]} accessibilityLabel={s.name} testID={`sub-${s.id}`}>
                <PageAvatar pageId={s.id} size={52} />
                <AppText variant="label" numberOfLines={2} style={{ textAlign: "center", marginTop: 8 }}>{s.name}</AppText>
                <AppText variant="caption" dim numberOfLines={1}>{s.handle}</AppText>
              </Bouncy>
            ))}
          </ScrollView>
        </View>
      )}

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
  examBtn: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 12, paddingHorizontal: 16, paddingVertical: 9, borderRadius: radius.pill, backgroundColor: "rgba(0,0,0,0.3)" },
  parent: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 8, paddingHorizontal: 12, paddingVertical: 5, borderRadius: radius.pill, backgroundColor: "rgba(0,0,0,0.28)" },
  sub: { width: 118, alignItems: "center", padding: 12, borderRadius: radius.lg, borderWidth: 1 },
  back: { position: "absolute", left: 8, width: 44, height: 44, alignItems: "center", justifyContent: "center" },
});
