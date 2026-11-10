import { describe, expect, it } from "@jest/globals";
import { countdownLabel, daysUntil, suggestedDaily } from "@/lib/planner";

const today = new Date("2026-11-10T09:00:00");

describe("planner", () => {
  it("counts whole days to the exam", () => {
    expect(daysUntil("2026-11-10", today)).toBe(0);
    expect(daysUntil("2026-11-17", today)).toBe(7);
    expect(daysUntil("2026-12-01", today)).toBe(21);
    expect(daysUntil("2026-11-09", today)).toBe(-1);
  });

  it("suggests a realistic daily load", () => {
    expect(suggestedDaily(30, 10)).toBe(6);
    expect(suggestedDaily(5, 30)).toBe(5);
    expect(suggestedDaily(400, 2)).toBe(40);
  });

  it("labels the countdown", () => {
    expect(countdownLabel(0)).toBe("é hoje!");
    expect(countdownLabel(1)).toBe("é amanhã");
    expect(countdownLabel(5)).toBe("faltam 5 dias");
    expect(countdownLabel(-2)).toBe("já passou");
  });
});
