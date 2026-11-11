import { describe, expect, it } from "@jest/globals";
import { autoThemeAt } from "@/lib/autoTheme";
import { createRng } from "@/feed/sources/generators";
import { CONTENT } from "@/feed/sources/library";
import type { QuizItem } from "@/feed/types";
import { dailyQuestion, dailyStreak } from "@/lib/daily";
import { finalPlan } from "@/lib/finalPlan";
import type { ActivityLog } from "@/lib/stats";
import { weakAccounts, weakPool } from "@/lib/weak";

const day = (studied: number, topics: Record<string, { answered: number; correct: number }>) => ({
  studied, answered: 0, correct: 0, seconds: 0, reviews: 0, exams: 0, focus: 0,
  topics: Object.fromEntries(Object.entries(topics).map(([k, v]) => [k, { studied: 1, seconds: 0, ...v }])),
});

describe("weak points", () => {
  const log: ActivityLog = { "2026-11-10": day(5, { funcoes: { answered: 10, correct: 3 }, genetica: { answered: 10, correct: 9 }, optica: { answered: 2, correct: 0 } }) };

  it("ranks accounts by accuracy, ignoring ones with too few answers or already strong", () => {
    expect(weakAccounts(log)).toEqual(["funcoes"]);
  });

  it("mixes pending mistakes with questions from weak accounts", () => {
    const mistakes = CONTENT.filter((i): i is QuizItem => i.kind === "quiz" && i.pageId === "genetica").slice(0, 3);
    const pool = weakPool({ log, mistakes, content: CONTENT, count: 12, rng: createRng(3) });
    expect(pool).toHaveLength(12);
    expect(new Set(pool.map((q) => q.id)).size).toBe(12);
    expect(mistakes.every((m) => pool.some((q) => q.id === m.id))).toBe(true);
    expect(pool.filter((q) => q.pageId === "funcoes").length).toBeGreaterThanOrEqual(9);
  });
});

describe("daily question", () => {
  it("is stable for a day and changes across days", () => {
    const a = dailyQuestion("2026-11-11", CONTENT);
    expect(a).not.toBeNull();
    expect(dailyQuestion("2026-11-11", CONTENT)?.id).toBe(a?.id);
    const week = new Set(["11", "12", "13", "14", "15", "16", "17"].map((d) => dailyQuestion(`2026-11-${d}`, CONTENT)?.id));
    expect(week.size).toBeGreaterThan(4);
  });

  it("counts consecutive answered days", () => {
    const today = new Date("2026-11-11T12:00:00");
    expect(dailyStreak({ "2026-11-11": 1, "2026-11-10": 1, "2026-11-08": 1 }, today)).toBe(2);
    expect(dailyStreak({ "2026-11-10": 1, "2026-11-09": 1 }, today)).toBe(2);
    expect(dailyStreak({}, today)).toBe(0);
  });
});

describe("final week plan", () => {
  it("lays out 7 days before the exam and drops past ones", () => {
    const plan = finalPlan("ex1", "2026-11-20", new Date("2026-11-11T09:00:00"));
    expect(plan.map((t) => t.before)).toEqual([7, 6, 5, 4, 3, 2, 1]);
    expect(plan[0].day).toBe("2026-11-13");
    expect(plan.at(-1)?.action).toBe("macetes");
    const late = finalPlan("ex1", "2026-11-14", new Date("2026-11-11T09:00:00"));
    expect(late.map((t) => t.before)).toEqual([3, 2, 1]);
  });
});

describe("automatic theme", () => {
  it("is light during the day and the chosen dark theme at night", () => {
    expect(autoThemeAt(12, 7, 19, "espaco", "claro")).toBe("claro");
    expect(autoThemeAt(7, 7, 19, "espaco", "claro")).toBe("claro");
    expect(autoThemeAt(19, 7, 19, "espaco", "claro")).toBe("espaco");
    expect(autoThemeAt(3, 7, 19, "aurora", "claro")).toBe("aurora");
  });
});
