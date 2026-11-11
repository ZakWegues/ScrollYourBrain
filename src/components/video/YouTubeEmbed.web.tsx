import { createElement, useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { embedHtml, type EmbedMessage } from "@/lib/ytEmbed";
import type { YouTubeEmbedProps } from "./types";

type Frame = HTMLIFrameElement & { contentWindow: (Window & { __cmd?: (c: string, a?: unknown) => void }) | null };

/** Web build: the same player page in a same-origin srcdoc iframe. */
export function YouTubeEmbed({ id, start, play, muted, rate = 1, loop = true, controls = false, width, height, onReady, onState, onError, onAutoMuted }: YouTubeEmbedProps) {
  const frame = useRef<Frame | null>(null);
  const [ready, setReady] = useState(false);
  const [html] = useState(() => embedHtml({ id, start, play, muted, loop, controls }));
  const handlers = useRef({ onReady, onState, onError, onAutoMuted });
  useEffect(() => {
    handlers.current = { onReady, onState, onError, onAutoMuted };
  });

  useEffect(() => {
    const listen = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow || typeof e.data?.__syb !== "string") return;
      const msg = JSON.parse(e.data.__syb) as EmbedMessage;
      const h = handlers.current;
      if (msg.t === "ready") {
        setReady(true);
        h.onReady?.();
      } else if (msg.t === "state") h.onState?.(msg.s);
      else if (msg.t === "error") h.onError?.(msg.code);
      else if (msg.t === "muted") h.onAutoMuted?.();
    };
    window.addEventListener("message", listen);
    return () => window.removeEventListener("message", listen);
  }, []);

  const cmd = (c: string, a?: unknown) => frame.current?.contentWindow?.__cmd?.(c, a);
  useEffect(() => {
    if (ready) cmd(play ? "play" : "pause");
  }, [ready, play]);
  useEffect(() => {
    if (ready) cmd("mute", muted);
  }, [ready, muted]);
  useEffect(() => {
    if (ready) cmd("rate", rate);
  }, [ready, rate]);

  return (
    <View style={{ width, height }}>
      {createElement("iframe", {
        ref: frame,
        srcDoc: html,
        allow: "autoplay; encrypted-media; picture-in-picture",
        style: { width: "100%", height: "100%", border: 0, background: "#000" },
        title: "Vídeo do YouTube",
      })}
    </View>
  );
}
