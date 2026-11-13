import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { getPage } from "@/data/pages";
import type { OpenItem } from "@/feed/types";
import { OpenAnswer } from "@/components/OpenAnswer";
import { Sheet } from "@/components/Sheet";
import { AppText, GradientButton, Icon } from "@/components/ui";
import { selfGradeOk, type SelfGrade } from "@/lib/grading";
import { trackAnswer } from "@/store/progress";
import { useReview } from "@/store/review";
import { radius, TAB_BAR_SPACE, useColors } from "@/theme";
import type { CardProps } from "./types";

const RESULT: Record<SelfGrade, string> = { right: "Você acertou", partial: "Acertou parte: vai para a revisão", wrong: "Errou: vai para a revisão" };

/** Dissertativa in the feed: the question here, the writing in a sheet that rises above the keyboard. */
export function OpenCard({ item, onStudied }: CardProps<OpenItem>) {
  const c = useColors();
  const [open, setOpen] = useState(false);
  const [grade, setGrade] = useState<SelfGrade | null>(null);

  const graded = (g: SelfGrade) => {
    setGrade(g);
    const ok = selfGradeOk(g);
    trackAnswer(item, ok);
    useReview.getState().recordQuiz(item, ok);
    onStudied?.();
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.wrap}>
        <View style={[styles.badge, { backgroundColor: "rgba(251,191,36,0.16)", borderColor: c.save }]}>
          <Icon name="pencil-outline" size={14} color={c.text} />
          <AppText variant="caption" numberOfLines={1} style={{ flexShrink: 1 }}>DISSERTATIVA · {getPage(item.pageId).name} · {item.title}</AppText>
        </View>
        <AppText variant="title" style={styles.question}>{item.question}</AppText>
        {grade ? (
          <View style={[styles.result, { borderColor: grade === "right" ? c.success : c.save }]}>
            <Icon name={grade === "right" ? "check-circle" : "history"} size={20} color={grade === "right" ? c.success : c.save} />
            <AppText variant="label" style={{ flex: 1 }}>{RESULT[grade]}</AppText>
          </View>
        ) : (
          <GradientButton label="Responder" icon="pencil" onPress={() => setOpen(true)} />
        )}
        {grade && (
          <AppText dim style={styles.model} numberOfLines={6}>{item.model}</AppText>
        )}
      </View>
      <Sheet visible={open} onClose={() => setOpen(false)} title={item.question}>
        <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <OpenAnswer
            item={item}
            autoFocus
            onGraded={(g) => {
              graded(g);
              setTimeout(() => setOpen(false), 900);
            }}
          />
        </ScrollView>
      </Sheet>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, justifyContent: "center", paddingLeft: 20, paddingRight: 80, paddingTop: 84, paddingBottom: TAB_BAR_SPACE + 12 },
  question: { fontSize: 22, lineHeight: 28, marginBottom: 18 },
  badge: { flexDirection: "row", alignItems: "center", gap: 6, alignSelf: "flex-start", maxWidth: "100%", paddingHorizontal: 10, paddingVertical: 5, borderRadius: radius.pill, borderWidth: 1, marginBottom: 14 },
  result: { flexDirection: "row", alignItems: "center", gap: 8, padding: 12, borderRadius: radius.md, borderWidth: 1 },
  model: { marginTop: 12, fontSize: 15, lineHeight: 21 },
});
