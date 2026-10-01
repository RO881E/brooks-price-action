import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { barCases } from '../src/content/barCases';
import { TRADE_DECISION_LABELS } from '../src/content/barCaseTypes';
import { priceActionTrendsCourse } from '../src/content/course';

/*
 * Stufe 4a: Chart-Trainer als Mini-Spiel – Entscheidungs-Kacheln, Bars erscheinen
 * nacheinander, Auflösung mit dem Bullen. Die Radiogruppe bleibt der zugängliche Kern.
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const barCase = barCases.find((item) => item.status === 'approved' && item.decisions.length >= 2)!;
const unitIndex = priceActionTrendsCourse.units.findIndex((unit) => unit.id === barCase.unitId);
const unlock = priceActionTrendsCourse.units
  .slice(0, unitIndex + 1)
  .flatMap((unit) => unit.lessons)
  .filter((lesson) => lesson.status === 'published')
  .map((lesson) => lesson.id);
const first = barCase.decisions[0];
const best = first.options.find((option) => option.verdict === 'best')!;

async function start(page: Page) {
  await page.addInitScript((ids) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem(
      'wqt-academy-progress-v1',
      JSON.stringify({ version: 14, completedLessonIds: ids, answers: {}, guideSeenAt: '2026-09-29T08:00:00.000Z' }),
    );
  }, unlock);
  await page.goto(`/#/train/${barCase.id}`);
  await page.getByRole('button', { name: /Runde starten/ }).click();
}

test.describe('Chart-Trainer als Mini-Spiel', () => {
  test('drei große Kacheln mit Symbol und Text; Radiogruppe per Klick und Tastatur; Namen unverändert', async ({ page }) => {
    await start(page);
    const tiles = page.locator('.decision-tile');
    await expect(tiles).toHaveCount(first.options.length);
    for (const { decision } of first.options) {
      const radio = page.getByRole('radio', { name: TRADE_DECISION_LABELS[decision], exact: true });
      await expect(radio).toBeAttached();
      const tile = page.locator(`.decision-tile[data-decision="${decision}"]`);
      await expect(tile.locator('svg.icon')).toHaveAttribute('aria-hidden', 'true');
      const box = (await tile.boundingBox())!;
      expect(box.height).toBeGreaterThanOrEqual(80);
      expect(box.width).toBeGreaterThanOrEqual(90);
    }
    // Klick wählt, Pfeiltasten wechseln innerhalb der Gruppe.
    await page.locator('.decision-tile[data-decision="wait"]').click();
    await expect(page.getByRole('radio', { name: TRADE_DECISION_LABELS.wait, exact: true })).toBeChecked();
    await page.getByRole('radio', { name: TRADE_DECISION_LABELS.wait, exact: true }).focus();
    await page.keyboard.press('ArrowRight');
    const checked = await page.locator('.decision-tile input:checked').count();
    expect(checked).toBe(1);
    // Kacheln allein tragen keine Bedeutung: Text bleibt sichtbar.
    await expect(page.locator('.decision-tile .decision-name').first()).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page }).include('.trainer-decision').withTags(AXE_TAGS).analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
  });

  test('Abgabe: Auflösung mit Bulle, neue Bars sind markiert und erscheinen animiert', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await start(page);
    await page.getByRole('radio', { name: TRADE_DECISION_LABELS[best.decision], exact: true }).check();
    await page.getByRole('checkbox', { name: first.cues[0].label }).check();
    await page.getByRole('button', { name: 'Entscheidung abgeben' }).click();
    const reveal = page.locator('.trainer-reveal');
    await expect(reveal.locator('.bull-bubble')).toContainText('Gut gesehen');
    await expect(reveal.locator('img.bull')).toHaveAttribute('alt', '');
    const fresh = page.locator('.case-bar.is-new');
    expect(await fresh.count()).toBeGreaterThan(0);
    expect(await fresh.first().evaluate((el) => getComputedStyle(el).animationName)).toBe('bar-in');
    const axe = await new AxeBuilder({ page }).include('.trainer-reveal').withTags(AXE_TAGS).analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
  });

  test('Reduzierte Bewegung: keine Bar-Animation', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await start(page);
    await page.getByRole('radio', { name: TRADE_DECISION_LABELS[best.decision], exact: true }).check();
    await page.getByRole('checkbox', { name: first.cues[0].label }).check();
    await page.getByRole('button', { name: 'Entscheidung abgeben' }).click();
    const fresh = page.locator('.case-bar.is-new').first();
    await expect(fresh).toBeAttached();
    expect(await fresh.evaluate((el) => getComputedStyle(el).animationName)).toBe('none');
  });
});
