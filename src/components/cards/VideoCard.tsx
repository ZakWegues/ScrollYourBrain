import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { ActivityIndicator, Linking, StyleSheet, View, useWindowDimensions } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import YoutubePlayer, { PLAYER_STATES } from "react-native-youtube-iframe";
import type { VideoItem } from "@/feed/types";
import { youtubeThumb } from "@/feed/sources/youtube";
import { AppText, Bouncy, Glass, Icon } from "@/components/ui";
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
    if (!mounted || ready) return;
    const id = setTimeout(() => setStalled(true), 12_000);
    return () => clearTimeout(id);
  }, [mounted, ready, attempt]);

  return (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: c.bg }]}>
      <Image source={youtubeThumb(item.youtubeId)} style={StyleSheet.absoluteFill} contentFit="cover" blurRadius={40} transition={200} />
      <View style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(0,0,0,0.55)" }]} />
      <View style={vertical ? styles.full : styles.center}>
        <View style={[styles.frame, { width: playerW, height: playerH }]}>
          <Image source={youtubeThumb(item.youtubeId)} style={StyleSheet.absoluteFill} contentFit="cover" transition={200} />
          {mounted && (
            <View style={StyleSheet.absoluteFill} pointerEvents="none">
              <YoutubePlayer
                key={attempt}
                height={playerH}
                width={playerW}
                videoId={item.youtubeId}
                play={playing}
                mute={muted}
                playbackRate={fast ? 2 : 1}
                forceAndroidAutoplay
                initialPlayerParams={{ controls: false, modestbranding: true, rel: false, loop: true, preventFullScreen: true, start: item.start }}
                webViewProps={{ allowsInlineMediaPlayback: true, mediaPlaybackRequiresUserAction: false, androidLayerType: "hardware" }}
                onReady={() => setReady(true)}
                onError={() => onFail?.()}
                onChangeState={(s: string) => {
                  if (s === PLAYER_STATES.ENDED) setPlaying(false);
                }}
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
          {mounted && !ready && stalled && (
            <View style={[styles.overlay, styles.stalled]}>
              <AppText variant="label">Vídeo demorando para carregar</AppText>
              <View style={styles.stalledActions}>
                <Bouncy onPress={() => { setStalled(false); setAttempt((a) => a + 1); }} accessibilityLabel="Tentar de novo">
                  <Glass style={styles.pill}><Icon name="refresh" size={16} color="#fff" /><AppText variant="caption">Tentar de novo</AppText></Glass>
                </Bouncy>
                <Bouncy onPress={() => Linking.openURL(`https://youtu.be/${item.youtubeId}`)} accessibilityLabel="Abrir no YouTube">
                  <Glass style={styles.pill}><Icon name="youtube" size={16} color="#fff" /><AppText variant="caption">Abrir no YouTube</AppText></Glass>
                </Bouncy>
              </View>
            </View>
          )}
          {online && (!mounted || (ready && !playing)) && (
            <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.overlay} pointerEvents="none">
              <View style={styles.play}><Icon name="play" size={36} color="#fff" /></View>
            </Animated.View>
          )}
          {/* Lessons are clips of longer classes: a small corner link opens the whole video. The title and channel are in the card caption below. */}
          {!vertical && (
            <Bouncy onPress={() => Linking.openURL(`https://youtu.be/${item.youtubeId}`)} style={styles.fullLink} accessibilityLabel="Ver aula completa no YouTube">
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
