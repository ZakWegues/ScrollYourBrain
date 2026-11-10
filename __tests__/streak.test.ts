import { describe, expect, it } from "@jest/globals";
import { currentStreak, dayKey, lastNDays } from "@/lib/streak";

const d = (s: string) => new Date(`${s}T12:00:00`);

describe("dayKey", () => {
  it("uses the local calendar date", () => {
    expect(dayKey(new Date(2026, 0, 5, 23, 59))).toBe("2026-01-05");
  });
});

describe("currentStreak", () => {
  const goal = 5;
  it("counts consecutive days that hit the goal, ending today", () => {
    const days = { "2026-11-08": 5, "2026-11-09": 7, "2026-11-10": 5 };
    expect(currentStreak(days, goal, d("2026-11-10"))).toBe(3);
  });

  it("stays alive through today when yesterday counted", () => {
    const days = { "2026-11-08": 5, "2026-11-09": 6, "2026-11-10": 2 };
    expect(currentStreak(days, goal, d("2026-11-10"))).toBe(2);
  });

  it("breaks on a day below the goal", () => {
    const days = { "2026-11-07": 9, "2026-11-08": 1, "2026-11-09": 6 };
    expect(currentStreak(days, goal, d("2026-11-10"))).toBe(1);
  });

  it("is zero when neither today nor yesterday counted", () => {
    expect(currentStreak({ "2026-11-07": 9 }, goal, d("2026-11-10"))).toBe(0);
  });

  it("crosses month boundaries", () => {
    const days = { "2026-10-31": 5, "2026-11-01": 5 };
    expect(currentStreak(days, goal, d("2026-11-01"))).toBe(2);
  });
});

describe("lastNDays", () => {
  it("returns n days oldest first, ending today", () => {
    const week = lastNDays({ "2026-11-10": 3 }, 7, d("2026-11-10"));
    expect(week).toHaveLength(7);
    expect(week[6]).toMatchObject({ key: "2026-11-10", count: 3, isToday: true });
    expect(week[0].key).toBe("2026-11-04");
  });
});
