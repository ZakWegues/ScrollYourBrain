import { beforeEach, describe, expect, it } from "@jest/globals";
import type { MultiItem, OpenItem, QuizItem, VideoItem } from "@/feed/types";
import { BACKUP_STORES, buildBackup, parseBackup } from "@/lib/backup";
import { dayKey } from "@/lib/streak";
import { levelInfo } from "@/lib/xp";
import { useLibrary } from "@/store/library";
import { pendingMistakes, rightAnswerText, useMistakes } from "@/store/mistakes";
import { useNotebooks } from "@/store/notebooks";
import { usePlanner } from "@/store/planner";
import { countStudy, trackAnswer, useProgress } from "@/store/progress";
import { dueCards, useReview } from "@/store/review";
import { useSettings } from "@/store/settings";
import { useWatchLater } from "@/store/watchLater";
import { awardXp, awardXpOnce, useXp } from "@/store/xp";

const quiz = (id: string, pageId = "funcoes"): QuizItem => ({ id, kind: "quiz", pageId, title: "t", tags: [], question: `Q ${id}?`, options: ["a", "b", "c", "d"], answer: 2, explanation: "porque sim, de verdade" });
const multi: MultiItem = { id: "m1", kind: "multi", pageId: "genetica", title: "t", tags: [], question: "?", options: ["a", "b", "c", "d"], answers: [0, 3], explanation: "x" };
const open: OpenItem = { id: "o1", kind: "open", pageId: "genetica", title: "t", tags: [], question: "?", model: "Modelo.", points: [{ label: "p", terms: ["p"] }] };
const video: VideoItem = { id: "v1", kind: "video", pageId: "funcoes", title: "Vídeo", tags: [], youtubeId: "dQw4w9WgXcQ", caption: "" };

beforeEach(() => {
  useProgress.getState().reset();
  useReview.getState().reset();
  useMistakes.getState().reset();
  useLibrary.getState().reset();
  useXp.getState().reset();
  useNotebooks.getState().reset();
  usePlanner.getState().reset();
  useWatchLater.getState().reset();
  useSettings.setState({ dailyGoal: 3 });
});

describe("progress", () => {
  it("counts studied cards, reaches the goal once and logs per account", () => {
    expect(useProgress.getState().recordStudy("funcoes")).toBe(false);
    expect(useProgress.getState().recordStudy("funcoes")).toBe(false);
    expect(useProgress.getState().recordStudy("genetica")).toBe(true);
    expect(useProgress.getState().recordStudy("genetica")).toBe(false);
    const day = useProgress.getState().log[dayKey()];
    expect(day.studied).toBe(4);
    expect(day.topics?.funcoes?.studied).toBe(2);
    expect(useProgress.getState().days[dayKey()]).toBe(4);
  });

  it("gives study and goal XP when the goal is reached", () => {
    for (let i = 0; i < 3; i++) countStudy("funcoes");
    const { counts } = useXp.getState();
    expect(counts.study).toBe(3);
    expect(counts.goal).toBe(1);
  });

  it("keeps the best exam score per key", () => {
    expect(useProgress.getState().recordExam("all", 60)).toBe(true);
    expect(useProgress.getState().recordExam("all", 40)).toBe(false);
    expect(useProgress.getState().recordExam("all", 90)).toBe(true);
    expect(useProgress.getState().examBest.all).toBe(90);
  });
});

describe("answers, mistakes and review", () => {
  it("a wrong answer goes to the mistakes notebook until it is answered right", () => {
    const q = quiz("q1");
    trackAnswer(q, false);
    trackAnswer(q, false);
    expect(useMistakes.getState().items.q1).toMatchObject({ wrong: 2, fixed: false });
    trackAnswer(q, true);
    expect(useMistakes.getState().items.q1.fixed).toBe(true);
    expect(pendingMistakes(useMistakes.getState().items)).toHaveLength(0);
    useMistakes.getState().clearFixed();
    expect(useMistakes.getState().items.q1).toBeUndefined();
  });

  it("a right answer never creates a mistake", () => {
    trackAnswer(quiz("q2"), true);
    expect(useMistakes.getState().items.q2).toBeUndefined();
  });

  it("multi and open questions are kept as mistakes too, with readable answers", () => {
    trackAnswer(multi, false);
    trackAnswer(open, false);
    expect(rightAnswerText(useMistakes.getState().items.m1.item)).toBe("a · d");
    expect(rightAnswerText(useMistakes.getState().items.o1.item)).toBe("Modelo.");
  });

  it("logs answered and correct per account", () => {
    trackAnswer(quiz("a", "genetica"), true);
    trackAnswer(quiz("b", "genetica"), false);
    const t = useProgress.getState().log[dayKey()].topics?.genetica;
    expect(t).toMatchObject({ answered: 2, correct: 1 });
    expect(useXp.getState().counts.correct).toBe(1);
  });

  it("a wrong quiz enters spaced review; grading moves its due date", () => {
    const q = quiz("q3");
    useReview.getState().recordQuiz(q, true);
    expect(useReview.getState().cards.q3).toBeUndefined();
    useReview.getState().recordQuiz(q, false);
    expect(dueCards(useReview.getState().cards).map((c) => c.item.id)).toEqual(["q3"]);
    useReview.getState().grade("q3", "good");
    expect(dueCards(useReview.getState().cards)).toHaveLength(0);
    expect(useReview.getState().cards.q3.srs.reps).toBe(1);
  });

  it("only reviewable kinds can be added", () => {
    expect(useReview.getState().add(quiz("q4"))).toBe(true);
    expect(useReview.getState().add(quiz("q4"))).toBe(false);
    expect(useReview.getState().add(open)).toBe(true);
    expect(useReview.getState().add(video)).toBe(false);
  });
});

describe("xp", () => {
  it("adds XP, counts events and levels up", () => {
    awardXp("exam", 10);
    const { xp, counts } = useXp.getState();
    expect(xp).toBeGreaterThan(0);
    expect(counts.exam).toBe(10);
    expect(levelInfo(xp).level).toBeGreaterThan(1);
  });

  it("likes and saves only pay once per item", () => {
    awardXpOnce("like", "x");
    awardXpOnce("like", "x");
    expect(useXp.getState().counts.like).toBe(1);
  });
});

describe("library", () => {
  it("toggles like, save and follow, and likes boost the account", () => {
    const q = quiz("l1", "optica");
    expect(useLibrary.getState().toggleLike(q)).toBe(true);
    expect(useLibrary.getState().pageLikes.optica).toBe(1);
    expect(useLibrary.getState().toggleLike(q)).toBe(false);
    expect(useLibrary.getState().pageLikes.optica).toBe(0);
    expect(useLibrary.getState().toggleSave(q)).toBe(true);
    expect(useLibrary.getState().saved.l1).toBeDefined();
    expect(useLibrary.getState().toggleFollow("optica")).toBe(true);
    expect(useLibrary.getState().toggleFollow("optica")).toBe(false);
  });

  it("counts answers for quiz stats and clears history without losing saves", () => {
    useLibrary.getState().recordAnswer(true);
    useLibrary.getState().toggleSave(quiz("l2"));
    useLibrary.getState().recordSkip("optica");
    useLibrary.getState().clearHistory();
    expect(useLibrary.getState().saved.l2).toBeDefined();
    expect(useLibrary.getState().pageSkips.optica ?? 0).toBe(0);
  });
});

describe("notebooks and planner", () => {
  it("creates, renames, fills and removes notebooks; notes are per item", () => {
    const id = useNotebooks.getState().create("Prova de Bio", quiz("n1"));
    useNotebooks.getState().rename(id, "Bio final");
    expect(useNotebooks.getState().notebooks[id].name).toBe("Bio final");
    expect(useNotebooks.getState().toggleItem(id, quiz("n2"))).toBe(true);
    expect(useNotebooks.getState().toggleItem(id, quiz("n2"))).toBe(false);
    useNotebooks.getState().setNote(quiz("n1"), "lembrar disso");
    expect(useNotebooks.getState().notes.n1.text).toBe("lembrar disso");
    useNotebooks.getState().remove(id);
    expect(useNotebooks.getState().notebooks[id]).toBeUndefined();
  });

  it("saves and removes exams", () => {
    const id = usePlanner.getState().save({ title: "ENEM", date: "2030-11-03", pageIds: ["matematica"] });
    expect(usePlanner.getState().exams[id].title).toBe("ENEM");
    usePlanner.getState().remove(id);
    expect(usePlanner.getState().exams[id]).toBeUndefined();
  });
});

describe("watch later", () => {
  it("toggles a video on and off the list", () => {
    expect(useWatchLater.getState().toggle(video)).toBe(true);
    expect(useWatchLater.getState().items.v1).toBeDefined();
    expect(useWatchLater.getState().toggle(video)).toBe(false);
    expect(useWatchLater.getState().items.v1).toBeUndefined();
  });
});

describe("backup", () => {
  it("round-trips every store and rejects other files", () => {
    useLibrary.getState().toggleSave(quiz("b1"));
    trackAnswer(quiz("b2"), false);
    useWatchLater.getState().toggle(video);
    const states = { "syb-library": useLibrary.getState(), "syb-mistakes": useMistakes.getState(), "syb-watchlater": useWatchLater.getState() };
    const text = buildBackup(states);
    const parsed = parseBackup(text);
    expect(Object.keys(parsed.stores).sort()).toEqual(["syb-library", "syb-mistakes", "syb-watchlater"]);
    // Functions are not exported, only data.
    expect(JSON.stringify(parsed.stores)).not.toContain("toggleSave");
    useLibrary.getState().reset();
    useLibrary.setState(parsed.stores["syb-library"]!);
    expect(useLibrary.getState().saved.b1).toBeDefined();
    expect(BACKUP_STORES).toContain("syb-watchlater");
    expect(() => parseBackup("not json")).toThrow();
    expect(() => parseBackup(JSON.stringify({ app: "other" }))).toThrow();
    expect(() => parseBackup(JSON.stringify({ app: "scrollyourbrain", format: 9, stores: {} }))).toThrow(/mais nova/);
  });
});
