import { useEffect, useId, useMemo, useRef, useState, type CSSProperties } from 'react';
import type { CaseBar } from '../content/barCaseTypes';
import type { OrderTask, SignalBarTask } from '../content/practiceTaskTypes';
import { orderTasks as allOrderTasks, signalBarTasks as allSignalTasks } from '../content/practiceTasks';
import type { CourseOutline, LessonOutline } from '../content/types';
import {
  approvedTasks,
  correctPositions,
  describeSignalBar,
  moveStep,
  nextTaskIndex,
  shuffledOrder,
  signalMissFeedback,
  unlockedOrderTasks,
  unlockedSignalTasks,
} from '../features/practiceTasks';
import { findLesson } from '../features/navigation';
import type { AcademyProgress } from '../features/progress';
import { BullSays } from './Bull';
import { FeedbackCue } from './FeedbackCue';
import { Icon } from './Icon';

/*
 * Übungsaufgaben aus Content-Pack C-04 (Stufe 4d): „Finde den Signal-Bar“ und „Ordne die
 * Schritte“. Reine Übung: zählt nichts, speichert nichts, ändert den Lernstand nicht. Solange
 * keine Aufgabe freigegeben ist, erscheint hier nichts.
 */

interface TaskProps {
  course: CourseOutline;
  progress: AcademyProgress;
  onOpenLesson?: (lesson: LessonOutline) => void;
  signalTasks?: readonly SignalBarTask[];
  orderTasks?: readonly OrderTask[];
}

export function PracticeTasks({ course, progress, onOpenLesson, signalTasks, orderTasks }: TaskProps) {
  return (
    <>
      <SignalBarGame course={course} progress={progress} onOpenLesson={onOpenLesson} tasks={signalTasks} />
      <OrderGame course={course} progress={progress} onOpenLesson={onOpenLesson} tasks={orderTasks} />
    </>
  );
}

function LessonLinks({
  course,
  lessonIds,
  onOpenLesson,
}: {
  course: CourseOutline;
  lessonIds: string[];
  onOpenLesson?: (lesson: LessonOutline) => void;
}) {
  if (!onOpenLesson) return null;
  const lessons = lessonIds.flatMap((id) => {
    const lesson = findLesson(course, id);
    return lesson ? [lesson] : [];
  });
  return (
    <p className="task-lessons">
      Nachlesen:{' '}
      {lessons.map((lesson, index) => (
        <span key={lesson.id}>
          {index > 0 ? ', ' : ''}
          <button
            type="button"
            className="link-button"
            aria-label={`Lektion öffnen: ${lesson.title}`}
            onClick={() => onOpenLesson(lesson)}
          >
            {lesson.title}
          </button>
        </span>
      ))}
    </p>
  );
}

/* ------------------------------------------------------------ Finde den Bar */

const WIDTH = 640;
const HEIGHT = 260;
const PAD_X = 18;
const PAD_Y = 16;

function SignalChart({
  bars,
  found,
  missed,
  disabled,
  onPick,
}: {
  bars: CaseBar[];
  found: number | null;
  missed: ReadonlySet<number>;
  disabled: boolean;
  onPick: (index: number) => void;
}) {
  const low = Math.min(...bars.map((bar) => bar.low));
  const high = Math.max(...bars.map((bar) => bar.high));
  const span = high - low || 1;
  const slot = (WIDTH - PAD_X * 2) / bars.length;
  const body = Math.max(6, Math.min(24, slot * 0.5));
  const y = (value: number) => PAD_Y + ((high - value) / span) * (HEIGHT - PAD_Y * 2);
  const x = (index: number) => PAD_X + slot * index + slot / 2;

  return (
    <div className="signal-chart">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
        {bars.map((bar, index) => {
          const tone = bar.close > bar.open ? 'up' : bar.close < bar.open ? 'down' : 'flat';
          const top = y(Math.max(bar.open, bar.close));
          const bottom = y(Math.min(bar.open, bar.close));
          const state = found === index ? ' is-found' : missed.has(index) ? ' is-missed' : '';
          return (
            <g key={index} className={`case-bar ${tone}${state}`}>
              {state ? (
                <rect className="signal-mark" x={PAD_X + slot * index} y={0} width={slot} height={HEIGHT} />
              ) : null}
              <line x1={x(index)} x2={x(index)} y1={y(bar.high)} y2={y(bar.low)} />
              <rect x={x(index) - body / 2} y={top} width={body} height={Math.max(2, bottom - top)} rx={2} />
            </g>
          );
        })}
      </svg>
      <ol className="signal-hits" aria-label="Bars des Charts">
        {bars.map((bar, index) => (
          <li key={index}>
            <button
              type="button"
              className="signal-hit"
              disabled={disabled}
              aria-label={`${describeSignalBar(bar, index)}${
                found === index ? ' – gesuchter Bar, gefunden' : missed.has(index) ? ' – bereits getippt, nicht der gesuchte' : ''
              }`}
              onClick={() => onPick(index)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

export function SignalBarGame({
  course,
  progress,
  onOpenLesson,
  tasks = allSignalTasks,
}: Omit<TaskProps, 'signalTasks' | 'orderTasks'> & { tasks?: readonly SignalBarTask[] }) {
  const ids = useId();
  const available = useMemo(() => unlockedSignalTasks(progress, tasks), [progress, tasks]);
  const [current, setCurrent] = useState<{ index: number; seed: number } | null>(null);
  const [missed, setMissed] = useState<Set<number>>(new Set());
  const [found, setFound] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [rounds, setRounds] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  const previous = useRef<number | null>(null);

  if (approvedTasks(tasks).length === 0) return null;

  const task = current ? available[current.index] : undefined;

  const begin = () => {
    const seed = Date.now() % 2147483647;
    const index = nextTaskIndex(available.length, seed, previous.current);
    previous.current = index;
    setCurrent({ index, seed });
    setMissed(new Set());
    setFound(null);
    setMessage('');
    setRounds((count) => count + 1);
  };
  const stop = () => {
    setCurrent(null);
    previous.current = null;
  };

  const pick = (index: number) => {
    if (!task || found !== null) return;
    if (index === task.targetBarIndex) {
      setFound(index);
      setMessage('Gefunden!');
      window.setTimeout(() => heading.current?.focus(), 0);
      return;
    }
    setMissed((set) => new Set(set).add(index));
    setMessage(`Bar ${index + 1}: ${signalMissFeedback(task, index)}`);
  };

  const reveal = () => {
    if (!task) return;
    setFound(task.targetBarIndex);
    setMessage('Lösung gezeigt.');
    window.setTimeout(() => heading.current?.focus(), 0);
  };

  return (
    <section className="topic-practice signal-game" aria-labelledby={`${ids}-title`}>
      <h2 id={`${ids}-title`} tabIndex={-1} ref={heading}>
        Finde den Bar
      </h2>
      {!task ? (
        <>
          <p className="topic-intro">
            Tippe im Chart auf den Bar, der zur Frage passt. Die Übung zählt nichts, ändert deinen Lernstand nicht und
            speichert nichts.
          </p>
          {available.length > 0 ? (
            <button type="button" className="primary-button" onClick={begin}>
              Spielen ({available.length} {available.length === 1 ? 'Aufgabe' : 'Aufgaben'} bereit)
            </button>
          ) : (
            <p className="topic-facts">
              Noch keine Aufgabe freigeschaltet. Sie öffnen sich, sobald du die zugehörigen Lektionen abgeschlossen hast.
            </p>
          )}
        </>
      ) : (
        <>
          <h3 className="task-title">{task.title}</h3>
          <p className="topic-intro">{task.prompt}</p>
          <SignalChart bars={task.bars} found={found} missed={missed} disabled={found !== null} onPick={pick} />
          <p className="match-status" role="status" key={rounds}>
            {message}
          </p>
          {found !== null ? (
            <>
              <BullSays mood={missed.size === 0 && message === 'Gefunden!' ? 'cheer' : 'happy'}>{task.explanation}</BullSays>
              <FeedbackCue kind="correct" active={message === 'Gefunden!'} />
              <LessonLinks course={course} lessonIds={task.lessonIds} onOpenLesson={onOpenLesson} />
            </>
          ) : null}
          <div className="topic-actions">
            {found !== null ? (
              <button type="button" className="primary-button" onClick={begin}>
                Nächste Aufgabe
              </button>
            ) : missed.size >= 2 ? (
              <button type="button" className="secondary-button" onClick={reveal}>
                Lösung zeigen
              </button>
            ) : null}
            <button type="button" className="secondary-button" onClick={stop}>
              Beenden
            </button>
          </div>
          <p className="match-note">Fehlversuche in dieser Aufgabe: {missed.size}. Nichts davon wird gespeichert.</p>
        </>
      )}
    </section>
  );
}

/* ------------------------------------------------------------ Ordne die Schritte */

export function OrderGame({
  course,
  progress,
  onOpenLesson,
  tasks = allOrderTasks,
}: Omit<TaskProps, 'signalTasks' | 'orderTasks'> & { tasks?: readonly OrderTask[] }) {
  const ids = useId();
  const available = useMemo(() => unlockedOrderTasks(progress, tasks), [progress, tasks]);
  const [current, setCurrent] = useState<{ index: number; order: string[] } | null>(null);
  const [checked, setChecked] = useState<boolean[] | null>(null);
  const [solved, setSolved] = useState(false);
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [focusRequest, setFocusRequest] = useState<{ id: string; dir: 'up' | 'down' } | null>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const list = useRef<HTMLOListElement>(null);
  const previous = useRef<number | null>(null);

  const task = current ? available[current.index] : undefined;

  useEffect(() => {
    if (!focusRequest || !list.current) return;
    const item = list.current.querySelector<HTMLElement>(`[data-step="${focusRequest.id}"]`);
    const wanted = item?.querySelector<HTMLButtonElement>(`button[data-dir="${focusRequest.dir}"]`);
    const other = item?.querySelector<HTMLButtonElement>(
      `button[data-dir="${focusRequest.dir === 'up' ? 'down' : 'up'}"]`,
    );
    (wanted && !wanted.disabled ? wanted : other)?.focus();
    setFocusRequest(null);
  }, [focusRequest]);

  if (approvedTasks(tasks).length === 0) return null;

  const begin = () => {
    const seed = Date.now() % 2147483647;
    const index = nextTaskIndex(available.length, seed, previous.current);
    previous.current = index;
    const target = available[index];
    setCurrent({ index, order: shuffledOrder(target.steps.length, seed).map((position) => target.steps[position].id) });
    setChecked(null);
    setSolved(false);
    setMessage('');
    setAttempts(0);
  };
  const stop = () => {
    setCurrent(null);
    previous.current = null;
  };

  const textOf = (stepId: string) => task?.steps.find((step) => step.id === stepId)?.text ?? '';

  const move = (stepId: string, delta: -1 | 1) => {
    if (!current || solved) return;
    const from = current.order.indexOf(stepId);
    const to = from + delta;
    if (to < 0 || to >= current.order.length) return;
    setCurrent({ ...current, order: moveStep(current.order, from, to) });
    setChecked(null);
    setMessage(`Schritt ${from + 1} steht jetzt an Position ${to + 1} von ${current.order.length}.`);
    setFocusRequest({ id: stepId, dir: delta === -1 ? 'up' : 'down' });
  };

  const check = () => {
    if (!task || !current) return;
    const result = correctPositions(current.order, task);
    setAttempts((count) => count + 1);
    setChecked(result);
    if (result.every(Boolean)) {
      setSolved(true);
      setMessage('Richtig! Alle Schritte stehen an der richtigen Stelle.');
      window.setTimeout(() => heading.current?.focus(), 0);
    } else {
      const right = result.filter(Boolean).length;
      setMessage(`${right} von ${result.length} Schritten stehen an der richtigen Stelle. Verschiebe die anderen und prüfe noch einmal.`);
    }
  };

  const reveal = () => {
    if (!task || !current) return;
    setCurrent({ ...current, order: task.steps.map((step) => step.id) });
    setChecked(task.steps.map(() => true));
    setSolved(true);
    setMessage('Lösung gezeigt.');
    window.setTimeout(() => heading.current?.focus(), 0);
  };

  return (
    <section className="topic-practice order-game" aria-labelledby={`${ids}-title`}>
      <h2 id={`${ids}-title`} tabIndex={-1} ref={heading}>
        Ordne die Schritte
      </h2>
      {!task || !current ? (
        <>
          <p className="topic-intro">
            Bringe die Schritte einer Analyse in die richtige Reihenfolge. Die Übung zählt nichts, ändert deinen Lernstand
            nicht und speichert nichts.
          </p>
          {available.length > 0 ? (
            <button type="button" className="primary-button" onClick={begin}>
              Spielen ({available.length} {available.length === 1 ? 'Aufgabe' : 'Aufgaben'} bereit)
            </button>
          ) : (
            <p className="topic-facts">
              Noch keine Aufgabe freigeschaltet. Sie öffnen sich, sobald du die zugehörigen Lektionen abgeschlossen hast.
            </p>
          )}
        </>
      ) : (
        <>
          <h3 className="task-title">{task.title}</h3>
          <p className="topic-intro">{task.prompt}</p>
          <ol className="order-steps" ref={list} aria-label="Schritte in deiner Reihenfolge">
            {current.order.map((stepId, position) => {
              const state = checked ? (checked[position] ? 'right' : 'wrong') : '';
              return (
                <li key={stepId} data-step={stepId} className={`order-step${state ? ` is-${state}` : ''}`}>
                  <span className="order-number" aria-hidden="true">
                    {position + 1}
                  </span>
                  <span className="order-text">
                    {textOf(stepId)}
                    {state ? (
                      <span className="visually-hidden">{state === 'right' ? ' – an der richtigen Stelle' : ' – noch nicht an der richtigen Stelle'}</span>
                    ) : null}
                  </span>
                  <span className="order-buttons">
                    <button
                      type="button"
                      className="order-move"
                      data-dir="up"
                      disabled={solved || position === 0}
                      aria-label={`Nach oben: ${textOf(stepId)}`}
                      onClick={() => move(stepId, -1)}
                    >
                      <span aria-hidden="true" style={{ display: 'inline-block', transform: 'rotate(180deg)' } as CSSProperties}>
                        <Icon name="chevron" size={18} />
                      </span>
                    </button>
                    <button
                      type="button"
                      className="order-move"
                      data-dir="down"
                      disabled={solved || position === current.order.length - 1}
                      aria-label={`Nach unten: ${textOf(stepId)}`}
                      onClick={() => move(stepId, 1)}
                    >
                      <span aria-hidden="true">
                        <Icon name="chevron" size={18} />
                      </span>
                    </button>
                  </span>
                </li>
              );
            })}
          </ol>
          <p className="match-status" role="status">
            {message}
          </p>
          {solved ? (
            <>
              <BullSays mood={attempts <= 1 ? 'cheer' : 'happy'}>{task.explanation}</BullSays>
              <FeedbackCue kind="correct" active={solved && message.startsWith('Richtig')} />
              <LessonLinks course={course} lessonIds={task.lessonIds} onOpenLesson={onOpenLesson} />
            </>
          ) : null}
          <div className="topic-actions">
            {solved ? (
              <button type="button" className="primary-button" onClick={begin}>
                Nächste Aufgabe
              </button>
            ) : (
              <button type="button" className="primary-button" onClick={check}>
                Reihenfolge prüfen
              </button>
            )}
            {!solved && attempts >= 2 ? (
              <button type="button" className="secondary-button" onClick={reveal}>
                Lösung zeigen
              </button>
            ) : null}
            <button type="button" className="secondary-button" onClick={stop}>
              Beenden
            </button>
          </div>
          <p className="match-note">Prüfversuche: {attempts}. Nichts davon wird gespeichert.</p>
        </>
      )}
    </section>
  );
}
