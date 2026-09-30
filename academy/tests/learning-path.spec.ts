import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { brooksTrendsCourse } from '../src/content/course';

/*
 * Stufe 2 „spielerischer“: Lernpfad als Wanderweg. Reihenfolge, Sperren und
 * Beschriftungen bleiben; neu sind runde Stationen, Kapitel-Medaille, Bulle an der
 * aktuellen Station, Icons und Schritt-Marken im Lektionsbalken.
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const published = brooksTrendsCourse.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const firstUnit = brooksTrendsCourse.units[0].lessons.filter((lesson) => lesson.status === 'published');

async function seed(page: Page, ids: string[]) {
  await page.addInitScript((completed) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem(
      'wqt-academy-progress-v1',
      JSON.stringify({ version: 14, completedLessonIds: completed, answers: {}, guideSeenAt: '2026-09-29T08:00:00.000Z' }),
    );
  }, ids);
}

const axe = async (page: Page, include: string) => {
  const result = await new AxeBuilder({ page }).include(include).withTags(AXE_TAGS).analyze();
  expect(result.violations.map((violation) => violation.id)).toEqual([]);
};

test.describe('Lernpfad als Wanderweg', () => {
  test('Neuer Stand: erste Lektion ist Station „Jetzt lernen“ mit Bulle, alle weiteren gesperrt', async ({ page }) => {
    await seed(page, []);
    await page.goto('/#/');
    const road = page.locator('.learning-road');
    await expect(road).toBeVisible();
    await expect(page.locator('.lesson-node-row.next')).toHaveCount(1);
    await expect(page.locator('.path-bull')).toHaveCount(1);
    await expect(page.locator('.path-bull')).toHaveAttribute('alt', '');
    const next = page.locator('.lesson-node-row.next .lesson-node');
    await expect(next).toHaveAttribute('aria-label', new RegExp(`^${firstUnit[0].title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}: Jetzt lernen`));
    // Gesperrte Stationen bleiben gesperrt und nicht bedienbar.
    const locked = page.locator('.lesson-node.locked').first();
    await expect(locked).toBeDisabled();
    await expect(locked.locator('.node-copy small')).toHaveText('Noch gesperrt');
  });

  test('Fortschritt: Abgeschlossenes trägt Häkchen, Kapitel-Medaille zeigt Ring und Stern', async ({ page }) => {
    await seed(page, firstUnit.map((lesson) => lesson.id));
    await page.goto('/#/');
    const firstDone = page.locator('.lesson-node.complete').first();
    await expect(firstDone.locator('.node-copy small')).toHaveText('Abgeschlossen');
    await expect(firstDone.locator('svg.icon')).toBeVisible();
    const medal = page.locator('.unit-number[data-station="done"]').first();
    await expect(medal).toBeVisible();
    await expect(medal.locator('.medal-star')).toBeVisible();
    // Der Kapitelring einer begonnenen Einheit steht auf einem Wert zwischen 0 und 100 %.
    const ring = await page.locator('.unit-number[data-station="current"]').first().evaluate((el) => el.style.getPropertyValue('--ring'));
    expect(parseInt(ring, 10)).toBeGreaterThanOrEqual(0);
    expect(parseInt(ring, 10)).toBeLessThan(100);
  });

  test('Öffnen per Klick und Tastatur; Reihenfolge der Stationen bleibt die Buchreihenfolge', async ({ page }) => {
    await seed(page, []);
    await page.goto('/#/');
    const titles = await page.locator('.lesson-node .node-copy strong').allTextContents();
    const expected = brooksTrendsCourse.units.flatMap((unit) => unit.lessons).map((lesson) => lesson.title);
    expect(titles).toEqual(expected);
    const next = page.locator('.lesson-node-row.next .lesson-node');
    await next.focus();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(new RegExp(`#/lesson/${published[0].id}`));
  });

  test('Kein Überlauf, axe ohne Befund (Weg, Navigation, Kopfzeilen)', async ({ page }) => {
    await seed(page, firstUnit.map((lesson) => lesson.id));
    await page.goto('/#/');
    await expect(page.locator('.learning-road')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
    await axe(page, '.learning-road');
    await axe(page, 'nav');
  });

  test('Navigation nutzt einheitliche Icons statt Zeichen und behält Namen und aktiven Ort', async ({ page, isMobile }) => {
    await seed(page, []);
    await page.goto('/#/');
    const nav = page.getByRole('navigation', { name: isMobile ? 'Mobile Navigation' : 'Hauptnavigation' });
    for (const name of ['Lernpfad', 'Buchmodus', 'Üben', 'Fortschritt', 'Glossar']) {
      const button = nav.getByRole('button', { name, exact: true });
      await expect(button.locator('svg.icon').first()).toBeAttached();
    }
    await expect(nav.getByRole('button', { name: 'Lernpfad', exact: true })).toHaveAttribute('aria-current', 'page');
  });

  test('Lektionsbalken zeigt Schritt-Marken passend zur Zahl der Schritte', async ({ page }) => {
    await seed(page, []);
    await page.goto(`/#/lesson/${published[0].id}`);
    const ticks = page.locator('.lesson-progress .progress-ticks');
    await expect(ticks).toBeAttached();
    expect(await ticks.evaluate((el) => (el as HTMLElement).style.getPropertyValue('--steps'))).toBe(String(published[0].steps.length));
    await expect(page.getByRole('progressbar', { name: 'Lektionsfortschritt' })).toHaveAttribute('aria-valuetext', new RegExp(`von ${published[0].steps.length}$`));
  });

  test('Reduzierte Bewegung: keine Puls- und Hüpf-Animation', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await seed(page, []);
    await page.goto('/#/');
    const icon = page.locator('.lesson-node.available .node-icon').first();
    await expect(icon).toBeVisible();
    expect(await icon.evaluate((el) => getComputedStyle(el).animationName)).toBe('none');
    expect(await page.locator('.path-bull').evaluate((el) => getComputedStyle(el).animationName)).toBe('none');
  });
});
