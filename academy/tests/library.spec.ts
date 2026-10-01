import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

/*
 * Bibliothek: Themengebiete und Kurse. Verfügbare Kurse führen in den Lernpfad, angekündigte
 * Themen stehen als „Geplant“ da – ohne Link, ohne Inhalt.
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

async function open(page: Page, isMobile: boolean) {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
  if (isMobile) await page.getByRole('button', { name: 'Menü öffnen' }).click();
  await page.getByRole('button', { name: 'Alle Themen ansehen' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Bibliothek' })).toBeVisible();
}

test.describe('Bibliothek', () => {
  test('über den Kursblock erreichbar: Themen, Geplant-Karten, aktiver Kurs', async ({ page, isMobile }) => {
    await open(page, isMobile);
    await expect(page).toHaveURL(/#\/library$/);
    for (const title of ['Price Action', 'Volumen', 'Orderflow', 'Unternehmensbewertung']) {
      await expect(page.getByRole('heading', { level: 2, name: title })).toBeVisible();
    }
    const trends = page.locator('.library-course', { hasText: 'Trading Price Action Trends' });
    await expect(trends).toContainText('Buch 1 von 3');
    await expect(trends).toContainText('Aktiv');
    // Buch 2 und 3 sowie die neuen Themen: sichtbar als Geplant, nicht bedienbar.
    await expect(page.locator('.library-course.is-planned')).toHaveCount(2);
    await expect(page.locator('.library-subject.is-planned')).toHaveCount(3);
    await expect(page.locator('.library-course.is-planned button, .library-subject.is-planned button')).toHaveCount(0);
    await expect(page.locator('.library-view').getByText('Geplant').first()).toBeVisible();
  });

  test('Navigationseintrag „Bibliothek“ und Rückweg in den Lernpfad', async ({ page, isMobile }) => {
    await page.goto('/#/library');
    await expect(page.getByRole('heading', { level: 1, name: 'Bibliothek' })).toBeVisible();
    if (!isMobile) {
      const item = page.getByRole('navigation', { name: 'Hauptnavigation' }).getByRole('button', { name: 'Bibliothek' });
      await expect(item).toHaveAttribute('aria-current', 'page');
    }
    await page.getByRole('button', { name: 'Zum Lernpfad' }).click();
    await expect(page).not.toHaveURL(/library/);
    await expect(page.getByRole('heading', { name: 'Trading Price Action Trends' })).toBeVisible();
  });

  test('barrierefrei und schmal (360 px) ohne Überlauf', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await page.goto('/#/library');
    await expect(page.getByRole('heading', { level: 1, name: 'Bibliothek' })).toBeVisible();
    const results = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
    expect(results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
  });
});
