import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { WeekDay } from '../features/goals';
import { learnedDays, WeekStrip } from './WeekStrip';

const week: WeekDay[] = [
  { day: '2026-09-28', label: 'Mo', status: 'met', isToday: false },
  { day: '2026-09-29', label: 'Di', status: 'missed', isToday: false },
  { day: '2026-09-30', label: 'Mi', status: 'active', isToday: true },
  { day: '2026-10-01', label: 'Do', status: 'future', isToday: false },
  { day: '2026-10-02', label: 'Fr', status: 'future', isToday: false },
  { day: '2026-10-03', label: 'Sa', status: 'future', isToday: false },
  { day: '2026-10-04', label: 'So', status: 'future', isToday: false },
];

describe('Wochenblick', () => {
  it('zählt nur Tage mit Lernaktivität', () => {
    expect(learnedDays(week)).toBe(2);
  });

  it('eine Pause ist neutral formuliert und jeder Tag hat einen Text', () => {
    render(<WeekStrip week={week} />);
    expect(screen.getByText('2 von 7')).toBeInTheDocument();
    expect(screen.getByText(/Di, 2026-09-29: kein Lerntag/)).toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/verpasst|verloren|Serie/i);
    expect(screen.getAllByRole('listitem')).toHaveLength(7);
  });
});
