import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import {
  BUG_REPORT_FILENAME,
  MAX_REPORT_FIELD,
  buildBugReport,
  isReportComplete,
} from '../features/bugReport';

function subscribeOnline(callback: () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

/**
 * Freiwilliger Fehlerbericht (F-28): Text schreiben, Vorschau lesen, dann selbst
 * kopieren oder herunterladen. Nichts wird gesendet oder gespeichert; die
 * Vorschau ist exakt der Text, der kopiert bzw. heruntergeladen wird.
 */
export function BugReportForm({ headingId, onBack }: { headingId: string; onBack: () => void }) {
  const ids = useId();
  const [what, setWhat] = useState('');
  const [steps, setSteps] = useState('');
  const [notice, setNotice] = useState('');
  const preview = useRef<HTMLTextAreaElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => heading.current?.focus(), []);
  const online = useSyncExternalStore(
    subscribeOnline,
    () => navigator.onLine,
    () => true,
  );
  const report = buildBugReport({
    what,
    steps,
    appVersion: __APP_VERSION__,
    userAgent: navigator.userAgent,
    online,
    hash: window.location.hash,
  });
  const complete = isReportComplete(what);

  const copy = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Zwischenablage nicht verfügbar');
      await navigator.clipboard.writeText(report);
      setNotice('Bericht kopiert. Du kannst ihn jetzt selbst weitergeben.');
    } catch {
      // Ohne Berechtigung: Text markieren, damit er von Hand kopiert werden kann.
      preview.current?.focus();
      preview.current?.select();
      setNotice('Kopieren ist hier nicht erlaubt. Der Text in der Vorschau ist markiert – bitte von Hand kopieren oder herunterladen.');
    }
  };

  const download = () => {
    const url = URL.createObjectURL(new Blob([report], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = BUG_REPORT_FILENAME;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setNotice('Datei heruntergeladen.');
  };

  return (
    <div className="bug-report">
      <p className="eyebrow">Beta</p>
      <h2 tabIndex={-1} id={headingId} ref={heading}>
        Fehler melden
      </h2>
      <p>
        Beschreibe, was nicht funktioniert. Die App sendet nichts: Du siehst unten den fertigen Text und
        kopierst oder speicherst ihn selbst. Er enthält nur App-Version, grobe Browser-Angabe, Online-Status,
        den Bereich der App und deine Texte – keine Notizen, Antworten, Begründungen oder gespeicherten Daten.
        Schreibe bitte nichts Privates hinein.
      </p>
      <div className="bug-report-field">
        <label htmlFor={`${ids}-what`}>Was ist passiert?</label>
        <textarea
          id={`${ids}-what`}
          rows={4}
          maxLength={MAX_REPORT_FIELD}
          value={what}
          onChange={(event) => setWhat(event.target.value)}
          aria-describedby={`${ids}-what-hint`}
        />
        <small id={`${ids}-what-hint`}>Pflichtfeld, höchstens {MAX_REPORT_FIELD} Zeichen.</small>
      </div>
      <div className="bug-report-field">
        <label htmlFor={`${ids}-steps`}>Wie lässt es sich nachstellen? (optional)</label>
        <textarea
          id={`${ids}-steps`}
          rows={4}
          maxLength={MAX_REPORT_FIELD}
          value={steps}
          onChange={(event) => setSteps(event.target.value)}
        />
      </div>
      <div className="bug-report-field">
        <label htmlFor={`${ids}-preview`}>Vorschau – genau dieser Text wird kopiert</label>
        <textarea id={`${ids}-preview`} ref={preview} rows={12} readOnly value={report} />
      </div>
      <div className="guide-actions">
        <button type="button" className="primary-button" onClick={copy} disabled={!complete}>
          Bericht kopieren
        </button>
        <button type="button" className="secondary-button" onClick={download} disabled={!complete}>
          Als Textdatei herunterladen
        </button>
        <button type="button" className="secondary-button" onClick={onBack}>
          Zurück zur Hilfe
        </button>
      </div>
      <p role="status" className="bug-report-notice">
        {notice}
      </p>
    </div>
  );
}
