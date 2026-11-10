import { CURRICULUM_ITEMS, TOPIC_BY_ID, type Serie } from "@/data/curriculum";
import { MACETES } from "@/data/macetes";
import type { StudyItem } from "@/feed/types";
import { SEED } from "./seed";

/** Every bundled card: general seed content, the high-school curriculum and exam tips. */
export const CONTENT: StudyItem[] = [...SEED, ...CURRICULUM_ITEMS, ...MACETES];

/** Bundled content for the feed: curriculum cards only from the chosen série (all when none is set). */
export function contentForSerie(serie: Serie | null): StudyItem[] {
  if (!serie) return CONTENT;
  return CONTENT.filter((i) => !i.topicId || TOPIC_BY_ID[i.topicId]?.serie === serie);
}
