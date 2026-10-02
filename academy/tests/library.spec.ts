import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { testLibrarySubject } from '../src/content/courses/test-course';
import { libraryCounts, librarySubjects } from '../src/content/library';

/*
 * Bibliothek als eigene Seiten: Übersicht (deine Kurse + alle Themengebiete) → Gebiet mit
 * seinen Kursen → Kursseite mit Beschreibung, Unterthemen und – bei Kursen mit Inhalt –
 * „Kurs starten“. Die Browser-Tests laufen im Modus `e2e`; dort gibt es zusätzlich das
 * Testgebiet mit dem kleinen Testkurs.
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const subjects = [...librarySubjects, testLibrarySubject];
const counts = libraryCounts(subjects);
const volume = librarySubjects.find((subject) => subject.id === 'volume')!;
const vwap = volume.courses.find((course) => course.id === 'vwap')!;

async function open(page: Page, isMobile: boolean) {
  await page.goto('/#/path');
  await expect(page.getByRole('heading', { name: 'Price Action: Trends' })).toBeVisible();
  if (isMobile) await page.getByRole('button', { name: 'Menü öffnen' }).click();
  await page.getByRole('button', { name: 'Alle Themen ansehen' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Alle Kurse' })).toBeVisible();
}

async function expectAccessible(page: Page) {
  const results = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
  expect(results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
}

test.describe('Bibliothek: Seiten', () => {
  test('über den Kursblock erreichbar: deine Kurse und alle Themengebiete als Kacheln', async ({ page, isMobile }) => {
    await open(page, isMobile);
    await expect(page).toHaveURL(/#\/library$/);
    await expect(page.getByText(`${counts.subjects} Themengebiete mit ${counts.courses} Kursen`)).toBeVisible();

    const mine = page.locator('.library-mine > li');
    expect(await mine.count()).toBeGreaterThanOrEqual(3);
    await expect(mine.first()).toContainText('Price Action: Trends');
    await expect(mine.first()).toContainText('Aktiver Kurs');
    const testCourse = mine.filter({ hasText: 'Testkurs: Grundgerüst' });
    await expect(testCourse).toHaveCount(1);
    await expect(testCourse).toContainText('Noch nicht begonnen');

    const tiles = page.locator('.library-tile');
    await expect(tiles).toHaveCount(counts.subjects);
    for (const subject of subjects) {
      await expect(page.getByRole('link', { name: subject.title, exact: true })).toBeVisible();
    }
    await expect(page.locator('.library-tile.is-planned')).toHaveCount(counts.subjects - 3);
    await expect(page.locator('.library-tile', { hasText: 'Volumen' })).toContainText('Geplant');
  });

  test('Gebiet → geplanter Kurs: Unterthemen ohne Start, Brotkrumen und Zurück führen zurück', async ({ page }) => {
    await page.goto('/#/library');
    await page.getByRole('link', { name: 'Volumen', exact: true }).click();
    await expect(page).toHaveURL(/#\/library\/volume$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Volumen' })).toBeVisible();
    await expect(page.getByText(volume.exercises)).toBeVisible();
    await expect(page.locator('.library-course')).toHaveCount(volume.courses.length);
    await expect(page.locator('.library-course.is-planned .library-badge')).toHaveText(
      Array(volume.courses.length).fill('Geplant'),
    );

    await page.getByRole('link', { name: vwap.title, exact: true }).click();
    await expect(page).toHaveURL(/#\/course\/vwap$/);
    await expect(page.getByRole('heading', { level: 1, name: vwap.title })).toBeVisible();
    await expect(page.locator('.library-start')).toContainText('Geplant');
    await expect(page.locator('.library-start')).toContainText('noch keine Lektionen');
    await expect(page.getByRole('button', { name: /Kurs starten|Zu diesem Kurs wechseln|Weiterlernen/ })).toHaveCount(0);
    for (const topic of vwap.subtopics) {
      await expect(page.locator('.library-topic-list').getByText(topic, { exact: true })).toBeVisible();
    }

    const crumbs = page.getByRole('navigation', { name: 'Brotkrumen' });
    await expect(crumbs.locator('[aria-current="page"]')).toHaveText(vwap.title);
    await crumbs.getByRole('link', { name: 'Volumen' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'Volumen' })).toBeVisible();
    await page.goBack();
    await expect(page.getByRole('heading', { level: 1, name: vwap.title })).toBeVisible();
    await page.goBack();
    await page.goBack();
    await expect(page.getByRole('heading', { level: 1, name: 'Alle Kurse' })).toBeVisible();
  });

  test('Kursseite des aktiven Kurses: Aufbau und „Weiterlernen“ in den Lernpfad', async ({ page }) => {
    await page.goto('/#/library/price-action');
    await page.getByRole('link', { name: 'Price Action: Trends', exact: true }).click();
    await expect(page).toHaveURL(/#\/course\/price-action-trends$/);
    await expect(page.locator('.library-start')).toContainText('Aktiver Kurs');
    await expect(page.locator('.library-start')).toContainText('Noch nicht begonnen');
    await page.locator('.library-units summary').click();
    await expect(page.locator('.library-units li').first()).toContainText('Einleitung');

    await page.getByRole('button', { name: 'Weiterlernen' }).click();
    await expect(page).toHaveURL(/#\/path$/);
    await expect(page.getByRole('heading', { name: 'Price Action: Trends' })).toBeVisible();
    // Kein Wechsel, also auch kein Hinweis.
    await expect(page.locator('.route-notice')).toHaveCount(0);
  });

  test('unbekannte Gebiete und Kurse: klarer Hinweis und Weg zurück', async ({ page }) => {
    await page.goto('/#/library/gibt-es-nicht');
    await expect(page.getByRole('heading', { level: 1, name: 'Themengebiet nicht gefunden' })).toBeVisible();
    await page.getByRole('link', { name: 'Zu allen Kursen' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'Alle Kurse' })).toBeVisible();

    await page.goto('/#/course/gibt-es-nicht');
    await expect(page.getByRole('heading', { level: 1, name: 'Kurs nicht gefunden' })).toBeVisible();
  });

  test('Navigationseintrag „Alle Kurse“ bleibt auf allen Bibliotheksseiten markiert @desktop', async ({ page }) => {
    const item = page.getByRole('navigation', { name: 'Hauptnavigation' }).getByRole('button', { name: 'Alle Kurse' });
    for (const hash of ['#/library', '#/library/volume', '#/course/vwap']) {
      await page.goto(`/${hash}`);
      await expect(page.locator('.view-container h1')).toBeVisible();
      await expect(item).toHaveAttribute('aria-current', 'page');
    }
  });

  test('barrierefrei und schmal (360 px) ohne Überlauf – alle drei Seiten', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await page.goto('/#/library');
    await expect(page.getByRole('heading', { level: 1, name: 'Alle Kurse' })).toBeVisible();
    await expectAccessible(page);

    await page.goto('/#/library/volume');
    await expect(page.getByRole('heading', { level: 1, name: 'Volumen' })).toBeVisible();
    await expectAccessible(page);

    await page.goto('/#/course/price-action-trends');
    await expect(page.getByRole('heading', { level: 1, name: 'Price Action: Trends' })).toBeVisible();
    await page.locator('.library-units').evaluate((details) => ((details as HTMLDetailsElement).open = true));
    await expectAccessible(page);

    await page.goto('/#/course/vwap');
    await expect(page.getByRole('heading', { level: 1, name: vwap.title })).toBeVisible();
    await expectAccessible(page);
  });
});
