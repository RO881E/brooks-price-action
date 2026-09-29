import type { BarCase } from '../../content/barCaseTypes';

/*
 * Rein technische Testfälle für die Engine (F-14). Keine Brooks-Übungen, keine
 * fachliche Aussage: Die Kurse sind willkürliche Zahlen, die Texte beschreiben
 * nur, was getestet wird. Diese Datei darf nie in `content/barCases.ts`
 * eingetragen oder von App-Code importiert werden (ein Test prüft das).
 * Beide Fälle bleiben `draft`.
 */

/** Zwei Entscheidungspunkte; der erste ist sachgerecht „Abwarten“. */
export const twoStepFixture: BarCase = {
  id: 'test-fixture.two-step-wait-then-long',
  schemaVersion: 1,
  status: 'draft',
  title: 'Technischer Testfall: zwei Entscheidungen',
  unitId: 'brooks-trends.introduction',
  lessonIds: ['brooks-trends.introduction.lesson-01', 'brooks-trends.introduction.lesson-04'],
  setup: 'Technische Ausgangslage für Engine-Tests ohne fachliche Aussage.',
  timeframe: 'schematisch',
  bars: [
    { open: 100, high: 101.5, low: 99.4, close: 101.2 },
    { open: 101.2, high: 102.3, low: 100.8, close: 102 },
    { open: 102, high: 102.4, low: 101.1, close: 101.4, label: 'Test-Label A' },
    { open: 101.4, high: 101.9, low: 100.9, close: 101.6 },
    { open: 101.6, high: 103.1, low: 101.5, close: 103 },
    { open: 103, high: 103.9, low: 102.7, close: 103.7 },
    { open: 103.7, high: 105.2, low: 103.5, close: 105.1 },
    { open: 105.1, high: 105.4, low: 104.2, close: 104.6, label: 'Test-Label Z' },
  ],
  decisions: [
    {
      id: 'decision-1',
      afterBar: 3,
      prompt: 'Technische Frage 1 an Bar 4.',
      explanation: 'Technische Einordnung 1: nur für Tests, ohne fachliche Aussage.',
      options: [
        { decision: 'long', verdict: 'defensible', feedback: 'Technische Rückmeldung Long 1 für Tests.' },
        { decision: 'short', verdict: 'mistake', feedback: 'Technische Rückmeldung Short 1 für Tests.' },
        { decision: 'wait', verdict: 'best', feedback: 'Technische Rückmeldung Warten 1 für Tests.' },
      ],
      cues: [
        {
          id: 'cue-a',
          label: 'Test-Hinweis A',
          relevant: true,
          explanation: 'Technische Erklärung A – relevant im Test.',
          lessonId: 'brooks-trends.introduction.lesson-04',
        },
        { id: 'cue-b', label: 'Test-Hinweis B', relevant: false, explanation: 'Technische Erklärung B – Ablenkung im Test.' },
        { id: 'cue-c', label: 'Test-Hinweis C', relevant: true, explanation: 'Technische Erklärung C – relevant im Test.' },
      ],
    },
    {
      id: 'decision-2',
      afterBar: 5,
      prompt: 'Technische Frage 2 an Bar 6.',
      explanation: 'Technische Einordnung 2: nur für Tests, ohne fachliche Aussage.',
      options: [
        { decision: 'long', verdict: 'best', feedback: 'Technische Rückmeldung Long 2 für Tests.' },
        { decision: 'short', verdict: 'mistake', feedback: 'Technische Rückmeldung Short 2 für Tests.' },
        { decision: 'wait', verdict: 'defensible', feedback: 'Technische Rückmeldung Warten 2 für Tests.' },
      ],
      cues: [
        { id: 'cue-d', label: 'Test-Hinweis D', relevant: true, explanation: 'Technische Erklärung D – relevant im Test.' },
        {
          id: 'cue-e',
          label: 'Test-Hinweis E',
          relevant: false,
          explanation: 'Technische Erklärung E – Ablenkung im Test.',
          lessonId: 'brooks-trends.introduction.lesson-01',
        },
      ],
    },
  ],
  sourceAnchors: ['Technischer Anker (Test)'],
};

/** Ein einzelner Entscheidungspunkt; „Short“ ist die beste Wahl. */
export const singleStepFixture: BarCase = {
  id: 'test-fixture.single-step-short',
  schemaVersion: 1,
  status: 'draft',
  title: 'Technischer Testfall: eine Entscheidung',
  unitId: 'brooks-trends.introduction',
  lessonIds: ['brooks-trends.introduction.lesson-01'],
  setup: 'Zweite technische Ausgangslage für Engine-Tests.',
  bars: [
    { open: 50, high: 50.4, low: 49.2, close: 49.4 },
    { open: 49.4, high: 49.6, low: 48.5, close: 48.7 },
    { open: 48.7, high: 48.8, low: 47.6, close: 47.8 },
    { open: 47.8, high: 48, low: 46.9, close: 47.1 },
  ],
  decisions: [
    {
      id: 'only',
      afterBar: 2,
      prompt: 'Technische Frage an Bar 3.',
      explanation: 'Technische Einordnung: nur für Tests, ohne fachliche Aussage.',
      options: [
        { decision: 'short', verdict: 'best', feedback: 'Technische Rückmeldung Short für Tests.' },
        { decision: 'long', verdict: 'mistake', feedback: 'Technische Rückmeldung Long für Tests.' },
        { decision: 'wait', verdict: 'defensible', feedback: 'Technische Rückmeldung Warten für Tests.' },
      ],
      cues: [
        { id: 'x', label: 'Test-Hinweis X', relevant: true, explanation: 'Technische Erklärung X – relevant im Test.' },
        { id: 'y', label: 'Test-Hinweis Y', relevant: false, explanation: 'Technische Erklärung Y – Ablenkung im Test.' },
      ],
    },
  ],
  sourceAnchors: ['Technischer Anker (Test)'],
};

export const technicalFixtures: readonly BarCase[] = [twoStepFixture, singleStepFixture];
