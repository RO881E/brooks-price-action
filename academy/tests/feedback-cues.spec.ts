import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { brooksTrendsCourse } from '../src/content/course';

/*
 * Stufe 4e/5a: „Fast geschafft“-Runde sowie Vibration und Töne. Standard: Vibration an,
 * Ton aus. Signale nur nach eigener Aktion, nie beim Laden; falsche Antwort still.
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const lesson = brooksTrendsCourse.units[0].lessons.find((item) => item.status === 'published' && item.steps.some((step) => step.type === 'question'))!;
const question = lesson.steps.find((step) => step.type === 'question')! as Extract<(typeof lesson.steps)[number], { type: 'question' }>;
const wrong = question.options.find((option) => option.id !== question.correctOptionId)!;
const right = question.options.find((option) => option.id === question.correctOptionId)!;
const escape = (text: string) => text.slice(0, 20).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Zeichnet Vibrationen und Audio-Aufrufe auf (Fake-APIs vor dem Seitenstart). */
async function instrument(page: Page, preferences?: Record<string, unknown>) {
  await page.addInitScript((stored) => {
    const w = window as unknown as { __vibes: number[][]; __audio: { contexts: number; notes: number } };
    w.__vibes = [];
    w.__audio = { contexts: 0, notes: 0 };
    Object.defineProperty(navigator, 'vibrate', { value: (pattern: number[]) => (w.__vibes.push(pattern), true), configurable: true });
    class FakeAudio {
      currentTime = 0;
      destination = {};
      state = 'running';
      constructor() {
        w.__audio.contexts += 1;
      }
      createOscillator() {
        return { type: '', frequency: { value: 0 }, connect() {}, start() {}, stop: () => { w.__audio.notes += 1; } };
      }
      createGain() {
        return { gain: { setValueAtTime() {}, linearRampToValueAtTime() {} }, connect() {} };
      }
    }
    (window as unknown as { AudioContext: unknown }).AudioContext = FakeAudio;
    if (stored && !sessionStorage.getItem('seeded-ui')) {
      sessionStorage.setItem('seeded-ui', '1');
      localStorage.setItem('wqt-academy-ui-v1', JSON.stringify(stored));
    }
  }, preferences ?? null);
  await page.addInitScript(() => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem(
      'wqt-academy-progress-v1',
      JSON.stringify({ version: 14, completedLessonIds: [], answers: {}, guideSeenAt: '2026-09-29T08:00:00.000Z' }),
    );
  });
}

const vibes = (page: Page) => page.evaluate(() => (window as unknown as { __vibes: number[][] }).__vibes);
const audio = (page: Page) => page.evaluate(() => (window as unknown as { __audio: { contexts: number; notes: number } }).__audio);

async function openQuestion(page: Page) {
  await page.goto(`/#/lesson/${lesson.id}`);
  for (let i = 0; i < 12 && (await page.getByRole('radio').count()) === 0; i += 1) {
    await page.getByRole('button', { name: 'Weiter', exact: true }).click();
  }
}

test.describe('Vibration und Töne', () => {
  test('Standard: Vibration an, Ton aus; nichts beim Laden; falsche Antwort still, richtige vibriert kurz', async ({ page }) => {
    await instrument(page);
    await page.goto('/#/settings');
    await expect(page.getByRole('checkbox', { name: /Vibration/ })).toBeChecked();
    await expect(page.getByRole('checkbox', { name: /Töne/ })).not.toBeChecked();
    expect(await vibes(page)).toEqual([]);
    expect(await page.evaluate(() => localStorage.getItem('wqt-academy-ui-v1'))).toBeNull();

    await openQuestion(page);
    expect(await vibes(page)).toEqual([]);
    await page.getByRole('radio', { name: new RegExp(escape(wrong.label)) }).click();
    await expect(page.getByText('Noch nicht ganz.')).toBeVisible();
    expect(await vibes(page)).toEqual([]);
    await page.getByRole('button', { name: 'Noch einmal versuchen' }).click();
    await page.getByRole('radio', { name: new RegExp(escape(right.label)) }).click();
    await expect(page.getByText(/Richtig/).first()).toBeVisible();
    expect(await vibes(page)).toEqual([[18]]);
    // Ton ist aus: nie ein Audiokontext.
    expect(await audio(page)).toEqual({ contexts: 0, notes: 0 });
  });

  test('Reload mit beantworteter Frage vibriert nicht', async ({ page }) => {
    await instrument(page);
    await openQuestion(page);
    await page.getByRole('radio', { name: new RegExp(escape(right.label)) }).click();
    await expect(page.getByText(/Richtig/).first()).toBeVisible();
    await page.reload();
    await expect(page.getByRole('radio').first()).toBeVisible();
    expect(await vibes(page)).toEqual([]);
  });

  test('Vibration aus: nichts; Ton an: leise Klänge nach eigener Antwort; Lernstand unberührt', async ({ page }) => {
    await instrument(page, { sound: true, haptics: false });
    await page.goto('/#/settings');
    await expect(page.getByRole('checkbox', { name: /Vibration/ })).not.toBeChecked();
    await expect(page.getByRole('checkbox', { name: /Töne/ })).toBeChecked();
    const before = await page.evaluate(() => localStorage.getItem('wqt-academy-progress-v1'));
    await openQuestion(page);
    await page.getByRole('radio', { name: new RegExp(escape(right.label)) }).click();
    await expect(page.getByText(/Richtig/).first()).toBeVisible();
    expect(await vibes(page)).toEqual([]);
    const played = await audio(page);
    expect(played.contexts).toBe(1);
    expect(played.notes).toBeGreaterThan(0);
    expect(await page.evaluate(() => Boolean(localStorage.getItem('wqt-academy-progress-v1')))).toBe(true);
    void before;
  });

  test('Einstellungen: per Tastatur schaltbar, nur eigener Schlüssel, Lernstand unverändert, axe ohne Befund', async ({ page }) => {
    await instrument(page);
    await page.goto('/#/settings');
    const progressBefore = await page.evaluate(() => localStorage.getItem('wqt-academy-progress-v1'));
    const sound = page.getByRole('checkbox', { name: /Töne/ });
    await sound.focus();
    await page.keyboard.press('Space');
    await expect(sound).toBeChecked();
    expect(JSON.parse((await page.evaluate(() => localStorage.getItem('wqt-academy-ui-v1')))!)).toEqual({ sound: true, haptics: true, theme: 'light' });
    expect(await page.evaluate(() => localStorage.getItem('wqt-academy-progress-v1'))).toBe(progressBefore);
    await page.reload();
    await expect(page.getByRole('checkbox', { name: /Töne/ })).toBeChecked();
    await expect(page.getByText(/nicht iPhone-Safari/)).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
    const result = await new AxeBuilder({ page }).include('.settings-section').withTags(AXE_TAGS).analyze();
    expect(result.violations.map((violation) => violation.id)).toEqual([]);
  });
});

test.describe('„Fast geschafft“ (Fehler trainieren)', () => {
  test('offener Fehler: ermutigender Bulle, Runde bis „Das saß!“, Abschluss vibriert', async ({ page }) => {
    await instrument(page);
    await page.addInitScript(
      ({ lessonIds, questionId, wrongId, correctId }) => {
        sessionStorage.setItem('seeded', '1');
        localStorage.setItem(
          'wqt-academy-progress-v1',
          JSON.stringify({
            version: 12,
            completedLessonIds: lessonIds,
            answers: {},
            guideSeenAt: '2026-09-29T08:00:00.000Z',
            questionResults: {
              [questionId]: { selectedOptionId: correctId, attempts: 2, firstAttemptCorrect: false, status: 'correct', wrongOptionIds: [wrongId] },
            },
            reviewCards: {
              [questionId]: { stage: 0, dueDay: '2026-09-30', lastReviewedDay: '2026-09-29', lastResult: 'wrong', reviews: 2, lapses: 1 },
            },
          }),
        );
      },
      { lessonIds: [lesson.id], questionId: question.id, wrongId: wrong.id, correctId: right.id },
    );
    await page.goto('/#/practice');
    const card = page.locator('.review-mode-card', { has: page.getByRole('heading', { name: 'Fehler trainieren' }) });
    await expect(card.locator('.mistake-encourage')).toContainText('Fast geschafft');
    await expect(card.locator('.mistake-encourage img.bull')).toHaveAttribute('alt', '');
    await card.getByRole('button', { name: 'Fehler trainieren' }).click();
    await page.getByRole('radio', { name: new RegExp(escape(right.label)) }).click();
    await page.getByRole('button', { name: 'Auswertung anzeigen' }).click();
    await expect(page.getByText('Das saß! Diese Fehler hast du jetzt richtig beantwortet.')).toBeVisible();
    // richtige Antwort (18), Abschluss der Runde (30-40-30) und der Meilenstein „Fehlerfreie Runde“
    expect(await vibes(page)).toEqual([[18], [30, 40, 30], [40, 60, 40, 60, 80]]);
    const result = await new AxeBuilder({ page }).include('.review-result').withTags(AXE_TAGS).analyze();
    expect(result.violations.map((violation) => violation.id)).toEqual([]);
  });
});
