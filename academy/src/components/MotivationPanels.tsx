import { useId } from 'react';
import type { CourseOutline } from '../content/types';
import type { GoalOverview } from '../features/goals';
import type { Mission } from '../features/missions';
import type { ProgressOverview } from '../features/progressStats';
import type { ProgressSummary as Summary } from '../features/progressSummary';
import { Bull } from './Bull';
import { Icon } from './Icon';

function formatDate(day: string): string {
  const [year, month, date] = day.split('-');
  return `${date}.${month}.${year}`;
}

/**
 * Überblick: vier Kennzahlen in den Farben der Lernmodi. Die Zahlen stammen
 * aus dem gespeicherten Zustand; die Beschriftung nennt jede Zahl ausdrücklich.
 */
export function ProgressSummary({ overview, summary, goals }: { overview: ProgressOverview; summary: Summary; goals: GoalOverview }) {
  const ids = useId();
  const { lessons } = overview;
  return (
    <section className="summary-panel" aria-labelledby={`${ids}-title`}>
      <h2 id={`${ids}-title`}>Dein Überblick</h2>
      <ul className="summary-list">
        <li data-mode="read">
          <span className="summary-label">Lesen</span>
          <strong>
            {lessons.completed} von {lessons.published}
          </strong>
          <small>Lektionen abgeschlossen</small>
          <div className="stat-meter" aria-hidden="true">
            <span style={{ width: `${lessons.percent}%` }} />
          </div>
        </li>
        <li data-mode="review">
          <span className="summary-label">Wiederholen</span>
          <strong>{summary.reviewedQuestions}</strong>
          <small>{summary.reviewedQuestions === 1 ? 'Frage wiederholt' : 'Fragen wiederholt'}</small>
        </li>
        {/* Kurse ohne Trainerfälle (mehrere Kurse) zeigen diese Kennzahl nicht. */}
        {summary.totalCases > 0 ? (
          <li data-mode="train">
            <span className="summary-label">Trainieren</span>
            <strong>
              {summary.trainedCases} von {summary.totalCases}
            </strong>
            <small>Trainerfällen bearbeitet</small>
          </li>
        ) : null}
        <li data-mode="progress">
          <span className="summary-label">Serie</span>
          <strong>{goals.streak.current}</strong>
          <small>{goals.streak.current === 1 ? 'Lerntag in Folge' : 'Lerntage in Folge'}</small>
        </li>
      </ul>
      <p className="summary-note">
        {overview.xp} XP insgesamt – je Lektion einmalig beim ersten Abschluss. Diese Zahlen zeigen deinen Lernweg, nicht
        wie ein echter Markt reagiert.
      </p>
    </section>
  );
}

/** Freiwillige Tagesvorschläge: kein Zwang, keine Serie, keine Strafe. */
export function MissionList({
  missions,
  onStart,
}: {
  missions: Mission[];
  onStart: (mission: Mission) => void;
}) {
  const ids = useId();
  return (
    <section className="progress-panel mission-panel" aria-labelledby={`${ids}-title`}>
      <div className="progress-panel-head">
        <h2 id={`${ids}-title`}>Kleine Vorschläge für heute</h2>
        <p>freiwillig</p>
      </div>
      {missions.length > 0 ? (
        <p className={`mission-chest${missions.every((mission) => mission.done) ? ' open' : ''}`}>
          <span className="mission-chest-icon" aria-hidden="true">
            <Icon name={missions.every((mission) => mission.done) ? 'chest-open' : 'chest'} size={28} />
          </span>
          {missions.every((mission) => mission.done) ? (
            <>
              <Bull mood="cheer" size={40} />
              <span>Truhe offen – alle Vorschläge für heute sind erledigt. Bo freut sich mit dir!</span>
            </>
          ) : (
            <span>
              Noch {missions.filter((mission) => !mission.done).length} von {missions.length} Vorschlägen – dann öffnet sich die Truhe.
            </span>
          )}
        </p>
      ) : null}
      {missions.length === 0 ? (
        <p className="progress-note">Heute gibt es keine offenen Vorschläge – du bist auf dem Laufenden.</p>
      ) : (
        <ul className="mission-list">
          {missions.map((mission) => (
            <li key={mission.kind} className={mission.done ? 'done' : ''} data-mode={mission.kind === 'review' ? 'review' : mission.kind === 'train' ? 'train' : 'read'}>
              <span className="mission-mark" aria-hidden="true">
                {mission.done ? '✓' : '○'}
              </span>
              <span className="mission-copy">
                <strong>{mission.title}</strong>
                <small>{mission.detail}</small>
              </span>
              {mission.done ? (
                <span className="mission-state">erledigt</span>
              ) : (
                <button type="button" className="secondary-button" onClick={() => onStart(mission)}>
                  {mission.kind === 'review' ? 'Runde starten' : mission.kind === 'lesson' ? 'Lektion starten' : 'Fall öffnen'}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      <p className="progress-note">Vorschläge zählen nichts: Erst eine abgeschlossene Lektion oder Runde ist ein Lerntag.</p>
    </section>
  );
}

/** Abzeichen: die vorhandenen einmaligen Meilensteine mit Symbol und erklärtem Kriterium. */
export function BadgeGrid({ goals }: { goals: GoalOverview; course?: CourseOutline }) {
  const ids = useId();
  const achieved = goals.milestones.filter((milestone) => milestone.achievedDay).length;
  return (
    <section className="progress-panel" aria-labelledby={`${ids}-title`}>
      <div className="progress-panel-head">
        <h2 id={`${ids}-title`}>Meilensteine</h2>
        <p>
          <strong>{achieved}</strong> von {goals.milestones.length}
        </p>
      </div>
      <ul className="badge-grid">
        {goals.milestones.map((milestone) => (
          <li key={milestone.id} className={milestone.achievedDay ? 'earned' : 'open'}>
            <span className="badge-symbol" aria-hidden="true">
              {milestone.symbol}
            </span>
            <span className="badge-copy">
              <strong>{milestone.title}</strong>
              <small>{milestone.description}</small>
              <em>{milestone.achievedDay ? `Erhalten am ${formatDate(milestone.achievedDay)}` : 'Noch offen'}</em>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
