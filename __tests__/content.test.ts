import { describe, expect, it } from "@jest/globals";
import { TOPICS } from "@/data/curriculum";
import { SUB_PAGES } from "@/data/pages";
import { CONTENT } from "@/feed/sources/library";
import type { StudyItem } from "@/feed/types";
import { normalizeText } from "@/lib/grading";

/** Every bundled card, checked one by one: the kind of mistakes a student would notice right away. */
const FORBIDDEN = /todas as (anteriores|alternativas)|nenhuma das (anteriores|alternativas)|\bas duas anteriores\b/i;
const label = (i: StudyItem) => `${i.id} (${i.kind})`;

describe("every bundled card", () => {
  it("has a unique id", () => {
    const seen = new Map<string, number>();
    for (const i of CONTENT) seen.set(i.id, (seen.get(i.id) ?? 0) + 1);
    expect([...seen].filter(([, n]) => n > 1).map(([id]) => id)).toEqual([]);
  });

  it("is well formed for its kind", () => {
    const problems: string[] = [];
    for (const i of CONTENT) {
      if (i.kind === "quiz" || i.kind === "multi") {
        // Signs, exponents and accents matter here ("−1/2" and "1/2" are different options).
        const opts = i.options.map((o) => o.trim().toLowerCase().replace(/\s+/g, " "));
        if (new Set(opts).size !== opts.length) problems.push(`${label(i)}: repeated option`);
        if (i.options.some((o) => !o.trim())) problems.push(`${label(i)}: empty option`);
        if (i.options.some((o) => FORBIDDEN.test(o))) problems.push(`${label(i)}: "todas/nenhuma das anteriores"`);
        if (i.explanation.trim().length < 8) problems.push(`${label(i)}: explanation too short`);
        if (!/[?:.…)"”=]$/.test(i.question.trim())) problems.push(`${label(i)}: question without ending punctuation`);
      }
      if (i.kind === "quiz") {
        if (i.options.length < 3 || i.options.length > 5) problems.push(`${label(i)}: ${i.options.length} options`);
        if (!(i.answer >= 0 && i.answer < i.options.length)) problems.push(`${label(i)}: answer out of range`);
      }
      if (i.kind === "flash" && (!i.front.trim() || !i.back.trim())) problems.push(`${label(i)}: empty side`);
      if (i.kind === "concept" && (i.beats.length === 0 || !i.takeaway.trim())) problems.push(`${label(i)}: empty concept`);
      if (i.kind === "open" && i.model.trim().length < 30) problems.push(`${label(i)}: model answer too short`);
      if (!i.title.trim()) problems.push(`${label(i)}: no title`);
    }
    expect(problems).toEqual([]);
  });

  it("asks each question only once (no duplicates across files)", () => {
    const byText = new Map<string, string[]>();
    for (const i of CONTENT) {
      if (i.kind !== "quiz" && i.kind !== "multi" && i.kind !== "open") continue;
      const key = normalizeText(i.question);
      byText.set(key, [...(byText.get(key) ?? []), i.id]);
    }
    const dups = [...byText].filter(([, ids]) => ids.length > 1).map(([q, ids]) => `${q} → ${ids.join(", ")}`);
    expect(dups).toEqual([]);
  });

  it("covers every topic and every account", () => {
    const perTopic = new Map<string, number>();
    for (const i of CONTENT) if (i.topicId) perTopic.set(i.topicId, (perTopic.get(i.topicId) ?? 0) + 1);
    expect(TOPICS.filter((t) => (perTopic.get(t.id) ?? 0) < 3).map((t) => t.id)).toEqual([]);
    const pages = new Set(CONTENT.map((i) => i.pageId));
    expect(SUB_PAGES.filter((p) => !pages.has(p.id)).map((p) => p.id)).toEqual([]);
  });
});
