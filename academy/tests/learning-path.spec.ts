import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { priceActionTrendsCourse } from '../src/content/course';

/*
 * Stufe 2 „spielerischer“: Lernpfad als Wanderweg. Reihenfolge, Sperren und
 * Beschriftungen bleiben; neu sind runde Stationen, Kapitel-Medaille, Bulle an der
 * aktuellen Station, Icons und Schritt-Marken im Lektionsbalken.
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const published = priceActionTrendsCourse.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const firstUnit = priceActionTrendsCourse.units[0].lessons.filter((lesson) => lesson.status === 'published');

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
    await page.goto('/#/path');
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
    await page.goto('/#/path');
    // Gezeigt wird das aktuelle (zweite) Kapitel; sein Ring steht zwischen 0 und 100 %.
    const ring = await page.locator('.unit-number[data-station="current"]').first().evaluate((el) => el.style.getPropertyValue('--ring'));
    expect(parseInt(ring, 10)).toBeGreaterThanOrEqual(0);
    expect(parseInt(ring, 10)).toBeLessThan(100);
    // Das vorige Kapitel ist abgeschlossen: Häkchen an den Stationen, Medaille mit Stern.
    await page.getByRole('button', { name: 'Vorheriges Kapitel' }).click();
    const firstDone = page.locator('.lesson-node.complete').first();
    await expect(firstDone.locator('.node-copy small')).toHaveText('Abgeschlossen');
    await expect(firstDone.locator('svg.icon')).toBeVisible();
    const medal = page.locator('.unit-number[data-station="done"]').first();
    await expect(medal).toBeVisible();
    await expect(medal.locator('.medal-star')).toBeVisible();
  });

  test('Öffnen per Klick und Tastatur; Reihenfolge der Stationen bleibt die Kapitelreihenfolge', async ({ page }) => {
    await seed(page, []);
    await page.goto('/#/path');
    // Die Lektionen des ersten Kapitels stehen in Kursreihenfolge, die Kapitelliste in Kapitelreihenfolge.
    const titles = await page.locator('.lesson-node .node-copy strong').allTextContents();
    expect(titles).toEqual(priceActionTrendsCourse.units[0].lessons.map((lesson) => lesson.title));
    await page.getByRole('button', { name: /Alle Kapitel/ }).click();
    const chapters = await page.locator('.chapter-list .chapter-list-title').allTextContents();
    expect(chapters).toEqual(priceActionTrendsCourse.units.map((unit) => unit.title));
    await page.getByRole('button', { name: /Liste schließen/ }).click();
    const next = page.locator('.lesson-node-row.next .lesson-node');
    await next.focus();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(new RegExp(`#/lesson/${published[0].id}`));
  });

  test('Kein Überlauf, axe ohne Befund (Weg, Navigation, Kopfzeilen)', async ({ page }) => {
    await seed(page, firstUnit.map((lesson) => lesson.id));
    await page.goto('/#/path');
    await expect(page.locator('.learning-road')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
    await axe(page, '.learning-road');
    await axe(page, 'nav');
  });

  test('Navigation nutzt einheitliche Icons statt Zeichen und behält Namen und aktiven Ort', async ({ page, isMobile }) => {
    await seed(page, []);
    await page.goto('/#/path');
    const nav = page.getByRole('navigation', { name: isMobile ? 'Mobile Navigation' : 'Hauptnavigation' });
    for (const name of ['Start', 'Lernpfad', 'Üben', 'Fortschritt', 'Glossar']) {
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
    await page.goto('/#/path');
    const icon = page.locator('.lesson-node.available .node-icon').first();
    await expect(icon).toBeVisible();
    expect(await icon.evaluate((el) => getComputedStyle(el).animationName)).toBe('none');
    expect(await page.locator('.path-bull').evaluate((el) => getComputedStyle(el).animationName)).toBe('none');
  });
});

test.describe('Ein Kapitel zur Zeit', () => {
  test('gezeigt wird nur das Kapitel mit dem nächsten Schritt; die Kapitelzeile nennt die Position', async ({ page }) => {
    await seed(page, firstUnit.map((lesson) => lesson.id));
    await page.goto('/#/path');
    await expect(page.locator('.unit-section')).toHaveCount(1);
    // Nach der ersten Einheit ist die zweite die aktuelle.
    await expect(page.locator('.unit-section .unit-header h2')).toHaveText(priceActionTrendsCourse.units[1].title);
    await expect(page.locator('.chapter-switcher-current')).toContainText(`Kapitel 2 von ${priceActionTrendsCourse.units.length}`);
    expect(await page.locator('.lesson-node').count()).toBe(priceActionTrendsCourse.units[1].lessons.length);
  });

  test('Pfeile wechseln das Kapitel; am Anfang und Ende sind sie gesperrt; nach einer Lektion geht es zurück zum aktuellen', async ({ page }) => {
    await seed(page, []);
    await page.goto('/#/path');
    const prev = page.getByRole('button', { name: 'Vorheriges Kapitel' });
    const next = page.getByRole('button', { name: 'Nächstes Kapitel' });
    await expect(prev).toBeDisabled();
    await next.click();
    await expect(page.locator('.unit-section .unit-header h2')).toHaveText(priceActionTrendsCourse.units[1].title);
    await expect(page.locator('.chapter-switcher-current')).toContainText('Kapitel 2 von');
    await prev.click();
    await expect(page.locator('.unit-section .unit-header h2')).toHaveText(priceActionTrendsCourse.units[0].title);
    await page.locator('.lesson-node-row.next .lesson-node').click();
    await expect(page).toHaveURL(/#\/lesson\//);
  });

  test('Kapitelliste: alle Kapitel mit Stand, Auswahl zeigt das Kapitel; Tastatur und Auswahlzustand', async ({ page }) => {
    await seed(page, firstUnit.map((lesson) => lesson.id));
    await page.goto('/#/path');
    const toggle = page.locator('.chapter-switcher-current');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await toggle.focus();
    await page.keyboard.press('Enter');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    const items = page.locator('.chapter-list button');
    await expect(items).toHaveCount(priceActionTrendsCourse.units.length);
    await expect(items.nth(1)).toHaveAttribute('aria-current', 'true');
    await expect(items.nth(0)).toContainText('✓');
    await items.nth(3).click();
    await expect(page.locator('.chapter-list')).toHaveCount(0);
    await expect(page.locator('.unit-section .unit-header h2')).toHaveText(priceActionTrendsCourse.units[3].title);
  });

  test('gesperrte Kapitel lassen sich ansehen, ihre Lektionen bleiben gesperrt; axe und 360 px', async ({ page }) => {
    await seed(page, []);
    await page.goto('/#/path');
    await page.getByRole('button', { name: 'Nächstes Kapitel' }).click();
    await page.getByRole('button', { name: 'Nächstes Kapitel' }).click();
    const locked = page.locator('.unit-section[data-station="locked"]');
    await expect(locked).toHaveCount(1);
    await expect(locked.locator('.lesson-node').first()).toBeDisabled();
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
    await axe(page, '.learning-road');
    await axe(page, '.chapter-switcher');
  });
});
