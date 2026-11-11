import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { contentForStudent } from "@/feed/sources/library";
import { dailyQuestion, dailyStreak } from "@/lib/daily";
import { haptic } from "@/lib/haptics";
import { dayKey } from "@/lib/streak";
import { useDaily } from "@/store/daily";
import { trackAnswer } from "@/store/progress";
import { useSettings } from "@/store/settings";
import { awardXp } from "@/store/xp";
import { radius, space, useColors } from "@/theme";
import { QuizOptions } from "./QuizOptions";
import { AppText, Bouncy, Icon } from "./ui";

/** One question a day, compact until opened; answering keeps a separate little streak. */
export function DailyQuestion() {
  const c = useColors();
  const [today] = useState(() => dayKey());
  const serie = useSettings((s) => s.serie);
  const myTopics = useSettings((s) => s.myTopics);
  const answered = useDaily((s) => s.answered);
  const q = useMemo(() => dailyQuestion(today, contentForStudent(serie, myTopics)), [today, serie, myTopics]);
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  if (!q) return null;
  const done = today in answered;
  const streak = dailyStreak(answered);

  const pick = (i: number) => {
    if (picked !== null || done) return;
    setPicked(i);
    const ok = i === q.answer;
    trackAnswer(q, ok);
    useDaily.getState().answer(today, ok);
    if (ok) {
      haptic.success();
      awardXp("daily");
    } else haptic.error();
  };

  return (
    <View style={[styles.card, { backgroundColor: c.surface, borderColor: c.border }]} testID="daily-question">
      <Bouncy onPress={() => setOpen((o) => !o)} scaleTo={0.99} style={styles.head} accessibilityLabel={`Pergunta do dia${done ? ", respondida" : ""}`}>
        <Icon name={done ? (answered[today] ? "check-circle" : "close-circle") : "help-circle"} size={22} color={done ? (answered[today] ? c.success : c.danger) : c.save} />
        <View style={{ flex: 1 }}>
          <AppText variant="label">Pergunta do dia</AppText>
          {!open && <AppText variant="caption" dim numberOfLines={1}>{done ? (answered[today] ? "Você acertou hoje. Volte amanhã!" : "Hoje não deu. Amanhã tem outra!") : q.question}</AppText>}
        </View>
        {streak > 0 && (
          <View style={[styles.streak, { backgroundColor: c.surface2 }]}>
            <Icon name="fire" size={14} color="#FB923C" />
            <AppText variant="caption">{streak}</AppText>
          </View>
        )}
        <Icon name={open ? "chevron-up" : "chevron-down"} size={20} color={c.textDim} />
      </Bouncy>
      {open && (
        <Animated.View entering={FadeIn.duration(180)} style={{ marginTop: space.md }}>
          <AppText variant="headline" style={{ marginBottom: space.md }}>{q.question}</AppText>
          <QuizOptions item={q} picked={picked ?? (done ? q.answer : null)} onPick={pick} />
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: space.md, borderRadius: radius.lg, borderWidth: 1, marginBottom: space.md },
  head: { flexDirection: "row", alignItems: "center", gap: space.sm },
  streak: { flexDirection: "row", alignItems: "center", gap: 2, paddingHorizontal: 8, paddingVertical: 3, borderRadius: radius.pill },
});
