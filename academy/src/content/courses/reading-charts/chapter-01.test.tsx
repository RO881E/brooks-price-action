import { act, cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { checkContent, snapshotKnownIds, formatReport } from '../../../../build/contentCheck';
import { toCourseOutline } from '../../../../build/courseOutline';
import { baseCourses } from '../../allCourses';
import { courseOfLesson } from '../../catalog';
import { librarySubjects } from '../../library';
import { lessonAccessState } from '../../../features/courseAccess';
import { ComparisonStep } from '../../../components/LessonSteps';
import { LearningChart, chartDescription, chartScenarioIds } from '../../../components/LearningChart';
import { ChartWithFocus } from '../../../components/ChartFocus';
import { readingChartBars, readingPriceY } from '../../../components/ReadingChartsBasics';
import { chartsChapterOneLessons as lessons } from './chapter-01';
import { chartsDefinition } from './index';
import { chartsGlossary } from './glossary';
import known from '../../../../build/published-ids-reading-charts.json';
afterEach(cleanup);
const course = baseCourses.find((entry) => entry.id === 'reading-charts')!;
const answer = (title: string) => {
  const question = lessons.find((lesson) => lesson.title === title)!.steps.find((step) => step.type === 'question')!;
  return question.options.find((option) => option.id === question.correctOptionId)!.label;
};
const events = [
  { second: 10, cents: 5000, quantity: 4 }, { second: 25, cents: 5030, quantity: 2 },
  { second: 40, cents: 4980, quantity: 3 }, { second: 55, cents: 5020, quantity: 1 },
];
const summarize = (ticks: typeof events) => ({ open: ticks[0].cents, high: Math.max(...ticks.map((tick) => tick.cents)), low: Math.min(...ticks.map((tick) => tick.cents)), close: ticks.at(-1)!.cents });
describe('Charts lesen: independent beginner course', () => {
  it('loads independently and advances only from its own progress', async () => {
    expect(await chartsDefinition.units[0].load()).toEqual(lessons);
    expect(lessons).toHaveLength(20); expect(chartsGlossary).toHaveLength(14);
    const entry = librarySubjects.flatMap((subject) => subject.courses).find((entry) => entry.id === course.id)!;
    expect(entry.status).toBe('available'); expect(entry.label).toBe(chartsDefinition.info.eyebrow);
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], [])).toBe('available');
    expect(lessonAccessState(outline, lessons[1], [])).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], ['orders-and-execution.chapter-01.lesson-01'])).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });
  it('validates published IDs, diagrams, glossary and independently authored visible content', () => {
    const report = checkContent({ course, glossary: chartsGlossary, scenarioIds: chartScenarioIds(), describe: (scenario) => chartDescription(scenario as Parameters<typeof chartDescription>[0]), caseIssues: [], known });
    expect(report.errors, formatReport(report)).toBe(0);
    expect(snapshotKnownIds(course)).toEqual(known);
    expect(JSON.stringify([course, chartsGlossary])).not.toMatch(/John.*Murphy|Technical Analysis of|OceanofPDF|pdfcoffee|TradingView/);
  });
  it('derives the displayed first OHLC bar from timed trades and keeps unfinished data distinct', () => {
    const first = summarize(events.filter((event) => event.second >= 0 && event.second < 60));
    expect(first).toEqual(readingChartBars[0]);
    expect(answer('Eröffnung und Schluss als erstes und letztes Geschäft lesen')).toBe('50,20 Euro.');
    expect(answer('Hoch und Tief aus derselben Minute bestimmen')).toBe('Hoch 50,30 und Tief 49,80.');
    const atThirty = summarize(events.filter((event) => event.second <= 30));
    expect(atThirty).toEqual({ open: 5000, high: 5030, low: 5000, close: 5030 });
    expect(atThirty.close).not.toBe(first.close);
    expect(answer('Eine laufende Kerze ist noch nicht abgeschlossen')).toBe('Noch kein endgültiger Schluss der laufenden Minute.');
    expect([{ second: 60, cents: 5010, quantity: 1 }].filter((event) => event.second < 60)).toHaveLength(0);
    expect(answer('Eine Minute aus einzelnen Geschäften bilden')).toBe('Zur nächsten Minute ab 09:01.');
  });
  it('reconciles body, shadows, full range and volume without conflating quantities', () => {
    const first = summarize(events), body = Math.abs(first.close - first.open);
    const upper = first.high - Math.max(first.open, first.close), lower = Math.min(first.open, first.close) - first.low;
    expect([body, upper, lower]).toEqual([20, 10, 20]);
    expect(body + upper + lower).toBe(first.high - first.low);
    expect(answer('Die gesamte Preisspanne berechnen')).toBe('0,50 Euro je Aktie.');
    expect(answer('Der Kerzenkörper verbindet Eröffnung und Schluss')).toBe('0,20 Euro.');
    expect(events.reduce((n, tick) => n + tick.quantity, 0)).toBe(10);
    expect(answer('Handelsvolumen zählt Stücke, nicht Kerzenhöhe')).toBe('Zehn Aktien.');
    const second = readingChartBars[1], third = readingChartBars[2];
    expect(Math.abs(second.open - second.close)).toBe(25);
    expect(answer('Eine fallende Kerze mit vier Preisen prüfen')).toBe('0,25 Euro.');
    expect(third.open).toBe(third.close); expect(third.high - third.low).toBe(30);
    expect(answer('Gleiche Eröffnung und gleicher Schluss bedeuten keine Ruhe')).toBe('0,30 Euro.');
  });
  it('demonstrates lost path information and distinct price references', () => {
    const alternate = [events[0], events[2], events[1], events[3]].map((event, index) => ({ ...event, second: index * 10 }));
    expect(summarize(alternate)).toEqual(summarize(events));
    expect(events[1].cents).toBe(5030); expect(alternate[1].cents).toBe(4980);
    expect(answer('Vier Kennwerte verraten nicht die gesamte Reihenfolge')).toBe('Ob das Hoch oder das Tief zuerst kam.');
    expect(5010 - 5000).toBe(10); expect(5010 - 5020).toBe(-10);
    expect(answer('Kerzenänderung und Änderung zum vorherigen Schluss trennen')).toBe('0,10 Euro niedriger.');
    expect(answer('Die vier Kennwerte auf innere Widersprüche prüfen')).toBe('Der Schluss 50,20 liegt über dem Hoch 50,10.');
    expect(answer('Eine Lücke in den Daten nicht als Ruhe deuten')).toBe('Noch keine sichere Ruhe oder Nullbewegung.');
  });
  it('renders every diagram and comparison with descriptive accessible information', () => {
    for (const [index, lesson] of lessons.entries()) {
      const question = lesson.steps.find((step) => step.type === 'question')!;
      expect(question.correctOptionId).toBe(`choice-${index % 3}`);
      expect(new Set(question.options.map((option) => option.explanation)).size).toBe(3);
      expect(lesson.steps.find((step) => step.type === 'explanation')!.paragraphs).toHaveLength(3);
      const diagram = lesson.steps.find((step) => step.type === 'diagram')!;
      render(<LearningChart scenario={diagram.scenario} title={diagram.title} />);
      expect(screen.getByRole('img')).toHaveAccessibleName(/Die Daten im Schaubild/);
      expect(screen.getByRole('img').querySelector('desc')?.textContent).toBe(chartDescription(diagram.scenario));
      expect(screen.getByRole('img').querySelectorAll('line').length).toBeGreaterThan(4);
      cleanup();
      const comparison = lesson.steps.find((step) => step.type === 'comparison')!;
      render(<ComparisonStep step={comparison} />);
      for (const column of comparison.columns) {
        const heading = screen.getByRole('heading', { name: column.title, level: 2 });
        expect(heading).toBeVisible();
        for (const point of column.points) expect(within(heading.parentElement!).getByText(point)).toBeVisible();
      }
      cleanup();
    }
  });
  it('keeps linear geometry consistent and opens the existing chart focus with unique SVG IDs', () => {
    expect(readingPriceY(5000) - readingPriceY(5020)).toBeCloseTo(readingPriceY(5020) - readingPriceY(5040));
    expect(readingPriceY(4980)).toBeGreaterThan(readingPriceY(5050));
    const diagram = lessons[0].steps.find((step) => step.type === 'diagram')!;
    render(<ChartWithFocus scenario={diagram.scenario} title={diagram.title} caption={diagram.caption} observations={diagram.observations} />);
    fireEvent.click(screen.getByRole('button', { name: `Vergrößern: ${diagram.title}` }));
    expect(screen.getByRole('dialog', { hidden: true })).toBeInTheDocument();
    const images = screen.getAllByRole('img', { hidden: true });
    expect(images).toHaveLength(2);
    expect(images[0].getAttribute('aria-labelledby')).not.toBe(images[1].getAttribute('aria-labelledby'));
    act(() => { screen.getByRole('dialog', { hidden: true }).dispatchEvent(new Event('cancel', { cancelable: true })); });
    expect(screen.queryByRole('dialog', { hidden: true })).not.toBeInTheDocument();
  });
});
