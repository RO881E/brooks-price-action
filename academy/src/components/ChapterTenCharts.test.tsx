import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { chapterTenLessons } from '../content/courses/brooks-trends/chapter-10';
import { CHAPTER_TEN_SCENARIOS } from '../content/types';
import { chapterTenCharts } from './ChapterTenCharts';
import { LearningChart } from './LearningChart';

afterEach(cleanup);

describe('chapter ten teaching charts', () => {
  it('gives each lesson its own accessible synthetic diagram', () => {
    const scenarios = chapterTenLessons.flatMap((lesson) =>
      lesson.steps.filter((step) => step.type === 'diagram').map((step) => step.scenario),
    );
    expect(scenarios).toEqual([...CHAPTER_TEN_SCENARIOS]);
    for (const scenario of scenarios) {
      const definition = chapterTenCharts[scenario as keyof typeof chapterTenCharts];
      expect(definition.description.length).toBeGreaterThan(60);
      const { container } = render(<LearningChart scenario={scenario} title={definition.heading} />);
      expect(container.querySelector('g.chapter-ten-chart')?.textContent).toContain(definition.heading);
      expect(container.querySelector('svg[role="img"] desc')?.textContent).toBe(definition.description);
      cleanup();
    }
  });

  it('draws valid bars and the differences that matter to the chapter', () => {
    for (const definition of Object.values(chapterTenCharts)) {
      for (const panel of definition.panels) {
        for (const [open, high, low, close] of panel.bars) {
          expect(high).toBeGreaterThanOrEqual(Math.max(open, close));
          expect(low).toBeLessThanOrEqual(Math.min(open, close));
          expect(low).toBeGreaterThanOrEqual(0);
          expect(high).toBeLessThanOrEqual(100);
        }
      }
    }
    const [strong, bargain] = chapterTenCharts['c10-better-price'].panels;
    expect(strong.bars[4][3]).toBeGreaterThan(strong.level![0]);
    expect(bargain.bars[4][3]).toBeLessThan(bargain.level![0]);

    const [first, later] = chapterTenCharts['c10-102-no-second'].panels;
    expect(later.bars.at(-1)![3]).toBeLessThan(first.bars.at(-1)![3]);

    const inside = chapterTenCharts['c10-deep-final-flag'].panels[0].bars;
    expect(inside[5][1]).toBeLessThan(inside[4][1]);
    expect(inside[5][2]).toBeGreaterThan(inside[4][2]);
    expect(inside[6][1]).toBeLessThan(inside[5][1]);
    expect(inside[6][2]).toBeGreaterThan(inside[5][2]);
  });
});
