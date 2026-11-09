export type PageId = string;

export interface StudyPage {
  id: PageId;
  name: string;
  handle: string;
  description: string;
  icon: string; // MaterialCommunityIcons name
  colors: readonly [string, string];
}

interface BaseItem {
  id: string;
  pageId: PageId;
  title: string;
  tags: string[];
}

export interface ConceptItem extends BaseItem {
  kind: "concept";
  /** Short beats revealed one by one, like scenes of a short video. */
  beats: string[];
  takeaway: string;
}

export interface QuizItem extends BaseItem {
  kind: "quiz";
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface FlashItem extends BaseItem {
  kind: "flash";
  front: string;
  back: string;
  hint?: string;
}

export interface VideoItem extends BaseItem {
  kind: "video";
  youtubeId: string;
  caption: string;
  start?: number;
}

export interface WikiItem extends BaseItem {
  kind: "wiki";
  extract: string;
  imageUrl?: string;
  url: string;
}

export type StudyItem = ConceptItem | QuizItem | FlashItem | VideoItem | WikiItem;
export type ItemKind = StudyItem["kind"];

/** An item placed in a feed; the same item may appear more than once with different keys. */
export interface FeedEntry {
  key: string;
  item: StudyItem;
}
