import type { StudyItem } from "@/feed/types";

/** Small string hash (FNV-1a) used as a stable seed. */
const hash = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
};

/**
 * Hand-written questions tend to put the right answer in the same slot (it was "B" in about 70% of them).
 * This shuffles each quiz's options once, in place, with a seed taken from the item id, so the order is
 * the same every time the card shows up and the answer index still points at the right option.
 */
/** A random-looking but repeatable order of `n` option indexes for a seed string. */
export function optionOrder(n: number, seedText: string): number[] {
  let seed = hash(seedText) || 1;
  const next = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 2 ** 32;
  };
  const order = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

export function shuffleAnswers<T extends StudyItem>(items: T[]): T[] {
  for (const item of items) {
    if (item.kind !== "quiz" || item.options.length < 2) continue;
    const order = optionOrder(item.options.length, item.id);
    const right = item.options[item.answer];
    item.options = order.map((i) => item.options[i]);
    item.answer = item.options.indexOf(right);
  }
  return items;
}
