import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { libraryCounts, librarySubjects } from '../src/content/library';

/*
 * Bibliothek: alle Themengebiete mit ihren Kursen, aufklappbar. Offen ist zu Beginn nur das Gebiet
 * mit Inhalt; verfügbare Kurse führen in den Lernpfad, geplante stehen ohne Link da.
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const counts = libraryCounts(librarySubjects);
const volume = librarySubjects.find((subject) => subject.id === 'volume')!;

async function open(page: Page, isMobile: boolean) {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Price Action: Trends' })).toBeVisible();
  if (isMobile) await page.getByRole('button', { name: 'Menü öffnen' }).click();
  await page.getByRole('button', { name: 'Alle Themen ansehen' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Bibliothek' })).toBeVisible();
}

const toggle = (page: Page, title: string) => page.getByRole('button', { name: title, exact: true });

test.describe('Bibliothek', () => {
  test('über den Kursblock erreichbar: alle Themengebiete, nur das aktive offen', async ({ page, isMobile }) => {
    await open(page, isMobile);
    await expect(page).toHaveURL(/#\/library$/);
    await expect(page.locator('.library-subject')).toHaveCount(counts.subjects);
    for (const subject of librarySubjects) {
      await expect(page.getByRole('heading', { level: 2, name: subject.title, exact: true })).toBeVisible();
    }
    await expect(toggle(page, 'Price Action und Marktstruktur')).toHaveAttribute('aria-expanded', 'true');
    await expect(toggle(page, 'Volumen')).toHaveAttribute('aria-expanded', 'false');
    await expect(page.getByText(`1 von ${counts.subjects} Themengebieten geöffnet.`)).toBeVisible();
    await expect(page.locator('.library-subject.is-planned')).toHaveCount(counts.subjects - 1);

    const trends = page.locator('.library-course', { hasText: 'Price Action: Trends' });
    await expect(trends).toContainText('Teil 1 von 3');
    await expect(trends).toContainText('Aktiv');

    // Alle öffnen: jede Karte sichtbar; geplante Kurse führen nirgendwohin.
    await page.getByRole('button', { name: 'Alle öffnen' }).click();
    await expect(page.locator('.library-course')).toHaveCount(counts.courses);
    await expect(page.locator('.library-course.is-planned')).toHaveCount(counts.courses - counts.available);
    await expect(page.locator('.library-course.is-planned').getByRole('button', { name: 'Zum Lernpfad' })).toHaveCount(0);
    await expect(page.locator('.library-course.is-planned .library-badge')).toHaveText(
      Array(counts.courses - counts.available).fill('Geplant'),
    );
  });

  test('Gebiet per Klick und Tastatur auf- und zuklappen, Unterthemen zeigen, Zustand bleibt im Tab', async ({ page }) => {
    await page.goto('/#/library');
    const button = toggle(page, 'Volumen');
    await button.click();
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    const panel = page.locator(`[id="${await button.getAttribute('aria-controls')}"]`);
    await expect(panel.locator('.library-course')).toHaveCount(volume.courses.length);

    const vwap = panel.locator('.library-course', { hasText: 'VWAP' });
    const firstTopic = volume.courses.find((course) => course.id === 'vwap')!.subtopics[0];
    await expect(vwap.getByText(firstTopic)).toBeHidden();
    await vwap.locator('summary').click();
    await expect(vwap.getByText(firstTopic)).toBeVisible();

    await button.focus();
    await page.keyboard.press('Enter');
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await expect(panel).toBeHidden();
    await page.keyboard.press('Space');
    await expect(button).toHaveAttribute('aria-expanded', 'true');

    // Nach einem Wechsel in eine andere Ansicht ist derselbe Zustand wieder da.
    await page.goto('/#/practice');
    await page.goto('/#/library');
    await expect(toggle(page, 'Volumen')).toHaveAttribute('aria-expanded', 'true');
    await expect(page.getByText(`2 von ${counts.subjects} Themengebieten geöffnet.`)).toBeVisible();

    await page.getByRole('button', { name: 'Alle schließen' }).click();
    await expect(page.getByText('Alle Themengebiete sind zugeklappt.')).toBeVisible();
    await expect(page.locator('.library-course')).toHaveCount(0);
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
    await expect(page.getByRole('heading', { name: 'Price Action: Trends' })).toBeVisible();
  });

  test('barrierefrei und schmal (360 px) ohne Überlauf – zugeklappt und ganz geöffnet', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await page.goto('/#/library');
    await expect(page.getByRole('heading', { level: 1, name: 'Bibliothek' })).toBeVisible();
    const check = async () => {
      const results = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
      expect(results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
    };
    await check();
    await page.getByRole('button', { name: 'Alle öffnen' }).click();
    // Alle Unterthemen ausklappen (die untere Leiste würde Klicks am Bildrand abfangen).
    await page.locator('.library-subtopics').evaluateAll((items) => items.forEach((item) => ((item as HTMLDetailsElement).open = true)));
    await check();
  });
});
