import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { barAlbum } from '../content/barAlbum';
import { brooksTrendsCourse } from '../content/course';
import { glossaryEntries } from '../content/glossary';
import { albumOverview } from './barAlbum';
import { completeLesson, createEmptyProgress } from './progress';

const course = toCourseOutline(brooksTrendsCourse);
const lessons = new Map(brooksTrendsCourse.units.flatMap((unit) => unit.lessons).map((lesson) => [lesson.id, lesson]));

describe('Bar-Album (Stufe 3)', () => {
  it('jede Karte hat einen Glossarbegriff, eine veröffentlichte Lektion und gültige Bars', () => {
    const terms = new Set(glossaryEntries.map((entry) => entry.term));
    expect(new Set(barAlbum.map((entry) => entry.id)).size).toBe(barAlbum.length);
    for (const entry of barAlbum) {
      expect(terms.has(entry.term), entry.id).toBe(true);
      expect(lessons.get(entry.lessonId)?.status, entry.id).toBe('published');
      expect(entry.bars.length, entry.id).toBeGreaterThanOrEqual(2);
      expect(entry.focus, entry.id).toBeLessThan(entry.bars.length);
      expect(entry.look.length, entry.id).toBeGreaterThan(20);
      for (const [open, high, low, close] of entry.bars) {
        expect(high, entry.id).toBeGreaterThanOrEqual(Math.max(open, close));
        expect(low, entry.id).toBeLessThanOrEqual(Math.min(open, close));
      }
    }
  });

  it('die beschriebenen Formen stehen wirklich in den Werten', () => {
    const byId = new Map(barAlbum.map((entry) => [entry.id, entry]));
    const b = (id: string) => byId.get(id)!.bars;
    const [prevInside, inside] = b('album.inside-bar');
    expect(inside[1]).toBeLessThanOrEqual(prevInside[1]);
    expect(inside[2]).toBeGreaterThanOrEqual(prevInside[2]);
    const [prevOut, outside] = b('album.outside-bar');
    expect(outside[1]).toBeGreaterThan(prevOut[1]);
    expect(outside[2]).toBeLessThan(prevOut[2]);
    const ioi = b('album.ioi');
    expect(ioi[1][1]).toBeLessThanOrEqual(ioi[0][1]);
    expect(ioi[2][1]).toBeGreaterThan(ioi[1][1]);
    expect(ioi[2][2]).toBeLessThan(ioi[1][2]);
    expect(ioi[3][1]).toBeLessThanOrEqual(ioi[2][1]);
    const iii = b('album.ii-iii');
    for (let i = 1; i < iii.length; i += 1) {
      expect(iii[i][1]).toBeLessThanOrEqual(iii[i - 1][1]);
      expect(iii[i][2]).toBeGreaterThanOrEqual(iii[i - 1][2]);
    }
    const doji = b('album.doji')[2];
    expect(Math.abs(doji[3] - doji[0])).toBeLessThan((doji[1] - doji[2]) * 0.2);
  });

  it('neuer Stand: alle Karten gesperrt; Abschluss der Lektion schaltet genau diese Karte frei', () => {
    const fresh = albumOverview(course, createEmptyProgress());
    expect(fresh.cards).toHaveLength(barAlbum.length);
    expect(fresh.unlocked).toBe(0);
    const target = barAlbum[1];
    const lesson = lessons.get(target.lessonId)!;
    const after = albumOverview(course, completeLesson(createEmptyProgress(), lesson.id, lesson.xp, '2026-09-20T08:00:00.000Z'));
    expect(after.unlocked).toBe(barAlbum.filter((entry) => entry.lessonId === target.lessonId).length);
    expect(after.cards.find((card) => card.entry.id === target.id)!.unlocked).toBe(true);
  });

  it('Beschreibung ist die Glossar-Definition, nicht neuer Text', () => {
    const overview = albumOverview(course, createEmptyProgress());
    for (const card of overview.cards) {
      expect(glossaryEntries.find((entry) => entry.term === card.entry.term)!.definition).toBe(card.definition);
    }
  });
});
