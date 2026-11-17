import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { radius, space, useColors } from "@/theme";
import { Sheet } from "./Sheet";
import { AppText, Bouncy, Icon } from "./ui";

/** Above this length, the feed shows a preview and the whole text opens in a sheet. */
const PREVIEW_CHARS = 230;

/**
 * The "texto-base" of an ENEM-style question. In the feed (`compact`) a long text shows a preview and opens whole in a
 * sheet, so the card keeps its layout; in exams, lessons and reviews it is shown in full.
 */
export function ContextBlock({ text, compact }: { text: string; compact?: boolean }) {
  const c = useColors();
  const [open, setOpen] = useState(false);
  const long = compact && text.length > PREVIEW_CHARS;
  return (
    <View style={[styles.box, { backgroundColor: c.surface, borderLeftColor: c.accent2 }]} testID="quiz-context">
      <AppText variant="caption" style={{ color: c.accent2, marginBottom: 4 }}>TEXTO-BASE</AppText>
      <AppText style={styles.text} numberOfLines={long ? 4 : undefined}>{text}</AppText>
      {long && (
        <>
          <Bouncy onPress={() => setOpen(true)} style={styles.more} accessibilityLabel="Ler o texto-base completo" testID="quiz-context-more">
            <Icon name="text-box-outline" size={16} color={c.accent2} />
            <AppText variant="caption" style={{ color: c.accent2 }}>Ler texto completo</AppText>
          </Bouncy>
          <Sheet visible={open} onClose={() => setOpen(false)} title="Texto-base">
            <AppText style={styles.text}>{text}</AppText>
          </Sheet>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: { borderLeftWidth: 3, borderRadius: radius.sm, paddingHorizontal: space.md, paddingVertical: space.sm, marginBottom: space.md },
  text: { fontSize: 15, lineHeight: 22 },
  more: { flexDirection: "row", alignItems: "center", gap: 4, marginTop: 6, minHeight: 32, alignSelf: "flex-start" },
});
