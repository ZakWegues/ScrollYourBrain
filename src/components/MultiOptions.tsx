import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInDown, ZoomIn } from "react-native-reanimated";
import type { MultiItem } from "@/feed/types";
import { gradeMulti } from "@/lib/grading";
import { haptic } from "@/lib/haptics";
import { optionOrder } from "@/lib/shuffle";
import { radius, useColors } from "@/theme";
import { AppText, Bouncy, Glass, GradientButton, Icon } from "./ui";

const LETTERS = ["A", "B", "C", "D", "E"];

interface Props {
  item: MultiItem;
  /** The confirmed answer (option indexes), or null while the student is still choosing. */
  picked: number[] | null;
  onConfirm: (picked: number[]) => void;
  /** Tighter layout for the feed card, where five options and a button must fit on small phones. */
  compact?: boolean;
}

/**
 * "Marque todas as certas": tick every right option, then confirm. Options come in a new random order each
 * time; `picked` and `onConfirm` use the item's own indexes.
 */
export function MultiOptions({ item, picked, onConfirm, compact = false }: Props) {
  const c = useColors();
  const [salt] = useState(() => Math.floor(Math.random() * 2 ** 31));
  const order = useMemo(() => optionOrder(item.options.length, `${item.id}:${salt}`), [item.id, item.options.length, salt]);
  const [marked, setMarked] = useState<number[]>([]);
  const done = picked !== null;
  const shown = picked ?? marked;
  const grade = done ? gradeMulti(item, picked) : null;
  const right = new Set(item.answers);

  const toggle = (o: number) => {
    if (done) return;
    haptic.select();
    setMarked((m) => (m.includes(o) ? m.filter((x) => x !== o) : [...m, o]));
  };

  const headline = !grade
    ? ""
    : grade.ok
      ? "Mandou bem! Marcou todas as certas."
      : `Quase! Você marcou ${grade.hits} de ${grade.total} certas${grade.wrong ? ` e ${grade.wrong} errada${grade.wrong > 1 ? "s" : ""}` : ""}.`;

  return (
    <View>
      {!compact && (
        <View style={[styles.tip, { borderColor: c.border }]}>
          <Icon name="checkbox-multiple-marked-outline" size={15} color={c.accent2} />
          <AppText variant="caption" dim>Marque todas as alternativas corretas</AppText>
        </View>
      )}
      {order.map((o, i) => {
        const on = shown.includes(o);
        const isRight = right.has(o);
        const border = done ? (isRight ? c.success : on ? c.danger : c.border) : on ? c.accent : c.border;
        const bg = done ? (isRight && on ? "rgba(52,211,153,0.16)" : on ? "rgba(244,63,94,0.16)" : c.glass) : on ? "rgba(139,92,246,0.16)" : c.glass;
        return (
          <Bouncy
            key={o}
            onPress={() => toggle(o)}
            scaleTo={0.97}
            disabled={done}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: on, disabled: done }}
            accessibilityLabel={`Opção ${LETTERS[i]}: ${item.options[o]}`}
            testID={`multi-option-${i}`}
            style={[styles.option, compact && styles.optionCompact, { borderColor: border, backgroundColor: bg, borderStyle: done && isRight && !on ? "dashed" : "solid" }]}
          >
            <View style={[styles.box, { borderColor: on ? c.accent : c.textDim, backgroundColor: on ? c.accent : "transparent" }]}>
              {on && <Icon name="check" size={16} color="#fff" />}
            </View>
            <AppText variant="body" style={[styles.optText, compact && styles.optTextCompact]}>{item.options[o]}</AppText>
            {done && isRight && <Animated.View entering={ZoomIn}><Icon name="check-circle" size={22} color={c.success} /></Animated.View>}
            {done && on && !isRight && <Animated.View entering={ZoomIn}><Icon name="close-circle" size={22} color={c.danger} /></Animated.View>}
          </Bouncy>
        );
      })}
      {!done && (
        <GradientButton
          label={marked.length ? `Confirmar (${marked.length})` : "Confirmar"}
          icon="check-all"
          onPress={() => marked.length > 0 && onConfirm([...marked].sort())}
          style={{ marginTop: compact ? 0 : 4, opacity: marked.length ? 1 : 0.55 }}
        />
      )}
      {grade && (
        <Animated.View entering={FadeInDown.springify().damping(26).stiffness(280).mass(1)}>
          <Glass style={styles.explain}>
            <AppText variant="label" style={{ color: grade.ok ? c.success : c.danger, marginBottom: 4 }} testID="multi-result">{headline}</AppText>
            <AppText dim style={{ fontSize: 14, lineHeight: 20 }}>{item.explanation}</AppText>
          </Glass>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tip: { flexDirection: "row", alignItems: "center", gap: 6, alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 4, borderRadius: radius.pill, borderWidth: 1, marginBottom: 10 },
  option: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 12, paddingVertical: 9, borderRadius: radius.md, borderWidth: 1, marginBottom: 8, minHeight: 50 },
  optionCompact: { paddingVertical: 5, minHeight: 42, marginBottom: 6 },
  optTextCompact: { fontSize: 15, lineHeight: 19 },
  box: { width: 26, height: 26, borderRadius: 7, borderWidth: 2, alignItems: "center", justifyContent: "center" },
  optText: { flex: 1, fontSize: 16 },
  explain: { padding: 14, marginTop: 4 },
});
