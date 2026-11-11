import { describe, expect, it } from "@jest/globals";
import { levelInfo, mastery, rewardsBetween, themeLevel, titleFor, xpForLevel } from "@/lib/xp";

describe("xp", () => {
  it("uses a gentle curve", () => {
    expect([1, 2, 3, 4, 5].map(xpForLevel)).toEqual([0, 100, 300, 600, 1000]);
  });
  it("computes level and progress", () => {
    expect(levelInfo(0)).toMatchObject({ level: 1, xpIntoLevel: 0, xpToNext: 100 });
    expect(levelInfo(350)).toMatchObject({ level: 3, xpIntoLevel: 50, xpToNext: 250 });
    expect(levelInfo(100).level).toBe(2);
  });
  it("unlocks themes and titles by level", () => {
    expect(themeLevel("aurora")).toBe(3);
    expect(themeLevel("amoled")).toBe(1);
    expect(rewardsBetween(2, 5).map((r) => r.id)).toEqual(["aurora", "estudante", "espaco"]);
    expect(titleFor(1)).toBe("Calouro");
    expect(titleFor(7)).toBe("Dedicado");
  });
});

describe("mastery", () => {
  it("grows with accuracy backed by volume and caps at 100", () => {
    expect(mastery({ studied: 0, answered: 0, correct: 0 })).toBe(0);
    expect(mastery({ studied: 40, answered: 15, correct: 15 })).toBe(100);
    expect(mastery({ studied: 10, answered: 2, correct: 2 })).toBeLessThan(mastery({ studied: 10, answered: 15, correct: 12 }));
    expect(mastery({ studied: 400, answered: 300, correct: 300 })).toBe(100);
  });
});
