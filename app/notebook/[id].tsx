import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { Alert, Platform, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ItemTile } from "@/components/ItemTile";
import { Grid } from "@/components/Screen";
import { Sheet } from "@/components/Sheet";
import { toast } from "@/components/Toast";
import { AppText, Bouncy, GradientButton, Icon } from "@/components/ui";
import { useViewer } from "@/feed/viewer";
import { haptic } from "@/lib/haptics";
import { NOTEBOOK_COLORS, useNotebooks } from "@/store/notebooks";
import { reviewable, useReview } from "@/store/review";
import { fonts, radius, space, TOUCH, useColors } from "@/theme";

const confirm = (title: string, msg: string, onOk: () => void) => {
  if (Platform.OS === "web") {
    if (window.confirm(`${title}\n${msg}`)) onOk();
    return;
  }
  Alert.alert(title, msg, [{ text: "Cancelar", style: "cancel" }, { text: "Apagar", style: "destructive", onPress: onOk }]);
};

export default function NotebookScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const c = useColors();
  const insets = useSafeAreaInsets();
  const nb = useNotebooks((s) => s.notebooks[id]);
  const itemsById = useNotebooks((s) => s.items);
  const openViewer = useViewer((s) => s.open);
  const [menu, setMenu] = useState(false);
  const [name, setName] = useState(nb?.name ?? "");

  const items = useMemo(() => (nb ? nb.itemIds.map((x) => itemsById[x]).filter(Boolean) : []), [nb, itemsById]);
  const back = () => (router.canGoBack() ? router.back() : router.replace("/library"));

  if (!nb) {
    return (
      <View style={[styles.missing, { backgroundColor: c.bg }]}>
        <AppText dim>Este caderno não existe mais.</AppText>
        <GradientButton label="Voltar" icon="chevron-left" onPress={back} style={{ marginTop: space.lg }} />
      </View>
    );
  }
  const [from, to] = NOTEBOOK_COLORS[nb.color];
  const reviewables = items.filter(reviewable);

  const study = (start = 0) => {
    openViewer(items, start, nb.name);
    router.push("/viewer");
  };

  const addAllToReview = () => {
    const added = reviewables.filter((i) => useReview.getState().add(i)).length;
    haptic.success();
    toast({ message: added ? `${added} cards entraram na revisão de hoje` : "Esses cards já estão na revisão", icon: "history" });
    if (added) router.push("/review");
  };

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + space.xxl }} showsVerticalScrollIndicator={false}>
        <View style={[styles.hero, { paddingTop: insets.top + 56 }]}>
          <LinearGradient colors={[from, to, c.bg]} locations={[0, 0.6, 1]} style={StyleSheet.absoluteFill} />
          <View style={styles.heroIcon}>
            <Icon name="notebook-outline" size={40} color="#fff" />
          </View>
          <AppText variant="display" style={styles.heroTitle} numberOfLines={2}>{nb.name}</AppText>
          <AppText variant="label" style={{ color: "rgba(255,255,255,0.85)" }}>
            {items.length} {items.length === 1 ? "card" : "cards"}
          </AppText>
          <View style={styles.actions}>
            <GradientButton label="Estudar" icon="play" onPress={() => study(0)} style={{ flex: 1 }} />
            {reviewables.length > 0 && (
              <Bouncy onPress={addAllToReview} style={styles.ghost} accessibilityLabel="Revisar este caderno">
                <Icon name="history" size={18} color="#fff" />
                <AppText variant="label" style={{ color: "#fff" }}>Revisar</AppText>
              </Bouncy>
            )}
          </View>
        </View>
        <View style={{ paddingHorizontal: space.lg }}>
          {items.length === 0 ? (
            <View style={[styles.empty, { borderColor: c.border }]}>
              <Icon name="bookmark-plus-outline" size={36} color={c.textDim} />
              <AppText dim style={{ textAlign: "center", marginTop: space.sm }}>
                No feed, toque em “Mais” → “Caderno” em qualquer card para guardar aqui. Ou importe sua matéria.
              </AppText>
              <GradientButton label="Importar matéria" icon="tray-arrow-down" onPress={() => router.push("/import")} style={{ marginTop: space.lg }} />
            </View>
          ) : (
            <Grid>{items.map((item, i) => <ItemTile key={item.id} item={item} onPress={() => study(i)} />)}</Grid>
          )}
        </View>
      </ScrollView>

      <View style={[styles.top, { top: insets.top + space.xs }]}>
        <Bouncy onPress={back} style={styles.iconBtn} accessibilityLabel="Voltar">
          <Icon name="chevron-left" size={30} color="#fff" />
        </Bouncy>
        <Bouncy onPress={() => { setName(nb.name); setMenu(true); }} style={styles.iconBtn} accessibilityLabel="Opções do caderno">
          <Icon name="dots-horizontal" size={26} color="#fff" />
        </Bouncy>
      </View>

      <Sheet visible={menu} onClose={() => setMenu(false)} title="Caderno">
        <AppText variant="caption" dim style={{ marginBottom: space.sm }}>Nome</AppText>
        <TextInput
          value={name}
          onChangeText={setName}
          style={[styles.input, { color: c.text, backgroundColor: c.surface2, borderColor: c.border, fontFamily: fonts.body }]}
          returnKeyType="done"
          onSubmitEditing={() => { useNotebooks.getState().rename(nb.id, name); setMenu(false); }}
        />
        <GradientButton label="Salvar nome" icon="check" onPress={() => { useNotebooks.getState().rename(nb.id, name); setMenu(false); haptic.success(); }} style={{ marginTop: space.md }} />
        <Bouncy
          onPress={() =>
            confirm("Apagar caderno?", "Os cards continuam salvos no app; só o caderno é removido.", () => {
              setMenu(false);
              useNotebooks.getState().remove(nb.id);
              toast({ message: "Caderno apagado", icon: "trash-can-outline" });
              back();
            })
          }
          style={[styles.danger, { borderColor: c.danger }]}
        >
          <Icon name="trash-can-outline" size={18} color={c.danger} />
          <AppText variant="label" style={{ color: c.danger }}>Apagar caderno</AppText>
        </Bouncy>
      </Sheet>
    </View>
  );
}

const styles = StyleSheet.create({
  missing: { flex: 1, alignItems: "center", justifyContent: "center" },
  hero: { alignItems: "center", paddingHorizontal: space.xl, paddingBottom: space.xl, marginBottom: space.sm },
  heroIcon: { width: 84, height: 84, borderRadius: 24, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.22)", borderWidth: 2, borderColor: "rgba(255,255,255,0.3)" },
  heroTitle: { color: "#fff", marginTop: space.md, textAlign: "center" },
  actions: { flexDirection: "row", gap: space.sm, marginTop: space.lg, alignSelf: "stretch" },
  ghost: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: space.lg, height: 48, borderRadius: radius.pill, backgroundColor: "rgba(0,0,0,0.3)" },
  empty: { alignItems: "center", padding: space.xl, borderRadius: radius.lg, borderWidth: 1, borderStyle: "dashed" },
  top: { position: "absolute", left: space.sm, right: space.sm, flexDirection: "row", justifyContent: "space-between" },
  iconBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  input: { height: 48, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, paddingHorizontal: space.md, fontSize: 15, outlineStyle: "none" } as object,
  danger: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: space.sm, height: 48, borderRadius: radius.pill, borderWidth: 1, marginTop: space.md },
});
