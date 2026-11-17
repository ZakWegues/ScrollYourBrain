import { describe, expect, it } from "@jest/globals";
import { SUB_PAGES } from "@/data/pages";
import { nextItems, SEEN_WEIGHT } from "@/feed/engine";
import { createRng } from "@/feed/sources/generators";
import { SURVIVAL_LIVES, survivalSeconds, survivalStage } from "@/feed/survival";
import type { QuizItem } from "@/feed/types";
import { bump, type ActivityLog } from "@/lib/stats";
import { accountTotals, leastKnownAccount, missionsDone, nextMission, planToday, type TodayInput } from "@/lib/today";
import { MASTERY_LEVELS, masteryLevel, masteryName } from "@/lib/xp";

const TODAY = "2026-11-17";
const base = (over: Partial<TodayInput> = {}): TodayInput => ({
  due: 0, reviewsToday: 0, pendingMistakes: 0, fixedToday: 0, dailyAnswered: false, goal: 10, studiedToday: 0,
  weak: [], interests: ["biologia"], log: {}, today: TODAY, ...over,
});

describe("planToday", () => {
  it("always gives three missions: memory, focus and the goal", () => {
    const m = planToday(base());
    expect(m).toHaveLength(3);
    expect(m.map((x) => x.kind)).toEqual(["daily", "explore", "goal"]);
  });

  it("puts due reviews first and tracks reviews done today", () => {
    const [review] = planToday(base({ due: 4, reviewsToday: 2 }));
    expect(review).toMatchObject({ kind: "review", done: 2, total: 6, route: { pathname: "/review" } });
    expect(review.title).toBe("Revisar 4 cards");
  });

  it("offers the mistakes notebook when nothing is due", () => {
    const [m] = planToday(base({ pendingMistakes: 9, fixedToday: 1 }));
    expect(m).toMatchObject({ kind: "mistakes", done: 1, total: 5 });
  });

  it("an exam within two weeks becomes the focus; in the last week it opens the final plan", () => {
    const soon = planToday(base({ nextExam: { id: "e1", title: "Bio", days: 5, pageIds: ["biologia"] } }))[1];
    expect(soon.kind).toBe("exam");
    expect(soon.route).toEqual({ pathname: "/final", params: { exam: "e1" } });
    const later = planToday(base({ nextExam: { id: "e1", title: "Bio", days: 12, pageIds: ["biologia"] } }))[1];
    expect(later.route.pathname).toBe("/lesson");
    const far = planToday(base({ nextExam: { id: "e1", title: "Bio", days: 40, pageIds: ["biologia"] }, weak: ["genetica"] }))[1];
    expect(far.kind).toBe("weak");
  });

  it("exam progress counts answers on any account of the exam's subjects", () => {
    let log: ActivityLog = {};
    log = bump(log, TODAY, "genetica", { answered: 4, correct: 3 });
    log = bump(log, TODAY, "funcoes", { answered: 9, correct: 9 });
    const exam = planToday(base({ log, nextExam: { id: "e", title: "Bio", days: 3, pageIds: ["biologia"] } }))[1];
    expect(exam.done).toBe(4);
  });

  it("the weak mission counts today's answers on that account", () => {
    let log: ActivityLog = {};
    log = bump(log, "2026-11-10", "genetica", { answered: 10, correct: 3 });
    log = bump(log, TODAY, "genetica", { answered: 3, correct: 2 });
    const weak = planToday(base({ log, weak: ["genetica"] }))[1];
    expect(weak).toMatchObject({ kind: "weak", done: 3, total: 8 });
    expect(weak.detail).toMatch(/38% de acerto/);
  });

  it("the goal mission completes with the daily goal", () => {
    const goal = planToday(base({ studiedToday: 12 }))[2];
    expect(goal).toMatchObject({ done: 10, total: 10, title: "Meta batida!" });
  });

  it("counts finished missions and finds the next one", () => {
    const m = planToday(base({ dailyAnswered: true, studiedToday: 10 }));
    expect(missionsDone(m)).toBe(2);
    expect(nextMission(m)?.kind).toBe("explore");
  });

  it("explore suggests an account of the student's subjects they have not studied", () => {
    const totals = accountTotals(bump({}, TODAY, "genetica", { answered: 20, correct: 18, studied: 30 }));
    const id = leastKnownAccount(["biologia"], totals, TODAY)!;
    expect(SUB_PAGES.find((p) => p.id === id)?.parent).toBe("biologia");
    expect(id).not.toBe("genetica");
    // Stable for the day.
    expect(leastKnownAccount(["biologia"], totals, TODAY)).toBe(id);
  });
});

describe("mastery levels", () => {
  it("has five named levels on fixed thresholds", () => {
    expect(MASTERY_LEVELS).toHaveLength(5);
    expect([0, 19, 20, 59, 60, 80, 100].map(masteryLevel)).toEqual([0, 0, 1, 2, 3, 4, 4]);
    expect(masteryName(85)).toBe("Craque");
  });
});

describe("survival", () => {
  it("starts with 3 lives and 20 s, loses a second every 3 right answers, never below 7 s", () => {
    expect(SURVIVAL_LIVES).toBe(3);
    expect([0, 2, 3, 6, 30, 100].map(survivalSeconds)).toEqual([20, 20, 19, 18, 10, 7]);
    expect(survivalStage(0)).toBe("Aquecendo");
    expect(survivalStage(40)).toBe("Lendário");
  });
});

describe("new cards first", () => {
  const quiz = (id: string): QuizItem => ({ id, kind: "quiz", pageId: "genetica", title: "t", tags: [], question: "?", options: ["a", "b", "c", "d"], answer: 0, explanation: "x" });
  it("prefers cards never seen and almost never repeats mastered ones", () => {
    const pool = Array.from({ length: 200 }, (_, i) => quiz(`s${i}`));
    const seen: Record<string, number> = {};
    for (let i = 0; i < 100; i++) seen[`s${i}`] = 3;
    const rng = createRng(7);
    let fresh = 0;
    let total = 0;
    for (let round = 0; round < 30; round++) {
      const items = nextItems(5, { pool, rng, seen, pages: ["genetica"], state: { recent: [], kinds: [] }, signals: { followed: new Set(), interests: new Set(), pageLikes: {}, pageSkips: {} } });
      for (const it of items) if (it.id.startsWith("s")) { total++; if (!seen[it.id]) fresh++; }
    }
    expect(SEEN_WEIGHT[0]).toBeGreaterThan(SEEN_WEIGHT[3]);
    expect(fresh / total).toBeGreaterThan(0.85);
  });
});
