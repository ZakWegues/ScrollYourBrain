import { describe, expect, it } from "@jest/globals";
import { writeFileSync } from "node:fs";
import { rootOf } from "@/data/pages";
import { CONTENT } from "@/feed/sources/library";
import { createRng, generateFor } from "@/feed/sources/generators";
import { ACCOUNT_GENERATORS } from "@/feed/sources/generators-accounts";
import type { QuizItem } from "@/feed/types";

/**
 * Real exams don't give the answer away by its size. These checks keep the written questions honest:
 * the right option must not be, more often than chance, the longest one or the one with more words.
 */
const words = (s: string) => s.trim().split(/\s+/).length;
const quizzes = CONTENT.filter((i): i is QuizItem => i.kind === "quiz" && i.options.length >= 3);

function measure(list: QuizItem[]) {
  let longest = 0, shortest = 0, mostWords = 0, ratio = 0;
  for (const q of list) {
    const right = q.options[q.answer];
    const others = q.options.filter((_, i) => i !== q.answer);
    if (right.length > Math.max(...others.map((o) => o.length))) longest++;
    if (right.length < Math.min(...others.map((o) => o.length))) shortest++;
    if (words(right) > Math.max(...others.map(words))) mostWords++;
    ratio += right.length / (others.reduce((a, o) => a + o.length, 0) / others.length);
  }
  const n = list.length || 1;
  return { n: list.length, longest: longest / n, shortest: shortest / n, mostWords: mostWords / n, ratio: ratio / n };
}

// QUIZ_AUDIT=/path/out.json npx jest quizBias  → writes the questions that still give the answer away.
if (process.env.QUIZ_AUDIT) {
  const bad = quizzes
    .map((q) => {
      const others = q.options.filter((_, i) => i !== q.answer);
      const r = q.options[q.answer].length / (others.reduce((a, o) => a + o.length, 0) / others.length);
      return { id: q.id, page: q.pageId, question: q.question, options: q.options, answer: q.answer, r: Math.round(r * 100) / 100, longest: q.options[q.answer].length > Math.max(...others.map((o) => o.length)) };
    })
    .filter((x) => x.longest && x.r > 1.15)
    .sort((a, b) => b.r - a.r);
  writeFileSync(process.env.QUIZ_AUDIT, JSON.stringify(bad, null, 1));
}

describe("answer length gives nothing away", () => {
  it("overall: the right option is not usually the longest or the wordiest", () => {
    const m = measure(quizzes);
    expect(m.longest).toBeLessThanOrEqual(0.35);
    // …and not the shortest either (the reverse giveaway).
    expect(m.shortest).toBeLessThanOrEqual(0.35);
    expect(m.mostWords).toBeLessThanOrEqual(0.35);
    expect(m.ratio).toBeGreaterThanOrEqual(0.85);
    expect(m.ratio).toBeLessThanOrEqual(1.15);
  });

  it("in every subject", () => {
    const bySubject = new Map<string, QuizItem[]>();
    for (const q of quizzes) bySubject.set(rootOf(q.pageId), [...(bySubject.get(rootOf(q.pageId)) ?? []), q]);
    for (const [subject, list] of bySubject) {
      if (list.length < 15) continue;
      const m = measure(list);
      expect([subject, m.longest <= 0.4, m.ratio <= 1.2]).toEqual([subject, true, true]);
    }
  });

  it("in generated questions too", () => {
    const rng = createRng(5);
    const gen: QuizItem[] = [];
    for (const page of Object.keys(ACCOUNT_GENERATORS))
      for (let i = 0; i < 60; i++) {
        const it = generateFor(page, rng);
        if (it.kind === "quiz") gen.push(it);
      }
    const m = measure(gen);
    expect(m.longest).toBeLessThanOrEqual(0.4);
    expect(m.ratio).toBeLessThanOrEqual(1.2);
  });
});

