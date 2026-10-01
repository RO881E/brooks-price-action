import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { ACADEMY_PROGRESS_VERSION } from '../src/features/progress';
import { priceActionTrendsCourse } from '../src/content/course';

/*
 * F-22: Leseoptionen im Buchmodus. Läuft auf Desktop und Mobil.
 */

const intro = priceActionTrendsCourse.units[0];
const [first, second] = intro.lessons;
const PARAGRAPH = '.reader-step .step-copy > p:not(.eyebrow):not(.question-prompt):not(.chart-caption)';

async function seed(page: Page, record: Record<string, unknown>) {
  await page.addInitScript((value) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(value));
  }, record);
}

const stored = (page: Page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));

const paragraphStyle = (page: Page) =>
  page.locator(PARAGRAPH).first().evaluate((element) => {
    const style = getComputedStyle(element);
    return { size: Number.parseFloat(style.fontSize), leading: Number.parseFloat(style.lineHeight) };
  });

async function openOptions(page: Page) {
  const summary = page.locator('.reading-options summary');
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('group', { name: 'Schriftgröße' })).toBeVisible();
}

test.describe('F-22 Leseoptionen', () => {
  test('per Tastatur einstellen, sofort sichtbar, nach Reload erhalten; „Standard“ setzt nur sie zurück', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await seed(page, {
      version: 9,
      completedLessonIds: [first.id],
      answers: {},
      settings: { motion: 'reduce', compact: false },
      readerPositions: {
        [intro.id]: { lessonId: second.id, stepId: second.steps[1].id, updatedAt: '2026-09-28T10:00:00.000Z' },
      },
    });
    await page.goto(`/#/read/${intro.id}?lesson=${second.id}`);
    await expect(page.getByRole('heading', { name: second.title, level: 2 })).toBeVisible();
    const base = await paragraphStyle(page);
    await expect(page.locator('.reading-options summary')).toContainText('Lesetext Standard');

    await openOptions(page);
    const sizes = page.getByRole('group', { name: 'Schriftgröße' });
    await expect(sizes.getByRole('radio', { name: 'Standard' })).toBeChecked();
    await sizes.getByRole('radio', { name: 'Standard' }).focus();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await expect(sizes.getByRole('radio', { name: 'Sehr groß' })).toBeChecked();
    await page.getByRole('group', { name: 'Zeilenabstand' }).getByRole('radio', { name: 'Weit', exact: true }).check();

    // Warten, bis beide Optionen wirken (unter Last kann das einen Frame dauern).
    await expect
      .poll(async () => {
        const style = await paragraphStyle(page);
        return style.size > base.size * 1.2 && style.leading / style.size > (base.leading / base.size) * 1.08;
      })
      .toBe(true);
    const larger = await paragraphStyle(page);
    await expect(page.locator('.reading-options summary')).toContainText('Schrift Sehr groß, Zeilenabstand Weit');

    await page.reload();
    await expect(page.getByRole('heading', { name: second.title, level: 2 })).toBeVisible();
    await expect.poll(() => paragraphStyle(page)).toEqual(larger);
    let data = await stored(page);
    expect(data.version).toBe(ACADEMY_PROGRESS_VERSION);
    expect(data.readingOptions).toEqual({ size: 'larger', spacing: 'relaxed' });
    // Andere Einstellungen, Abschluss und Lesestelle bleiben unberührt.
    expect(data.settings).toEqual({ motion: 'reduce', compact: false });
    expect(data.completedLessonIds).toEqual([first.id]);
    expect(data.readerPositions[intro.id].lessonId).toBe(second.id);

    await openOptions(page);
    await page.getByRole('button', { name: 'Standard', exact: true }).click();
    await expect.poll(() => paragraphStyle(page)).toEqual(base);
    await expect(page.getByRole('button', { name: 'Standard', exact: true })).toBeDisabled();
    data = await stored(page);
    expect(data.readingOptions).toEqual({ size: 'standard', spacing: 'standard' });
    expect(data.settings).toEqual({ motion: 'reduce', compact: false });
    expect(errors).toEqual([]);
  });

  test('Optionswechsel verschiebt weder Lesestelle noch Adresse', async ({ page }) => {
    await seed(page, { version: 2, completedLessonIds: [first.id], answers: {} });
    await page.goto(`/#/read/${intro.id}?lesson=${second.id}`);
    await expect(page.getByRole('heading', { name: second.title, level: 2 })).toBeVisible();
    await openOptions(page);
    await page.waitForTimeout(1200);
    const url = page.url();
    const before = (await stored(page)).readerPositions[intro.id];
    const scroll = await page.evaluate(() => window.scrollY);

    const sizes = page.getByRole('group', { name: 'Schriftgröße' });
    await sizes.getByRole('radio', { name: 'Sehr groß', exact: true }).check();
    await page.getByRole('group', { name: 'Zeilenabstand' }).getByRole('radio', { name: 'Sehr weit', exact: true }).check();
    await page.waitForTimeout(1200);

    const data = await stored(page);
    expect(data.readerPositions[intro.id]).toEqual(before);
    expect(data.completedLessonIds).toEqual([first.id]);
    expect(page.url()).toBe(url);
    // Die Optionen stehen über dem Text; ihre Lage auf der Seite bleibt gleich.
    expect(Math.abs((await page.evaluate(() => window.scrollY)) - scroll)).toBeLessThanOrEqual(2);
    await expect(sizes.getByRole('radio', { name: 'Sehr groß', exact: true })).toBeInViewport();
  });

  test('Sicherung: Leseoptionen werden exportiert, zurückgesetzt und wieder importiert', async ({ page }) => {
    await seed(page, { version: 10, completedLessonIds: [], answers: {}, readingOptions: { size: 'large', spacing: 'wide' } });
    await page.goto('/#/settings');
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Sicherung herunterladen' }).click(),
    ]);
    const file = (await download.path())!;
    await page.getByRole('button', { name: 'Academy-Daten zurücksetzen …' }).click();
    await page.getByRole('checkbox', { name: 'Ich möchte alle Academy-Daten in diesem Browser löschen.' }).check();
    await page.getByRole('button', { name: 'Endgültig zurücksetzen' }).click();
    expect((await stored(page)).readingOptions).toEqual({ size: 'standard', spacing: 'standard' });

    await page.getByLabel('Sicherung einspielen …').setInputFiles(file);
    await expect(page.getByText('Schrift Groß, Zeilenabstand Sehr weit')).toBeVisible();
    await page.getByRole('button', { name: 'Zusammenführen', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Import abgeschlossen' })).toBeVisible();
    expect((await stored(page)).readingOptions).toEqual({ size: 'large', spacing: 'wide' });

    await page.goto(`/#/read/${intro.id}`);
    await expect(page.locator('.reader-page')).toHaveAttribute('data-reading-size', 'large');
    await expect(page.locator('.reader-page')).toHaveAttribute('data-reading-spacing', 'wide');
  });

  test('größte Stufe bei 360 px: kein Überlauf, nichts abgeschnitten, Diagramm-Fokus und axe', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await seed(page, { version: 10, completedLessonIds: [], answers: {}, readingOptions: { size: 'larger', spacing: 'wide' } });
    await page.goto(`/#/read/${intro.id}`);
    await expect(page.getByRole('heading', { name: first.title, level: 2 })).toBeVisible();
    await openOptions(page);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    // Kein Lesetext, Titel, keine Frage oder Vergleichsspalte ragt über die Spalte hinaus.
    const clipped = await page.evaluate(() => {
      const column = document.querySelector('.reader-section')!.getBoundingClientRect();
      return [...document.querySelectorAll('.reader-section h2, .reader-section h3, .reader-section p, .reader-section li, .answer-option')]
        .filter((element) => {
          const box = element.getBoundingClientRect();
          if (element.closest('.visually-hidden')) return false;
          return box.width > 0 && (box.right > column.right + 1 || element.scrollWidth > element.clientWidth + 1);
        })
        .map((element) => element.textContent?.slice(0, 40));
    });
    expect(clipped).toEqual([]);

    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);

    const diagram = first.steps.find((step) => step.type === 'diagram')!;
    const trigger = page.getByRole('button', { name: `Vergrößern: ${diagram.title}` });
    await trigger.click();
    const dialog = page.getByRole('dialog', { name: diagram.title });
    await expect(dialog).toBeVisible();
    const box = (await dialog.boundingBox())!;
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(360);
    await page.keyboard.press('Escape');
    await expect(trigger).toBeFocused();
  });
});
