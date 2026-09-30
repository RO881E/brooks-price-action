import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { buildTheme, darkOf } from './theme.mjs';

const root = join(import.meta.dirname, '..');
const read = (file: string) => readFileSync(join(root, file), 'utf8');
const config = JSON.parse(read('src/theme-colors.json')) as { colors: string[]; rgba: Record<string, string>; dark?: Record<string, string> };
const styles = read('src/styles.css');
const themeCss = read('src/theme.css');

/** Deklarationsblöcke ohne Kommentare (nur dort stehen Farben). */
function declarations(css: string): string {
  const text = css.replace(/\/\*[\s\S]*?\*\//g, '');
  let out = '';
  let pos = 0;
  for (const match of text.matchAll(/[{}]/g)) {
    if (match[0] === '}') out += text.slice(pos, match.index);
    pos = (match.index ?? 0) + 1;
  }
  return out;
}

const luminance = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a: string, b: string) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const dark = (hex: string) => config.dark?.[hex] ?? darkOf(hex);

describe('Farb-Tokens und dunkles Thema (Stufe 5b)', () => {
  it('theme.css ist aktuell (npm run theme)', () => {
    expect(themeCss).toBe(buildTheme(config, styles));
  });

  it('styles.css enthält keine festen hellen Farben mehr – nur Tokens', () => {
    const body = declarations(styles);
    expect(body.match(/#[0-9a-fA-F]{3,8}\b/g) ?? []).toEqual([]);
    const lightRgba = [...body.matchAll(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/g)].filter((m) => Math.min(+m[1], +m[2], +m[3]) > 190);
    expect(lightRgba.map((m) => m[0])).toEqual([]);
  });

  it('jedes verwendete Token ist definiert', () => {
    const defined = new Set([...config.colors.map((hex) => `--c-${hex}`), ...Object.keys(config.rgba).map((name) => `--c-${name}`)]);
    const used = new Set([...declarations(styles).matchAll(/var\((--c-[a-z0-9_-]+)\)/g)].map((m) => m[1]));
    expect([...used].filter((name) => !defined.has(name))).toEqual([]);
    expect([...defined].filter((name) => !used.has(name))).toEqual([]);
  });

  it('dunkle Werte: Text hell auf dunklem Grund, Kontrast bleibt hoch', () => {
    expect(luminance(dark('15191f'))).toBeGreaterThan(0.5);
    expect(luminance(dark('ffffff'))).toBeLessThan(0.02);
    expect(contrast(dark('15191f'), dark('ffffff'))).toBeGreaterThan(10);
    for (const ink of ['626b78', '1d4f91', '0b6b63', '5b3fb0', 'a8410f', '8a5e1e', '444b54']) {
      expect(contrast(dark(ink), dark('ffffff')), `Text ${ink} auf Fläche`).toBeGreaterThanOrEqual(4.5);
      expect(contrast(dark(ink), dark('f4f3ef')), `Text ${ink} auf Grund`).toBeGreaterThanOrEqual(4.5);
    }
  });

  it('Seitenleiste behält im dunklen Thema die Originalfarben samt abgeleiteten Variablen', () => {
    const block = themeCss.slice(themeCss.indexOf('.app-sidebar {'));
    expect(block).toContain('--c-0d1728: #0d1728;');
    expect(block).toMatch(/--navy-900: var\(--c-0d1728\);/);
  });
});
