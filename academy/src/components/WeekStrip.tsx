import type { WeekDay, WeekDayStatus } from '../features/goals';
import { Icon } from './Icon';

const LABEL: Record<WeekDayStatus, string> = {
  met: 'Ziel erreicht',
  active: 'gelernt',
  missed: 'kein Lerntag',
  open: 'heute noch offen',
  future: 'kommt noch',
};

/** Tage der Woche, an denen gelernt wurde (nur echte Lernaktivität zählt). */
export function learnedDays(week: readonly WeekDay[]): number {
  return week.filter((day) => day.status === 'met' || day.status === 'active').length;
}

/**
 * Wochenblick: sieben runde Punkte Mo–So. Gelernte Tage sind gefüllt; eine Pause ist
 * neutral (kein „verpasst“, keine Serienangst). Der Status steht zusätzlich als Text.
 */
export function WeekStrip({ week }: { week: readonly WeekDay[] }) {
  const learned = learnedDays(week);
  return (
    <div className="week-strip-wrap">
      <ol className="week-strip" aria-label="Wochenblick">
        {week.map((day) => (
          <li key={day.day} className={`${day.status}${day.isToday ? ' today' : ''}`}>
            <span className="week-dot" aria-hidden="true">
              {day.status === 'met' || day.status === 'active' ? <Icon name="check" size={16} /> : null}
            </span>
            <span className="week-day-label" aria-hidden="true">
              {day.label}
            </span>
            <span className="visually-hidden">
              {day.label}, {day.day}: {LABEL[day.status]}
            </span>
          </li>
        ))}
      </ol>
      <p className="week-summary">
        Diese Woche: <strong>{learned} von 7</strong> Tagen gelernt
      </p>
    </div>
  );
}
