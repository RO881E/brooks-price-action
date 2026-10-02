import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { priceActionTrendsCourse } from '../src/content/course';
import { ACADEMY_PROGRESS_VERSION } from '../src/features/progress';

/*
 * P11: App-Gefühl und Vertrauen – verständliche Einstellungen, Einführung mit Lernrhythmus,
 * sichere Adressen (nie eine leere Seite), Hinweise zu Update und Offline.
 */

const published = priceActionTrendsCourse.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');

async function seed(page: Page, ids: string[] = [], extra: Record<string, unknown> = {}) {
  await page.addInitScript(
    ({ completed, version, more }) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem(
        'wqt-academy-progress-v1',
        JSON.stringify({ version, completedLessonIds: completed, answers: {}, guideSeenAt: '2026-09-01T08:00:00.000Z', ...more }),
      );
    },
    { completed: ids, version: ACADEMY_PROGRESS_VERSION, more: extra },
  );
}

const stored = (page: Page) => page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));

test.describe('P11 Einstellungen', () => {
  test('Darstellung zuerst, jede Option erklärt ihre Wirkung, jede Wirkung steht dabei', async ({ page }) => {
    await seed(page);
    await page.goto('/#/settings');
    await expect(page.getByRole('heading', { name: 'Einstellungen', level: 1 })).toBeVisible();
    const headings = await page.getByRole('heading', { level: 2 }).allTextContents();
    expect(headings.indexOf('Darstellung')).toBeLessThan(headings.indexOf('Tagesziel'));
    expect(headings.indexOf('Tagesziel')).toBeLessThan(headings.indexOf('Datensicherung'));
    await expect(page.getByText(/Wirkung: sofort in der ganzen App/)).toBeVisible();
    await expect(page.getByText(/Wirkung: weniger Abstände/)).toBeVisible();

    // Bewegung reduzieren und kompakte Ansicht bleiben unverändert wirksam.
    await page.goto('/#/settings');
    await page.getByRole('radio', { name: 'Bewegung immer reduzieren' }).check();
    await page.getByRole('checkbox', { name: /Kompakte Darstellung/ }).check();
    const settings = (await stored(page)).settings;
    expect(settings).toMatchObject({ motion: 'reduce', compact: true });
    await expect(page.locator('html')).toHaveAttribute('data-motion', 'reduce');
  });

  test('alle Optionen sind per Tastatur erreichbar; 360 px ohne Überlauf, axe ohne Befund', async ({ page }) => {
    await seed(page);
    await page.goto('/#/settings');
    const motion = page.getByRole('radio', { name: 'Bewegung immer reduzieren' });
    await motion.focus();
    await page.keyboard.press('Space');
    await expect(motion).toBeChecked();
    const compact = page.getByRole('checkbox', { name: /Kompakte Darstellung/ });
    await compact.focus();
    await page.keyboard.press('Space');
    await expect(compact).toBeChecked();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
  });

  test('Offline & App nennt Version und Update-Stand; Sicherung bleibt unverändert', async ({ page }) => {
    await seed(page);
    await page.goto('/#/settings');
    await expect(page.getByTestId('app-version')).toContainText(/Version \d+\.\d+\.\d+ · /);
    await expect(page.getByTestId('app-version')).toContainText('neueste geladene Version');
    await expect(page.getByRole('heading', { name: 'Datensicherung' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Sicherung herunterladen|Sicherung exportieren|Sicherung/ }).first()).toBeVisible();
  });
});

test.describe('P11 Einführung', () => {
  test('Lernrhythmus Lesen → Anwenden → Wiederholen, überspringbar, ohne Ergebnisversprechen', async ({ page }) => {
    await page.addInitScript(() => localStorage.removeItem('wqt-academy-progress-v1'));
    await page.goto('/');
    const welcome = page.getByRole('region', { name: 'So lernst du in der WQT Academy' });
    await expect(welcome).toBeVisible();
    const loop = welcome.getByRole('list', { name: 'Der Lernrhythmus' });
    await expect(loop.getByRole('listitem')).toHaveText([/Lesen/, /Anwenden/, /Wiederholen/]);
    const text = await welcome.innerText();
    expect(text).not.toMatch(/Gewinn|Rendite|profitabel|verdien|Erfolgsquote/i);
    // Sofortiger Start und Überspringen ohne Zwang.
    await expect(welcome.getByRole('button', { name: /Erste Lektion starten/ })).toBeVisible();
    await welcome.getByRole('button', { name: 'Einführung schließen' }).click();
    await expect(welcome).toHaveCount(0);
    // Dieselbe Erklärung bleibt über „Hilfe“ erreichbar.
    await page.getByRole('button', { name: 'Hilfe', exact: true }).click();
    await expect(page.getByRole('dialog').getByRole('list', { name: 'Der Lernrhythmus' })).toBeVisible();
    expect((await stored(page)).completedLessonIds ?? []).toEqual([]);
  });
});

test.describe('P11 Sichere Adressen', () => {
  const bad = ['/#/train/gibt-es-nicht', '/#/lesson/price-action-trends.gibt-es', '/#/read/gibt-es-nicht', '/#/chapters', '/#/study/15'];

  test('unbekannte oder nicht freigegebene Ziele führen mit Hinweis zurück statt auf eine leere Seite', async ({ page }) => {
    await seed(page, published.slice(0, 2).map((lesson) => lesson.id));
    await page.goto('/#/path');
    const before = JSON.stringify((await stored(page)).completedLessonIds);
    for (const hash of bad) {
      await page.goto(hash);
      await expect(page.getByRole('heading', { name: 'Start', level: 1 })).toBeVisible();
      await expect(page.getByText('Dieser Link führt zu keiner verfügbaren Ansicht oder Lektion.')).toBeVisible();
    }
    expect(JSON.stringify((await stored(page)).completedLessonIds)).toBe(before);
  });
});
