import { useState } from "react";
import { Platform, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { create } from "zustand";
import type { StudyItem } from "@/feed/types";
import { haptic } from "@/lib/haptics";
import { NOTEBOOK_COLORS, useNotebooks } from "@/store/notebooks";
import { fonts, radius, space, TOUCH, useColors } from "@/theme";
import { Sheet } from "./Sheet";
import { toast } from "./Toast";
import { AppText, Bouncy, GradientButton, Icon } from "./ui";

type Open = { kind: "note"; item: StudyItem } | { kind: "notebooks"; item: StudyItem } | null;

const useSheets = create<{ open: Open }>()(() => ({ open: null }));

export const openNote = (item: StudyItem) => useSheets.setState({ open: { kind: "note", item } });
export const openNotebookPicker = (item: StudyItem) => useSheets.setState({ open: { kind: "notebooks", item } });
const close = () => useSheets.setState({ open: null });

/** Renders whichever app-wide sheet is open (note editor, notebook picker). */
export function SheetsHost() {
  const open = useSheets((s) => s.open);
  return (
    <>
      <Sheet visible={open?.kind === "note"} onClose={close} title="Anotação">
        {open?.kind === "note" && <NoteEditor key={open.item.id} item={open.item} />}
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
        value={text}
        onChangeText={setText}
        placeholder="O que você quer lembrar sobre isso?"
        placeholderTextColor={c.textMute}
        multiline
        autoFocus={Platform.OS !== "web"}
        textAlignVertical="top"
        style={[styles.note, { color: c.text, backgroundColor: c.surface2, borderColor: c.border, fontFamily: fonts.body }]}
        testID="note-input"
      />
      <GradientButton label="Salvar anotação" icon="check" onPress={save} style={{ marginTop: space.md }} />
    </View>
  );
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
  note: { minHeight: 140, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, padding: space.md, fontSize: 16, lineHeight: 22, outlineStyle: "none" } as object,
  row: { flexDirection: "row", alignItems: "center", gap: space.md, paddingVertical: space.md, borderBottomWidth: StyleSheet.hairlineWidth, minHeight: TOUCH + 12 },
  swatch: { width: 36, height: 36, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  newRow: { flexDirection: "row", alignItems: "center", gap: space.sm, paddingLeft: space.md, marginTop: space.md, height: 52, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth },
  newInput: { flex: 1, fontSize: 15, height: "100%", outlineStyle: "none" } as object,
  createBtn: { width: TOUCH, height: TOUCH, borderRadius: radius.md, alignItems: "center", justifyContent: "center", marginRight: 4 },
});
