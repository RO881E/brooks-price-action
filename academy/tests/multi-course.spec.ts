import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { priceActionTrendsCourse } from '../src/content/course';
import { testCourseLessons } from '../src/content/courses/test-course/lessons';

/*
 * Mehrere Kurse parallel: Kurs starten und wechseln, eigener Lernpfad und Fortschritt je Kurs,
 * XP und Lerntage gemeinsam. Geprüft mit dem kleinen Testkurs, den es nur im Modus `e2e` gibt.
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const paFirst = priceActionTrendsCourse.units.flatMap((unit) => unit.lessons).find((lesson) => lesson.status === 'published')!;
const [testOne, testTwo] = testCourseLessons;

/** Price Action mit einer abgeschlossenen Lektion (heute), Einführung schon gesehen. */
const paStarted = {
  version: 16,
  completedLessonIds: [paFirst.id],
  answers: {},
  lessonResults: {
    [paFirst.id]: {
      firstCompletedAt: '2026-10-01T08:00:00.000Z',
      lastCompletedAt: '2026-10-01T08:00:00.000Z',
      xpAwarded: paFirst.xp,
    },
  },
  activityDays: ['2026-10-01'],
  dailyActivity: { '2026-10-01': { lessons: 1, reviewSessions: 0, xp: paFirst.xp } },
  guideSeenAt: '2026-10-01T07:00:00.000Z',
  activeCourseId: null,
};

async function seed(page: Page, record: Record<string, unknown>) {
  await page.addInitScript((value) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(value));
  }, record);
}

const stored = (page: Page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem('wqt-academy-progress-v1') ?? 'null') as Record<string, unknown>);

const notice = (page: Page) => page.locator('.route-notice');

/** Erklärung → Frage → Zusammenfassung, wie jede Lektion des Testkurses aufgebaut ist. */
async function completeTestLesson(page: Page, answer: string) {
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByRole('radio', { name: answer }).click();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByRole('button', { name: 'Lektion abschließen' }).click();
  await expect(page.getByText('Lektion abgeschlossen')).toBeVisible();
}

test.describe('Mehrere Kurse', () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date(2026, 9, 1, 10, 0));
  });

  test('Kurs starten: eigener Lernpfad und Fortschritt, gemeinsame XP – bleibt nach Neuladen und Zurückwechseln', async ({
    page,
    isMobile,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await seed(page, paStarted);

    await page.goto('/#/course/test-course');
    await expect(page.getByRole('heading', { level: 1, name: 'Testkurs: Grundgerüst' })).toBeVisible();
    await expect(page.locator('.library-start')).toContainText('Verfügbar');
    await expect(page.locator('.library-start')).toContainText('Noch nicht begonnen · 2 Lektionen');
    await page.getByRole('button', { name: 'Kurs starten' }).click();

    await expect(page).toHaveURL(/#\/path$/);
    await expect(notice(page)).toContainText('Du lernst jetzt „Testkurs: Grundgerüst“');
    await expect(page.getByRole('heading', { level: 1, name: 'Testkurs: Grundgerüst' })).toBeVisible();
    await expect(page.locator('.course-meta-row')).toContainText('1 Kursabschnitt');
    await expect(page.locator('.course-meta-row')).toContainText('2 Lektionen');
    await expect(page.locator('.progress-orb')).toContainText('0%');
    await expect(page.getByRole('button', { name: `${testTwo.title}: Noch gesperrt` })).toBeVisible();
    if (!isMobile) await expect(page.locator('.sidebar-course strong')).toHaveText('Testkurs: Grundgerüst');
    expect((await stored(page)).activeCourseId).toBe('test-course');

    await page.getByRole('button', { name: `${testOne.title}: Jetzt lernen` }).click();
    await completeTestLesson(page, 'Jeder Kurs hat seinen eigenen Fortschritt.');
    await page.getByRole('button', { name: 'Zurück zum Lernpfad' }).click();
    await expect(page.getByRole('button', { name: `${testOne.title}: Abgeschlossen` })).toBeVisible();
    await expect(page.getByRole('button', { name: `${testTwo.title}: Jetzt lernen` })).toBeVisible();
    await expect(page.locator('.progress-orb')).toContainText('50%');
    // XP zählen über alle Kurse gemeinsam.
    if (!isMobile) await expect(page.locator('.stat-card')).toContainText(String(paFirst.xp + testOne.xp));

    // Fortschritt: Lektionen dieses Kurses, XP und Lerntage gemeinsam, keine Trainerfälle.
    await page.goto('/#/progress');
    const summary = page.locator('.summary-panel');
    await expect(summary).toContainText('1 von 2');
    await expect(summary).toContainText(`${paFirst.xp + testOne.xp} XP insgesamt`);
    await expect(summary).not.toContainText('Trainerfällen');
    await expect(page.getByRole('heading', { name: 'Bar-Album' })).toHaveCount(0);

    // Die Wahl übersteht ein Neuladen.
    await page.reload();
    await expect(page.locator('.summary-panel')).toContainText('1 von 2');

    // Zurück zu Price Action: Dort ist alles wie vorher.
    await page.goto('/#/course/price-action-trends');
    await expect(page.locator('.library-start')).toContainText('Verfügbar');
    await page.getByRole('button', { name: 'Zu diesem Kurs wechseln' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'Price Action: Trends' })).toBeVisible();
    await expect(notice(page)).toContainText('Du lernst jetzt „Price Action: Trends“');
    await expect(page.getByRole('button', { name: `${paFirst.title}: Abgeschlossen` })).toBeVisible();
    expect((await stored(page)).activeCourseId).toBe('price-action-trends');

    await page.goto('/#/library');
    const mine = page.locator('.library-mine > li');
    await expect(mine.first()).toContainText('Aktiver Kurs');
    await expect(mine.nth(1)).toContainText('50 % geschafft · 1 von 2 Lektionen');
    expect(errors).toEqual([]);
  });

  test('Üben, Glossar und Gespeichertes zeigen nur den gewählten Kurs', async ({ page }) => {
    await seed(page, {
      ...paStarted,
      completedLessonIds: [paFirst.id, testOne.id],
      bookmarks: {
        [paFirst.id]: { lessonId: paFirst.id, stepId: null, createdAt: '2026-10-01T08:10:00.000Z' },
        [testOne.id]: { lessonId: testOne.id, stepId: null, createdAt: '2026-10-01T08:20:00.000Z' },
      },
      activeCourseId: 'test-course',
    });

    await page.goto('/#/practice');
    await expect(page.getByRole('heading', { level: 1, name: 'Analyse-Training' })).toBeVisible();
    // Fragen aus dem Testkurs lassen sich wiederholen …
    await expect(page.getByText('Dein Training füllt sich mit dem Lernpfad')).toHaveCount(0);
    // … Price-Action-Bereiche gibt es hier nicht.
    for (const name of ['Nach Thema üben', 'Chart trainieren', 'Zwei Fälle vergleichen', 'Transferprüfung', 'Begriffe-Memory']) {
      await expect(page.getByRole('heading', { name, exact: true })).toHaveCount(0);
    }

    await page.goto('/#/glossary');
    await expect(page.getByRole('heading', { level: 1, name: 'Glossar' })).toBeVisible();
    await expect(page.getByText('Noch keine Begriffe')).toBeVisible();

    await page.goto('/#/saved');
    await expect(page.getByText(testOne.title).first()).toBeVisible();
    await expect(page.getByText(paFirst.title)).toHaveCount(0);

    const results = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
    expect(results.violations.map((v) => v.id)).toEqual([]);
  });

  test('Lektionen anderer Kurse bleiben per Link erreichbar – geprüft in ihrem eigenen Kurs', async ({ page }) => {
    await seed(page, paStarted);
    await page.goto(`/#/lesson/${testOne.id}`);
    await expect(page.getByRole('heading', { name: testOne.steps[0].title })).toBeVisible();
    // Die zweite Lektion des Testkurses ist dort noch gesperrt: zurück zum Lernpfad mit Hinweis.
    await page.goto(`/#/lesson/${testTwo.id}`);
    await expect(page.getByRole('heading', { level: 1, name: 'Price Action: Trends' })).toBeVisible();
    await expect(notice(page)).toContainText('führt zu keiner verfügbaren Ansicht');
  });

  test('ein Kurs ohne Inhalt in dieser Version: Standardkurs, gespeicherte Wahl bleibt', async ({ page }) => {
    await seed(page, { ...paStarted, activeCourseId: 'kurs-aus-spaeterer-version' });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1, name: 'Price Action: Trends' })).toBeVisible();
    expect((await stored(page)).activeCourseId).toBe('kurs-aus-spaeterer-version');
  });

  test('Wechsel beendet eine laufende Wiederholungsrunde des bisherigen Kurses', async ({ page }) => {
    await seed(page, {
      ...paStarted,
      reviewSession: {
        mode: 'mixed',
        unitId: null,
        questionIds: paFirst.steps.filter((step) => step.type === 'question').map((step) => step.id),
        index: 0,
        answers: {},
        startedDay: '2026-10-01',
        activityRecorded: false,
      },
    });
    await page.goto('/#/practice');
    await expect(page.getByRole('button', { name: 'Runde beenden' })).toBeVisible();
    await page.goto('/#/course/test-course');
    await page.getByRole('button', { name: 'Kurs starten' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'Testkurs: Grundgerüst' })).toBeVisible();
    expect((await stored(page)).reviewSession).toBeNull();
  });
});
