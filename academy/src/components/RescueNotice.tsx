import type { RescuedData } from '../features/recovery';

/**
 * Hinweis, wenn beim Start nicht lesbare Lerndaten gesichert wurden (P12). Er erklärt, was
 * passiert ist, und bietet die unveränderte Kopie zum Herunterladen an. „Kopie löschen“ ist
 * eine bewusste Entscheidung; „Ausblenden“ versteckt den Hinweis nur bis zum nächsten Öffnen.
 */
export function RescueNotice({
  rescued,
  onDownload,
  onDiscard,
  onHide,
}: {
  rescued: RescuedData;
  onDownload: () => void;
  onDiscard: () => void;
  onHide: () => void;
}) {
  return (
    <section className="rescue-notice" role="alert" aria-labelledby="rescue-title">
      <h2 id="rescue-title">Gespeicherte Lerndaten waren nicht lesbar</h2>
      <p>
        Die Academy hat mit einem leeren Stand begonnen und vorher eine unveränderte Kopie deiner alten Daten
        gesichert ({rescued.size.toLocaleString('de-DE')} Zeichen). Sie ist nur auf diesem Gerät. Lade sie herunter,
        damit sie nicht verloren geht – etwa für eine Fehlermeldung oder eine Reparatur von Hand.
      </p>
      <div className="rescue-actions">
        <button type="button" className="primary-button" onClick={onDownload}>
          Kopie herunterladen
        </button>
        <button type="button" className="secondary-button" onClick={onHide}>
          Ausblenden
        </button>
        <button type="button" className="text-button" onClick={onDiscard}>
          Kopie löschen
        </button>
      </div>
    </section>
  );
}
