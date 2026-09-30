import type { OrderTask, SignalBarTask } from './practiceTaskTypes';
import { c04OrderTasks } from './practiceTasks/c04Order';
import { c04SignalTasks } from './practiceTasks/c04Signal';

/**
 * Übungsaufgaben aus Content-Pack C-04 (Stufe 4d). Ein Unit-Test prüft jeden Eintrag gegen den
 * Vertrag und die Kursgliederung; angezeigt werden nur Aufgaben mit `status: 'approved'`.
 */
export const signalBarTasks: readonly SignalBarTask[] = [...c04SignalTasks];
export const orderTasks: readonly OrderTask[] = [...c04OrderTasks];
