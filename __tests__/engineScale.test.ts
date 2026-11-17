import { describe, expect, it } from "@jest/globals";
import { rootOf } from "@/data/pages";
import { nextItems, searchItems, type EngineState, type Signals } from "@/feed/engine";
import { createRng } from "@/feed/sources/generators";
import { CONTENT } from "@/feed/sources/library";
import type { StudyItem } from "@/feed/types";

const noSignals: Signals = { followed: new Set(), interests: new Set(), pageLikes: {}, pageSkips: {} };
const fresh = (): EngineState => ({ recent: [], kinds: [] });
// The content will grow about four times: simulate that pool.
const BIG: StudyItem[] = [0, 1, 2, 3].flatMap((k) => CONTENT.map((i) => ({ ...i, id: `${i.id}#${k}` })));

describe("feed engine at scale", () => {
  it("serves 1,000 cards quickly from a pool four times larger", () => {
    const t0 = Date.now();
    const state = fresh();
    const rng = createRng(4);
    const out: StudyItem[] = [];
    for (let i = 0; i < 100; i++) out.push(...nextItems(10, { pool: BIG, signals: noSignals, rng, state }));
    const ms = Date.now() - t0;
    expect(out).toHaveLength(1000);
    // Generous bound for slow CI machines; locally it is far below.
    expect(ms).toBeLessThan(8000);
  });

  it("varies kinds and subjects", () => {
    const items = nextItems(500, { pool: CONTENT, signals: noSignals, rng: createRng(7), state: fresh() });
    const kinds = new Set(items.map((i) => i.kind));
    for (const k of ["concept", "quiz", "flash"]) expect(kinds).toContain(k);
    const subjects = new Set(items.map((i) => rootOf(i.pageId)));
    expect(subjects.size).toBeGreaterThanOrEqual(10);
    // No subject takes over the feed without signals.
    const counts = new Map<string, number>();
    for (const i of items) counts.set(rootOf(i.pageId), (counts.get(rootOf(i.pageId)) ?? 0) + 1);
    expect(Math.max(...counts.values()) / items.length).toBeLessThan(0.25);
    // Never three of the same kind in a row.
    for (let i = 2; i < items.length; i++) expect(items[i].kind === items[i - 1].kind && items[i].kind === items[i - 2].kind).toBe(false);
  });

  it("searches the big pool fast and accent-insensitively", () => {
    const t0 = Date.now();
    const r = searchItems(BIG, "mitocondria");
    expect(Date.now() - t0).toBeLessThan(2000);
    expect(r.length).toBeGreaterThan(0);
    expect(searchItems(CONTENT, "MITOCÔNDRIA").length).toBe(searchItems(CONTENT, "mitocondria").length);
  });
});
