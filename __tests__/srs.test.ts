import { describe, expect, it } from "@jest/globals";
import { isDue, newSrs, nextLabel, schedule } from "@/lib/srs";

const today = new Date("2026-11-10T12:00:00");

describe("schedule", () => {
  it("brings a new card back tomorrow after 'good', then in 3 days", () => {
    const s1 = schedule(newSrs(today), "good", today);
    expect(s1.interval).toBe(1);
    expect(s1.due).toBe("2026-11-11");
    const s2 = schedule(s1, "good", new Date("2026-11-11T12:00:00"));
    expect(s2.interval).toBe(3);
    expect(s2.due).toBe("2026-11-14");
  });

  it("grows intervals with the ease factor", () => {
    let s = newSrs(today);
    for (let i = 0; i < 4; i++) s = schedule(s, "good", today);
    expect(s.interval).toBeGreaterThan(6);
  });

  it("'again' resets the card and keeps it due today", () => {
    const learned = schedule(schedule(newSrs(today), "good", today), "good", today);
    const lapsed = schedule(learned, "again", today);
    expect(lapsed.reps).toBe(0);
    expect(lapsed.lapses).toBe(1);
    expect(isDue(lapsed, today)).toBe(true);
    expect(lapsed.ease).toBeLessThan(learned.ease);
  });

  it("never lets ease drop below 1.3", () => {
    let s = newSrs(today);
    for (let i = 0; i < 20; i++) s = schedule(s, "again", today);
    expect(s.ease).toBe(1.3);
  });

  it("labels the next interval", () => {
    expect(nextLabel(newSrs(today), "again", today)).toBe("agora");
    expect(nextLabel(newSrs(today), "good", today)).toBe("1 dia");
    expect(nextLabel(newSrs(today), "easy", today)).toBe("3 dias");
  });
});
