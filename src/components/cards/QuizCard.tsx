import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { getPage } from "@/data/pages";
import type { QuizItem } from "@/feed/types";
import { QuizOptions } from "@/components/QuizOptions";
import { AppText, Icon } from "@/components/ui";
import { haptic } from "@/lib/haptics";
import { trackAnswer } from "@/store/progress";
import { useReview } from "@/store/review";
import { radius, TAB_BAR_SPACE, useColors } from "@/theme";
import { Backdrop } from "./Backdrop";
import type { CardProps } from "./types";

export function QuizCard({ item, active, onStudied }: CardProps<QuizItem>) {
  const c = useColors();
  const [picked, setPicked] = useState<number | null>(null);

  const choose = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    const ok = i === item.answer;
    trackAnswer(item, ok);
    useReview.getState().recordQuiz(item, ok);
    onStudied?.();
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
        <QuizOptions item={item} picked={picked} onPick={choose} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // The feed hides the bottom meta for quizzes, so the card may use the space down to the tab bar.
  wrap: { flex: 1, justifyContent: "center", paddingLeft: 20, paddingRight: 80, paddingTop: 84, paddingBottom: TAB_BAR_SPACE + 12 },
  question: { fontSize: 23, lineHeight: 29, marginBottom: 16 },
  badge: { flexDirection: "row", alignItems: "center", gap: 6, alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 5, borderRadius: radius.pill, borderWidth: 1, marginBottom: 16 },
});
