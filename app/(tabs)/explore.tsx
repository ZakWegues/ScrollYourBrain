import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { ItemTile } from "@/components/ItemTile";
import { Grid, Screen, SectionTitle } from "@/components/Screen";
import { AppText, Bouncy, Chip, Glass, Icon, PageAvatar, type IconName } from "@/components/ui";
import { PAGES } from "@/data/pages";
import { normalize, searchItems } from "@/feed/engine";
import { SEED } from "@/feed/sources/seed";
import { CURATED_VIDEOS } from "@/feed/sources/youtube";
import { useViewer } from "@/feed/viewer";
import { haptic } from "@/lib/haptics";
import { useLibrary } from "@/store/library";
import { fonts, radius, useColors } from "@/theme";

const TRENDING = ["Pitágoras", "DNA", "Big O", "Crase", "Newton", "Platão", "pH", "Fourier"];

export default function Explore() {
  const c = useColors();
  const [query, setQuery] = useState("");
  const followed = useLibrary((s) => s.followed);
  const customVideos = useLibrary((s) => s.customVideos);
  const toggleFollow = useLibrary((s) => s.toggleFollow);
  const openViewer = useViewer((s) => s.open);

  const pool = useMemo(() => [...SEED, ...CURATED_VIDEOS, ...customVideos], [customVideos]);
  const results = useMemo(() => searchItems(pool, query), [pool, query]);
  const pageResults = useMemo(() => {
    const q = normalize(query.trim());
    return q ? PAGES.filter((p) => normalize(`${p.name} ${p.description} ${p.handle}`).includes(q)) : [];
  }, [query]);
  const searching = query.trim().length > 0;

  return (
    <Screen title="Explorar" subtitle="Encontre temas, páginas e matérias">
      <Glass style={[styles.search, { borderColor: c.border }]}>
        <Icon name="magnify" size={22} color={c.textDim} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Pesquisar matérias, temas, páginas…"
          placeholderTextColor={c.textMute}
          style={[styles.input, { color: c.text, fontFamily: fonts.body }]}
          returnKeyType="search"
          autoCorrect={false}
          testID="search-input"
        />
        {searching && (
          <Pressable onPress={() => setQuery("")} hitSlop={10} accessibilityLabel="Limpar busca">
            <Icon name="close" size={20} color={c.textDim} />
          </Pressable>
        )}
      </Glass>

      {!searching && (
        <>
          <View style={styles.chips}>
            {TRENDING.map((t) => <Chip key={t} label={t} icon="fire" onPress={() => setQuery(t)} />)}
          </View>
          <SectionTitle>Páginas</SectionTitle>
          <Grid>
            {PAGES.map((p) => {
              const on = !!followed[p.id];
              return (
                <Bouncy key={p.id} onPress={() => router.push(`/page/${p.id}`)} scaleTo={0.96} style={[styles.pageCard, { borderColor: c.border }]}>
                  <LinearGradient colors={[p.colors[0], p.colors[1]]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
                  <View style={styles.pageShade} />
                  <Icon name={p.icon as IconName} size={30} color="#fff" />
                  <View style={{ flex: 1 }} />
                  <AppText variant="headline" style={{ color: "#fff" }}>{p.name}</AppText>
                  <AppText variant="caption" numberOfLines={2} style={{ color: "rgba(255,255,255,0.8)", marginTop: 2 }}>{p.description}</AppText>
                  <Bouncy
                    onPress={() => {
                      toggleFollow(p.id);
                      haptic.select();
                    }}
                    style={[styles.followPill, { backgroundColor: on ? "rgba(0,0,0,0.35)" : "#fff" }]}
                    accessibilityLabel={on ? `Deixar de seguir ${p.name}` : `Seguir ${p.name}`}
                  >
                    <AppText variant="caption" style={{ color: on ? "#fff" : "#000", fontFamily: fonts.bodyBold }}>{on ? "Seguindo" : "Seguir"}</AppText>
                  </Bouncy>
                </Bouncy>
              );
            })}
          </Grid>
        </>
      )}

      {searching && (
        <>
          {pageResults.length > 0 && (
            <>
              <SectionTitle>Páginas</SectionTitle>
              {pageResults.map((p) => (
                <Bouncy key={p.id} onPress={() => router.push(`/page/${p.id}`)} scaleTo={0.98} style={[styles.pageRow, { backgroundColor: c.surface, borderColor: c.border }]}>
                  <PageAvatar pageId={p.id} size={44} />
                  <View style={{ flex: 1 }}>
                    <AppText variant="label">{p.name}</AppText>
                    <AppText variant="caption" dim numberOfLines={1}>{p.description}</AppText>
                  </View>
                  <Icon name="chevron-right" size={22} color={c.textDim} />
                </Bouncy>
              ))}
            </>
          )}
          <SectionTitle>{`Matérias (${results.length})`}</SectionTitle>
          {results.length === 0 ? (
            <View style={styles.none}>
              <Icon name="magnify-close" size={40} color={c.textMute} />
              <AppText dim style={{ marginTop: 8, textAlign: "center" }}>Nada encontrado para “{query}”. Tente outro termo.</AppText>
            </View>
          ) : (
            <Grid>
              {results.map((item, i) => (
                <ItemTile key={item.id} item={item} onPress={() => { openViewer(results, i, `Busca: ${query}`); router.push("/viewer"); }} />
              ))}
            </Grid>
          )}
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  search: { flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 14, height: 52, borderRadius: radius.pill },
  input: { flex: 1, fontSize: 16, height: "100%", outlineStyle: "none" } as object,
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 14 },
  pageCard: { aspectRatio: 0.95, borderRadius: radius.lg, padding: 14, overflow: "hidden", borderWidth: StyleSheet.hairlineWidth },
  pageShade: { ...StyleSheet.absoluteFill, backgroundColor: "rgba(0,0,0,0.18)" },
  followPill: { position: "absolute", top: 12, right: 12, paddingHorizontal: 12, paddingVertical: 6, borderRadius: radius.pill },
  pageRow: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, marginBottom: 8 },
  none: { alignItems: "center", paddingVertical: 32 },
});
