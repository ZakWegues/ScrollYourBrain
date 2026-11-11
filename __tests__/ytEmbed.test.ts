import { describe, expect, it } from "@jest/globals";
import { APP_ORIGIN, command, DIRECT_TIMEOUT_MS, embedHtml, embedUrl, isGoneError, playerVars, watchUrl } from "@/lib/ytEmbed";
import { preloadIndex, upcomingThumbs } from "@/feed/preload";
import type { FeedEntry, StudyItem } from "@/feed/types";

describe("YouTube embed page", () => {
  it("identifies the app with an https origin and referrer", () => {
    const vars = playerVars({ id: "dQw4w9WgXcQ" });
    expect(APP_ORIGIN).toMatch(/^https:\/\/com\.zakwegues\.scrollyourbrain$/);
    expect(vars.origin).toBe(APP_ORIGIN);
    expect(vars.widget_referrer).toBe(APP_ORIGIN);
    expect(vars.playsinline).toBe(1);
    expect(vars.enablejsapi).toBe(1);
  });

  it("loops a single video through the playlist param", () => {
    expect(playerVars({ id: "dQw4w9WgXcQ", loop: true })).toMatchObject({ loop: 1, playlist: "dQw4w9WgXcQ" });
    expect(playerVars({ id: "dQw4w9WgXcQ" })).not.toHaveProperty("loop");
  });

  it("builds a page with the IFrame API and the video config", () => {
    const html = embedHtml({ id: "dQw4w9WgXcQ", start: 12.7, play: true, muted: true });
    expect(html).toContain("/iframe_api");
    expect(html).toContain('"id":"dQw4w9WgXcQ"');
    expect(html).toContain('"start":12');
    expect(html).toContain('"muted":true');
    expect(html).toContain("ReactNativeWebView");
  });

  it("rejects ids that could break out of the page", () => {
    expect(() => embedHtml({ id: '"><script>' })).toThrow();
  });

  it("only skips videos that are gone", () => {
    expect(isGoneError(100)).toBe(true);
    for (const code of [2, 5, 101, 150, 152, 153, -1]) expect(isGoneError(code)).toBe(false);
  });

  it("serializes commands and builds watch links", () => {
    expect(command("rate", 2)).toBe('window.__cmd&&window.__cmd("rate",2);true;');
    expect(command("play")).toContain('"play",null');
    expect(watchUrl("dQw4w9WgXcQ", true)).toBe("https://m.youtube.com/shorts/dQw4w9WgXcQ");
    expect(watchUrl("dQw4w9WgXcQ", false)).toBe("https://m.youtube.com/watch?v=dQw4w9WgXcQ");
  });

  it("loads the embed directly, with the app origin, and falls back to the IFrame API", () => {
    const url = embedUrl({ id: "dQw4w9WgXcQ", play: true, muted: true, loop: true, start: 5 });
    expect(url.startsWith("https://www.youtube.com/embed/dQw4w9WgXcQ?")).toBe(true);
    for (const p of ["enablejsapi=1", "playsinline=1", "autoplay=1", "mute=1", "loop=1", "playlist=dQw4w9WgXcQ", "start=5", `origin=${encodeURIComponent(APP_ORIGIN)}`]) expect(url).toContain(p);
    const html = embedHtml({ id: "dQw4w9WgXcQ" });
    expect(html).toContain('"mode":"direct"');
    expect(html).toContain(`"timeout":${DIRECT_TIMEOUT_MS}`);
    expect(html).toContain('"listening"');
    expect(html).toContain("/iframe_api");
    expect(embedHtml({ id: "dQw4w9WgXcQ" }, "api")).toContain('"mode":"api"');
  });
});

describe("video preloading", () => {
  const e = (kind: StudyItem["kind"], i: number): FeedEntry => ({ key: `k${i}`, item: { id: `i${i}`, kind, youtubeId: `vid${String(i).padStart(8, "0")}` } as unknown as StudyItem });
  const feed = [e("quiz", 0), e("concept", 1), e("video", 2), e("flash", 3), e("quiz", 4), e("quiz", 5), e("video", 6)];

  it("picks the next video up to two cards ahead", () => {
    expect(preloadIndex(feed, 0)).toBe(2);
    expect(preloadIndex(feed, 1)).toBe(2);
    expect(preloadIndex(feed, 2)).toBe(-1);
    expect(preloadIndex(feed, 4)).toBe(6);
    expect(preloadIndex(feed, 6)).toBe(-1);
  });

  it("lists the next video thumbnails", () => {
    expect(upcomingThumbs(feed, 0, 3, (id) => id)).toEqual(["vid00000002", "vid00000006"]);
  });
});

