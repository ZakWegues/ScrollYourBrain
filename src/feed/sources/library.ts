import { CURRICULUM_ITEMS, TOPIC_BY_ID, TOPICS, type Serie } from "@/data/curriculum";
import { MACETES } from "@/data/macetes";
import type { StudyItem } from "@/feed/types";
import { SEED } from "./seed";

/** Every bundled card: general seed content, the high-school curriculum and exam tips. */
export const CONTENT: StudyItem[] = [...SEED, ...CURRICULUM_ITEMS, ...MACETES];

/** The default topics for a série: every topic of that year (all topics when no série is set). */
export const defaultTopics = (serie: Serie | null): string[] => TOPICS.filter((t) => !serie || t.serie === serie).map((t) => t.id);

/**
 * Bundled content for the feed: curriculum cards from the topics the student marked,
 * or from the chosen série when nothing was marked. Non-curriculum cards always stay.
 */
export function contentForStudent(serie: Serie | null, myTopics: readonly string[] | null): StudyItem[] {
  if (!myTopics) return contentForSerie(serie);
  const marked = new Set(myTopics);
  return CONTENT.filter((i) => !i.topicId || marked.has(i.topicId));
}

/** Bundled content for the feed: curriculum cards only from the chosen série (all when none is set). */
export function contentForSerie(serie: Serie | null): StudyItem[] {
  if (!serie) return CONTENT;
  return CONTENT.filter((i) => !i.topicId || TOPIC_BY_ID[i.topicId]?.serie === serie);
}
