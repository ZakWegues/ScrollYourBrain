import { LinearGradient } from "@/components/LinearGradient";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { ItemTile } from "@/components/ItemTile";
import { Collapsible } from "@/components/Collapsible";
import { Grid, Screen, SectionTitle } from "@/components/Screen";
import { AppText, Bouncy, Chip, Glass, Icon, PageAvatar, type IconName } from "@/components/ui";
import { childrenOf, getPage, PAGES, ROOT_PAGES, rootOf } from "@/data/pages";
import { normalize, pageWeight, searchItems } from "@/feed/engine";
import { CONTENT } from "@/feed/sources/library";
import { CURATED_VIDEOS } from "@/feed/sources/youtube";
import type { ItemKind, StudyItem } from "@/feed/types";
import { useViewer } from "@/feed/viewer";
import { haptic } from "@/lib/haptics";
import { useLibrary } from "@/store/library";
import { useSearch } from "@/store/search";
import { useSettings } from "@/store/settings";
import { fonts, radius, space, useColors } from "@/theme";

const TRENDING = ["Função afim", "Mendel", "Crase", "Leis de Newton", "Era Vargas", "Estequiometria", "Juros compostos", "Biomas"];
const FORMATS: { value: ItemKind | "all"; label: string; icon: IconName }[] = [
  { value: "all", label: "Tudo", icon: "shape-outline" },
  { value: "video", label: "Vídeos", icon: "play-circle-outline" },
  { value: "quiz", label: "Quiz", icon: "help-circle-outline" },
  { value: "flash", label: "Flashcards", icon: "cards-outline" },
  { value: "concept", label: "Conceitos", icon: "text-box-outline" },
];

/** Card and video counts per account, for the account cards. */
function useCounts(pool: StudyItem[]) {
  return useMemo(() => {
    const out: Record<string, { cards: number; videos: number }> = {};
    for (const i of pool) {
      const n = (out[i.pageId] ??= { cards: 0, videos: 0 });
      if (i.kind === "video") n.videos++;
      else n.cards++;
    }
    return out;
  }, [pool]);
}

function AccountCard({ id, count }: { id: string; count?: { cards: number; videos: number } }) {
  const c = useColors();
  const p = getPage(id);
  return (
    <Bouncy onPress={() => router.push(`/page/${id}`)} scaleTo={0.95} style={[styles.account, { backgroundColor: c.surface, borderColor: c.border }]} accessibilityLabel={`Abrir ${p.name}`} testID={`account-${id}`}>
      <LinearGradient colors={[`${p.colors[0]}55`, "transparent"]} style={StyleSheet.absoluteFill} />
      <PageAvatar pageId={id} size={48} />
      <AppText variant="label" numberOfLines={2} style={styles.accountName}>{p.name}</AppText>
      <AppText variant="caption" dim numberOfLines={1}>
        {count ? `${count.cards} cards${count.videos ? ` · ${count.videos} vídeos` : ""}` : p.handle}
      </AppText>
    </Bouncy>
  );
}

export default function Explore() {
  const c = useColors();
  const [query, setQuery] = useState("");
  const [format, setFormat] = useState<ItemKind | "all">("all");
  const [subject, setSubject] = useState<string | null>(null);
  const followed = useLibrary((s) => s.followed);
  const pageLikes = useLibrary((s) => s.pageLikes);
  const pageSkips = useLibrary((s) => s.pageSkips);
  const interests = useSettings((s) => s.interests);
  const customVideos = useLibrary((s) => s.customVideos);
  const customItems = useLibrary((s) => s.customItems);
  const toggleFollow = useLibrary((s) => s.toggleFollow);
  const openViewer = useViewer((s) => s.open);
  const recent = useSearch((s) => s.recent);

  const pool = useMemo(() => [...CONTENT, ...CURATED_VIDEOS, ...customVideos, ...customItems], [customVideos, customItems]);
  const counts = useCounts(pool);
  const searching = query.trim().length > 0;
  const results = useMemo(
    () => searchItems(pool, query).filter((i) => (format === "all" || i.kind === format) && (!subject || rootOf(i.pageId) === subject)),
    [pool, query, format, subject],
  );
  const pageResults = useMemo(() => {
    const q = normalize(query.trim());
    return q ? PAGES.filter((p) => normalize(`${p.name} ${p.description} ${p.handle}`).includes(q)).slice(0, 6) : [];
  }, [query]);

  // Accounts you engage with most (or picked as interests) first.
  const forYou = useMemo(() => {
    const signals = { followed: new Set(Object.keys(followed)), interests: new Set(interests), pageLikes, pageSkips };
    return PAGES.filter((p) => p.parent).map((p) => ({ id: p.id, w: pageWeight(p.id, signals) + (pageLikes[p.id] ?? 0) * 0.3 })).sort((a, b) => b.w - a.w).slice(0, 10).map((x) => x.id);
  }, [followed, interests, pageLikes, pageSkips]);
  const subjects = ROOT_PAGES.filter((p) => childrenOf(p.id).length > 0);
  const others = ROOT_PAGES.filter((p) => childrenOf(p.id).length === 0);

  const search = (q: string) => {
    setQuery(q);
    useSearch.getState().add(q);
  };
  const openResult = (i: number) => {
    useSearch.getState().add(query);
    openViewer(results, i, `Busca: ${query}`);
    router.push("/viewer");
  };

  return (
    <Screen title="Explorar" subtitle="Encontre contas, matérias e vídeos">
      <Glass style={[styles.search, { borderColor: c.border }]}>
        <Icon name="magnify" size={22} color={c.textDim} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={() => useSearch.getState().add(query)}
          placeholder="Pesquisar contas, assuntos, vídeos…"
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
          {recent.length > 0 && (
            <View style={styles.recentHead}>
              <AppText variant="caption" dim>Buscas recentes</AppText>
              <Pressable onPress={() => useSearch.getState().clear()} hitSlop={8} accessibilityLabel="Limpar buscas recentes">
                <AppText variant="caption" style={{ color: c.accent2 }}>Limpar</AppText>
              </Pressable>
            </View>
          )}
          <View style={styles.chips}>
            {recent.slice(0, 5).map((t) => <Chip key={`r-${t}`} label={t} icon="history" onPress={() => search(t)} />)}
            {TRENDING.filter((t) => !recent.some((r) => r.toLowerCase() === t.toLowerCase())).slice(0, recent.length ? 3 : 4).map((t) => <Chip key={t} label={t} icon="fire" onPress={() => search(t)} />)}
          </View>

          <View style={styles.modes}>
            {[
              { to: "/modes" as const, icon: "school" as const, title: "Modos de prova", sub: "ENEM, bimestral e mais", colors: ["#8B5CF6", "#22D3EE"] as const, id: "exam-banner" },
              { to: "/blitz" as const, icon: "lightning-bolt" as const, title: "Quiz relâmpago", sub: "60 segundos", colors: ["#F59E0B", "#EF4444"] as const, id: "blitz-banner" },
              { to: "/focus" as const, icon: "bullseye-arrow" as const, title: "Modo foco", sub: "Ciclos sem distração", colors: ["#6366F1", "#EC4899"] as const, id: "focus-banner" },
            ].map((m) => (
              <Bouncy key={m.id} onPress={() => router.push(m.to)} scaleTo={0.96} style={styles.mode} accessibilityLabel={`Abrir ${m.title}: ${m.sub}`} testID={m.id}>
                <LinearGradient colors={m.colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
                <Icon name={m.icon} size={26} color="#fff" />
                <View style={{ flex: 1 }} />
                <AppText variant="label" numberOfLines={2} style={{ color: "#fff" }}>{m.title}</AppText>
              </Bouncy>
            ))}
          </View>

          <SectionTitle>Em alta pra você</SectionTitle>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bleed} contentContainerStyle={styles.row}>
            {forYou.map((id) => <AccountCard key={id} id={id} count={counts[id]} />)}
          </ScrollView>

          <SectionTitle>Matérias</SectionTitle>
          {subjects.map((s) => {
            const on = !!followed[s.id];
            const kids = childrenOf(s.id);
            return (
              <Collapsible key={s.id} id={`subject-${s.id}`} icon={s.icon as IconName} iconColor={s.colors[0]} title={s.name} summary={`${on ? "Seguindo · " : ""}${kids.map((k) => k.name).join(", ")}`}>
                <View style={styles.subjectHead}>
                  <Bouncy onPress={() => router.push(`/page/${s.id}`)} scaleTo={0.97} style={styles.subjectTitle} accessibilityLabel={`Abrir ${s.name}`}>
                    <PageAvatar pageId={s.id} size={28} />
                    <AppText variant="label">Ver página</AppText>
                    <Icon name="chevron-right" size={20} color={c.textDim} />
                  </Bouncy>
                  <Bouncy
                    onPress={() => {
                      toggleFollow(s.id);
                      haptic.select();
                    }}
                    style={[styles.followPill, { backgroundColor: on ? c.surface2 : c.text }]}
                    accessibilityLabel={on ? `Deixar de seguir ${s.name}` : `Seguir ${s.name} e todas as contas`}
                  >
                    <AppText variant="caption" style={{ color: on ? c.text : c.bg, fontFamily: fonts.bodyBold }}>{on ? "Seguindo" : "Seguir tudo"}</AppText>
                  </Bouncy>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bleed} contentContainerStyle={styles.row}>
                  {kids.map((p) => <AccountCard key={p.id} id={p.id} count={counts[p.id]} />)}
                </ScrollView>
              </Collapsible>
            );
          })}

          <View style={{ marginTop: space.md }}>
            <Collapsible id="more-pages" icon="dots-grid" title="Mais páginas" summary={others.map((p) => p.name).join(", ")}>
              <Grid>
                {others.map((p) => (
                  <Bouncy key={p.id} onPress={() => router.push(`/page/${p.id}`)} scaleTo={0.96} style={[styles.pageCard, { borderColor: c.border }]}>
                    <LinearGradient colors={[p.colors[0], p.colors[1]]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
                    <View style={styles.pageShade} />
                    <Icon name={p.icon as IconName} size={28} color="#fff" />
                    <View style={{ flex: 1 }} />
                    <AppText variant="headline" style={{ color: "#fff" }}>{p.name}</AppText>
                    <AppText variant="caption" numberOfLines={2} style={{ color: "rgba(255,255,255,0.8)", marginTop: 2 }}>{p.description}</AppText>
                  </Bouncy>
                ))}
              </Grid>
            </Collapsible>
          </View>
        </>
      )}

      {searching && (
        <>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.bleed, { marginTop: space.md }]} contentContainerStyle={styles.row}>
            {FORMATS.map((f) => <Chip key={f.value} label={f.label} icon={f.icon} active={format === f.value} onPress={() => setFormat(f.value)} />)}
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.bleed, { marginTop: space.sm }]} contentContainerStyle={styles.row}>
            <Chip label="Todas as matérias" active={!subject} onPress={() => setSubject(null)} />
            {ROOT_PAGES.filter((p) => p.id !== "curiosidades").map((p) => <Chip key={p.id} label={p.name} active={subject === p.id} onPress={() => setSubject(subject === p.id ? null : p.id)} />)}
          </ScrollView>
          {pageResults.length > 0 && (
            <>
              <SectionTitle>Contas</SectionTitle>
              {pageResults.map((p) => (
                <Bouncy key={p.id} onPress={() => { useSearch.getState().add(query); router.push(`/page/${p.id}`); }} scaleTo={0.98} style={[styles.pageRow, { backgroundColor: c.surface, borderColor: c.border }]}>
                  <PageAvatar pageId={p.id} size={44} />
                  <View style={{ flex: 1 }}>
                    <AppText variant="label">{p.name}</AppText>
                    <AppText variant="caption" dim numberOfLines={1}>{p.parent ? `Conta de ${getPage(p.parent).name} · ` : ""}{p.description}</AppText>
                  </View>
                  <Icon name="chevron-right" size={22} color={c.textDim} />
                </Bouncy>
              ))}
            </>
          )}
          <SectionTitle>{`Cards e vídeos (${results.length})`}</SectionTitle>
          {results.length === 0 ? (
            <View style={styles.none}>
              <Icon name="magnify-close" size={40} color={c.textMute} />
              <AppText dim style={{ marginTop: 8, textAlign: "center" }}>Nada encontrado para “{query}”{format !== "all" || subject ? " com esses filtros" : ""}. Tente outro termo.</AppText>
            </View>
          ) : (
            <Grid>{results.slice(0, 60).map((item, i) => <ItemTile key={item.id} item={item} onPress={() => openResult(i)} />)}</Grid>
          )}
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  search: { flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 14, height: 52, borderRadius: radius.pill },
  input: { flex: 1, fontSize: 16, height: "100%", outlineStyle: "none" } as object,
  recentHead: { flexDirection: "row", justifyContent: "space-between", marginTop: 14 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 10 },
  modes: { flexDirection: "row", gap: 8, marginTop: 16 },
  mode: { flex: 1, minWidth: 0, height: 92, padding: 12, borderRadius: radius.lg, overflow: "hidden" },
  bleed: { marginHorizontal: -space.lg },
  row: { paddingHorizontal: space.lg, gap: 10 },
  account: { width: 128, padding: 12, borderRadius: radius.lg, borderWidth: 1, alignItems: "center", overflow: "hidden" },
  accountName: { textAlign: "center", marginTop: 8, minHeight: 36 },
  subjectHead: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: space.md },
  subjectTitle: { flexDirection: "row", alignItems: "center", gap: 8 },
  pageCard: { aspectRatio: 1.1, borderRadius: radius.lg, padding: 14, overflow: "hidden", borderWidth: StyleSheet.hairlineWidth },
  pageShade: { ...StyleSheet.absoluteFill, backgroundColor: "rgba(0,0,0,0.18)" },
  followPill: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: radius.pill },
  pageRow: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, marginBottom: 8 },
  none: { alignItems: "center", paddingVertical: 32 },
});
