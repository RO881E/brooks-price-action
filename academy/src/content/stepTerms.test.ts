import { describe, expect, it } from 'vitest';
import { brooksTrendsCourse } from './course';
import { glossaryEntries } from './glossary';
import {
  MAX_TERMS_PER_STEP,
  mentionsTerm,
  stepTermLinks,
  termsForStep,
  validateStepTermLinks,
  type StepTermLink,
} from './stepTerms';

const [first] = stepTermLinks;

function messages(links: StepTermLink[]) {
  return validateStepTermLinks(brooksTrendsCourse, glossaryEntries, links).map(
    (issue) => `${issue.stepId}${issue.term ? ` → ${issue.term}` : ''}: ${issue.message}`,
  );
}

describe('Begriffe am Lernort: Zuordnung', () => {
  it('die veröffentlichte Zuordnung ist gültig', () => {
    expect(messages(stepTermLinks)).toEqual([]);
  });

  it('bleibt eine kleine Auswahl mit höchstens wenigen Begriffen je Schritt', () => {
    expect(stepTermLinks.length).toBeGreaterThan(5);
    for (const link of stepTermLinks) expect(link.terms.length).toBeLessThanOrEqual(MAX_TERMS_PER_STEP);
  });

  it('liefert die bestehenden Glossareinträge, keine Kopie', () => {
    const entries = termsForStep(first.lessonId, first.stepId);
    expect(entries.map((entry) => entry.term)).toEqual(first.terms);
    for (const entry of entries) expect(glossaryEntries).toContain(entry);
  });

  it('nicht zugeordnete Schritte bekommen keine Begriffe', () => {
    expect(termsForStep(first.lessonId, 'gibt-es-nicht')).toEqual([]);
    expect(termsForStep('gibt-es-nicht', first.stepId)).toEqual([]);
  });

  it('blendet unbekannte Begriffe sicher aus', () => {
    const links = [{ ...first, terms: ['Gibt es nicht', first.terms[0]] }];
    expect(termsForStep(first.lessonId, first.stepId, links).map((entry) => entry.term)).toEqual([first.terms[0]]);
  });

  it('erkennt Begriffe nur als eigenes Wort', () => {
    expect(mentionsTerm('Ein Trend setzt sich fort.', 'Trend')).toBe(true);
    expect(mentionsTerm('Eine Trendbar schließt stark.', 'Trend')).toBe(false);
    expect(mentionsTerm('Der Breakout-Pullback testet.', 'Breakout-Pullback')).toBe(true);
  });
});

describe('Begriffe am Lernort: Prüfung meldet defekte Zuordnungen', () => {
  const lesson = brooksTrendsCourse.units[0].lessons[0];
  const question = lesson.steps.find((step) => step.type === 'question')!;

  const cases: Array<[string, StepTermLink[], RegExp]> = [
    ['unbekannter Begriff', [{ ...first, terms: ['Gibt es nicht'] }], /Kein Glossareintrag „Gibt es nicht“/],
    ['Alias statt Begriff', [{ ...first, terms: ['Kursverhalten'] }], /Kein Glossareintrag „Kursverhalten“/],
    ['unbekannte Lektion', [{ ...first, lessonId: 'gibt-es-nicht' }], /Unbekannte Lektion/],
    ['unbekannter Schritt', [{ ...first, stepId: 'gibt-es-nicht' }], /Unbekannter Schritt/],
    ['Frage', [{ lessonId: lesson.id, stepId: question.id, terms: [] }], /Fragen bekommen keine Begriffe/],
    ['Begriff nicht im Text', [{ ...first, terms: ['Klimax'] }], /„Klimax“ kommt im Text dieses Schritts nicht vor/],
    ['doppelter Schritt', [first, first], /mehrfach zugeordnet/],
    ['doppelter Begriff', [{ ...first, terms: [first.terms[0], first.terms[0]] }], /Begriff doppelt/],
    ['zu viele Begriffe', [{ ...first, terms: ['Price Action', 'Bar', 'Trend', 'Setup'] }], /Höchstens 3 Begriffe/],
  ];

  for (const [name, links, expected] of cases) {
    it(name, () => {
      expect(messages(links).join('\n')).toMatch(expected);
    });
  }

  it('meldet nicht veröffentlichte Lektionen', () => {
    const course = structuredClone(brooksTrendsCourse);
    const target = course.units.flatMap((unit) => unit.lessons).find((item) => item.id === first.lessonId)!;
    target.status = 'planned';
    expect(validateStepTermLinks(course, glossaryEntries, [first]).map((issue) => issue.message)).toContain(
      'Die Lektion ist nicht veröffentlicht.',
    );
  });
});
