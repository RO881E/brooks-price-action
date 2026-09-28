import { describe, expect, it } from 'vitest';
import { glossaryEntries, type GlossaryEntry } from '../content/glossary';
import { brooksTrendsCourse } from '../content/course';
import type { Course, Lesson } from '../content/types';
import {
  buildSearchIndex,
  groupResults,
  queryTokens,
  search,
  searchForms,
} from './search';

function lesson(id: string, title: string, summary: string, steps: string[], status: Lesson['status'] = 'published'): Lesson {
  return {
    id,
    title,
    summary,
    durationMinutes: 3,
    xp: 10,
    sourceUnit: `Quelle ${id}`,
    sourceAnchors: [`Abbildung ${id}`],
    status,
    steps: steps.map((stepTitle, index) => ({
      id: `${id}-s${index}`,
      type: 'explanation',
      title: stepTitle,
      paragraphs: ['Text'],
    })),
  };
}

const first = lesson('l1', 'Übung macht den Meister', 'Wiederholung im Alltag', ['Warum Übung zählt', 'Der Schlusskurs']);
const second = lesson('l2', 'Doji verstehen', 'Unentschlossenheit im Bar', ['Ein Doji im Trend', 'Übungsfrage zum Doji']);
const third = lesson('l3', 'Später Doji', 'Noch gesperrt', ['Doji am Hoch']);
const planned = lesson('l4', 'Geplanter Doji', 'In Vorbereitung', ['Doji-Vorschau'], 'planned');

const course: Course = {
  id: 'c',
  eyebrow: '',
  title: '',
  subtitle: '',
  sourceOrderNotice: '',
  units: [
    {
      id: 'u1',
      order: 1,
      kind: 'chapter',
      label: 'Kapitel 1',
      title: 'Grundlagen',
      description: '',
      estimatedLessonCount: 4,
      lessons: [first, second, third, planned],
    },
  ],
};

const glossary: GlossaryEntry[] = [
  { term: 'Bar', aliases: ['Kerze', 'Candle'], definition: 'x', firstUnit: 'Einleitung' },
  { term: 'Doji', aliases: ['Unentschlossene Kerze'], definition: 'y', firstUnit: 'Kapitel 2' },
  { term: 'Größter Fehler', aliases: [], definition: 'z', firstUnit: 'Einleitung' },
];

const index = buildSearchIndex(course, glossary);

describe('normalisation', () => {
  it('produces base and expanded umlaut forms', () => {
    expect(searchForms('Übung – Größe!')).toEqual(['ubung grosse', 'uebung groesse']);
    expect(queryTokens('  ÜBUNG   Doji ')).toEqual(['ubung', 'doji']);
    expect(queryTokens('   ')).toEqual([]);
    expect(queryTokens('–?!')).toEqual([]);
  });
});

describe('search', () => {
  it('returns nothing for an empty query', () => {
    expect(search(index, '', [])).toEqual([]);
    expect(search(index, '   ', [])).toEqual([]);
  });

  it('matches umlauts, their spelled-out form and case-insensitively', () => {
    for (const query of ['Übung', 'übung', 'ubung', 'uebung', 'UEBUNG']) {
      const ids = search(index, query, []).map((result) => result.id);
      expect(ids, query).toContain('lesson:l1');
      expect(ids, query).toContain('step:l1:l1-s0');
    }
    expect(search(index, 'grösster', []).map((r) => r.id)).toContain('glossary:Größter Fehler');
    expect(search(index, 'groesster', []).map((r) => r.id)).toContain('glossary:Größter Fehler');
  });

  it('finds glossary terms by alias', () => {
    const [top] = search(index, 'Candle', []);
    expect(top).toMatchObject({ type: 'glossary', title: 'Bar', glossaryTerm: 'Bar', openable: true, access: null });
    expect(search(index, 'kerze', []).map((r) => r.title)).toEqual(['Bar', 'Doji']);
  });

  it('searches summary, source and step titles', () => {
    expect(search(index, 'Alltag', [])[0].id).toBe('lesson:l1');
    expect(search(index, 'Abbildung l2', [])[0].id).toBe('lesson:l2');
    expect(search(index, 'Schlusskurs', [])[0]).toMatchObject({
      type: 'step',
      stepIndex: 1,
      context: 'Schritt 2 · Übung macht den Meister',
      section: 'Kapitel 1 · Grundlagen',
    });
  });

  it('requires every word to match', () => {
    expect(search(index, 'doji trend', []).map((r) => r.id)).toEqual(['step:l2:l2-s0']);
    expect(search(index, 'doji zebra', [])).toEqual([]);
  });

  it('ranks exact and prefix matches above partial matches and keeps book order on ties', () => {
    const results = search(index, 'doji', []);
    // Exakter Glossarbegriff vor Lektionstiteln, gleichwertige Titel in Buchreihenfolge.
    expect(results[0].id).toBe('glossary:Doji');
    const lessonIds = results.filter((r) => r.type === 'lesson').map((r) => r.id);
    expect(lessonIds).toEqual(['lesson:l2', 'lesson:l3', 'lesson:l4']);
    expect(search(index, 'dojiv', [])).toEqual([]);
    expect(search(index, 'doj', []).length).toBe(results.length);
  });

  it('shows locked and planned lessons as preview without making them openable', () => {
    const byId = (completed: string[]) =>
      Object.fromEntries(search(index, 'doji', completed).map((r) => [r.id, r]));

    const fresh = byId([]);
    expect(fresh['lesson:l2']).toMatchObject({ access: 'locked', openable: false });
    expect(fresh['step:l2:l2-s1']).toMatchObject({ access: 'locked', openable: false });
    expect(fresh['lesson:l4']).toMatchObject({ access: 'planned', openable: false });

    const later = byId(['l1']);
    expect(later['lesson:l2']).toMatchObject({ access: 'available', openable: true });
    expect(later['lesson:l3']).toMatchObject({ access: 'locked', openable: false });

    expect(byId(['l1', 'l2'])['step:l2:l2-s0']).toMatchObject({ access: 'complete', openable: true });
  });
});

describe('grouping', () => {
  it('groups by type, best group first, and limits each group', () => {
    const groups = groupResults(search(index, 'doji', []), 2);
    expect(groups.map((g) => [g.type, g.label, g.results.length, g.total])).toEqual([
      ['glossary', 'Glossar', 1, 1],
      ['lesson', 'Lektionen', 2, 3],
      ['step', 'Schritte', 2, 4],
    ]);
    expect(groupResults([])).toEqual([]);
  });

  it('puts the best hit first even when it is a glossary alias', () => {
    const extended = buildSearchIndex(
      {
        ...course,
        units: [
          {
            ...course.units[0],
            lessons: [lesson('l9', 'Namen', 'Exotische Candlestick-Namen', ['Kerzen'])],
          },
        ],
      },
      glossary,
    );
    const [firstGroup] = groupResults(search(extended, 'Candle', []));
    expect(firstGroup.type).toBe('glossary');
    expect(firstGroup.results[0].title).toBe('Bar');
  });

  it('keeps the fixed order when groups score equally', () => {
    const tie = buildSearchIndex(
      { ...course, units: [{ ...course.units[0], lessons: [lesson('l8', 'Doji', 'x', ['y'])] }] },
      glossary,
    );
    const groups = groupResults(search(tie, 'doji', []));
    expect(groups[0].results[0].score).toBe(groups[1].results[0].score);
    expect(groups.map((g) => g.type)).toEqual(['lesson', 'glossary']);
  });
});

describe('real course content', () => {
  const realIndex = buildSearchIndex(brooksTrendsCourse, glossaryEntries);

  it('indexes every lesson, step and glossary entry', () => {
    const lessons = brooksTrendsCourse.units.flatMap((unit) => unit.lessons);
    const steps = lessons.reduce((sum, l) => sum + l.steps.length, 0);
    expect(realIndex.entries).toHaveLength(lessons.length + steps + glossaryEntries.length);
  });

  it('finds the first lesson and keeps later lessons locked for new users', () => {
    const [top] = search(realIndex, 'Der Chart ist das Ergebnis', []);
    expect(top).toMatchObject({ type: 'lesson', access: 'available', openable: true });
    expect(search(realIndex, 'Kerze', [])[0]).toMatchObject({ type: 'glossary', title: 'Bar' });
    expect(
      search(realIndex, 'Institutionen Programme', []).find((r) => r.type === 'lesson'),
    ).toMatchObject({ access: 'locked', openable: false });
  });
});
