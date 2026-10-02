import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { priceActionTrendsCourse } from '../src/content/course';
import { ACADEMY_PROGRESS_VERSION } from '../src/features/progress';

/*
 * P06: Orientierung – „Heute“, Lernpfad als Etappen, sichere Übergänge.
 */

const published = priceActionTrendsCourse.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');

async function seed(page: Page, ids: string[], extra: Record<string, unknown> = {}) {
  await page.addInitScript(
    ({ completed, version, more }) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem(
        'wqt-academy-progress-v1',
        JSON.stringify({ version, completedLessonIds: completed, answers: {}, guideSeenAt: '2026-09-29T08:00:00.000Z', ...more }),
      );
    },
    { completed: ids, version: ACADEMY_PROGRESS_VERSION, more: extra },
  );
}

const stored = (page: Page) => page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));
const today = (page: Page) => page.getByRole('region', { name: 'Dein nächster Schritt' });

test.describe('P06 Orientierung', () => {
  test('neuer Nutzer: eine klare primäre Aktion, Kurzlernen/Wiederholen darunter', async ({ page }) => {
    await seed(page, []);
    await page.goto('/');
    const panel = today(page);
    await expect(panel.getByText('Jetzt dran')).toBeVisible();
    await expect(panel.getByRole('heading', { name: published[0].title, level: 3 })).toBeVisible();
    await expect(panel.getByRole('button', { name: 'Nächste Lektion beginnen' })).toHaveCount(1);
    await expect(panel.getByRole('button', { name: '≈ 10 Minuten' })).toBeVisible();
    await expect(panel.getByText('Heute ist nichts fällig.')).toHaveCount(0);
    await panel.getByRole('button', { name: 'Nächste Lektion beginnen' }).click();
    await expect(page).toHaveURL(new RegExp(`#/lesson/${published[0].id}`));
  });

  test('fällige Fragen: primäre Aktion startet die Runde, „Zum Üben“ öffnet nur die Übersicht', async ({ page }) => {
    await seed(page, published.slice(0, 3).map((lesson) => lesson.id));
    await page.goto('/');
    const panel = today(page);
    await expect(panel.getByRole('button', { name: 'Fällige Fragen wiederholen' })).toBeVisible();
    await panel.getByRole('button', { name: 'Zum Üben' }).click();
    await expect(page.getByRole('heading', { name: 'Analyse-Training' })).toBeVisible();
    expect((await stored(page)).reviewSession ?? null).toBeNull();
    await page.goBack();
    await panel.getByRole('button', { name: 'Fällige Fragen wiederholen' }).click();
    await expect(page.getByText(/^Frage 1 \//).first()).toBeVisible();
    expect((await stored(page)).reviewSession).not.toBeNull();
    // Nach Reload wird die laufende Runde als Hauptaktion angeboten.
    await page.goto('/#/');
    await expect(today(page).getByRole('button', { name: 'Wiederholungsrunde fortsetzen' })).toBeVisible();
  });

  test('begonnene Lektion wird fortgesetzt, auch nach Reload', async ({ page }) => {
    await seed(page, []);
    await page.goto('/');
    await today(page).getByRole('button', { name: 'Nächste Lektion beginnen' }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.goto('/#/');
    await page.reload();
    await expect(today(page).getByRole('button', { name: 'Lektion fortsetzen' })).toBeVisible();
    await expect(today(page).getByText(/Du warst bei Schritt 2 von/)).toBeVisible();
  });

  test('Etappen: Status als Text, gesperrte Teile ohne Zugang', async ({ page }) => {
    await seed(page, []);
    await page.goto('/');
    const stations = page.locator('.unit-section');
    await expect(stations.first().locator('.station-chip')).toContainText('Hier geht es weiter');
    await expect(stations.nth(2).locator('.station-chip')).toContainText('Noch gesperrt');
    // Gesperrte Kapitel sind zugeklappt; nach dem Öffnen sind ihre Lektionen sichtbar, aber nicht bedienbar.
    await stations.nth(2).getByRole('button', { expanded: false }).click();
    await expect(stations.nth(2).getByRole('button', { name: /Noch gesperrt/ }).first()).toBeDisabled();
    // Nach Abschluss der ersten Einheit ist sie „Abgeschlossen“.
    const firstUnit = priceActionTrendsCourse.units[0].lessons.filter((lesson) => lesson.status === 'published').map((lesson) => lesson.id);
    await page.evaluate((ids) => {
      const value = JSON.parse(localStorage.getItem('wqt-academy-progress-v1')!);
      value.completedLessonIds = ids;
      localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(value));
    }, firstUnit);
    await page.reload();
    await expect(page.locator('.unit-section').first().locator('.station-chip')).toContainText('Abgeschlossen');
  });

  test('Lektion aus dem Lernpfad: nach dem Abschluss „Weiter“ und „Zurück zum Lernpfad“', async ({ page }) => {
    await seed(page, []);
    await page.goto('/#/path');
    await page.getByRole('button', { name: /Der Chart ist das Ergebnis: Jetzt lernen/ }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('radio', { name: /Die schwache Reaktion/ }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByRole('button', { name: 'Lektion abschließen' }).click();
    await expect(page.getByText('Lektion abgeschlossen')).toBeVisible();
    await expect(page.getByRole('button', { name: `Weiter: ${published[1].title}` })).toBeVisible();
    await page.getByRole('button', { name: 'Zurück zum Lernpfad' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'Price Action: Trends' })).toBeVisible();
  });

  test('360 px: kein Überlauf, Tastatur und axe für „Heute“ und Lernpfad', async ({ page }) => {
    await seed(page, published.slice(0, 3).map((lesson) => lesson.id));
    await page.goto('/');
    await expect(today(page)).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
    const primary = today(page).getByRole('button', { name: 'Fällige Fragen wiederholen' });
    await primary.focus();
    await page.keyboard.press('Enter');
    await expect(page.getByText(/^Frage 1 \//).first()).toBeVisible();
  });

  test('Navigation: Kurzlabels, Touch-Ziele, aktiver Ort, Browser-Zurück und Tastatur', async ({ page, isMobile }) => {
    await seed(page, published.slice(0, 3).map((lesson) => lesson.id));
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: isMobile ? 'Mobile Navigation' : 'Hauptnavigation' });
    for (const label of ['Lernpfad', 'Üben', 'Fortschritt', 'Glossar']) {
      const button = nav.getByRole('button', { name: label });
      await expect(button).toBeVisible();
      const box = (await button.boundingBox())!;
      expect(box.height).toBeGreaterThanOrEqual(43.5);
      expect(box.width).toBeGreaterThanOrEqual(43.5);
    }
    await nav.getByRole('button', { name: 'Üben' }).click();
    await expect(nav.locator('[aria-current="page"]')).toHaveText(/Üben/);
    await nav.getByRole('button', { name: 'Glossar' }).click();
    await expect(nav.locator('[aria-current="page"]')).toHaveText(/Glossar/);
    await page.goBack();
    await expect(page.getByRole('heading', { name: 'Analyse-Training' })).toBeVisible();
    await expect(nav.locator('[aria-current="page"]')).toHaveText(/Üben/);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    await nav.getByRole('button', { name: 'Fortschritt' }).focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('heading', { name: 'Fortschritt', level: 1 })).toBeVisible();
  });
});
