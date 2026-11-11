import { describe, expect, it } from "@jest/globals";
import { CONTENT } from "@/feed/sources/library";
import type { QuizItem } from "@/feed/types";
import { optionOrder, shuffleAnswers } from "@/lib/shuffle";

describe("answer positions", () => {
  it("spreads the right answer evenly across A, B, C and D in the bundled questions", () => {
    const quizzes = CONTENT.filter((i): i is QuizItem => i.kind === "quiz" && i.options.length === 4);
    const count = [0, 0, 0, 0];
    for (const q of quizzes) count[q.answer]++;
    for (const n of count) {
      expect(n / quizzes.length).toBeGreaterThan(0.18);
      expect(n / quizzes.length).toBeLessThan(0.32);
    }
  });

  it("keeps the right answer when shuffling", () => {
    const q: QuizItem = { id: "t1", kind: "quiz", pageId: "funcoes", title: "t", tags: [], question: "?", options: ["a", "b", "c", "d"], answer: 1, explanation: "" };
    shuffleAnswers([q]);
    expect(q.options[q.answer]).toBe("b");
    expect([...q.options].sort()).toEqual(["a", "b", "c", "d"]);
  });

  it("gives a full permutation that changes with the seed", () => {
    const seen = new Set<string>();
    for (let s = 0; s < 60; s++) {
      const o = optionOrder(4, `q:${s}`);
      expect([...o].sort()).toEqual([0, 1, 2, 3]);
      seen.add(o.join(""));
    }
    expect(seen.size).toBeGreaterThan(12);
  });
});
