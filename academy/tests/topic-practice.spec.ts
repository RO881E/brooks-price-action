import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { brooksTrendsCourse } from '../src/content/course';
import { brooksTopics } from '../src/content/topicMap';
import { ACADEMY_PROGRESS_VERSION } from '../src/features/progress';

/*
 * F-27: Nach Brooks-Thema üben. Nutzt nur die Themenkarte (C-03) und die vorhandene
 * Wiederholung; gesperrte Inhalte werden nie angeboten.
 */

const published = (through?: string) =>
  brooksTrendsCourse.units
    .slice(0, through ? brooksTrendsCourse.units.findIndex((unit) => unit.id === through) + 1 : undefined)
    .flatMap((unit) => unit.lessons)
    .filter((lesson) => lesson.status === 'published');
const lessonOf = new Map(brooksTrendsCourse.units.flatMap((unit) => unit.lessons.map((lesson) => [lesson.id, lesson] as const)));
const questions = new Map(
  brooksTrendsCourse.units.flatMap((unit) =>
    unit.lessons.flatMap((lesson) =>
      lesson.steps.flatMap((step) => (step.type === 'question' ? [[step.id, { step, lesson }] as const] : [])),
    ),
  ),
);
const reversal = brooksTopics.find((topic) => topic.id === 'brooks-topic.reversal-in-context')!;
const chartViews = brooksTopics.find((topic) => topic.id === 'brooks-topic.chart-views')!;

async function seed(page: Page, ids: string[]) {
  await page.addInitScript(
    ({ completed, version }) => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem(
        'wqt-academy-progress-v1',
        JSON.stringify({ version, completedLessonIds: completed, answers: {}, guideSeenAt: '2026-09-29T08:00:00.000Z' }),
      );
    },
    { completed: ids, version: ACADEMY_PROGRESS_VERSION },
  );
}

const section = (page: Page) => page.getByRole('region', { name: 'Nach Thema üben' });
const card = (page: Page, title: string) => section(page).getByRole('article', { name: title });
const stored = (page: Page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? '{}'));

test.describe('F-27 Nach Thema üben', () => {
  test('neuer Stand: erklärter Leerzustand mit Lernlink, keine Runde aus gesperrtem Inhalt', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await seed(page, []);
    await page.goto('/#/practice');
    await expect(section(page).getByRole('article')).toHaveCount(brooksTopics.length);
    await expect(section(page).getByRole('button', { name: /Runde starten/ })).toHaveCount(0);
    const views = card(page, chartViews.title);
    await expect(views.getByText('0 Fragen bereit')).toBeVisible();
    await expect(views.getByText(/noch gesperrt/).first()).toBeVisible();
    await expect(views.getByRole('button', { name: /Weiter im Lernpfad:/ })).toBeVisible();
    // Ein Klick auf den Lernlink öffnet die nächste freigeschaltete Lektion, nicht die gesperrte.
    await views.getByRole('button', { name: /Weiter im Lernpfad:/ }).click();
    await expect(page).toHaveURL(new RegExp(`#/lesson/${published()[0].id}`));
    expect(errors).toEqual([]);
  });

  test('Runde: Thema, Erstversuch, Nachlesen mit Fundstelle, Reload, keine neuen Fragen', async ({ page }) => {
    await seed(page, published('brooks-trends.chapter-05').map((lesson) => lesson.id));
    await page.goto('/#/practice');
    const topic = card(page, reversal.title);
    await expect(topic.getByText(/\d+ Fragen bereit \(\d+ fällig\)/)).toBeVisible();
    await topic.getByRole('button', { name: /Runde starten \(10 Fragen\)/ }).click();
    await expect(page.getByText(`Thema: ${reversal.title}`).first()).toBeVisible();
    const session = (await stored(page)).reviewSession;
    expect(session.topicId).toBe(reversal.id);
    expect(session.questionIds).toHaveLength(10);
    expect(new Set(session.questionIds).size).toBe(10);
    for (const id of session.questionIds) expect(reversal.questionIds).toContain(id);

    // Reload mitten in der Runde: dieselbe Runde, dasselbe Thema.
    await page.reload();
    await expect(page.getByText(`Thema: ${reversal.title}`).first()).toBeVisible();

    // Erste Frage bewusst falsch, den Rest richtig beantworten.
    for (const [index, id] of (session.questionIds as string[]).entries()) {
      const { step } = questions.get(id)!;
      const correct = index !== 0;
      const option = step.options.find((candidate) => (candidate.id === step.correctOptionId) === correct)!;
      await page.getByRole('radio', { name: new RegExp(option.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').slice(0, 40)) }).first().click();
      await page.getByRole('button', { name: index === 9 ? 'Auswertung anzeigen' : 'Nächste Frage' }).click();
    }
    await expect(page.getByText(`Runde abgeschlossen · Thema: ${reversal.title}`)).toBeVisible();
    await expect(page.getByRole('heading', { name: '9 von 10 richtig' })).toBeVisible();
    const sources = page.getByRole('region', { name: 'Nachlesen' });
    const first = questions.get(session.questionIds[0])!;
    const ref = reversal.teaching.find((entry) => entry.lessonId === first.lesson.id)!;
    await expect(sources.getByText(first.step.title)).toBeVisible();
    await expect(sources.getByText(new RegExp(ref.anchor.slice(0, 30)))).toBeVisible();
    await sources.getByRole('button', { name: `Lektion öffnen: ${first.lesson.title}` }).click();
    await expect(page).toHaveURL(new RegExp(`#/lesson/${first.lesson.id}`));

    // Kein zweites System: nur die beantworteten Fragen haben Wiederholungskarten.
    const after = await stored(page);
    expect(Object.keys(after.reviewCards).sort()).toEqual([...session.questionIds].sort());
    expect(after.reviewCards[session.questionIds[0]].lastResult).toBe('wrong');
    for (const id of Object.keys(after.reviewCards)) expect(questions.has(id)).toBe(true);
    expect(after.completedLessonIds).toHaveLength(published('brooks-trends.chapter-05').length);
  });

  test('freigeschaltete Fälle erscheinen, gesperrte nur als Zahl', async ({ page }) => {
    await seed(page, published('brooks-trends.chapter-01').map((lesson) => lesson.id));
    await page.goto('/#/practice');
    const breakout = card(page, 'Ausbruch, Follow-through und Test');
    await expect(breakout.getByRole('button', { name: 'Fall: Eine überlappende Spanne' })).toBeVisible();
    await expect(breakout.locator('.topic-facts')).toContainText(/\+ \d+ noch gesperrt\)/);
    await expect(breakout.getByRole('button', { name: /Fall: Eine enge Zone/ })).toHaveCount(0);
    await breakout.getByRole('button', { name: 'Fall: Eine überlappende Spanne' }).click();
    await expect(page).toHaveURL(/#\/train\/bar-case\.chapter-01\.range-high-test/);
  });

  test('Lehrstellen zeigen den Zugang und öffnen nur freigeschaltete Lektionen', async ({ page }) => {
    await seed(page, published('brooks-trends.chapter-01').map((lesson) => lesson.id));
    await page.goto('/#/practice');
    const topic = card(page, reversal.title);
    await topic.locator('summary').click();
    await expect(topic.getByText('(noch gesperrt)').first()).toBeVisible();
    const locked = reversal.teaching.map((ref) => lessonOf.get(ref.lessonId)!).find((lesson) => lesson.id.includes('chapter-05.lesson-01'))!;
    await expect(topic.getByRole('button', { name: `Lektion öffnen: ${locked.title}` })).toHaveCount(0);
  });

  test('Tastatur, 360 px ohne Überlauf und keine Axe-Verstöße', async ({ page }) => {
    await seed(page, published('brooks-trends.chapter-05').map((lesson) => lesson.id));
    await page.goto('/#/practice');
    const start = card(page, reversal.title).getByRole('button', { name: /Runde starten/ });
    await start.focus();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
    await page.keyboard.press('Enter');
    await expect(page.getByText(`Thema: ${reversal.title}`).first()).toBeVisible();
  });
});
