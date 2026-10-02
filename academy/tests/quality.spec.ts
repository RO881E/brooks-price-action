import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { barCases } from '../src/content/barCases';
import { priceActionTrendsCourse } from '../src/content/course';
import { ACADEMY_PROGRESS_VERSION } from '../src/features/progress';

/*
 * P12: Qualitätsrunde – Barrierefreiheit über alle Kernansichten, schmale Breiten,
 * 200-%-Zoom, reduzierte Bewegung, Tastatur und die Wiederherstellung defekter Daten.
 */

const published = priceActionTrendsCourse.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const [caseA, caseB] = barCases;
const [a1, a2] = caseA.decisions;

const record = {
  version: ACADEMY_PROGRESS_VERSION,
  completedLessonIds: published.map((lesson) => lesson.id),
  answers: {},
  guideSeenAt: '2026-09-01T08:00:00.000Z',
  bookmarks: {
    [`${published[3].id}::${published[3].steps[1].id}`]: { lessonId: published[3].id, stepId: published[3].steps[1].id, createdAt: '2026-09-28T10:00:00.000Z' },
  },
  notes: {
    [`${published[0].id}::${published[0].steps[0].id}`]: { lessonId: published[0].id, stepId: published[0].steps[0].id, text: 'Eine kurze Notiz', updatedAt: '2026-09-28T10:00:00.000Z' },
  },
  caseRuns: {
    [caseA.id]: [
      {
        sessionId: 'run-1',
        completedAt: '2026-09-28T10:00:00.000Z',
        best: 1,
        defensible: 1,
        mistake: 0,
        missedCues: 0,
        answers: {
          [a1.id]: { decision: 'long', cueIds: [a1.cues[0].id] },
          [a2.id]: { decision: 'wait', cueIds: [a2.cues[0].id] },
        },
      },
    ],
    [caseB.id]: [{ sessionId: 'run-b', completedAt: '2026-09-28T11:00:00.000Z', best: 1, defensible: 0, mistake: 0, missedCues: 0 }],
  },
};

async function seed(page: Page, value: Record<string, unknown> = record) {
  await page.addInitScript((data) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem('wqt-academy-progress-v1', JSON.stringify(data));
  }, value);
}

/** Gibt die noch nicht freigegebenen Transferfälle nur für diesen Test frei (Dev-Server-Umschreibung). */
async function approveTransfer(page: Page) {
  await page.route('**/src/content/barCases/c02.ts*', async (route) => {
    const response = await route.fetch();
    await route.fulfill({ response, body: (await response.text()).replace(/status:\s*["']draft["']/g, 'status: "approved"') });
  });
}

const VIEWS: Array<[string, string]> = [
  ['Lernpfad', '/#/'],
  ['Üben', '/#/practice'],
  ['Kurzlernen', '/#/study/20'],
  ['Trainer', `/#/train/${caseA.id}`],
  ['Rückblick', `/#/train/${caseA.id}/review/run-1`],
  ['Transferprüfung', '/#/transfer'],
  ['Fortschritt', '/#/progress'],
  ['Gespeichert', '/#/saved'],
  ['Glossar', '/#/glossary'],
  ['Bibliothek', '/#/library'],
  ['Themengebiet', '/#/library/volume'],
  ['Kursseite', '/#/course/price-action-trends'],
  ['Einstellungen', '/#/settings'],
];

const overflow = (page: Page) => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

test.describe('P12 Barrierefreiheit und Mobilgeräte', () => {
  test('alle Kernansichten: axe ohne Befund und kein Überlauf bei 360 px', async ({ page }) => {
    test.setTimeout(180_000);
    await approveTransfer(page);
    await seed(page);
    await page.setViewportSize({ width: 360, height: 740 });
    for (const [name, hash] of VIEWS) {
      await page.goto(hash);
      await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
      expect(await overflow(page), `${name}: Überlauf`).toBeLessThanOrEqual(0);
      const axe = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(axe.violations.map((violation) => `${name}: ${violation.id}`)).toEqual([]);
    }
  });

  test('200-%-Zoom (schmales Fenster): kein Überlauf, keine abgeschnittene Überschrift', async ({ page }) => {
    test.setTimeout(180_000);
    await approveTransfer(page);
    await seed(page);
    await page.setViewportSize({ width: 640, height: 800 });
    for (const [name, hash] of VIEWS) {
      await page.goto(hash);
      const heading = page.getByRole('heading', { level: 1 }).first();
      await expect(heading).toBeVisible();
      expect(await overflow(page), `${name}: Überlauf`).toBeLessThanOrEqual(0);
      expect(await heading.evaluate((el) => el.scrollWidth > el.clientWidth + 1), `${name}: Überschrift`).toBe(false);
    }
  });

  test('reduzierte Bewegung: keine laufenden Animationen in den Kernansichten', async ({ page }) => {
    test.setTimeout(180_000);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await approveTransfer(page);
    await seed(page);
    for (const [name, hash] of VIEWS) {
      await page.goto(hash);
      await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
      const running = await page.evaluate(() =>
        document
          .getAnimations()
          .filter((animation) => animation.playState === 'running' && (animation.effect?.getComputedTiming().duration as number) > 50)
          .map((animation) => animation.id || (animation as unknown as { animationName?: string }).animationName || 'animation'),
      );
      expect(running, `${name}: laufende Animationen`).toEqual([]);
    }
  });

  test('Tastatur: der Fokus wandert ohne Falle durch die App, ist sichtbar und Escape schließt die Suche', async ({ page }) => {
    await seed(page);
    await page.goto('/#/practice');
    await expect(page.getByRole('heading', { name: 'Analyse-Training' })).toBeVisible();
    const seen = new Set<string>();
    for (let index = 0; index < 40; index += 1) {
      await page.keyboard.press('Tab');
      const info = await page.evaluate(() => {
        const el = document.activeElement as HTMLElement | null;
        if (!el || el === document.body) return null;
        const style = getComputedStyle(el);
        const visible = style.outlineStyle !== 'none' || style.boxShadow !== 'none';
        return { key: `${el.tagName}:${(el.getAttribute('aria-label') || el.textContent || '').trim().slice(0, 40)}:${el.id}`, visible };
      });
      if (info) {
        expect(info.visible, `Fokus unsichtbar bei ${info.key}`).toBe(true);
        seen.add(info.key);
      }
    }
    // Es wurde nicht nur ein Element angesteuert – keine Tastaturfalle.
    expect(seen.size).toBeGreaterThan(15);
    await page.keyboard.press('/');
    await expect(page.getByRole('dialog', { name: 'Suche' })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog', { name: 'Suche' })).toHaveCount(0);
  });

  test('Touch-Ziele: kein bedienbares Element unter 24 px in den Kernansichten (WCAG 2.2)', async ({ page }) => {
    test.setTimeout(180_000);
    await approveTransfer(page);
    await seed(page);
    await page.setViewportSize({ width: 360, height: 740 });
    for (const [name, hash] of VIEWS) {
      await page.goto(hash);
      await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
      const small = await page.evaluate(() =>
        [...document.querySelectorAll<HTMLElement>('button, [role="button"], input:not([type="hidden"]), select, textarea, summary')]
          .filter((el) => {
            const box = el.getBoundingClientRect();
            const style = getComputedStyle(el);
            return (
              box.width > 0 &&
              box.height > 0 &&
              style.visibility !== 'hidden' &&
              el.checkVisibility({ checkVisibilityCSS: true }) &&
              (box.height < 24 || box.width < 24)
            );
          })
          // Beschriftete Kontrollkästchen und Radios: die Beschriftung ist das Ziel.
          .filter((el) => !(el instanceof HTMLInputElement && el.labels && el.labels.length > 0))
          .map((el) => `${el.tagName}:${(el.getAttribute('aria-label') || el.textContent || '').trim().slice(0, 30)}`),
      );
      expect(small, `${name}: zu kleine Ziele`).toEqual([]);
    }
  });
});

test.describe('P12 Wiederherstellung defekter Daten', () => {
  test('unlesbare Daten: Hinweis, Kopie herunterladbar, bewusste Löschung, App bleibt nutzbar', async ({ page }) => {
    await page.addInitScript(() => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem('wqt-academy-progress-v1', '{kaputt: nicht lesbar');
    });
    await page.goto('/');
    const notice = page.getByRole('alert').filter({ hasText: 'Gespeicherte Lerndaten waren nicht lesbar' });
    await expect(notice).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Price Action: Trends' })).toBeVisible();
    const [file] = await Promise.all([page.waitForEvent('download'), notice.getByRole('button', { name: 'Kopie herunterladen' }).click()]);
    expect(file.suggestedFilename()).toBe('wqt-academy-gerettete-daten.txt');
    expect(readFileSync((await file.path())!, 'utf8')).toBe('{kaputt: nicht lesbar');
    // Ausblenden löscht nichts; nach einem Neuladen ist der Hinweis wieder da.
    await notice.getByRole('button', { name: 'Ausblenden' }).click();
    await expect(notice).toHaveCount(0);
    expect(await page.evaluate(() => localStorage.getItem('wqt-academy-progress-backup'))).toBe('{kaputt: nicht lesbar');
    await page.reload();
    await expect(page.getByRole('alert').filter({ hasText: 'nicht lesbar' })).toBeVisible();
    // Bewusstes Löschen entfernt die Kopie.
    await page.getByRole('button', { name: 'Kopie löschen' }).click();
    await expect(page.getByRole('alert').filter({ hasText: 'nicht lesbar' })).toHaveCount(0);
    expect(await page.evaluate(() => localStorage.getItem('wqt-academy-progress-backup'))).toBeNull();
    await page.reload();
    await expect(page.getByRole('alert').filter({ hasText: 'nicht lesbar' })).toHaveCount(0);
    const welcome = page.getByRole('region', { name: 'So lernst du in der WQT Academy' });
    if (await welcome.isVisible()) await welcome.getByRole('button', { name: 'Einführung schließen' }).click();
    await expect(page.getByRole('heading', { name: 'Price Action: Trends' })).toBeVisible();
  });

  test('Barrierefreiheit des Hinweises', async ({ page }) => {
    await page.addInitScript(() => {
      if (sessionStorage.getItem('seeded')) return;
      sessionStorage.setItem('seeded', '1');
      localStorage.setItem('wqt-academy-progress-v1', 'x');
    });
    await page.goto('/');
    await expect(page.getByRole('alert').filter({ hasText: 'nicht lesbar' })).toBeVisible();
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((violation) => violation.id)).toEqual([]);
    expect(await overflow(page)).toBeLessThanOrEqual(0);
  });
});
