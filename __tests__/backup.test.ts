import { describe, expect, it } from "@jest/globals";
import { backupFileName, buildBackup, parseBackup } from "@/lib/backup";

describe("backup", () => {
  it("round-trips data and drops functions", () => {
    const text = buildBackup({ "syb-settings": { theme: "amoled", dailyGoal: 20, set: () => {} }, "syb-planner": { exams: { a: { title: "Bio" } } } }, new Date("2026-11-10T10:00:00Z"));
    const backup = parseBackup(text);
    expect(backup.stores["syb-settings"]).toEqual({ theme: "amoled", dailyGoal: 20 });
    expect(backup.stores["syb-planner"]).toEqual({ exams: { a: { title: "Bio" } } });
    expect(backup.exportedAt).toBe("2026-11-10T10:00:00.000Z");
  });

  it("rejects files that are not backups", () => {
    expect(() => parseBackup("not json")).toThrow("não é um backup válido");
    expect(() => parseBackup(JSON.stringify({ app: "other", stores: {} }))).toThrow("não é um backup do ScrollYourBrain");
    expect(() => parseBackup(JSON.stringify({ app: "scrollyourbrain", format: 2, stores: {} }))).toThrow("versão mais nova");
  });

  it("ignores unknown or malformed stores", () => {
    const b = parseBackup(JSON.stringify({ app: "scrollyourbrain", format: 1, stores: { "syb-library": [], evil: { x: 1 }, "syb-review": { cards: {} } } }));
    expect(Object.keys(b.stores)).toEqual(["syb-review"]);
  });

  it("names files by date", () => {
    expect(backupFileName(new Date("2026-11-10T10:00:00Z"))).toBe("scrollyourbrain-backup-2026-11-10.json");
  });
});
