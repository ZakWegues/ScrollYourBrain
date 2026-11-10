import { describe, expect, it } from "@jest/globals";
import { ACHIEVEMENTS, newlyUnlocked, type AchievementStats } from "@/lib/achievements";
import { missionsFor, weekDays, weekKey } from "@/lib/challenges";
import { bump, formatDuration, heatmap, summarize, type ActivityLog } from "@/lib/stats";

const today = new Date("2026-11-11T12:00:00"); // a Wednesday

describe("activity log", () => {
  it("adds day and topic counters", () => {
    let log: ActivityLog = {};
    log = bump(log, "2026-11-11", "fisica", { studied: 1, seconds: 30 });
    log = bump(log, "2026-11-11", "fisica", { answered: 1, correct: 1 });
    log = bump(log, "2026-11-11", undefined, { reviews: 2 });
    expect(log["2026-11-11"]).toMatchObject({ studied: 1, seconds: 30, answered: 1, correct: 1, reviews: 2 });
    expect(log["2026-11-11"].topics.fisica).toEqual({ studied: 1, answered: 1, correct: 1, seconds: 30 });
  });

  it("summarizes a range with accuracy and topics sorted by time", () => {
    let log: ActivityLog = {};
    log = bump(log, "2026-11-10", "quimica", { studied: 2, seconds: 60, answered: 4, correct: 3 });
    log = bump(log, "2026-11-11", "fisica", { studied: 5, seconds: 300 });
    log = bump(log, "2026-10-01", "fisica", { studied: 9 });
    const week = summarize(log, 7, today);
    expect(week.studied).toBe(7);
    expect(week.activeDays).toBe(2);
    expect(week.accuracy).toBe(75);
    expect(week.topics.map((t) => t.pageId)).toEqual(["fisica", "quimica"]);
    expect(week.daily).toHaveLength(7);
    expect(summarize(log, null, today).studied).toBe(16);
  });

  it("builds a Monday-first heatmap without future days", () => {
    const grid = heatmap({}, 4, today);
    expect(grid).toHaveLength(4);
    expect(grid[3][0]?.key).toBe("2026-11-09");
    expect(grid[3][2]?.key).toBe("2026-11-11");
    expect(grid[3][3]).toBeNull();
  });

  it("formats durations", () => {
    expect(formatDuration(42)).toBe("42 s");
    expect(formatDuration(600)).toBe("10 min");
    expect(formatDuration(3900)).toBe("1 h 05 min");
  });
});

describe("weekly challenges", () => {
  it("keys weeks by Monday", () => {
    expect(weekKey(today)).toBe("2026-11-09");
    expect(weekKey(new Date("2026-11-15T12:00:00"))).toBe("2026-11-09");
    expect(weekDays("2026-11-09")).toHaveLength(7);
  });

  it("picks three distinct, stable missions per week", () => {
    const a = missionsFor("2026-11-09");
    expect(a).toHaveLength(3);
    expect(new Set(a.map((m) => m.id.split("-")[0])).size).toBe(3);
    expect(missionsFor("2026-11-09").map((m) => m.id)).toEqual(a.map((m) => m.id));
  });

  it("measures progress from the log", () => {
    const week = weekDays("2026-11-09");
    let log: ActivityLog = {};
    log = bump(log, "2026-11-10", "geografia", { studied: 30, correct: 12 });
    for (const m of missionsFor("2026-11-09")) expect(m.measure(log, { "2026-11-10": 30 }, 10, week)).toBeGreaterThanOrEqual(0);
  });
});

describe("achievements", () => {
  const zero: AchievementStats = { studied: 0, bestStreak: 0, goalDays: 0, exams: 0, perfectExam: false, correct: 0, reviews: 0, notebooks: 0, notes: 0, imported: 0, topicsStudied: 0, focus: 0, challenges: 0, minutes: 0 };
  it("unlocks only what is reached and not yet unlocked", () => {
    expect(newlyUnlocked(zero, {})).toEqual([]);
    const ids = newlyUnlocked({ ...zero, studied: 120, bestStreak: 3 }, { "first-card": 1 }).map((a) => a.id);
    expect(ids).toEqual(["cards-100", "streak-3"]);
  });
  it("have unique ids", () => {
    expect(new Set(ACHIEVEMENTS.map((a) => a.id)).size).toBe(ACHIEVEMENTS.length);
  });
});
