import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { priceActionTrendsCourse } from '../content/course';
import { orderTasks, signalBarTasks } from '../content/practiceTasks';
import { completeLesson, createEmptyProgress } from '../features/progress';
import { OrderGame, PracticeTasks, SignalBarGame } from './PracticeTasks';

const course = toCourseOutline(priceActionTrendsCourse);
const approve = <T extends { status: string }>(task: T): T => ({ ...task, status: 'approved' });
const signal = approve(signalBarTasks[0]);
const order = approve(orderTasks[0]);

const progressWith = (lessonIds: string[]) =>
  lessonIds.reduce((state, id) => completeLesson(state, id, 10, '2026-09-20T08:00:00.000Z'), createEmptyProgress());

describe('Übungsaufgaben (Stufe 4d)', () => {
  afterEach(cleanup);

  it('Entwürfe bleiben unsichtbar', () => {
    const { container } = render(
      <PracticeTasks
        course={course}
        progress={progressWith(signal.lessonIds)}
        signalTasks={[{ ...signal, status: 'draft' }]}
        orderTasks={[{ ...order, status: 'draft' }]}
      />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('freigegeben, aber Lektionen fehlen: erklärt die Freischaltung', () => {
    render(<SignalBarGame course={course} progress={createEmptyProgress()} tasks={[signal]} />);
    expect(screen.getByText(/Noch keine Aufgabe freigeschaltet/)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /^Spielen/ })).toBeNull();
  });

  it('Finde den Bar: Hinweis bei falschem Tipp, Auflösung beim richtigen', () => {
    render(<SignalBarGame course={course} progress={progressWith(signal.lessonIds)} tasks={[signal]} />);
    fireEvent.click(screen.getByRole('button', { name: /^Spielen/ }));
    const hits = screen.getAllByRole('button', { name: /^Bar \d+:/ });
    expect(hits).toHaveLength(signal.bars.length);

    fireEvent.click(hits[signal.hints[0].barIndex]);
    expect(screen.getByRole('status')).toHaveTextContent(signal.hints[0].text);
    expect(screen.queryByRole('button', { name: 'Lösung zeigen' })).toBeNull();

    fireEvent.click(hits[0]);
    expect(screen.getByRole('button', { name: 'Lösung zeigen' })).toBeInTheDocument();

    fireEvent.click(hits[signal.targetBarIndex]);
    expect(screen.getByRole('status')).toHaveTextContent('Gefunden!');
    expect(screen.getByText(signal.explanation)).toBeInTheDocument();
    for (const hit of screen.getAllByRole('button', { name: /^Bar \d+:/ })) expect(hit).toBeDisabled();
  });

  it('Ordne die Schritte: falsche Reihenfolge wird erklärt, richtige gelöst', () => {
    render(<OrderGame course={course} progress={progressWith(order.lessonIds)} tasks={[order]} />);
    fireEvent.click(screen.getByRole('button', { name: /^Spielen/ }));
    const list = screen.getByRole('list', { name: 'Schritte in deiner Reihenfolge' });

    fireEvent.click(screen.getByRole('button', { name: 'Reihenfolge prüfen' }));
    expect(screen.getByRole('status')).toHaveTextContent(`von ${order.steps.length} Schritten stehen an der richtigen Stelle`);

    for (const [position, step] of order.steps.entries()) {
      for (let guard = 0; guard < order.steps.length; guard += 1) {
        const texts = within(list).getAllByRole('listitem').map((item) => item.textContent ?? '');
        if (texts.findIndex((text) => text.includes(step.text)) <= position) break;
        fireEvent.click(within(list).getByRole('button', { name: `Nach oben: ${step.text}` }));
      }
    }
    fireEvent.click(screen.getByRole('button', { name: 'Reihenfolge prüfen' }));
    expect(screen.getByRole('status')).toHaveTextContent('Richtig!');
    expect(screen.getByText(order.explanation)).toBeInTheDocument();
  });
});
