import { StyleSheet, View } from "react-native";
import Animated, { FadeInDown, ZoomIn } from "react-native-reanimated";
import type { QuizItem } from "@/feed/types";
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

/** The answer buttons, right/wrong feedback and explanation shared by feed quizzes and exams. */
export function QuizOptions({ item, picked, onPick }: Props) {
  const c = useColors();
  const answered = picked !== null;
  const right = picked === item.answer;
  const headline = right ? "Mandou bem!" : picked === TIMED_OUT ? `Tempo esgotado! Resposta certa: ${LETTERS[item.answer]}` : `Quase! Resposta certa: ${LETTERS[item.answer]}`;

  return (
    <View>
      {item.options.map((opt, i) => {
        const isAnswer = i === item.answer;
        const isPicked = i === picked;
        const border = answered && isAnswer ? c.success : answered && isPicked ? c.danger : c.border;
        const bg = answered && isAnswer ? "rgba(52,211,153,0.16)" : answered && isPicked ? "rgba(244,63,94,0.16)" : c.glass;
        return (
          <Bouncy
            key={i}
            onPress={() => onPick(i)}
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
        <Animated.View entering={FadeInDown.springify().damping(16)}>
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
