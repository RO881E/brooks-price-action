import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { priceActionTrendsCourse } from '../src/content/course';
import { glossaryEntries } from '../src/content/glossary';
import { stepTermLinks } from '../src/content/stepTerms';
import { ACADEMY_PROGRESS_VERSION } from '../src/features/progress';

/*
 * P10: Lesen und Wiederfinden – ruhigerer Leser, Begriffs-Panel, Suche, Notizbuch.
 */

const published = priceActionTrendsCourse.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const intro = priceActionTrendsCourse.units[0];
const [first] = intro.lessons;
const link = stepTermLinks.find((item) => item.lessonId === first.id)!;
const term = glossaryEntries.find((entry) => entry.term === link.terms[0])!;

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

const axeCheck = async (page: Page) => {
  const axe = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .analyze();
  expect(axe.violations.map((violation) => violation.id)).toEqual([]);
};

test.describe('P10 Leser', () => {
  test('Schrittarten sind unterscheidbar, Abschnittsfortschritt sichtbar; kein Überlauf und axe ohne Befund', async ({ page }) => {
    await seed(page, []);
    await page.goto(`/#/read/${intro.id}`);
    await expect(page.getByRole('heading', { name: first.title, level: 2 })).toBeVisible();
    const kinds = await page.locator('.reader-step').evaluateAll((elements) =>
      elements.map((element) => ({
        kind: element.getAttribute('data-kind'),
        label: getComputedStyle(element, '::before').content,
      })),
    );
    expect(kinds.length).toBeGreaterThan(2);
    for (const { kind, label } of kinds) {
      expect(kind).toBeTruthy();
      expect(label).toContain(kind!);
    }
    expect(new Set(kinds.map((item) => item.kind)).size).toBeGreaterThan(1);
    const meter = await page.locator('.reader-section-meter span').evaluate((element) => element.getBoundingClientRect().width);
    expect(meter).toBeGreaterThan(0);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    await axeCheck(page);
  });
});

test.describe('P10 Begriffe am Lernort', () => {
  test('große Ziele, klare Aktion, Schließen gibt den Fokus zurück', async ({ page }) => {
    await seed(page, []);
    await page.goto(`/#/read/${intro.id}`);
    const trigger = page.getByRole('button', { name: term.term, exact: true });
    await trigger.scrollIntoViewIfNeeded();
    expect((await trigger.boundingBox())!.height).toBeGreaterThanOrEqual(43.5);
    await trigger.click();
    const panel = page.getByRole('region', { name: term.term, exact: true });
    await expect(panel).toContainText(term.definition);
    const open = panel.getByRole('link', { name: 'Im Glossar öffnen' });
    const close = panel.getByRole('button', { name: `Schließen: ${term.term}` });
    expect((await open.boundingBox())!.height).toBeGreaterThanOrEqual(43.5);
    expect((await close.boundingBox())!.height).toBeGreaterThanOrEqual(43.5);
    await axeCheck(page);
    await close.click();
    await expect(panel).toHaveCount(0);
    await expect(trigger).toBeFocused();
  });
});

test.describe('P10 Suche', () => {
  test('Treffer nach Art getrennt (Lektion, Schritt, Glossar) mit sichtbarem Fundort; Tastatur bleibt', async ({ page }) => {
    await seed(page, published.slice(0, 12).map((lesson) => lesson.id));
    await page.goto('/#/path');
    await page.keyboard.press('/');
    await page.keyboard.type('Doji');
    const list = page.getByRole('listbox', { name: 'Suchergebnisse' });
    await expect(list.getByRole('option').first()).toBeVisible();
    const groups = await list.getByRole('group').evaluateAll((elements) => elements.map((element) => element.getAttribute('aria-label')));
    expect(groups.length).toBeGreaterThan(1);
    const chips = await list.locator('.search-type').allTextContents();
    expect(new Set(chips).size).toBeGreaterThan(1);
    for (const chip of chips) expect(['Lektion', 'Schritt', 'Glossar']).toContain(chip);
    // Fundort (Kontext) steht bei jedem Treffer.
    const options = list.getByRole('option');
    const count = await options.count();
    for (let index = 0; index < count; index += 1) {
      expect((await options.nth(index).locator('small').first().innerText()).trim().length).toBeGreaterThan(2);
    }
    // Die Typ-Chips verändern die zugänglichen Namen nicht (nur dekorativ).
    expect(await list.locator('.search-type[aria-hidden="true"]').count()).toBe(chips.length);
    await page.keyboard.press('ArrowDown');
    await expect(list.getByRole('option').nth(1)).toHaveAttribute('aria-selected', 'true');
    await axeCheck(page);
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog', { name: 'Suche' })).toHaveCount(0);
  });
});

test.describe('P10 Notizbuch', () => {
  const [one, two] = [published[0], published[5]];
  const stepId = (lesson: typeof one, index: number) => lesson.steps[index].id;
  const record = {
    bookmarks: {
      [`${two.id}::${stepId(two, 1)}`]: { lessonId: two.id, stepId: stepId(two, 1), createdAt: '2026-09-29T10:00:00.000Z' },
    },
    notes: {
      [`${one.id}::${stepId(one, 0)}`]: { lessonId: one.id, stepId: stepId(one, 0), text: 'Privat: nur ich sehe das Wort Kaffeetasse', updatedAt: '2026-09-28T10:00:00.000Z' },
      [`${two.id}::${stepId(two, 0)}`]: { lessonId: two.id, stepId: stepId(two, 0), text: 'Zweite Notiz zum Ausbruch', updatedAt: '2026-09-29T09:00:00.000Z' },
    },
  };
  const all = published.slice(0, 20).map((lesson) => lesson.id);

  test('Sortierung, Suche im Notiztext und Sprung zur exakten Fundstelle – nichts davon in der Adresse', async ({ page }) => {
    await seed(page, all, record);
    await page.goto('/#/saved');
    const notes = page.getByRole('region', { name: 'Notizen' });
    const titles = () => notes.locator('.saved-item strong').allTextContents();
    // Neueste zuerst: die Notiz aus Lektion 2 vor der aus Lektion 1.
    await expect(notes.locator('.saved-note-text').first()).toContainText('Zweite Notiz');
    await page.getByRole('radio', { name: 'Kapitelreihenfolge' }).check();
    await expect(notes.locator('.saved-note-text').first()).toContainText('Kaffeetasse');
    expect((await titles()).length).toBe(2);
    // Suche im Notiztext, ohne Umlaut-/Großschreibungs-Probleme.
    await page.getByRole('searchbox', { name: 'In Lesezeichen und Notizen suchen' }).fill('KAFFEETASSE');
    await expect(notes.locator('.saved-item')).toHaveCount(1);
    await expect(page.getByRole('region', { name: 'Lesezeichen' }).getByText('Keine Lesezeichen passen zur Suche.')).toBeVisible();
    expect(page.url()).not.toContain('Kaffeetasse');
    expect(page.url().toLowerCase()).not.toContain('kaffeetasse');
    // Sprung zur exakten Fundstelle.
    await notes.getByRole('button', { name: /öffnen/ }).click();
    await expect(page).toHaveURL(new RegExp(`#/lesson/${one.id}`));
    expect(page.url().toLowerCase()).not.toContain('kaffeetasse');
  });

  test('360 px: kein Überlauf, axe ohne Befund; nichts wird beim Suchen gespeichert', async ({ page }) => {
    await seed(page, all, record);
    await page.goto('/#/saved');
    await expect(page.getByRole('searchbox', { name: 'In Lesezeichen und Notizen suchen' })).toBeVisible();
    const before = await page.evaluate(() => localStorage.getItem('wqt-academy-progress-v1'));
    await page.getByRole('searchbox', { name: 'In Lesezeichen und Notizen suchen' }).fill('Ausbruch');
    await page.getByRole('radio', { name: 'Kapitelreihenfolge' }).check();
    expect(await page.evaluate(() => localStorage.getItem('wqt-academy-progress-v1'))).toBe(before);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    await axeCheck(page);
  });
});
