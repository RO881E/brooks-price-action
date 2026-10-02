/*
 * Level-System: Aus den gesammelten XP (alle Kurse gemeinsam) ergibt sich ein Level. Kein eigener
 * gespeicherter Zustand – das Level wird immer aus dem Lernstand berechnet, alte Stände und
 * Sicherungen bleiben unverändert. Am Anfang geht es zügig (Level 2 nach etwa drei Lektionen),
 * danach braucht jedes Level 50 XP mehr als das vorige (Level 100 ab rund 250.000 XP). Die Ränge beschreiben den Lernweg und
 * versprechen keinen Tradingerfolg.
 */

/** XP, die der Schritt von `level` zu `level + 1` kostet: 100, 150, 200, … */
export function stepXp(level: number): number {
  return 100 + 50 * (Math.max(1, Math.floor(level)) - 1);
}

/** Gesamt-XP, ab denen `level` erreicht ist (Level 1 ab 0 XP). */
export function xpForLevel(level: number): number {
  const steps = Math.max(1, Math.floor(level)) - 1;
  return 100 * steps + 25 * steps * (steps - 1);
}

export interface Rank {
  /** Ab diesem Level gilt der Rang. */
  fromLevel: number;
  title: string;
}

/**
 * Alle zehn Level ein neuer Rang – bis Level 120, damit auch viele weitere Kurse und Lektionen
 * noch einen nächsten Rang haben. Ab Level 110 bleibt der letzte Rang.
 */
export const RANKS: readonly Rank[] = [
  { fromLevel: 1, title: 'Neuling' },
  { fromLevel: 10, title: 'Beobachter' },
  { fromLevel: 20, title: 'Chartleser' },
  { fromLevel: 30, title: 'Kontextleser' },
  { fromLevel: 40, title: 'Setup-Kenner' },
  { fromLevel: 50, title: 'Trendleser' },
  { fromLevel: 60, title: 'Marktleser' },
  { fromLevel: 70, title: 'Strukturkenner' },
  { fromLevel: 80, title: 'Analyst' },
  { fromLevel: 90, title: 'Stratege' },
  { fromLevel: 100, title: 'Lernpfad-Meister' },
  { fromLevel: 110, title: 'Lernpfad-Legende' },
];

export function rankFor(level: number): Rank {
  return [...RANKS].reverse().find((rank) => level >= rank.fromLevel) ?? RANKS[0];
}

export interface LevelInfo {
  level: number;
  rank: Rank;
  /** Gesamt-XP. */
  xp: number;
  /** XP seit Beginn des aktuellen Levels. */
  intoLevel: number;
  /** XP, die das aktuelle Level insgesamt braucht. */
  levelSpan: number;
  /** Noch fehlende XP bis zum nächsten Level. */
  toNext: number;
  /** Fortschritt im aktuellen Level, 0–100. */
  percent: number;
  /** Nächster Rang, falls es einen gibt. */
  nextRank: Rank | undefined;
}

export function levelInfo(totalXp: number): LevelInfo {
  const xp = Number.isFinite(totalXp) && totalXp > 0 ? Math.floor(totalXp) : 0;
  let level = 1;
  while (xpForLevel(level + 1) <= xp) level += 1;
  const levelSpan = stepXp(level);
  const intoLevel = xp - xpForLevel(level);
  return {
    level,
    rank: rankFor(level),
    xp,
    intoLevel,
    levelSpan,
    toNext: levelSpan - intoLevel,
    percent: Math.min(100, Math.floor((intoLevel / levelSpan) * 100)),
    nextRank: RANKS.find((rank) => rank.fromLevel > level),
  };
}

/** Neu erreichte Level zwischen zwei XP-Ständen (leer, wenn keins dazukam). */
export function levelsGained(beforeXp: number, afterXp: number): number[] {
  const from = levelInfo(beforeXp).level;
  const to = levelInfo(afterXp).level;
  return Array.from({ length: Math.max(0, to - from) }, (_, index) => from + index + 1);
}
