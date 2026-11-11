import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Animated, { Easing, FadeIn, FadeInDown, FadeInRight, ZoomIn, cancelAnimation, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { QuizOptions, TIMED_OUT } from "@/components/QuizOptions";
import { AppText, Bouncy, Chip, Glass, GradientButton, Icon, Segmented } from "@/components/ui";
import { getPage } from "@/data/pages";
import { ALL_PAGES, buildExam, examAvailability, examPages, examScore } from "@/feed/exam";
import { useExamScope, type ExamScope } from "@/feed/examPool";
import { createRng } from "@/feed/sources/generators";
import type { QuizItem } from "@/feed/types";
import { haptic } from "@/lib/haptics";
import { awardXp } from "@/store/xp";
import { useReview } from "@/store/review";
import { countStudy, trackAnswer, trackTime, useProgress } from "@/store/progress";
import { radius, useColors } from "@/theme";

const SECONDS = 20;
const AUTO_NEXT_MS = 1200;

interface Settings {
  pageId: string;
  count: number;
  timed: boolean;
}

interface Answer {
  item: QuizItem;
  picked: number;
}

const fmtTime = (ms: number) => {
  const s = Math.round(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

export default function Exam() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ page?: string; mode?: string }>();
  const scope = useExamScope((s) => (params.mode ? s.scope : null));
  const [rng] = useState(() => createRng(Date.now() & 0xffffffff));
  const [settings, setSettings] = useState<Settings>(() => ({
    pageId: params.page ?? ALL_PAGES,
    count: scope ? Math.min(scope.count, scope.quizzes.length) : 10,
    timed: true,
  }));
  const recordKey = scope ? `mode:${scope.key}` : settings.pageId;
  const seconds = scope?.secondsPerQuestion ?? SECONDS;
  const [questions, setQuestions] = useState<QuizItem[] | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [startedAt, setStartedAt] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [newBest, setNewBest] = useState(false);
  const [done, setDone] = useState(false);
  const lastAt = useRef(0);

  const close = () => (router.canGoBack() ? router.back() : router.replace("/explore"));

  const start = () => {
    const pageId = settings.pageId === ALL_PAGES ? undefined : settings.pageId;
    setQuestions(buildExam({ pageId, count: settings.count, rng, pool: scope?.quizzes }));
    setAnswers([]);
    setNewBest(false);
    setDone(false);
    setStartedAt(Date.now());
    lastAt.current = Date.now();
    haptic.medium();
  };

  const onAnswer = useCallback((item: QuizItem, picked: number) => {
    const ok = picked === item.answer;
    trackAnswer(item, ok);
    useReview.getState().recordQuiz(item, ok);
    countStudy(item.pageId);
    trackTime(item.pageId, Date.now() - lastAt.current);
    lastAt.current = Date.now();
    if (ok) haptic.success();
    else haptic.error();
    setAnswers((a) => (a.some((x) => x.item.id === item.id) ? a : [...a, { item, picked }]));
  }, []);

  const onFinish = (list: Answer[]) => {
    const score = examScore(list.filter((a) => a.picked === a.item.answer).length, list.length);
    setElapsed(Date.now() - startedAt);
    setNewBest(useProgress.getState().recordExam(recordKey, score));
    useProgress.getState().logEvent(undefined, { exams: 1 });
    awardXp("exam");
    setDone(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <LinearGradient colors={["rgba(139,92,246,0.22)", "transparent"]} style={styles.glow} pointerEvents="none" />
      <View style={[styles.top, { paddingTop: insets.top + 6 }]}>
        <Bouncy onPress={close} style={styles.iconBtn} accessibilityLabel="Fechar prova">
          <Icon name="close" size={26} color={c.text} />
        </Bouncy>
        <AppText variant="label">Modo prova</AppText>
        <View style={styles.iconBtn} />
      </View>

      {questions === null && <Setup settings={settings} onChange={setSettings} onStart={start} scope={scope} seconds={seconds} recordKey={recordKey} />}
      {questions !== null && !done && (
        <Run
          key={startedAt}
          questions={questions}
          answers={answers}
          timed={settings.timed}
          seconds={seconds}
          onAnswer={onAnswer}
          onDone={onFinish}
        />
      )}
      {done && (
        <Result
          answers={answers}
          elapsed={elapsed}
          newBest={newBest}
          best={useProgress.getState().examBest[recordKey] ?? 0}
          pageId={settings.pageId}
          scopeTitle={scope?.title}
          onRetry={start}
          onClose={close}
        />
      )}
    </View>
  );
}

function Setup({ settings, onChange, onStart, scope, seconds, recordKey }: { settings: Settings; onChange: (s: Settings) => void; onStart: () => void; scope: ExamScope | null; seconds: number; recordKey: string }) {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const best = useProgress((s) => s.examBest);
  // Subjects, plus the account the exam was opened from (e.g. "Funções").
  const [opened] = useState(settings.pageId);
  const pages = useMemo(() => {
    const list = examPages();
    if (opened !== ALL_PAGES && !list.some((p) => p.page.id === opened)) list.unshift({ page: getPage(opened), available: examAvailability(opened) });
    return list;
  }, [opened]);
  const available = scope ? scope.quizzes.length : examAvailability(settings.pageId === ALL_PAGES ? undefined : settings.pageId);
  const counts = scope
    ? [...new Set([Math.min(scope.count, available), Math.min(Math.ceil(scope.count / 2), available)])].sort((a, b) => a - b)
    : [10, 20].filter((n) => n <= available || n === 10);
  const fmtSeconds = seconds >= 60 ? `${seconds / 60} min` : `${seconds}s`;

  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: insets.bottom + 120 }} showsVerticalScrollIndicator={false}>
      <Animated.View entering={ZoomIn.springify().damping(26).stiffness(280).mass(1)} style={[styles.hero, { backgroundColor: c.surface, borderColor: c.border }]}>
        <Icon name="timer-outline" size={44} color={c.accent2} />
        <AppText variant="title" style={{ marginTop: 8, textAlign: "center" }}>{scope ? `Simulado · ${scope.title}` : "Teste o que você aprendeu"}</AppText>
        <AppText dim style={{ textAlign: "center", marginTop: 4 }}>
          {scope ? `${scope.subtitle} · ${available} questões disponíveis` : "Só quizzes, sem distrações. No fim você vê a nota e revisa os erros."}
        </AppText>
      </Animated.View>

      {!scope && <AppText variant="headline" style={styles.label}>Tema</AppText>}
      {!scope && <View style={styles.chips}>
        <Chip label="Todos os temas" icon="shuffle-variant" active={settings.pageId === ALL_PAGES} onPress={() => onChange({ ...settings, pageId: ALL_PAGES })} />
        {pages.map(({ page }) => (
          <Chip key={page.id} label={page.name} active={settings.pageId === page.id} onPress={() => onChange({ ...settings, pageId: page.id, count: examAvailability(page.id) >= settings.count ? settings.count : 10 })} />
        ))}
      </View>}
      {!scope && <AppText variant="caption" dim style={{ marginTop: 8 }}>Temas com poucas questões ainda não aparecem aqui.</AppText>}

      <AppText variant="headline" style={styles.label}>Questões</AppText>
      <Segmented<string>
        fill
        value={String(settings.count)}
        onChange={(v) => onChange({ ...settings, count: Number(v) })}
        options={counts.map((n) => ({ value: String(n), label: `${Math.min(n, available)} questões` }))}
      />

      <AppText variant="headline" style={styles.label}>Tempo</AppText>
      <Segmented<string>
        fill
        value={settings.timed ? "timed" : "free"}
        onChange={(v) => onChange({ ...settings, timed: v === "timed" })}
        options={[{ value: "timed", label: `${fmtSeconds} por questão` }, { value: "free", label: "Sem tempo" }]}
      />

      {best[recordKey] !== undefined && (
        <Glass style={styles.bestBox}>
          <Icon name="trophy-outline" size={20} color={c.save} />
          <AppText variant="label">Seu recorde aqui: {best[recordKey]}%</AppText>
        </Glass>
      )}

      <GradientButton label="Começar prova" icon="play" onPress={onStart} style={{ marginTop: 24 }} />
    </ScrollView>
  );
}

function Run({ questions, answers, timed, seconds, onAnswer, onDone }: { questions: QuizItem[]; answers: Answer[]; timed: boolean; seconds: number; onAnswer: (item: QuizItem, picked: number) => void; onDone: (answers: Answer[]) => void }) {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const [current, setCurrent] = useState(0);
  const item = questions[current];
  const answer = answers[current];
  const picked = answer ? answer.picked : null;
  const last = current === questions.length - 1;
  const time = useSharedValue(1);
  const page = getPage(item.pageId);

  // Countdown for the current question; running out counts as a wrong answer.
  useEffect(() => {
    if (!timed || picked !== null) {
      cancelAnimation(time);
      return;
    }
    time.set(1);
    time.set(withTiming(0, { duration: seconds * 1000, easing: Easing.linear }));
    const id = setTimeout(() => onAnswer(item, TIMED_OUT), seconds * 1000);
    return () => clearTimeout(id);
  }, [timed, picked, item, time, onAnswer, seconds]);

  const next = () => {
    if (last) onDone(answers);
    else setCurrent((i) => i + 1);
  };

  // A right answer moves on by itself; a wrong one waits so the explanation can be read.
  useEffect(() => {
    if (picked === null || picked !== item.answer) return;
    const id = setTimeout(next, AUTO_NEXT_MS);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [picked]);

  const bar = useAnimatedStyle(() => ({ width: `${time.value * 100}%` }));
  const correct = answers.filter((a) => a.picked === a.item.answer).length;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.runHead}>
        <View style={styles.dots}>
          {questions.map((q, i) => {
            const a = answers[i];
            const color = a ? (a.picked === a.item.answer ? c.success : c.danger) : i === current ? c.text : c.surface2;
            return <View key={q.id} style={[styles.dot, { backgroundColor: color, flex: 1 }]} />;
          })}
        </View>
        <View style={styles.meta}>
          <AppText variant="caption" dim>{`Questão ${current + 1} de ${questions.length} · ${page.name}`}</AppText>
          <AppText variant="caption" style={{ color: c.success }}>{correct} acertos</AppText>
        </View>
        {timed && (
          <View style={[styles.timerTrack, { backgroundColor: c.surface2 }]}>
            <Animated.View style={[styles.timerFill, { backgroundColor: c.accent2 }, bar]} />
          </View>
        )}
      </View>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: insets.bottom + 110 }} showsVerticalScrollIndicator={false}>
        <Animated.View key={item.id} entering={FadeInRight.springify().damping(26).stiffness(280).mass(1)}>
          <AppText variant="title" style={{ fontSize: 24, lineHeight: 30, marginBottom: 18 }} testID="exam-question">{item.question}</AppText>
          <QuizOptions item={item} picked={picked} onPick={(i) => picked === null && onAnswer(item, i)} />
        </Animated.View>
      </ScrollView>
      {picked !== null && (
        <Animated.View entering={FadeInDown} style={[styles.footer, { paddingBottom: insets.bottom + 16, backgroundColor: c.bg }]}>
          <GradientButton label={last ? "Ver resultado" : "Próxima"} icon={last ? "flag-checkered" : "arrow-right"} onPress={next} />
        </Animated.View>
      )}
    </View>
  );
}

function Result({ answers, elapsed, newBest, best, pageId, scopeTitle, onRetry, onClose }: { answers: Answer[]; elapsed: number; newBest: boolean; best: number; pageId: string; scopeTitle?: string; onRetry: () => void; onClose: () => void }) {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const correct = answers.filter((a) => a.picked === a.item.answer).length;
  const score = examScore(correct, answers.length);
  const wrong = answers.filter((a) => a.picked !== a.item.answer);
  const mood = score >= 80 ? { icon: "trophy" as const, text: "Excelente!", color: c.save } : score >= 50 ? { icon: "thumb-up" as const, text: "Bom trabalho!", color: c.accent2 } : { icon: "book-open-variant" as const, text: "Bora revisar!", color: c.like };
  const topic = scopeTitle ?? (pageId === ALL_PAGES ? "Todos os temas" : getPage(pageId).name);

  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: insets.bottom + 32 }} showsVerticalScrollIndicator={false}>
      <Animated.View entering={ZoomIn.springify().damping(18).stiffness(260).mass(1)} style={styles.scoreBox}>
        <Icon name={mood.icon} size={52} color={mood.color} />
        <AppText variant="display" style={{ fontSize: 64, lineHeight: 70, marginTop: 6 }} testID="exam-score">{score}%</AppText>
        <AppText variant="headline">{mood.text}</AppText>
        <AppText dim style={{ marginTop: 4 }}>{topic}</AppText>
        {newBest && (
          <Animated.View entering={FadeIn.delay(300)} style={[styles.bestTag, { backgroundColor: "rgba(251,191,36,0.16)", borderColor: c.save }]}>
            <Icon name="trophy-outline" size={16} color={c.save} />
            <AppText variant="caption" style={{ color: c.save }}>Novo recorde!</AppText>
          </Animated.View>
        )}
      </Animated.View>

      <View style={styles.stats}>
        {[
          { label: "Acertos", value: `${correct}/${answers.length}`, icon: "check-circle" as const, color: c.success },
          { label: "Tempo", value: fmtTime(elapsed), icon: "timer-outline" as const, color: c.accent2 },
          { label: "Recorde", value: `${Math.max(best, score)}%`, icon: "trophy-outline" as const, color: c.save },
        ].map((s) => (
          <View key={s.label} style={[styles.stat, { backgroundColor: c.surface, borderColor: c.border }]}>
            <Icon name={s.icon} size={18} color={s.color} />
            <AppText variant="headline" style={{ marginTop: 4 }}>{s.value}</AppText>
            <AppText variant="caption" dim>{s.label}</AppText>
          </View>
        ))}
      </View>

      {wrong.length > 0 && (
        <>
          <AppText variant="headline" style={styles.label}>Revise o que errou</AppText>
          {wrong.map((a) => (
            <View key={a.item.id} style={[styles.review, { backgroundColor: c.surface, borderColor: c.border }]}>
              <AppText variant="label">{a.item.question}</AppText>
              <View style={styles.reviewRow}>
                <Icon name="check-circle" size={16} color={c.success} />
                <AppText variant="caption" style={{ color: c.success, flex: 1 }}>{a.item.options[a.item.answer]}</AppText>
              </View>
              {a.picked >= 0 && (
                <View style={styles.reviewRow}>
                  <Icon name="close-circle" size={16} color={c.danger} />
                  <AppText variant="caption" style={{ color: c.danger, flex: 1 }}>{a.item.options[a.picked]}</AppText>
                </View>
              )}
              <AppText variant="caption" dim style={{ marginTop: 6 }}>{a.item.explanation}</AppText>
            </View>
          ))}
        </>
      )}

      <View style={styles.actions}>
        <Bouncy onPress={onClose} style={[styles.secondary, { borderColor: c.border }]} accessibilityLabel="Voltar">
          <AppText variant="label">Voltar</AppText>
        </Bouncy>
        <GradientButton label="Refazer" icon="refresh" onPress={onRetry} style={{ flex: 1 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  glow: { position: "absolute", top: 0, left: 0, right: 0, height: 320 },
  top: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 8 },
  iconBtn: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
  hero: { alignItems: "center", padding: 22, borderRadius: radius.xl, borderWidth: StyleSheet.hairlineWidth },
  label: { marginTop: 22, marginBottom: 10 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  bestBox: { flexDirection: "row", alignItems: "center", gap: 8, padding: 14, marginTop: 20 },
  runHead: { paddingHorizontal: 16, paddingTop: 4 },
  dots: { flexDirection: "row", gap: 3 },
  dot: { height: 4, borderRadius: 2 },
  meta: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  timerTrack: { height: 6, borderRadius: 3, marginTop: 10, overflow: "hidden" },
  timerFill: { height: 6, borderRadius: 3 },
  footer: { position: "absolute", left: 0, right: 0, bottom: 0, paddingHorizontal: 16, paddingTop: 12 },
  scoreBox: { alignItems: "center", paddingVertical: 18 },
  bestTag: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 12, paddingVertical: 6, borderRadius: radius.pill, borderWidth: 1, marginTop: 12 },
  stats: { flexDirection: "row", gap: 8, marginTop: 8 },
  stat: { flex: 1, padding: 12, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, alignItems: "center" },
  review: { padding: 14, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, marginBottom: 8, gap: 4 },
  reviewRow: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 4 },
  actions: { flexDirection: "row", gap: 10, marginTop: 24 },
  secondary: { paddingHorizontal: 22, height: 48, borderRadius: radius.pill, borderWidth: 1, alignItems: "center", justifyContent: "center" },
});
