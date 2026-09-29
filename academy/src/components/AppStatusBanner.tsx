import { useEffect, useState } from 'react';
import type { PwaSnapshot } from '../features/pwa';

interface AppStatusBannerProps {
  status: PwaSnapshot;
  onApplyUpdate: () => void;
}

/**
 * Offline- und Update-Hinweis. Beide lassen sich wegklicken; ein Update wird
 * nie ohne Zustimmung geladen. „Später“ blendet den Hinweis bis zum nächsten
 * Öffnen aus – die neue Version startet spätestens, wenn alle Tabs zu sind.
 */
export function AppStatusBanner({ status, onApplyUpdate }: AppStatusBannerProps) {
  const [offlineDismissed, setOfflineDismissed] = useState(false);
  const [updateDismissed, setUpdateDismissed] = useState(false);
  const [applying, setApplying] = useState(false);

  // Nach einer Unterbrechung soll der nächste Verbindungsverlust wieder sichtbar sein.
  useEffect(() => {
    if (status.online) setOfflineDismissed(false);
  }, [status.online]);

  // Ist die wartende Version verworfen worden, gilt ein späterer Hinweis als neu.
  useEffect(() => {
    if (!status.updateReady) setApplying(false);
  }, [status.updateReady]);

  const showOffline = !status.online && !offlineDismissed;
  const showUpdate = status.updateReady && !updateDismissed;
  if (!showOffline && !showUpdate) return null;

  return (
    <div className="app-status">
      {showUpdate ? (
        <div className="app-status-card update" role="status" aria-live="polite">
          <div>
            <strong>Neue Version verfügbar</strong>
            <span>
              Dein Fortschritt und deine Notizen bleiben erhalten. Die Seite lädt dafür einmal
              neu.
            </span>
          </div>
          <div className="app-status-actions">
            <button
              type="button"
              className="app-status-primary"
              disabled={applying}
              onClick={() => {
                setApplying(true);
                onApplyUpdate();
              }}
            >
              {applying ? 'Wird aktualisiert …' : 'Jetzt aktualisieren'}
            </button>
            <button type="button" onClick={() => setUpdateDismissed(true)}>
              Später
            </button>
          </div>
        </div>
      ) : null}
      {showOffline ? (
        <div className="app-status-card offline" role="status" aria-live="polite">
          <div>
            <strong>Offline</strong>
            <span>
              {status.offlineReady
                ? 'Bereits geladene Inhalte bleiben nutzbar. Dein Fortschritt wird auf diesem Gerät gespeichert.'
                : 'Keine Verbindung. Offline-Nutzung ist erst nach einem vollständigen Online-Besuch verfügbar.'}
            </span>
          </div>
          <div className="app-status-actions">
            <button type="button" onClick={() => setOfflineDismissed(true)}>
              OK
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
