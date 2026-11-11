import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInDown, ZoomIn } from "react-native-reanimated";
import type { QuizItem } from "@/feed/types";
import { optionOrder } from "@/lib/shuffle";
import { radius, useColors } from "@/theme";
import { AppText, Bouncy, Glass, Icon } from "./ui";

const LETTERS = ["A", "B", "C", "D"];

/** Sentinel for "time ran out" in timed exams. */
export const TIMED_OUT = -1;

interface Props {
  item: QuizItem;
  /** Index the user picked, TIMED_OUT, or null while unanswered. */
  picked: number | null;
  onPick: (index: number) => void;
}

/**
 * The answer buttons, right/wrong feedback and explanation shared by feed quizzes and exams.
 * The options show in a new random order every time a question appears; `picked` and `onPick` keep
 * using the item's own option indexes, so callers never see the shuffle.
 */
export function QuizOptions({ item, picked, onPick }: Props) {
  const c = useColors();
  const [salt] = useState(() => Math.floor(Math.random() * 2 ** 31));
  const order = useMemo(() => optionOrder(item.options.length, `${item.id}:${salt}`), [item.id, item.options.length, salt]);
  const answered = picked !== null;
  const right = picked === item.answer;
  const answerLetter = LETTERS[order.indexOf(item.answer)];
  const headline = right ? "Mandou bem!" : picked === TIMED_OUT ? `Tempo esgotado! Resposta certa: ${answerLetter}` : `Quase! Resposta certa: ${answerLetter}`;

  return (
    <View>
      {order.map((o, i) => {
        const opt = item.options[o];
        const isAnswer = o === item.answer;
        const isPicked = o === picked;
        const border = answered && isAnswer ? c.success : answered && isPicked ? c.danger : c.border;
        const bg = answered && isAnswer ? "rgba(52,211,153,0.16)" : answered && isPicked ? "rgba(244,63,94,0.16)" : c.glass;
        return (
          <Bouncy
            key={o}
            onPress={() => onPick(o)}
            scaleTo={0.97}
            disabled={answered}
            accessibilityRole="button"
            accessibilityLabel={`Opção ${LETTERS[i]}: ${opt}`}
            testID={`option-${i}`}
            style={[styles.option, { borderColor: border, backgroundColor: bg }]}
          >
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
        <Animated.View entering={FadeInDown.springify().damping(26).stiffness(280).mass(1)}>
          <Glass style={styles.explain}>
            <AppText variant="label" style={{ color: right ? c.success : c.danger, marginBottom: 4 }}>{headline}</AppText>
            <AppText dim style={{ fontSize: 14, lineHeight: 20 }}>{item.explanation}</AppText>
          </Glass>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  option: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 12, paddingVertical: 9, borderRadius: radius.md, borderWidth: 1, marginBottom: 8, minHeight: 50 },
  letter: { width: 30, height: 30, borderRadius: 15, alignItems: "center", justifyContent: "center" },
  optText: { flex: 1, fontSize: 16 },
  explain: { padding: 14, marginTop: 4 },
});
