import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ItemTile, preview } from "@/components/ItemTile";
import { Grid, Screen, SectionTitle } from "@/components/Screen";
import { openNote } from "@/components/Sheets";
import { StreakCard } from "@/components/StreakCard";
import { WeeklyChallenge } from "@/components/WeeklyChallenge";
import { toast } from "@/components/Toast";
import { AppText, Bouncy, Chip, Glass, GradientButton, Icon, PageAvatar, Segmented, type IconName } from "@/components/ui";
import { ROOT_PAGES, getPage } from "@/data/pages";
import { parseYouTubeId } from "@/feed/sources/youtube";
import type { StudyItem } from "@/feed/types";
import { useViewer } from "@/feed/viewer";
import { haptic } from "@/lib/haptics";
import { useLibrary, type Snapshot } from "@/store/library";
import { NOTEBOOK_COLORS, useNotebooks } from "@/store/notebooks";
import { useDueCount, useReview } from "@/store/review";
import { useProgress } from "@/store/progress";
import { usePlanner } from "@/store/planner";
import { countdownLabel, daysUntil } from "@/lib/planner";
import { ACHIEVEMENTS } from "@/lib/achievements";
import { fonts, radius, space, TOUCH, useColors } from "@/theme";

type Tab = "saved" | "liked" | "notebooks" | "notes";

export default function Library() {
  const c = useColors();
  const [tab, setTab] = useState<Tab>("saved");
  const saved = useLibrary((s) => s.saved);
  const liked = useLibrary((s) => s.liked);
  const openViewer = useViewer((s) => s.open);

  const items = useMemo(() => {
    const record: Record<string, Snapshot> = tab === "liked" ? liked : saved;
    return Object.values(record).sort((a, b) => b.at - a.at).map((s) => s.item);
  }, [tab, saved, liked]);

  const open = (list: StudyItem[], i: number, title: string) => {
    openViewer(list, i, title);
    router.push("/viewer");
  };

  return (
    <Screen
      title="Biblioteca"
      subtitle="Seu progresso e tudo que você guardou"
      right={
        <Bouncy onPress={() => router.push("/import")} style={[styles.headerBtn, { backgroundColor: c.surface, borderColor: c.border }]} accessibilityLabel="Importar matéria" testID="import-button">
          <Icon name="tray-arrow-down" size={20} color={c.text} />
        </Bouncy>
      }
    >
      <NextExam />
      <ReviewCard />
      <View style={{ height: space.md }} />
      <StreakCard />
      <QuickLinks />
      <View style={{ height: space.md }} />
      <WeeklyChallenge />

      <View style={{ marginTop: space.xl, marginBottom: space.md }}>
        <Segmented<Tab>
          fill
          value={tab}
          onChange={setTab}
          options={[
            { value: "saved", label: "Salvos" },
            { value: "liked", label: "Curtidos" },
            { value: "notebooks", label: "Cadernos" },
            { value: "notes", label: "Notas" },
          ]}
        />
      </View>

      {(tab === "saved" || tab === "liked") &&
        (items.length === 0 ? (
          <EmptyState
            icon={tab === "saved" ? "bookmark-outline" : "heart-outline"}
            title={tab === "saved" ? "Nada salvo ainda" : "Nenhuma curtida ainda"}
            text={tab === "saved" ? "Toque em Salvar em qualquer card para revisar depois." : "Dê dois toques num card para curtir. O feed passa a mostrar mais do tema."}
          />
        ) : (
          <Grid>{items.map((item, i) => <ItemTile key={item.id} item={item} onPress={() => open(items, i, tab === "saved" ? "Salvos" : "Curtidos")} />)}</Grid>
        ))}
      {tab === "notebooks" && <Notebooks />}
      {tab === "notes" && <Notes onOpen={open} />}

      <AddVideo />
    </Screen>
  );
}

function QuickLinks() {
  const c = useColors();
  const unlocked = useProgress((s) => Object.keys(s.achievements).length);
  const examCount = usePlanner((s) => Object.values(s.exams).filter((e) => daysUntil(e.date) >= 0).length);
  const links: { icon: IconName; color: string; title: string; sub: string; to: "/stats" | "/achievements" | "/planner"; id: string }[] = [
    { icon: "chart-box-outline", color: c.accent2, title: "Estatísticas", sub: "seu ritmo", to: "/stats", id: "stats-link" },
    { icon: "trophy-outline", color: c.save, title: "Conquistas", sub: `${unlocked}/${ACHIEVEMENTS.length}`, to: "/achievements", id: "achievements-link" },
    { icon: "calendar-star", color: c.like, title: "Provas", sub: examCount ? `${examCount} marcada${examCount > 1 ? "s" : ""}` : "calendário", to: "/planner", id: "planner-link" },
  ];
  return (
    <View style={[styles.links, { marginTop: space.md }]}>
      {links.map((l) => (
        <Bouncy key={l.id} onPress={() => router.push(l.to)} scaleTo={0.96} style={[styles.link, { backgroundColor: c.surface, borderColor: c.border }]} accessibilityLabel={l.title} testID={l.id}>
          <Icon name={l.icon} size={24} color={l.color} />
          <AppText variant="label" numberOfLines={1}>{l.title}</AppText>
          <AppText variant="caption" dim numberOfLines={1}>{l.sub}</AppText>
        </Bouncy>
      ))}
    </View>
  );
}

function NextExam() {
  const c = useColors();
  const exams = usePlanner((s) => s.exams);
  const next = Object.values(exams).filter((e) => daysUntil(e.date) >= 0).sort((a, b) => a.date.localeCompare(b.date))[0];
  if (!next) return null;
  const days = daysUntil(next.date);
  return (
    <Bouncy onPress={() => router.push("/planner")} scaleTo={0.98} style={[styles.nextExam, { backgroundColor: c.surface, borderColor: days <= 3 ? c.danger : c.border }]} accessibilityLabel={`Próxima prova: ${next.title}, ${countdownLabel(days)}`}>
      <View style={[styles.examDays, { backgroundColor: days <= 3 ? "rgba(244,63,94,0.16)" : c.surface2 }]}>
        <AppText variant="title" style={{ color: days <= 3 ? c.danger : c.text }}>{days}</AppText>
        <AppText variant="caption" dim>{days === 1 ? "dia" : "dias"}</AppText>
      </View>
      <View style={{ flex: 1 }}>
        <AppText variant="caption" dim>Próxima prova</AppText>
        <AppText variant="headline" numberOfLines={1}>{next.title}</AppText>
      </View>
      <Icon name="chevron-right" size={24} color={c.textDim} />
    </Bouncy>
  );
}

function ReviewCard() {
  const c = useColors();
  const due = useDueCount();
  const total = useReview((s) => Object.keys(s.cards).length);
  return (
    <Bouncy onPress={() => router.push("/review")} scaleTo={0.98} style={styles.review} accessibilityLabel={`Revisão de hoje: ${due} cards`} testID="review-card">
      <LinearGradient colors={due > 0 ? ["#F59E0B", "#F97316"] : [c.surface, c.surface]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
      <View style={[styles.reviewIcon, { backgroundColor: due > 0 ? "rgba(0,0,0,0.18)" : c.surface2 }]}>
        <Icon name={due > 0 ? "history" : "check-decagram"} size={26} color={due > 0 ? "#fff" : c.success} />
      </View>
      <View style={{ flex: 1 }}>
        <AppText variant="headline" style={{ color: due > 0 ? "#fff" : c.text }}>
          {due > 0 ? `${due} ${due === 1 ? "card para revisar" : "cards para revisar"}` : "Revisão em dia"}
        </AppText>
        <AppText variant="caption" style={{ color: due > 0 ? "rgba(255,255,255,0.85)" : c.textDim }}>
          {total > 0 ? `${total} na sua fila de repetição espaçada` : "Erros de quiz e flashcards difíceis entram aqui"}
        </AppText>
      </View>
      <Icon name="chevron-right" size={24} color={due > 0 ? "#fff" : c.textDim} />
    </Bouncy>
  );
}

function Notebooks() {
  const c = useColors();
  const notebooks = useNotebooks((s) => s.notebooks);
  const [name, setName] = useState("");
  const list = Object.values(notebooks).sort((a, b) => b.createdAt - a.createdAt);
  const create = () => {
    if (!name.trim()) return;
    const id = useNotebooks.getState().create(name);
    setName("");
    haptic.success();
    router.push(`/notebook/${id}`);
  };
  return (
    <View>
      <View style={[styles.inputRow, { backgroundColor: c.surface, borderColor: c.border }]}>
        <Icon name="notebook-plus-outline" size={20} color={c.textDim} />
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Novo caderno (ex.: Prova de Bio)"
          placeholderTextColor={c.textMute}
          onSubmitEditing={create}
          returnKeyType="done"
          style={[styles.input, { color: c.text, fontFamily: fonts.body }]}
        />
        <Bouncy onPress={create} disabled={!name.trim()} style={[styles.addBtn, { backgroundColor: name.trim() ? c.accent : c.surface2 }]} accessibilityLabel="Criar caderno">
          <Icon name="plus" size={20} color="#fff" />
        </Bouncy>
      </View>
      {list.length === 0 ? (
        <EmptyState icon="notebook-outline" title="Nenhum caderno ainda" text="Crie um caderno por prova ou matéria e junte os cards dele, ou importe sua matéria." />
      ) : (
        <Grid>
          {list.map((nb) => (
            <Bouncy key={nb.id} onPress={() => router.push(`/notebook/${nb.id}`)} scaleTo={0.96} style={styles.nb} accessibilityLabel={`Caderno ${nb.name}`}>
              <LinearGradient colors={NOTEBOOK_COLORS[nb.color]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
              <Icon name="notebook-outline" size={26} color="#fff" />
              <View style={{ flex: 1 }} />
              <AppText variant="headline" style={{ color: "#fff" }} numberOfLines={2}>{nb.name}</AppText>
              <AppText variant="caption" style={{ color: "rgba(255,255,255,0.85)" }}>{nb.itemIds.length} {nb.itemIds.length === 1 ? "card" : "cards"}</AppText>
            </Bouncy>
          ))}
        </Grid>
      )}
    </View>
  );
}

function Notes({ onOpen }: { onOpen: (list: StudyItem[], i: number, title: string) => void }) {
  const c = useColors();
  const notes = useNotebooks((s) => s.notes);
  const list = Object.values(notes).sort((a, b) => b.updatedAt - a.updatedAt);
  if (list.length === 0) return <EmptyState icon="note-edit-outline" title="Nenhuma anotação" text="Toque em Nota em qualquer card do feed para escrever o que quer lembrar." />;
  const items = list.map((n) => n.item);
  return (
    <View style={{ gap: space.sm }}>
      {list.map((n, i) => (
        <Bouncy key={n.item.id} onPress={() => onOpen(items, i, "Notas")} onLongPress={() => openNote(n.item)} scaleTo={0.98} style={[styles.note, { backgroundColor: c.surface, borderColor: c.border }]}>
          <View style={styles.noteHead}>
            <PageAvatar pageId={n.item.pageId} size={24} />
            <AppText variant="caption" dim numberOfLines={1} style={{ flex: 1 }}>{getPage(n.item.pageId).name} · {n.item.title}</AppText>
            <Bouncy onPress={() => openNote(n.item)} style={styles.editBtn} accessibilityLabel="Editar anotação">
              <Icon name="pencil-outline" size={18} color={c.textDim} />
            </Bouncy>
          </View>
          <AppText style={{ fontSize: 15, lineHeight: 22 }}>{n.text}</AppText>
          <AppText variant="caption" dim numberOfLines={1} style={{ marginTop: space.xs }}>{preview(n.item)}</AppText>
        </Bouncy>
      ))}
    </View>
  );
}

function AddVideo() {
  const c = useColors();
  const customVideos = useLibrary((s) => s.customVideos);
  const [link, setLink] = useState("");
  const [linkPage, setLinkPage] = useState(ROOT_PAGES[0].id);
  const addLink = () => {
    const id = parseYouTubeId(link);
    if (!id) {
      haptic.error();
      toast({ message: "Link inválido. Cole um link do YouTube (watch, youtu.be ou shorts).", icon: "link-variant-off", tone: "error" });
      return;
    }
    const page = getPage(linkPage);
    useLibrary.getState().addCustomVideo({ id: `yt-${id}`, kind: "video", youtubeId: id, pageId: page.id, title: `Vídeo de ${page.name}`, caption: "Adicionado por você", tags: ["meus vídeos"] });
    setLink("");
    haptic.success();
    toast({ message: `Vídeo adicionado em ${page.name}`, icon: "check-circle", tone: "success" });
  };
  return (
    <>
      <SectionTitle>Adicionar vídeo do YouTube</SectionTitle>
      <Glass style={{ padding: space.md }}>
        <View style={[styles.inputRow, { backgroundColor: c.surface2, borderColor: c.border, marginBottom: 0 }]}>
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
        <AppText variant="caption" dim style={{ marginTop: space.md, marginBottom: space.sm }}>Página</AppText>
        <View style={styles.chips}>
          {ROOT_PAGES.filter((p) => p.id !== "curiosidades").map((p) => <Chip key={p.id} label={p.name} active={p.id === linkPage} onPress={() => setLinkPage(p.id)} />)}
        </View>
        <GradientButton label="Adicionar ao feed" icon="plus" onPress={addLink} style={{ marginTop: space.md }} />
        {customVideos.length > 0 && (
          <View style={{ marginTop: space.md }}>
            {customVideos.map((v) => (
              <View key={v.id} style={[styles.videoRow, { borderColor: c.border }]}>
                <Icon name="youtube" size={18} color="#FF0033" />
                <AppText variant="caption" style={{ flex: 1 }} numberOfLines={1}>{v.title} · youtu.be/{v.youtubeId}</AppText>
                <Bouncy onPress={() => useLibrary.getState().removeCustomVideo(v.id)} style={styles.editBtn} accessibilityLabel="Remover vídeo">
                  <Icon name="trash-can-outline" size={18} color={c.textDim} />
                </Bouncy>
              </View>
            ))}
          </View>
        )}
      </Glass>
    </>
  );
}

function EmptyState({ icon, title, text }: { icon: IconName; title: string; text: string }) {
  const c = useColors();
  return (
    <View style={[styles.empty, { borderColor: c.border }]}>
      <Icon name={icon} size={40} color={c.textDim} />
      <AppText variant="headline" style={{ marginTop: space.sm, textAlign: "center" }}>{title}</AppText>
      <AppText dim style={{ textAlign: "center", marginTop: space.xs, maxWidth: 300 }}>{text}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBtn: { width: TOUCH, height: TOUCH, borderRadius: TOUCH / 2, alignItems: "center", justifyContent: "center", borderWidth: StyleSheet.hairlineWidth },
  review: { flexDirection: "row", alignItems: "center", gap: space.md, padding: space.lg, borderRadius: radius.lg, overflow: "hidden" },
  reviewIcon: { width: 48, height: 48, borderRadius: 24, alignItems: "center", justifyContent: "center" },
  links: { flexDirection: "row", gap: space.sm },
  link: { flex: 1, alignItems: "center", gap: 4, paddingVertical: space.md, paddingHorizontal: space.sm, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth },
  nextExam: { flexDirection: "row", alignItems: "center", gap: space.md, padding: space.md, borderRadius: radius.lg, borderWidth: 1, marginBottom: space.md },
  examDays: { width: 56, height: 56, borderRadius: radius.md, alignItems: "center", justifyContent: "center" },
  empty: { alignItems: "center", padding: space.xl, borderRadius: radius.lg, borderWidth: 1, borderStyle: "dashed" },
  inputRow: { flexDirection: "row", alignItems: "center", gap: space.sm, paddingLeft: space.md, height: 52, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, marginBottom: space.md },
  input: { flex: 1, fontSize: 15, height: "100%", outlineStyle: "none" } as object,
  addBtn: { width: TOUCH, height: TOUCH, borderRadius: radius.md, alignItems: "center", justifyContent: "center", marginRight: 4 },
  nb: { aspectRatio: 1, borderRadius: radius.lg, padding: space.lg, overflow: "hidden" },
  note: { padding: space.md, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth },
  noteHead: { flexDirection: "row", alignItems: "center", gap: space.sm, marginBottom: space.sm },
  editBtn: { width: 36, height: 36, alignItems: "center", justifyContent: "center" },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: space.sm },
  videoRow: { flexDirection: "row", alignItems: "center", gap: space.sm, paddingVertical: space.xs, borderTopWidth: StyleSheet.hairlineWidth },
});
