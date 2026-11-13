import { LinearGradient } from "@/components/LinearGradient";
import { router } from "expo-router";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming, ZoomIn } from "react-native-reanimated";
import { getPage } from "@/data/pages";
import type { FeedEntry, ItemKind } from "@/feed/types";
import { haptic } from "@/lib/haptics";
import { isDue } from "@/lib/srs";
import { speak, speechText, stopSpeaking } from "@/lib/speech";
import { useLibrary } from "@/store/library";
import { useNotebooks } from "@/store/notebooks";
import { awardXpOnce } from "@/store/xp";
import { useReview } from "@/store/review";
import { useSettings } from "@/store/settings";
import { TAB_BAR_SPACE, useColors } from "@/theme";
import { openMore, openNotebookPicker } from "./Sheets";
import { toast } from "./Toast";
import { AppText, Bouncy, Icon, PageAvatar, type IconName } from "./ui";
import { ConceptCard } from "./cards/ConceptCard";
import { FlashCard } from "./cards/FlashCard";
import { QuizCard } from "./cards/QuizCard";
import { MultiCard } from "./cards/MultiCard";
import { OpenCard } from "./cards/OpenCard";
import { VideoCard } from "./cards/VideoCard";
import { WikiCard } from "./cards/WikiCard";
import type { CardProps } from "./cards/types";

const KIND_LABEL: Record<ItemKind, { label: string; icon: IconName }> = {
  concept: { label: "Conceito", icon: "text-box-outline" },
  quiz: { label: "Quiz", icon: "help-circle-outline" },
  multi: { label: "Marque todas", icon: "checkbox-multiple-marked-outline" },
  open: { label: "Dissertativa", icon: "pencil-outline" },
  flash: { label: "Flashcard", icon: "cards-outline" },
  video: { label: "Vídeo", icon: "play-circle-outline" },
  wiki: { label: "Wikipédia", icon: "wikipedia" },
};

const HINTS: Partial<Record<ItemKind, string>> = {
  concept: "Toque para pausar · dois toques curte",
  flash: "Dois toques curte · arraste para o próximo",
  quiz: "Responda e arraste para o próximo",
  multi: "Pode haver mais de uma certa: marque todas",
  open: "Escreva com suas palavras e compare",
  video: "Toque para pausar o vídeo",
};
const MAX_HINTS = 4;

function Card(props: CardProps) {
  const { item } = props;
  switch (item.kind) {
    case "concept": return <ConceptCard {...props} item={item} />;
    case "quiz": return <QuizCard {...props} item={item} />;
    case "multi": return <MultiCard {...props} item={item} />;
    case "open": return <OpenCard {...props} item={item} />;
    case "flash": return <FlashCard {...props} item={item} />;
    case "video": return <VideoCard {...props} item={item} />;
    case "wiki": return <WikiCard {...props} item={item} />;
  }
}

function RailButton({ icon, label, color, onPress, active, testID }: { icon: IconName; label: string; color: string; onPress: () => void; active?: boolean; testID?: string }) {
  const pop = useSharedValue(1);
  const style = useAnimatedStyle(() => ({ transform: [{ scale: pop.value }] }));
  return (
    <Bouncy
      onPress={() => {
        pop.set(withSequence(withSpring(1.25, { mass: 1, damping: 9, stiffness: 500 }), withSpring(1, { mass: 1, damping: 14, stiffness: 300 })));
        onPress();
      }}
      style={styles.railBtn}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected: !!active }}
      testID={testID}
    >
      <Animated.View style={style}>
        <Icon name={icon} size={30} color={color} style={styles.shadow} />
      </Animated.View>
      <AppText variant="caption" style={styles.railLabel} numberOfLines={1}>{label}</AppText>
    </Bouncy>
  );
}

interface Props {
  entry: FeedEntry;
  active: boolean;
  /** The next video: load it paused so it starts at once. */
  preload?: boolean;
  height: number;
  onFail: (key: string) => void;
  onStudied: (key: string) => void;
  /** Space kept free at the bottom (the floating tab bar, or just the safe area outside tabs). */
  bottomInset?: number;
}

export const FeedItem = memo(function FeedItem({ entry, active, preload, height, onFail, onStudied, bottomInset = TAB_BAR_SPACE }: Props) {
  const { item } = entry;
  const c = useColors();
  const page = getPage(item.pageId);
  const liked = useLibrary((s) => !!s.liked[item.id]);
  const saved = useLibrary((s) => !!s.saved[item.id]);
  const following = useLibrary((s) => !!s.followed[item.pageId]);
  const hasNote = useNotebooks((s) => !!s.notes[item.id]);
  const inReview = useReview((s) => (s.cards[item.id] ? isDue(s.cards[item.id].srs) : false));
  const autoSpeak = useSettings((s) => s.autoSpeak);
  const { toggleLike, toggleSave, toggleFollow } = useLibrary.getState();
  const [tapNonce, setTapNonce] = useState(0);
  const [fast, setFast] = useState(false);
  const [burst, setBurst] = useState<{ x: number; y: number; id: number; tilt: number } | null>(null);
  const [hint] = useState(() => (useSettings.getState().hintsShown < MAX_HINTS ? HINTS[item.kind] : undefined));
  const [hintDone, setHintDone] = useState(false);
  const insets = useSafeAreaInsets();

  // Gesture hints only for the first few cards ever, and only for a few seconds.
  useEffect(() => {
    if (!active || !hint) return;
    useSettings.setState((s) => ({ hintsShown: s.hintsShown + 1 }));
    const t = setTimeout(() => setHintDone(true), 4200);
    return () => clearTimeout(t);
  }, [active, hint]);

  // Read the card aloud when it becomes active (if enabled); always stop when it leaves the screen.
  useEffect(() => {
    if (!active) return;
    if (autoSpeak && item.kind !== "video") speak(speechText(item));
    return () => {
      stopSpeaking();
    };
  }, [active, autoSpeak, item]);

  const like = useCallback(() => {
    const now = toggleLike(item);
    if (now) {
      haptic.medium();
      awardXpOnce("like", item.id);
    } else haptic.light();
  }, [item, toggleLike]);

  const doubleTapLike = useCallback(
    (x: number, y: number) => {
      setBurst((b) => ({ x, y, id: (b?.id ?? 0) + 1, tilt: (Math.random() - 0.5) * 30 }));
      if (!useLibrary.getState().liked[item.id]) {
        toggleLike(item);
        awardXpOnce("like", item.id);
      }
      haptic.medium();
    },
    [item, toggleLike],
  );

  const save = () => {
    const now = toggleSave(item);
    haptic.light();
    if (!now) {
      toast({ message: "Removido dos salvos", icon: "bookmark-remove-outline", action: { label: "Desfazer", onPress: () => toggleSave(item) } });
      return;
    }
    awardXpOnce("save", item.id);
    // Saving a question or flashcard also schedules it for spaced review.
    const toReview = useSettings.getState().saveToReview && useReview.getState().add(item);
    toast({
      message: toReview ? "Salvo + na sua revisão" : "Salvo na Biblioteca",
      icon: "bookmark-check",
      tone: "success",
      action: { label: "Caderno", onPress: () => openNotebookPicker(item) },
    });
  };

  const gesture = useMemo(() => {
    const single = Gesture.Tap().runOnJS(true).maxDuration(250).onEnd((_e, ok) => {
      if (ok) setTapNonce((n) => n + 1);
    });
    const double = Gesture.Tap().runOnJS(true).numberOfTaps(2).maxDelay(260).onEnd((e, ok) => {
      if (ok) doubleTapLike(e.x, e.y);
    });
    // Holding a video plays it at 2× until released.
    const hold = Gesture.LongPress().runOnJS(true).minDuration(350).maxDistance(30)
      .onStart(() => { if (item.kind === "video") { setFast(true); haptic.select(); } })
      .onFinalize(() => setFast(false));
    return Gesture.Race(hold, Gesture.Exclusive(double, single));
  }, [doubleTapLike, item.kind]);

  const openPage = () => router.push(`/page/${page.id}`);

  return (
    <View style={[{ height, overflow: "hidden" }, webSnap]} testID="feed-item">
      <GestureDetector gesture={gesture}>
        <View style={StyleSheet.absoluteFill} collapsable={false}>
          <Card item={item} active={active} preload={preload} height={height} tapNonce={tapNonce} fast={fast} onFail={() => onFail(entry.key)} onStudied={() => onStudied(entry.key)} />
          {/* Scrims keep the header and the bottom text readable over any background or video. */}
          <LinearGradient pointerEvents="none" colors={["rgba(0,0,0,0.55)", "transparent"]} style={styles.topScrim} />
          <LinearGradient pointerEvents="none" colors={["transparent", "rgba(0,0,0,0.78)"]} style={[styles.bottomScrim, { height: bottomInset + 170 }]} />
          {burst && <HeartBurst key={burst.id} x={burst.x} y={burst.y} tilt={burst.tilt} />}
        </View>
      </GestureDetector>

      <View style={[styles.rail, { bottom: bottomInset + 12 }]} pointerEvents="box-none">
        <View style={styles.avatarWrap}>
          <Bouncy onPress={openPage} accessibilityLabel={`Abrir ${page.name}`}>
            <View style={[styles.avatarRing, { borderColor: "#fff" }]}>
              <PageAvatar pageId={page.id} size={46} />
            </View>
          </Bouncy>
          <Bouncy
            onPress={() => {
              const now = toggleFollow(page.id);
              haptic.select();
              toast({ message: now ? `Seguindo ${page.name}` : `Você deixou de seguir ${page.name}`, icon: now ? "account-check" : "account-remove-outline" });
            }}
            style={[styles.follow, { backgroundColor: following ? "#fff" : c.like }]}
            accessibilityLabel={following ? `Deixar de seguir ${page.name}` : `Seguir ${page.name}`}
            testID="follow-button"
          >
            <Animated.View key={String(following)} entering={ZoomIn.springify().damping(18).stiffness(320).mass(1)}>
              <Icon name={following ? "check" : "plus"} size={14} color={following ? "#000" : "#fff"} />
            </Animated.View>
          </Bouncy>
        </View>
        <RailButton icon={liked ? "heart" : "heart-outline"} color={liked ? c.like : "#fff"} label={liked ? "Quero mais" : "Curtir"} onPress={like} active={liked} testID="like-button" />
        <RailButton icon={saved ? "bookmark" : "bookmark-outline"} color={saved ? c.save : "#fff"} label={saved ? "Salvo" : "Salvar"} onPress={save} active={saved} testID="save-button" />
        <RailButton icon={hasNote ? "dots-horizontal-circle" : "dots-horizontal"} color="#fff" label="Mais" onPress={() => openMore(item)} testID="more-button" />
      </View>

      {item.kind !== "quiz" && item.kind !== "multi" && item.kind !== "open" && (
        <View style={[styles.meta, { bottom: bottomInset + 14 }]} pointerEvents="box-none">
          <Bouncy onPress={openPage} style={styles.pageRow} scaleTo={0.97} accessibilityLabel={`Abrir ${page.name}`}>
            <AppText variant="label" style={styles.white}>{page.name}</AppText>
            <AppText variant="caption" style={styles.soft}>{page.handle}</AppText>
          </Bouncy>
          <AppText variant="headline" style={[styles.white, styles.shadowText]} numberOfLines={2}>{item.title}</AppText>
          <View style={styles.chips}>
            {/* One chip: the format, plus the channel credit for videos. Review and note are icon-only. */}
            <View style={styles.chip}>
              <Icon name={KIND_LABEL[item.kind].icon} size={13} color="#fff" />
              <AppText variant="caption" style={[styles.white, { flexShrink: 1 }]} numberOfLines={1}>
                {item.kind === "video" ? `${item.vertical ? "Short" : "Aula"}${item.channel ? ` · ${item.channel}` : ""}` : KIND_LABEL[item.kind].label}
              </AppText>
            </View>
            {inReview && (
              <View style={[styles.chip, styles.iconChip, { borderColor: c.save, backgroundColor: "rgba(251,191,36,0.18)" }]} accessible accessibilityLabel="Na sua revisão">
                <Icon name="history" size={14} color={c.save} />
              </View>
            )}
            {hasNote && (
              <View style={[styles.chip, styles.iconChip]} accessible accessibilityLabel="Tem anotação sua">
                <Icon name="note-text" size={14} color={c.accent2} />
              </View>
            )}
          </View>
        </View>
      )}

      {active && hint && !hintDone && (
        <Animated.View entering={FadeIn.delay(600)} exiting={FadeOut} pointerEvents="none" style={[styles.hint, { top: insets.top + 62 }]}>
          <Icon name="gesture-tap" size={16} color="#fff" />
          <AppText variant="caption" style={styles.white}>{hint}</AppText>
        </Animated.View>
      )}
    </View>
  );
});

function HeartBurst({ x, y, tilt }: { x: number; y: number; tilt: number }) {
  const scale = useSharedValue(0.2);
  const opacity = useSharedValue(1);
  useEffect(() => {
    scale.set(withSequence(withSpring(1.15, { mass: 1, damping: 7, stiffness: 300 }), withTiming(1.4, { duration: 380 })));
    opacity.set(withSequence(withTiming(1, { duration: 420 }), withTiming(0, { duration: 260 })));
  }, [scale, opacity]);
  const style = useAnimatedStyle(() => ({ opacity: opacity.value, transform: [{ scale: scale.value }, { rotate: `${tilt}deg` }] }));
  return (
    <Animated.View pointerEvents="none" style={[{ position: "absolute", left: x - 60, top: y - 60 }, style]}>
      <Icon name="heart" size={120} color="#FF3B6B" />
    </Animated.View>
  );
}

// FlashList wraps cells, so on web each card declares itself a snap point for the CSS scroll-snap that pagingEnabled sets.
const webSnap = Platform.OS === "web" ? ({ scrollSnapAlign: "start", scrollSnapStop: "always" } as object) : null;

const styles = StyleSheet.create({
  topScrim: { position: "absolute", top: 0, left: 0, right: 0, height: 150 },
  bottomScrim: { position: "absolute", bottom: 0, left: 0, right: 0 },
  rail: { position: "absolute", right: 6, alignItems: "center", gap: 14, width: 72 },
  // The follow badge hangs below the avatar; padding keeps it inside the wrapper so Android delivers its taps.
  avatarWrap: { alignItems: "center", paddingBottom: 10, marginBottom: -4 },
  avatarRing: { borderWidth: 2, borderRadius: 26, padding: 1 },
  follow: { position: "absolute", bottom: 0, alignSelf: "center", width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center" },
  railBtn: { alignItems: "center", minWidth: 64, minHeight: 52 },
  railLabel: { marginTop: 3, color: "#fff", textShadowColor: "rgba(0,0,0,0.7)", textShadowRadius: 4 },
  shadow: { textShadowColor: "rgba(0,0,0,0.45)", textShadowRadius: 6 } as object,
  meta: { position: "absolute", left: 16, right: 90, gap: 6 },
  pageRow: { flexDirection: "row", alignItems: "baseline", gap: 8, alignSelf: "flex-start" },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  // maxWidth + shrinking text keep long channel names inside the caption column (never under the rail).
  iconChip: { paddingHorizontal: 6 },
  chip: { maxWidth: "100%", flexShrink: 1, flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: 9, paddingVertical: 4, borderRadius: 999, borderWidth: StyleSheet.hairlineWidth, borderColor: "rgba(255,255,255,0.25)", backgroundColor: "rgba(0,0,0,0.35)" },
  white: { color: "#fff" },
  soft: { color: "rgba(255,255,255,0.75)" },
  shadowText: { textShadowColor: "rgba(0,0,0,0.5)", textShadowRadius: 6 },
  hint: { position: "absolute", alignSelf: "center", flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 14, paddingVertical: 8, borderRadius: 999, backgroundColor: "rgba(0,0,0,0.55)" },
});
