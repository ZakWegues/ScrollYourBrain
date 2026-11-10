import type { StudyItem } from "@/feed/types";

export interface CardProps<T extends StudyItem = StudyItem> {
  item: T;
  /** True while this card is the one on screen. */
  active: boolean;
  height: number;
  /** Increments on every single tap on the card body. */
  tapNonce: number;
  /** Called when the card cannot be shown (e.g. a video that fails to load). */
  onFail?: () => void;
  /** Called when the user really engaged with the card (answered, flipped, watched to the end). */
  onStudied?: () => void;
}
