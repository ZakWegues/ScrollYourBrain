import { describe, expect, it } from "@jest/globals";
import { CONTENT } from "@/feed/sources/library";
import type { MultiItem, OpenItem } from "@/feed/types";
import { gradeMulti, matchPoints, normalizeText } from "@/lib/grading";

const multis = CONTENT.filter((i): i is MultiItem => i.kind === "multi");
const opens = CONTENT.filter((i): i is OpenItem => i.kind === "open");

describe("marque todas as certas", () => {
  it("only the exact set is a hit, and partial answers are explained", () => {
    const item = { answers: [0, 2, 3] };
    expect(gradeMulti(item, [3, 0, 2])).toEqual({ ok: true, hits: 3, misses: 0, wrong: 0, total: 3 });
    expect(gradeMulti(item, [0, 2])).toMatchObject({ ok: false, hits: 2, misses: 1, wrong: 0 });
    expect(gradeMulti(item, [0, 1, 2, 3])).toMatchObject({ ok: false, hits: 3, misses: 0, wrong: 1 });
    expect(gradeMulti(item, [])).toMatchObject({ ok: false, hits: 0, misses: 3 });
  });

  it("every question is well formed and the count of right options varies", () => {
    expect(multis.length).toBeGreaterThanOrEqual(80);
    const counts = new Set<number>();
    for (const q of multis) {
      expect([q.id, q.options.length >= 4 && q.options.length <= 5]).toEqual([q.id, true]);
      expect([q.id, q.answers.length >= 2 && q.answers.length < q.options.length]).toEqual([q.id, true]);
      expect([q.id, new Set(q.answers).size === q.answers.length && q.answers.every((a) => a >= 0 && a < q.options.length)]).toEqual([q.id, true]);
      expect(new Set(q.options).size).toBe(q.options.length);
      counts.add(q.answers.length);
    }
    expect(counts.size).toBeGreaterThanOrEqual(2);
  });

  it("right options are not longer than the wrong ones", () => {
    let right = 0, wrong = 0, nr = 0, nw = 0;
    for (const q of multis)
      q.options.forEach((o, i) => {
        if (q.answers.includes(i)) (right += o.length), nr++;
        else (wrong += o.length), nw++;
      });
    expect(right / nr / (wrong / nw)).toBeLessThanOrEqual(1.15);
  });
});

describe("dissertativas", () => {
  it("finds key points ignoring accents, case and word endings", () => {
    const points = [
      { label: "evaporação", terms: ["evapor"] },
      { label: "condensação", terms: ["condens"] },
      { label: "sal fica", terms: ["sal fica", "resta"] },
    ];
    expect(matchPoints("A ÁGUA evapora e o vapor se condensa.", points)).toEqual([true, true, false]);
    expect(matchPoints("", points)).toEqual([false, false, false]);
    expect(normalizeText("Mitocôndria, ATP!")).toBe("mitocondria atp");
  });

  it("every question has a model answer that covers its own key points", () => {
    expect(opens.length).toBeGreaterThanOrEqual(30);
    for (const q of opens) {
      expect([q.id, q.points.length >= 2 && q.points.length <= 4]).toEqual([q.id, true]);
      for (const p of q.points)
        for (const t of p.terms) {
          const n = normalizeText(t);
          // Too-short terms would tick points by accident (numbers are fine).
          expect([q.id, t, n.length >= 3 || (n.length >= 1 && /\d/.test(n))]).toEqual([q.id, t, true]);
        }
      const hits = matchPoints(q.model, q.points);
      expect([q.id, hits.every(Boolean)]).toEqual([q.id, true]);
    }
  });

  it("a blank answer ticks nothing", () => {
    for (const q of opens) expect(matchPoints("", q.points).some(Boolean)).toBe(false);
  });
});
