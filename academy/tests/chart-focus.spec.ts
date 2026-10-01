import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Locator, type Page } from '@playwright/test';
import { priceActionTrendsCourse, publishedLessons } from '../src/content/course';
import type { Lesson } from '../src/content/types';

/*
 * F-11: Diagramm-Fokus. Läuft auf Desktop und Mobil (Pixel 7 mit Touch).
 */

type DiagramStep = Extract<Lesson['steps'][number], { type: 'diagram' }>;

interface DiagramCase {
  unit: string;
  lesson: Lesson;
  step: DiagramStep;
  stepNumber: number;
}

/** Je Einheit das erste veröffentlichte Schaubild – verschiedene Szenariotypen. */
const cases: DiagramCase[] = priceActionTrendsCourse.units.flatMap((unit) => {
  for (const lesson of unit.lessons) {
    if (lesson.status !== 'published') continue;
    const index = lesson.steps.findIndex((step) => step.type === 'diagram');
    if (index !== -1) {
      return [{ unit: unit.title, lesson, step: lesson.steps[index] as DiagramStep, stepNumber: index + 1 }];
    }
  }
  return [];
});

const first = cases[0];

async function unlockAll(page: Page) {
  await page.addInitScript((ids) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem(
      'wqt-academy-progress-v1',
      JSON.stringify({ version: 2, completedLessonIds: ids, answers: {} }),
    );
  }, publishedLessons.map((lesson) => lesson.id));
}

function trackErrors(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  return errors;
}

async function openCase(page: Page, item: DiagramCase) {
  await page.goto(`/#/lesson/${item.lesson.id}?step=${item.stepNumber}`);
  await expect(page.getByRole('heading', { name: item.step.title, level: 1 })).toBeVisible();
  await expect(page.locator('.lesson-stage .learning-chart svg')).toBeVisible();
}

const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const trigger = (page: Page, item: DiagramCase) =>
  page.getByRole('button', { name: new RegExp(`^Vergrößern\\s*:\\s*${escape(item.step.title)}$`) });

const dialogOf = (page: Page) => page.getByRole('dialog', { name: first.step.title });

async function viewBox(dialog: Locator) {
  return dialog.locator('svg[role="img"]').getAttribute('viewBox');
}

async function noOverflow(page: Page) {
  return page.evaluate(
    () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
  );
}

test.describe('F-11 Diagramm-Fokus', () => {
  test.beforeEach(async ({ page }) => {
    await unlockAll(page);
  });

  test('ein Schaubild je Buchabschnitt öffnet sich lesbar, barrierearm und ohne Überbreite', async ({ page }) => {
    test.setTimeout(120_000);
    const errors = trackErrors(page);
    expect(cases.length).toBeGreaterThanOrEqual(5);
    for (const width of [360, 1280]) {
      await page.setViewportSize({ width, height: width === 360 ? 740 : 800 });
      for (const item of cases) {
        await openCase(page, item);
        await trigger(page, item).click();
        const dialog = page.getByRole('dialog', { name: item.step.title });
        await expect(dialog).toBeVisible();
        await expect(dialog.locator('svg[role="img"]')).toBeVisible();
        await expect(dialog.getByText(item.step.caption)).toBeVisible();
        const box = await dialog.locator('.chart-focus-viewport').boundingBox();
        expect(box!.width, `${item.unit} ${width}px`).toBeGreaterThan(width === 360 ? 300 : 700);
        expect(await noOverflow(page), `${item.unit} ${width}px`).toBe(true);
        const axe = await new AxeBuilder({ page })
          .include('.chart-focus-dialog')
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
          .analyze();
        expect(axe.violations.map((violation) => violation.id), `${item.unit} ${width}px`).toEqual([]);
        await page.keyboard.press('Escape');
        await expect(dialog).toHaveCount(0);
      }
    }
    expect(errors).toEqual([]);
  });

  test('Tastatur: öffnen, Tab bleibt im Dialog, Zoomgrenzen, Verschieben, Reset, Escape', async ({ page }) => {
    const errors = trackErrors(page);
    await openCase(page, first);
    const url = page.url();

    // Nur per Tastatur öffnen.
    const opener = trigger(page, first);
    for (let i = 0; i < 40 && !(await opener.evaluate((el) => el === document.activeElement)); i += 1) {
      await page.keyboard.press('Tab');
    }
    await expect(opener).toBeFocused();
    await page.keyboard.press('Enter');
    const dialog = dialogOf(page);
    await expect(dialog.getByRole('button', { name: /Schließen/ })).toBeFocused();
    await expect(page.locator('html')).toHaveCSS('overflow', 'hidden');

    // Tab bleibt im Dialog – auch nach vielen Schritten.
    for (let i = 0; i < 25; i += 1) {
      await page.keyboard.press('Tab');
      expect(await dialog.evaluate((el) => el.contains(document.activeElement))).toBe(true);
    }

    const zoomIn = dialog.getByRole('button', { name: 'Vergrößern', exact: true });
    const zoomOut = dialog.getByRole('button', { name: 'Verkleinern' });
    const reset = dialog.getByRole('button', { name: 'Zurücksetzen' });
    await expect(zoomOut).toBeDisabled();
    await expect(dialog.getByRole('button', { name: 'Ansicht nach links schieben' })).toBeDisabled();

    await zoomIn.focus();
    for (let i = 0; i < 6; i += 1) {
      if (await zoomIn.isEnabled()) await page.keyboard.press('Enter');
    }
    await expect(zoomIn).toBeDisabled();
    await expect(dialog.getByRole('status')).toHaveText(/400 %/);
    const centered = await viewBox(dialog);

    const panLeft = dialog.getByRole('button', { name: 'Ansicht nach links schieben' });
    await panLeft.focus();
    await page.keyboard.press('Enter');
    expect(await viewBox(dialog)).not.toBe(centered);
    // Nicht über den Rand hinaus.
    for (let i = 0; i < 10; i += 1) if (await panLeft.isEnabled()) await panLeft.click();
    await expect(panLeft).toBeDisabled();
    expect((await viewBox(dialog))!.split(' ')[0]).toBe('0');

    await reset.focus();
    await page.keyboard.press('Enter');
    expect(await viewBox(dialog)).toBe('0 0 760 330');
    await expect(zoomOut).toBeDisabled();

    await page.keyboard.press('Escape');
    await expect(dialog).toHaveCount(0);
    await expect(opener).toBeFocused();
    await expect(page.locator('html')).not.toHaveCSS('overflow', 'hidden');
    expect(page.url()).toBe(url);
    expect(errors).toEqual([]);
  });

  test('Scrollposition und Lektionsstand bleiben nach dem Schließen erhalten', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await openCase(page, first);
    await trigger(page, first).scrollIntoViewIfNeeded();
    const scrollBefore = await page.evaluate(() => window.scrollY);
    await trigger(page, first).click();
    const dialog = dialogOf(page);
    await dialog.getByRole('button', { name: 'Vergrößern', exact: true }).click();
    // Das Scrollen im Dialog bewegt die Seite dahinter nicht.
    await dialog.locator('.chart-focus-text').hover();
    await page.mouse.wheel(0, 800);
    await dialog.getByRole('button', { name: /Schließen/ }).click();
    await expect(dialog).toHaveCount(0);
    expect(Math.abs((await page.evaluate(() => window.scrollY)) - scrollBefore)).toBeLessThanOrEqual(2);
    await expect(page.getByRole('heading', { name: first.step.title, level: 1 })).toBeVisible();
    expect(new URL(page.url()).hash).toBe(`#/lesson/${first.lesson.id}?step=${first.stepNumber}`);

    // Erneutes Öffnen beginnt mit der ganzen Ansicht.
    await trigger(page, first).click();
    expect(await viewBox(dialogOf(page))).toBe('0 0 760 330');
  });

  test('Maus: Mausrad zoomt am Zeiger, Ziehen verschiebt, Doppelklick wechselt @desktop', async ({ page }) => {
    await openCase(page, first);
    await trigger(page, first).click();
    const dialog = dialogOf(page);
    const viewport = dialog.locator('.chart-focus-viewport');
    const box = (await viewport.boundingBox())!;

    await page.mouse.move(box.x + box.width * 0.25, box.y + box.height * 0.5);
    await page.mouse.wheel(0, -600);
    await expect.poll(async () => (await viewBox(dialog)) !== '0 0 760 330').toBe(true);
    const [x] = (await viewBox(dialog))!.split(' ').map(Number);
    expect(x).toBeLessThan(190);

    const before = await viewBox(dialog);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width * 0.6, box.y + box.height * 0.5, { steps: 5 });
    await page.mouse.up();
    expect(await viewBox(dialog)).not.toBe(before);

    // Wheel bis zum Anschlag: nie über 400 %.
    for (let i = 0; i < 8; i += 1) await page.mouse.wheel(0, -600);
    await expect(dialog.getByRole('status')).toHaveText(/400 %/);

    await viewport.dblclick();
    expect(await viewBox(dialog)).toBe('0 0 760 330');
    await viewport.dblclick();
    await expect(dialog.getByRole('status')).toHaveText(/150 %/);
  });

  test('Touch: zwei Finger zoomen, ein Finger verschiebt @mobile', async ({ page }) => {
    await openCase(page, first);
    await trigger(page, first).click();
    const dialog = dialogOf(page);
    const viewport = dialog.locator('.chart-focus-viewport');
    const box = (await viewport.boundingBox())!;
    const cy = box.y + box.height / 2;

    // Echte Mehrfinger-Eingabe über das Chrome-DevTools-Protokoll.
    const cdp = await page.context().newCDPSession(page);
    const touch = (type: 'touchStart' | 'touchMove' | 'touchEnd', points: Array<[number, number]>) =>
      cdp.send('Input.dispatchTouchEvent', {
        type,
        touchPoints: points.map(([x, y], index) => ({ x, y, id: index + 1 })),
      });

    // Pinch: Finger auseinander.
    const left = box.x + box.width * 0.45;
    await touch('touchStart', [[left, cy], [box.x + box.width * 0.55, cy]]);
    for (let step = 1; step <= 6; step += 1) {
      await touch('touchMove', [[left, cy], [box.x + box.width * (0.55 + step * 0.06), cy]]);
    }
    await touch('touchEnd', []);
    await expect.poll(() => viewBox(dialog)).not.toBe('0 0 760 330');
    const zoomed = await viewBox(dialog);
    const level = Number((await dialog.getByRole('status').textContent())!.replace(/\D/g, ''));
    expect(level).toBeGreaterThan(100);
    expect(level).toBeLessThanOrEqual(400);

    // Ein Finger verschiebt.
    await touch('touchStart', [[box.x + box.width * 0.5, cy]]);
    for (let step = 1; step <= 4; step += 1) {
      await touch('touchMove', [[box.x + box.width * (0.5 - step * 0.05), cy]]);
    }
    await touch('touchEnd', []);
    await expect.poll(() => viewBox(dialog)).not.toBe(zoomed);

    await dialog.getByRole('button', { name: 'Zurücksetzen' }).click();
    expect(await viewBox(dialog)).toBe('0 0 760 330');
    await dialog.getByRole('button', { name: /Schließen/ }).click();
    await expect(trigger(page, first)).toBeFocused();
  });

  test('reduzierte Bewegung: keine Animation im Dialog', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await openCase(page, first);
    await trigger(page, first).click();
    const running = await page.evaluate(() =>
      document.getAnimations().filter((animation) => animation.playState === 'running').length,
    );
    expect(running).toBe(0);
  });
});
