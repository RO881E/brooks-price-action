import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { brooksTrendsCourse } from './course';

const outline = toCourseOutline(brooksTrendsCourse);

describe('toCourseOutline', () => {
  it('behält Einheiten, Lektionen und Schritte in Buchreihenfolge mit denselben IDs', () => {
    expect(outline.units.map((unit) => unit.id)).toEqual(brooksTrendsCourse.units.map((unit) => unit.id));
    const ids = (course: typeof outline | typeof brooksTrendsCourse) =>
      course.units.flatMap((unit) =>
        unit.lessons.map((lesson) => [lesson.id, lesson.steps.map((step) => `${step.type}:${step.id}`)]),
      );
    expect(ids(outline)).toEqual(ids(brooksTrendsCourse));
  });

  it('übernimmt Metadaten für Pfad, Freischaltung, XP und Suche unverändert', () => {
    const full = brooksTrendsCourse.units[2].lessons[0];
    const short = outline.units[2].lessons[0];
    for (const key of ['title', 'summary', 'durationMinutes', 'xp', 'sourceUnit', 'sourceAnchors', 'status'] as const) {
      expect(short[key]).toEqual(full[key]);
    }
    expect(outline.units[2]).toMatchObject({
      label: brooksTrendsCourse.units[2].label,
      estimatedLessonCount: brooksTrendsCourse.units[2].estimatedLessonCount,
    });
  });

  it('enthält je Schritt nur Titel und bei Fragen die richtige Antwort-ID – keine Lehrtexte', () => {
    for (const step of outline.units.flatMap((unit) => unit.lessons.flatMap((lesson) => lesson.steps))) {
      const keys = Object.keys(step).sort();
      expect(keys).toEqual(
        step.type === 'question' ? ['correctOptionId', 'id', 'title', 'type'] : ['id', 'title', 'type'],
      );
    }
    const json = JSON.stringify(outline);
    const paragraph = brooksTrendsCourse.units[0].lessons[0].steps.find((step) => step.type === 'explanation');
    expect(paragraph && 'paragraphs' in paragraph).toBe(true);
    if (paragraph && paragraph.type === 'explanation') expect(json).not.toContain(paragraph.paragraphs[0]);
  });

  it('bleibt deutlich kleiner als der vollständige Kurs', () => {
    expect(JSON.stringify(outline).length).toBeLessThan(JSON.stringify(brooksTrendsCourse).length / 3);
  });
});
