import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { brooksTrendsCourse } from '../src/content/course';

/*
 * Stufe 1 „spielerischer“: Bulle Bo als Dekoration, Sprechblase auf „Heute“,
 * Rückmeldung mit Figur. Barrierefreiheit, 360 px und reduzierte Bewegung bleiben.
 */

const MOODS = ['happy', 'think', 'cheer', 'calm'];
const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const lesson = brooksTrendsCourse.units[0].lessons.find((item) => item.status === 'published' && item.steps.some((step) => step.type === 'question'))!;
const question = lesson.steps.find((step) => step.type === 'question')! as Extract<(typeof lesson.steps)[number], { type: 'question' }>;
const wrong = question.options.find((option) => option.id !== question.correctOptionId)!;
const right = question.options.find((option) => option.id === question.correctOptionId)!;

async function seed(page: Page, ids: string[] = []) {
  await page.addInitScript((completed) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem(
      'wqt-academy-progress-v1',
      JSON.stringify({ version: 14, completedLessonIds: completed, answers: {}, guideSeenAt: '2026-09-29T08:00:00.000Z' }),
    );
  }, ids);
}

const axe = async (page: Page, include?: string) => {
  const builder = new AxeBuilder({ page }).withTags(AXE_TAGS);
  if (include) builder.include(include);
  expect((await builder.analyze()).violations.map((violation) => violation.id)).toEqual([]);
};

async function openQuestion(page: Page) {
  await page.goto(`/#/lesson/${lesson.id}`);
  for (let i = 0; i < 12 && (await page.getByRole('radio').count()) === 0; i += 1) {
    await page.getByRole('button', { name: 'Weiter', exact: true }).click();
  }
}

test.describe('Bulle Bo', () => {
  test('alle Bilder sind vorhanden und laden', async ({ page }) => {
    await page.goto('/');
    for (const mood of MOODS) {
      const status = await page.evaluate(async (name) => (await fetch(`./mascot/bull-${name}.svg`)).status, mood);
      expect(status, mood).toBe(200);
    }
  });

  test('„Heute“: Sprechblase mit Bulle, Bild ist Dekoration, kein Überlauf, axe ohne Befund', async ({ page }) => {
    await seed(page);
    await page.goto('/#/');
    const bubble = page.locator('.today-primary .bull-bubble');
    await expect(bubble).toBeVisible();
    expect((await bubble.textContent())!.length).toBeGreaterThan(10);
    const image = page.locator('.today-primary img.bull');
    await expect(image).toHaveAttribute('alt', '');
    expect(await image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
    await expect(page.getByRole('img', { name: /Bulle|Bo/ })).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
    await axe(page);
  });

  test('Lektionsfrage: falsche Antwort → nachdenklicher, richtige → jubelnder Bulle; Text bleibt', async ({ page }) => {
    await seed(page);
    await openQuestion(page);
    await page.getByRole('radio', { name: new RegExp(wrong.label.slice(0, 20)) }).click();
    const feedback = page.locator('.answer-feedback.incorrect.with-bull');
    await expect(feedback).toBeVisible();
    await expect(feedback.locator('img.bull')).toHaveAttribute('data-mood', 'think');
    await expect(feedback.getByText('Noch nicht ganz.')).toBeVisible();
    await axe(page, '.answer-feedback');
    await feedback.getByRole('button', { name: 'Noch einmal versuchen' }).click();
    await page.getByRole('radio', { name: new RegExp(right.label.slice(0, 20)) }).click();
    const good = page.locator('.answer-feedback.correct.with-bull');
    await expect(good.locator('img.bull')).toHaveAttribute('data-mood', 'cheer');
    await axe(page);
  });

  test('Reduzierte Bewegung schaltet die Animation des Bullen ab', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await seed(page);
    await page.goto('/#/');
    const image = page.locator('.today-primary img.bull');
    await expect(image).toBeVisible();
    expect(await image.evaluate((el) => getComputedStyle(el).animationName)).toBe('none');
  });

  test('ohne Präferenz „Bewegung reduzieren“ hüpft der Bulle einmal ein', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await seed(page);
    await page.goto('/#/');
    const image = page.locator('.today-primary img.bull');
    await expect(image).toBeVisible();
    expect(await image.evaluate((el) => getComputedStyle(el).animationName)).toBe('bull-hop');
  });
});
