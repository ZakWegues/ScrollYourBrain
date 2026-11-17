import { describe, expect, it } from "@jest/globals";
import { getColors, THEME_ORDER } from "@/theme";

/** WCAG relative luminance and contrast ratio for #RRGGBB colors. */
const lum = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

describe("theme contrast (WCAG)", () => {
  for (const mode of THEME_ORDER)
    for (const hc of [false, true])
      it(`${mode}${hc ? " + alto contraste" : ""}: text is readable on every surface`, () => {
        const c = getColors(mode, hc);
        for (const surface of [c.bg, c.surface, c.surface2]) {
          expect(ratio(c.text, surface)).toBeGreaterThanOrEqual(7);
          // Secondary text: AA for normal text (4.5:1).
          expect(ratio(c.textDim, surface)).toBeGreaterThanOrEqual(4.5);
        }
        // Muted text is only for hints and placeholders: at least 3:1 on the page background (AA for large/UI text).
        expect(ratio(c.textMute, c.bg)).toBeGreaterThanOrEqual(hc ? 4.5 : 3);
      });
});
