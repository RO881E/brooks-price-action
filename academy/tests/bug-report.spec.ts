import { readFileSync } from 'node:fs';
import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { priceActionTrendsCourse } from '../src/content/course';

/*
 * F-28: Freiwilliger Beta-Fehlerbericht unter „Hilfe“. Nichts wird gesendet;
 * die Vorschau ist exakt der kopierte bzw. heruntergeladene Text.
 */

const lesson = priceActionTrendsCourse.units[0].lessons.find((item) => item.status === 'published')!;
const PRIVATE_NOTE = 'GEHEIME-NOTIZ-4711';
const PREVIEW = 'Vorschau – genau dieser Text wird kopiert';

async function openReport(page: Page, hash = '/') {
  await page.goto(hash);
  await page.getByRole('button', { name: 'Hilfe', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'So lernst du in der WQT Academy' });
  await dialog.getByRole('button', { name: 'Fehler melden' }).click();
  const form = page.getByRole('dialog', { name: 'Fehler melden' });
  await expect(form).toBeVisible();
  return form;
}

test.describe('F-28 Fehlerbericht', () => {
  test('ohne Lernstand: Pflichtfeld, Vorschau, Kopieren, Datei – gleicher Text, nichts gesendet', async ({ page, context }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    const requests: string[] = [];
    page.on('request', (request) => requests.push(`${request.method()} ${request.url()}`));
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    const form = await openReport(page);
    const copy = form.getByRole('button', { name: 'Bericht kopieren' });
    const download = form.getByRole('button', { name: 'Als Textdatei herunterladen' });
    await expect(copy).toBeDisabled();
    await expect(download).toBeDisabled();
    const preview = form.getByLabel(PREVIEW);
    await expect(preview).toHaveValue(/\(noch nicht beschrieben\)/);

    await form.getByLabel('Was ist passiert?').fill('Die Frage lädt nicht.');
    await form.getByLabel(/Wie lässt es sich nachstellen/).fill('1. Lektion öffnen\n2. Weiter klicken');
    await expect(copy).toBeEnabled();
    const text = await preview.inputValue();
    expect(text).toContain('App-Version: 0.1.0');
    expect(text).toMatch(/Browser: Chrome \d+ \(/);
    expect(text).toContain('Verbindung: online');
    expect(text).toContain('Bereich: Lernpfad');
    expect(text).toContain('Die Frage lädt nicht.');
    expect(text).toContain('1. Lektion öffnen\n2. Weiter klicken');

    await copy.click();
    await expect(form.getByText('Bericht kopiert.')).toBeVisible();
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(text);

    const [file] = await Promise.all([page.waitForEvent('download'), download.click()]);
    expect(file.suggestedFilename()).toBe('wqt-academy-fehlerbericht.txt');
    expect(readFileSync((await file.path())!, 'utf8')).toBe(text);

    expect(requests.filter((entry) => entry.startsWith('POST'))).toEqual([]);
    expect(errors).toEqual([]);
  });

  test('private Notizen und Route-Parameter stehen nicht im Bericht; Lernstand bleibt unverändert', async ({ page }) => {
    await page.addInitScript(
      ({ lessonId, note }) => {
        if (localStorage.getItem('wqt-academy-progress-v1')) return;
        localStorage.setItem(
          'wqt-academy-progress-v1',
          JSON.stringify({
            version: 14,
            completedLessonIds: [],
            answers: {},
            guideSeenAt: '2026-09-29T08:00:00.000Z',
            notes: { [lessonId]: { lessonId, stepId: null, text: note, updatedAt: '2026-09-29T08:00:00.000Z' } },
          }),
        );
      },
      { lessonId: lesson.id, note: PRIVATE_NOTE },
    );
    await page.goto('/#/study/10');
    const before = await page.evaluate(() => localStorage.getItem('wqt-academy-progress-v1'));
    await page.getByRole('button', { name: 'Hilfe', exact: true }).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Fehler melden' }).click();
    const form = page.getByRole('dialog', { name: 'Fehler melden' });
    await form.getByLabel('Was ist passiert?').fill('Etwas ist kaputt.');
    const text = await form.getByLabel(PREVIEW).inputValue();
    expect(text).toContain('Bereich: study');
    expect(text).not.toContain(PRIVATE_NOTE);
    expect(text).not.toContain('study/10');
    expect(text).not.toContain('#/');
    expect(await page.evaluate(() => localStorage.getItem('wqt-academy-progress-v1'))).toBe(before);
  });

  test('ohne Zwischenablage-Berechtigung: Text wird markiert, Download bleibt möglich', async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'clipboard', {
        value: { writeText: () => Promise.reject(new DOMException('denied', 'NotAllowedError')) },
        configurable: true,
      });
    });
    const form = await openReport(page);
    await form.getByLabel('Was ist passiert?').fill('Test');
    await form.getByRole('button', { name: 'Bericht kopieren' }).click();
    await expect(form.getByText(/Kopieren ist hier nicht erlaubt/)).toBeVisible();
    const preview = form.getByLabel(PREVIEW);
    await expect(preview).toBeFocused();
    expect(await preview.evaluate((el: HTMLTextAreaElement) => el.selectionEnd - el.selectionStart)).toBeGreaterThan(20);
    await expect(form.getByRole('button', { name: 'Als Textdatei herunterladen' })).toBeEnabled();
  });

  test('Tastatur, Fokus, Zurück zur Hilfe, kein Überlauf und keine Axe-Verstöße', async ({ page }) => {
    const form = await openReport(page);
    await expect(form.getByRole('heading', { name: 'Fehler melden' })).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(form.getByLabel('Was ist passiert?')).toBeFocused();
    await page.keyboard.type('Tastatur-Test');
    await expect(form.getByLabel(PREVIEW)).toHaveValue(/Tastatur-Test/);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
    await form.getByRole('button', { name: 'Zurück zur Hilfe' }).click();
    await expect(page.getByRole('dialog', { name: 'So lernst du in der WQT Academy' })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Hilfe', exact: true })).toBeFocused();
  });
});
