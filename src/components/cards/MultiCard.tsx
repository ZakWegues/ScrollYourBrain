import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { getPage } from "@/data/pages";
import type { MultiItem } from "@/feed/types";
import { MultiOptions } from "@/components/MultiOptions";
import { AppText, Icon } from "@/components/ui";
import { gradeMulti } from "@/lib/grading";
import { haptic } from "@/lib/haptics";
import { trackAnswer } from "@/store/progress";
import { useReview } from "@/store/review";
import { radius, TAB_BAR_SPACE, useColors } from "@/theme";
import type { CardProps } from "./types";

/** "Marque todas as certas" in the feed. */
export function MultiCard({ item, onStudied }: CardProps<MultiItem>) {
  const c = useColors();
  const [picked, setPicked] = useState<number[] | null>(null);

  const confirm = (sel: number[]) => {
    if (picked !== null) return;
    setPicked(sel);
    const { ok } = gradeMulti(item, sel);
    trackAnswer(item, ok);
    useReview.getState().recordQuiz(item, ok);
    onStudied?.();
    if (ok) haptic.success();
    else haptic.error();
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.wrap}>
        <View style={[styles.badge, { backgroundColor: "rgba(34,211,238,0.16)", borderColor: c.accent2 }]}>
          <Icon name="checkbox-multiple-marked-outline" size={14} color={c.text} />
          <AppText variant="caption" numberOfLines={1} style={{ flexShrink: 1 }}>MARQUE TODAS · {getPage(item.pageId).name} · {item.title}</AppText>
        </View>
        <AppText variant="title" style={styles.question}>{item.question}</AppText>
        <MultiOptions item={item} picked={picked} onConfirm={confirm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, justifyContent: "center", paddingLeft: 20, paddingRight: 80, paddingTop: 84, paddingBottom: TAB_BAR_SPACE + 12 },
  question: { fontSize: 21, lineHeight: 27, marginBottom: 12 },
  badge: { flexDirection: "row", alignItems: "center", gap: 6, alignSelf: "flex-start", maxWidth: "100%", paddingHorizontal: 10, paddingVertical: 5, borderRadius: radius.pill, borderWidth: 1, marginBottom: 14 },
});
