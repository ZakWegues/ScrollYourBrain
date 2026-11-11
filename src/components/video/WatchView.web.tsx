import { createElement } from "react";
import { View } from "react-native";

/** Web build: YouTube's regular embed with its own controls. */
export function WatchView({ url }: { url: string }) {
  const id = url.match(/(?:shorts\/|v=)([\w-]{11})/)?.[1] ?? "";
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {createElement("iframe", {
        src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0`,
        allow: "autoplay; encrypted-media; fullscreen; picture-in-picture",
        allowFullScreen: true,
        style: { width: "100%", height: "100%", border: 0 },
        title: "Vídeo do YouTube",
      })}
    </View>
  );
}
