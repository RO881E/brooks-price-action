import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import type { ChartScenarioId } from '../content/types';
import { ChapterFourChart } from './ChapterFourCharts';

const chapterFourScenarios = [
  'setup-direction',
  'bar-role-lifecycle',
  'one-bar-order-map',
  'contextual-imbalance',
  'signal-family-map',
  'inside-outside-sequences',
  'contextual-failure-setups',
  'beginner-signal-filter',
  'trend-signal-strength',
  'stop-entry-lifecycle',
  'candle-name-reduction',
  'forming-bar-climax',
  'signal-entry-case',
] satisfies ChartScenarioId[];

afterEach(cleanup);

describe('chapter four charts', () => {
  it.each(chapterFourScenarios)('renders %s as a labeled SVG group', (scenario) => {
    const { container } = render(
      <svg viewBox="0 0 760 330">
        <ChapterFourChart scenario={scenario} />
      </svg>,
    );

    const chart = container.querySelector('g.chapter-four-chart');
    expect(chart).not.toBeNull();
    expect(chart?.querySelectorAll('text').length).toBeGreaterThan(2);
    expect(chart?.textContent?.trim().length).toBeGreaterThan(20);
  });
});
