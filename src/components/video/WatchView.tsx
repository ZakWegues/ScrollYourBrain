import { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

const ALLOWED = /^https:\/\/([\w-]+\.)*(youtube\.com|youtu\.be|google\.com|googlevideo\.com|gstatic\.com|ytimg\.com)\//;

/** YouTube's own mobile page inside the app. Links to the YouTube app (intent://) are ignored. */
export function WatchView({ url }: { url: string }) {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.wrap}>
      <WebView
        source={{ uri: url }}
        style={styles.web}
        javaScriptEnabled
        domStorageEnabled
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        allowsFullscreenVideo
        setSupportMultipleWindows={false}
        onLoadEnd={() => setLoading(false)}
        onShouldStartLoadWithRequest={(req) => ALLOWED.test(req.url) || req.url.startsWith("about:") || req.url.startsWith("blob:")}
      />
      {loading && (
        <View style={styles.loading} pointerEvents="none">
          <ActivityIndicator color="#fff" size="large" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: "#000" },
  web: { flex: 1, backgroundColor: "#000" },
  loading: { ...StyleSheet.absoluteFill, alignItems: "center", justifyContent: "center" },
});
