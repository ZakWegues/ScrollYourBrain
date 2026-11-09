// Renders the app icon, Android adaptive icon layers, splash mark and favicon from one SVG.
// Usage: npm run assets
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";

// Two cards peeking behind the front one (the feed) and a sparkle (the "aha" moment).
const SPARK = "M256 190 C266 252 288 274 350 284 C288 294 266 316 256 378 C246 316 224 294 162 284 C224 274 246 252 256 190 Z";
const SPARK_SMALL = "M336 160 C339 178 345 184 363 187 C345 190 339 196 336 214 C333 196 327 190 309 187 C327 184 333 178 336 160 Z";
const mark = (fill = "url(#g)", ink = "#fff") => `
  <rect x="166" y="58" width="180" height="300" rx="56" fill="${fill}" opacity="0.28"/>
  <rect x="136" y="90" width="240" height="320" rx="64" fill="${fill}" opacity="0.55"/>
  <rect x="106" y="130" width="300" height="340" rx="72" fill="${fill}"/>
  <path d="${SPARK}" fill="${ink}"/>
  <path d="${SPARK_SMALL}" fill="${ink}" opacity="0.9"/>`;

const defs = `
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#A78BFA"/><stop offset="0.55" stop-color="#8B5CF6"/><stop offset="1" stop-color="#22D3EE"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.55" r="0.6">
      <stop offset="0" stop-color="#8B5CF6" stop-opacity="0.55"/><stop offset="1" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>`;

// Full icon (iOS / web): black tile with a soft violet glow behind the mark.
const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 512 512">${defs}
  <rect width="512" height="512" fill="#000"/><rect width="512" height="512" fill="url(#glow)"/>
  <g transform="translate(25.6 17.5) scale(0.9)">${mark()}</g></svg>`;

// Android adaptive foreground: mark inside the 66% safe zone on a transparent layer.
const adaptive = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 512 512">${defs}
  <g transform="translate(97.3 91.7) scale(0.62)">${mark()}</g></svg>`;

const mono = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 512 512">
  <g transform="translate(97.3 91.7) scale(0.62)">${mark("#fff", "#000")}</g></svg>`;

const splash = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 512 512">${defs}${mark()}</svg>`;

const render = (svg, file, width) => {
  const png = new Resvg(svg, { fitTo: { mode: "width", value: width } }).render().asPng();
  writeFileSync(new URL(`../assets/${file}`, import.meta.url), png);
  console.log("wrote", file);
};

render(icon, "icon.png", 1024);
render(adaptive, "adaptive-icon.png", 1024);
render(mono, "adaptive-icon-mono.png", 1024);
render(splash, "splash-icon.png", 1024);
render(icon, "favicon.png", 96);
