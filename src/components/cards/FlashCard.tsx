import { LinearGradient } from "@/components/LinearGradient";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInDown, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { getPage } from "@/data/pages";
import type { FlashItem } from "@/feed/types";
import { toast } from "@/components/Toast";
import { AppText, Bouncy, Icon } from "@/components/ui";
import { useReview } from "@/store/review";
import { haptic } from "@/lib/haptics";
import { useSettings } from "@/store/settings";
import { radius, useColors } from "@/theme";
import type { CardProps } from "./types";

/** Tap anywhere to flip. */
export function FlashCard({ item, active, tapNonce, onStudied }: CardProps<FlashItem>) {
  const c = useColors();
  const page = getPage(item.pageId);
  const reduceMotion = useSettings((s) => s.reduceMotion);
  const [flipped, setFlipped] = useState(false);
  const rot = useSharedValue(0);
  const [seenTap, setSeenTap] = useState(tapNonce);
  if (seenTap !== tapNonce) {
    setSeenTap(tapNonce);
    if (active) {
      setFlipped((f) => !f);
      onStudied?.();
    }
  }

  useEffect(() => {
    if (flipped) haptic.light();
  }, [flipped]);

  useEffect(() => {
    const to = flipped ? 180 : 0;
    rot.value = reduceMotion ? withTiming(to, { duration: 1 }) : withSpring(to, { damping: 14, stiffness: 120, mass: 0.8 });
  }, [flipped, reduceMotion, rot]);

  const front = useAnimatedStyle(() => ({
    opacity: rot.value < 90 ? 1 : 0,
    transform: [{ perspective: 1200 }, { rotateY: `${rot.value}deg` }, { scale: interpolate(Math.abs(90 - rot.value), [0, 90], [0.94, 1]) }],
  }));
  const back = useAnimatedStyle(() => ({
    opacity: rot.value >= 90 ? 1 : 0,
    transform: [{ perspective: 1200 }, { rotateY: `${rot.value - 180}deg` }, { scale: interpolate(Math.abs(90 - rot.value), [0, 90], [0.94, 1]) }],
  }));

  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.wrap}>
        <View style={styles.cardBox}>
          <Animated.View style={[styles.face, { backgroundColor: c.surface, borderColor: c.border }, front]}>
            <LinearGradient colors={[page.colors[0] + "40", "transparent"]} style={StyleSheet.absoluteFill} />
            <AppText variant="caption" dim style={styles.kicker}>FLASHCARD · {item.title.toUpperCase()}</AppText>
            <AppText variant="title" style={{ textAlign: "center" }}>{item.front}</AppText>
            {item.hint && <AppText dim style={{ textAlign: "center", marginTop: 14 }}>Dica: {item.hint}</AppText>}
            <View style={styles.flipHint}>
              <Icon name="rotate-3d-variant" size={16} color={c.textDim} />
              <AppText variant="caption" dim>Toque para virar</AppText>
            </View>
          </Animated.View>
          <Animated.View style={[styles.face, { backgroundColor: c.surface, borderColor: page.colors[1] }, back]}>
            <LinearGradient colors={[page.colors[1] + "38", "transparent"]} style={StyleSheet.absoluteFill} />
            <AppText variant="caption" dim style={styles.kicker}>RESPOSTA</AppText>
            <AppText variant="headline" style={{ textAlign: "center", fontSize: 22, lineHeight: 30 }}>{item.back}</AppText>
          </Animated.View>
        </View>
        {flipped && (
          <Animated.View entering={FadeInDown.springify().damping(26).stiffness(280).mass(1)} style={styles.actions}>
            <Bouncy
              onPress={() => {
                const review = useReview.getState();
                if (review.cards[item.id]) review.grade(item.id, "again");
                else review.add(item);
                haptic.light();
                toast({ message: "Vai voltar na sua revisão", icon: "history" });
              }}
              style={[styles.action, { borderColor: c.border, backgroundColor: c.glass }]}
              accessibilityLabel="Revisar depois"
              testID="flash-review"
            >
              <Icon name="history" size={18} color={c.save} />
              <AppText variant="label">Revisar</AppText>
            </Bouncy>
            <Bouncy
              onPress={() => {
                const review = useReview.getState();
                if (review.cards[item.id]) review.grade(item.id, "good");
                haptic.success();
                toast({ message: "Boa! Siga em frente", icon: "check-circle", tone: "success" });
              }}
              style={[styles.action, { borderColor: c.border, backgroundColor: c.glass }]}
              accessibilityLabel="Já sei"
            >
              <Icon name="check-circle-outline" size={18} color={c.success} />
              <AppText variant="label">Já sei</AppText>
            </Bouncy>
          </Animated.View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, justifyContent: "center", paddingLeft: 20, paddingRight: 80, paddingBottom: 110 },
  cardBox: { aspectRatio: 0.78, maxHeight: 460, width: "100%", alignSelf: "center" },
  face: { ...StyleSheet.absoluteFill, borderRadius: radius.xl, borderWidth: 1, padding: 24, justifyContent: "center", overflow: "hidden", backfaceVisibility: "hidden" },
  kicker: { position: "absolute", top: 22, left: 24, right: 24, letterSpacing: 1.6 },
  actions: { flexDirection: "row", gap: 10, marginTop: 14, alignSelf: "center" },
  action: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 18, height: 44, borderRadius: 22, borderWidth: 1 },
  flipHint: { position: "absolute", bottom: 20, alignSelf: "center", flexDirection: "row", alignItems: "center", gap: 6 },
});
