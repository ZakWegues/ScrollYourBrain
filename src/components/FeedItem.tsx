import { router } from "expo-router";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Platform, Share, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming, ZoomIn } from "react-native-reanimated";
import { getPage } from "@/data/pages";
import type { FeedEntry, ItemKind, StudyItem } from "@/feed/types";
import { haptic } from "@/lib/haptics";
import { useLibrary } from "@/store/library";
import { useNotebooks } from "@/store/notebooks";
import { useReview } from "@/store/review";
import { isDue } from "@/lib/srs";
import { speak, speechText, stopSpeaking } from "@/lib/speech";
import { useSettings } from "@/store/settings";
import { TAB_BAR_SPACE, useColors } from "@/theme";
import { openNote, openNotebookPicker } from "./Sheets";
import { toast } from "./Toast";
import { AppText, Bouncy, Icon, PageAvatar, type IconName } from "./ui";
import { ConceptCard } from "./cards/ConceptCard";
import { FlashCard } from "./cards/FlashCard";
import { QuizCard } from "./cards/QuizCard";
import { VideoCard } from "./cards/VideoCard";
import { WikiCard } from "./cards/WikiCard";
import type { CardProps } from "./cards/types";

const KIND_LABEL: Record<ItemKind, { label: string; icon: IconName }> = {
  concept: { label: "Conceito", icon: "text-box-outline" },
  quiz: { label: "Quiz", icon: "help-circle-outline" },
  flash: { label: "Flashcard", icon: "cards-outline" },
  video: { label: "Vídeo", icon: "play-circle-outline" },
  wiki: { label: "Wikipédia", icon: "wikipedia" },
};

function Card(props: CardProps) {
  const { item } = props;
  switch (item.kind) {
    case "concept": return <ConceptCard {...props} item={item} />;
    case "quiz": return <QuizCard {...props} item={item} />;
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
        pop.set(withSequence(withSpring(1.28, { mass: 1, damping: 8, stiffness: 500 }), withSpring(1, { mass: 1, damping: 10, stiffness: 300 })));
        onPress();
      }}
      style={styles.railBtn}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected: !!active }}
      testID={testID}
    >
      <Animated.View style={[styles.railIcon, style]}>
        <Icon name={icon} size={28} color={color} />
      </Animated.View>
      <AppText variant="caption" style={styles.railLabel}>{label}</AppText>
    </Bouncy>
  );
}

function shareText(item: StudyItem): string {
  const page = getPage(item.pageId).name;
  switch (item.kind) {
    case "video": return `${item.title} — https://youtu.be/${item.youtubeId}`;
    case "wiki": return `${item.title}: ${item.url}`;
    case "quiz": return `Quiz de ${page}: ${item.question}`;
    case "flash": return `${item.front}\n${item.back}`;
    case "concept": return `${item.title}: ${item.takeaway}`;
  }
}

interface Props {
  entry: FeedEntry;
  active: boolean;
  height: number;
  onFail: (key: string) => void;
  onStudied: (key: string) => void;
  /** Space kept free at the bottom (the floating tab bar, or just the safe area outside tabs). */
  bottomInset?: number;
}

export const FeedItem = memo(function FeedItem({ entry, active, height, onFail, onStudied, bottomInset = TAB_BAR_SPACE }: Props) {
  const { item } = entry;
  const c = useColors();
  const page = getPage(item.pageId);
  const liked = useLibrary((s) => !!s.liked[item.id]);
  const saved = useLibrary((s) => !!s.saved[item.id]);
  const following = useLibrary((s) => !!s.followed[item.pageId]);
  const hasNote = useNotebooks((s) => !!s.notes[item.id]);
  const inReview = useReview((s) => (s.cards[item.id] ? isDue(s.cards[item.id].srs) : false));
  const { toggleLike, toggleSave, toggleFollow } = useLibrary.getState();
  const [tapNonce, setTapNonce] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const autoSpeak = useSettings((s) => s.autoSpeak);

  // Read the card aloud when it becomes active (if enabled); always stop when it leaves the screen.
  useEffect(() => {
    if (!active) return;
    if (autoSpeak && item.kind !== "video") {
      speak(speechText(item), { onStart: () => setSpeaking(true), onDone: () => setSpeaking(false) });
    }
    return () => {
      stopSpeaking();
      setSpeaking(false);
    };
  }, [active, autoSpeak, item]);

  const toggleSpeech = () => {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
    } else {
      setSpeaking(true);
      speak(speechText(item), { onDone: () => setSpeaking(false) });
    }
    haptic.light();
  };
  const [burst, setBurst] = useState<{ x: number; y: number; id: number; tilt: number } | null>(null);

  const like = useCallback(() => {
    const now = toggleLike(item);
    if (now) haptic.medium();
    else haptic.light();
  }, [item, toggleLike]);

  const doubleTapLike = useCallback(
    (x: number, y: number) => {
      setBurst((b) => ({ x, y, id: (b?.id ?? 0) + 1, tilt: (Math.random() - 0.5) * 30 }));
      if (!useLibrary.getState().liked[item.id]) {
        toggleLike(item);
      }
      haptic.medium();
    },
    [item, toggleLike],
  );

  const gesture = useMemo(() => {
    const single = Gesture.Tap().runOnJS(true).maxDuration(250).onEnd((_e, ok) => {
      if (ok) setTapNonce((n) => n + 1);
    });
    const double = Gesture.Tap().runOnJS(true).numberOfTaps(2).maxDelay(260).onEnd((e, ok) => {
      if (ok) doubleTapLike(e.x, e.y);
    });
    return Gesture.Exclusive(double, single);
  }, [doubleTapLike]);

  return (
    <View style={[{ height, overflow: "hidden" }, webSnap]} testID="feed-item">
      <GestureDetector gesture={gesture}>
        <View style={StyleSheet.absoluteFill} collapsable={false}>
          <Card item={item} active={active} height={height} tapNonce={tapNonce} onFail={() => onFail(entry.key)} onStudied={() => onStudied(entry.key)} />
          {burst && <HeartBurst key={burst.id} x={burst.x} y={burst.y} tilt={burst.tilt} />}
        </View>
      </GestureDetector>

      {item.kind !== "video" && (
        <Bouncy onPress={toggleSpeech} style={styles.listen} accessibilityLabel={speaking ? "Parar leitura" : "Ouvir este card"} testID="listen-button">
          <View style={[styles.listenInner, { backgroundColor: speaking ? c.accent : "rgba(0,0,0,0.4)", borderColor: c.border }]}>
            <Icon name={speaking ? "stop" : "account-voice"} size={20} color="#fff" />
          </View>
        </Bouncy>
      )}

      <View style={[styles.rail, { bottom: bottomInset + 8 }]} pointerEvents="box-none">
        <Bouncy onPress={() => router.push(`/page/${page.id}`)} style={styles.avatarWrap} accessibilityLabel={`Abrir página ${page.name}`}>
          <PageAvatar pageId={page.id} size={48} />
          <Bouncy
            onPress={() => {
              const now = toggleFollow(page.id);
              haptic.select();
              toast({ message: now ? `Seguindo ${page.name}` : `Você deixou de seguir ${page.name}`, icon: now ? "account-check" : "account-remove-outline" });
            }}
            style={[styles.follow, { backgroundColor: following ? c.text : c.like }]}
            accessibilityLabel={following ? `Deixar de seguir ${page.name}` : `Seguir ${page.name}`}
            testID="follow-button"
          >
            <Animated.View key={String(following)} entering={ZoomIn.springify().damping(18).stiffness(320).mass(1)}>
              <Icon name={following ? "check" : "plus"} size={14} color={following ? c.bg : "#fff"} />
            </Animated.View>
          </Bouncy>
        </Bouncy>
        <RailButton icon={liked ? "heart" : "heart-outline"} color={liked ? c.like : "#fff"} label={liked ? "Quero mais" : "Curtir"} onPress={like} active={liked} testID="like-button" />
        <RailButton
          icon={saved ? "bookmark" : "bookmark-outline"}
          color={saved ? c.save : "#fff"}
          label={saved ? "Salvo" : "Salvar"}
          onPress={() => {
            const now = toggleSave(item);
            haptic.light();
            toast({
              message: now ? "Salvo na Biblioteca" : "Removido dos salvos",
              icon: now ? "bookmark-check" : "bookmark-remove-outline",
              action: now ? { label: "Caderno", onPress: () => openNotebookPicker(item) } : { label: "Desfazer", onPress: () => toggleSave(item) },
            });
          }}
          active={saved}
          testID="save-button"
        />
        <RailButton icon={hasNote ? "note-text" : "note-edit-outline"} color={hasNote ? c.accent2 : "#fff"} label="Nota" onPress={() => openNote(item)} active={hasNote} testID="note-button" />
        <RailButton icon="share-variant" color="#fff" label="Enviar" onPress={() => Share.share({ message: shareText(item) }).catch(() => {})} />
      </View>

      {item.kind !== "quiz" && (
      <View style={[styles.meta, { bottom: bottomInset + 10 }]} pointerEvents="box-none">
        <Bouncy onPress={() => router.push(`/page/${page.id}`)} style={styles.pageRow} scaleTo={0.97}>
          <AppText variant="label">{page.name}</AppText>
          <AppText variant="caption" dim>{page.handle}</AppText>
        </Bouncy>
        <View style={styles.kindRow}>
          <View style={[styles.kind, { borderColor: c.border, backgroundColor: "rgba(0,0,0,0.35)" }]}>
            <Icon name={KIND_LABEL[item.kind].icon} size={13} color={c.text} />
            <AppText variant="caption">{KIND_LABEL[item.kind].label}</AppText>
          </View>
          {inReview && (
            <View style={[styles.kind, { borderColor: c.save, backgroundColor: "rgba(251,191,36,0.16)" }]}>
              <Icon name="history" size={13} color={c.save} />
              <AppText variant="caption" style={{ color: c.save }}>Revisão</AppText>
            </View>
          )}
          <AppText variant="label" numberOfLines={1} style={{ flex: 1 }}>{item.title}</AppText>
        </View>
      </View>
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
  listen: { position: "absolute", top: 128, right: 12 },
  listenInner: { width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center", borderWidth: StyleSheet.hairlineWidth },
  rail: { position: "absolute", right: 8, alignItems: "center", gap: 10 },
  avatarWrap: { marginBottom: 8, alignItems: "center" },
  follow: { position: "absolute", bottom: -9, alignSelf: "center", width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center" },
  railBtn: { alignItems: "center", minWidth: 60 },
  railIcon: {},
  railLabel: { marginTop: 2, color: "#fff", textShadowColor: "rgba(0,0,0,0.6)", textShadowRadius: 4 },
  meta: { position: "absolute", left: 16, right: 92 },
  pageRow: { flexDirection: "row", alignItems: "baseline", gap: 8, marginBottom: 6, alignSelf: "flex-start" },
  kindRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  kind: { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 999, borderWidth: StyleSheet.hairlineWidth },
});
