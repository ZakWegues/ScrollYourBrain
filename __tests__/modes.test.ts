import { describe, expect, it } from "@jest/globals";
import { TOPIC_BY_ID, TOPICS } from "@/data/curriculum";
import { isComplete, MODE_ORDER, modeItems, modeKey, modeTitle, modeTopics, type ModeConfig } from "@/lib/modes";
import { rootOf } from "@/data/pages";

describe("exam modes", () => {
  it("bimestral returns only that subject, série and bimestre", () => {
    const c: ModeConfig = { kind: "bimestral", subject: "biologia", serie: 1, bimestre: 2 };
    const topics = modeTopics(c);
    expect(topics.length).toBeGreaterThan(0);
    expect(topics.every((t) => t.subject === "biologia" && t.serie === 1 && t.bimestre === 2)).toBe(true);
    expect(modeItems(c).every((i) => rootOf(i.pageId) === "biologia")).toBe(true);
  });

  it("mensal maps the month to its bimestre", () => {
    const topics = modeTopics({ kind: "mensal", subject: "fisica", serie: 2, month: 9 });
    expect(topics.every((t) => t.bimestre === 3 && t.serie === 2)).toBe(true);
  });

  it("anual covers the 4 bimestres", () => {
    const topics = modeTopics({ kind: "anual", subject: "quimica", serie: 3 });
    expect(new Set(topics.map((t) => t.bimestre)).size).toBe(4);
  });

  it("enem spans subjects and séries, filters by area and adds tips", () => {
    const all = modeTopics({ kind: "enem" });
    expect(new Set(all.map((t) => t.serie)).size).toBe(3);
    const natureza = modeTopics({ kind: "enem", area: "natureza" });
    expect(natureza.every((t) => ["biologia", "fisica", "quimica"].includes(t.subject))).toBe(true);
    expect(modeItems({ kind: "enem" }).some((i) => i.pageId === "macetes")).toBe(true);
  });

  it("atividade is one topic", () => {
    const topicId = Object.keys(TOPIC_BY_ID)[0];
    expect(modeTopics({ kind: "atividade", subject: "matematica", serie: 1, topicId }).map((t) => t.id)).toEqual([topicId]);
  });

  it("knows when a config is complete and titles it", () => {
    expect(isComplete({ kind: "bimestral", subject: "historia", serie: 2 })).toBe(false);
    expect(isComplete({ kind: "bimestral", subject: "historia", serie: 2, bimestre: 1 })).toBe(true);
    expect(isComplete({ kind: "enem" })).toBe(true);
    expect(modeTitle({ kind: "bimestral", subject: "historia", serie: 2, bimestre: 1 })).toEqual({ title: "Prova bimestral · História", subtitle: "2º ano · 1º bimestre" });
    expect(modeKey({ kind: "mensal", subject: "fisica", serie: 2, month: 9 })).toBe("mensal:fisica:2:9");
    expect(MODE_ORDER).toHaveLength(6);
  });
});

describe("custom modes", () => {
  it("unions topics from several subjects and titles them", () => {
    const bio = TOPICS.filter((t) => t.subject === "biologia" && t.serie === 2).map((t) => t.id);
    const fis = TOPICS.filter((t) => t.subject === "fisica" && t.serie === 2 && t.bimestre === 1).map((t) => t.id);
    const c = { kind: "anual" as const, topicIds: [...bio, ...fis], name: "Prova de sexta" };
    expect(isComplete(c)).toBe(true);
    expect(modeTopics(c)).toHaveLength(bio.length + fis.length);
    expect(modeItems(c).every((i) => ["biologia", "fisica"].includes(rootOf(i.pageId)))).toBe(true);
    expect(modeTitle(c).title).toBe("Prova anual · Prova de sexta");
    expect(modeTitle(c).subtitle).toContain("2 matérias");
    expect(modeKey(c)).toBe(modeKey({ ...c, topicIds: [...c.topicIds].reverse() }));
    expect(modeKey(c)).not.toBe(modeKey({ ...c, topicIds: bio }));
    expect(isComplete({ kind: "anual", topicIds: [] })).toBe(false);
  });
});
