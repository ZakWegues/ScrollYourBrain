import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { ActivityIndicator, StyleSheet, View, useWindowDimensions } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import type { VideoItem } from "@/feed/types";
import { youtubeThumb } from "@/feed/sources/youtube";
import { AppText, Bouncy, Glass, Icon } from "@/components/ui";
import { YouTubeEmbed } from "@/components/video/YouTubeEmbed";
import { isGoneError } from "@/lib/ytEmbed";
import { useNetwork } from "@/store/network";
import { usePlayback } from "@/store/playback";
import { useSettings } from "@/store/settings";
import { radius, useColors } from "@/theme";
import type { CardProps } from "./types";

/** Embedded YouTube video. Only the active card mounts a player, keeping memory and CPU low. */
export function VideoCard({ item, active, tapNonce, onFail, height, fast }: CardProps<VideoItem>) {
  const c = useColors();
  const { width } = useWindowDimensions();
  const autoplay = useSettings((s) => s.autoplay && !s.dataSaver);
  const { muted, setMuted } = usePlayback();
  const online = useNetwork((s) => s.online);
  const [playing, setPlaying] = useState(false);
  const [requested, setRequested] = useState(false);
  const [ready, setReady] = useState(false);
  const [stalled, setStalled] = useState(false);
  // The embed was refused or failed: offer the in-app watch screen instead of skipping the card.
  const [blocked, setBlocked] = useState(false);
  const [attempt, setAttempt] = useState(0);
  // Shorts fill the whole card (cropping the sides a little, like reels); lessons keep 16:9.
  const vertical = !!item.vertical;
  const cover = Math.max(width / 9, height / 16);
  const playerW = vertical ? Math.round(9 * cover) : Math.min(width, 720);
  const playerH = vertical ? Math.round(16 * cover) : Math.round((playerW * 9) / 16);
  const mounted = online && active && (autoplay || requested);

  // React to visibility and taps while rendering (no effect round-trip).
  const [seen, setSeen] = useState({ active, autoplay, tapNonce });
  if (seen.active !== active || seen.autoplay !== autoplay || seen.tapNonce !== tapNonce) {
    setSeen({ active, autoplay, tapNonce });
    if (seen.active !== active || seen.autoplay !== autoplay) {
      setPlaying(active && autoplay);
      if (!active) {
        setRequested(false);
        setReady(false);
        setStalled(false);
        setBlocked(false);
      }
    } else if (active) {
      if (!mounted) {
        setRequested(true);
        setPlaying(true);
      } else {
        setPlaying((p) => !p);
      }
    }
  }

  // Slow or blocked network: offer a retry instead of an endless spinner.
  useEffect(() => {
    if (!mounted || ready || blocked) return;
    const id = setTimeout(() => setStalled(true), 12_000);
    return () => clearTimeout(id);
  }, [mounted, ready, blocked, attempt]);

  const watch = () => {
    setPlaying(false);
    router.push({ pathname: "/watch", params: { id: item.youtubeId, vertical: vertical ? "1" : "0", title: item.title } });
  };
  const retry = () => {
    setStalled(false);
    setBlocked(false);
    setReady(false);
    setAttempt((a) => a + 1);
  };

  return (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: c.bg }]}>
      <Image source={youtubeThumb(item.youtubeId)} style={StyleSheet.absoluteFill} contentFit="cover" blurRadius={40} transition={200} />
      <View style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(0,0,0,0.55)" }]} />
      <View style={vertical ? styles.full : styles.center}>
        <View style={[styles.frame, { width: playerW, height: playerH }]}>
          <Image source={youtubeThumb(item.youtubeId)} style={StyleSheet.absoluteFill} contentFit="cover" transition={200} />
          {mounted && !blocked && (
            <View style={StyleSheet.absoluteFill} pointerEvents="none">
              <YouTubeEmbed
                key={attempt}
                id={item.youtubeId}
                start={item.start}
                width={playerW}
                height={playerH}
                play={playing}
                muted={muted}
                rate={fast ? 2 : 1}
                onReady={() => setReady(true)}
                onState={(st) => {
                  if (st === 0 && !vertical) setPlaying(false);
                }}
                onError={(code) => (isGoneError(code) ? onFail?.() : setBlocked(true))}
                onAutoMuted={() => setMuted(true)}
              />
            </View>
          )}
          {!online && (
            <View style={[styles.overlay, styles.stalled]}>
              <Icon name="wifi-off" size={28} color="#fff" />
              <AppText variant="label">Vídeo precisa de internet</AppText>
              <AppText variant="caption" dim>Role para continuar estudando offline</AppText>
            </View>
          )}
          {mounted && !ready && !stalled && (
            <View style={styles.overlay}><ActivityIndicator color="#fff" /></View>
          )}
          {mounted && (blocked || (!ready && stalled)) && (
            <View style={[styles.overlay, styles.stalled]}>
              <AppText variant="label">{blocked ? "Não deu para tocar aqui" : "Vídeo demorando para carregar"}</AppText>
              <View style={styles.stalledActions}>
                <Bouncy onPress={watch} accessibilityLabel="Assistir no player do YouTube dentro do app">
                  <Glass style={styles.pill}><Icon name="play-circle-outline" size={16} color="#fff" /><AppText variant="caption">Assistir aqui</AppText></Glass>
                </Bouncy>
                <Bouncy onPress={retry} accessibilityLabel="Tentar de novo">
                  <Glass style={styles.pill}><Icon name="refresh" size={16} color="#fff" /><AppText variant="caption">Tentar de novo</AppText></Glass>
                </Bouncy>
              </View>
            </View>
          )}
          {online && (!mounted || (ready && !playing)) && (
            <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.overlay} pointerEvents="none">
              <View style={styles.play}><Icon name="play" size={36} color="#fff" /></View>
            </Animated.View>
          )}
          {/* Lessons are clips of longer classes: a small corner link opens the whole video in the app. The title and channel are in the card caption below. */}
          {!vertical && (
            <Bouncy onPress={watch} style={styles.fullLink} accessibilityLabel="Ver aula completa">
              <Glass style={styles.pill}><Icon name="youtube" size={16} color="#FF0033" /><AppText variant="caption">Aula completa</AppText></Glass>
            </Bouncy>
          )}
        </View>
      </View>
      {fast && active && (
        <Animated.View entering={FadeIn.duration(120)} exiting={FadeOut.duration(120)} style={styles.fast} pointerEvents="none">
          <Glass style={styles.pill}><Icon name="fast-forward" size={16} color="#fff" /><AppText variant="label">2×</AppText></Glass>
        </Animated.View>
      )}
      {active && (
        <Bouncy onPress={() => setMuted(!muted)} style={styles.mute} accessibilityLabel={muted ? "Ativar som" : "Silenciar"}>
          <Glass style={styles.muteInner}><Icon name={muted ? "volume-off" : "volume-high"} size={20} color="#fff" /></Glass>
        </Bouncy>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 140 },
  full: { ...StyleSheet.absoluteFill, alignItems: "center", justifyContent: "center", overflow: "hidden" },
  fullLink: { position: "absolute", right: 8, bottom: 8 },
  fast: { position: "absolute", top: 112, alignSelf: "center" },
  frame: { overflow: "hidden", backgroundColor: "#000" },
  overlay: { ...StyleSheet.absoluteFill, alignItems: "center", justifyContent: "center" },
  play: { width: 72, height: 72, borderRadius: 36, backgroundColor: "rgba(0,0,0,0.45)", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "rgba(255,255,255,0.25)" },
  stalled: { backgroundColor: "rgba(0,0,0,0.6)", gap: 12 },
  stalledActions: { flexDirection: "row", gap: 8 },
  pill: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 12, paddingVertical: 8, borderRadius: radius.pill },
  mute: { position: "absolute", top: 112, right: 16 },
  muteInner: { width: 42, height: 42, borderRadius: 21, alignItems: "center", justifyContent: "center" },
});
