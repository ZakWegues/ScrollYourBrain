import { describe, expect, it } from "@jest/globals";
import { nextItems, pageWeight, searchItems, type EngineState, type Signals } from "@/feed/engine";
import { createRng, generateFor, GENERATED_PAGES } from "@/feed/sources/generators";
import { SEED } from "@/feed/sources/seed";
import { CONTENT } from "@/feed/sources/library";
import { CURATED_VIDEOS, parseYouTubeId } from "@/feed/sources/youtube";
import type { QuizItem } from "@/feed/types";

const noSignals: Signals = { followed: new Set(), interests: new Set(), pageLikes: {}, pageSkips: {} };
const fresh = (): EngineState => ({ recent: [], kinds: [] });

describe("nextItems", () => {
  it("always returns the requested count, even with an empty pool", () => {
    const items = nextItems(50, { pool: [], signals: noSignals, rng: createRng(1), state: fresh() });
    expect(items).toHaveLength(50);
  });

  it("never returns an item from outside the allowed pages when the pool has them", () => {
    const items = nextItems(30, { pool: SEED, signals: noSignals, rng: createRng(2), state: fresh(), pages: ["fisica"] });
    expect(items.every((i) => i.pageId === "fisica" || GENERATED_PAGES.includes(i.pageId))).toBe(true);
    expect(items.filter((i) => i.pageId === "fisica").length).toBeGreaterThan(0);
  });

  it("mixes in every question type and keeps dissertativas apart", () => {
    const items = nextItems(600, { pool: CONTENT, signals: noSignals, rng: createRng(9), state: fresh() });
    const kinds = items.map((i) => i.kind);
    expect(kinds).toContain("multi");
    expect(kinds).toContain("open");
    kinds.forEach((k, i) => {
      if (k === "open") expect(kinds.slice(Math.max(0, i - 3), i)).not.toContain("open");
    });
  });

  it("does not repeat seed items inside the recent window", () => {
    const items = nextItems(15, { pool: SEED, signals: noSignals, rng: createRng(3), state: fresh() });
    const ids = items.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("never serves blocked items", () => {
    const blocked = new Set(SEED.map((i) => i.id));
    const items = nextItems(20, { pool: SEED, signals: noSignals, rng: createRng(4), state: fresh(), blocked });
    expect(items.some((i) => blocked.has(i.id))).toBe(false);
  });

  it("favours followed and liked pages", () => {
    const share = (signals: Signals) => {
      const items = nextItems(400, { pool: SEED, signals, rng: createRng(5), state: fresh() });
      return items.filter((i) => i.pageId === "matematica").length / items.length;
    };
    const boosted = share({ ...noSignals, followed: new Set(["matematica"]), pageLikes: { matematica: 5 } });
    expect(boosted).toBeGreaterThan(share(noSignals) * 2);
  });

  it("keeps a liked page with a small pool from being diluted into random topics", () => {
    const signals: Signals = { ...noSignals, followed: new Set(["historia"]), pageLikes: { historia: 5 } };
    const items = nextItems(60, { pool: SEED, signals, rng: createRng(8), state: fresh() });
    // Small pools cycle instead of disappearing: history keeps showing up all along the feed.
    expect(items.slice(40).some((i) => i.pageId === "historia")).toBe(true);
  });
});

describe("pageWeight", () => {
  it("drops for skipped pages but never reaches zero", () => {
    const w = pageWeight("matematica", { ...noSignals, pageSkips: { matematica: 100 } });
    expect(w).toBeGreaterThan(0);
    expect(w).toBeLessThan(pageWeight("matematica", noSignals));
  });
});

describe("generators", () => {
  it("produce valid quizzes with the answer among the options", () => {
    const rng = createRng(6);
    for (let n = 0; n < 300; n++) {
      const item = generateFor(GENERATED_PAGES[n % GENERATED_PAGES.length], rng);
      if (item.kind !== "quiz") continue;
      const q = item as QuizItem;
      expect(q.options.length).toBeGreaterThanOrEqual(2);
      expect(new Set(q.options).size).toBe(q.options.length);
      expect(q.answer).toBeGreaterThanOrEqual(0);
      expect(q.answer).toBeLessThan(q.options.length);
    }
  });

  it("compute correct arithmetic", () => {
    const rng = createRng(7);
    for (let n = 0; n < 200; n++) {
      const q = generateFor("matematica", rng) as QuizItem;
      const mul = q.question.match(/^Quanto é (\d+) × (\d+)\?$/);
      if (mul) expect(q.options[q.answer]).toBe((Number(mul[1]) * Number(mul[2])).toLocaleString("pt-BR"));
      const eq = q.question.match(/^Resolva: (\d+)x ([+−]) (\d+) = (-?\d+)$/);
      if (eq) {
        const b = (eq[2] === "+" ? 1 : -1) * Number(eq[3]);
        expect(q.options[q.answer]).toBe(`x = ${(Number(eq[4]) - b) / Number(eq[1])}`);
      }
    }
  });
});

describe("seed content", () => {
  it("has unique ids and valid quiz answers", () => {
    expect(new Set(SEED.map((i) => i.id)).size).toBe(SEED.length);
    for (const i of SEED) if (i.kind === "quiz") expect(i.options[i.answer]).toBeDefined();
  });
});

describe("search", () => {
  it("ignores accents and case", () => {
    expect(searchItems(SEED, "PITAGORAS").map((i) => i.id)).toContain("mat-pitagoras");
    expect(searchItems(SEED, "fotossintese").map((i) => i.id)).toContain("bio-flash-fotossintese");
  });
});

describe("parseYouTubeId", () => {
  it.each([
    ["https://www.youtube.com/watch?v=aircAruvnKk", "aircAruvnKk"],
    ["https://youtu.be/aircAruvnKk?t=10", "aircAruvnKk"],
    ["https://youtube.com/shorts/aircAruvnKk", "aircAruvnKk"],
    ["aircAruvnKk", "aircAruvnKk"],
    ["not a link", null],
  ])("%s", (input, id) => expect(parseYouTubeId(input)).toBe(id));
});

describe("video frequency", () => {
  it("serves a video at least every N cards when videos are available", () => {
    if (CURATED_VIDEOS.length === 0) return;
    const state: EngineState = { recent: [], kinds: [] };
    const signals: Signals = { followed: new Set(), interests: new Set(), pageLikes: {}, pageSkips: {} };
    const items = nextItems(30, { pool: [...CONTENT, ...CURATED_VIDEOS], signals, rng: createRng(5), state, videoEvery: 3 });
    let gap = 0;
    for (const i of items) {
      gap = i.kind === "video" ? 0 : gap + 1;
      expect(gap).toBeLessThan(3);
    }
  });
});
