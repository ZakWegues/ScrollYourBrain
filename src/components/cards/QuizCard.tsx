import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInDown, ZoomIn } from "react-native-reanimated";
import { getPage } from "@/data/pages";
import type { QuizItem } from "@/feed/types";
import { AppText, Bouncy, Glass, Icon } from "@/components/ui";
import { haptic } from "@/lib/haptics";
import { useLibrary } from "@/store/library";
import { radius, TAB_BAR_SPACE, useColors } from "@/theme";
import { Backdrop } from "./Backdrop";
import type { CardProps } from "./types";

const LETTERS = ["A", "B", "C", "D"];

export function QuizCard({ item, active }: CardProps<QuizItem>) {
  const c = useColors();
  const recordAnswer = useLibrary((s) => s.recordAnswer);
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const right = picked === item.answer;

  const choose = (i: number) => {
    if (answered) return;
    setPicked(i);
    const ok = i === item.answer;
    recordAnswer(ok);
    if (ok) haptic.success();
    else haptic.error();
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <Backdrop pageId={item.pageId} active={active} />
      <View style={styles.wrap}>
        <View style={[styles.badge, { backgroundColor: "rgba(139,92,246,0.2)", borderColor: c.accent }]}>
          <Icon name="help-circle-outline" size={14} color={c.text} />
          <AppText variant="caption">QUIZ · {getPage(item.pageId).name} · {item.title}</AppText>
        </View>
        <AppText variant="title" style={styles.question}>{item.question}</AppText>
        {item.options.map((opt, i) => {
          const isAnswer = i === item.answer;
          const isPicked = i === picked;
          const border = answered && isAnswer ? c.success : answered && isPicked ? c.danger : c.border;
          const bg = answered && isAnswer ? "rgba(52,211,153,0.16)" : answered && isPicked ? "rgba(244,63,94,0.16)" : c.glass;
          return (
            <Bouncy key={i} onPress={() => choose(i)} scaleTo={0.97} disabled={answered} accessibilityRole="button" accessibilityLabel={`Opção ${LETTERS[i]}: ${opt}`} style={[styles.option, { borderColor: border, backgroundColor: bg }]}>
              <View style={[styles.letter, { backgroundColor: c.surface2 }]}>
                <AppText variant="label">{LETTERS[i]}</AppText>
              </View>
              <AppText variant="body" style={styles.optText}>{opt}</AppText>
              {answered && isAnswer && <Animated.View entering={ZoomIn}><Icon name="check-circle" size={22} color={c.success} /></Animated.View>}
              {answered && isPicked && !isAnswer && <Animated.View entering={ZoomIn}><Icon name="close-circle" size={22} color={c.danger} /></Animated.View>}
            </Bouncy>
          );
        })}
        {answered && (
          <Animated.View entering={FadeInDown.springify().damping(16)}>
            <Glass style={styles.explain}>
              <AppText variant="label" style={{ color: right ? c.success : c.danger, marginBottom: 4 }}>
                {right ? "Mandou bem!" : "Quase! Resposta certa: " + LETTERS[item.answer]}
              </AppText>
              <AppText dim style={{ fontSize: 14, lineHeight: 20 }}>{item.explanation}</AppText>
            </Glass>
          </Animated.View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // The feed hides the bottom meta for quizzes, so the card may use the space down to the tab bar.
  wrap: { flex: 1, justifyContent: "center", paddingLeft: 20, paddingRight: 80, paddingTop: 84, paddingBottom: TAB_BAR_SPACE + 12 },
  question: { fontSize: 23, lineHeight: 29, marginBottom: 16 },
  badge: { flexDirection: "row", alignItems: "center", gap: 6, alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 5, borderRadius: radius.pill, borderWidth: 1, marginBottom: 16 },
  option: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 12, paddingVertical: 9, borderRadius: radius.md, borderWidth: 1, marginBottom: 8, minHeight: 50 },
  letter: { width: 30, height: 30, borderRadius: 15, alignItems: "center", justifyContent: "center" },
  optText: { flex: 1, fontSize: 16 },
  explain: { padding: 14, marginTop: 4 },
});
