import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { barCases } from '../src/content/barCases';
import { TRADE_DECISION_LABELS, type TradeDecision } from '../src/content/barCaseTypes';
import { brooksTrendsCourse } from '../src/content/course';

/*
 * F-25: Rückblick auf abgeschlossene Trainerrunden. Desktop und Mobil.
 */

const VERDICT = { best: 'Beste Wahl', defensible: 'Vertretbar', mistake: 'Nicht tragfähig' } as const;
const barCase = barCases.find((item) => item.status === 'approved' && item.decisions.length >= 2)!;
const unitIndex = brooksTrendsCourse.units.findIndex((unit) => unit.id === barCase.unitId);
const unlockIds = brooksTrendsCourse.units
  .slice(0, unitIndex + 1)
  .flatMap((unit) => unit.lessons)
  .filter((lesson) => lesson.status === 'published')
  .map((lesson) => lesson.id);

function record(extra: Record<string, unknown> = {}) {
  return { version: 14, completedLessonIds: unlockIds, answers: {}, guideSeenAt: '2026-09-29T08:00:00.000Z', ...extra };
}

async function seed(page: Page, value: Record<string, unknown> = record()) {
  await page.addInitScript((data) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(data));
  }, value);
}

const stored = (page: Page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));

/** Lerndaten ohne den Speicher-Zeitstempel. */
const learning = async (page: Page) => {
  const { updatedAt: _ignored, ...rest } = await stored(page);
  return JSON.stringify(rest);
};

/** Spielt eine Runde mit den gegebenen Entscheidungen durch (erster Hinweis je Punkt). */
async function playRound(page: Page, choices: TradeDecision[], reason?: string) {
  await page.goto(`/#/train/${barCase.id}`);
  await page.getByRole('button', { name: /Runde starten/ }).click();
  for (const [index, choice] of choices.entries()) {
    if (index > 0) await page.getByRole('button', { name: 'Weiter zur nächsten Entscheidung' }).click();
    if (reason && index === 0) await page.getByRole('textbox', { name: 'Kurz: Warum entscheidest du so?' }).fill(reason);
    await page.getByRole('radio', { name: TRADE_DECISION_LABELS[choice], exact: true }).check();
    await page.getByRole('checkbox', { name: barCase.decisions[index].cues[0].label }).check();
    await page.getByRole('button', { name: 'Entscheidung abgeben' }).click();
  }
  await page.getByRole('button', { name: 'Auswertung anzeigen' }).click();
}

const choices: TradeDecision[] = ['long', 'wait', ...Array(Math.max(0, barCase.decisions.length - 2)).fill('short')];

test.describe('F-25 Rückblick', () => {
  test('mehrstufig: damalige Bars, Wahl und Begründung, dann Auflösung und Folgebars; schreibt nichts', async ({ page }) => {
    await seed(page);
    await playRound(page, choices, 'Damals dachte ich: Ausbruch.');
    await page.getByRole('button', { name: 'Diese Runde nachvollziehen' }).click();
    await expect(page).toHaveURL(new RegExp(`#/train/${barCase.id}/review/run-`));
    await expect(page.getByRole('heading', { name: barCase.title, level: 1 })).toBeFocused();
    const before = await learning(page);

    const index = page.getByRole('navigation', { name: 'Schritte der Runde' });
    await expect(index.getByRole('button')).toHaveCount(barCase.decisions.length);
    await expect(index.getByRole('button', { name: `Entscheidung 1: ${TRADE_DECISION_LABELS[choices[0]]}` })).toHaveAttribute(
      'aria-current',
      'step',
    );
    const first = barCase.decisions[0];
    // Zuerst nur das damals Sichtbare – ohne Auflösung.
    await expect(page.locator('.case-bar')).toHaveCount(first.afterBar + 1);
    await expect(page.getByText(`Deine Wahl: ${TRADE_DECISION_LABELS[choices[0]]}`)).toBeVisible();
    await expect(page.getByText('Damals dachte ich: Ausbruch.')).toBeVisible();
    await expect(page.getByText(first.explanation)).toHaveCount(0);

    await page.getByRole('button', { name: 'Auflösung zeigen' }).click();
    const verdict = first.options.find((option) => option.decision === choices[0])!.verdict;
    await expect(page.getByRole('heading', { name: `Auflösung: ${TRADE_DECISION_LABELS[choices[0]]} – ${VERDICT[verdict]}` })).toBeFocused();
    await expect(page.getByText(first.explanation)).toBeVisible();
    await expect(page.locator('.case-chart').last().locator('.case-bar')).toHaveCount(barCase.decisions[1].afterBar + 1);

    // Nächster Schritt per Tastatur; Abwarten mit eigener Einordnung, keine Begründung notiert.
    await page.getByRole('button', { name: 'Nächster Schritt' }).focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('heading', { name: `Entscheidung 2 von ${barCase.decisions.length}` })).toBeFocused();
    await expect(page.getByText('Deine Wahl: Abwarten')).toBeVisible();
    await expect(page.getByText('Keine eigene Begründung notiert.')).toBeVisible();

    // Tabelle zeigt ebenfalls nur die damals sichtbaren Bars.
    await page.getByRole('button', { name: 'Tabelle', exact: true }).click();
    await expect(page.locator('[data-bar-row]')).toHaveCount(barCase.decisions[1].afterBar + 1);

    // Reload: Rückblick bleibt erreichbar; der Stand ist unverändert (keine Antwort, XP, Lerntag).
    await page.reload();
    await expect(page.getByRole('heading', { name: barCase.title, level: 1 })).toBeVisible();
    expect(await learning(page)).toBe(before);
  });

  test('Erst- und Zweitversuch getrennt; „Erneut trainieren“ startet einen neuen Durchlauf', async ({ page }) => {
    await seed(page);
    await playRound(page, choices, 'erster Versuch');
    await page.getByRole('button', { name: 'Zur Fallauswahl' }).last().click();
    await playRound(page, choices.map(() => 'wait'), 'zweiter Versuch');
    await page.getByRole('button', { name: 'Zur Fallauswahl' }).last().click();
    await page.getByRole('button', { name: `Erneut trainieren: ${barCase.title}` }).click();
    const runs = page.locator('.replay-runs li');
    await expect(runs).toHaveCount(2);
    await page.getByRole('button', { name: 'Rückblick: letzte Runde' }).click();
    await expect(page.getByText('zweiter Versuch')).toBeVisible();
    await page.goBack();
    await runs.nth(1).getByRole('button', { name: /^Rückblick/ }).click();
    await expect(page.getByText('erster Versuch')).toBeVisible();

    await page.getByRole('button', { name: 'Erneut trainieren' }).click();
    await expect(page).toHaveURL(new RegExp(`#/train/${barCase.id}$`));
    await expect(page.getByRole('heading', { name: 'Entscheidung 1 von', exact: false }).first()).toBeVisible();
    const data = await stored(page);
    expect(data.caseRuns[barCase.id]).toHaveLength(2);
    expect(data.caseSessions[barCase.id]).toBeTruthy();
  });

  test('Deep Links: laufende Runde, unbekannte Runde, unbekannter Fall und alter Import mit klarer Meldung', async ({ page }) => {
    await seed(
      page,
      record({
        caseRuns: {
          [barCase.id]: [{ sessionId: 'alt', completedAt: '2026-09-27T10:00:00.000Z', best: 1, defensible: 1, mistake: 0, missedCues: 0 }],
        },
      }),
    );
    // Laufende Runde: keine Auflösung über die Adresse.
    await page.goto(`/#/train/${barCase.id}`);
    await page.getByRole('button', { name: /Runde starten/ }).click();
    const running = (await stored(page)).caseSessions[barCase.id].sessionId;
    await page.goto(`/#/train/${barCase.id}/review/${running}`);
    await expect(page.getByText(/keine abgeschlossene Runde/)).toBeVisible();
    await expect(page.getByText(barCase.decisions[0].explanation)).toHaveCount(0);
    await expect(page.locator('.case-bar')).toHaveCount(0);

    await page.goto(`/#/train/${barCase.id}/review/gibt-es-nicht`);
    await expect(page.getByText(/keine abgeschlossene Runde/)).toBeVisible();
    await page.goto('/#/train/bar-case.gibt-es-nicht/review/alt');
    await expect(page.getByText(/Diesen Trainingsfall gibt es nicht/)).toBeVisible();
    await page.goto(`/#/train/${barCase.id}/review/alt`);
    await expect(page.getByText(/älteren Version ohne gespeicherte Einzelantworten/)).toBeVisible();
    await expect(page.locator('.case-bar')).toHaveCount(0);
  });

  test('360 px und axe im Rückblick', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await seed(page);
    await playRound(page, choices);
    await page.getByRole('button', { name: 'Diese Runde nachvollziehen' }).click();
    await page.getByRole('button', { name: 'Auflösung zeigen' }).click();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
  });
});
