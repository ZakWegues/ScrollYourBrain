import { useEffect, useRef, useState } from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import type { OpenItem } from "@/feed/types";
import { matchPoints, type SelfGrade } from "@/lib/grading";
import { haptic } from "@/lib/haptics";
import { fonts, radius, space, useColors } from "@/theme";
import { AppText, Bouncy, GradientButton, Icon } from "./ui";

const GRADES: { value: SelfGrade; label: string; icon: "check-circle" | "circle-half-full" | "close-circle" }[] = [
  { value: "right", label: "Acertei", icon: "check-circle" },
  { value: "partial", label: "Acertei parte", icon: "circle-half-full" },
  { value: "wrong", label: "Errei", icon: "close-circle" },
];

/**
 * A written answer: type it, then see the model answer and a checklist of key points (the ones your text
 * mentions come ticked; tap to fix), and say how you did. Works offline.
 */
export function OpenAnswer({ item, onGraded, autoFocus = false }: { item: OpenItem; onGraded: (grade: SelfGrade, text: string) => void; autoFocus?: boolean }) {
  const c = useColors();
  const [text, setText] = useState("");
  const [checking, setChecking] = useState(false);
  const [ticks, setTicks] = useState<boolean[]>([]);
  const [grade, setGrade] = useState<SelfGrade | null>(null);
  const input = useRef<TextInput>(null);

  useEffect(() => {
    if (!autoFocus || Platform.OS === "web") return;
    const id = setTimeout(() => input.current?.focus(), 380);
    return () => clearTimeout(id);
  }, [autoFocus]);

  const check = () => {
    setTicks(matchPoints(text, item.points));
    setChecking(true);
    input.current?.blur();
    haptic.select();
  };
  const choose = (g: SelfGrade) => {
    if (grade) return;
    setGrade(g);
    if (g === "right") haptic.success();
    else haptic.error();
    onGraded(g, text);
  };
  const found = ticks.filter(Boolean).length;

  if (!checking)
    return (
      <View>
        <TextInput
          ref={input}
          value={text}
          onChangeText={setText}
          placeholder="Escreva sua resposta com suas palavras…"
          placeholderTextColor={c.textMute}
          multiline
          textAlignVertical="top"
          style={[styles.input, { color: c.text, borderColor: c.border, backgroundColor: c.surface2, fontFamily: fonts.body }]}
          accessibilityLabel="Sua resposta"
          testID="open-input"
        />
        <GradientButton label={text.trim() ? "Corrigir minha resposta" : "Escreva algo para corrigir"} icon="clipboard-check-outline" onPress={() => text.trim() && check()} style={{ opacity: text.trim() ? 1 : 0.55 }} />
        <Bouncy onPress={check} style={styles.skip} accessibilityLabel="Ver a resposta sem escrever" testID="open-skip">
          <AppText variant="caption" dim>Só ver a resposta</AppText>
        </Bouncy>
      </View>
    );

  return (
    <Animated.View entering={FadeIn.duration(180)}>
      {!!text.trim() && (
        <View style={[styles.box, { borderColor: c.border }]}>
          <AppText variant="caption" dim>Sua resposta</AppText>
          <AppText style={styles.body}>{text.trim()}</AppText>
        </View>
      )}
      <View style={[styles.box, { borderColor: c.accent2, backgroundColor: "rgba(34,211,238,0.08)" }]}>
        <AppText variant="caption" style={{ color: c.accent2 }}>Resposta-modelo</AppText>
        <AppText style={styles.body} testID="open-model">{item.model}</AppText>
      </View>
      <AppText variant="label" style={{ marginBottom: space.sm }}>
        Pontos-chave{text.trim() ? ` · ${found} de ${item.points.length} no seu texto` : ""}
      </AppText>
      {item.points.map((p, i) => (
        <Bouncy
          key={p.label}
          onPress={() => !grade && setTicks((t) => t.map((v, j) => (j === i ? !v : v)))}
          scaleTo={0.98}
          style={styles.point}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: !!ticks[i] }}
          accessibilityLabel={p.label}
          testID={`open-point-${i}`}
        >
          <Icon name={ticks[i] ? "checkbox-marked" : "checkbox-blank-outline"} size={22} color={ticks[i] ? c.success : c.textDim} />
          <AppText style={{ flex: 1 }}>{p.label}</AppText>
        </Bouncy>
      ))}
      <AppText variant="caption" dim style={{ marginTop: space.sm, marginBottom: space.sm }}>Como foi?</AppText>
      <View style={styles.grades}>
        {GRADES.map((g) => {
          const on = grade === g.value;
          const color = g.value === "right" ? c.success : g.value === "partial" ? c.save : c.danger;
          return (
            <Bouncy
              key={g.value}
              onPress={() => choose(g.value)}
              disabled={!!grade && !on}
              style={[styles.grade, { borderColor: on ? color : c.border, backgroundColor: on ? `${color}22` : c.surface2, opacity: grade && !on ? 0.45 : 1 }]}
              accessibilityLabel={g.label}
              testID={`open-grade-${g.value}`}
            >
              <Icon name={g.icon} size={18} color={color} />
              <AppText variant="caption" numberOfLines={1}>{g.label}</AppText>
            </Bouncy>
          );
        })}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  input: { minHeight: 120, maxHeight: 220, borderWidth: 1, borderRadius: radius.md, padding: space.md, fontSize: 16, marginBottom: space.md },
  skip: { alignSelf: "center", paddingVertical: space.sm, paddingHorizontal: space.md, marginTop: space.xs },
  box: { borderWidth: 1, borderRadius: radius.md, padding: space.md, marginBottom: space.md, gap: 4 },
  body: { fontSize: 15, lineHeight: 21 },
  point: { flexDirection: "row", alignItems: "center", gap: space.sm, paddingVertical: 6, minHeight: 40 },
  grades: { flexDirection: "row", gap: space.sm },
  grade: { flex: 1, minWidth: 0, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 4, paddingVertical: 10, paddingHorizontal: 6, borderRadius: radius.md, borderWidth: 1 },
});
