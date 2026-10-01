import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { barCases } from '../src/content/barCases';
import { priceActionTrendsCourse } from '../src/content/course';
import { ACADEMY_PROGRESS_VERSION } from '../src/features/progress';

/*
 * Stufe 5b/5c: Farbschema. Dunkel, Bunt (und „wie im System“) für alle Kernansichten und wichtige
 * Zustände: axe ohne Befund, kein Überlauf, Auswahl bleibt erhalten, kein Aufblitzen.
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const published = priceActionTrendsCourse.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const [caseA] = barCases;
const lesson = priceActionTrendsCourse.units[0].lessons.find((item) => item.status === 'published' && item.steps.some((step) => step.type === 'question'))!;
const question = lesson.steps.find((step) => step.type === 'question')! as Extract<(typeof lesson.steps)[number], { type: 'question' }>;
const wrong = question.options.find((option) => option.id !== question.correctOptionId)!;

const record = {
  version: ACADEMY_PROGRESS_VERSION,
  completedLessonIds: published.map((item) => item.id),
  answers: {},
  guideSeenAt: '2026-09-01T08:00:00.000Z',
  caseRuns: { [caseA.id]: [{ sessionId: 'run-1', completedAt: '2026-09-28T10:00:00.000Z', best: 1, defensible: 0, mistake: 0, missedCues: 0 }] },
};

async function seed(page: Page, theme: string | null, data: Record<string, unknown> = record) {
  await page.addInitScript(
    ([stored, value]) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      if (stored) localStorage.setItem('wqt-academy-ui-v1', JSON.stringify({ theme: stored }));
      localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(value));
    },
    [theme, data] as const,
  );
}

const overflow = (page: Page) => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
const attr = (page: Page) => page.evaluate(() => document.documentElement.getAttribute('data-theme'));

const VIEWS: Array<[string, string]> = [
  ['Lernpfad', '/#/'],
  ['Buchmodus', '/#/chapters'],
  ['Leser', `/#/read/${priceActionTrendsCourse.units[1].id}`],
  ['Üben', '/#/practice'],
  ['Kurzlernen', '/#/study/20'],
  ['Trainer', `/#/train/${caseA.id}`],
  ['Rückblick', `/#/train/${caseA.id}/review/run-1`],
  ['Fortschritt', '/#/progress'],
  ['Gespeichert', '/#/saved'],
  ['Glossar', '/#/glossary'],
  ['Bibliothek', '/#/library'],
  ['Einstellungen', '/#/settings'],
];

test.describe('Farbschema', () => {
  test('Standard hell: data-theme ist „light“; Wahl „Dunkel“ gilt sofort und bleibt nach Reload', async ({ page }) => {
    await seed(page, null);
    await page.goto('/#/settings');
    expect(await attr(page)).toBe('light');
    await page.getByRole('radio', { name: 'Dunkel', exact: true }).check();
    expect(await attr(page)).toBe('dark');
    expect(JSON.parse((await page.evaluate(() => localStorage.getItem('wqt-academy-ui-v1')))!).theme).toBe('dark');
    await page.reload();
    await expect(page.getByRole('radio', { name: 'Dunkel', exact: true })).toBeChecked();
    expect(await attr(page)).toBe('dark');
    // Lernstand bleibt unverändert und der Hintergrund ist wirklich dunkel.
    const luminance = await page.evaluate(() => {
      const [r, g, b] = getComputedStyle(document.body).backgroundColor.match(/\d+/g)!.map(Number);
      return (r + g + b) / 3;
    });
    expect(luminance).toBeLessThan(60);
  });

  test('„Wie im System“ folgt dem Systemwunsch, auch wenn er sich ändert', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await seed(page, 'auto');
    await page.goto('/#/settings');
    expect(await attr(page)).toBe('dark');
    await page.emulateMedia({ colorScheme: 'light' });
    await expect.poll(() => attr(page)).toBe('light');
  });

  test('gespeicherte Wahl gilt vor dem ersten Zeichnen (kein Aufblitzen)', async ({ page }) => {
    await seed(page, 'dark');
    await page.addInitScript(() => {
      document.addEventListener('DOMContentLoaded', () => {
        (window as unknown as { __themeAtLoad: string | null }).__themeAtLoad = document.documentElement.getAttribute('data-theme');
      });
    });
    await page.goto('/#/');
    expect(await page.evaluate(() => (window as unknown as { __themeAtLoad: string | null }).__themeAtLoad)).toBe('dark');
  });

  test('Bunt: Wahl gilt sofort, bleibt nach Reload und ändert die Akzentfarben, nicht die Struktur', async ({ page }) => {
    await seed(page, null);
    await page.goto('/#/settings');
    const canvasLight = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    await page.getByRole('radio', { name: 'Bunt', exact: true }).check();
    expect(await attr(page)).toBe('bunt');
    await page.reload();
    await expect(page.getByRole('radio', { name: 'Bunt', exact: true })).toBeChecked();
    expect(await attr(page)).toBe('bunt');
    const canvasBunt = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(canvasBunt).not.toBe(canvasLight);
    // Struktur bleibt hell: der Hintergrund ist hell, nicht dunkel.
    expect(canvasBunt.match(/\d+/g)!.map(Number).slice(0, 3).reduce((a, b) => a + b, 0) / 3).toBeGreaterThan(200);
  });
});

for (const theme of ['dark', 'bunt'] as const) {
  test.describe(`Thema ${theme}`, () => {
  test('alle Kernansichten: axe ohne Befund und kein Überlauf bei 360 px', async ({ page }) => {
    test.setTimeout(180_000);
    await seed(page, theme);
    await page.setViewportSize({ width: 360, height: 740 });
    for (const [name, hash] of VIEWS) {
      await page.goto(hash);
      await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
      expect(await attr(page), name).toBe(theme);
      expect(await overflow(page), `${name}: Überlauf`).toBeLessThanOrEqual(0);
      const axe = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
      expect(axe.violations.map((violation) => `${name}: ${violation.id}`)).toEqual([]);
    }
  });

  test('wichtige Zustände: Antwort-Rückmeldung, Trainer-Auflösung, Bar-Album, Spiele, Hilfe', async ({ page }) => {
    test.setTimeout(180_000);
    await seed(page, theme);
    const axe = async (name: string, include?: string) => {
      const builder = new AxeBuilder({ page }).withTags(AXE_TAGS);
      if (include) builder.include(include);
      expect((await builder.analyze()).violations.map((violation) => `${name}: ${violation.id}`)).toEqual([]);
    };
    // Lektionsfrage falsch beantwortet
    await page.goto(`/#/lesson/${lesson.id}`);
    for (let i = 0; i < 12 && (await page.getByRole('radio').count()) === 0; i += 1) await page.getByRole('button', { name: 'Weiter', exact: true }).click();
    await page.getByRole('radio', { name: new RegExp(wrong.label.slice(0, 20).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) }).click();
    await expect(page.getByText('Noch nicht ganz.')).toBeVisible();
    await axe('Rückmeldung');
    // Trainer: Entscheidung abgeben
    await page.goto(`/#/train/${caseA.id}`);
    await page.getByRole('button', { name: /Runde starten/ }).click();
    await axe('Trainer-Entscheidung');
    await page.locator('.decision-tile').first().click();
    await page.getByRole('checkbox').first().check();
    await page.getByRole('button', { name: 'Entscheidung abgeben' }).click();
    await expect(page.locator('.trainer-reveal')).toBeVisible();
    await axe('Trainer-Auflösung');
    // Fortschritt: Bar-Album
    await page.goto('/#/progress');
    await expect(page.locator('.bar-album')).toBeVisible();
    await axe('Bar-Album', '.bar-album');
    // Üben: Spiele
    await page.goto('/#/practice');
    await page.locator('.match-game').getByRole('button', { name: /^Spielen/ }).click();
    await axe('Begriffe-Memory', '.match-game');
    await page.getByRole('button', { name: 'Beenden' }).first().click();
    await page.getByRole('button', { name: 'Ohne Zeit spielen' }).click();
    await axe('Blitzrunde', '.blitz-game');
    await page.locator('.blitz-game').getByRole('button', { name: 'Beenden' }).click();
    // Üben: Finde den Bar, Ordne die Schritte (C-04)
    await page.locator('.signal-game').getByRole('button', { name: /^Spielen/ }).click();
    await page.locator('.signal-hit').first().click();
    await axe('Finde den Bar', '.signal-game');
    await page.locator('.order-game').getByRole('button', { name: /^Spielen/ }).click();
    await page.locator('.order-game').getByRole('button', { name: 'Reihenfolge prüfen' }).click();
    await axe('Ordne die Schritte', '.order-game');
    // Hilfe-Dialog
    await page.getByRole('button', { name: 'Hilfe', exact: true }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await axe('Hilfe', 'dialog, [role="dialog"]');
  });
});
}
