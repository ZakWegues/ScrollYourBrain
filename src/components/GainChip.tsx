import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getPage, PAGE_BY_ID } from "@/data/pages";
import { useGain } from "@/store/progress";
import { radius } from "@/theme";
import { TOAST_TOP, useToastHeight } from "./Toast";
import { AppText, Icon } from "./ui";

const SHOW_MS = 1800;

/**
 * Right after answering on the feed: "+10 XP · Genética 62% ↑", so every answer visibly moves something.
 * Only answers to the card on screen count (`pageId`), and only while the feed is visible (`active`).
 */
export function GainChip({ pageId, active }: { pageId?: string; active: boolean }) {
  const insets = useSafeAreaInsets();
  const gain = useGain();
  // A toast (e.g. a new achievement) takes the same spot: sit just below it instead of under it.
  const toastHeight = useToastHeight();
  const [shownAt, setShownAt] = useState(0);
  // New answers arrive through the store; only the card on screen, with the feed visible, shows them.
  useEffect(() => {
    if (!active) return;
    return useGain.subscribe((g) => {
      if (g.pageId === pageId) setShownAt(g.at);
    });
  }, [active, pageId]);

  useEffect(() => {
    if (!shownAt) return;
    const id = setTimeout(() => setShownAt(0), SHOW_MS);
    return () => clearTimeout(id);
  }, [shownAt]);

  if (!shownAt || shownAt !== gain.at) return null;
  // Only accounts have a mastery to show; subjects and "curiosidades" just get the XP.
  const isAccount = !!PAGE_BY_ID[gain.pageId]?.parent;
  const up = gain.delta > 0;
  return (
    <View pointerEvents="none" style={[styles.wrap, { top: insets.top + Math.max(96, toastHeight ? TOAST_TOP + toastHeight + 8 : 0) }]}>
      <Animated.View key={shownAt} entering={FadeInDown.duration(220)} exiting={FadeOutUp.duration(200)} style={styles.chip} testID="gain-chip">
        {gain.xp > 0 ? (
          <>
            <Icon name="star-four-points" size={14} color="#FBBF24" />
            <AppText variant="caption" style={styles.text}>+{gain.xp} XP</AppText>
            {isAccount && (
              <>
                <AppText variant="caption" style={styles.dot}>·</AppText>
                <AppText variant="caption" style={styles.text} numberOfLines={1}>{getPage(gain.pageId).name} {gain.mastery}%</AppText>
                {up && <Icon name="arrow-up-bold" size={13} color="#34D399" />}
              </>
            )}
          </>
        ) : (
          // A miss is not a loss: it goes to the mistakes notebook to try again later.
          <>
            <Icon name="history" size={14} color="#93C5FD" />
            <AppText variant="caption" style={styles.text}>Guardada nos erros para refazer</AppText>
          </>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { position: "absolute", left: 0, right: 0, alignItems: "center" },
  chip: { flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 12, paddingVertical: 6, borderRadius: radius.pill, backgroundColor: "rgba(0,0,0,0.62)", maxWidth: "80%" },
  text: { color: "#fff" },
  dot: { color: "rgba(255,255,255,0.6)" },
});
