import type { StudyItem } from "@/feed/types";

export interface CardProps<T extends StudyItem = StudyItem> {
  item: T;
  /** True while this card is the one on screen. */
  active: boolean;
  /** The card is next in line: load what is slow (videos) without starting it. */
  preload?: boolean;
  height: number;
  /** Increments on every single tap on the card body. */
  tapNonce: number;
  /** True while the user holds the card (videos play at 2×). */
  fast?: boolean;
  /** Called when the card cannot be shown (e.g. a video that fails to load). */
  onFail?: () => void;
  /** Called when the user really engaged with the card (answered, flipped, watched to the end). */
  onStudied?: () => void;
}
