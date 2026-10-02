import { describe, expect, it } from 'vitest';
import { levelInfo, levelsGained, rankFor, RANKS, stepXp, xpForLevel } from './levels';

describe('Level-System', () => {
  it('startet bei Level 1 und steigt zügig, dann jeweils 50 XP mehr', () => {
    expect(stepXp(1)).toBe(100);
    expect(stepXp(2)).toBe(150);
    expect(stepXp(10)).toBe(550);
    expect(xpForLevel(1)).toBe(0);
    expect(xpForLevel(2)).toBe(100);
    expect(xpForLevel(3)).toBe(250);
    expect(xpForLevel(4)).toBe(450);
    for (let level = 1; level < 60; level += 1) {
      expect(xpForLevel(level + 1) - xpForLevel(level)).toBe(stepXp(level));
    }
  });

  it('berechnet Level, Fortschritt und fehlende XP', () => {
    expect(levelInfo(0)).toMatchObject({ level: 1, intoLevel: 0, levelSpan: 100, toNext: 100, percent: 0 });
    expect(levelInfo(99)).toMatchObject({ level: 1, toNext: 1, percent: 99 });
    expect(levelInfo(100)).toMatchObject({ level: 2, intoLevel: 0, levelSpan: 150, toNext: 150 });
    expect(levelInfo(325)).toMatchObject({ level: 3, intoLevel: 75, levelSpan: 200, percent: 37 });
    // Ungültige Werte zählen als 0 XP.
    expect(levelInfo(-5).level).toBe(1);
    expect(levelInfo(Number.NaN).level).toBe(1);
  });

  it('der ganze heutige Kurs (rund 34.000 XP) reicht etwa bis Level 35', () => {
    expect(levelInfo(34_000).level).toBeGreaterThanOrEqual(34);
    expect(levelInfo(34_000).level).toBeLessThanOrEqual(37);
  });

  it('Ränge wechseln alle fünf Level', () => {
    expect(rankFor(1).title).toBe('Neuling');
    expect(rankFor(4).title).toBe('Neuling');
    expect(rankFor(5).title).toBe('Chartleser');
    expect(rankFor(99).title).toBe(RANKS.at(-1)!.title);
    expect(levelInfo(xpForLevel(5)).rank.title).toBe('Chartleser');
    expect(levelInfo(0).nextRank?.title).toBe('Chartleser');
    expect(levelInfo(xpForLevel(40)).nextRank).toBeUndefined();
  });

  it('meldet neu erreichte Level – auch mehrere auf einmal', () => {
    expect(levelsGained(0, 99)).toEqual([]);
    expect(levelsGained(90, 110)).toEqual([2]);
    expect(levelsGained(0, 460)).toEqual([2, 3, 4]);
    expect(levelsGained(460, 0)).toEqual([]);
  });
});
