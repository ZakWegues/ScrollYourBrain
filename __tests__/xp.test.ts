import { describe, expect, it } from "@jest/globals";
import { levelInfo, rewardsBetween, themeLevel, titleFor, xpForLevel } from "@/lib/xp";

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
