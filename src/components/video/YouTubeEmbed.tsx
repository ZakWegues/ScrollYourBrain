import { useEffect, useRef, useState } from "react";
import { Linking, StyleSheet, View } from "react-native";
import WebView, { type WebViewMessageEvent } from "react-native-webview";
import { APP_ORIGIN, command, embedHtml, type EmbedMessage } from "@/lib/ytEmbed";
import type { YouTubeEmbedProps } from "./types";

/** YouTube IFrame API player in a WebView whose page has the app's https origin (see src/lib/ytEmbed.ts). */
export function YouTubeEmbed({ id, start, play, muted, rate = 1, loop = true, controls = false, mode = "direct", width, height, onReady, onState, onError, onAutoMuted }: YouTubeEmbedProps) {
  const web = useRef<WebView>(null);
  const [ready, setReady] = useState(false);
  // The page is built once per video; later changes go in as commands so the player is not reloaded.
  const [source] = useState(() => ({ html: embedHtml({ id, start, play, muted, loop, controls }, mode), baseUrl: APP_ORIGIN }));
  const run = (js: string) => web.current?.injectJavaScript(js);

  useEffect(() => {
    if (ready) web.current?.injectJavaScript(command(play ? "play" : "pause"));
  }, [ready, play]);
  useEffect(() => {
    if (ready) web.current?.injectJavaScript(command("mute", muted));
  }, [ready, muted]);
  useEffect(() => {
    if (ready) web.current?.injectJavaScript(command("rate", rate));
  }, [ready, rate]);

  const onMessage = (e: WebViewMessageEvent) => {
    let msg: EmbedMessage;
    try {
      msg = JSON.parse(e.nativeEvent.data);
    } catch {
      return;
    }
    if (msg.t === "ready") {
      setReady(true);
      if (rate !== 1) run(command("rate", rate));
      onReady?.();
    } else if (msg.t === "state") onState?.(msg.s);
    else if (msg.t === "error") onError?.(msg.code);
    else if (msg.t === "muted") onAutoMuted?.();
  };

  return (
    <View style={{ width, height }}>
      <WebView
        ref={web}
        source={source}
        originWhitelist={["*"]}
        style={styles.web}
        javaScriptEnabled
        domStorageEnabled
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        allowsFullscreenVideo={false}
        androidLayerType="hardware"
        scrollEnabled={false}
        bounces={false}
        overScrollMode="never"
        setSupportMultipleWindows={false}
        onMessage={onMessage}
        // Stay on the player page: links inside the embed (logo, title) open YouTube outside the app.
        onShouldStartLoadWithRequest={(req) => {
          if (req.url.startsWith(APP_ORIGIN) || req.url.startsWith("about:") || req.url.startsWith("data:") || req.isTopFrame === false) return true;
          Linking.openURL(req.url).catch(() => {});
          return false;
        }}
        onError={() => onError?.(-1)}
        onHttpError={(e) => {
          if (e.nativeEvent.url.startsWith(APP_ORIGIN)) onError?.(-1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  web: { flex: 1, backgroundColor: "#000" },
});
