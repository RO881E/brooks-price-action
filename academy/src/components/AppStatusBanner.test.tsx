import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { PwaSnapshot } from '../features/pwa';
import { AppStatusBanner } from './AppStatusBanner';

const base: PwaSnapshot = { online: true, offlineReady: true, updateReady: false };

afterEach(cleanup);

describe('AppStatusBanner', () => {
  it('zeigt online und ohne Update nichts', () => {
    const { container } = render(<AppStatusBanner status={base} onApplyUpdate={vi.fn()} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('aktualisiert erst nach Zustimmung und nur einmal', () => {
    const apply = vi.fn();
    render(<AppStatusBanner status={{ ...base, updateReady: true }} onApplyUpdate={apply} />);
    expect(screen.getByText('Neue Version verfügbar')).toBeInTheDocument();
    expect(apply).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: 'Jetzt aktualisieren' }));
    expect(apply).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button', { name: 'Wird aktualisiert …' })).toBeDisabled();
  });

  it('„Später“ blendet den Update-Hinweis aus, ohne zu aktualisieren', () => {
    const apply = vi.fn();
    render(<AppStatusBanner status={{ ...base, updateReady: true }} onApplyUpdate={apply} />);
    fireEvent.click(screen.getByRole('button', { name: 'Später' }));
    expect(screen.queryByText('Neue Version verfügbar')).not.toBeInTheDocument();
    expect(apply).not.toHaveBeenCalled();
  });

  it('erklärt offline, ob geladene Inhalte verfügbar sind', () => {
    const { rerender } = render(
      <AppStatusBanner status={{ ...base, online: false }} onApplyUpdate={vi.fn()} />,
    );
    expect(screen.getByText(/Bereits geladene Inhalte bleiben nutzbar/)).toBeInTheDocument();
    rerender(
      <AppStatusBanner
        status={{ ...base, online: false, offlineReady: false }}
        onApplyUpdate={vi.fn()}
      />,
    );
    expect(screen.getByText(/erst nach einem vollständigen Online-Besuch/)).toBeInTheDocument();
  });

  it('zeigt den Offline-Hinweis nach „OK“ erst beim nächsten Verbindungsverlust wieder', () => {
    const { rerender } = render(
      <AppStatusBanner status={{ ...base, online: false }} onApplyUpdate={vi.fn()} />,
    );
    fireEvent.click(screen.getByRole('button', { name: 'OK' }));
    expect(screen.queryByText('Offline')).not.toBeInTheDocument();
    rerender(<AppStatusBanner status={base} onApplyUpdate={vi.fn()} />);
    rerender(<AppStatusBanner status={{ ...base, online: false }} onApplyUpdate={vi.fn()} />);
    expect(screen.getByText('Offline')).toBeInTheDocument();
  });
});
