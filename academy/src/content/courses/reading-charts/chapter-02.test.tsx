import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { ComparisonStep } from '../../../components/LessonSteps';
import { LearningChart } from '../../../components/LearningChart';
import { chartsChapterTwoLessons as lessons } from './chapter-02';
import { chartsChapterOneLessons as prior } from './chapter-01';
import { chartsDefinition } from './index';
afterEach(cleanup);
const answer = (title: string) => {
  const question = lessons.find(l => l.title === title)!.steps.find(s => s.type === 'question')!;
  return question.options.find(o => o.id === question.correctOptionId)!.label;
};
const bars = [
  { o: 5000, h: 5030, l: 4980, c: 5020 },
  { o: 5040, h: 5050, l: 5010, c: 5015 },
  { o: 5010, h: 5020, l: 4990, c: 5010 },
];
describe('Charts chapter 2: reading equivalent representations', () => {
  it('loads lazily and requires the previous chapter rather than unrelated progress', async () => {
    expect(await chartsDefinition.units[1].load()).toEqual(lessons);
    expect(lessons).toHaveLength(20);
    const course = baseCourses.find(c => c.id === 'reading-charts')!;
    expect(course.units.flatMap(u => u.lessons)).toHaveLength(232);
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], [])).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], ['orders-and-execution.chapter-10.lesson-24'])).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], prior.map(l => l.id))).toBe('available');
    expect(lessonAccessState(outline, lessons[1], prior.map(l => l.id))).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...prior.map(l => l.id), lessons[0].id])).toBe('available');
  });
  it('independently reconciles geometric proportions and does not mistake them for probability', () => {
    const spans = bars.map(b => b.h - b.l);
    const bodies = bars.map(b => Math.abs(b.c - b.o));
    expect(spans).toEqual([50,40,30]); expect(bodies).toEqual([20,25,0]);
    expect(bodies.map((body,i) => 100*body/spans[i])).toEqual([40,62.5,0]);
    expect(bars.map((b,i) => 100*(b.c-b.l)/spans[i])).toEqual([80,12.5,100*20/30]);
    expect(answer('Den Körperanteil an der Spanne berechnen')).toBe('40 Prozent.');
    expect(answer('Die Lage des Schlusses innerhalb der Spanne bestimmen')).toBe('Bei 80 Prozent der Spanne.');
    const text = lessons.filter(l => /Körperanteil|Schlusses innerhalb/.test(l.title)).map(l => l.steps.find(s => s.type==='explanation')!.paragraphs.join(' ')).join(' ');
    expect(text).toMatch(/nicht definiert/);
  });
  it('separates opening gaps, overlap and reference-dependent direction', () => {
    const lo = Math.max(bars[0].l,bars[1].l), hi = Math.min(bars[0].h,bars[1].h);
    expect([lo,hi,hi-lo]).toEqual([5010,5030,20]);
    expect(bars[1].o-bars[0].c).toBe(20);
    expect(answer('Die gemeinsame Preisspanne zweier Minuten berechnen')).toBe('0,20 Euro.');
    expect(answer('Eine Eröffnungslücke und eine vollständige Preislücke trennen')).toBe('Nein, sie überlappen von 50,10 bis 50,30.');
    expect(7950-7900).toBe(50); expect(7950-8000).toBe(-50);
    expect(answer('Eine steigende Kerze neben fallenden Schlüssen verstehen')).toBe('Sie vergleichen den Schluss mit unterschiedlichen Ausgangspreisen.');
    expect(bars[2].c-bars[0].c).toBe(-10);
    expect(answer('Die Schlusslinie aus der Tabelle nachbauen')).toBe('Er fällt um 0,10 Euro je Aktie.');
  });
  it('demonstrates that identical line points do not uniquely determine OHLC', () => {
    const a=[1000,1040,980,1020], b=[1020,1025,1015,1020];
    expect(a[3]).toBe(b[3]); expect(a[1]-a[2]).toBe(60); expect(b[1]-b[2]).toBe(10);
    expect(answer('Gleiche Schlüsse können verschiedene Minuten verdecken')).toBe('Ihre Hoch-Tief-Spanne und ihr Eröffnungswert.');
    expect(answer('Einen HLC-Balken nicht um eine Eröffnung ergänzen')).toBe('Die Eröffnung.');
    expect(answer('Ein Schatten nennt weder Dauer noch Absicht')).toBe('Wie lange der Preis am Tief blieb.');
  });
  it('renders all comparisons and contextual diagrams without attaching Vela images to separate examples', () => {
    for (const [i,lesson] of lessons.entries()) {
      const question=lesson.steps.find(s=>s.type==='question')!;
      expect(question.correctOptionId).toBe(`choice-${i%3}`);
      expect(new Set(question.options.map(o=>o.explanation)).size).toBe(3);
      const explanation=lesson.steps.find(s=>s.type==='explanation')!;
      expect(explanation.paragraphs).toHaveLength(3);
      const diagram=lesson.steps.find(s=>s.type==='diagram');
      if(diagram) {
        expect(explanation.paragraphs.join(' ')).not.toMatch(/79,00|10,40/);
        render(<LearningChart scenario={diagram.scenario} title={diagram.title}/>);
        expect(screen.getByRole('img')).toHaveAccessibleName(); cleanup();
      }
      const comparison=lesson.steps.find(s=>s.type==='comparison')!;
      render(<ComparisonStep step={comparison}/>);
      for(const col of comparison.columns) {
        expect(screen.getByRole('heading',{name:col.title})).toBeVisible();
        for(const point of col.points) expect(screen.getByText(point)).toBeVisible();
      }
      cleanup();
    }
  });
});
