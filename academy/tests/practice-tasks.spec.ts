import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { brooksTrendsCourse } from '../src/content/course';
import { orderTasks, signalBarTasks } from '../src/content/practiceTasks';

/*
 * Stufe 4d: „Finde den Bar“ und „Ordne die Schritte“ (Content-Pack C-04). Reine Übung ohne
 * Einfluss auf den Lernstand. Die Aufgaben erscheinen erst nach fachlicher Freigabe; bis dahin
 * wird diese Datei übersprungen (der Vertrag ist in den Unit-Tests abgedeckt).
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const anyApproved = [...signalBarTasks, ...orderTasks].some((task) => task.status === 'approved');
const signal = signalBarTasks.filter((task) => task.status === 'approved');
const order = orderTasks.filter((task) => task.status === 'approved');

const allLessonIds = brooksTrendsCourse.units.flatMap((unit) =>
  unit.lessons.filter((lesson) => lesson.status === 'published').map((lesson) => lesson.id),
);

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

const stored = (page: Page) => page.evaluate(() => localStorage.getItem('wqt-academy-progress-v1'));

async function expectAccessible(page: Page, selector: string) {
  const results = await new AxeBuilder({ page }).include(selector).withTags(AXE_TAGS).analyze();
  expect(results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)).toEqual([]);
}

test.describe('Übungsaufgaben C-04', () => {
  test.skip(!anyApproved, 'Content-Pack C-04 ist noch nicht freigegeben.');
  test.setTimeout(90_000);

  test('neuer Stand: erklärt, dass noch keine Aufgabe offen ist', async ({ page }) => {
    await seed(page, []);
    await page.goto('/#/practice');
    if (signal.length) await expect(page.locator('.signal-game')).toContainText('Noch keine Aufgabe freigeschaltet');
    if (order.length) await expect(page.locator('.order-game')).toContainText('Noch keine Aufgabe freigeschaltet');
  });

  test('Finde den Bar: falscher Tipp erklärt, richtiger Tipp löst auf, Lernstand bleibt gleich', async ({ page }) => {
    test.skip(signal.length === 0);
    await seed(page, allLessonIds);
    await page.goto('/#/practice');
    const before = await stored(page);
    const game = page.locator('.signal-game');
    await game.getByRole('button', { name: /^Spielen/ }).click();
    const title = (await game.locator('.task-title').textContent())!;
    const task = signal.find((entry) => entry.title === title)!;
    const wrong = task.bars.findIndex((_, index) => index !== task.targetBarIndex);
    await game.locator('.signal-hit').nth(wrong).click();
    await expect(game.getByRole('status')).toContainText('Das ist nicht der gesuchte Bar');
    await expect(game.locator('.signal-hit').nth(wrong)).toContainText('');
    await game.locator('.signal-hit').nth(task.targetBarIndex).focus();
    await page.keyboard.press('Enter');
    await expect(game.getByRole('status')).toHaveText('Gefunden!');
    await expect(game.locator('.bull-bubble')).toContainText(task.explanation.slice(0, 30));
    await expect(game.locator('.signal-hit').first()).toBeDisabled();
    expect(await stored(page)).toBe(before);
    await expectAccessible(page, '.signal-game');
    await game.getByRole('button', { name: 'Nächste Aufgabe' }).click();
    await expect(game.locator('.signal-hit').first()).toBeEnabled();
  });

  test('Finde den Bar: nach zwei Fehlversuchen gibt es die Lösung', async ({ page }) => {
    test.skip(signal.length === 0);
    await seed(page, allLessonIds);
    await page.goto('/#/practice');
    const game = page.locator('.signal-game');
    await game.getByRole('button', { name: /^Spielen/ }).click();
    const title = (await game.locator('.task-title').textContent())!;
    const task = signal.find((entry) => entry.title === title)!;
    const wrongs = task.bars.map((_, index) => index).filter((index) => index !== task.targetBarIndex);
    await game.locator('.signal-hit').nth(wrongs[0]).click();
    await game.locator('.signal-hit').nth(wrongs[1]).click();
    await game.getByRole('button', { name: 'Lösung zeigen' }).click();
    await expect(game.getByRole('status')).toHaveText('Lösung gezeigt.');
    await expect(game.locator('.bull-bubble')).toBeVisible();
  });

  test('Ordne die Schritte: prüfen, verschieben, lösen', async ({ page }) => {
    test.skip(order.length === 0);
    await seed(page, allLessonIds);
    await page.goto('/#/practice');
    const before = await stored(page);
    const game = page.locator('.order-game');
    await game.getByRole('button', { name: /^Spielen/ }).click();
    const title = (await game.locator('.task-title').textContent())!;
    const task = order.find((entry) => entry.title === title)!;

    await game.getByRole('button', { name: 'Reihenfolge prüfen' }).click();
    await expect(game.getByRole('status')).toContainText(`von ${task.steps.length} Schritten stehen an der richtigen Stelle`);

    for (const [position, step] of task.steps.entries()) {
      for (let guard = 0; guard < task.steps.length; guard += 1) {
        const items = await game.locator('.order-text').allTextContents();
        const current = items.findIndex((text) => text.includes(step.text));
        if (current <= position) break;
        await game.getByRole('button', { name: `Nach oben: ${step.text}` }).click();
      }
    }
    await game.getByRole('button', { name: 'Reihenfolge prüfen' }).click();
    await expect(game.getByRole('status')).toContainText('Richtig!');
    await expect(game.locator('.bull-bubble')).toContainText(task.explanation.slice(0, 30));
    await expect(game.locator('.order-move').first()).toBeDisabled();
    expect(await stored(page)).toBe(before);
    await expectAccessible(page, '.order-game');
  });

  test('Ordne die Schritte: Verschieben per Tastatur behält den Fokus', async ({ page }) => {
    test.skip(order.length === 0);
    await seed(page, allLessonIds);
    await page.goto('/#/practice');
    const game = page.locator('.order-game');
    await game.getByRole('button', { name: /^Spielen/ }).click();
    const button = game.locator('.order-step').nth(1).locator('button[data-dir="down"]');
    await button.focus();
    await page.keyboard.press('Enter');
    await expect(game.getByRole('status')).toContainText('steht jetzt an Position');
    const focusedIsMoveButton = await page.evaluate(() => document.activeElement?.classList.contains('order-move'));
    expect(focusedIsMoveButton).toBe(true);
  });

  test('schmal (360 px): kein Überlauf, Ziele groß genug', async ({ page }) => {
    await seed(page, allLessonIds);
    await page.setViewportSize({ width: 360, height: 740 });
    await page.goto('/#/practice');
    if (signal.length) await page.locator('.signal-game').getByRole('button', { name: /^Spielen/ }).click();
    if (order.length) await page.locator('.order-game').getByRole('button', { name: /^Spielen/ }).click();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const small = await page.$$eval('.signal-hit, .order-move', (els) =>
      els.filter((el) => el.getBoundingClientRect().width < 24 || el.getBoundingClientRect().height < 24).length,
    );
    expect(small).toBe(0);
  });
});
