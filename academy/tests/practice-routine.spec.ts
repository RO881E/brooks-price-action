import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { barCases } from '../src/content/barCases';
import { brooksTrendsCourse } from '../src/content/course';
import { ACADEMY_PROGRESS_VERSION } from '../src/features/progress';

/*
 * P08: bessere Übungsroutine – Einstieg mit Mengen, konstruktive Fehler, begründeter
 * Kurzlern-Vorschlag, Vergleich mit der vorherigen Runde im Rückblick.
 */

const published = brooksTrendsCourse.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const questions = new Map(
  brooksTrendsCourse.units.flatMap((unit) =>
    unit.lessons.flatMap((lesson) => lesson.steps.flatMap((step) => (step.type === 'question' ? [[step.id, { step, lesson }] as const] : []))),
  ),
);

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

const stored = (page: Page) => page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));
const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

test.describe('P08 Übungsroutine', () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date(2026, 9, 5, 10, 0));
  });

  test('Einstieg: reale Mengen je Karte; ohne Fälliges eine gute Alternative', async ({ page }) => {
    await seed(page, published.slice(0, 3).map((lesson) => lesson.id));
    await page.goto('/#/practice');
    const cards = page.locator('.review-mode-card');
    await expect(cards.nth(0).locator('.review-count')).toHaveText(/^\d+$/);
    const due = Number(await cards.nth(0).locator('.review-count').innerText());
    expect(due).toBeGreaterThan(0);
    await expect(cards.nth(0).getByText(`${due} ${due === 1 ? 'Frage ist' : 'Fragen sind'} heute dran.`)).toBeVisible();
    await expect(cards.nth(3).locator('.review-count')).toHaveText(String(Math.min(10, published.slice(0, 3).flatMap((l) => l.steps).filter((s) => s.type === 'question').length)));
    // Alles später fällig: „0“ und eine gute Alternative statt einer leeren Karte.
    const later = Object.fromEntries(
      published
        .slice(0, 3)
        .flatMap((lesson) => lesson.steps.filter((step) => step.type === 'question').map((step) => step.id))
        .map((id) => [id, { stage: 2, dueDay: '2026-11-01', lastReviewedDay: '2026-10-05', lastResult: 'correct', reviews: 2, lapses: 0 }]),
    );
    await page.evaluate((cardsValue) => {
      const value = JSON.parse(localStorage.getItem('wqt-academy-progress-v1')!);
      value.reviewCards = cardsValue;
      localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(value));
    }, later);
    await page.reload();
    await expect(page.locator('.review-mode-card').nth(0).locator('.review-count')).toHaveText('0');
    await expect(page.getByText('Für heute ist alles wiederholt.')).toBeVisible();
    await expect(page.getByText(/Lust auf mehr\?/)).toBeVisible();
  });

  test('falsche Antwort: erst nach der Abgabe ein Nachlesen-Link, Rückweg an dieselbe Stelle, nichts doppelt', async ({ page }) => {
    await seed(page, published.slice(0, 3).map((lesson) => lesson.id));
    await page.goto('/#/practice');
    await page.getByRole('button', { name: 'Fällige Fragen üben' }).click();
    await expect(page.getByRole('button', { name: /Erklärung nachlesen/ })).toHaveCount(0);
    const id = (await stored(page)).reviewSession.questionIds[0] as string;
    const { step, lesson } = questions.get(id)!;
    const wrong = step.options.find((option) => option.id !== step.correctOptionId)!;
    await page.getByRole('radio', { name: new RegExp(escape(wrong.label).slice(0, 40)) }).first().click();
    const link = page.getByRole('button', { name: `Erklärung nachlesen: ${lesson.title}` });
    await expect(link).toBeVisible();
    const before = await stored(page);
    await link.click();
    await expect(page).toHaveURL(new RegExp(`#/lesson/${lesson.id}`));
    await page.goBack();
    // Dieselbe Frage, bereits beantwortet – keine zweite Wertung.
    await expect(page.getByText(/^Frage 1 \//).first()).toBeVisible();
    await expect(page.getByRole('radio', { name: new RegExp(escape(wrong.label).slice(0, 40)) }).first()).toBeDisabled();
    const after = await stored(page);
    expect(after.reviewSession.index).toBe(before.reviewSession.index);
    expect(after.reviewSession.answers).toEqual(before.reviewSession.answers);
    expect(after.reviewCards).toEqual(before.reviewCards);
    expect(after.completedLessonIds).toEqual(before.completedLessonIds);
    expect(after.activityDays ?? []).toEqual(before.activityDays ?? []);
  });

  test('richtige Antwort: kein Nachlesen-Link', async ({ page }) => {
    await seed(page, published.slice(0, 3).map((lesson) => lesson.id));
    await page.goto('/#/practice');
    await page.getByRole('button', { name: 'Fällige Fragen üben' }).click();
    const id = (await stored(page)).reviewSession.questionIds[0] as string;
    const { step } = questions.get(id)!;
    const right = step.options.find((option) => option.id === step.correctOptionId)!;
    await page.getByRole('radio', { name: new RegExp(escape(right.label).slice(0, 40)) }).first().click();
    await expect(page.getByText('Sauber analysiert.')).toBeVisible();
    await expect(page.getByRole('button', { name: /Erklärung nachlesen/ })).toHaveCount(0);
  });

  test('Kurz lernen: jeder Vorschlag sagt, warum er erscheint, und was Überspringen bedeutet', async ({ page }) => {
    await seed(page, published.slice(0, 3).map((lesson) => lesson.id));
    await page.goto('/#/study/20');
    await expect(page.getByText(/lässt sich überspringen – das blendet ihn nur hier aus; Lernstand, XP und Lerntage bleiben unberührt/)).toBeVisible();
    const reasons = page.locator('.study-why');
    await expect(reasons.first()).toContainText(/^Weil /);
    expect(await reasons.count()).toBe(await page.locator('.study-card').count());
    await expect(page.getByText('Weil sie die nächste freigeschaltete Lektion im Lernpfad ist.')).toBeVisible();
    await expect(page.getByText(/Sekunden|verbleibend|Restzeit|Uhr\b/)).toHaveCount(0);
  });

  test('Rückblick: Vergleich mit der vorherigen Runde – Fakten, damalige Begründung, nichts überschrieben', async ({ page }) => {
    const barCase = barCases.find((item) => item.status === 'approved' && item.decisions.length >= 2)!;
    const unitIndex = brooksTrendsCourse.units.findIndex((unit) => unit.id === barCase.unitId);
    const ids = brooksTrendsCourse.units
      .slice(0, unitIndex + 1)
      .flatMap((unit) => unit.lessons)
      .filter((lesson) => lesson.status === 'published')
      .map((lesson) => lesson.id);
    const [a, b] = barCase.decisions;
    const answers = (x: string, y: string) => ({
      [a.id]: { decision: x, cueIds: [a.cues[0].id] },
      [b.id]: { decision: y, cueIds: [b.cues[0].id] },
    });
    await seed(page, ids, {
      caseRuns: {
        [barCase.id]: [
          { sessionId: 'run-1', completedAt: '2026-09-27T10:00:00.000Z', best: 1, defensible: 1, mistake: 0, missedCues: 0, answers: answers('long', 'wait'), reasoning: { [a.id]: { text: 'Ausbruch kaufen.', confidence: 'sure' } } },
          { sessionId: 'run-2', completedAt: '2026-09-29T10:00:00.000Z', best: 1, defensible: 1, mistake: 0, missedCues: 0, answers: answers('wait', 'wait'), reasoning: { [a.id]: { text: 'Erst Anschluss abwarten.', confidence: 'unsure' } } },
        ],
      },
    });
    await page.goto(`/#/train/${barCase.id}/review/run-2`);
    const previous = page.locator('.previous-round').first();
    await expect(previous.getByRole('heading', { name: /Vorherige Runde vom 27\.09\.2026/ })).toBeVisible();
    await expect(previous).toContainText('Deine Wahl hat sich geändert: von Long zu Abwarten.');
    await expect(previous).toContainText('Sicherheit: von „Sicher“ zu „Unsicher“.');
    await expect(previous).toContainText('Ausbruch kaufen.');
    await expect(page.getByText('Erst Anschluss abwarten.')).toBeVisible();
    // Zweiter Punkt: dieselbe Wahl.
    await page.getByRole('button', { name: /Entscheidung 2:/ }).click();
    await expect(page.locator('.previous-round').first()).toContainText('Deine Wahl war dieselbe: Abwarten.');
    // Die erste Runde hat keinen Vergleich; nichts wurde geschrieben.
    const before = JSON.stringify((await stored(page)).caseRuns);
    await page.goto(`/#/train/${barCase.id}/review/run-1`);
    await expect(page.getByRole('heading', { name: /Entscheidung 1 von/ })).toBeVisible();
    await expect(page.locator('.previous-round')).toHaveCount(0);
    expect(JSON.stringify((await stored(page)).caseRuns)).toBe(before);
  });

  test('360 px: kein Überlauf und keine Axe-Verstöße im Übungs-Einstieg', async ({ page }) => {
    await seed(page, published.slice(0, 3).map((lesson) => lesson.id));
    await page.goto('/#/practice');
    await expect(page.locator('.review-mode-card').first()).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
  });
});
