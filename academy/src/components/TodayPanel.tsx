import { useId } from 'react';
import type { LessonOutline, UnitOutline } from '../content/types';
import type { StudyMinutes } from '../features/studySession';
import type { TodayAction, TodayPlan } from '../features/today';
import { StudyEntry } from './StudyView';

interface Props {
  plan: TodayPlan;
  onLesson: (lesson: LessonOutline) => void;
  /** Startet die fällige Runde bzw. setzt die laufende fort. */
  onReview: () => void;
  /** Öffnet nur die Übersicht „Üben“. */
  onPractice: () => void;
  onTrain: (caseId: string) => void;
  onRead: (unit: UnitOutline, lesson: LessonOutline) => void;
  onStudy: (minutes: StudyMinutes) => void;
}

function describe(action: TodayAction): { title: string; detail: string; label: string } | null {
  switch (action.kind) {
    case 'review-resume':
      return {
        title: 'Deine Wiederholungsrunde wartet',
        detail: action.remaining === 1 ? 'Noch eine Frage.' : `Noch ${action.remaining} Fragen.`,
        label: 'Wiederholungsrunde fortsetzen',
      };
    case 'lesson-resume':
      return {
        title: action.lesson.title,
        detail: `Du warst bei Schritt ${action.stepIndex + 1} von ${action.lesson.steps.length}.`,
        label: 'Lektion fortsetzen',
      };
    case 'review-due':
      return {
        title: action.count === 1 ? '1 Frage ist fällig' : `${action.count} Fragen sind fällig`,
        detail: 'Kurz wiederholen, was du schon gelernt hast – Fehler werden erklärt, nicht bestraft.',
        label: 'Fällige Fragen wiederholen',
      };
    case 'lesson-next':
      return {
        title: action.lesson.title,
        detail: `${action.lesson.durationMinutes} Min · ${action.lesson.summary}`,
        label: 'Nächste Lektion beginnen',
      };
    case 'train':
      return {
        title: action.title,
        detail: action.resume ? 'Deine begonnene Runde wartet.' : 'Ein schematischer Lernfall, Bar für Bar.',
        label: action.resume ? 'Chart-Training fortsetzen' : 'Chart trainieren',
      };
    case 'done':
      return null;
  }
}

/**
 * Startansicht „Heute“ (P06): eine primäre nächste Aktion aus dem echten
 * Lernstand, darunter Lesen, Kurzlernen und Fälliges.
 */
export function TodayPanel({ plan, onLesson, onReview, onPractice, onTrain, onRead, onStudy }: Props) {
  const ids = useId();
  const info = describe(plan.primary);
  const act = () => {
    const action = plan.primary;
    if (action.kind === 'review-resume' || action.kind === 'review-due') onReview();
    else if (action.kind === 'lesson-resume' || action.kind === 'lesson-next') onLesson(action.lesson);
    else if (action.kind === 'train') onTrain(action.caseId);
  };
  return (
    <section className="today-panel" aria-labelledby={`${ids}-title`}>
      <h2 id={`${ids}-title`} className="visually-hidden">
        Dein nächster Schritt
      </h2>
      <div className="today-primary" data-mode={plan.primary.kind === 'train' ? 'train' : plan.primary.kind.startsWith('review') ? 'review' : 'read'}>
        <p className="eyebrow">Jetzt dran</p>
        {info ? (
          <>
            <h3>{info.title}</h3>
            <p>{info.detail}</p>
            <button type="button" className="primary-button" onClick={act}>
              {info.label}
            </button>
          </>
        ) : (
          <>
            <h3>Alles erledigt</h3>
            <p>Du hast alle veröffentlichten Lektionen abgeschlossen und nichts ist fällig. Schau später wieder vorbei.</p>
          </>
        )}
      </div>
      <div className="today-grid">
        {plan.reading ? (
          <article className="today-tile" data-mode="read" aria-labelledby={`${ids}-read`}>
            <h3 id={`${ids}-read`}>Lesen</h3>
            <p>{plan.reading.resume ? 'Zuletzt gelesen' : 'Nächster Abschnitt'}: {plan.reading.unit.label} · {plan.reading.unit.title}</p>
            <button type="button" className="secondary-button" onClick={() => onRead(plan.reading!.unit, plan.reading!.lesson)}>
              Weiter im Buchmodus
            </button>
          </article>
        ) : null}
        <div className="today-tile today-study" data-mode="practice">
          <StudyEntry onChoose={onStudy} />
        </div>
        <article className="today-tile" data-mode="review" aria-labelledby={`${ids}-review`}>
          <h3 id={`${ids}-review`}>Wiederholen</h3>
          <p>{plan.dueCount > 0 ? (plan.dueCount === 1 ? '1 Frage ist heute fällig.' : `${plan.dueCount} Fragen sind heute fällig.`) : 'Heute ist nichts fällig.'}</p>
          <button type="button" className="secondary-button" onClick={onPractice}>
            Zum Üben
          </button>
        </article>
      </div>
    </section>
  );
}
