import { router } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppText, Bouncy, GradientButton, Icon, PageAvatar, Segmented } from "@/components/ui";
import { getPage } from "@/data/pages";
import { redoMistakes, startWeakExam } from "@/feed/practice";
import { haptic } from "@/lib/haptics";
import { useMistakes, type Mistake } from "@/store/mistakes";
import { radius, space, TOUCH, useColors } from "@/theme";

type Tab = "pending" | "fixed";
const LETTERS = "ABCD";

/** Every question you got wrong, until you get it right. */
export default function Mistakes() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const items = useMistakes((s) => s.items);
  const [tab, setTab] = useState<Tab>("pending");
  const [open, setOpen] = useState<string | null>(null);

  const { pending, fixed } = useMemo(() => {
    const all = Object.values(items).sort((a, b) => b.lastAt - a.lastAt);
    return { pending: all.filter((m) => !m.fixed), fixed: all.filter((m) => m.fixed) };
  }, [items]);
  const list = tab === "pending" ? pending : fixed;

  // Group by account so the list reads like a notebook with sections.
  const groups = useMemo(() => {
    const map = new Map<string, Mistake[]>();
    for (const m of list) map.set(m.item.pageId, [...(map.get(m.item.pageId) ?? []), m]);
    return [...map.entries()];
  }, [list]);

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={[styles.top, { paddingTop: insets.top + space.xs }]}>
        <Bouncy onPress={() => (router.canGoBack() ? router.back() : router.replace("/library"))} style={styles.iconBtn} accessibilityLabel="Voltar">
          <Icon name="chevron-left" size={30} color={c.text} />
        </Bouncy>
        <AppText variant="label">Caderno de erros</AppText>
        <View style={styles.iconBtn} />
      </View>
      <ScrollView contentContainerStyle={{ padding: space.lg, paddingBottom: insets.bottom + space.xxl }} showsVerticalScrollIndicator={false}>
        <View style={[styles.hero, { backgroundColor: c.surface, borderColor: c.border }]}>
          <Icon name="alert-circle-outline" size={28} color={c.danger} />
          <View style={{ flex: 1 }}>
            <AppText variant="headline">{pending.length} {pending.length === 1 ? "erro para refazer" : "erros para refazer"}</AppText>
            <AppText variant="caption" dim>Toda questão que você erra vem para cá. Acertou depois? Ela sai sozinha.</AppText>
          </View>
        </View>
        <View style={styles.actions}>
          <GradientButton label="Refazer erros" icon="refresh" onPress={redoMistakes} style={{ flex: 1 }} />
          <Bouncy onPress={startWeakExam} style={[styles.secondary, { borderColor: c.border }]} accessibilityLabel="Simulado dos pontos fracos" testID="weak-exam">
            <Icon name="target" size={18} color={c.text} />
            <AppText variant="label">Pontos fracos</AppText>
          </Bouncy>
        </View>

        <Segmented<Tab> fill value={tab} onChange={setTab} options={[{ value: "pending", label: `Pendentes (${pending.length})` }, { value: "fixed", label: `Corrigidos (${fixed.length})` }]} />

        {list.length === 0 && (
          <View style={styles.empty}>
            <Icon name={tab === "pending" ? "check-decagram-outline" : "history"} size={44} color={c.textMute} />
            <AppText dim style={{ textAlign: "center", marginTop: space.sm }}>
              {tab === "pending" ? "Nenhum erro pendente. Continue respondendo quizzes no feed." : "Questões que você errou e depois acertou aparecem aqui."}
            </AppText>
          </View>
        )}

        {groups.map(([pageId, ms]) => (
          <View key={pageId} style={{ marginTop: space.lg }}>
            <View style={styles.groupHead}>
              <PageAvatar pageId={pageId} size={26} />
              <AppText variant="label" style={{ flex: 1 }}>{getPage(pageId).name}</AppText>
              <AppText variant="caption" dim>{ms.length}</AppText>
            </View>
            {ms.map((m) => {
              const expanded = open === m.item.id;
              return (
                <Bouncy key={m.item.id} scaleTo={0.99} onPress={() => setOpen(expanded ? null : m.item.id)} style={[styles.row, { backgroundColor: c.surface, borderColor: c.border }]} accessibilityLabel={m.item.question}>
                  <View style={styles.rowHead}>
                    <AppText style={{ flex: 1 }} numberOfLines={expanded ? undefined : 2}>{m.item.question}</AppText>
                    {m.wrong > 1 && <AppText variant="caption" style={{ color: c.danger }}>{m.wrong}×</AppText>}
                  </View>
                  {expanded && (
                    <View style={{ marginTop: space.sm }}>
                      <AppText variant="label" style={{ color: c.success }}>{LETTERS[m.item.answer]}) {m.item.options[m.item.answer]}</AppText>
                      <AppText variant="caption" dim style={{ marginTop: 4 }}>{m.item.explanation}</AppText>
                      <Bouncy onPress={() => { useMistakes.getState().remove(m.item.id); haptic.select(); }} style={styles.remove} accessibilityLabel="Tirar do caderno de erros">
                        <Icon name="close" size={14} color={c.textDim} />
                        <AppText variant="caption" dim>Tirar daqui</AppText>
                      </Bouncy>
                    </View>
                  )}
                </Bouncy>
              );
            })}
          </View>
        ))}

        {tab === "fixed" && fixed.length > 0 && (
          <Bouncy onPress={() => useMistakes.getState().clearFixed()} style={[styles.clear, { borderColor: c.border }]} accessibilityLabel="Limpar corrigidos">
            <Icon name="broom" size={18} color={c.textDim} />
            <AppText variant="label" dim>Limpar corrigidos</AppText>
          </Bouncy>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: space.sm },
  iconBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  hero: { flexDirection: "row", alignItems: "center", gap: space.md, padding: space.lg, borderRadius: radius.lg, borderWidth: 1 },
  actions: { flexDirection: "row", gap: space.sm, marginVertical: space.lg },
  secondary: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: space.md, borderRadius: radius.pill, borderWidth: 1 },
  empty: { alignItems: "center", paddingVertical: space.xxl },
  groupHead: { flexDirection: "row", alignItems: "center", gap: space.sm, marginBottom: space.sm },
  row: { padding: space.md, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, marginBottom: space.sm },
  rowHead: { flexDirection: "row", alignItems: "flex-start", gap: space.sm },
  remove: { flexDirection: "row", alignItems: "center", gap: 4, alignSelf: "flex-start", marginTop: space.sm, paddingVertical: 6 },
  clear: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: space.sm, padding: space.md, borderRadius: radius.md, borderWidth: 1, borderStyle: "dashed", marginTop: space.xl },
});
