import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Alert, Platform, StyleSheet, TextInput, View } from "react-native";
import { ItemTile } from "@/components/ItemTile";
import { StreakCard } from "@/components/StreakCard";
import { Grid, Screen, SectionTitle } from "@/components/Screen";
import { AppText, Bouncy, Chip, Glass, GradientButton, Icon, Segmented } from "@/components/ui";
import { PAGES } from "@/data/pages";
import { parseYouTubeId } from "@/feed/sources/youtube";
import { useViewer } from "@/feed/viewer";
import { haptic } from "@/lib/haptics";
import { useLibrary, type Snapshot } from "@/store/library";
import { fonts, radius, useColors } from "@/theme";

type Tab = "saved" | "liked";

const notify = (title: string, msg: string) => (Platform.OS === "web" ? window.alert(`${title}\n${msg}`) : Alert.alert(title, msg));

export default function Library() {
  const c = useColors();
  const [tab, setTab] = useState<Tab>("saved");
  const saved = useLibrary((s) => s.saved);
  const liked = useLibrary((s) => s.liked);
  const quiz = useLibrary((s) => s.quiz);
  const followedCount = useLibrary((s) => Object.keys(s.followed).length);
  const customVideos = useLibrary((s) => s.customVideos);
  const { addCustomVideo, removeCustomVideo } = useLibrary.getState();
  const openViewer = useViewer((s) => s.open);
  const [link, setLink] = useState("");
  const [linkPage, setLinkPage] = useState(PAGES[0].id);

  const items = useMemo(() => {
    const record: Record<string, Snapshot> = tab === "saved" ? saved : liked;
    return Object.values(record).sort((a, b) => b.at - a.at).map((s) => s.item);
  }, [tab, saved, liked]);

  const addLink = () => {
    const id = parseYouTubeId(link);
    if (!id) {
      haptic.error();
      notify("Link inválido", "Cole um link do YouTube (youtube.com/watch, youtu.be ou shorts).");
      return;
    }
    const page = PAGES.find((p) => p.id === linkPage)!;
    addCustomVideo({ id: `yt-${id}`, kind: "video", youtubeId: id, pageId: page.id, title: `Vídeo de ${page.name}`, caption: "Adicionado por você", tags: ["meus vídeos"] });
    setLink("");
    haptic.success();
  };

  const accuracy = quiz.answered ? Math.round((quiz.correct / quiz.answered) * 100) : 0;

  return (
    <Screen title="Biblioteca" subtitle="Tudo que você salvou e curtiu">
      <StreakCard />
      <View style={[styles.stats, { marginTop: 10 }]}>
        <Stat icon="bookmark" color={c.save} value={Object.keys(saved).length} label="Salvos" />
        <Stat icon="heart" color={c.like} value={Object.keys(liked).length} label="Curtidos" />
        <Stat icon="account-heart" color={c.accent} value={followedCount} label="Seguindo" />
        <Stat icon="fire" color="#FB923C" value={`${accuracy}%`} label="Acertos" />
      </View>

      <View style={{ marginTop: 22, marginBottom: 14 }}>
        <Segmented<Tab> value={tab} onChange={setTab} options={[{ value: "saved", label: "Salvos" }, { value: "liked", label: "Curtidos" }]} />
      </View>

      {items.length === 0 ? (
        <Glass style={styles.empty}>
          <Icon name={tab === "saved" ? "bookmark-outline" : "heart-outline"} size={42} color={c.textDim} />
          <AppText variant="headline" style={{ marginTop: 10, textAlign: "center" }}>
            {tab === "saved" ? "Nada salvo ainda" : "Nenhuma curtida ainda"}
          </AppText>
          <AppText dim style={{ textAlign: "center", marginTop: 6, marginBottom: 16 }}>
            {tab === "saved" ? "Toque em Salvar em qualquer card para revisar depois." : "Dê dois toques num card para curtir — o feed passa a mostrar mais do tema."}
          </AppText>
          <GradientButton label="Ir para o feed" icon="play-box-multiple" onPress={() => router.navigate("/")} />
        </Glass>
      ) : (
        <Grid>
          {items.map((item, i) => (
            <ItemTile key={item.id} item={item} onPress={() => { openViewer(items, i, tab === "saved" ? "Salvos" : "Curtidos"); router.push("/viewer"); }} />
          ))}
        </Grid>
      )}

      <SectionTitle>Adicionar vídeo do YouTube</SectionTitle>
      <Glass style={styles.addBox}>
        <View style={[styles.inputRow, { backgroundColor: c.surface2, borderColor: c.border }]}>
          <Icon name="link-variant" size={18} color={c.textDim} />
          <TextInput
            value={link}
            onChangeText={setLink}
            placeholder="https://youtu.be/…"
            placeholderTextColor={c.textMute}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={addLink}
            style={[styles.input, { color: c.text, fontFamily: fonts.body }]}
            testID="youtube-link-input"
          />
        </View>
        <AppText variant="caption" dim style={{ marginTop: 12, marginBottom: 8 }}>Página</AppText>
        <View style={styles.chips}>
          {PAGES.filter((p) => p.id !== "curiosidades").map((p) => <Chip key={p.id} label={p.name} active={p.id === linkPage} onPress={() => setLinkPage(p.id)} />)}
        </View>
        <GradientButton label="Adicionar ao feed" icon="plus" onPress={addLink} style={{ marginTop: 14 }} />
        {customVideos.length > 0 && (
          <View style={{ marginTop: 14, gap: 8 }}>
            {customVideos.map((v) => (
              <View key={v.id} style={[styles.videoRow, { borderColor: c.border }]}>
                <Icon name="youtube" size={18} color="#FF0033" />
                <AppText variant="caption" style={{ flex: 1 }} numberOfLines={1}>{v.title} · youtu.be/{v.youtubeId}</AppText>
                <Bouncy onPress={() => removeCustomVideo(v.id)} accessibilityLabel="Remover vídeo">
                  <Icon name="trash-can-outline" size={18} color={c.textDim} />
                </Bouncy>
              </View>
            ))}
          </View>
        )}
      </Glass>
    </Screen>
  );
}

function Stat({ icon, color, value, label }: { icon: React.ComponentProps<typeof Icon>["name"]; color: string; value: number | string; label: string }) {
  const c = useColors();
  return (
    <View style={[styles.stat, { backgroundColor: c.surface, borderColor: c.border }]}>
      <Icon name={icon} size={18} color={color} />
      <AppText variant="headline" style={{ marginTop: 6 }}>{String(value)}</AppText>
      <AppText variant="caption" dim numberOfLines={1}>{label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  stats: { flexDirection: "row", gap: 8 },
  stat: { flex: 1, padding: 12, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth },
  empty: { alignItems: "center", padding: 24 },
  addBox: { padding: 14 },
  inputRow: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 12, height: 48, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth },
  input: { flex: 1, fontSize: 15, height: "100%", outlineStyle: "none" } as object,
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  videoRow: { flexDirection: "row", alignItems: "center", gap: 8, paddingVertical: 8, borderTopWidth: StyleSheet.hairlineWidth },
});
