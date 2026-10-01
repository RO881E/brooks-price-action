import { useEffect, useId, useRef, useState, type RefObject } from 'react';
import { BugReportForm } from './BugReportForm';
import type { LessonOutline } from '../content/types';

export interface GuideFacts {
  /** Titel des gewählten Kurses (mehrere Kurse). */
  courseTitle?: string;
  /** Erste noch offene Lektion – Ziel von „Erste Lektion starten“. */
  firstLesson?: LessonOutline;
  /** Freigegebene Trainerfälle insgesamt und davon bereits zugängliche. */
  publishedCases: number;
  availableCases: number;
}

/**
 * Inhalt der Einführung (F-18): je Weg ein Satz, dazu lokale Speicherung und
 * Sicherung. Der Trainer erscheint nur, wenn es freigegebene Fälle gibt; sind
 * alle noch gesperrt, sagt der Text das.
 */
function GuideContent({
  facts,
  headingId,
  headingRef,
}: {
  facts: GuideFacts;
  headingId: string;
  headingRef?: RefObject<HTMLHeadingElement | null>;
}) {
  return (
    <>
      <p className="eyebrow">Kurz erklärt</p>
      <h2 id={headingId} ref={headingRef} tabIndex={headingRef ? -1 : undefined}>
        So lernst du in der WQT Academy
      </h2>
      <p>
        Du lernst {facts.courseTitle ? `„${facts.courseTitle}“` : 'Price Action'} Schritt für Schritt – in kurzen
        Lektionen mit Fragen. Es gibt {facts.publishedCases > 0 ? 'vier' : 'drei'} Wege:
      </p>
      <ol className="guide-loop" aria-label="Der Lernrhythmus">
        <li>
          <strong>Lesen</strong> – eine kurze Lektion mit Fragen.
        </li>
        <li>
          <strong>Anwenden</strong> – die Situation an einem schematischen Chart entscheiden.
        </li>
        <li>
          <strong>Wiederholen</strong> – fällige Fragen kommen im richtigen Abstand zurück.
        </li>
      </ol>
      <dl className="guide-ways">
        <div>
          <dt>Lernpfad</dt>
          <dd>Kurze Lektionen mit Fragen; die nächste öffnet sich, sobald die vorherige abgeschlossen ist.</dd>
        </div>
        <div>
          <dt>Buchmodus</dt>
          <dd>Ein Kapitel als fortlaufender Text – mit denselben Fragen; deine Lesestelle bleibt gespeichert.</dd>
        </div>
        <div>
          <dt>Üben</dt>
          <dd>Fällige Fragen wiederholen und sehen, was du noch verwechselst.</dd>
        </div>
        {facts.publishedCases > 0 ? (
          <div>
            <dt>Chart trainieren</dt>
            <dd>
              Schematische Charts Bar für Bar: Long, Short oder Abwarten – mit Begründung und Auflösung.
              {facts.availableCases === 0
                ? ' Die Fälle werden frei, sobald du die zugehörigen Kapitel erreicht hast.'
                : ''}
            </dd>
          </div>
        ) : null}
      </dl>
      <p className="guide-storage">
        Dein Fortschritt bleibt nur in diesem Browser auf diesem Gerät – ohne Konto. Unter{' '}
        <strong>Einstellungen</strong> kannst du ihn als JSON-Datei sichern und wieder einspielen.
      </p>
    </>
  );
}

/** Willkommen beim ersten echten Besuch – im Lernpfad eingebettet, kein Overlay. */
export function FirstUseWelcome({
  facts,
  onStart,
  onDismiss,
}: {
  facts: GuideFacts;
  onStart: (lesson: LessonOutline) => void;
  onDismiss: () => void;
}) {
  const ids = useId();
  return (
    <section className="first-use-guide" aria-labelledby={`${ids}-title`}>
      <GuideContent facts={facts} headingId={`${ids}-title`} />
      <div className="guide-actions">
        {facts.firstLesson ? (
          <button type="button" className="primary-button" onClick={() => onStart(facts.firstLesson!)}>
            Erste Lektion starten: {facts.firstLesson.title}
          </button>
        ) : null}
        <button type="button" className="secondary-button" onClick={onDismiss}>
          Einführung schließen
        </button>
      </div>
      <p className="guide-hint">Die Einführung findest du jederzeit wieder über „Hilfe“ oben rechts.</p>
    </section>
  );
}

/** Dieselbe Einführung jederzeit als Dialog über „Hilfe“. */
export function GuideDialog({
  facts,
  returnFocusTo,
  onClose,
  onOpenSettings,
}: {
  facts: GuideFacts;
  returnFocusTo: RefObject<HTMLElement | null>;
  onClose: () => void;
  onOpenSettings: () => void;
}) {
  const ids = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const [reporting, setReporting] = useState(false);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = returnFocusTo.current;
    if (dialog && typeof dialog.showModal === 'function' && !dialog.open) dialog.showModal();
    // Fokus an den Anfang, damit Screenreader und Mobil oben beginnen.
    heading.current?.focus();
    return () => {
      if (dialog?.open) dialog.close();
      trigger?.focus({ preventScroll: true });
    };
  }, [returnFocusTo]);

  return (
    <dialog
      ref={dialogRef}
      className="guide-dialog"
      aria-labelledby={`${ids}-title`}
      onCancel={(event) => {
        event.preventDefault();
        onCloseRef.current();
      }}
    >
      <div className="guide-dialog-body">
        {reporting ? (
          <>
            <BugReportForm headingId={`${ids}-title`} onBack={() => setReporting(false)} />
            <div className="guide-actions">
              <button type="button" className="secondary-button" onClick={() => onCloseRef.current()}>
                Schließen
              </button>
            </div>
          </>
        ) : (
          <>
            <GuideContent facts={facts} headingId={`${ids}-title`} headingRef={heading} />
            <div className="guide-actions">
              <button type="button" className="primary-button" onClick={() => onCloseRef.current()}>
                Schließen
              </button>
              <button type="button" className="secondary-button" onClick={onOpenSettings}>
                Zu den Einstellungen
              </button>
              <button type="button" className="secondary-button" onClick={() => setReporting(true)}>
                Fehler melden
              </button>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
}
