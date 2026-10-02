/**
 * Einfacher, transparenter Wiederholungsplan („Leitner-Boxen“).
 *
 * - Jede Frage liegt in einer Stufe 0–7 mit den Abständen 1, 3, 7, 14, 30, 60, 120 und 180 Tage.
 * - Richtig an oder nach dem Fälligkeitstag: eine Stufe höher, nächste
 *   Wiederholung nach dem Abstand dieser Stufe (höchstens 180 Tage).
 * - Richtig vor dem Fälligkeitstag (z. B. in „Alles mischen“): Plan unverändert.
 * - Falsch: zurück auf Stufe 0, am nächsten Tag erneut fällig.
 *
 * Alle Tage sind lokale Kalendertage im Format `YYYY-MM-DD`; gerechnet wird nie
 * mit rohen 24-Stunden-Differenzen.
 */

export const REVIEW_INTERVALS = [1, 3, 7, 14, 30, 60, 120, 180] as const;
export const MAX_REVIEW_STAGE = REVIEW_INTERVALS.length - 1;

/** Lokaler Kalendertag, z. B. `2026-09-28`. */
export type DayKey = string;

export interface ReviewCard {
  /** Stufe 0–7, Index in `REVIEW_INTERVALS`. */
  stage: number;
  dueDay: DayKey;
  lastReviewedDay: DayKey;
  lastResult: 'correct' | 'wrong';
  reviews: number;
  lapses: number;
}

const DAY_KEY_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

/** Kalendertag in der lokalen Zeitzone des Geräts. */
export function localDayKey(date: Date): DayKey {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function isDayKey(value: unknown): value is DayKey {
  if (typeof value !== 'string') return false;
  const match = DAY_KEY_PATTERN.exec(value);
  if (!match) return false;
  const [year, month, day] = match.slice(1).map(Number);
  const probe = new Date(year, month - 1, day);
  return (
    probe.getFullYear() === year && probe.getMonth() === month - 1 && probe.getDate() === day
  );
}

function parseDayKey(day: DayKey): [number, number, number] {
  const match = DAY_KEY_PATTERN.exec(day);
  if (!match) throw new Error(`Ungültiger Kalendertag: ${day}`);
  return [Number(match[1]), Number(match[2]), Number(match[3])];
}

/** Addiert Kalendertage – unabhängig von Sommer-/Winterzeit. */
export function addDays(day: DayKey, days: number): DayKey {
  const [year, month, date] = parseDayKey(day);
  return localDayKey(new Date(year, month - 1, date + days));
}

/** Anzahl Kalendertage von `from` bis `to` (negativ, wenn `to` früher liegt). */
export function daysBetween(from: DayKey, to: DayKey): number {
  const [y1, m1, d1] = parseDayKey(from);
  const [y2, m2, d2] = parseDayKey(to);
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86_400_000);
}

/** Festigkeit einer Karte: erreichte Stufe (1–8) von allen Stufen; ohne Karte 0. */
export function reviewStrength(card: ReviewCard | undefined): { level: number; of: number } {
  return { level: card ? card.stage + 1 : 0, of: REVIEW_INTERVALS.length };
}

export function isDue(dueDay: DayKey, today: DayKey): boolean {
  return dueDay <= today;
}

/** Überträgt eine beantwortete Wiederholung in den Plan. */
export function scheduleReview(
  card: ReviewCard | undefined,
  correct: boolean,
  today: DayKey,
): ReviewCard {
  const reviews = (card?.reviews ?? 0) + 1;

  if (!correct) {
    return {
      stage: 0,
      dueDay: addDays(today, REVIEW_INTERVALS[0]),
      lastReviewedDay: today,
      lastResult: 'wrong',
      reviews,
      lapses: (card?.lapses ?? 0) + 1,
    };
  }

  if (card && !isDue(card.dueDay, today)) {
    // Zu früh wiederholt: zählt als Übung, verschiebt aber den Plan nicht.
    return { ...card, lastReviewedDay: today, lastResult: 'correct', reviews };
  }

  const stage = card ? Math.min(card.stage + 1, MAX_REVIEW_STAGE) : 0;
  return {
    stage,
    dueDay: addDays(today, REVIEW_INTERVALS[stage]),
    lastReviewedDay: today,
    lastResult: 'correct',
    reviews,
    lapses: card?.lapses ?? 0,
  };
}

/**
 * Deterministischer Zufallsgenerator (mulberry32). Die App startet ihn mit der
 * aktuellen Zeit, Tests mit einem festen Wert.
 */
export function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4_294_967_296;
  };
}

export function shuffle<T>(items: readonly T[], random: () => number): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [result[index], result[swap]] = [result[swap], result[index]];
  }
  return result;
}
