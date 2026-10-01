import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { priceActionTrendsCourse } from '../src/content/course';

/*
 * P05: Designgrundlage – Akzent je Lernmodus, farbige Navigation, einheitliche
 * Bausteine. Farbe ordnet nur zusätzlich ein; Kontrast, Fokus, Zoom und
 * reduzierte Bewegung bleiben erhalten.
 */

const completed = priceActionTrendsCourse.units
  .slice(0, 3)
  .flatMap((unit) => unit.lessons)
  .filter((lesson) => lesson.status === 'published')
  .map((lesson) => lesson.id);

async function seed(page: Page) {
  await page.addInitScript((ids) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem(
      'wqt-academy-progress-v1',
      JSON.stringify({ version: 14, completedLessonIds: ids, answers: {}, guideSeenAt: '2026-09-29T08:00:00.000Z' }),
    );
  }, completed);
}

const VIEWS: Array<{ hash: string; mode: string; heading: RegExp | string }> = [
  { hash: '/#/', mode: 'read', heading: /Price Action: Trends/ },
  { hash: '/#/practice', mode: 'practice', heading: 'Analyse-Training' },
  { hash: '/#/progress', mode: 'progress', heading: 'Fortschritt' },
  { hash: '/#/glossary', mode: 'read', heading: 'Price-Action-Glossar' },
  { hash: '/#/study/20', mode: 'practice', heading: /Für etwa 20 Minuten/ },
];

const accent = (page: Page, selector: string) =>
  page.locator(selector).first().evaluate((el) => getComputedStyle(el).getPropertyValue('--mode-base').trim());

test.describe('P05 Designgrundlage', () => {
  test.beforeEach(async ({ page }) => {
    await seed(page);
  });

  test('jeder Bereich trägt seinen Lernmodus; die Akzentfarben sind unterscheidbar', async ({ page }) => {
    await page.goto('/#/');
    const colors = new Map<string, string>();
    for (const view of VIEWS) {
      await page.goto(view.hash);
      await expect(page.locator('.view-container, .page-shell').first()).toBeVisible();
      const container = page.locator('.view-container');
      // Der Trainer und das Kurzlernen setzen ihren Modus selbst; sonst der Bereich.
      const mode = await container.evaluate((el) => el.getAttribute('data-mode'));
      expect(mode === view.mode || (await page.locator(`[data-mode="${view.mode}"]`).count()) > 0).toBe(true);
      colors.set(view.mode, await accent(page, `[data-mode="${view.mode}"]`));
    }
    expect(colors.get('read')).not.toBe(colors.get('practice'));
    expect(colors.get('practice')).not.toBe(colors.get('progress'));
    expect(new Set(colors.values()).size).toBe(colors.size);
  });

  test('Navigation: Modus je Eintrag, aktiver Ort per aria-current und Beschriftung, nicht nur per Farbe', async ({ page, isMobile }) => {
    await page.goto('/#/practice');
    const nav = page.getByRole('navigation', { name: isMobile ? 'Mobile Navigation' : 'Hauptnavigation' });
    await expect(nav.locator('button[data-mode]').first()).toBeVisible();
    const active = nav.locator('[aria-current="page"]');
    await expect(active).toHaveCount(1);
    await expect(active).toContainText('Üben');
    // Jeder Eintrag hat Text (Beschriftung) – Farbe ist Zusatz.
    for (const label of await nav.locator('button').allTextContents()) expect(label.trim().length).toBeGreaterThan(2);
  });

  test('Kontrast (axe) und kein Überlauf in allen Kernansichten', async ({ page }) => {
    for (const view of VIEWS) {
      await page.goto(view.hash);
      await expect(page.getByRole('heading', { name: view.heading, level: 1 }).first()).toBeVisible();
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, view.hash).toBeLessThanOrEqual(0);
      const axe = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(axe.violations.map((violation) => `${view.hash}: ${violation.id}`)).toEqual([]);
    }
  });

  test('Bedienelemente bleiben mindestens 44 px hoch, Fokus bleibt sichtbar', async ({ page }) => {
    await page.goto('/#/practice');
    await expect(page.locator('.review-mode-card').first()).toBeVisible();
    const buttons = page.locator('.review-mode-card .primary-button, .review-mode-card .secondary-button');
    const count = await buttons.count();
    expect(count).toBeGreaterThan(1);
    for (let index = 0; index < count; index += 1) {
      const box = (await buttons.nth(index).boundingBox())!;
      expect(box.height).toBeGreaterThanOrEqual(43.5);
    }
    await buttons.first().focus();
    const outline = await buttons.first().evaluate((el) => getComputedStyle(el).outlineStyle);
    expect(outline).not.toBe('none');
  });

  test('200-%-Zoom (schmales Fenster) schneidet keine Überschrift ab', async ({ page }) => {
    await page.setViewportSize({ width: 640, height: 800 });
    for (const view of VIEWS) {
      await page.goto(view.hash);
      const heading = page.getByRole('heading', { level: 1 }).first();
      await expect(heading).toBeVisible();
      const clipped = await heading.evaluate((el) => el.scrollWidth > el.clientWidth + 1);
      expect(clipped, view.hash).toBe(false);
    }
  });

  test('reduzierte Bewegung: keine spürbaren Übergänge an Buttons und Navigation', async ({ page, isMobile }) => {
    const seconds = (selector: string) =>
      page.locator(selector).first().evaluate((el) => {
        const value = getComputedStyle(el).transitionDuration.split(',')[0].trim();
        return parseFloat(value) / (value.endsWith('ms') ? 1000 : 1);
      });
    const navButton = isMobile ? '.mobile-bottom-nav button' : '.sidebar-nav button';
    await page.goto('/#/practice');
    expect(await seconds('.review-mode-card .primary-button')).toBeGreaterThan(0.05);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    expect(await seconds('.review-mode-card .primary-button')).toBeLessThan(0.001);
    expect(await seconds(navButton)).toBeLessThan(0.001);
  });
});
