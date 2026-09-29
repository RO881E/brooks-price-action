import { useId, useMemo, useState } from 'react';
import { TRADE_DECISION_LABELS } from '../content/barCaseTypes';
import type { CourseOutline } from '../content/types';
import { buildComparison, comparableCases, type ComparisonSide } from '../features/caseCompare';
import type { AcademyProgress } from '../features/progress';
import { CaseChart } from './CaseChart';

function Side({ side, heading }: { side: ComparisonSide; heading: string }) {
  const ids = useId();
  return (
    <article className="compare-side" aria-labelledby={`${ids}-title`}>
      <p className="question-number">{heading}</p>
      <h3 id={`${ids}-title`}>{side.barCase.title}</h3>
      <p>{side.barCase.setup}</p>
      <CaseChart bars={side.barCase.bars} deciding={false} />
      <ol className="compare-points">
        {side.points.map((point, index) => (
          <li key={point.decision.id}>
            <p>
              <strong>Entscheidung {index + 1}:</strong> {point.decision.prompt}
            </p>
            <p>
              Beste Wahl: <strong>{TRADE_DECISION_LABELS[point.best]}</strong>
            </p>
            <p className="trainer-explanation">{point.decision.explanation}</p>
            <p className="compare-cues">
              Wichtige Hinweise: {point.relevantCues.map((cue) => cue.label).join('; ')}
            </p>
          </li>
        ))}
      </ol>
    </article>
  );
}

/**
 * „Zwei Fälle vergleichen“ (P09): Gegenüberstellung von Kontext, bester Wahl und
 * Begründung – nur für bereits abgeschlossene, zugängliche Trainerfälle.
 */
export function CaseCompare({ course, progress }: { course: CourseOutline; progress: AcademyProgress }) {
  const ids = useId();
  const options = useMemo(() => comparableCases(course, progress), [course, progress]);
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const comparison = first && second ? buildComparison(course, progress, first, second) : null;

  return (
    <section className="case-compare" aria-labelledby={`${ids}-title`}>
      <h2 id={`${ids}-title`}>Zwei Fälle vergleichen</h2>
      {options.length < 2 ? (
        <p className="compare-note">
          Der Vergleich steht bereit, sobald du zwei Fälle abgeschlossen hast – so verrät er nichts, was du noch nicht
          gespielt hast.
        </p>
      ) : (
        <>
          <p className="compare-note">
            Stelle zwei bereits gespielte Fälle nebeneinander: sichtbarer Kontext, beste Wahl und Begründung. Es sind
            schematische Lernfälle – kein Vergleich echter Märkte.
          </p>
          <div className="compare-pickers">
            <label>
              <span>Erster Fall</span>
              <select value={first} onChange={(event) => setFirst(event.target.value)}>
                <option value="">Bitte wählen</option>
                {options.map(({ barCase }) => (
                  <option key={barCase.id} value={barCase.id} disabled={barCase.id === second}>
                    {barCase.title}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Zweiter Fall</span>
              <select value={second} onChange={(event) => setSecond(event.target.value)}>
                <option value="">Bitte wählen</option>
                {options.map(({ barCase }) => (
                  <option key={barCase.id} value={barCase.id} disabled={barCase.id === first}>
                    {barCase.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {comparison?.ok ? (
            <div className="compare-result" role="region" aria-label="Vergleich der beiden Fälle">
              <ul className="compare-differences">
                {comparison.differences.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div className="compare-sides">
                <Side side={comparison.a} heading="Erster Fall" />
                <Side side={comparison.b} heading="Zweiter Fall" />
              </div>
            </div>
          ) : comparison ? (
            <p className="compare-note" role="status">
              Dieser Vergleich ist nicht möglich. Wähle zwei verschiedene, bereits abgeschlossene Fälle.
            </p>
          ) : null}
        </>
      )}
    </section>
  );
}
