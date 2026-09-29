import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { ACADEMY_PROGRESS_VERSION } from '../src/features/progress';
import { barCases } from '../src/content/barCases';
import { TRADE_DECISION_LABELS, type BarCase, type TradeDecision } from '../src/content/barCaseTypes';
import { brooksTrendsCourse } from '../src/content/course';

/*
 * F-15: Bar-für-Bar-Trainer. Läuft auf Desktop und Mobil gegen den Entwicklungsserver.
 */

const VERDICT_LABELS = { best: 'Beste Wahl', defensible: 'Vertretbar', mistake: 'Nicht tragfähig' } as const;
const barCase = barCases.find((item) => item.status === 'approved' && item.decisions.length >= 2)!;
const unitIndex = brooksTrendsCourse.units.findIndex((unit) => unit.id === barCase.unitId);
/** Alle veröffentlichten Lektionen bis einschließlich der Einheit des Falls. */
const unlockIds = brooksTrendsCourse.units
  .slice(0, unitIndex + 1)
  .flatMap((unit) => unit.lessons)
  .filter((lesson) => lesson.status === 'published')
  .map((lesson) => lesson.id);

function trackErrors(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  return errors;
}

async function seed(page: Page, record: Record<string, unknown>) {
  await page.addInitScript((value) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(value));
  }, record);
}

const unlocked = { version: 10, completedLessonIds: unlockIds, answers: {} };

const stored = (page: Page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));

/** Alle Texte, die vor der Abgabe eines Punkts nicht im DOM stehen dürfen. */
function secretsOf(item: BarCase, index: number): string[] {
  const decision = item.decisions[index];
  return [
    decision.explanation,
    ...decision.options.map((option) => option.feedback),
    ...decision.cues.map((cue) => cue.explanation),
    ...item.decisions.slice(index + 1).flatMap((later) => [later.prompt, ...later.cues.map((cue) => cue.label)]),
  ];
}

async function expectNoSpoilers(page: Page, index: number) {
  const decision = barCase.decisions[index];
  await expect(page.locator('.case-bar')).toHaveCount(decision.afterBar + 1);
  // Bereits abgegebene Punkte („Bisherige Entscheidungen“) dürfen ihre Einordnung zeigen.
  const text = await page.locator('body').evaluate((body) => {
    const copy = body.cloneNode(true) as HTMLElement;
    copy.querySelectorAll('.trainer-history').forEach((element) => element.remove());
    const aria = [...copy.querySelectorAll('[aria-label],[aria-description],[title]')]
      .map((element) => `${element.getAttribute('aria-label') ?? ''} ${element.getAttribute('title') ?? ''}`)
      .join(' ');
    return `${copy.textContent ?? ''} ${aria}`;
  });
  if (index > 0) await expect(page.locator('.trainer-history li')).toHaveCount(index);
  for (const secret of secretsOf(barCase, index)) expect(text, secret).not.toContain(secret);
  for (const label of Object.values(VERDICT_LABELS)) expect(text).not.toContain(label);
}

async function openCase(page: Page) {
  await page.goto('/#/practice');
  await page.getByRole('button', { name: `Trainieren: ${barCase.title}` }).click();
  await expect(page.getByRole('heading', { name: barCase.title, level: 1 })).toBeVisible();
  await expect(page).toHaveURL(new RegExp(`#/train/${barCase.id}$`));
}

async function decide(page: Page, index: number, decision: TradeDecision, cueIndex = 0) {
  const point = barCase.decisions[index];
  await expect(page.getByRole('heading', { name: `Entscheidung ${index + 1} von ${barCase.decisions.length}`, level: 2 })).toBeVisible();
  await page.getByRole('radio', { name: TRADE_DECISION_LABELS[decision], exact: true }).check();
  await page.getByRole('checkbox', { name: point.cues[cueIndex].label }).check();
  await page.getByRole('button', { name: 'Entscheidung abgeben' }).click();
  const verdict = point.options.find((option) => option.decision === decision)!.verdict;
  await expect(
    page.getByRole('heading', { name: `Auflösung: ${TRADE_DECISION_LABELS[decision]} – ${VERDICT_LABELS[verdict]}` }),
  ).toBeFocused();
}

test.describe('F-15 Bar-für-Bar-Trainer', () => {
  test('mehrstufiger Fall per Tastatur: nichts vor der Abgabe, Reveal, Auswertung, keine XP', async ({ page }) => {
    const errors = trackErrors(page);
    await seed(page, unlocked);
    await openCase(page);
    await page.getByRole('button', { name: 'Runde starten' }).click();

    // Vor der Abgabe: nur bekannte Bars, keine Einordnung, keine Erklärungen.
    await expectNoSpoilers(page, 0);
    const submit = page.getByRole('button', { name: 'Entscheidung abgeben' });
    await expect(submit).toBeDisabled();

    // Tastatur: Entscheidung mit Pfeiltasten, Hinweis mit Leertaste, Abgabe mit Enter.
    const first = barCase.decisions[0];
    await page.getByRole('radio', { name: 'Long', exact: true }).focus();
    await page.keyboard.press('Space');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await expect(page.getByRole('radio', { name: 'Abwarten' })).toBeChecked();
    await expect(submit).toBeDisabled();
    await page.getByRole('checkbox', { name: first.cues[0].label }).focus();
    await page.keyboard.press('Space');
    await expect(submit).toBeEnabled();
    await submit.focus();
    await page.keyboard.press('Enter');

    const waitVerdict = first.options.find((option) => option.decision === 'wait')!.verdict;
    await expect(page.getByRole('heading', { name: `Auflösung: Abwarten – ${VERDICT_LABELS[waitVerdict]}` })).toBeFocused();
    await expect(page.getByText(first.explanation)).toBeVisible();
    for (const option of first.options) await expect(page.getByText(option.feedback)).toBeVisible();
    await expect(page.locator('.case-bar')).toHaveCount(barCase.decisions[1].afterBar + 1);

    await page.getByRole('button', { name: 'Weiter zur nächsten Entscheidung' }).click();
    await expectNoSpoilers(page, 1);
    await decide(page, 1, 'short');
    for (let index = 2; index < barCase.decisions.length; index += 1) {
      await page.getByRole('button', { name: 'Weiter zur nächsten Entscheidung' }).click();
      await decide(page, index, 'wait');
    }
    await page.getByRole('button', { name: 'Auswertung anzeigen' }).click();
    await expect(page.getByRole('heading', { name: 'Auswertung' })).toBeFocused();
    await expect(page.locator('.case-bar')).toHaveCount(barCase.bars.length);
    await expect(page.getByRole('heading', { name: 'Zum Nacharbeiten' })).toBeVisible();

    const data = await stored(page);
    expect(data.version).toBe(ACADEMY_PROGRESS_VERSION);
    expect(data.caseSessions).toEqual({});
    expect(data.caseRuns[barCase.id]).toHaveLength(1);
    expect(data.caseRuns[barCase.id][0].sessionId).toMatch(/^run-/);
    // Seit F-16 (v12) mit Einzelantworten für die Fehlerübersicht.
    expect(Object.keys(data.caseRuns[barCase.id][0].answers)).toEqual(barCase.decisions.map((decision) => decision.id));
    expect(data.caseRuns[barCase.id][0].answers[barCase.decisions[0].id].decision).toBe('wait');
    // Keine XP, kein Lektionsabschluss durch den Trainer.
    expect(data.completedLessonIds).toEqual(unlockIds);
    expect(data.lessonResults ?? {}).toEqual({});

    // Neue Runde: neue ID, zweite Zählung – und der Lernlink führt zur Lektion.
    await page.getByRole('button', { name: 'Neue Runde' }).click();
    await expectNoSpoilers(page, 0);
    for (let index = 0; index < barCase.decisions.length; index += 1) {
      if (index > 0) await page.getByRole('button', { name: 'Weiter zur nächsten Entscheidung' }).click();
      await decide(page, index, 'long', 1);
    }
    await page.getByRole('button', { name: 'Auswertung anzeigen' }).click();
    const runs = (await stored(page)).caseRuns[barCase.id];
    expect(runs).toHaveLength(2);
    expect(runs[0].sessionId).not.toBe(runs[1].sessionId);

    await page.getByRole('button', { name: 'Zur Fallauswahl' }).last().click();
    await expect(page.getByRole('heading', { name: 'Chart trainieren' })).toBeVisible();
    await expect(page.getByText('2 Runden abgeschlossen.')).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('alle drei Entscheidungen werden je nach Fall eingeordnet', async ({ page }) => {
    await seed(page, unlocked);
    await openCase(page);
    for (const decision of ['long', 'short', 'wait'] as const) {
      await page.getByRole('button', { name: /Runde starten|Neue Runde starten/ }).click();
      await decide(page, 0, decision);
      const chosen = page.locator('.trainer-options li.chosen');
      await expect(chosen).toContainText(`${TRADE_DECISION_LABELS[decision]} · `);
      await expect(chosen).toContainText('(deine Wahl)');
      await page.getByRole('button', { name: 'Runde abbrechen' }).click();
      await page.getByRole('button', { name: 'Ja, Runde abbrechen' }).click();
      await expect(page.getByRole('button', { name: /Runde starten/ })).toBeVisible();
    }
    // Abgebrochene Runden werden nicht gezählt.
    const data = await stored(page);
    expect(data.caseRuns ?? {}).toEqual({});
    expect(data.caseSessions).toEqual({});
  });

  test('Reload setzt exakt fort, Zurück/Vorwärts verrät nichts, Neustart nur mit Bestätigung', async ({ page }) => {
    await seed(page, unlocked);
    await openCase(page);
    await page.getByRole('button', { name: 'Runde starten' }).click();
    await decide(page, 0, 'wait');
    await page.getByRole('button', { name: 'Weiter zur nächsten Entscheidung' }).click();
    const second = barCase.decisions[1];
    await page.getByRole('radio', { name: 'Short', exact: true }).check();
    await page.getByRole('checkbox', { name: second.cues[1].label }).check();

    await page.reload();
    await expect(page.getByText('Fortgesetzt')).toBeVisible();
    await expect(page.getByRole('heading', { name: `Entscheidung 2 von ${barCase.decisions.length}`, level: 2 })).toBeVisible();
    await expect(page.getByRole('radio', { name: 'Short', exact: true })).toBeChecked();
    await expect(page.getByRole('checkbox', { name: second.cues[1].label })).toBeChecked();
    await expectNoSpoilers(page, 1);

    // Zurück zur Übersicht und wieder vor: gleicher Stand, keine Lösung.
    await page.goBack();
    await expect(page.getByRole('heading', { name: 'Chart trainieren' })).toBeVisible();
    await expect(page.getByText(`Begonnen – Entscheidung 2 von ${barCase.decisions.length}.`)).toBeVisible();
    await page.goForward();
    await expectNoSpoilers(page, 1);

    // Von vorn nur nach Bestätigung; „Weiter trainieren“ lässt alles, wie es ist.
    await page.getByRole('button', { name: 'Von vorn beginnen' }).click();
    await expect(page.getByRole('heading', { name: 'Runde von vorn beginnen?' })).toBeVisible();
    await page.getByRole('button', { name: 'Weiter trainieren' }).click();
    await expect(page.getByRole('radio', { name: 'Short', exact: true })).toBeChecked();
    await page.getByRole('button', { name: 'Von vorn beginnen' }).click();
    await page.getByRole('button', { name: 'Ja, von vorn beginnen' }).click();
    await expectNoSpoilers(page, 0);
    await expect(page.getByRole('radio', { name: 'Short', exact: true })).not.toBeChecked();
  });

  test('gesperrte Fälle und Links: verständlicher Zustand, sicherer Rückfall, Link aus der Lektion', async ({ page }) => {
    await page.goto('/#/practice');
    await expect(page.getByText('Alle Fälle sind noch gesperrt.')).toBeVisible();
    await expect(page.getByRole('button', { name: /^Trainieren: / })).toHaveCount(0);
    await page.goto(`/#/train/${barCase.id}`);
    await expect(page.getByText('Dieser Link führt zu keiner verfügbaren Ansicht oder Lektion.')).toBeVisible();
    await page.goto('/#/train/gibt-es-nicht');
    await expect(page.getByText('Dieser Link führt zu keiner verfügbaren Ansicht oder Lektion.')).toBeVisible();
  });

  test('„Chart trainieren“ in der Lektionsauswertung', async ({ page }) => {
    await seed(page, unlocked);
    await page.goto(`/#/lesson/${barCase.lessonIds[0]}/result`);
    await page.getByRole('button', { name: `Fall: ${barCase.title}` }).click();
    await expect(page.getByRole('heading', { name: barCase.title, level: 1 })).toBeVisible();
  });

  test('barrierearm und ohne Überbreite bei 360 px in allen Phasen', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await seed(page, unlocked);
    await openCase(page);
    const check = async (phase: string) => {
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, phase).toBeLessThanOrEqual(0);
      const axe = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(axe.violations.map((violation) => violation.id), phase).toEqual([]);
    };
    await check('start');
    await page.getByRole('button', { name: 'Runde starten' }).click();
    await check('decide');
    await decide(page, 0, 'wait');
    await check('reveal');
    for (let index = 1; index < barCase.decisions.length; index += 1) {
      await page.getByRole('button', { name: 'Weiter zur nächsten Entscheidung' }).click();
      await decide(page, index, 'wait');
    }
    await page.getByRole('button', { name: 'Auswertung anzeigen' }).click();
    await check('summary');
    await page.goto('/#/practice');
    await check('list');
  });
});
