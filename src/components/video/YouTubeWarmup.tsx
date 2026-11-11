import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";
import { CURATED_VIDEOS } from "@/feed/sources/youtube";
import { APP_ORIGIN, embedHtml } from "@/lib/ytEmbed";
import { useNetwork } from "@/store/network";
import { useSettings } from "@/store/settings";

const START_AFTER_MS = 2000;
const GIVE_UP_MS = 15000;

/**
 * Loads one paused, invisible player shortly after the app opens. The WebView cache is shared by the
 * whole app, so DNS, TLS and YouTube's player code are ready before the first video card shows up.
 * It goes away as soon as the player is ready (or after 15 s). Skipped offline and with data saver.
 */
export function YouTubeWarmup() {
  const online = useNetwork((s) => s.online);
  const dataSaver = useSettings((s) => s.dataSaver);
  const [phase, setPhase] = useState<"wait" | "load" | "done">("wait");
  useEffect(() => {
    if (phase === "done") return;
    const id = setTimeout(() => setPhase((p) => (p === "wait" ? "load" : "done")), phase === "wait" ? START_AFTER_MS : GIVE_UP_MS);
    return () => clearTimeout(id);
  }, [phase]);
  const [source] = useState(() => {
    const first = CURATED_VIDEOS.find((v) => v.vertical) ?? CURATED_VIDEOS[0];
    return first ? { html: embedHtml({ id: first.youtubeId, play: false, muted: true }), baseUrl: APP_ORIGIN } : null;
  });
  if (phase !== "load" || !online || dataSaver || !source) return null;
  return (
    <View style={styles.hidden} pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <WebView
        source={source}
        originWhitelist={["*"]}
        javaScriptEnabled
        domStorageEnabled
        mediaPlaybackRequiresUserAction
        onMessage={(e) => {
          if (e.nativeEvent.data.includes('"ready"')) setPhase("done");
        }}
        onShouldStartLoadWithRequest={(req) => req.url.startsWith(APP_ORIGIN) || req.url.startsWith("about:") || req.isTopFrame === false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hidden: { position: "absolute", width: 1, height: 1, opacity: 0, left: -10, top: -10, overflow: "hidden" },
});
