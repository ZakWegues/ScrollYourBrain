export interface YouTubeEmbedProps {
  id: string;
  start?: number;
  play: boolean;
  muted: boolean;
  /** Playback speed (2 while holding the card). */
  rate?: number;
  loop?: boolean;
  controls?: boolean;
  /** "direct" (default, faster) or "api" (the IFrame API, used when retrying). */
  mode?: "direct" | "api";
  width: number;
  height: number;
  onReady?: () => void;
  /** IFrame API state: 1 playing, 2 paused, 0 ended, 3 buffering. */
  onState?: (state: number) => void;
  /** IFrame API error code, or -1 when the page or the API script could not load. */
  onError?: (code: number) => void;
  /** The device refused to start with sound, so the video started muted. */
  onAutoMuted?: () => void;
}
