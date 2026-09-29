import { describe, expect, it } from 'vitest';
import type { BarCase, DecisionPoint } from '../content/barCaseTypes';
import { allBarCases, barCases } from '../content/barCases';
import { brooksTrendsCourse } from '../content/course';
import { singleStepFixture, technicalFixtures, twoStepFixture } from '../test/fixtures/barCases';
import { formatIssues, validateBarCase, validateBarCases } from './barCaseValidation';

const course = brooksTrendsCourse;

/** Tiefe Kopie mit gezielter Änderung – die Fixture selbst bleibt unberührt. */
function variant(change: (draft: BarCase) => void, base: BarCase = twoStepFixture): BarCase {
  const copy = structuredClone(base);
  change(copy);
  return copy;
}

function messages(barCase: BarCase): string {
  return formatIssues(validateBarCase(barCase, course));
}

function decision(draft: BarCase, index = 0): DecisionPoint {
  return draft.decisions[index];
}

describe('Bar-für-Bar-Fälle: Registry und Fixtures', () => {
  it('alle registrierten Fälle erfüllen den Vertrag', () => {
    expect(formatIssues(validateBarCases(allBarCases, course))).toBe('');
  });

  it('die technischen Fixtures sind gültig', () => {
    expect(formatIssues(validateBarCases(technicalFixtures, course))).toBe('');
  });

  it('technische Fixtures werden nie als Produktinhalt registriert', () => {
    const registered = new Set(barCases.map((barCase) => barCase.id));
    for (const fixture of technicalFixtures) expect(registered.has(fixture.id)).toBe(false);
    expect(technicalFixtures.every((fixture) => fixture.status === 'draft')).toBe(true);
    // Kein App-Modul importiert die Fixtures.
    const sources = import.meta.glob(['../**/*.{ts,tsx}', '!../**/*.test.{ts,tsx}', '!../test/**'], {
      query: '?raw',
      import: 'default',
      eager: true,
    }) as Record<string, string>;
    const offenders = Object.entries(sources)
      .filter(([, source]) => /test\/fixtures/.test(source))
      .map(([file]) => file);
    expect(offenders).toEqual([]);
  });

  it('meldet doppelte Fall-IDs', () => {
    expect(formatIssues(validateBarCases([twoStepFixture, twoStepFixture], course))).toMatch(
      /Doppelte Fall-ID „test-fixture.two-step-wait-then-long“/,
    );
  });
});

describe('Bar-für-Bar-Fälle: Prüfung einzelner Fehler', () => {
  const cases: Array<[string, (draft: BarCase) => void, RegExp]> = [
    ['ungültige ID', (d) => void (d.id = 'Kein Leerzeichen!'), /id: Ungültige Fall-ID/],
    ['falsche Vertragsversion', (d) => void ((d as { schemaVersion: number }).schemaVersion = 2), /schemaVersion/],
    ['falscher Status', (d) => void ((d as { status: string }).status = 'published'), /status: Status muss/],
    ['leerer Titel', (d) => void (d.title = ' '), /title: Der Titel fehlt/],
    ['leere Ausgangslage', (d) => void (d.setup = ''), /setup: Die Ausgangslage fehlt/],
    ['unbekannte Einheit', (d) => void (d.unitId = 'gibt-es-nicht'), /unitId: Unbekannte Einheit/],
    ['keine Lektion', (d) => void (d.lessonIds = []), /lessonIds: Mindestens eine/],
    ['unbekannte Lektion', (d) => void d.lessonIds.push('gibt-es-nicht'), /lessonIds\[2\]: Unbekannte Lektion/],
    [
      'Lektion aus anderer Einheit',
      (d) => void d.lessonIds.push(course.units[1].lessons[0].id),
      /gehört nicht zu „brooks-trends.introduction“/,
    ],
    ['kein Quellenanker', (d) => void (d.sourceAnchors = []), /sourceAnchors/],
    ['leerer Quellenanker', (d) => void (d.sourceAnchors = ['']), /sourceAnchors/],
    ['zu wenige Bars', (d) => void (d.bars = d.bars.slice(0, 2)), /bars: Mindestens 3 Bars/],
    ['unendlicher Wert', (d) => void (d.bars[1].high = Number.POSITIVE_INFINITY), /bars\[1\]: OHLC-Werte müssen endliche Zahlen/],
    ['NaN', (d) => void (d.bars[2].close = Number.NaN), /bars\[2\]: OHLC-Werte/],
    ['Tief über Hoch', (d) => void Object.assign(d.bars[0], { low: 102, high: 101, open: 101.5, close: 101.5 }), /Das Tief liegt über dem Hoch/],
    ['Hoch unter Schluss', (d) => void (d.bars[0].high = 101), /bars\[0\]: Das Hoch liegt unter/],
    ['Tief über Eröffnung', (d) => void (d.bars[1].low = 101.5), /bars\[1\]: Das Tief liegt über Eröffnung/],
    ['leere Beschriftung', (d) => void (d.bars[0].label = ''), /Eine Beschriftung darf nicht leer sein/],
    ['keine Entscheidung', (d) => void (d.decisions = []), /decisions: Mindestens ein Entscheidungspunkt/],
    ['doppelte Entscheidungs-ID', (d) => void (decision(d, 1).id = 'decision-1'), /decisions\[1\].id: Doppelte ID/],
    ['nicht chronologisch', (d) => void (decision(d, 1).afterBar = 3), /zeitlich aufsteigen/],
    ['rückwärts', (d) => void (decision(d, 1).afterBar = 1), /zeitlich aufsteigen/],
    ['kein Folgebar nach letzter Entscheidung', (d) => void (decision(d, 1).afterBar = 7), /mindestens ein Bar folgen/],
    ['negativer Bar-Index', (d) => void (decision(d).afterBar = -1), /afterBar“ muss ein Bar-Index/],
    ['gebrochener Bar-Index', (d) => void (decision(d).afterBar = 1.5), /afterBar“ muss ein Bar-Index/],
    ['fehlende Frage', (d) => void (decision(d).prompt = ''), /prompt: Die Frage fehlt/],
    ['zu kurze Einordnung', (d) => void (decision(d).explanation = 'kurz'), /explanation: Die Einordnung braucht/],
    ['fehlende Option', (d) => void decision(d).options.pop(), /Option „wait“ muss genau einmal vorkommen \(gefunden: 0\)/],
    [
      'doppelte Option',
      (d) => void (decision(d).options[1] = { ...decision(d).options[0], verdict: 'mistake' }),
      /Option „long“ muss genau einmal vorkommen \(gefunden: 2\)/,
    ],
    ['zwei beste Optionen', (d) => void (decision(d).options[0].verdict = 'best'), /Genau eine Option muss „best“ sein \(gefunden: 2\)/],
    ['keine beste Option', (d) => void (decision(d).options[2].verdict = 'defensible'), /gefunden: 0/],
    ['unbekannte Einordnung', (d) => void ((decision(d).options[0] as { verdict: string }).verdict = 'gut'), /Unbekannte Einordnung/],
    ['Rückmeldung fehlt', (d) => void (decision(d).options[1].feedback = 'falsch'), /options\[1\].feedback: Jede Option braucht/],
    ['nur ein Hinweis', (d) => void (decision(d, 1).cues = decision(d, 1).cues.slice(0, 1)), /Mindestens zwei Hinweise/],
    ['kein relevanter Hinweis', (d) => void decision(d).cues.forEach((cue) => (cue.relevant = false)), /Mindestens ein Hinweis muss relevant/],
    ['doppelte Hinweis-ID', (d) => void (decision(d).cues[1].id = 'cue-a'), /Doppelte Hinweis-ID „cue-a“/],
    ['Hinweis ohne Erklärung', (d) => void (decision(d).cues[0].explanation = ''), /cues\[0\].explanation/],
    ['Lernlink ins Leere', (d) => void (decision(d).cues[1].lessonId = 'gibt-es-nicht'), /Lernlink auf unbekannte/],
  ];

  for (const [name, change, expected] of cases) {
    it(`erkennt: ${name}`, () => {
      expect(messages(variant(change))).toMatch(expected);
    });
  }

  it('meldet alle Fehler auf einmal und nennt Fall und Pfad', () => {
    const broken = variant((d) => {
      d.title = '';
      d.bars[0].high = Number.NaN;
      decision(d).options[1].feedback = '';
    });
    const issues = validateBarCase(broken, course);
    expect(issues.map((issue) => issue.path)).toEqual(
      expect.arrayContaining(['title', 'bars[0]', 'decisions[0].options[1].feedback']),
    );
    expect(issues.every((issue) => issue.caseId === twoStepFixture.id)).toBe(true);
  });

  it('akzeptiert „Abwarten“ als beste Entscheidung und Fälle mit einem Punkt', () => {
    expect(validateBarCase(twoStepFixture, course)).toEqual([]);
    expect(validateBarCase(singleStepFixture, course)).toEqual([]);
  });
});
