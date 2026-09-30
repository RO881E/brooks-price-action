// Erzeugt src/theme.css aus src/theme-colors.json (Stufe 5b, dunkles Thema).
// Jede Farbe der Oberfläche ist ein Token `--c-<hex>`; hell = Originalwert, dunkel = abgeleitet
// (Helligkeit gespiegelt, Kontrast bleibt erhalten). Seitenleiste und andere immer dunkle Flächen
// behalten die Originalfarben. Aufruf: `npm run theme`; der Test `themeTokens.test.ts` prüft Aktualität.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');

function parse(hex) {
  const value = hex.length === 3 ? [...hex].map((c) => c + c).join('') : hex;
  const r = parseInt(value.slice(0, 2), 16) / 255;
  const g = parseInt(value.slice(2, 4), 16) / 255;
  const b = parseInt(value.slice(4, 6), 16) / 255;
  const alpha = value.length === 8 ? value.slice(6, 8) : '';
  return { r, g, b, alpha };
}

function rgbToHsl({ r, g, b }) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  if (d === 0) return { h: 0, s: 0, l };
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return { h: h / 6, s, l };
}

function hslToHex({ h, s, l }, alpha) {
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  let r;
  let g;
  let b;
  if (s === 0) r = g = b = l;
  else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const part = (x) => Math.round(x * 255).toString(16).padStart(2, '0');
  return `#${part(r)}${part(g)}${part(b)}${alpha}`;
}

/** Dunkles Gegenstück: Helligkeit spiegeln, neutrale Töne leicht bläulich, Farbtöne behalten. */
export function darkOf(hex) {
  const { alpha, ...rgb } = parse(hex);
  const hsl = rgbToHsl(rgb);
  let l = 0.075 + 0.83 * (1 - hsl.l);
  // Mitteltöne (Text- und Akzentfarben) im Dunkeln etwas heller, damit ihr Kontrast auf dunklem Grund erhalten bleibt.
  if (hsl.l > 0.2 && hsl.l < 0.62) l = Math.min(0.92, l + 0.14 * Math.sin((Math.PI * (hsl.l - 0.2)) / 0.42));
  if (hsl.s < 0.12 || (hsl.s < 0.25 && hsl.l > 0.8)) return hslToHex({ h: 218 / 360, s: 0.14, l }, alpha);
  return hslToHex({ h: hsl.h, s: Math.min(1, hsl.s * 0.95), l }, alpha);
}

/** Dunkles Gegenstück einer hellen Fläche mit Deckkraft (rgba): Farbton gespiegelt, Deckkraft bleibt. */
export function darkOfRgba(value) {
  const [r, g, b, a] = value.match(/[\d.]+/g).map(Number);
  const hex = darkOf([r, g, b].map((x) => x.toString(16).padStart(2, '0')).join(''));
  const n = (i) => parseInt(hex.slice(i, i + 2), 16);
  return `rgba(${n(1)}, ${n(3)}, ${n(5)}, ${a})`;
}

/** Deklarationen der Design-Variablen (`--name: var(--c-…)`) aus dem ersten :root von styles.css. */
export function rootTokens(css) {
  const block = /:root\s*\{([^}]*)\}/.exec(css)?.[1] ?? '';
  return [...block.matchAll(/(--[a-z0-9-]+)\s*:\s*(var\(--c-[^;]+\))\s*;/g)]
    .filter((match) => !match[1].startsWith('--c-'))
    .map((match) => `  ${match[1]}: ${match[2]};`);
}

export function buildTheme(config, css = '') {
  const colors = [...new Set(config.colors)].sort();
  const rgba = Object.entries(config.rgba ?? {}).sort(([a], [b]) => a.localeCompare(b));
  const dark = (hex) => config.dark?.[hex] ?? darkOf(hex);
  const light = [
    ...colors.map((hex) => `  --c-${hex}: #${hex};`),
    ...rgba.map(([name, value]) => `  --c-${name}: ${value};`),
  ].join('\n');
  const night = [
    ...colors.map((hex) => `  --c-${hex}: ${dark(hex)};`),
    ...rgba.map(([name, value]) => `  --c-${name}: ${config.dark?.[name] ?? darkOfRgba(value)};`),
  ].join('\n');
  const derived = rootTokens(css).join('\n');
  return `/* Erzeugt von build/theme.mjs aus src/theme-colors.json – nicht von Hand ändern (\`npm run theme\`). */

:root {
${light}
}

:root[data-theme='dark'] {
  color-scheme: dark;
${night}
}

/* Immer dunkle Flächen (Seitenleiste) behalten in beiden Themen die Originalfarben. */
:root[data-theme='dark'] .app-sidebar {
${light}
${derived}
}
`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const config = JSON.parse(readFileSync(join(root, 'src/theme-colors.json'), 'utf8'));
  const css = readFileSync(join(root, 'src/styles.css'), 'utf8');
  writeFileSync(join(root, 'src/theme.css'), buildTheme(config, css));
  console.log(`src/theme.css: ${new Set(config.colors).size} Farben, ${Object.keys(config.rgba ?? {}).length} rgba`);
}
