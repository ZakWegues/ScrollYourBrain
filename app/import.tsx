import * as DocumentPicker from "expo-document-picker";
import { File } from "expo-file-system";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Platform, ScrollView, StyleSheet, Switch, TextInput, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { toast } from "@/components/Toast";
import { AppText, Bouncy, Chip, GradientButton, Icon } from "@/components/ui";
import { PAGES } from "@/data/pages";
import type { FlashItem } from "@/feed/types";
import { haptic } from "@/lib/haptics";
import { parseCards } from "@/lib/importer";
import { useLibrary } from "@/store/library";
import { useNotebooks } from "@/store/notebooks";
import { useReview } from "@/store/review";
import { fonts, radius, space, TOUCH, useColors } from "@/theme";

const EXAMPLE = "Capital da França;Paris\nMitocôndria;Organela que produz energia (ATP)\nP: Quem escreveu Dom Casmurro?\nR: Machado de Assis";

async function readPicked(asset: DocumentPicker.DocumentPickerAsset): Promise<string> {
  if (Platform.OS === "web") return (await fetch(asset.uri)).text();
  return new File(asset.uri).text();
}

export default function ImportScreen() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [pageId, setPageId] = useState(PAGES[0].id);
  const [toReview, setToReview] = useState(true);
  const { cards, skipped } = useMemo(() => parseCards(text), [text]);

  const pickFile = async () => {
    const res = await DocumentPicker.getDocumentAsync({ type: ["text/*", "text/csv", "text/tab-separated-values", "application/vnd.ms-excel"], copyToCacheDirectory: true });
    if (res.canceled || !res.assets[0]) return;
    try {
      const content = await readPicked(res.assets[0]);
      setText(content);
      if (!name) setName(res.assets[0].name.replace(/\.[^.]+$/, ""));
      haptic.success();
    } catch {
      toast({ message: "Não consegui ler esse arquivo. Use .txt ou .csv.", icon: "file-alert-outline", tone: "error" });
    }
  };

  const doImport = () => {
    if (cards.length === 0) return;
    const title = name.trim() || "Meus cards";
    const stamp = Date.now().toString(36);
    const items: FlashItem[] = cards.map((card, i) => ({
      id: `imp-${stamp}-${i}`,
      pageId,
      kind: "flash",
      title,
      tags: ["importado", title.toLowerCase()],
      front: card.front,
      back: card.back,
    }));
    useLibrary.getState().addCustomItems(items);
    const notebooks = useNotebooks.getState();
    const existing = Object.values(notebooks.notebooks).find((nb) => nb.name.toLowerCase() === title.toLowerCase());
    const nbId = existing?.id ?? notebooks.create(title);
    useNotebooks.getState().addItems(nbId, items);
    if (toReview) items.forEach((item) => useReview.getState().add(item));
    haptic.success();
    toast({ message: `${items.length} cards importados em “${title}”`, icon: "check-circle", tone: "success" });
    router.replace(`/notebook/${nbId}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={[styles.top, { paddingTop: insets.top + space.xs }]}>
        <Bouncy onPress={() => (router.canGoBack() ? router.back() : router.replace("/library"))} style={styles.iconBtn} accessibilityLabel="Fechar">
          <Icon name="close" size={26} color={c.text} />
        </Bouncy>
        <AppText variant="label">Importar matéria</AppText>
        <View style={styles.iconBtn} />
      </View>
      <ScrollView contentContainerStyle={{ padding: space.lg, paddingBottom: insets.bottom + 120 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <AppText dim>
          Cole sua matéria com uma pergunta e resposta por linha, separadas por <AppText variant="label">;</AppText>, tab ou <AppText variant="label">-</AppText>. Também funciona com blocos <AppText variant="label">P:</AppText> e <AppText variant="label">R:</AppText>, ou com um arquivo .txt/.csv (planilha, Anki).
        </AppText>

        <View style={styles.row}>
          <Bouncy onPress={pickFile} style={[styles.secondary, { borderColor: c.border }]} accessibilityLabel="Escolher arquivo">
            <Icon name="file-upload-outline" size={18} color={c.text} />
            <AppText variant="label">Escolher arquivo</AppText>
          </Bouncy>
          <Bouncy onPress={() => setText(EXAMPLE)} style={[styles.secondary, { borderColor: c.border }]} accessibilityLabel="Ver exemplo">
            <Icon name="lightbulb-outline" size={18} color={c.text} />
            <AppText variant="label">Exemplo</AppText>
          </Bouncy>
        </View>

        <TextInput
          value={text}
          onChangeText={setText}
          multiline
          textAlignVertical="top"
          placeholder={"Pergunta;Resposta\nPergunta;Resposta"}
          placeholderTextColor={c.textMute}
          style={[styles.input, { color: c.text, backgroundColor: c.surface, borderColor: c.border, fontFamily: fonts.body }]}
          testID="import-input"
        />
        {text.length > 0 && (
          <Animated.View entering={FadeIn} style={styles.summary}>
            <Icon name={cards.length ? "check-circle" : "alert-circle-outline"} size={18} color={cards.length ? c.success : c.danger} />
            <AppText variant="label" style={{ color: cards.length ? c.success : c.danger }}>
              {cards.length} {cards.length === 1 ? "card reconhecido" : "cards reconhecidos"}
            </AppText>
            {skipped.length > 0 && <AppText variant="caption" dim>· {skipped.length} {skipped.length === 1 ? "linha ignorada" : "linhas ignoradas"}</AppText>}
          </Animated.View>
        )}
        {cards.slice(0, 3).map((card, i) => (
          <View key={i} style={[styles.preview, { backgroundColor: c.surface, borderColor: c.border }]}>
            <AppText variant="label" numberOfLines={2}>{card.front}</AppText>
            <AppText variant="caption" dim numberOfLines={2} style={{ marginTop: 2 }}>{card.back}</AppText>
          </View>
        ))}
        {cards.length > 3 && <AppText variant="caption" dim style={{ marginTop: space.xs }}>+ {cards.length - 3} cards</AppText>}

        <AppText variant="headline" style={styles.label}>Nome do caderno</AppText>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Ex.: Prova de Biologia"
          placeholderTextColor={c.textMute}
          style={[styles.nameInput, { color: c.text, backgroundColor: c.surface, borderColor: c.border, fontFamily: fonts.body }]}
          testID="import-name"
        />

        <AppText variant="headline" style={styles.label}>Tema</AppText>
        <View style={styles.chips}>
          {PAGES.filter((p) => p.id !== "curiosidades").map((p) => <Chip key={p.id} label={p.name} active={p.id === pageId} onPress={() => setPageId(p.id)} />)}
        </View>

        <View style={[styles.switchRow, { backgroundColor: c.surface, borderColor: c.border }]}>
          <Icon name="history" size={20} color={c.save} />
          <View style={{ flex: 1 }}>
            <AppText variant="label">Adicionar à revisão</AppText>
            <AppText variant="caption" dim>Os cards aparecem na revisão diária com repetição espaçada</AppText>
          </View>
          <Switch value={toReview} onValueChange={setToReview} trackColor={{ false: c.surface2, true: c.accent }} thumbColor="#fff" {...({ activeThumbColor: "#fff" } as object)} />
        </View>
      </ScrollView>
      <View style={[styles.footer, { paddingBottom: insets.bottom + space.lg, backgroundColor: c.bg }]}>
        <GradientButton
          label={cards.length ? `Importar ${cards.length} ${cards.length === 1 ? "card" : "cards"}` : "Cole ou escolha um arquivo"}
          icon="tray-arrow-down"
          onPress={doImport}
          style={{ opacity: cards.length ? 1 : 0.45 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: space.sm },
  iconBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  row: { flexDirection: "row", gap: space.sm, marginTop: space.lg },
  secondary: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: space.sm, height: TOUCH, borderRadius: radius.pill, borderWidth: 1 },
  input: { minHeight: 180, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, padding: space.md, fontSize: 15, lineHeight: 22, marginTop: space.md, outlineStyle: "none" } as object,
  summary: { flexDirection: "row", alignItems: "center", gap: space.sm, marginTop: space.md, marginBottom: space.sm },
  preview: { padding: space.md, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, marginTop: space.sm },
  label: { marginTop: space.xl, marginBottom: space.md },
  nameInput: { height: 48, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, paddingHorizontal: space.md, fontSize: 15, outlineStyle: "none" } as object,
  chips: { flexDirection: "row", flexWrap: "wrap", gap: space.sm },
  switchRow: { flexDirection: "row", alignItems: "center", gap: space.md, padding: space.md, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, marginTop: space.xl },
  footer: { position: "absolute", left: 0, right: 0, bottom: 0, paddingHorizontal: space.lg, paddingTop: space.md },
});
