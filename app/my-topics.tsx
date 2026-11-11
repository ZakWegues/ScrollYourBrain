import { router } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Animated, { FadeIn, LinearTransition } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppText, Bouncy, Chip, Icon, PageAvatar, Segmented } from "@/components/ui";
import { SCHOOL_SUBJECTS, TOPICS, type CurriculumTopic, type Serie } from "@/data/curriculum";
import { getPage } from "@/data/pages";
import { defaultTopics } from "@/feed/sources/library";
import { haptic } from "@/lib/haptics";
import { useSettings } from "@/store/settings";
import { radius, space, TOUCH, useColors } from "@/theme";

const SERIES: Serie[] = [1, 2, 3];

/** Lets the student mark which curriculum topics their school covers; the feed follows the marks. */
export default function MyTopics() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const serie = useSettings((s) => s.serie);
  const stored = useSettings((s) => s.myTopics);
  const marked = useMemo(() => new Set(stored ?? defaultTopics(serie)), [stored, serie]);
  const [view, setView] = useState<Serie>(serie ?? 1);
  const [open, setOpen] = useState<string | null>(SCHOOL_SUBJECTS[0]);

  const save = (next: Set<string>) => useSettings.getState().set({ myTopics: [...next] });
  const toggle = (ids: string[], on: boolean) => {
    haptic.select();
    const next = new Set(marked);
    for (const id of ids) {
      if (on) next.add(id);
      else next.delete(id);
    }
    save(next);
  };
  const preset = (ids: string[] | null) => {
    haptic.success();
    useSettings.getState().set({ myTopics: ids });
  };

  const bySubject = useMemo(() => {
    const out: Record<string, CurriculumTopic[]> = {};
    for (const t of TOPICS) if (t.serie === view) (out[t.subject] ??= []).push(t);
    for (const list of Object.values(out)) list.sort((a, b) => a.bimestre - b.bimestre);
    return out;
  }, [view]);

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={[styles.top, { paddingTop: insets.top + space.xs }]}>
        <Bouncy onPress={() => (router.canGoBack() ? router.back() : router.replace("/settings"))} style={styles.iconBtn} accessibilityLabel="Voltar">
          <Icon name="chevron-left" size={30} color={c.text} />
        </Bouncy>
        <AppText variant="label">Assuntos da minha escola</AppText>
        <View style={styles.iconBtn} />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: space.lg, paddingBottom: insets.bottom + space.xxl }} showsVerticalScrollIndicator={false}>
        <View style={[styles.intro, { backgroundColor: c.surface, borderColor: c.border }]}>
          <Icon name="school-outline" size={28} color={c.accent} />
          <View style={{ flex: 1 }}>
            <AppText variant="headline">{marked.size} assuntos marcados</AppText>
            <AppText variant="caption" dim>
              Marque o que sua escola dá. O feed mostra só esses assuntos, junto com macetes e curiosidades.
              {stored ? "" : " Agora: padrão da sua série."}
            </AppText>
          </View>
        </View>

        <View style={styles.presets}>
          <Chip icon="restore" label={serie ? `Padrão do ${serie}º ano` : "Padrão"} active={!stored} onPress={() => preset(null)} />
          <Chip icon="numeric-2-box-multiple-outline" label="1º + 2º ano" onPress={() => preset(TOPICS.filter((t) => t.serie <= 2).map((t) => t.id))} />
          <Chip icon="check-all" label="Tudo" onPress={() => preset(TOPICS.map((t) => t.id))} />
          <Chip icon="close" label="Limpar" onPress={() => preset([])} />
        </View>

        <Segmented<string> fill value={String(view)} onChange={(v) => setView(Number(v) as Serie)} options={SERIES.map((s) => ({ value: String(s), label: `${s}º ano` }))} />

        {SCHOOL_SUBJECTS.map((subject) => {
          const list = bySubject[subject] ?? [];
          if (list.length === 0) return null;
          const page = getPage(subject);
          const count = list.filter((t) => marked.has(t.id)).length;
          const all = count === list.length;
          const expanded = open === subject;
          return (
            <Animated.View key={subject} layout={LinearTransition.springify().damping(26).stiffness(260).mass(1)} style={[styles.card, { backgroundColor: c.surface, borderColor: c.border }]}>
              <Bouncy scaleTo={0.99} onPress={() => setOpen(expanded ? null : subject)} style={styles.head} accessibilityLabel={`${page.name}: ${count} de ${list.length} marcados`} testID={`subject-${subject}`}>
                <PageAvatar pageId={subject} size={36} />
                <View style={{ flex: 1 }}>
                  <AppText variant="label">{page.name}</AppText>
                  <AppText variant="caption" dim>{count}/{list.length} do {view}º ano</AppText>
                </View>
                <Bouncy onPress={() => toggle(list.map((t) => t.id), !all)} style={styles.check} accessibilityLabel={all ? `Desmarcar ${page.name}` : `Marcar ${page.name}`}>
                  <Icon name={all ? "checkbox-marked" : count > 0 ? "minus-box" : "checkbox-blank-outline"} size={26} color={count > 0 ? c.accent : c.textMute} />
                </Bouncy>
                <Icon name={expanded ? "chevron-up" : "chevron-down"} size={22} color={c.textDim} />
              </Bouncy>
              {expanded && (
                <Animated.View entering={FadeIn.duration(180)}>
                  {list.map((t, i) => {
                    const on = marked.has(t.id);
                    const showBim = i === 0 || list[i - 1].bimestre !== t.bimestre;
                    return (
                      <View key={t.id}>
                        {showBim && <AppText variant="caption" style={[styles.bim, { color: c.textDim }]}>{t.bimestre}º BIMESTRE</AppText>}
                        <Bouncy scaleTo={0.98} onPress={() => toggle([t.id], !on)} style={[styles.row, { borderColor: c.border }]} accessibilityRole="checkbox" accessibilityState={{ checked: on }} testID={`topic-row-${t.id}`}>
                          <Icon name={on ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} size={22} color={on ? c.accent : c.textMute} />
                          <View style={{ flex: 1 }}>
                            <AppText style={{ color: on ? c.text : c.textDim }}>{t.name}</AppText>
                            {t.page !== subject && <AppText variant="caption" dim>{getPage(t.page).name}</AppText>}
                          </View>
                        </Bouncy>
                      </View>
                    );
                  })}
                </Animated.View>
              )}
            </Animated.View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: space.sm },
  iconBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  intro: { flexDirection: "row", gap: space.md, alignItems: "center", padding: space.lg, borderRadius: radius.lg, borderWidth: 1, marginTop: space.sm },
  presets: { flexDirection: "row", flexWrap: "wrap", gap: space.sm, marginVertical: space.lg },
  card: { borderRadius: radius.lg, borderWidth: 1, marginTop: space.md, overflow: "hidden" },
  head: { flexDirection: "row", alignItems: "center", gap: space.md, padding: space.md },
  check: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  bim: { paddingHorizontal: space.lg, paddingTop: space.md, paddingBottom: 4, letterSpacing: 1 },
  row: { flexDirection: "row", alignItems: "center", gap: space.md, paddingHorizontal: space.lg, paddingVertical: 12, borderTopWidth: StyleSheet.hairlineWidth, minHeight: TOUCH },
});
