import { describe, expect, it } from "@jest/globals";
import { buildExam, examAvailability, examPages, examScore, MIN_EXAM_QUESTIONS } from "@/feed/exam";
import { createRng } from "@/feed/sources/generators";

describe("buildExam", () => {
  it("returns the requested number of distinct quizzes for a generated page", () => {
    const exam = buildExam({ pageId: "matematica", count: 20, rng: createRng(1) });
    expect(exam).toHaveLength(20);
    expect(new Set(exam.map((q) => q.id)).size).toBe(20);
    expect(exam.every((q) => q.kind === "quiz" && q.pageId === "matematica")).toBe(true);
  });

  it("mixes pages when no page is given", () => {
    const exam = buildExam({ count: 20, rng: createRng(2) });
    expect(exam).toHaveLength(20);
    expect(new Set(exam.map((q) => q.pageId)).size).toBeGreaterThan(1);
  });

  it("caps at the available questions for pages without a generator", () => {
    const exam = buildExam({ pageId: "historia", count: 500, rng: createRng(3) });
    expect(exam.length).toBe(examAvailability("historia"));
  });
});

describe("examAvailability", () => {
  it("matches what buildExam can actually deliver", () => {
    for (const pageId of ["quimica", "geografia", "programacao", "matematica"]) {
      const available = examAvailability(pageId);
      const exam = buildExam({ pageId, count: 20, rng: createRng(9) });
      expect(exam.length).toBe(Math.min(20, available));
    }
  });
});

describe("examPages", () => {
  it("only lists pages with enough questions", () => {
    expect(examPages().every((p) => p.available >= MIN_EXAM_QUESTIONS)).toBe(true);
    expect(examPages().map((p) => p.page.id)).toContain("geografia");
  });
});

describe("examScore", () => {
  it("rounds to a percentage", () => {
    expect(examScore(7, 9)).toBe(78);
    expect(examScore(0, 0)).toBe(0);
  });
});
