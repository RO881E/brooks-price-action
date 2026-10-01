import { describe, expect, it, vi } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { catalog, courseOutline, LessonCatalog, publishedLessonIds, unitIdOfLesson } from './catalog';
import { priceActionTrendsCourse, publishedLessonIds as fullPublishedIds } from './course';
import type { Lesson } from './types';

const outline = toCourseOutline(priceActionTrendsCourse);
const [firstUnit, secondUnit] = priceActionTrendsCourse.units;

function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (error: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

describe('Kursgliederung aus dem Build-Plugin', () => {
  it('entspricht exakt der Gliederung der vollständigen Inhalte', () => {
    expect(courseOutline).toEqual(outline);
    expect(publishedLessonIds).toEqual(fullPublishedIds);
  });

  it('ordnet Lektionen ihrer Einheit zu und kennt unbekannte IDs nicht', () => {
    expect(unitIdOfLesson(firstUnit.lessons[0].id)).toBe(firstUnit.id);
    expect(unitIdOfLesson(secondUnit.lessons.at(-1)!.id)).toBe(secondUnit.id);
    expect(unitIdOfLesson('gibt-es-nicht')).toBeUndefined();
  });

  it('lädt echte Kapitel und liefert vollständige Lektionen', async () => {
    const lessonId = secondUnit.lessons[0].id;
    expect(catalog.lesson(lessonId)).toBeUndefined();
    await catalog.loadUnit(secondUnit.id);
    expect(catalog.unitStatus(secondUnit.id)).toBe('ready');
    expect(catalog.lesson(lessonId)).toEqual(secondUnit.lessons[0]);
  });
});

describe('LessonCatalog', () => {
  it('lädt eine Einheit nur einmal, auch bei parallelen Aufrufen', async () => {
    const load = vi.fn(async (unitId: string) =>
      priceActionTrendsCourse.units.find((unit) => unit.id === unitId)!.lessons,
    );
    const source = new LessonCatalog(outline, { load });
    const listener = vi.fn();
    source.subscribe(listener);

    expect(source.unitStatus(firstUnit.id)).toBe('idle');
    const a = source.loadUnit(firstUnit.id);
    const b = source.loadUnit(firstUnit.id);
    expect(source.unitStatus(firstUnit.id)).toBe('loading');
    await Promise.all([a, b]);
    await source.loadUnit(firstUnit.id);
    source.ensureUnits([firstUnit.id]);

    expect(load).toHaveBeenCalledTimes(1);
    expect(source.unitStatus(firstUnit.id)).toBe('ready');
    expect(listener).toHaveBeenCalled();
    expect(source.lesson(firstUnit.lessons[0].id)?.steps).toEqual(firstUnit.lessons[0].steps);
  });

  it('meldet Netz- oder Importfehler als Status, ohne andere Einheiten zu stören', async () => {
    const pending = deferred<Lesson[]>();
    const source = new LessonCatalog(outline, {
      load: (unitId) =>
        unitId === firstUnit.id ? pending.promise : Promise.resolve(secondUnit.lessons),
    });
    source.ensureUnits([firstUnit.id, secondUnit.id]);
    expect(source.combinedStatus([firstUnit.id, secondUnit.id])).toBe('loading');
    pending.reject(new TypeError('Failed to fetch dynamically imported module'));
    await vi.waitFor(() => expect(source.unitStatus(firstUnit.id)).toBe('error'));
    await vi.waitFor(() => expect(source.unitStatus(secondUnit.id)).toBe('ready'));
    expect(source.combinedStatus([firstUnit.id, secondUnit.id])).toBe('error');
    expect(source.combinedStatus([secondUnit.id])).toBe('ready');
    expect(source.combinedStatus([])).toBe('ready');
    expect(source.lesson(firstUnit.lessons[0].id)).toBeUndefined();
  });

  it('versucht es nach einem Fehler nur auf ausdrücklichen Wunsch erneut', async () => {
    const load = vi
      .fn<(unitId: string) => Promise<Lesson[]>>()
      .mockRejectedValueOnce(new Error('offline'))
      .mockResolvedValueOnce(firstUnit.lessons);
    const source = new LessonCatalog(outline, { load });
    await expect(source.loadUnit(firstUnit.id)).rejects.toThrow('offline');
    source.ensureUnits([firstUnit.id]);
    expect(load).toHaveBeenCalledTimes(1);
    await source.loadUnit(firstUnit.id);
    expect(source.unitStatus(firstUnit.id)).toBe('ready');
  });

  it('verwirft Inhalte, die nicht zur Gliederung passen', async () => {
    const changed = firstUnit.lessons.map((lesson, index) =>
      index === 0 ? { ...lesson, steps: lesson.steps.slice(1) } : lesson,
    );
    const source = new LessonCatalog(outline, { load: async () => changed });
    await expect(source.loadUnit(firstUnit.id)).rejects.toThrow('passt nicht zur Gliederung');
    expect(source.unitStatus(firstUnit.id)).toBe('error');
    expect(source.lesson(firstUnit.lessons[1].id)).toBeUndefined();
  });

  it('lehnt unbekannte Einheiten ab', async () => {
    const load = vi.fn();
    const source = new LessonCatalog(outline, { load });
    await expect(source.loadUnit('gibt-es-nicht')).rejects.toThrow('Unbekannte Einheit');
    expect(load).not.toHaveBeenCalled();
  });
});

describe('App-Code', () => {
  it('importiert nie die vollständigen Kurse – nur die Gliederungen und den Katalog', () => {
    // Quelltexte aller App-Module (ohne Tests); `course.ts` und `allCourses.ts` selbst ausgenommen.
    const files = import.meta.glob(
      ['../**/*.{ts,tsx}', '!../**/*.test.{ts,tsx}', '!./course.ts', '!./allCourses.ts'],
      { query: '?raw', import: 'default', eager: true },
    ) as Record<string, string>;
    expect(Object.keys(files).length).toBeGreaterThan(30);
    const offenders = Object.entries(files)
      .filter(([, source]) => /from ['"](\.{1,2}\/)+(content\/)?(course|allCourses)['"]/.test(source))
      .map(([file]) => file);
    expect(offenders).toEqual([]);
  });
});
