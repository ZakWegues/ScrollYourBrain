import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Sheet } from "@/components/Sheet";
import { toast } from "@/components/Toast";
import { AppText, Bouncy, Chip, GradientButton, Icon, PageAvatar } from "@/components/ui";
import { ROOT_PAGES, getPage, rootOf } from "@/data/pages";
import { examAvailability, MIN_EXAM_QUESTIONS } from "@/feed/exam";
import { CONTENT } from "@/feed/sources/library";
import { haptic } from "@/lib/haptics";
import { addDays, countdownLabel, daysUntil, suggestedDaily, type PlannedExam } from "@/lib/planner";
import { dayKey } from "@/lib/streak";
import { useLibrary } from "@/store/library";
import { usePlanner } from "@/store/planner";
import { fonts, radius, space, TOUCH, useColors } from "@/theme";

const fmtDate = (key: string) => {
  const s = new Date(`${key}T12:00:00`).toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default function Planner() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const exams = usePlanner((s) => s.exams);
  const [editing, setEditing] = useState<PlannedExam | "new" | null>(null);
  const list = useMemo(() => Object.values(exams).sort((a, b) => a.date.localeCompare(b.date)), [exams]);
  const upcoming = list.filter((e) => daysUntil(e.date) >= 0);
  const past = list.filter((e) => daysUntil(e.date) < 0);

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={[styles.top, { paddingTop: insets.top + space.xs }]}>
        <Bouncy onPress={() => (router.canGoBack() ? router.back() : router.replace("/library"))} style={styles.iconBtn} accessibilityLabel="Voltar">
          <Icon name="chevron-left" size={30} color={c.text} />
        </Bouncy>
        <AppText variant="label">Calendário de provas</AppText>
        <Bouncy onPress={() => setEditing("new")} style={styles.iconBtn} accessibilityLabel="Adicionar prova" testID="add-exam">
          <Icon name="plus" size={26} color={c.text} />
        </Bouncy>
      </View>
      <ScrollView contentContainerStyle={{ padding: space.lg, paddingBottom: insets.bottom + space.xxl }} showsVerticalScrollIndicator={false}>
        {upcoming.length === 0 ? (
          <View style={[styles.empty, { borderColor: c.border }]}>
            <Icon name="calendar-star" size={48} color={c.accent2} />
            <AppText variant="headline" style={styles.center}>Nenhuma prova marcada</AppText>
            <AppText dim style={[styles.center, { maxWidth: 300 }]}>Cadastre a data e os temas. O app mostra a contagem regressiva e quantos cards estudar por dia.</AppText>
            <GradientButton label="Adicionar prova" icon="plus" onPress={() => setEditing("new")} style={{ marginTop: space.md }} />
          </View>
        ) : (
          upcoming.map((e, i) => <ExamCard key={e.id} exam={e} index={i} onEdit={() => setEditing(e)} />)
        )}
        {past.length > 0 && (
          <>
            <AppText variant="headline" style={{ marginTop: space.xl, marginBottom: space.md }}>Já passaram</AppText>
            {past.map((e) => (
              <Bouncy key={e.id} onPress={() => setEditing(e)} scaleTo={0.98} style={[styles.pastRow, { borderColor: c.border }]}>
                <Icon name="calendar-check" size={20} color={c.textDim} />
                <AppText variant="label" style={{ flex: 1 }} numberOfLines={1}>{e.title}</AppText>
                <AppText variant="caption" dim>{new Date(`${e.date}T12:00:00`).toLocaleDateString("pt-BR", { day: "numeric", month: "short" })}</AppText>
              </Bouncy>
            ))}
          </>
        )}
      </ScrollView>
      <Sheet visible={editing !== null} onClose={() => setEditing(null)} title={editing === "new" ? "Nova prova" : "Editar prova"}>
        {editing !== null && <ExamForm key={editing === "new" ? "new" : editing.id} exam={editing === "new" ? null : editing} onDone={() => setEditing(null)} />}
      </Sheet>
    </View>
  );
}

function ExamCard({ exam, index, onEdit }: { exam: PlannedExam; index: number; onEdit: () => void }) {
  const c = useColors();
  const custom = useLibrary((s) => s.customItems);
  const days = daysUntil(exam.date);
  const material = [...CONTENT, ...custom].filter((i) => exam.pageIds.includes(rootOf(i.pageId)) || exam.pageIds.includes(i.pageId)).length;
  const daily = suggestedDaily(material, days);
  const first = exam.pageIds[0];
  const canExam = exam.pageIds.some((p) => examAvailability(p) >= MIN_EXAM_QUESTIONS);
  const colors = first ? getPage(first).colors : (["#8B5CF6", "#22D3EE"] as const);
  return (
    <Animated.View entering={FadeInDown.delay(index * 60).springify().damping(26).stiffness(280).mass(1)} style={[styles.card, { backgroundColor: c.surface, borderColor: c.border }]}>
      <LinearGradient colors={[colors[0] + "33", "transparent"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
      <View style={styles.cardHead}>
        <View style={{ flex: 1 }}>
          <AppText variant="title" numberOfLines={2}>{exam.title}</AppText>
          <AppText dim style={{ marginTop: 2 }}>{fmtDate(exam.date)}</AppText>
        </View>
        <Bouncy onPress={onEdit} style={styles.edit} accessibilityLabel="Editar prova">
          <Icon name="pencil-outline" size={20} color={c.textDim} />
        </Bouncy>
      </View>
      <View style={styles.countRow}>
        <AppText variant="display" style={{ fontSize: 48, lineHeight: 54, color: days <= 3 ? c.danger : c.text }}>{Math.max(days, 0)}</AppText>
        <View>
          <AppText variant="label">{days === 1 ? "dia" : "dias"}</AppText>
          <AppText variant="caption" dim>{countdownLabel(days)}</AppText>
        </View>
        <View style={{ flex: 1 }} />
        <View style={[styles.plan, { backgroundColor: c.surface2 }]}>
          <AppText variant="headline">≈ {daily}</AppText>
          <AppText variant="caption" dim>cards por dia</AppText>
        </View>
      </View>
      <View style={styles.topics}>
        {exam.pageIds.map((p) => (
          <View key={p} style={[styles.topic, { borderColor: c.border }]}>
            <PageAvatar pageId={p} size={20} />
            <AppText variant="caption">{getPage(p).name}</AppText>
          </View>
        ))}
      </View>
      <View style={styles.actions}>
        <GradientButton label="Estudar" icon="bullseye-arrow" onPress={() => router.push(first ? `/focus?page=${first}` : "/focus")} style={{ flex: 1 }} />
        {canExam && (
          <Bouncy onPress={() => router.push(`/exam?page=${exam.pageIds.find((p) => examAvailability(p) >= MIN_EXAM_QUESTIONS)}`)} style={[styles.ghost, { borderColor: c.border }]} accessibilityLabel="Fazer simulado">
            <Icon name="timer-outline" size={18} color={c.text} />
            <AppText variant="label">Simulado</AppText>
          </Bouncy>
        )}
      </View>
    </Animated.View>
  );
}

function ExamForm({ exam, onDone }: { exam: PlannedExam | null; onDone: () => void }) {
  const c = useColors();
  const [title, setTitle] = useState(exam?.title ?? "");
  const [date, setDate] = useState(exam?.date ?? dayKey(addDays(new Date(), 7)));
  const [pages, setPages] = useState<string[]>(exam?.pageIds ?? []);
  const days = daysUntil(date);
  const shift = (n: number) => {
    const next = addDays(new Date(`${date}T12:00:00`), n);
    if (daysUntil(dayKey(next)) >= 0) setDate(dayKey(next));
    haptic.select();
  };
  const valid = title.trim().length > 0 && pages.length > 0;

  const save = () => {
    if (!valid) return;
    usePlanner.getState().save({ id: exam?.id, title: title.trim(), date, pageIds: pages });
    haptic.success();
    toast({ message: exam ? "Prova atualizada" : "Prova adicionada ao calendário", icon: "calendar-check", tone: "success" });
    onDone();
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={{ maxHeight: 520 }} showsVerticalScrollIndicator={false}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Nome (ex.: Prova de Biologia)"
        placeholderTextColor={c.textMute}
        style={[styles.input, { color: c.text, backgroundColor: c.surface2, borderColor: c.border, fontFamily: fonts.body }]}
        testID="exam-title"
      />
      <AppText variant="caption" dim style={styles.formLabel}>Data</AppText>
      <View style={[styles.dateRow, { backgroundColor: c.surface2, borderColor: c.border }]}>
        <Bouncy onPress={() => shift(-1)} style={styles.step} accessibilityLabel="Um dia antes"><Icon name="chevron-left" size={24} color={c.text} /></Bouncy>
        <View style={{ flex: 1, alignItems: "center" }}>
          <AppText variant="label">{fmtDate(date)}</AppText>
          <AppText variant="caption" dim>{countdownLabel(days)}</AppText>
        </View>
        <Bouncy onPress={() => shift(1)} style={styles.step} accessibilityLabel="Um dia depois"><Icon name="chevron-right" size={24} color={c.text} /></Bouncy>
      </View>
      <View style={[styles.chips, { marginTop: space.sm }]}>
        {[["Amanhã", 1], ["1 semana", 7], ["2 semanas", 14], ["1 mês", 30]].map(([label, n]) => (
          <Chip key={label} label={String(label)} active={days === n} onPress={() => setDate(dayKey(addDays(new Date(), Number(n))))} />
        ))}
      </View>
      <AppText variant="caption" dim style={styles.formLabel}>Temas da prova</AppText>
      <View style={styles.chips}>
        {ROOT_PAGES.filter((p) => p.id !== "curiosidades").map((p) => (
          <Chip key={p.id} label={p.name} active={pages.includes(p.id)} onPress={() => setPages((ps) => (ps.includes(p.id) ? ps.filter((x) => x !== p.id) : [...ps, p.id]))} />
        ))}
      </View>
      <GradientButton label={valid ? "Salvar prova" : "Dê um nome e escolha temas"} icon="check" onPress={save} style={{ marginTop: space.lg, opacity: valid ? 1 : 0.45 }} />
      {exam && (
        <Bouncy
          onPress={() => {
            usePlanner.getState().remove(exam.id);
            toast({ message: "Prova removida", icon: "trash-can-outline" });
            onDone();
          }}
          style={[styles.delete, { borderColor: c.danger }]}
        >
          <Icon name="trash-can-outline" size={18} color={c.danger} />
          <AppText variant="label" style={{ color: c.danger }}>Remover prova</AppText>
        </Bouncy>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: space.sm },
  iconBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  center: { textAlign: "center" },
  empty: { alignItems: "center", gap: space.sm, padding: space.xl, borderRadius: radius.lg, borderWidth: 1, borderStyle: "dashed" },
  card: { padding: space.lg, borderRadius: radius.lg, borderWidth: StyleSheet.hairlineWidth, marginBottom: space.md, overflow: "hidden" },
  cardHead: { flexDirection: "row", gap: space.sm },
  edit: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center", marginTop: -space.sm, marginRight: -space.sm },
  countRow: { flexDirection: "row", alignItems: "center", gap: space.sm, marginTop: space.md },
  plan: { alignItems: "center", paddingHorizontal: space.md, paddingVertical: space.sm, borderRadius: radius.md },
  topics: { flexDirection: "row", flexWrap: "wrap", gap: space.sm, marginTop: space.md },
  topic: { flexDirection: "row", alignItems: "center", gap: 6, paddingRight: space.md, paddingLeft: 4, paddingVertical: 4, borderRadius: radius.pill, borderWidth: StyleSheet.hairlineWidth },
  actions: { flexDirection: "row", gap: space.sm, marginTop: space.lg },
  ghost: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: space.lg, height: 48, borderRadius: radius.pill, borderWidth: 1 },
  pastRow: { flexDirection: "row", alignItems: "center", gap: space.md, paddingVertical: space.md, borderBottomWidth: StyleSheet.hairlineWidth },
  input: { height: 48, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, paddingHorizontal: space.md, fontSize: 15, outlineStyle: "none" } as object,
  formLabel: { marginTop: space.lg, marginBottom: space.sm },
  dateRow: { flexDirection: "row", alignItems: "center", height: 60, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth },
  step: { width: TOUCH + 4, height: 60, alignItems: "center", justifyContent: "center" },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: space.sm },
  delete: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: space.sm, height: 48, borderRadius: radius.pill, borderWidth: 1, marginTop: space.md },
});
