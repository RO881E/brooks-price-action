import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterFiveLessons } from '../content/courses/brooks-trends/chapter-05';
import { ChapterFiveChart, chapterFiveCharts } from './ChapterFiveCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);

describe('chapter five charts', () => {
  const scenarios = chapterFiveLessons.flatMap((lesson) =>
    lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario),
  );

  it('provides a readable and distinct sketch for every lesson', () => {
    expect(scenarios).toHaveLength(25);
    for (const scenario of scenarios) {
      const definition = chapterFiveCharts[scenario as keyof typeof chapterFiveCharts];
      expect(definition?.description.length).toBeGreaterThan(35);
      expect(definition?.panels.length).toBeGreaterThanOrEqual(2);
      const { container } = render(<LearningChart scenario={scenario} title={definition.heading} />);
      const group = container.querySelector('g.chapter-five-chart');
      expect(group?.querySelectorAll('rect.candle-body').length).toBeGreaterThan(1);
      expect(group?.textContent).toContain(definition.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(definition.description);
      cleanup();
    }
  });

  it('draws valid OHLC bars and highlights existing bars', () => {
    for (const definition of Object.values(chapterFiveCharts)) {
      for (const panel of definition.panels) {
        panel.bars.forEach(([open, high, low, close]) => {
          expect(high).toBeGreaterThanOrEqual(Math.max(open, close));
          expect(low).toBeLessThanOrEqual(Math.min(open, close));
          expect(low).toBeGreaterThanOrEqual(0);
          expect(high).toBeLessThanOrEqual(100);
        });
        panel.focus?.forEach((index) => expect(index).toBeLessThan(panel.bars.length));
      }
    }
  });

  it('does not draw a chapter-five group for an earlier chapter scenario', () => {
    const { container } = render(<svg viewBox="0 0 760 330"><ChapterFiveChart scenario="setup-direction" /></svg>);
    expect(container.querySelector('.chapter-five-chart')).toBeNull();
  });
});
