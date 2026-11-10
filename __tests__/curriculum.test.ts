import { describe, expect, it } from "@jest/globals";
import { CURRICULUM_ITEMS, ENEM_AREAS, MONTHS, SCHOOL_SUBJECTS, TOPICS, itemsForTopics, topicsWhere } from "@/data/curriculum";
import { MACETES } from "@/data/macetes";
import { PAGE_BY_ID } from "@/data/pages";
import { SEED } from "@/feed/sources/seed";

describe("curriculum", () => {
  it("covers every subject, série and bimestre", () => {
    for (const subject of SCHOOL_SUBJECTS) {
      for (const serie of [1, 2, 3] as const) {
        for (const bimestre of [1, 2, 3, 4] as const) {
          const topics = topicsWhere({ subjects: [subject], series: [serie], bimestres: [bimestre] });
          expect(topics.length).toBeGreaterThan(0);
          expect(itemsForTopics(topics.map((t) => t.id)).length).toBeGreaterThan(0);
        }
      }
    }
  });

  it("has unique ids across all content and valid pages", () => {
    const all = [...SEED, ...CURRICULUM_ITEMS, ...MACETES];
    expect(new Set(all.map((i) => i.id)).size).toBe(all.length);
    for (const i of all) expect(PAGE_BY_ID[i.pageId]).toBeDefined();
    expect(new Set(TOPICS.map((t) => t.id)).size).toBe(TOPICS.length);
  });

  it("has valid quizzes", () => {
    for (const i of [...CURRICULUM_ITEMS, ...MACETES]) {
      if (i.kind !== "quiz") continue;
      expect(i.options.length).toBe(4);
      expect(new Set(i.options).size).toBe(4);
      expect(i.answer).toBeGreaterThanOrEqual(0);
      expect(i.answer).toBeLessThan(4);
    }
  });

  it("maps ENEM areas and months to known subjects and bimestres", () => {
    for (const area of ENEM_AREAS) for (const s of area.subjects) expect(SCHOOL_SUBJECTS).toContain(s);
    expect(MONTHS.every((m) => m.bimestre >= 1 && m.bimestre <= 4)).toBe(true);
  });
});
