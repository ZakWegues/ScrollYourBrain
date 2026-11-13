import { useEffect, useRef, useState } from "react";
import { Platform, ScrollView, Share, StyleSheet, TextInput, View } from "react-native";
import { create } from "zustand";
import type { StudyItem } from "@/feed/types";
import { haptic } from "@/lib/haptics";
import { NOTEBOOK_COLORS, useNotebooks } from "@/store/notebooks";
import { fonts, radius, space, TOUCH, useColors } from "@/theme";
import { Sheet } from "./Sheet";
import { toast } from "./Toast";
import { AppText, Bouncy, GradientButton, Icon, PageAvatar, type IconName } from "./ui";
import { getPage } from "@/data/pages";
import { speak, speechText } from "@/lib/speech";
import { useLibrary } from "@/store/library";
import { reviewable, useReview } from "@/store/review";
import { openShareCard } from "./ShareCard";

type Open = { kind: "note"; item: StudyItem } | { kind: "notebooks"; item: StudyItem } | { kind: "more"; item: StudyItem } | null;

const useSheets = create<{ open: Open }>()(() => ({ open: null }));

export const openNote = (item: StudyItem) => useSheets.setState({ open: { kind: "note", item } });
export const openNotebookPicker = (item: StudyItem) => useSheets.setState({ open: { kind: "notebooks", item } });
export const openMore = (item: StudyItem) => useSheets.setState({ open: { kind: "more", item } });
const close = () => useSheets.setState({ open: null });
/** Opens another sheet only after the current one has slid away, so two dialogs never overlap (Android loses the keyboard otherwise). */
const switchTo = (open: () => void) => {
  close();
  setTimeout(open, 280);
};

/** Renders whichever app-wide sheet is open (note editor, notebook picker). */
export function SheetsHost() {
  const open = useSheets((s) => s.open);
  return (
    <>
      <Sheet visible={open?.kind === "note"} onClose={close} title="Anotação">
        {open?.kind === "note" && <NoteEditor key={open.item.id} item={open.item} />}
      </Sheet>
      <Sheet visible={open?.kind === "more"} onClose={close}>
        {open?.kind === "more" && <MoreActions key={open.item.id} item={open.item} />}
      </Sheet>
      <Sheet visible={open?.kind === "notebooks"} onClose={close} title="Adicionar a caderno">
        {open?.kind === "notebooks" && <NotebookPicker key={open.item.id} item={open.item} />}
      </Sheet>
    </>
  );
}

function NoteEditor({ item }: { item: StudyItem }) {
  const c = useColors();
  const existing = useNotebooks((s) => s.notes[item.id]?.text ?? "");
  const [text, setText] = useState(existing);
  const input = useRef<TextInput>(null);
  // Focus once the sheet has finished opening; focusing during the animation can leave Android without a keyboard.
  useEffect(() => {
    if (Platform.OS === "web") return;
    const id = setTimeout(() => input.current?.focus(), 380);
    return () => clearTimeout(id);
  }, []);
  const save = () => {
    useNotebooks.getState().setNote(item, text);
    haptic.success();
    toast({ message: text.trim() ? "Anotação salva" : "Anotação apagada", icon: "note-check-outline" });
    close();
  };
  return (
    <View>
      <AppText variant="caption" dim numberOfLines={1} style={{ marginBottom: space.sm }}>{item.title}</AppText>
      <TextInput
        ref={input}
        value={text}
        onChangeText={setText}
        placeholder="O que você quer lembrar sobre isso?"
        placeholderTextColor={c.textMute}
        multiline
        textAlignVertical="top"
        style={[styles.note, { color: c.text, backgroundColor: c.surface2, borderColor: c.border, fontFamily: fonts.body }]}
        testID="note-input"
      />
      <GradientButton label="Salvar anotação" icon="check" onPress={save} style={{ marginTop: space.md }} />
    </View>
  );
}

/** Secondary actions for a feed card, kept out of the rail so the screen stays clean. */
function MoreActions({ item }: { item: StudyItem }) {
  const c = useColors();
  const hasNote = useNotebooks((s) => !!s.notes[item.id]);
  const inReview = useReview((s) => !!s.cards[item.id]);
  const page = getPage(item.pageId);
  const actions: { icon: IconName; label: string; onPress: () => void; hidden?: boolean; tone?: string }[] = [
    { icon: hasNote ? "note-text" : "note-edit-outline", label: hasNote ? "Editar nota" : "Nota", onPress: () => switchTo(() => openNote(item)) },
    { icon: "notebook-plus-outline", label: "Caderno", onPress: () => switchTo(() => openNotebookPicker(item)) },
    { icon: "account-voice", label: "Ouvir", onPress: () => { speak(speechText(item)); close(); } },
    {
      icon: "history", label: inReview ? "Na revisão" : "Revisar depois", hidden: !reviewable(item),
      onPress: () => { if (useReview.getState().add(item)) toast({ message: "Vai voltar na sua revisão", icon: "history" }); close(); },
    },
    { icon: "image-outline", label: "Imagem", onPress: () => switchTo(() => openShareCard(item)) },
    { icon: "share-variant", label: "Texto", onPress: () => { Share.share({ message: shareText(item) }).catch(() => {}); close(); } },
    {
      icon: "eye-off-outline", label: "Menos disso", tone: c.danger,
      onPress: () => {
        const lib = useLibrary.getState();
        for (let i = 0; i < 3; i++) lib.recordSkip(item.pageId);
        toast({ message: `Vamos mostrar menos de ${page.name}`, icon: "eye-off-outline" });
        close();
      },
    },
  ];
  return (
    <View>
      <View style={styles.moreHead}>
        <PageAvatar pageId={item.pageId} size={36} />
        <View style={{ flex: 1 }}>
          <AppText variant="label" numberOfLines={1}>{item.title}</AppText>
          <AppText variant="caption" dim>{page.name} · {page.handle}</AppText>
        </View>
      </View>
      <View style={styles.moreGrid}>
        {actions.filter((a) => !a.hidden).map((a) => (
          <Bouncy key={a.label} onPress={a.onPress} scaleTo={0.94} style={styles.moreCell} accessibilityLabel={a.label}>
            <View style={[styles.moreIcon, { backgroundColor: c.surface2 }]}>
              <Icon name={a.icon} size={24} color={a.tone ?? c.text} />
            </View>
            <AppText variant="caption" style={{ textAlign: "center", color: a.tone ?? c.text }} numberOfLines={1}>{a.label}</AppText>
          </Bouncy>
        ))}
      </View>
    </View>
  );
}

/** Plain-text version of a card for the share sheet. */
export function shareText(item: StudyItem): string {
  const page = getPage(item.pageId).name;
  const tail = "\n\n— estudado no ScrollYourBrain";
  switch (item.kind) {
    case "video": return `${item.title} — https://youtu.be/${item.youtubeId}${tail}`;
    case "wiki": return `${item.title}: ${item.url}${tail}`;
    case "quiz": return `Quiz de ${page}: ${item.question}\n${item.options.map((o, i) => `${"ABCD"[i]}) ${o}`).join("\n")}${tail}`;
    case "multi": return `Marque todas as certas (${page}): ${item.question}\n${item.options.map((o, i) => `${"ABCDE"[i]}) ${o}`).join("\n")}${tail}`;
    case "open": return `Pergunta de ${page}: ${item.question}${tail}`;
    case "flash": return `${item.front}\n→ ${item.back}${tail}`;
    case "concept": return `${item.title}: ${item.takeaway}${tail}`;
  }
}

function NotebookPicker({ item }: { item: StudyItem }) {
  const c = useColors();
  const notebooks = useNotebooks((s) => s.notebooks);
  const [name, setName] = useState("");
  const list = Object.values(notebooks).sort((a, b) => b.createdAt - a.createdAt);

  const create = () => {
    if (!name.trim()) return;
    useNotebooks.getState().create(name, item);
    haptic.success();
    toast({ message: `Adicionado a “${name.trim()}”`, icon: "notebook-check-outline", tone: "success" });
    close();
  };

  return (
    <View>
      <ScrollView style={{ maxHeight: 300 }} keyboardShouldPersistTaps="handled">
        {list.length === 0 && <AppText dim style={{ marginBottom: space.md }}>Crie seu primeiro caderno para organizar o que está estudando.</AppText>}
        {list.map((nb) => {
          const has = nb.itemIds.includes(item.id);
          return (
            <Bouncy
              key={nb.id}
              scaleTo={0.98}
              onPress={() => {
                const added = useNotebooks.getState().toggleItem(nb.id, item);
                haptic.select();
                toast({ message: added ? `Adicionado a “${nb.name}”` : `Removido de “${nb.name}”`, icon: added ? "notebook-check-outline" : "notebook-remove-outline" });
              }}
              style={[styles.row, { borderColor: c.border }]}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: has }}
            >
              <View style={[styles.swatch, { backgroundColor: NOTEBOOK_COLORS[nb.color][0] }]}>
                <Icon name="notebook-outline" size={18} color="#fff" />
              </View>
              <View style={{ flex: 1 }}>
                <AppText variant="label">{nb.name}</AppText>
                <AppText variant="caption" dim>{nb.itemIds.length} {nb.itemIds.length === 1 ? "card" : "cards"}</AppText>
              </View>
              <Icon name={has ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} size={24} color={has ? c.accent : c.textDim} />
            </Bouncy>
          );
        })}
      </ScrollView>
      <View style={[styles.newRow, { backgroundColor: c.surface2, borderColor: c.border }]}>
        <Icon name="plus" size={20} color={c.textDim} />
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Novo caderno (ex.: Prova de Bio)"
          placeholderTextColor={c.textMute}
          onSubmitEditing={create}
          returnKeyType="done"
          style={[styles.newInput, { color: c.text, fontFamily: fonts.body }]}
          testID="new-notebook-input"
        />
        <Bouncy onPress={create} disabled={!name.trim()} style={[styles.createBtn, { backgroundColor: name.trim() ? c.accent : c.surface }]} accessibilityLabel="Criar caderno">
          <Icon name="arrow-right" size={20} color="#fff" />
        </Bouncy>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  moreHead: { flexDirection: "row", alignItems: "center", gap: space.md, marginBottom: space.lg },
  moreGrid: { flexDirection: "row", flexWrap: "wrap", marginHorizontal: -space.xs },
  moreCell: { width: "25%", alignItems: "center", gap: 6, paddingVertical: space.sm },
  moreIcon: { width: 56, height: 56, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  note: { minHeight: 140, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, padding: space.md, fontSize: 16, lineHeight: 22, outlineStyle: "none" } as object,
  row: { flexDirection: "row", alignItems: "center", gap: space.md, paddingVertical: space.md, borderBottomWidth: StyleSheet.hairlineWidth, minHeight: TOUCH + 12 },
  swatch: { width: 36, height: 36, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  newRow: { flexDirection: "row", alignItems: "center", gap: space.sm, paddingLeft: space.md, marginTop: space.md, height: 52, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth },
  newInput: { flex: 1, fontSize: 15, height: "100%", outlineStyle: "none" } as object,
  createBtn: { width: TOUCH, height: TOUCH, borderRadius: radius.md, alignItems: "center", justifyContent: "center", marginRight: 4 },
});
