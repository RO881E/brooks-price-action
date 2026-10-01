import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { barCases } from '../src/content/barCases';
import { priceActionTrendsCourse, publishedLessons } from '../src/content/course';
import type { Lesson } from '../src/content/types';
import { ACADEMY_PROGRESS_VERSION } from '../src/features/progress';

/*
 * P09: Charts zum Entdecken – Diagramm-Fokus mobil, Beobachtungen einzeln, Fallvergleich,
 * Chart und Tabelle mit demselben Barbestand.
 */

type DiagramStep = Extract<Lesson['steps'][number], { type: 'diagram' }>;

const diagram = (() => {
  for (const lesson of publishedLessons) {
    const index = lesson.steps.findIndex((step) => step.type === 'diagram' && step.observations.length >= 3);
    if (index !== -1) return { lesson, step: lesson.steps[index] as DiagramStep, stepNumber: index + 1 };
  }
  throw new Error('kein Schaubild mit Beobachtungen');
})();

async function seed(page: Page, ids: string[], extra: Record<string, unknown> = {}) {
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

const all = publishedLessons.map((lesson) => lesson.id);
const stored = (page: Page) => page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));

async function openFocus(page: Page) {
  await seed(page, all);
  await page.goto(`/#/lesson/${diagram.lesson.id}?step=${diagram.stepNumber}`);
  await expect(page.getByRole('heading', { name: diagram.step.title, level: 1 })).toBeVisible();
  await page.getByRole('button', { name: `Vergrößern: ${diagram.step.title}` }).click();
  const dialog = page.getByRole('dialog', { name: diagram.step.title });
  await expect(dialog).toBeVisible();
  return dialog;
}

test.describe('P09 Diagramm-Fokus', () => {
  test('große Bedienziele, sichtbare Zoomstufe, Werkzeugleiste in Reichweite, Escape gibt den Fokus zurück', async ({ page, isMobile }) => {
    const dialog = await openFocus(page);
    const minimum = isMobile ? 51.5 : 43.5;
    for (const name of ['Verkleinern', 'Vergrößern', 'Zurücksetzen', 'Ansicht nach links schieben']) {
      const box = (await dialog.getByRole('button', { name, exact: true }).boundingBox())!;
      expect(box.height, name).toBeGreaterThanOrEqual(minimum);
      expect(box.width, name).toBeGreaterThanOrEqual(minimum);
    }
    await expect(dialog.getByRole('status').filter({ hasText: '100 %' })).toBeVisible();
    await dialog.getByRole('button', { name: 'Vergrößern', exact: true }).click();
    await expect(dialog.getByRole('status').filter({ hasText: /^Zoom \d+ %$|\d+ %/ }).first()).not.toHaveText(/^Zoom 100 %$/);
    const toolbar = (await dialog.getByRole('toolbar', { name: 'Ansicht anpassen' }).boundingBox())!;
    const viewport = page.viewportSize()!;
    expect(toolbar.y + toolbar.height).toBeLessThanOrEqual(viewport.height + 1);
    await dialog.getByRole('button', { name: 'Zurücksetzen' }).click();
    await page.keyboard.press('Escape');
    await expect(dialog).toHaveCount(0);
    await expect(page.getByRole('button', { name: `Vergrößern: ${diagram.step.title}` })).toBeFocused();
  });

  test('Beobachtungen einzeln durchgehen: dieselben Sätze, nacheinander hervorgehoben', async ({ page }) => {
    const dialog = await openFocus(page);
    const list = dialog.locator('.chart-focus-text ol');
    await expect(list.locator('li')).toHaveText(diagram.step.observations as string[]);
    await dialog.getByRole('button', { name: 'Einzeln durchgehen' }).click();
    await expect(dialog.getByText(`Beobachtung 1 von ${diagram.step.observations.length}`)).toBeVisible();
    await expect(list.locator('li[aria-current="true"]')).toHaveText(diagram.step.observations[0]);
    await expect(dialog.getByRole('button', { name: 'Vorherige Beobachtung' })).toBeDisabled();
    await dialog.getByRole('button', { name: 'Nächste Beobachtung' }).click();
    await expect(list.locator('li[aria-current="true"]')).toHaveText(diagram.step.observations[1]);
    // Kein neuer Text: die Liste enthält weiterhin genau die vorhandenen Sätze.
    await expect(list.locator('li')).toHaveText(diagram.step.observations as string[]);
    await dialog.getByRole('button', { name: 'Alle Beobachtungen zeigen' }).click();
    await expect(list.locator('li[aria-current]')).toHaveCount(0);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
  });
});

test.describe('P09 Fallvergleich', () => {
  const [caseA, caseB] = barCases;
  const record = (extra: Record<string, unknown> = {}) => ({ caseRuns: {}, ...extra });
  const run = (id: string) => [{ sessionId: id, completedAt: '2026-09-28T10:00:00.000Z', best: 1, defensible: 0, mistake: 0, missedCues: 0 }];

  test('ohne zwei gespielte Fälle: Hinweis statt Vergleich (nichts wird verraten)', async ({ page }) => {
    await seed(page, all, record({ caseRuns: { [caseA.id]: run('run-a') } }));
    await page.goto('/#/practice');
    const section = page.getByRole('region', { name: 'Zwei Fälle vergleichen' });
    await expect(section.getByText(/sobald du zwei Fälle abgeschlossen hast/)).toBeVisible();
    await expect(section.getByRole('combobox')).toHaveCount(0);
  });

  test('zwei gespielte Fälle: Gegenüberstellung mit bester Wahl und Begründung; Transferfälle fehlen', async ({ page }) => {
    await seed(page, all, record({ caseRuns: { [caseA.id]: run('run-a'), [caseB.id]: run('run-b') } }));
    await page.goto('/#/practice');
    const section = page.getByRole('region', { name: 'Zwei Fälle vergleichen' });
    const first = section.getByLabel('Erster Fall');
    await expect(first.locator('option')).toHaveCount(3);
    await first.selectOption(caseA.id);
    await section.getByLabel('Zweiter Fall').selectOption(caseB.id);
    const result = section.getByRole('region', { name: 'Vergleich der beiden Fälle' });
    await expect(result.getByRole('heading', { name: caseA.title })).toBeVisible();
    await expect(result.getByRole('heading', { name: caseB.title })).toBeVisible();
    await expect(result.getByText('Beste Wahl:').first()).toBeVisible();
    await expect(result.getByText(/Wichtige Hinweise:/).first()).toBeVisible();
    await expect(result.getByText(/Entscheidungspunkte: \d+ gegenüber \d+\./)).toBeVisible();
    await expect(section.getByText(/c02|Transfer/i)).toHaveCount(0);
    // Derselbe Fall lässt sich nicht doppelt wählen.
    await expect(section.getByLabel('Zweiter Fall').locator(`option[value="${caseA.id}"]`)).toHaveAttribute('disabled', '');
    const before = JSON.stringify((await stored(page)).caseRuns);
    await page.reload();
    expect(JSON.stringify((await stored(page)).caseRuns)).toBe(before);
  });

  test('360 px: kein Überlauf und keine Axe-Verstöße im Vergleich', async ({ page }) => {
    await seed(page, all, record({ caseRuns: { [caseA.id]: run('run-a'), [caseB.id]: run('run-b') } }));
    await page.goto('/#/practice');
    const section = page.getByRole('region', { name: 'Zwei Fälle vergleichen' });
    await section.getByLabel('Erster Fall').selectOption(caseA.id);
    await section.getByLabel('Zweiter Fall').selectOption(caseB.id);
    await expect(section.getByRole('region', { name: 'Vergleich der beiden Fälle' })).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
  });
});

test.describe('P09 Chart und Tabelle', () => {
  const barCase = barCases.find((item) => item.status === 'approved' && item.decisions.length >= 2)!;
  const unitIndex = priceActionTrendsCourse.units.findIndex((unit) => unit.id === barCase.unitId);
  const unlock = priceActionTrendsCourse.units
    .slice(0, unitIndex + 1)
    .flatMap((unit) => unit.lessons)
    .filter((lesson) => lesson.status === 'published')
    .map((lesson) => lesson.id);

  test('gleicher Barbestand in Chart und Tabelle, ohne spätere Werte; Wahl bleibt beim Wechsel, nicht nach Reload', async ({ page }) => {
    await seed(page, unlock);
    await page.goto(`/#/train/${barCase.id}`);
    await page.getByRole('button', { name: /Runde starten/ }).click();
    const visible = barCase.decisions[0].afterBar + 1;
    const hint = page.getByText('Die Tabelle zeigt genau die Bars des Charts als Text.');
    await expect(hint).toBeVisible();
    await page.getByRole('button', { name: 'Tabelle', exact: true }).click();
    const rows = page.locator('[data-bar-row]');
    await expect(rows).toHaveCount(visible);
    // Kein späterer Bar: die Beschriftung nennt genau die sichtbaren Bars.
    await expect(page.locator('.case-table caption')).toContainText(`Sichtbare Bars (${visible})`);
    await page.getByRole('button', { name: 'Chart', exact: true }).click();
    await expect(rows).toHaveCount(0);
    await page.getByRole('button', { name: 'Tabelle', exact: true }).click();
    await expect(rows).toHaveCount(visible);
    // Die Wahl bleibt beim Wechsel in andere Ansichten und zurück (nur im Arbeitsspeicher).
    await page.goto('/#/practice');
    await page.goto(`/#/train/${barCase.id}`);
    await expect(page.getByRole('button', { name: 'Tabelle', exact: true })).toHaveAttribute('aria-pressed', 'true');
    await page.reload();
    await expect(page.getByRole('button', { name: 'Tabelle', exact: true })).toHaveAttribute('aria-pressed', 'false');
    // Nichts davon wurde gespeichert.
    expect(JSON.stringify(await stored(page))).not.toMatch(/"display"|"table"/);
  });
});
