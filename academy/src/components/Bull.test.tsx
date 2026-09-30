import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Bull, BullSays, bullSrc } from './Bull';

describe('Bull', () => {
  it('ist Dekoration: leeres alt, feste Dateinamen je Stimmung', () => {
    const { container } = render(<Bull mood="cheer" />);
    const image = container.querySelector('img')!;
    expect(image.getAttribute('alt')).toBe('');
    expect(image.getAttribute('src')).toMatch(/mascot\/bull-cheer\.svg$/);
    expect(bullSrc('think')).toMatch(/mascot\/bull-think\.svg$/);
    expect(screen.queryByRole('img')).toBeNull();
  });

  it('BullSays zeigt den Text als normalen Inhalt', () => {
    render(<BullSays mood="happy">Hallo Welt</BullSays>);
    expect(screen.getByText('Hallo Welt')).toBeInTheDocument();
  });
});
