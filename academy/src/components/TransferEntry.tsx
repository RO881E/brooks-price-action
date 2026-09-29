import { useId, useMemo } from 'react';
import type { CourseOutline } from '../content/types';
import type { AcademyProgress } from '../features/progress';
import { planTransfer } from '../features/transferCheck';

/**
 * Einstieg in die Transferprüfung (F-17) unter „Üben“. Erscheint nur, wenn es
 * freigegebene Transferfälle gibt; sind alle noch gesperrt, sagt der Text das.
 */
export function TransferEntry({ course, progress, onOpen }: { course: CourseOutline; progress: AcademyProgress; onOpen: () => void }) {
  const ids = useId();
  const plan = useMemo(() => planTransfer(course, progress), [course, progress]);
  if (plan.approved === 0) return null;
  const count = plan.cases.length;
  const action =
    plan.status === 'active' ? 'Prüfung fortsetzen' : plan.status === 'done' ? 'Auswertung ansehen' : 'Zur Transferprüfung';
  return (
    <section className="transfer-entry" aria-labelledby={`${ids}-title`} data-mode="train">
      <div>
        <h2 id={`${ids}-title`}>Transferprüfung</h2>
        <p>
          {plan.status === 'none'
            ? 'Neue, ungesehene Fälle ohne Zwischenlösung – sie werden mit deinen abgeschlossenen Kapiteln zugänglich.'
            : `${count === 1 ? '1 neuer Fall' : `${count} neue Fälle`} ohne Zwischenlösung. Die Auflösung folgt nach dem letzten Fall${
                plan.status === 'done' ? '; ein weiterer Durchlauf zählt als Wiederholung' : ''
              }.`}
        </p>
      </div>
      <button type="button" className="secondary-button" onClick={onOpen}>
        {action}
      </button>
    </section>
  );
}
