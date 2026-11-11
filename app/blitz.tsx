import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Animated, { Easing, FadeIn, FadeInDown, ZoomIn, cancelAnimation, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppText, Bouncy, GradientButton, Icon } from "@/components/ui";
import { getPage } from "@/data/pages";
import { BLITZ_SECONDS, blitzQuestions } from "@/feed/blitz";
import { createRng } from "@/feed/sources/generators";
import { contentForStudent } from "@/feed/sources/library";
import type { QuizItem } from "@/feed/types";
import { haptic } from "@/lib/haptics";
import { trackAnswer } from "@/store/progress";
import { useSettings } from "@/store/settings";
import { awardXp, useXp } from "@/store/xp";
import { radius, space, TOUCH, useColors } from "@/theme";

type Phase = "intro" | "play" | "done";
interface Answer { q: QuizItem; picked: number }

const LETTERS = "ABCD";

function newRound(): QuizItem[] {
  const { serie, myTopics } = useSettings.getState();
  return blitzQuestions(80, createRng(Date.now() & 0xffffffff), contentForStudent(serie, myTopics));
}

/** 60-second lightning round: answer as many quick questions as you can. */
export default function Blitz() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const best = useXp((s) => s.blitzBest);
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<QuizItem[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [flash, setFlash] = useState<{ picked: number } | null>(null);
  const [left, setLeft] = useState(BLITZ_SECONDS);
  const [newBest, setNewBest] = useState(false);
  const bar = useSharedValue(1);

  const correct = answers.filter((a) => a.picked === a.q.answer).length;


  // One tick per second; the round ends at zero.
  useEffect(() => {
    if (phase !== "play") return;
    const id = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [phase]);

  const [endedAt, setEndedAt] = useState(-1);
  const start = () => {
    setQuestions(newRound());
    setIndex(0);
    setAnswers([]);
    setFlash(null);
    setLeft(BLITZ_SECONDS);
    setNewBest(false);
    setEndedAt(-1);
    setPhase("play");
    haptic.medium();
    bar.set(1);
    bar.set(withTiming(0, { duration: BLITZ_SECONDS * 1000, easing: Easing.linear }));
  };
  if (phase === "play" && left === 0 && endedAt !== answers.length) {
    // Adjust during render: finish the round once, when the clock hits zero.
    setEndedAt(answers.length);
    const score = answers.filter((a) => a.picked === a.q.answer).length;
    const record = score > useXp.getState().blitzBest;
    setNewBest(record);
    setPhase("done");
  }

  // Side effects of finishing (XP, record, haptics) run once per round.
  useEffect(() => {
    if (phase !== "done") return;
    cancelAnimation(bar);
    const score = answers.filter((a) => a.picked === a.q.answer).length;
    if (score > useXp.getState().blitzBest) {
      useXp.setState({ blitzBest: score });
      haptic.success();
    }
    if (answers.length >= 5) awardXp("exam");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const pick = (i: number) => {
    if (flash || phase !== "play") return;
    const q = questions[index];
    const right = i === q.answer;
    if (right) haptic.success();
    else haptic.error();
    trackAnswer(q, right);
    setAnswers((a) => [...a, { q, picked: i }]);
    setFlash({ picked: i });
    setTimeout(() => {
      setFlash(null);
      setIndex((n) => n + 1);
    }, right ? 280 : 650);
  };

  const timeStyle = useAnimatedStyle(() => ({ width: `${bar.get() * 100}%` }));
  const q = questions[index];

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={[styles.top, { paddingTop: insets.top + space.xs }]}>
        <Bouncy onPress={() => (router.canGoBack() ? router.back() : router.replace("/explore"))} style={styles.iconBtn} accessibilityLabel="Fechar">
          <Icon name="close" size={26} color={c.text} />
        </Bouncy>
        <AppText variant="label">Quiz relâmpago</AppText>
        <View style={styles.iconBtn} />
      </View>

      {phase === "intro" && (
        <Animated.View entering={FadeIn} style={styles.center}>
          <LinearGradient colors={["#F59E0B", "#EF4444"]} style={styles.bolt}>
            <Icon name="lightning-bolt" size={56} color="#fff" />
          </LinearGradient>
          <AppText variant="display" style={styles.centerText}>60 segundos</AppText>
          <AppText dim style={[styles.centerText, { marginTop: space.sm }]}>Responda o máximo de questões rápidas que conseguir. Errou? Segue o jogo.</AppText>
          <AppText variant="headline" style={[styles.centerText, { marginTop: space.lg }]}>Seu recorde: {best}</AppText>
          <GradientButton label="Começar" icon="play" onPress={start} style={{ marginTop: space.xl, alignSelf: "stretch" }} />
        </Animated.View>
      )}

      {phase === "play" && q && (
        <View style={{ flex: 1, paddingHorizontal: space.lg }}>
          <View style={[styles.timeTrack, { backgroundColor: c.surface2 }]}>
            <Animated.View style={[styles.timeFill, { backgroundColor: left <= 10 ? c.danger : c.save }, timeStyle]} />
          </View>
          <View style={styles.score}>
            <AppText variant="title" style={{ color: left <= 10 ? c.danger : c.text }}>{left}s</AppText>
            <View style={styles.scoreRight}>
              <Icon name="check-circle" size={20} color={c.success} />
              <AppText variant="title">{correct}</AppText>
            </View>
          </View>
          <Animated.View key={q.id} entering={FadeInDown.springify().damping(24).stiffness(300).mass(1)} style={{ flex: 1 }}>
            <AppText variant="caption" dim>{getPage(q.pageId).name.toUpperCase()}</AppText>
            <AppText variant="title" style={{ marginTop: space.sm, marginBottom: space.lg }}>{q.question}</AppText>
            {q.options.map((opt, i) => {
              const shown = !!flash;
              const isAnswer = i === q.answer;
              const isPicked = flash?.picked === i;
              const border = shown && isAnswer ? c.success : shown && isPicked ? c.danger : c.border;
              const bg = shown && isAnswer ? "rgba(52,211,153,0.16)" : shown && isPicked ? "rgba(244,63,94,0.16)" : c.surface;
              return (
                <Bouncy key={i} onPress={() => pick(i)} scaleTo={0.97} style={[styles.option, { borderColor: border, backgroundColor: bg }]} accessibilityLabel={`Opção ${LETTERS[i]}: ${opt}`} testID={`blitz-option-${i}`}>
                  <View style={[styles.letter, { backgroundColor: c.surface2 }]}><AppText variant="label">{LETTERS[i]}</AppText></View>
                  <AppText style={{ flex: 1, fontSize: 17 }}>{opt}</AppText>
                  {shown && isAnswer && <Animated.View entering={ZoomIn}><Icon name="check-circle" size={22} color={c.success} /></Animated.View>}
                </Bouncy>
              );
            })}
          </Animated.View>
        </View>
      )}

      {phase === "done" && (
        <ScrollView contentContainerStyle={{ padding: space.lg, paddingBottom: insets.bottom + space.xxl }}>
          <Animated.View entering={ZoomIn.springify().damping(16).stiffness(220).mass(1)} style={styles.result}>
            <Icon name={newBest ? "trophy" : "lightning-bolt"} size={56} color={newBest ? c.save : "#F59E0B"} />
            <AppText variant="display" style={{ marginTop: space.sm }}>{correct}</AppText>
            <AppText dim>acertos em 60 segundos · {answers.length} respondidas</AppText>
            {newBest ? (
              <AppText variant="headline" style={{ color: c.save, marginTop: space.sm }}>Novo recorde!</AppText>
            ) : (
              <AppText variant="caption" dim style={{ marginTop: space.sm }}>Recorde: {Math.max(best, correct)}</AppText>
            )}
          </Animated.View>
          <GradientButton label="Jogar de novo" icon="refresh" onPress={start} style={{ marginTop: space.lg }} />
          {answers.some((a) => a.picked !== a.q.answer) && <AppText variant="headline" style={{ marginTop: space.xl, marginBottom: space.md }}>Para revisar</AppText>}
          {answers.filter((a) => a.picked !== a.q.answer).map((a, i) => (
            <View key={`${a.q.id}-${i}`} style={[styles.miss, { backgroundColor: c.surface, borderColor: c.border }]}>
              <AppText variant="label">{a.q.question}</AppText>
              <AppText variant="caption" style={{ color: c.success, marginTop: 4 }}>✓ {a.q.options[a.q.answer]}</AppText>
              <AppText variant="caption" dim style={{ marginTop: 2 }}>{a.q.explanation}</AppText>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: space.sm },
  iconBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  center: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: space.xl, paddingBottom: 80 },
  centerText: { textAlign: "center" },
  bolt: { width: 112, height: 112, borderRadius: 56, alignItems: "center", justifyContent: "center", marginBottom: space.lg },
  timeTrack: { height: 8, borderRadius: 4, overflow: "hidden", marginTop: space.sm },
  timeFill: { height: "100%", borderRadius: 4 },
  score: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: space.lg },
  scoreRight: { flexDirection: "row", alignItems: "center", gap: 6 },
  option: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderRadius: radius.md, borderWidth: 1.5, marginBottom: 10, minHeight: 56 },
  letter: { width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  result: { alignItems: "center", paddingVertical: space.xl },
  miss: { padding: space.md, borderRadius: radius.md, borderWidth: 1, marginBottom: space.sm },
});
