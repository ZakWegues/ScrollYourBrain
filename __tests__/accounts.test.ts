import { describe, expect, it, jest } from "@jest/globals";
import { TOPICS } from "@/data/curriculum";
import { PAGE_BY_ID, ROOT_PAGES, SUB_PAGES, familyOf, rootOf, withFamilies } from "@/data/pages";
import { buildExam, examAvailability } from "@/feed/exam";
import { ACCOUNT_GENERATORS } from "@/feed/sources/generators-accounts";
import { createRng, generateFor } from "@/feed/sources/generators";
import { CONTENT } from "@/feed/sources/library";

describe("sub-subject accounts", () => {
  it("has at least 40 accounts, each under an existing subject", () => {
    expect(SUB_PAGES.length).toBeGreaterThanOrEqual(40);
    for (const p of SUB_PAGES) {
      expect(p.parent && PAGE_BY_ID[p.parent] && !PAGE_BY_ID[p.parent].parent).toBeTruthy();
    }
    const ids = [...ROOT_PAGES, ...SUB_PAGES].map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every account its own cards", () => {
    for (const p of SUB_PAGES) {
      const own = CONTENT.filter((i) => i.pageId === p.id).length;
      expect([p.id, own + (ACCOUNT_GENERATORS[p.id] ? 100 : 0)]).toEqual([p.id, expect.any(Number)]);
      expect(own + (ACCOUNT_GENERATORS[p.id] ? 100 : 0)).toBeGreaterThan(0);
    }
  });

  it("maps every curriculum topic to an account of its own subject", () => {
    for (const t of TOPICS) {
      expect(PAGE_BY_ID[t.page]).toBeDefined();
      expect(rootOf(t.page)).toBe(t.subject);
    }
  });

  it("expands families", () => {
    expect(familyOf("matematica")).toContain("funcoes");
    expect(withFamilies(["funcoes", "matematica"]).filter((x) => x === "funcoes")).toHaveLength(1);
    expect(rootOf("funcoes")).toBe("matematica");
  });

  it("lets a subject exam draw from its accounts", () => {
    expect(examAvailability("fisica")).toBeGreaterThan(examAvailability("optica"));
    const exam = buildExam({ pageId: "matematica", count: 20, rng: createRng(1) });
    expect(exam).toHaveLength(20);
    expect(exam.every((q) => rootOf(q.pageId) === "matematica")).toBe(true);
  });
});

describe("account generators", () => {
  for (const [page, gens] of Object.entries(ACCOUNT_GENERATORS)) {
    it(`${page}: well-formed quizzes`, () => {
      const rng = createRng(7);
      for (let n = 0; n < 400; n++) {
        const item = gens[n % gens.length](rng);
        expect(item.pageId).toBe(page);
        if (item.kind !== "quiz") continue;
        const text = [item.question, ...item.options, item.explanation].join(" ");
        expect(text).not.toMatch(/NaN|undefined|Infinity/);
        expect([item.id, item.options.length]).toEqual([item.id, 4]);
        expect(new Set(item.options).size).toBe(item.options.length);
        expect(item.answer).toBeGreaterThanOrEqual(0);
        expect(item.answer).toBeLessThan(item.options.length);
      }
    });
  }

  it("computes known answers", () => {
    const rng = createRng(3);
    for (let n = 0; n < 300; n++) {
      const item = generateFor("financeira", rng);
      if (item.kind === "quiz" && item.id === "gen-fin-suc-20-20") expect(item.options[item.answer]).toBe("Queda de 4%");
      if (item.kind === "quiz" && item.id === "gen-fin-jc-1000") expect(item.options[item.answer]).toBe("R$ 1.210");
    }
    const g = generateFor("geometria", createRng(11));
    expect(g.pageId).toBe("geometria");
  });
});

describe("my topics", () => {
  it("filters curriculum cards to the marked topics and keeps general cards", () => {
    const { contentForStudent, defaultTopics } = jest.requireActual<typeof import("@/feed/sources/library")>("@/feed/sources/library");
    const one = TOPICS.find((t) => t.serie === 2 && t.subject === "fisica")!;
    const pool = contentForStudent(1, [one.id]);
    expect(pool.filter((i) => i.topicId).every((i) => i.topicId === one.id)).toBe(true);
    expect(pool.some((i) => !i.topicId)).toBe(true);
    expect(contentForStudent(2, null).filter((i) => i.topicId).length).toBe(CONTENT.filter((i) => i.topicId && defaultTopics(2).includes(i.topicId)).length);
  });

  it("keeps every card id unique and every quiz well-formed", () => {
    const ids = CONTENT.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const i of CONTENT) {
      if (i.kind !== "quiz") continue;
      expect([i.id, new Set(i.options).size]).toEqual([i.id, i.options.length]);
      expect(i.answer).toBeLessThan(i.options.length);
    }
  });
});

describe("lightning quiz", () => {
  it("returns distinct quick questions, topped up by generators", () => {
    const { blitzQuestions } = jest.requireActual<typeof import("@/feed/blitz")>("@/feed/blitz");
    const qs = blitzQuestions(40, createRng(9), CONTENT);
    expect(qs).toHaveLength(40);
    expect(new Set(qs.map((q) => q.id)).size).toBe(40);
    expect(qs.every((q) => q.question.length <= 110)).toBe(true);
    expect(blitzQuestions(20, createRng(1), [])).toHaveLength(20);
  });
});

describe("curated videos", () => {
  it("gives every account at least five Portuguese study videos, with unique ids", () => {
    const { CURATED_VIDEOS } = jest.requireActual<typeof import("@/feed/sources/youtube")>("@/feed/sources/youtube");
    const ids = CURATED_VIDEOS.map((v) => v.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of SUB_PAGES) expect([p.id, CURATED_VIDEOS.filter((v) => v.pageId === p.id).length >= 5]).toEqual([p.id, true]);
    expect(CURATED_VIDEOS.every((v) => PAGE_BY_ID[v.pageId])).toBe(true);
  });

  it("has plenty of Shorts in every account", () => {
    const { CURATED_VIDEOS } = jest.requireActual<typeof import("@/feed/sources/youtube")>("@/feed/sources/youtube");
    const shorts = CURATED_VIDEOS.filter((v) => v.vertical);
    expect(shorts.length).toBeGreaterThanOrEqual(300);
    for (const p of SUB_PAGES) expect([p.id, shorts.filter((v) => v.pageId === p.id).length >= 4]).toEqual([p.id, true]);
  });
});

describe("generated quizzes everywhere", () => {
  it("always have four distinct options", () => {
    const rng = createRng(21);
    for (const page of ["matematica", "geografia", "quimica", "programacao", ...Object.keys(ACCOUNT_GENERATORS)]) {
      for (let n = 0; n < 150; n++) {
        const item = generateFor(page, rng);
        if (item.kind !== "quiz") continue;
        expect([item.id, new Set(item.options).size]).toEqual([item.id, 4]);
      }
    }
  });
});
