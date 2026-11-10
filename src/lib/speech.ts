import * as Speech from "expo-speech";
import type { StudyItem } from "@/feed/types";

const LETTERS = ["A", "B", "C", "D"];

/** What to read aloud for a card. Flashcards read the back only once flipped. */
export function speechText(item: StudyItem, flipped = false): string {
  switch (item.kind) {
    case "concept": return [item.title, ...item.beats, item.takeaway].join(". ");
    case "quiz": return [item.question, ...item.options.map((o, i) => `${LETTERS[i]}: ${o}`)].join(". ");
    case "flash": return flipped ? `Resposta: ${item.back}` : item.front;
    case "video": return `${item.title}. ${item.caption}`;
    case "wiki": return `${item.title}. ${item.extract}`;
  }
}

export function speak(text: string, events: { onStart?: () => void; onDone?: () => void } = {}) {
  Speech.stop();
  const { onStart, onDone } = events;
  Speech.speak(text, { language: "pt-BR", rate: 1.0, onStart, onDone, onStopped: onDone, onError: onDone });
}

export const stopSpeaking = () => Speech.stop();
