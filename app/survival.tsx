import { LinearGradient } from "@/components/LinearGradient";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Animated, { Easing, FadeIn, FadeInDown, ZoomIn, cancelAnimation, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppText, Bouncy, GradientButton, Icon } from "@/components/ui";
import { getPage } from "@/data/pages";
import { blitzQuestions } from "@/feed/blitz";
import { createRng } from "@/feed/sources/generators";
import { contentForStudent } from "@/feed/sources/library";
import { SURVIVAL_LIVES, survivalSeconds, survivalStage } from "@/feed/survival";
import type { QuizItem } from "@/feed/types";
import { haptic } from "@/lib/haptics";
import { optionOrder } from "@/lib/shuffle";
import { trackAnswer } from "@/store/progress";
import { useSettings } from "@/store/settings";
import { awardXp, useXp } from "@/store/xp";
import { radius, space, TOUCH, useColors } from "@/theme";

type Phase = "intro" | "play" | "done";
interface Answer { q: QuizItem; picked: number }

const LETTERS = "ABCD";

function questions(seed: number): QuizItem[] {
  const { serie, myTopics } = useSettings.getState();
  return blitzQuestions(120, createRng(seed), contentForStudent(serie, myTopics));
}

/** Survival: three lives, and the clock gets shorter as you go. How far can you get? */
export default function Survival() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const best = useXp((s) => s.survivalBest);
  const [phase, setPhase] = useState<Phase>("intro");
  const [list, setList] = useState<QuizItem[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [lives, setLives] = useState(SURVIVAL_LIVES);
  const [flash, setFlash] = useState<{ picked: number } | null>(null);
  const [left, setLeft] = useState(0);
  const [record, setRecord] = useState(false);
  const bar = useSharedValue(1);

  const right = answers.filter((a) => a.picked === a.q.answer).length;
  const q = list[index];
  const order = q ? optionOrder(q.options.length, q.id) : [];

  const start = () => {
    setList(questions(Date.now() & 0xffffffff));
    setIndex(0);
    setAnswers([]);
    setLives(SURVIVAL_LIVES);
    setFlash(null);
    setRecord(false);
    setLeft(survivalSeconds(0));
    setPhase("play");
    haptic.medium();
  };

  const answer = (picked: number) => {
    if (flash || phase !== "play" || !q) return;
    const ok = picked === q.answer;
    haptic[ok ? "success" : "error"]();
    trackAnswer(q, ok, { quiet: true });
    setAnswers((a) => [...a, { q, picked }]);
    setFlash({ picked });
    const livesLeft = ok ? lives : lives - 1;
    if (!ok) setLives(livesLeft);
    setTimeout(() => {
      setFlash(null);
      if (livesLeft <= 0) {
        setRecord(right + (ok ? 1 : 0) > useXp.getState().survivalBest);
        setPhase("done");
      } else {
        setLeft(survivalSeconds(right + (ok ? 1 : 0)));
        setIndex((n) => n + 1);
        // Endless: top up the list before it runs out.
        if (index + 5 >= list.length) setList((l) => [...l, ...questions((Date.now() + l.length) & 0xffffffff)]);
      }
    }, ok ? 320 : 900);
  };

  // Each question has its own clock; running out of time costs a life.
  const seconds = survivalSeconds(right);
  useEffect(() => {
    if (phase !== "play" || flash) return;
    bar.set(1);
    bar.set(withTiming(0, { duration: seconds * 1000, easing: Easing.linear }));
    const tick = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    const out = setTimeout(() => answer(-1), seconds * 1000);
    return () => {
      clearInterval(tick);
      clearTimeout(out);
      cancelAnimation(bar);
    };
    // A new clock only for a new question.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, index, flash === null]);

  // Finishing pays XP and saves the record, once per run.
  useEffect(() => {
    if (phase !== "done") return;
    const score = answers.filter((a) => a.picked === a.q.answer).length;
    if (score > useXp.getState().survivalBest) useXp.setState({ survivalBest: score });
    if (answers.length >= 5) awardXp("exam");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const timeStyle = useAnimatedStyle(() => ({ width: `${bar.get() * 100}%` }));
  const close = () => (router.canGoBack() ? router.back() : router.replace("/modes"));

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={[styles.top, { paddingTop: insets.top + space.xs }]}>
        <Bouncy onPress={close} style={styles.iconBtn} accessibilityLabel="Fechar">
          <Icon name="close" size={26} color={c.text} />
        </Bouncy>
        <AppText variant="label">Sobrevivência</AppText>
        <View style={styles.iconBtn} />
      </View>

      {phase === "intro" && (
        <Animated.View entering={FadeIn} style={styles.center}>
          <LinearGradient colors={["#EF4444", "#8B5CF6"]} style={styles.badge}>
            <Icon name="heart-pulse" size={56} color="#fff" />
          </LinearGradient>
          <AppText variant="display" style={styles.centerText}>3 vidas</AppText>
          <AppText dim style={[styles.centerText, { marginTop: space.sm }]}>Cada erro (ou tempo esgotado) tira uma vida. A cada 3 acertos, o relógio fica 1 segundo mais curto.</AppText>
          <AppText variant="headline" style={[styles.centerText, { marginTop: space.lg }]}>Seu recorde: {best}</AppText>
          <GradientButton label="Começar" icon="play" onPress={start} style={{ marginTop: space.xl, alignSelf: "stretch" }} />
        </Animated.View>
      )}

      {phase === "play" && q && (
        <View style={{ flex: 1, paddingHorizontal: space.lg }}>
          <View style={[styles.timeTrack, { backgroundColor: c.surface2 }]}>
            <Animated.View style={[styles.timeFill, { backgroundColor: left <= 3 ? c.danger : c.accent2 }, timeStyle]} />
          </View>
          <View style={styles.score}>
            <View style={styles.lives} accessibilityLabel={`${lives} ${lives === 1 ? "vida" : "vidas"}`} testID="survival-lives">
              {Array.from({ length: SURVIVAL_LIVES }, (_, i) => <Icon key={i} name={i < lives ? "heart" : "heart-outline"} size={24} color={i < lives ? "#F43F5E" : c.textMute} />)}
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <AppText variant="title">{right}</AppText>
              <AppText variant="caption" dim>{survivalStage(right)} · {seconds}s</AppText>
            </View>
          </View>
          <Animated.View key={`${q.id}-${index}`} entering={FadeInDown.springify().damping(24).stiffness(300).mass(1)} style={{ flex: 1 }}>
            <AppText variant="caption" dim>{getPage(q.pageId).name.toUpperCase()}</AppText>
            <AppText variant="title" style={{ marginTop: space.sm, marginBottom: space.lg }}>{q.question}</AppText>
            {order.map((oi, pos) => {
              const shown = !!flash;
              const isAnswer = oi === q.answer;
              const isPicked = flash?.picked === oi;
              const border = shown && isAnswer ? c.success : shown && isPicked ? c.danger : c.border;
              const bg = shown && isAnswer ? "rgba(52,211,153,0.16)" : shown && isPicked ? "rgba(244,63,94,0.16)" : c.surface;
              return (
                <Bouncy key={oi} onPress={() => answer(oi)} scaleTo={0.97} style={[styles.option, { borderColor: border, backgroundColor: bg }]} accessibilityLabel={`Opção ${LETTERS[pos]}: ${q.options[oi]}`} testID={`survival-option-${pos}`}>
                  <View style={[styles.letter, { backgroundColor: c.surface2 }]}><AppText variant="label">{LETTERS[pos]}</AppText></View>
                  <AppText style={{ flex: 1, fontSize: 17 }}>{q.options[oi]}</AppText>
                  {shown && isAnswer && <Animated.View entering={ZoomIn}><Icon name="check-circle" size={22} color={c.success} /></Animated.View>}
                </Bouncy>
              );
            })}
            {flash?.picked === -1 && <AppText variant="label" style={{ color: c.danger, textAlign: "center" }}>Tempo esgotado!</AppText>}
          </Animated.View>
        </View>
      )}

      {phase === "done" && (
        <ScrollView contentContainerStyle={{ padding: space.lg, paddingBottom: insets.bottom + space.xxl }}>
          <Animated.View entering={ZoomIn.springify().damping(16).stiffness(220).mass(1)} style={styles.result}>
            <Icon name={record ? "trophy" : "heart-broken"} size={56} color={record ? c.save : "#F43F5E"} />
            <AppText variant="display" style={{ marginTop: space.sm }}>{right}</AppText>
            <AppText dim>acertos seguidos até a última vida · {survivalStage(right)}</AppText>
            {record ? (
              <AppText variant="headline" style={{ color: c.save, marginTop: space.sm }}>Novo recorde!</AppText>
            ) : (
              <AppText variant="caption" dim style={{ marginTop: space.sm }}>Recorde: {Math.max(best, right)} · faltaram {Math.max(0, best - right + 1)} para bater</AppText>
            )}
          </Animated.View>
          <GradientButton label="Tentar de novo" icon="refresh" onPress={start} style={{ marginTop: space.lg }} />
          {answers.some((a) => a.picked !== a.q.answer) && <AppText variant="headline" style={{ marginTop: space.xl, marginBottom: space.md }}>Onde você caiu</AppText>}
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
  badge: { width: 112, height: 112, borderRadius: 56, alignItems: "center", justifyContent: "center", marginBottom: space.lg },
  timeTrack: { height: 8, borderRadius: 4, overflow: "hidden", marginTop: space.sm },
  timeFill: { height: "100%", borderRadius: 4 },
  score: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: space.lg },
  lives: { flexDirection: "row", gap: 4 },
  option: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderRadius: radius.md, borderWidth: 1.5, marginBottom: 10, minHeight: 56 },
  letter: { width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  result: { alignItems: "center", paddingVertical: space.xl },
  miss: { padding: space.md, borderRadius: radius.md, borderWidth: 1, marginBottom: space.sm },
});
