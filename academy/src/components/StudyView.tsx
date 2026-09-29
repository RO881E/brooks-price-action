import { useEffect, useId, useRef, useState } from 'react';
import type { LessonOutline } from '../content/types';
import { STUDY_MINUTES, visibleStudyItems, type StudyItem, type StudyMinutes, type StudyPlan } from '../features/studySession';

/** Einstieg „Kurz lernen“ im Lernpfad (F-23). */
export function StudyEntry({ onChoose }: { onChoose: (minutes: StudyMinutes) => void }) {
  const ids = useId();
  return (
    <section className="study-entry" aria-labelledby={`${ids}-title`}>
      <div>
        <h2 id={`${ids}-title`}>Kurz lernen</h2>
        <p>Wie viel Zeit hast du ungefähr? Du bekommst eine kurze, feste Auswahl aus deinem Stand.</p>
      </div>
      <div className="study-entry-actions">
        {STUDY_MINUTES.map((minutes) => (
          <button key={minutes} type="button" className="secondary-button" onClick={() => onChoose(minutes)}>
            ≈ {minutes} Minuten
          </button>
        ))}
      </div>
    </section>
  );
}

function itemTitle(item: StudyItem): string {
  switch (item.kind) {
    case 'review-resume':
      return 'Wiederholungsrunde fortsetzen';
    case 'review':
      return item.questionIds.length === 1 ? '1 fällige Frage wiederholen' : `${item.questionIds.length} fällige Fragen wiederholen`;
    case 'lesson':
      return item.resume ? `Lektion fortsetzen: ${item.lesson.title}` : `Nächste Lektion: ${item.lesson.title}`;
    case 'case':
      return item.resume ? `Chart-Training fortsetzen: ${item.barCase.title}` : `Chart trainieren: ${item.barCase.title}`;
  }
}

function itemDetail(item: StudyItem): string {
  switch (item.kind) {
    case 'review-resume':
      return item.remaining === 1 ? 'Noch eine Frage in deiner laufenden Runde.' : `Noch ${item.remaining} Fragen in deiner laufenden Runde.`;
    case 'review':
      return `Aus ${item.units.map((unit) => unit.label).join(', ')}.${
        item.totalDue > item.questionIds.length ? ` Insgesamt sind ${item.totalDue} Fragen fällig; die ältesten zuerst.` : ''
      }`;
    case 'lesson':
      return item.resume
        ? `${item.unit.label} · weiter bei Schritt ${item.stepIndex + 1} von ${item.lesson.steps.length}.`
        : `${item.unit.label} · ${item.lesson.steps.length} Schritte.`;
    case 'case':
      return `${item.unitLabel} · schematischer Lernfall, Bar für Bar.`;
  }
}

function actionLabel(item: StudyItem): string {
  switch (item.kind) {
    case 'review-resume':
    case 'review':
      return item.kind === 'review' ? 'Wiederholung starten' : 'Fortsetzen';
    case 'lesson':
      return item.resume ? 'Lektion fortsetzen' : 'Lektion starten';
    case 'case':
      return item.resume ? 'Fall fortsetzen' : 'Fall öffnen';
  }
}

interface Props {
  plan: StudyPlan;
  onMinutes: (minutes: StudyMinutes) => void;
  onReview: (questionIds: string[] | null) => void;
  onLesson: (lesson: LessonOutline) => void;
  onCase: (caseId: string) => void;
  onBack: () => void;
}

/**
 * „Kurz lernen“ (F-23): feste Reihenfolge – Wiederholung, Lektion, Trainerfall.
 * Kein Timer und keine Restzeit; Übersprungenes gilt nur für diese Ansicht.
 * Die Aktionen öffnen die vorhandenen Abläufe mit deren Regeln (XP, Lerntag).
 */
export function StudyView({ plan, onMinutes, onReview, onLesson, onCase, onBack }: Props) {
  const ids = useId();
  const [skipped, setSkipped] = useState<Set<string>>(() => new Set());
  const heading = useRef<HTMLHeadingElement>(null);
  const items = visibleStudyItems(plan, skipped);
  const skippedItems = plan.items.filter((item) => skipped.has(item.key));

  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
  }, []);

  const act = (item: StudyItem) => {
    if (item.kind === 'review') onReview(item.questionIds);
    else if (item.kind === 'review-resume') onReview(null);
    else if (item.kind === 'lesson') onLesson(item.lesson);
    else onCase(item.barCase.id);
  };

  const skip = (key: string) => {
    setSkipped((previous) => new Set(previous).add(key));
    // Fokus bleibt in der Liste: auf die Überschrift, damit nichts verloren geht.
    window.requestAnimationFrame(() => heading.current?.focus());
  };

  return (
    <div className="page-shell study-page">
      <header className="page-heading">
        <p className="eyebrow">Kurz lernen</p>
        <h1 ref={heading} tabIndex={-1}>
          Für etwa {plan.minutes} Minuten
        </h1>
        <p>
          Ungefährer Rahmen, kein Timer. Die Vorschläge richten sich nach deinem aktuellen Stand: erst fällige
          Wiederholungen, dann die nächste Lektion{plan.minutes === 20 ? ', dann ein Chart-Training' : ''}. Jeder
          Schritt lässt sich überspringen.
        </p>
        <fieldset className="mistake-filter study-minutes">
          <legend className="visually-hidden">Zeitrahmen</legend>
          {STUDY_MINUTES.map((minutes) => (
            <label key={minutes}>
              <input
                type="radio"
                name={`${ids}-minutes`}
                checked={plan.minutes === minutes}
                onChange={() => onMinutes(minutes)}
              />
              <span>≈ {minutes} Minuten</span>
            </label>
          ))}
        </fieldset>
      </header>

      {plan.items.length === 0 ? (
        <div className="empty-state">
          <strong>Gerade ist alles erledigt</strong>
          <p>Keine Frage ist fällig und keine Lektion offen. Schau später wieder vorbei.</p>
        </div>
      ) : items.length === 0 ? (
        <div className="empty-state" role="status">
          <strong>Alle Vorschläge übersprungen</strong>
          <p>Du kannst sie unten zurückholen oder die Sitzung verlassen.</p>
        </div>
      ) : (
        <ol className="study-list">
          {items.map((item) => (
            <li key={item.key}>
              <article className="study-card" aria-labelledby={`${ids}-${item.key}`}>
                <h2 id={`${ids}-${item.key}`}>{itemTitle(item)}</h2>
                <p>{itemDetail(item)}</p>
                <div className="study-actions">
                  <button type="button" className="primary-button" onClick={() => act(item)}>
                    {actionLabel(item)}
                  </button>
                  <button
                    type="button"
                    className="link-button"
                    onClick={() => skip(item.key)}
                    aria-label={`Überspringen: ${itemTitle(item)}`}
                  >
                    Überspringen
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ol>
      )}

      {skippedItems.length ? (
        <div className="study-skipped">
          <p>Übersprungen (nur bis zum Neuladen):</p>
          <ul>
            {skippedItems.map((item) => (
              <li key={item.key}>
                <span>{itemTitle(item)}</span>
                <button
                  type="button"
                  className="link-button"
                  onClick={() =>
                    setSkipped((previous) => {
                      const next = new Set(previous);
                      next.delete(item.key);
                      return next;
                    })
                  }
                  aria-label={`Zurückholen: ${itemTitle(item)}`}
                >
                  Zurückholen
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="study-footer">
        <button type="button" className="secondary-button" onClick={onBack}>
          Sitzung verlassen
        </button>
      </div>
    </div>
  );
}
