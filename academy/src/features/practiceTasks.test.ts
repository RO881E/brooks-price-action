import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { brooksTrendsCourse } from '../content/course';
import { orderTasks, signalBarTasks } from '../content/practiceTasks';
import { createEmptyProgress } from './progress';
import {
  correctPositions,
  moveStep,
  nextTaskIndex,
  ruleMatches,
  shuffledOrder,
  signalMissFeedback,
  unlockedOrderTasks,
  unlockedSignalTasks,
} from './practiceTasks';
import { validateOrderTasks, validateSignalTasks } from './practiceTaskValidation';

const courseOutline = toCourseOutline(brooksTrendsCourse);

describe('C-04 Aufgaben (Vertrag)', () => {
  it('Signal-Bar-Aufgaben erfüllen den Vertrag und ihre Regel', () => {
    expect(validateSignalTasks(signalBarTasks, courseOutline)).toEqual([]);
    expect(signalBarTasks.length).toBeGreaterThanOrEqual(16);
  });

  it('Reihenfolge-Aufgaben erfüllen den Vertrag', () => {
    expect(validateOrderTasks(orderTasks, courseOutline)).toEqual([]);
    expect(orderTasks.length).toBeGreaterThanOrEqual(16);
  });

  it('der Validator findet Fehler', () => {
    const task = { ...signalBarTasks[0], targetBarIndex: 2, lessonIds: ['gibt.es.nicht'], explanation: 'kurz' };
    const paths = validateSignalTasks([task, task], courseOutline).map((issue) => issue.path);
    expect(paths).toEqual(expect.arrayContaining(['id', 'explanation', 'lessonIds[0]', 'rule']));
    const order = { ...orderTasks[0], steps: [orderTasks[0].steps[0], orderTasks[0].steps[0]] };
    expect(validateOrderTasks([order], courseOutline).length).toBeGreaterThan(0);
  });

  it('jede Regel trifft ihren Zielbar', () => {
    for (const task of signalBarTasks) {
      expect(ruleMatches(task.bars, task.rule)).toContain(task.targetBarIndex);
    }
  });
});

describe('Freischaltung', () => {
  const progress = createEmptyProgress();

  it('Entwürfe sind nie sichtbar', () => {
    const all = { ...progress, completedLessonIds: courseOutline.units.flatMap((unit) => unit.lessons.map((l) => l.id)) };
    const drafts = signalBarTasks.filter((task) => task.status === 'draft');
    expect(unlockedSignalTasks(all, drafts)).toEqual([]);
    expect(unlockedOrderTasks(all, orderTasks.filter((task) => task.status === 'draft'))).toEqual([]);
  });

  it('freigegebene Aufgaben brauchen alle ihre Lektionen', () => {
    const approved = { ...signalBarTasks[0], status: 'approved' as const };
    expect(unlockedSignalTasks(progress, [approved])).toEqual([]);
    const part = { ...progress, completedLessonIds: [approved.lessonIds[0]] };
    expect(unlockedSignalTasks(part, [approved])).toEqual([]);
    const done = { ...progress, completedLessonIds: approved.lessonIds };
    expect(unlockedSignalTasks(done, [approved])).toEqual([approved]);
  });
});

describe('Hilfsfunktionen', () => {
  it('wiederholt die Aufgabe nicht unmittelbar', () => {
    for (let seed = 1; seed < 40; seed += 1) expect(nextTaskIndex(4, seed, 2)).not.toBe(2);
    expect(nextTaskIndex(1, 5, 0)).toBe(0);
  });

  it('mischt deterministisch und nie in die richtige Reihenfolge', () => {
    for (let seed = 1; seed < 60; seed += 1) {
      const order = shuffledOrder(4, seed);
      expect([...order].sort()).toEqual([0, 1, 2, 3]);
      expect(order).not.toEqual([0, 1, 2, 3]);
      expect(shuffledOrder(4, seed)).toEqual(order);
    }
  });

  it('verschiebt Schritte und bewertet Positionen', () => {
    expect(moveStep(['a', 'b', 'c'], 2, 0)).toEqual(['c', 'a', 'b']);
    expect(moveStep(['a', 'b', 'c'], 0, -1)).toEqual(['a', 'b', 'c']);
    const task = orderTasks[0];
    const correct = task.steps.map((step) => step.id);
    expect(correctPositions(correct, task).every(Boolean)).toBe(true);
    const swapped = moveStep(correct, 0, 1);
    expect(correctPositions(swapped, task).slice(0, 2)).toEqual([false, false]);
  });

  it('gibt gezielte oder allgemeine Hinweise', () => {
    const task = signalBarTasks[0];
    expect(signalMissFeedback(task, task.hints[0].barIndex)).toContain(task.hints[0].text);
    expect(signalMissFeedback(task, 0)).toContain(task.retryHint);
  });
});
