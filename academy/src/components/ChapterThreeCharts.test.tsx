import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import type { ChartScenarioId } from '../content/types';
import { ChapterThreeChart } from './ChapterThreeCharts';

const chapterThreeScenarios = [
  'breakout-spike-channel',
  'channel-shallowing',
  'channel-to-range-cycle',
  'channel-counter-flag',
  'test-area-decision',
  'behavior-reversal',
  'reversal-inertia',
  'reversal-multiframe-map',
  'failed-low-breakout',
  'repeated-high-test',
  'spike-to-overlap',
  'breakeven-defense',
  'breakout-gap-always-in',
  'spike-channel-playbook',
  'channel-two-sided-orders',
  'channel-start-magnet',
  'channel-breakout-paths',
  'range-dual-role',
  'test-reference-layers',
  'every-swing-test-map',
  'bar-nine-defense',
  'bar-three-breakout-gap',
  'channel-positioning-cycle',
  'wedge-pushes',
  'nested-flags-map',
] satisfies ChartScenarioId[];

afterEach(cleanup);

describe('chapter three charts', () => {
  it.each(chapterThreeScenarios)('renders %s as a labeled SVG group', (scenario) => {
    const { container } = render(
      <svg viewBox="0 0 760 330">
        <ChapterThreeChart scenario={scenario} />
      </svg>,
    );

    const chart = container.querySelector('g.chapter-three-chart');
    expect(chart).not.toBeNull();
    expect(chart?.querySelectorAll('text').length).toBeGreaterThan(2);
    expect(chart?.textContent?.trim().length).toBeGreaterThan(20);
  });
});
