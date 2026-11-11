import { describe, expect, it } from "@jest/globals";
import { APP_ORIGIN, command, embedHtml, isGoneError, playerVars, watchUrl } from "@/lib/ytEmbed";

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
    expect(html).toContain("https://www.youtube.com/iframe_api");
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
});
