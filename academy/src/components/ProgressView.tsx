import type { Course } from '../content/types';
import type { NextAction, ProgressOverview } from '../features/progressStats';
import type { DayKey } from '../features/reviewScheduler';

interface ProgressViewProps {
  course: Course;
  overview: ProgressOverview;
  today: DayKey;
  onAction: (action: NextAction) => void;
}

function formatDay(day: DayKey): string {
  const [, month, date] = day.split('-');
  return `${date}.${month}.`;
}

function actionLabel(action: NextAction): { title: string; detail: string; button: string } {
  switch (action.kind) {
    case 'resume':
      return {
        title: action.lesson.title,
        detail: `Begonnen – weiter bei Schritt ${action.stepIndex + 1} von ${action.lesson.steps.length}.`,
        button: 'Weiterlernen',
      };
    case 'review':
      return {
        title: 'Wiederholung',
        detail: `${action.due === 1 ? '1 Frage ist' : `${action.due} Fragen sind`} heute fällig.`,
        button: 'Fällige Wiederholung starten',
      };
    case 'lesson':
      return {
        title: action.lesson.title,
        detail: `Nächste Lektion im Lernpfad · ${action.lesson.durationMinutes} Min`,
        button: 'Nächste Lektion starten',
      };
  }
}

function Meter({ percent }: { percent: number }) {
  return (
    <div className="stat-meter" aria-hidden="true">
      <span style={{ width: `${percent}%` }} />
    </div>
  );
}

export function ProgressView({ course, overview, today, onAction }: ProgressViewProps) {
  const { lessons, firstAttempt, activity } = overview;
  const [primary, ...secondary] = overview.actions;
  const activitySummary = `An ${activity.last30} der letzten 30 Tage aktiv, davon an ${activity.last7} der letzten 7 Tage.`;

  return (
    <div className="page-shell progress-page">
      <header className="page-heading">
        <p className="eyebrow">Dein Stand</p>
        <h1>Fortschritt</h1>
        <p>
          Alle Werte stammen direkt aus deinen gespeicherten Lerndaten in diesem Browser – ohne
          Schätzungen und ohne Vergleich mit anderen.
        </p>
      </header>

      <section className="progress-next" aria-labelledby="progress-next-heading">
        <p className="eyebrow" id="progress-next-heading">
          Nächster sinnvoller Schritt
        </p>
        {primary ? (
          <>
            <h2>{actionLabel(primary).title}</h2>
            <p>{actionLabel(primary).detail}</p>
            <div className="progress-next-actions">
              <button className="primary-button" type="button" onClick={() => onAction(primary)}>
                {actionLabel(primary).button}
              </button>
              {secondary.map((action) => (
                <button
                  key={action.kind}
                  className="secondary-button"
                  type="button"
                  onClick={() => onAction(action)}
                >
                  {actionLabel(action).button}
                </button>
              ))}
            </div>
          </>
        ) : overview.state === 'complete' ? (
          <>
            <h2>Alles erledigt</h2>
            <p>
              Du hast alle {lessons.published} veröffentlichten Lektionen abgeschlossen und heute
              ist keine Wiederholung fällig. Neue Lektionen erscheinen hier, sobald sie
              veröffentlicht sind.
            </p>
          </>
        ) : (
          <>
            <h2>Gerade steht nichts an</h2>
            <p>Heute ist keine Wiederholung fällig und keine Lektion freigeschaltet.</p>
          </>
        )}
      </section>

      {overview.state === 'new' ? (
        <div className="empty-state progress-empty">
          <strong>Noch keine Lerndaten</strong>
          <p>
            Sobald du deine erste Lektion abschließt, erscheinen hier abgeschlossene Lektionen,
            XP, Trefferquote, Wiederholungen und deine Lerntage.
          </p>
        </div>
      ) : (
        <>
          <div className="progress-tiles">
            <section className="progress-tile">
              <h2>Abgeschlossene Lektionen</h2>
              <strong>
                {lessons.completed} / {lessons.published}
              </strong>
              <Meter percent={lessons.percent} />
              <small>{lessons.percent} % des veröffentlichten Kurses</small>
            </section>

            <section className="progress-tile">
              <h2>Verdiente XP</h2>
              <strong>{overview.xp}</strong>
              <small>Je Lektion einmalig beim ersten Abschluss</small>
            </section>

            <section className="progress-tile">
              <h2>Richtig im ersten Versuch</h2>
              <strong>{firstAttempt.rate === null ? '–' : `${firstAttempt.rate} %`}</strong>
              {firstAttempt.rate !== null ? <Meter percent={firstAttempt.rate} /> : null}
              <small>
                {firstAttempt.known > 0
                  ? `${firstAttempt.correct} von ${firstAttempt.known} Fragen in Lektionen`
                  : 'Noch keine erfassten Erstversuche'}
                {firstAttempt.unrecorded > 0
                  ? ` · ${firstAttempt.unrecorded} ältere Antworten ohne Versuchsdaten`
                  : ''}
              </small>
            </section>

            <section className="progress-tile">
              <h2>Heute fällig</h2>
              <strong>{overview.dueToday}</strong>
              <small>
                {overview.dueToday === 0
                  ? 'Keine Wiederholung offen'
                  : `${overview.dueToday === 1 ? 'Frage wartet' : 'Fragen warten'} auf Wiederholung`}
              </small>
            </section>
          </div>

          <section className="progress-panel" aria-labelledby="activity-heading">
            <div className="progress-panel-head">
              <h2 id="activity-heading">Aktive Lerntage</h2>
              <p>
                <strong>{activity.last7}</strong> von 7 · <strong>{activity.last30}</strong> von 30
              </p>
            </div>
            <figure className="activity-figure">
              <div className="activity-strip" role="img" aria-label={activitySummary}>
                {activity.days.map(({ day, active }) => (
                  <span
                    key={day}
                    className={`${active ? 'active' : ''} ${day === today ? 'today' : ''}`}
                    title={`${formatDay(day)}${active ? ' – aktiv' : ''}`}
                  />
                ))}
              </div>
              <figcaption>
                <span>{formatDay(activity.days[0].day)}</span>
                <span>{activitySummary}</span>
                <span>heute</span>
              </figcaption>
            </figure>
            <p className="progress-note">
              Als aktiv zählt ein Tag mit abgeschlossener Lektion oder beantworteter
              Wiederholungsfrage.
              {overview.undatedCompletions > 0
                ? ` ${overview.undatedCompletions} Abschlüsse stammen aus einer älteren Version ohne Datum und erscheinen hier nicht.`
                : ''}
            </p>
          </section>

          <section className="progress-panel" aria-labelledby="units-heading">
            <div className="progress-panel-head">
              <h2 id="units-heading">Fortschritt je Buchabschnitt</h2>
            </div>
            <ul className="unit-progress-list">
              {overview.units.map((unit) => (
                <li key={unit.id}>
                  <div>
                    <span>{unit.label}</span>
                    <strong>{unit.title}</strong>
                  </div>
                  <Meter percent={unit.percent} />
                  <small>
                    {unit.published === 0
                      ? 'Noch keine Lektionen veröffentlicht'
                      : `${unit.completed} von ${unit.published} Lektionen`}
                    {unit.planned > unit.published ? ` · ${unit.planned} geplant` : ''}
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      {overview.legacyReadChapters > 0 ? (
        <p className="progress-note">
          Von der bisherigen Website sind {overview.legacyReadChapters} gelesene Kapitel erhalten.
          Sie zählen nicht als abgeschlossene Lektionen in „{course.title}“.
        </p>
      ) : null}
    </div>
  );
}
