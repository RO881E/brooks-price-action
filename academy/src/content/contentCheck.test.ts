import { describe, expect, it } from 'vitest';
import {
  acceptNewIds,
  checkContent,
  formatReport,
  snapshotKnownIds,
  type ContentCheckInput,
  type ContentIssue,
  type KnownIds,
} from '../../build/contentCheck';
import known from '../../build/published-ids.json';
import { chartDescription, chartScenarioIds } from '../components/LearningChart';
import { validateBarCases } from '../features/barCaseValidation';
import { barCases } from './barCases';
import { brooksTrendsCourse } from './course';
import { glossaryEntries } from './glossary';
import type { ChartScenarioId, Course, LessonStep } from './types';

/** Echte Inhalte als Eingabe – wie `npm run check:content`. */
function realInput(): ContentCheckInput {
  return {
    course: brooksTrendsCourse,
    glossary: glossaryEntries,
    scenarioIds: chartScenarioIds(),
    describe: (scenario) => chartDescription(scenario as ChartScenarioId),
    caseIssues: validateBarCases(barCases, brooksTrendsCourse),
    known: known as KnownIds,
  };
}

/** Gezielt defekte Kopie der echten Inhalte; das Original bleibt unberührt. */
function withCourse(change: (course: Course) => void, extra: Partial<ContentCheckInput> = {}) {
  const course = structuredClone(brooksTrendsCourse);
  change(course);
  return checkContent({ ...realInput(), course, ...extra });
}

function errors(issues: ContentIssue[]) {
  return issues.filter((issue) => issue.severity === 'error');
}

function find(issues: ContentIssue[], rule: string, id: string) {
  return issues.find((issue) => issue.rule === rule && issue.id === id);
}

const [intro, partOne] = brooksTrendsCourse.units;
const firstLesson = intro.lessons[0];
const secondLesson = intro.lessons[1];
const question = firstLesson.steps.find((step) => step.type === 'question') as Extract<LessonStep, { type: 'question' }>;
const diagram = firstLesson.steps.find((step) => step.type === 'diagram') as Extract<LessonStep, { type: 'diagram' }>;

describe('Strukturprüfung: gültiger Bestand', () => {
  it('der veröffentlichte Bestand besteht ohne Fehler', () => {
    const report = checkContent(realInput());
    expect(formatReport({ ...report, issues: errors(report.issues) })).toBe('0 Fehler, ' + report.warnings + ' Hinweise.');
  });

  it('die Liste bekannter IDs entspricht dem veröffentlichten Stand', () => {
    expect(snapshotKnownIds(brooksTrendsCourse).units).toEqual((known as KnownIds).units);
  });
});

describe('Strukturprüfung: gezielt defekte Inhalte', () => {
  it('doppelte Lektions-ID', () => {
    const report = withCourse((course) => {
      course.units[1].lessons[0].id = firstLesson.id;
    });
    expect(find(report.issues, 'doppelte-id', firstLesson.id)?.message).toMatch(/Lektions-ID kommt mehrfach vor \(auch in brooks-trends.introduction\)/);
  });

  it('doppelte Schritt-ID in einer Lektion', () => {
    const report = withCourse((course) => {
      course.units[0].lessons[0].steps[1].id = firstLesson.steps[0].id;
    });
    const issue = find(report.issues, 'doppelte-id', firstLesson.steps[0].id);
    expect(issue).toMatchObject({ lessonId: firstLesson.id, message: 'Schritt-ID kommt in dieser Lektion mehrfach vor.' });
  });

  it('Frage-ID nicht kursweit eindeutig', () => {
    const report = withCourse((course) => {
      const other = course.units[0].lessons[1].steps.find((step) => step.type === 'question')!;
      other.id = question.id;
    });
    expect(find(report.issues, 'doppelte-id', question.id)?.message).toMatch(/Frage-ID ist nicht kursweit eindeutig/);
  });

  it('falsche Buchreihenfolge der Einheiten', () => {
    const report = withCourse((course) => {
      course.units[1].order = 7;
    });
    expect(find(report.issues, 'reihenfolge', partOne.id)?.message).toBe('Einheit steht an Position 2, hat aber order: 7.');
  });

  it('ungültige Fragen', () => {
    const report = withCourse((course) => {
      const target = course.units[0].lessons[0].steps.find((step) => step.type === 'question')!;
      if (target.type !== 'question') return;
      target.correctOptionId = 'gibt-es-nicht';
      target.options[1].id = target.options[0].id;
      target.options[2].explanation = '';
    });
    const messages = report.issues.filter((issue) => issue.rule === 'frage' && issue.id === question.id).map((issue) => issue.message);
    expect(messages).toEqual(
      expect.arrayContaining([
        'Richtige Antwort „gibt-es-nicht“ gibt es nicht.',
        `Antwort-ID „${question.options[0].id}“ kommt mehrfach vor.`,
        `Antwort „${question.options[2].id}“ ohne Erklärung.`,
      ]),
    );
    const single = withCourse((course) => {
      const target = course.units[0].lessons[0].steps.find((step) => step.type === 'question')!;
      if (target.type === 'question') target.options = target.options.slice(0, 1);
    });
    expect(single.issues.some((issue) => issue.message === 'Eine Frage braucht mindestens zwei Antworten.')).toBe(true);
  });

  it('Diagramm mit unbekanntem Szenario oder ohne Bildbeschreibung', () => {
    const unknown = withCourse((course) => {
      const step = course.units[0].lessons[0].steps.find((candidate) => candidate.type === 'diagram')!;
      if (step.type === 'diagram') step.scenario = 'gibt-es-nicht' as ChartScenarioId;
    });
    expect(find(unknown.issues, 'diagramm', 'gibt-es-nicht')?.message).toMatch(new RegExp(`Schritt „${diagram.id}“ nutzt ein Szenario`));
    const undescribed = checkContent({ ...realInput(), describe: (scenario) => (scenario === diagram.scenario ? ' ' : 'Text') });
    expect(find(undescribed.issues, 'bildbeschreibung', diagram.scenario)?.severity).toBe('error');
  });

  it('verwaistes Szenario ist ein Hinweis, kein Fehler', () => {
    const report = checkContent({ ...realInput(), scenarioIds: [...chartScenarioIds(), 'nur-definiert'] });
    expect(find(report.issues, 'verwaistes-diagramm', 'nur-definiert')?.severity).toBe('warning');
    expect(report.errors).toBe(0);
  });

  it('kaputte Glossarbezüge und doppelte Begriffe', () => {
    const glossary = [
      ...glossaryEntries,
      { term: 'Neu', aliases: [], definition: 'Definition', firstUnit: 'Kapitel 99' },
      { term: glossaryEntries[0].term, aliases: [], definition: 'Zweite Definition', firstUnit: 'Einleitung' },
      { term: 'Kurzform', aliases: [], definition: 'Definition', firstUnit: 'Teil I' },
      { term: 'Andere', aliases: [glossaryEntries[0].term], definition: 'Definition', firstUnit: 'Einleitung' },
    ];
    const report = checkContent({ ...realInput(), glossary });
    expect(find(report.issues, 'glossar', 'Neu')?.message).toMatch(/„Kapitel 99“, keine Einheit/);
    expect(find(report.issues, 'doppelte-id', glossaryEntries[0].term)?.message).toBe('Begriff kommt mehrfach vor.');
    expect(find(report.issues, 'glossar', 'Kurzform')).toBeUndefined();
    expect(find(report.issues, 'mehrdeutiger-begriff', 'Andere')?.severity).toBe('warning');
  });

  it('kaputte Fallbezüge aus der Fallprüfung', () => {
    const report = checkContent({
      ...realInput(),
      caseIssues: [{ caseId: 'bar-case.x', path: 'lessonIds[0]', message: 'Unbekannte Lektion „y“.' }],
    });
    expect(find(report.issues, 'fall', 'bar-case.x')?.message).toBe('lessonIds[0]: Unbekannte Lektion „y“.');
  });
});

describe('Strukturprüfung: Begriffe am Lernort', () => {
  it('meldet defekte Zuordnungen mit Schritt, Begriff und Lektion', () => {
    const report = checkContent({
      ...realInput(),
      termLinkIssues: [{ lessonId: firstLesson.id, stepId: 'intro-01-explain', term: 'X', message: 'Kein Glossareintrag „X“.' }],
    });
    expect(find(report.issues, 'begriff-am-lernort', 'intro-01-explain → X')).toMatchObject({
      severity: 'error',
      area: 'term-link',
      lessonId: firstLesson.id,
    });
  });
});

describe('Strukturprüfung: bekannte veröffentlichte IDs', () => {
  it('gelöschte oder umbenannte Lektion', () => {
    const report = withCourse((course) => {
      course.units[0].lessons[1].id = 'umbenannt';
    });
    expect(find(report.issues, 'bekannte-id', secondLesson.id)?.message).toBe('Bekannte veröffentlichte Lektion fehlt (gelöscht oder umbenannt).');
    expect(find(report.issues, 'neue-id', intro.id)?.message).toMatch(/Lektion umbenannt/);
  });

  it('umsortierte Lektionen und Schritte', () => {
    const lessons = withCourse((course) => {
      const [a, b] = course.units[0].lessons;
      course.units[0].lessons[0] = b;
      course.units[0].lessons[1] = a;
    });
    expect(lessons.issues.some((issue) => issue.rule === 'bekannte-id' && issue.message === 'Die Reihenfolge bekannter Lektionen hat sich geändert.')).toBe(true);
    const steps = withCourse((course) => {
      course.units[0].lessons[0].steps.reverse();
    });
    expect(steps.issues.some((issue) => issue.message === 'Die Reihenfolge bekannter Schritte hat sich geändert.')).toBe(true);
  });

  it('gelöschter Schritt, umgezogene oder zurückgezogene Lektion', () => {
    const step = withCourse((course) => {
      course.units[0].lessons[0].steps.splice(1, 1);
    });
    expect(find(step.issues, 'bekannte-id', firstLesson.steps[1].id)?.message).toBe('Bekannter Schritt fehlt (gelöscht oder umbenannt).');
    const moved = withCourse((course) => {
      const [lesson] = course.units[0].lessons.splice(0, 1);
      course.units[1].lessons.push(lesson);
    });
    expect(find(moved.issues, 'bekannte-id', firstLesson.id)?.message).toBe(`Lektion ist von ${intro.id} nach ${partOne.id} umgezogen.`);
    const planned = withCourse((course) => {
      course.units[0].lessons[0].status = 'planned';
    });
    expect(find(planned.issues, 'bekannte-id', firstLesson.id)?.message).toBe('Bekannte Lektion ist nicht mehr veröffentlicht.');
  });

  it('neue IDs werden gemeldet und lassen sich bewusst aufnehmen – ohne bekannte zu verlieren', () => {
    const course = structuredClone(brooksTrendsCourse);
    course.units[0].lessons.push({ ...structuredClone(firstLesson), id: 'neue-lektion', steps: [{ ...firstLesson.steps[0], id: 'neuer-schritt' }] });
    course.units[0].lessons[0].steps.push({ ...firstLesson.steps[0], id: 'zusatz-schritt' });
    const before = checkContent({ ...realInput(), course });
    expect(find(before.issues, 'neue-id', intro.id)?.message).toMatch(/2 neue veröffentlichte ID\(s\).*--accept-new/);

    const accepted = acceptNewIds(known as KnownIds, course);
    expect(accepted.note).toBe((known as KnownIds).note);
    const introIds = accepted.units[0].lessons.map((lesson) => lesson.id);
    expect(introIds.slice(0, intro.lessons.length)).toEqual(intro.lessons.map((lesson) => lesson.id));
    expect(introIds.at(-1)).toBe('neue-lektion');
    expect(accepted.units[0].lessons[0].steps.at(-1)).toBe('zusatz-schritt');
    expect(checkContent({ ...realInput(), course, known: accepted }).errors).toBe(0);
  });

  it('die Ausgabe nennt Regel, ID und Datei', () => {
    const report = withCourse((course) => {
      course.units[0].lessons[1].id = 'umbenannt';
    });
    const issue = find(report.issues, 'bekannte-id', secondLesson.id)!;
    issue.file = 'src/content/courses/brooks-trends/introduction-foundations.ts';
    expect(formatReport({ ...report, issues: [issue] })).toMatch(
      new RegExp(`^✗ \\[bekannte-id\\] ${secondLesson.id.replace(/\./g, '\\.')} \\(src/content/courses/brooks-trends/introduction-foundations.ts\\): `),
    );
  });
});
