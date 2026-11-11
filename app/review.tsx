import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Animated, { FadeIn, FadeInDown, FadeInRight, ZoomIn } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { QuizOptions } from "@/components/QuizOptions";
import { AppText, Bouncy, Glass, GradientButton, Icon, PageAvatar } from "@/components/ui";
import { getPage } from "@/data/pages";
import type { StudyItem } from "@/feed/types";
import { haptic } from "@/lib/haptics";
import { awardXp } from "@/store/xp";
import { GRADES, nextLabel, type Grade } from "@/lib/srs";
import { useNotebooks } from "@/store/notebooks";
import { countStudy, trackAnswer, trackTime, useProgress } from "@/store/progress";
import { dueCards, useReview } from "@/store/review";
import { radius, space, TOUCH, useColors } from "@/theme";

const GRADE_UI: Record<Grade, { label: string; color: string }> = {
  again: { label: "Errei", color: "#F43F5E" },
  hard: { label: "Difícil", color: "#FB923C" },
  good: { label: "Bom", color: "#22D3EE" },
  easy: { label: "Fácil", color: "#34D399" },
};

/** Milliseconds since the ref's last mark, then moves the mark to now. */
function lap(ref: { current: number }): number {
  const now = Date.now();
  const elapsed = now - ref.current;
  ref.current = now;
  return elapsed;
}

export default function Review() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  // The queue is fixed when the session starts; "Errei" sends a card to the end of it.
  const [queue, setQueue] = useState<string[]>(() => dueCards(useReview.getState().cards).map((card) => card.item.id));
  const [pos, setPos] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const [stats, setStats] = useState({ done: 0, right: 0 });
  const cards = useReview((s) => s.cards);
  const total = useMemo(() => new Set(queue).size, [queue]);
  const shownAt = useRef(0);
  useEffect(() => {
    shownAt.current = Date.now();
  }, []);

  const close = () => (router.canGoBack() ? router.back() : router.replace("/library"));
  const id = queue[pos];
  const card = id ? cards[id] : undefined;
  const finished = pos >= queue.length;
  const quizRight = card?.item.kind === "quiz" && picked === card.item.answer;

  const advance = (grade: Grade) => {
    if (!card) return;
    useReview.getState().grade(card.item.id, grade);
    countStudy(card.item.pageId);
    useProgress.getState().logEvent(card.item.pageId, { reviews: 1 });
    awardXp("review");
    trackTime(card.item.pageId, lap(shownAt));
    haptic[grade === "again" ? "error" : "select"]();
    setStats((s) => ({ done: s.done + 1, right: s.right + (grade === "again" ? 0 : 1) }));
    if (grade === "again") setQueue((q) => [...q, card.item.id]);
    setPos((p) => p + 1);
    setRevealed(false);
    setPicked(null);
  };

  const onPick = (i: number) => {
    if (!card || card.item.kind !== "quiz" || picked !== null) return;
    setPicked(i);
    const ok = i === card.item.answer;
    trackAnswer(card.item, ok);
    if (ok) haptic.success();
    else haptic.error();
  };

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <LinearGradient colors={["rgba(251,191,36,0.14)", "transparent"]} style={styles.glow} pointerEvents="none" />
      <View style={[styles.top, { paddingTop: insets.top + space.xs }]}>
        <Bouncy onPress={close} style={styles.iconBtn} accessibilityLabel="Fechar revisão">
          <Icon name="close" size={26} color={c.text} />
        </Bouncy>
        <AppText variant="label">Revisão de hoje</AppText>
        <View style={styles.iconBtn}>
          {!finished && <AppText variant="caption" dim>{Math.min(stats.done + 1, queue.length)}/{queue.length}</AppText>}
        </View>
      </View>
      {!finished && (
        <View style={[styles.track, { backgroundColor: c.surface2 }]}>
          <View style={[styles.fill, { backgroundColor: c.save, width: `${(pos / Math.max(queue.length, 1)) * 100}%` }]} />
        </View>
      )}

      {queue.length === 0 ? (
        <Empty onClose={close} />
      ) : finished ? (
        <Done done={stats.done} right={stats.right} total={total} onClose={close} />
      ) : card ? (
        <>
          <ScrollView contentContainerStyle={{ padding: space.lg, paddingBottom: insets.bottom + 140 }} showsVerticalScrollIndicator={false}>
            <Animated.View key={`${id}-${pos}`} entering={FadeInRight.springify().damping(26).stiffness(280).mass(1)}>
              <CardHead item={card.item} />
              {card.item.kind === "flash" && (
                <>
                  <View style={[styles.face, { backgroundColor: c.surface, borderColor: c.border }]}>
                    <AppText variant="title" style={styles.center}>{card.item.front}</AppText>
                    {card.item.hint && !revealed && <AppText dim style={[styles.center, { marginTop: space.md }]}>Dica: {card.item.hint}</AppText>}
                  </View>
                  {revealed && (
                    <Animated.View entering={FadeInDown.springify().damping(26).stiffness(280).mass(1)} style={[styles.face, styles.back, { borderColor: getPage(card.item.pageId).colors[1], backgroundColor: c.surface }]}>
                      <AppText variant="caption" dim style={{ letterSpacing: 1.4, marginBottom: space.sm }}>RESPOSTA</AppText>
                      <AppText variant="headline" style={[styles.center, { fontSize: 20, lineHeight: 28 }]}>{card.item.back}</AppText>
                    </Animated.View>
                  )}
                </>
              )}
              {card.item.kind === "quiz" && (
                <>
                  <AppText variant="title" style={{ fontSize: 23, lineHeight: 29, marginBottom: space.lg }}>{card.item.question}</AppText>
                  <QuizOptions item={card.item} picked={picked} onPick={onPick} />
                </>
              )}
              <NoteBox itemId={card.item.id} />
            </Animated.View>
          </ScrollView>
          <View style={[styles.footer, { paddingBottom: insets.bottom + space.lg, backgroundColor: c.bg }]}>
            {card.item.kind === "flash" && !revealed && (
              <GradientButton label="Mostrar resposta" icon="eye-outline" onPress={() => { setRevealed(true); haptic.light(); }} />
            )}
            {card.item.kind === "flash" && revealed && (
              <Animated.View entering={FadeIn} style={styles.grades}>
                {GRADES.map((g) => (
                  <Bouncy key={g} onPress={() => advance(g)} style={[styles.grade, { borderColor: GRADE_UI[g].color, backgroundColor: c.surface }]} accessibilityLabel={`${GRADE_UI[g].label}, volta em ${nextLabel(card.srs, g)}`} testID={`grade-${g}`}>
                    <AppText variant="label" style={{ color: GRADE_UI[g].color }}>{GRADE_UI[g].label}</AppText>
                    <AppText variant="caption" dim>{nextLabel(card.srs, g)}</AppText>
                  </Bouncy>
                ))}
              </Animated.View>
            )}
            {card.item.kind === "quiz" && picked !== null && (
              <GradientButton
                label={quizRight ? `Próxima · volta em ${nextLabel(card.srs, "good")}` : "Próxima · revisar de novo hoje"}
                icon="arrow-right"
                onPress={() => advance(quizRight ? "good" : "again")}
              />
            )}
          </View>
        </>
      ) : (
        // A card removed mid-session: skip it.
        <SkipMissing onSkip={() => setPos((p) => p + 1)} />
      )}
    </View>
  );
}

function CardHead({ item }: { item: StudyItem }) {
  const page = getPage(item.pageId);
  return (
    <View style={styles.head}>
      <PageAvatar pageId={item.pageId} size={28} />
      <AppText variant="label">{page.name}</AppText>
      <AppText variant="caption" dim numberOfLines={1} style={{ flex: 1 }}>· {item.title}</AppText>
    </View>
  );
}

function NoteBox({ itemId }: { itemId: string }) {
  const c = useColors();
  const note = useNotebooks((s) => s.notes[itemId]);
  if (!note) return null;
  return (
    <Glass style={[styles.note, { borderColor: c.accent2 }]}>
      <Icon name="note-text" size={18} color={c.accent2} />
      <AppText style={{ flex: 1, fontSize: 14, lineHeight: 20 }}>{note.text}</AppText>
    </Glass>
  );
}

function SkipMissing({ onSkip }: { onSkip: () => void }) {
  return (
    <View style={styles.centerBox}>
      <GradientButton label="Pular" icon="skip-next" onPress={onSkip} />
    </View>
  );
}

function Empty({ onClose }: { onClose: () => void }) {
  const c = useColors();
  const upcoming = useReview((s) => Object.values(s.cards).sort((a, b) => a.srs.due.localeCompare(b.srs.due))[0]);
  return (
    <View style={styles.centerBox}>
      <Animated.View entering={ZoomIn.springify().damping(18).stiffness(260).mass(1)}>
        <Icon name="check-decagram" size={72} color={c.success} />
      </Animated.View>
      <AppText variant="title" style={[styles.center, { marginTop: space.md }]}>Nada para revisar hoje</AppText>
      <AppText dim style={[styles.center, { marginTop: space.sm, maxWidth: 300 }]}>
        {upcoming
          ? `Próxima revisão em ${new Date(`${upcoming.srs.due}T12:00:00`).toLocaleDateString("pt-BR", { day: "numeric", month: "short" })}.`
          : "Quizzes que você erra e flashcards marcados como “Revisar” entram aqui automaticamente."}
      </AppText>
      <GradientButton label="Voltar a estudar" icon="play-box-multiple" onPress={onClose} style={{ marginTop: space.xl }} />
    </View>
  );
}

function Done({ done, right, total, onClose }: { done: number; right: number; total: number; onClose: () => void }) {
  const c = useColors();
  return (
    <View style={styles.centerBox}>
      <Animated.View entering={ZoomIn.springify().damping(18).stiffness(260).mass(1)}>
        <Icon name="party-popper" size={72} color={c.save} />
      </Animated.View>
      <AppText variant="title" style={[styles.center, { marginTop: space.md }]}>Revisão concluída!</AppText>
      <AppText dim style={[styles.center, { marginTop: space.sm }]}>
        {total} {total === 1 ? "card revisado" : "cards revisados"} · {done > 0 ? Math.round((right / done) * 100) : 0}% de acerto
      </AppText>
      <AppText dim style={[styles.center, { marginTop: space.xs, maxWidth: 300 }]}>Os cards voltam no dia certo para fixar de vez.</AppText>
      <GradientButton label="Concluir" icon="check" onPress={onClose} style={{ marginTop: space.xl }} />
    </View>
  );
}

const styles = StyleSheet.create({
  glow: { position: "absolute", top: 0, left: 0, right: 0, height: 300 },
  top: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: space.sm },
  iconBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  track: { height: 4, marginHorizontal: space.lg, borderRadius: 2, overflow: "hidden" },
  fill: { height: 4, borderRadius: 2 },
  head: { flexDirection: "row", alignItems: "center", gap: space.sm, marginBottom: space.lg },
  face: { minHeight: 200, borderRadius: radius.xl, borderWidth: 1, padding: space.xl, alignItems: "center", justifyContent: "center" },
  back: { marginTop: space.md, minHeight: 140 },
  center: { textAlign: "center" },
  note: { flexDirection: "row", gap: space.sm, padding: space.md, marginTop: space.lg, borderWidth: 1 },
  footer: { position: "absolute", left: 0, right: 0, bottom: 0, paddingHorizontal: space.lg, paddingTop: space.md },
  grades: { flexDirection: "row", gap: space.sm },
  grade: { flex: 1, alignItems: "center", justifyContent: "center", height: 60, borderRadius: radius.md, borderWidth: 1.5, gap: 2 },
  centerBox: { flex: 1, alignItems: "center", justifyContent: "center", padding: space.xl, paddingBottom: 80 },
});
