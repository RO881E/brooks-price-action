import type { BarCase } from '../content/barCaseTypes';
import type { CaseEntry } from '../features/caseTraining';

function stateText(entry: CaseEntry): string {
  switch (entry.state) {
    case 'locked':
      return `Gesperrt – wird frei, sobald du „${entry.lockedBy?.title ?? 'die zugehörige Lektion'}“ erreicht hast.`;
    case 'in-progress':
      return `Begonnen – Entscheidung ${entry.progress?.position ?? 1} von ${entry.progress?.total ?? entry.barCase.decisions.length}.`;
    case 'completed':
      return entry.runs === 1 ? 'Eine Runde abgeschlossen.' : `${entry.runs} Runden abgeschlossen.`;
    default:
      return entry.barCase.decisions.length === 1
        ? 'Neu · eine Entscheidung.'
        : `Neu · ${entry.barCase.decisions.length} Entscheidungen.`;
  }
}

/** Einstieg „Chart trainieren“ im Bereich Üben (F-15). */
export function CaseTrainingList({
  entries,
  onTrain,
}: {
  entries: CaseEntry[];
  onTrain: (caseId: string) => void;
}) {
  const available = entries.filter((entry) => entry.state !== 'locked').length;
  return (
    <section className="case-training" aria-labelledby="case-training-title">
      <h2 id="case-training-title">Chart trainieren</h2>
      <p>
        Bar für Bar entscheiden: Long, Short oder Abwarten – mit Begründung, Auflösung und Hinweisen
        zum Nacharbeiten. Schematische Lernfälle, keine echten Kurse.
      </p>
      {entries.length === 0 ? (
        <div className="empty-state">
          <strong>Noch keine Trainingsfälle</strong>
          <p>Sobald Fälle fachlich freigegeben sind, erscheinen sie hier.</p>
        </div>
      ) : (
        <>
          {available === 0 ? (
            <p className="trainer-notice" role="status">
              Alle Fälle sind noch gesperrt. Sie werden frei, sobald du die zugehörigen Lektionen im
              Lernpfad erreicht hast.
            </p>
          ) : null}
          <ul className="case-list">
            {entries.map((entry) => (
              <li key={entry.barCase.id}>
                <article className={`case-card ${entry.state}`} aria-labelledby={`case-${entry.barCase.id}`}>
                  <p className="eyebrow">{entry.unitLabel}</p>
                  <h3 id={`case-${entry.barCase.id}`}>{entry.barCase.title}</h3>
                  <p className="case-card-state">{stateText(entry)}</p>
                  {entry.state === 'locked' ? null : (
                    <button
                      type="button"
                      className={entry.state === 'in-progress' ? 'primary-button' : 'secondary-button'}
                      onClick={() => onTrain(entry.barCase.id)}
                      aria-label={`${entry.state === 'in-progress' ? 'Fortsetzen' : entry.state === 'completed' ? 'Erneut trainieren' : 'Trainieren'}: ${entry.barCase.title}`}
                    >
                      {entry.state === 'in-progress' ? 'Fortsetzen' : entry.state === 'completed' ? 'Erneut trainieren' : 'Trainieren'}
                    </button>
                  )}
                </article>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

/** „Chart trainieren“-Links zu passenden, bereits zugänglichen Fällen einer Lektion. */
export function CaseLinks({ cases, onTrain }: { cases: BarCase[]; onTrain: (caseId: string) => void }) {
  if (cases.length === 0) return null;
  return (
    <div className="case-links">
      <p>Chart trainieren</p>
      <ul>
        {cases.map((barCase) => (
          <li key={barCase.id}>
            <button type="button" className="link-button" onClick={() => onTrain(barCase.id)}>
              Fall: {barCase.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
