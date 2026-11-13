import { LinearGradient } from "@/components/LinearGradient";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn, FadeInRight, ZoomIn } from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MultiOptions } from "@/components/MultiOptions";
import { OpenAnswer } from "@/components/OpenAnswer";
import { gradeMulti, selfGradeOk } from "@/lib/grading";
import { QuizOptions } from "@/components/QuizOptions";
import { AppText, Bouncy, GradientButton, Icon, PageAvatar } from "@/components/ui";
import { TOPIC_BY_ID, itemsForTopics } from "@/data/curriculum";
import { getPage } from "@/data/pages";
import { createRng } from "@/feed/sources/generators";
import { CONTENT } from "@/feed/sources/library";
import { CURATED_VIDEOS, youtubeThumb } from "@/feed/sources/youtube";
import type { ConceptItem, FlashItem, QuizItem, StudyItem, VideoItem } from "@/feed/types";
import { useViewer } from "@/feed/viewer";
import { haptic } from "@/lib/haptics";
import { useModes } from "@/store/modes";
import { countStudy, trackAnswer } from "@/store/progress";
import { useReview } from "@/store/review";
import { awardXp } from "@/store/xp";
import { radius, space, TOUCH, useColors } from "@/theme";

const PASS = 0.7;

function shuffle<T>(list: T[], seed: number): T[] {
  const rng = createRng(seed);
  return [...list].map((x) => [rng(), x] as const).sort((a, b) => a[0] - b[0]).map(([, x]) => x);
}

/** Builds the lesson: explanation first, then memory, then practice, then a video. */
function buildLesson(topicId: string | undefined, pageId: string | undefined, seed: number): { title: string; pageId: string; steps: StudyItem[]; topicIds: string[] } {
  const topic = topicId ? TOPIC_BY_ID[topicId] : undefined;
  const page = topic?.page ?? pageId ?? "matematica";
  const pool = topic ? itemsForTopics([topic.id]) : CONTENT.filter((i) => i.pageId === page);
  const of = <K extends StudyItem["kind"]>(kind: K) => shuffle(pool.filter((i) => i.kind === kind), seed) as Extract<StudyItem, { kind: K }>[];
  const concepts = of("concept").slice(0, 2);
  const flashes = of("flash").slice(0, 3);
  const quizzes = of("quiz").slice(0, 5);
  const multis = of("multi").slice(0, 1);
  const opens = of("open").slice(0, 1);
  const video = shuffle(CURATED_VIDEOS.filter((v) => v.pageId === page), seed)[0];
  return {
    title: topic?.name ?? getPage(page).name,
    pageId: page,
    steps: [...concepts, ...flashes, ...quizzes, ...multis, ...opens, ...(video ? [video] : [])],
    topicIds: topic ? [topic.id] : [],
  };
}

const STEP_LABEL: Record<StudyItem["kind"], string> = { concept: "Entenda", flash: "Memorize", quiz: "Pratique", multi: "Pratique", open: "Explique", video: "Veja", wiki: "Leia" };

/** A guided lesson for one topic or account: concept → flashcards → quizzes → video. */
export default function Lesson() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ topic?: string; page?: string }>();
  const [seed] = useState(() => Date.now() & 0xffff);
  const lesson = useMemo(() => buildLesson(params.topic, params.page, seed), [params.topic, params.page, seed]);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const [multiPicked, setMultiPicked] = useState<number[] | null>(null);
  const [openDone, setOpenDone] = useState(false);
  const [score, setScore] = useState({ right: 0, total: 0 });
  const [finished, setFinished] = useState(false);
  const step = lesson.steps[index];
  const page = getPage(lesson.pageId);

  const next = () => {
    if (step) countStudy(step.pageId);
    if (index + 1 >= lesson.steps.length) {
      setFinished(true);
      awardXp("exam");
      const passed = score.total === 0 || score.right / score.total >= PASS;
      if (passed) for (const id of lesson.topicIds) if (!useModes.getState().mastered[id]) useModes.getState().toggleMastered(id);
      haptic.success();
      return;
    }
    setIndex(index + 1);
    setRevealed(false);
    setPicked(null);
    setMultiPicked(null);
    setOpenDone(false);
    haptic.select();
  };

  const answer = (q: QuizItem, i: number) => {
    if (picked !== null) return;
    setPicked(i);
    const ok = i === q.answer;
    trackAnswer(q, ok);
    useReview.getState().recordQuiz(q, ok);
    setScore((s) => ({ right: s.right + (ok ? 1 : 0), total: s.total + 1 }));
    if (ok) haptic.success();
    else haptic.error();
  };

  const score1 = (ok: boolean) => {
    setScore((s) => ({ right: s.right + (ok ? 1 : 0), total: s.total + 1 }));
    haptic[ok ? "success" : "error"]();
  };

  const canAdvance =
    !step || step.kind === "concept" || step.kind === "video" || step.kind === "wiki" || (step.kind === "flash" && revealed) || (step.kind === "quiz" && picked !== null) || (step.kind === "multi" && multiPicked !== null) || (step.kind === "open" && openDone);
  const back = () => (router.canGoBack() ? router.back() : router.replace("/explore"));

  if (lesson.steps.length === 0) {
    return (
      <View style={[styles.center, { backgroundColor: c.bg }]}>
        <AppText dim style={{ textAlign: "center" }}>Ainda não há cards para esta aula.</AppText>
        <GradientButton label="Voltar" icon="chevron-left" onPress={back} style={{ marginTop: space.lg }} />
      </View>
    );
  }

  if (finished) {
    const pct = score.total ? Math.round((score.right / score.total) * 100) : 100;
    const passed = pct >= PASS * 100;
    return (
      <View style={[styles.center, { backgroundColor: c.bg, paddingBottom: insets.bottom }]}>
        <Animated.View entering={ZoomIn.springify().damping(16).stiffness(220).mass(1)} style={{ alignItems: "center" }}>
          <Icon name={passed ? "school" : "book-open-variant"} size={64} color={passed ? c.success : c.accent} />
          <AppText variant="display" style={{ marginTop: space.md }}>{passed ? "Aula concluída!" : "Quase lá"}</AppText>
          <AppText dim style={{ textAlign: "center", marginTop: space.sm }}>
            {score.total ? `Você acertou ${score.right} de ${score.total} questões (${pct}%).` : "Você passou por toda a aula."}
            {passed && lesson.topicIds.length ? " Assunto marcado como dominado." : ""}
          </AppText>
        </Animated.View>
        <GradientButton label={passed ? "Continuar" : "Refazer a aula"} icon={passed ? "check" : "refresh"} onPress={passed ? back : () => router.replace({ pathname: "/lesson", params: { topic: params.topic, page: params.page } })} style={{ marginTop: space.xl, alignSelf: "stretch" }} />
        {!passed && (
          <Bouncy onPress={back} style={styles.textBtn} accessibilityLabel="Sair da aula">
            <AppText variant="label" dim>Sair</AppText>
          </Bouncy>
        )}
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <LinearGradient colors={[`${page.colors[0]}55`, "transparent"]} style={StyleSheet.absoluteFill} />
      <View style={[styles.top, { paddingTop: insets.top + space.xs }]}>
        <Bouncy onPress={back} style={styles.iconBtn} accessibilityLabel="Fechar aula">
          <Icon name="close" size={26} color={c.text} />
        </Bouncy>
        <View style={styles.progress}>
          {lesson.steps.map((s, i) => (
            <View key={s.id} style={[styles.segment, { backgroundColor: i <= index ? c.accent : c.surface2 }]} />
          ))}
        </View>
        <View style={styles.iconBtn} />
      </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" bottomOffset={24} contentContainerStyle={{ padding: space.lg, paddingBottom: 140 }} showsVerticalScrollIndicator={false}>
        <View style={styles.titleRow}>
          <PageAvatar pageId={lesson.pageId} size={28} />
          <AppText variant="caption" dim numberOfLines={1} style={{ flex: 1 }}>{lesson.title}</AppText>
          <AppText variant="caption" style={{ color: c.accent2 }}>{STEP_LABEL[step.kind].toUpperCase()}</AppText>
        </View>

        <Animated.View key={step.id} entering={FadeInRight.springify().damping(24).stiffness(260).mass(1)}>
          {step.kind === "concept" && <ConceptStep item={step} />}
          {step.kind === "flash" && <FlashStep item={step} revealed={revealed} onReveal={() => { setRevealed(true); haptic.light(); }} />}
          {step.kind === "quiz" && (
            <>
              <AppText variant="title" style={styles.question}>{step.question}</AppText>
              <QuizOptions item={step} picked={picked} onPick={(i) => answer(step, i)} />
            </>
          )}
          {step.kind === "multi" && (
            <>
              <AppText variant="title" style={styles.question}>{step.question}</AppText>
              <MultiOptions
                item={step}
                picked={multiPicked}
                onConfirm={(sel) => {
                  if (multiPicked !== null) return;
                  setMultiPicked(sel);
                  const ok = gradeMulti(step, sel).ok;
                  trackAnswer(step, ok);
                  useReview.getState().recordQuiz(step, ok);
                  score1(ok);
                }}
              />
            </>
          )}
          {step.kind === "open" && (
            <>
              <AppText variant="title" style={styles.question}>{step.question}</AppText>
              <OpenAnswer
                item={step}
                onGraded={(g) => {
                  const ok = selfGradeOk(g);
                  setOpenDone(true);
                  trackAnswer(step, ok);
                  useReview.getState().recordQuiz(step, ok);
                  score1(ok);
                }}
              />
            </>
          )}
          {step.kind === "video" && <VideoStep item={step} />}
        </Animated.View>
      </KeyboardAwareScrollView>

      <View style={[styles.footer, { paddingBottom: insets.bottom + space.lg, backgroundColor: c.bg }]}>
        <GradientButton
          label={!canAdvance ? (step.kind === "flash" ? "Toque no card para ver a resposta" : step.kind === "open" ? "Responda e diga como foi" : step.kind === "multi" ? "Marque e confirme" : "Escolha uma alternativa") : index + 1 >= lesson.steps.length ? "Concluir aula" : "Próximo"}
          icon={index + 1 >= lesson.steps.length ? "check" : "arrow-right"}
          onPress={() => (canAdvance ? next() : haptic.error())}
          style={{ opacity: canAdvance ? 1 : 0.5 }}
        />
      </View>
    </View>
  );
}

function ConceptStep({ item }: { item: ConceptItem }) {
  const c = useColors();
  return (
    <View>
      {item.beats.map((b, i) => (
        <Animated.View key={i} entering={FadeIn.delay(i * 120)}>
          <AppText variant={i === 0 ? "title" : "headline"} style={{ marginBottom: space.md }}>{b}</AppText>
        </Animated.View>
      ))}
      <View style={[styles.takeaway, { backgroundColor: c.surface, borderColor: c.accent }]}>
        <Icon name="lightbulb-on-outline" size={20} color={c.save} />
        <AppText style={{ flex: 1 }}>{item.takeaway}</AppText>
      </View>
    </View>
  );
}

function FlashStep({ item, revealed, onReveal }: { item: FlashItem; revealed: boolean; onReveal: () => void }) {
  const c = useColors();
  return (
    <Bouncy onPress={onReveal} scaleTo={0.98} style={[styles.flash, { backgroundColor: c.surface, borderColor: c.border }]} accessibilityLabel={revealed ? item.back : `${item.front}. Toque para ver a resposta`} testID="lesson-flash">
      <AppText variant="title" style={{ textAlign: "center" }}>{item.front}</AppText>
      {revealed ? (
        <Animated.View entering={FadeIn} style={[styles.answer, { borderColor: c.border }]}>
          <AppText variant="caption" dim>RESPOSTA</AppText>
          <AppText variant="headline" style={{ marginTop: 4 }}>{item.back}</AppText>
        </Animated.View>
      ) : (
        <View style={styles.tapHint}>
          <Icon name="gesture-tap" size={18} color={c.textDim} />
          <AppText variant="caption" dim>Pense na resposta e toque</AppText>
        </View>
      )}
    </Bouncy>
  );
}

function VideoStep({ item }: { item: VideoItem }) {
  const c = useColors();
  const open = () => {
    useViewer.getState().open([item], 0, item.title);
    router.push("/viewer");
  };
  return (
    <View>
      <AppText variant="title" style={{ marginBottom: space.md }}>Para fechar, um vídeo</AppText>
      <Bouncy onPress={open} scaleTo={0.98} style={[styles.video, { borderColor: c.border }]} accessibilityLabel={`Assistir: ${item.title}`}>
        <Image source={youtubeThumb(item.youtubeId)} style={StyleSheet.absoluteFill} contentFit="cover" />
        <View style={styles.play}><Icon name="play" size={34} color="#fff" /></View>
      </Bouncy>
      <AppText variant="label" style={{ marginTop: space.sm }}>{item.title}</AppText>
      {item.channel && <AppText variant="caption" dim>{item.channel}</AppText>}
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center", padding: space.xl },
  top: { flexDirection: "row", alignItems: "center", gap: space.sm, paddingHorizontal: space.sm },
  iconBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  progress: { flex: 1, flexDirection: "row", gap: 4 },
  segment: { flex: 1, height: 5, borderRadius: 3 },
  titleRow: { flexDirection: "row", alignItems: "center", gap: space.sm, marginBottom: space.lg },
  question: { fontSize: 23, lineHeight: 29, marginBottom: space.lg },
  takeaway: { flexDirection: "row", gap: space.md, padding: space.lg, borderRadius: radius.lg, borderWidth: 1, marginTop: space.sm },
  flash: { minHeight: 260, padding: space.xl, borderRadius: radius.xl, borderWidth: 1, justifyContent: "center" },
  answer: { marginTop: space.lg, paddingTop: space.lg, borderTopWidth: StyleSheet.hairlineWidth },
  tapHint: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, marginTop: space.xl },
  video: { aspectRatio: 16 / 9, borderRadius: radius.lg, overflow: "hidden", borderWidth: 1, alignItems: "center", justifyContent: "center" },
  play: { width: 64, height: 64, borderRadius: 32, backgroundColor: "rgba(0,0,0,0.5)", alignItems: "center", justifyContent: "center" },
  footer: { position: "absolute", left: 0, right: 0, bottom: 0, paddingHorizontal: space.lg, paddingTop: space.md },
  textBtn: { marginTop: space.md, padding: space.md },
});
