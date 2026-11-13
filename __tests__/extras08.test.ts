import { describe, expect, it } from "@jest/globals";
import { pageWeight, videoWeight, type Signals } from "@/feed/engine";
import { embedUrl, playerVars } from "@/lib/ytEmbed";
import { watchLaterList } from "@/lib/watchLater";
import type { VideoItem } from "@/feed/types";

const signals = (followed: string[]): Signals => ({ followed: new Set(followed), interests: new Set(), pageLikes: {}, pageSkips: {} });

describe("v0.8 extras", () => {
  it("videos from followed accounts (or their subject) weigh three times more", () => {
    const s = signals(["genetica", "fisica"]);
    expect(videoWeight("genetica", s)).toBeCloseTo(pageWeight("genetica", s) * 3);
    expect(videoWeight("cinematica", s)).toBeCloseTo(pageWeight("cinematica", s) * 3);
    expect(videoWeight("funcoes", s)).toBeCloseTo(pageWeight("funcoes", s));
  });

  it("asks YouTube for Portuguese captions only when the setting is on", () => {
    expect(playerVars({ id: "dQw4w9WgXcQ", captions: true })).toMatchObject({ cc_load_policy: 1, cc_lang_pref: "pt" });
    expect(playerVars({ id: "dQw4w9WgXcQ" })).toMatchObject({ cc_load_policy: 0 });
    expect(embedUrl({ id: "dQw4w9WgXcQ", captions: true })).toContain("cc_load_policy=1");
  });

  it("lists watch-later videos newest first", () => {
    const v = (id: string) => ({ id, kind: "video", youtubeId: id.padEnd(11, "x"), pageId: "funcoes", title: id, tags: [], caption: "" }) as VideoItem;
    const list = watchLaterList({ a: { item: v("a"), at: 1 }, b: { item: v("b"), at: 3 }, c: { item: v("c"), at: 2 } });
    expect(list.map((x) => x.id)).toEqual(["b", "c", "a"]);
  });
});
