import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { priceActionTrendsCourse } from '../src/content/course';
import { glossaryEntries } from '../src/content/glossary';
import { stepTermLinks } from '../src/content/stepTerms';

/*
 * F-21: Begriffe am Lernort im Buchleser. Läuft auf Desktop und Mobil.
 */

const intro = priceActionTrendsCourse.units[0];
const [first] = intro.lessons;
const link = stepTermLinks.find((item) => item.lessonId === first.id)!;
const linkedStep = first.steps.find((step) => step.id === link.stepId)!;
const term = glossaryEntries.find((entry) => entry.term === link.terms[0])!;
const lockedLink = stepTermLinks.find((item) => item.lessonId.includes('chapter-02'))!;
const lockedUnit = priceActionTrendsCourse.units.find((unit) => unit.lessons.some((lesson) => lesson.id === lockedLink.lessonId))!;

function trackErrors(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  return errors;
}

const stored = (page: Page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));

async function openFirstSection(page: Page) {
  await page.goto(`/#/read/${intro.id}`);
  await expect(page.getByRole('heading', { name: first.title, level: 2 })).toBeVisible();
}

test.describe('F-21 Begriffe am Lernort', () => {
  test('nur zugeordnete Schritte zeigen Begriffe; Panel per Tastatur, Escape gibt Fokus und Lesestelle zurück', async ({ page }) => {
    const errors = trackErrors(page);
    await openFirstSection(page);

    // Genau der zugeordnete Schritt trägt Begriffe, die anderen nicht.
    await expect(page.locator('.step-terms')).toHaveCount(1);
    const linked = page.getByRole('region', { name: `Schritt ${first.steps.indexOf(linkedStep) + 1}: ${linkedStep.title}` });
    const button = linked.getByRole('button', { name: term.term, exact: true });
    await expect(button).toHaveAttribute('aria-expanded', 'false');

    await button.scrollIntoViewIfNeeded();
    const before = await page.evaluate(() => window.scrollY);
    await button.focus();
    await page.keyboard.press('Enter');
    const panel = page.getByRole('region', { name: term.term, exact: true });
    await expect(panel).toBeFocused();
    await expect(panel).toContainText(term.definition);
    await expect(button).toHaveAttribute('aria-expanded', 'true');

    // Tab erreicht Link und Schließen im Panel.
    await page.keyboard.press('Tab');
    await expect(panel.getByRole('link', { name: 'Im Glossar öffnen' })).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(panel.getByRole('button', { name: `Schließen: ${term.term}` })).toBeFocused();

    await page.keyboard.press('Escape');
    await expect(panel).toHaveCount(0);
    await expect(button).toBeFocused();
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(Math.abs((await page.evaluate(() => window.scrollY)) - before)).toBeLessThanOrEqual(2);
    await expect(page).toHaveURL(new RegExp(`#/read/${intro.id}`));

    // Schließen-Schaltfläche verhält sich genauso.
    await button.click();
    await page.getByRole('button', { name: `Schließen: ${term.term}` }).click();
    await expect(panel).toHaveCount(0);
    await expect(button).toBeFocused();

    // Nachschlagen verändert weder Antworten noch Abschluss noch XP.
    const data = await stored(page);
    expect(data.completedLessonIds ?? []).toEqual([]);
    expect(Object.keys(data.answers ?? {})).toEqual([]);
    expect(errors).toEqual([]);
  });

  test('Glossar-Link, Browser-Zurück zur Lesestelle und alter Glossar-Deep-Link', async ({ page }) => {
    await openFirstSection(page);
    await page.getByRole('button', { name: term.term, exact: true }).click();
    await page.getByRole('link', { name: 'Im Glossar öffnen' }).click();
    await expect(page).toHaveURL(new RegExp(`#/glossary\\?term=${encodeURIComponent(term.term)}$`));
    await expect(page.getByRole('heading', { name: 'Price-Action-Glossar' })).toBeVisible();
    await expect(page.getByRole('heading', { name: term.term, level: 2, exact: true })).toBeVisible();

    await page.goBack();
    await expect(page.getByRole('heading', { name: first.title, level: 2 })).toBeVisible();
    await expect(page).toHaveURL(new RegExp(`#/read/${intro.id}\\?lesson=${first.id}`));
    await expect(page.getByRole('button', { name: term.term, exact: true })).toBeVisible();

    // Bestehende Deep-Links ins Glossar funktionieren unverändert.
    await page.goto('/#/glossary?term=Trend');
    await expect(page.getByRole('searchbox')).toHaveValue('Trend');
    await expect(page.getByRole('heading', { name: 'Trend', level: 2, exact: true })).toBeVisible();
  });

  test('Reload schließt das Panel ohne gespeicherten Zustand; gesperrte Abschnitte bleiben gesperrt', async ({ page }) => {
    await openFirstSection(page);
    await page.getByRole('button', { name: term.term, exact: true }).click();
    await expect(page.getByRole('region', { name: term.term, exact: true })).toBeVisible();
    await page.reload();
    await expect(page.getByRole('heading', { name: first.title, level: 2 })).toBeVisible();
    await expect(page.getByRole('button', { name: term.term, exact: true })).toHaveAttribute('aria-expanded', 'false');
    await expect(page.getByRole('region', { name: term.term, exact: true })).toHaveCount(0);
    expect(JSON.stringify(await stored(page))).not.toContain(term.term);

    // Ein Abschnitt mit Begriffen in einem gesperrten Kapitel zeigt nichts davon.
    await page.goto(`/#/read/${lockedUnit.id}?lesson=${lockedLink.lessonId}`);
    await expect(page.getByRole('heading', { name: 'Dieses Kapitel ist noch gesperrt' })).toBeVisible();
    await expect(page.locator('.step-terms')).toHaveCount(0);
    await expect(page.getByRole('button', { name: lockedLink.terms[0], exact: true })).toHaveCount(0);
  });

  test('barrierearm und ohne Überbreite bei 360 px mit geöffnetem Begriff', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await openFirstSection(page);
    const button = page.getByRole('button', { name: term.term, exact: true });
    await button.click();
    const panel = page.getByRole('region', { name: term.term, exact: true });
    await expect(panel).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const box = (await panel.boundingBox())!;
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(360);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
  });
});
