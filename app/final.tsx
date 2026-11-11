import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppText, Bouncy, Icon, type IconName } from "@/components/ui";
import { TOPICS } from "@/data/curriculum";
import { getPage } from "@/data/pages";
import { startWeakExam } from "@/feed/practice";
import { defaultTopics } from "@/feed/sources/library";
import { finalPlan, type FinalAction, type FinalTask } from "@/lib/finalPlan";
import { haptic } from "@/lib/haptics";
import { countdownLabel, daysUntil } from "@/lib/planner";
import { dayKey } from "@/lib/streak";
import { usePlanner } from "@/store/planner";
import { useSettings } from "@/store/settings";
import { radius, space, TOUCH, useColors } from "@/theme";
import { openMode } from "./modes";

const ICON: Record<FinalAction, IconName> = {
  study: "book-open-page-variant-outline",
  review: "history",
  weak: "target",
  mistakes: "alert-circle-outline",
  exam: "timer-outline",
  macetes: "lightning-bolt",
  rest: "sleep",
};

/** Last week before an exam: one clear task per day, checked off as you go. */
export default function Final() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const { exam: examId } = useLocalSearchParams<{ exam?: string }>();
  const exam = usePlanner((s) => (examId ? s.exams[examId] : undefined));
  const done = usePlanner((s) => s.done);
  const [today] = useMemo(() => [dayKey()], []);
  const plan = useMemo(() => (exam ? finalPlan(exam.id, exam.date) : []), [exam]);
  const back = () => (router.canGoBack() ? router.back() : router.replace("/library"));

  if (!exam) {
    return (
      <View style={[styles.center, { backgroundColor: c.bg }]}>
        <AppText dim>Prova não encontrada.</AppText>
        <Bouncy onPress={back} style={styles.textBtn}><AppText variant="label">Voltar</AppText></Bouncy>
      </View>
    );
  }

  // The exam's subjects, limited to what the student studies (marked topics or their série).
  const scopeTopics = () => {
    const { serie, myTopics } = useSettings.getState();
    const allowed = new Set(myTopics ?? defaultTopics(serie));
    const ofExam = TOPICS.filter((t) => exam.pageIds.includes(t.subject));
    const mine = ofExam.filter((t) => allowed.has(t.id));
    return (mine.length ? mine : ofExam).map((t) => t.id);
  };

  const run = (task: FinalTask) => {
    switch (task.action) {
      case "study":
      case "exam":
        openMode({ kind: "anual", topicIds: scopeTopics(), name: exam.title });
        break;
      case "review":
        router.push("/review");
        break;
      case "weak":
        startWeakExam();
        break;
      case "mistakes":
        router.push("/mistakes");
        break;
      case "macetes":
      case "rest":
        router.push("/page/macetes");
        break;
    }
  };

  const days = daysUntil(exam.date);
  const doneCount = plan.filter((t) => done[t.id]).length;

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + space.xxl }} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={[c.danger, c.accent, c.bg]} locations={[0, 0.55, 1]} style={[styles.hero, { paddingTop: insets.top + 56 }]}>
          <AppText variant="caption" style={styles.kicker}>RETA FINAL</AppText>
          <AppText variant="display" style={{ color: "#fff", textAlign: "center" }}>{exam.title}</AppText>
          <AppText style={{ color: "rgba(255,255,255,0.9)", marginTop: 4 }}>{countdownLabel(days)} · {exam.pageIds.map((p) => getPage(p).name).join(", ")}</AppText>
          <View style={styles.heroTrack}>
            <View style={[styles.heroFill, { width: `${plan.length ? (doneCount / plan.length) * 100 : 0}%` }]} />
          </View>
          <AppText variant="caption" style={{ color: "rgba(255,255,255,0.85)" }}>{doneCount}/{plan.length} etapas feitas</AppText>
        </LinearGradient>

        <View style={{ paddingHorizontal: space.lg }}>
          {plan.length === 0 && <AppText dim style={{ textAlign: "center", marginTop: space.xl }}>A prova é hoje ou já passou. Boa prova!</AppText>}
          {plan.map((task) => {
            const isToday = task.day === today;
            const checked = !!done[task.id];
            const label = new Date(`${task.day}T12:00:00`).toLocaleDateString("pt-BR", { weekday: "short", day: "numeric" });
            return (
              <View key={task.id} style={[styles.task, { backgroundColor: c.surface, borderColor: isToday ? c.accent : c.border }]}>
                <Bouncy
                  onPress={() => {
                    usePlanner.getState().toggleDone(task.id);
                    haptic.select();
                  }}
                  style={styles.check}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked }}
                  accessibilityLabel={`Marcar ${task.title} como feito`}
                >
                  <Icon name={checked ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} size={26} color={checked ? c.success : c.textDim} />
                </Bouncy>
                <Bouncy onPress={() => run(task)} scaleTo={0.98} style={styles.taskBody} accessibilityLabel={`${task.title}: ${task.detail}`}>
                  <View style={{ flex: 1 }}>
                    <AppText variant="caption" style={{ color: isToday ? c.accent2 : c.textDim }}>{isToday ? "HOJE" : label.toUpperCase()} · D-{task.before}</AppText>
                    <AppText variant="label" style={{ color: checked ? c.textDim : c.text }}>{task.title}</AppText>
                    <AppText variant="caption" dim>{task.detail}</AppText>
                  </View>
                  <Icon name={ICON[task.action]} size={22} color={c.accent2} />
                </Bouncy>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <Bouncy onPress={back} style={[styles.back, { top: insets.top + 6 }]} accessibilityLabel="Voltar">
        <Icon name="chevron-left" size={30} color="#fff" />
      </Bouncy>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  textBtn: { padding: space.md },
  hero: { alignItems: "center", paddingHorizontal: space.xl, paddingBottom: space.xl, gap: 2 },
  kicker: { color: "rgba(255,255,255,0.85)", letterSpacing: 2 },
  heroTrack: { alignSelf: "stretch", height: 8, borderRadius: 4, backgroundColor: "rgba(0,0,0,0.25)", marginTop: space.md, marginBottom: 4, overflow: "hidden" },
  heroFill: { height: "100%", borderRadius: 4, backgroundColor: "#fff" },
  task: { flexDirection: "row", alignItems: "center", borderRadius: radius.lg, borderWidth: 1, marginTop: space.md, paddingRight: space.md },
  check: { width: TOUCH + 8, height: TOUCH + 16, alignItems: "center", justifyContent: "center" },
  taskBody: { flex: 1, flexDirection: "row", alignItems: "center", gap: space.md, paddingVertical: space.md },
  back: { position: "absolute", left: 8, width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
});
