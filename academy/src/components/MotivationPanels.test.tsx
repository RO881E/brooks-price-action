import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { Mission } from '../features/missions';
import { MissionList } from './MotivationPanels';

const mission = (kind: Mission['kind'], done: boolean): Mission =>
  ({ kind, title: `Vorschlag ${kind}`, detail: 'Detail', done }) as Mission;

describe('Missionstruhe', () => {
  it('zeigt die Truhe geschlossen, solange Vorschläge offen sind', () => {
    const { container } = render(<MissionList missions={[mission('review', true), mission('lesson', false)]} onStart={() => {}} />);
    expect(screen.getByText(/Noch 1 von 2 Vorschlägen/)).toBeInTheDocument();
    expect(container.querySelector('.mission-chest.open')).toBeNull();
  });

  it('öffnet sich, wenn alle Vorschläge erledigt sind – ohne Punkte oder Versprechen', () => {
    const { container } = render(<MissionList missions={[mission('review', true), mission('lesson', true)]} onStart={() => {}} />);
    expect(container.querySelector('.mission-chest.open')).not.toBeNull();
    expect(screen.getByText(/Truhe offen/)).toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/Punkte|XP|Belohnung/);
  });

  it('ohne Vorschläge gibt es keine Truhe', () => {
    const { container } = render(<MissionList missions={[]} onStart={() => {}} />);
    expect(container.querySelector('.mission-chest')).toBeNull();
  });
});
