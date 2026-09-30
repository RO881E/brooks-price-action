import { useEffect, useId, useRef, useState } from 'react';
import {
  MAX_IMPORT_BYTES,
  MAX_IMPORT_LABEL,
  parseBackup,
  previewImport,
  type ImportMode,
  type ImportPreview,
  type MergeOptions,
} from '../features/backup';
import { goalLabel } from '../features/goals';
import {
  DAILY_GOAL_OPTIONS,
  type AcademyProgress,
  type AcademySettings,
  type DailyGoal,
  type ReadingOptions,
} from '../features/progress';
import type { PwaSnapshot } from '../features/pwa';
import { vibrationSupported } from '../features/haptics';
import { useUiPreferences } from '../features/uiPreferences';
import { ReadingOptionsPanel, readingOptionsLabel } from './ReadingOptionsPanel';

interface SettingsViewProps {
  progress: AcademyProgress;
  onGoalChange: (goal: DailyGoal) => void;
  onSettingsChange: (changes: Partial<AcademySettings>) => void;
  /** Schriftgröße und Zeilenabstand des Buchmodus (seit F-22). */
  onReadingOptions: (changes: Partial<ReadingOptions>) => void;
  /** Lädt eine Sicherung des aktuellen Stands herunter. */
  onExport: () => void;
  onImport: (imported: AcademyProgress, mode: ImportMode, options: MergeOptions) => void;
  onReset: () => void;
  /** Offline- und Update-Stand der App (seit F-09). */
  appStatus?: PwaSnapshot;
  onApplyUpdate?: () => void;
}

type ImportState =
  | { kind: 'idle' }
  | { kind: 'error'; fileName: string; errors: string[] }
  | { kind: 'preview'; fileName: string; exportedAt: string; imported: AcademyProgress }
  | { kind: 'done'; message: string };

function plural(count: number, one: string, many: string): string {
  return `${count} ${count === 1 ? one : many}`;
}

function formatDateTime(iso: string): string {
  const date = new Date(iso);
  return Number.isNaN(date.getTime())
    ? iso
    : date.toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'short' });
}

function preferencesLabel(progress: AcademyProgress): string {
  const motion = progress.settings.motion === 'reduce' ? 'Bewegung reduziert' : 'Bewegung wie im System';
  return `Tagesziel ${goalLabel(progress.dailyGoal)}, ${motion}${progress.settings.compact ? ', kompakt' : ''}, ${readingOptionsLabel(progress.readingOptions)}`;
}

function mergeLines(preview: ImportPreview): string[] {
  const { merge } = preview;
  return [
    merge.newLessons ? `+ ${plural(merge.newLessons, 'abgeschlossene Lektion', 'abgeschlossene Lektionen')}` : '',
    merge.newNotes ? `+ ${plural(merge.newNotes, 'Notiz', 'Notizen')}` : '',
    merge.updatedNotes
      ? `${plural(merge.updatedNotes, 'Notiz wird', 'Notizen werden')} durch eine neuere Fassung aus der Sicherung ersetzt`
      : '',
    merge.keptLocalNotes
      ? `${plural(merge.keptLocalNotes, 'lokale Notiz ist', 'lokale Notizen sind')} neuer und ${merge.keptLocalNotes === 1 ? 'bleibt' : 'bleiben'}`
      : '',
    merge.newBookmarks ? `+ ${plural(merge.newBookmarks, 'Lesezeichen', 'Lesezeichen')}` : '',
    merge.newLearningDays ? `+ ${plural(merge.newLearningDays, 'Lerntag', 'Lerntage')}` : '',
    merge.newMilestones ? `+ ${plural(merge.newMilestones, 'Meilenstein', 'Meilensteine')}` : '',
    merge.newReviewCards ? `+ ${plural(merge.newReviewCards, 'Wiederholungskarte', 'Wiederholungskarten')}` : '',
    merge.newCaseRuns ? `+ ${plural(merge.newCaseRuns, 'abgeschlossene Trainerrunde', 'abgeschlossene Trainerrunden')}` : '',
  ].filter(Boolean);
}

function replaceLosses(preview: ImportPreview): string[] {
  const { replace } = preview;
  return [
    replace.lostLessons ? plural(replace.lostLessons, 'abgeschlossene Lektion', 'abgeschlossene Lektionen') : '',
    replace.lostNotes ? plural(replace.lostNotes, 'Notiz', 'Notizen') : '',
    replace.lostBookmarks ? plural(replace.lostBookmarks, 'Lesezeichen', 'Lesezeichen') : '',
    replace.lostLearningDays ? plural(replace.lostLearningDays, 'Lerntag', 'Lerntage') : '',
    replace.lostCaseRuns ? plural(replace.lostCaseRuns, 'abgeschlossene Trainerrunde', 'abgeschlossene Trainerrunden') : '',
  ].filter(Boolean);
}

export function SettingsView({
  progress,
  onGoalChange,
  onSettingsChange,
  onReadingOptions,
  onExport,
  onImport,
  onReset,
  appStatus,
  onApplyUpdate,
}: SettingsViewProps) {
  const ids = useId();
  const [ui, setUi] = useUiPreferences();
  const fileInput = useRef<HTMLInputElement>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const [exported, setExported] = useState(false);
  const [importState, setImportState] = useState<ImportState>({ kind: 'idle' });
  const [mode, setMode] = useState<ImportMode>('merge');
  const [keepPreferences, setKeepPreferences] = useState(false);
  const [confirmReplace, setConfirmReplace] = useState(false);
  const [backupBeforeImport, setBackupBeforeImport] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const [resetConfirmed, setResetConfirmed] = useState(false);
  const [backupBeforeReset, setBackupBeforeReset] = useState(false);
  const [resetDone, setResetDone] = useState(false);

  // Fehler, Vorschau und Ergebnis erhalten den Fokus – für Tastatur und Screenreader.
  useEffect(() => {
    if (importState.kind !== 'idle') resultHeading.current?.focus();
  }, [importState]);

  const readFile = async (file: File | undefined) => {
    if (!file) return;
    setMode('merge');
    setKeepPreferences(false);
    setConfirmReplace(false);
    setBackupBeforeImport(false);
    if (fileInput.current) fileInput.current.value = '';

    if (file.size > MAX_IMPORT_BYTES) {
      setImportState({
        kind: 'error',
        fileName: file.name,
        errors: [`Die Datei ist größer als ${MAX_IMPORT_LABEL} und wird nicht gelesen.`],
      });
      return;
    }
    let text: string;
    try {
      text = await file.text();
    } catch {
      setImportState({ kind: 'error', fileName: file.name, errors: ['Die Datei konnte nicht gelesen werden.'] });
      return;
    }
    const result = parseBackup(text);
    setImportState(
      result.ok
        ? { kind: 'preview', fileName: file.name, exportedAt: result.backup.exportedAt, imported: result.imported }
        : { kind: 'error', fileName: file.name, errors: result.errors },
    );
  };

  const preview =
    importState.kind === 'preview'
      ? previewImport(progress, importState.imported, importState.exportedAt)
      : null;

  return (
    <div className="page-shell settings-page">
      <header className="page-heading">
        <p className="eyebrow">Dein Browser, deine Daten</p>
        <h1>Einstellungen</h1>
        <p>
          Alles bleibt lokal in diesem Browser. Sicherungen sind JSON-Dateien, die du selbst
          aufbewahrst und auf einem anderen Gerät wieder einspielen kannst.
        </p>
      </header>

      <section className="progress-panel settings-section" aria-labelledby={`${ids}-display`}>
        <h2 id={`${ids}-display`}>Darstellung</h2>
        <fieldset className="settings-choices">
          <legend>Bewegung und Animationen</legend>
          <p className="settings-effect">Wirkung: sofort in der ganzen App – Einblendungen und sanftes Scrollen entfallen.</p>
          <label>
            <input
              type="radio"
              name={`${ids}-motion`}
              checked={progress.settings.motion === 'system'}
              onChange={() => onSettingsChange({ motion: 'system' })}
            />
            <span>Wie im System eingestellt</span>
          </label>
          <label>
            <input
              type="radio"
              name={`${ids}-motion`}
              checked={progress.settings.motion === 'reduce'}
              onChange={() => onSettingsChange({ motion: 'reduce' })}
            />
            <span>Bewegung immer reduzieren</span>
          </label>
        </fieldset>
        <label className="settings-toggle">
          <input
            type="checkbox"
            checked={progress.settings.compact}
            onChange={(event) => onSettingsChange({ compact: event.target.checked })}
          />
          <span>
            Kompakte Darstellung
            <small>
              Wirkung: weniger Abstände und kleinere Überschriften – mehr Inhalt auf einen Blick. Inhalte und
              Lernstand ändern sich nicht.
            </small>
          </span>
        </label>
        <div className="settings-reading">
          <p className="settings-effect">
            Wirkung der Schrift: Größe und Zeilenabstand des Lesetexts im Buchmodus – auf diesem Gerät
            gespeichert, ohne Einfluss auf Lernstand oder Inhalte.
          </p>
          <ReadingOptionsPanel options={progress.readingOptions} onChange={onReadingOptions} />
        </div>
      </section>

      <section className="progress-panel settings-section" aria-labelledby={`${ids}-feedback`}>
        <h2 id={`${ids}-feedback`}>Rückmeldung: Vibration und Töne</h2>
        <p className="settings-effect">
          Wirkung: nur auf diesem Gerät gespeichert, ohne Einfluss auf Lernstand, Antworten oder Sicherung. Texte
          und Symbole bleiben immer – Vibration und Töne sind nur eine zusätzliche Rückmeldung nach richtiger Antwort,
          abgeschlossener Lektion oder Runde und erreichtem Meilenstein.
        </p>
        <label className="settings-toggle">
          <input type="checkbox" checked={ui.haptics} onChange={(event) => setUi({ haptics: event.target.checked })} />
          <span>
            Vibration
            <small>
              Wirkung: kurzes Vibrieren am Handy. Es funktioniert nur auf Geräten und in Browsern mit dieser Funktion
              (z. B. Android-Chrome, nicht iPhone-Safari).
              {vibrationSupported() ? '' : ' Dieses Gerät meldet keine Vibration – die Einstellung bleibt wirkungslos.'}
            </small>
          </span>
        </label>
        <label className="settings-toggle">
          <input type="checkbox" checked={ui.sound} onChange={(event) => setUi({ sound: event.target.checked })} />
          <span>
            Töne
            <small>Wirkung: kurze, leise Klänge (standardmäßig aus). Sie erklingen nur nach deiner eigenen Aktion.</small>
          </span>
        </label>
      </section>

      <section className="progress-panel settings-section" aria-labelledby={`${ids}-goal`}>
        <h2 id={`${ids}-goal`}>Tagesziel</h2>
        <fieldset className="goal-options">
          <legend className="visually-hidden">Tagesziel wählen</legend>
          {DAILY_GOAL_OPTIONS.map((option) => {
            const id = `${ids}-goal-${option.kind}-${option.target}`;
            return (
              <label key={id} htmlFor={id}>
                <input
                  id={id}
                  type="radio"
                  name={`${ids}-daily-goal`}
                  checked={option === progress.dailyGoal}
                  onChange={() => onGoalChange(option)}
                />
                <span>{goalLabel(option)}</span>
              </label>
            );
          })}
        </fieldset>
      </section>

      {appStatus ? (
        <section className="progress-panel settings-section" aria-labelledby={`${ids}-offline`}>
          <h2 id={`${ids}-offline`}>Offline &amp; App</h2>
          <p className="settings-text" data-testid="offline-status">
            {appStatus.offlineReady
              ? 'Die Academy ist auf diesem Gerät offline verfügbar: Lernpfad, Lektionen, Glossar und dein Fortschritt funktionieren auch ohne Verbindung.'
              : 'Die Offline-Nutzung wird eingerichtet, sobald die veröffentlichte Academy einmal vollständig online geladen wurde.'}
          </p>
          <p className="settings-text" data-testid="app-version">
            Version {__APP_VERSION__} ·{' '}
            {appStatus.updateReady
              ? 'Eine neue Version liegt bereit. Sie wird erst nach deiner Zustimmung geladen – nie mitten in einer Lektion.'
              : 'Du nutzt die neueste geladene Version.'}
          </p>
          <p className="settings-text">
            Installieren: Im Browsermenü „App installieren“ oder „Zum Home-Bildschirm“ wählen.
            PDFs und Inhalte anderer Websites werden nicht offline gespeichert.
          </p>
          {appStatus.updateReady && onApplyUpdate ? (
            <div className="settings-actions">
              <button type="button" className="primary-button" onClick={onApplyUpdate}>
                Neue Version laden
              </button>
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="progress-panel settings-section" aria-labelledby={`${ids}-backup`}>
        <h2 id={`${ids}-backup`}>Datensicherung</h2>
        <p className="settings-text">
          Die Sicherung enthält Lektionen, Antworten, Wiederholungsplan, Lerntage, Meilensteine,
          Lesezeichen, Notizen, abgeschlossene Trainerrunden mit deinen eigenen Begründungen,
          Tagesziel und Darstellung. Nicht enthalten sind laufende Wiederholungs- und
          Trainerrunden und die Daten der bisherigen Website.
        </p>
        <p className="settings-text settings-privacy">
          Datenschutz: Notizen und eigene Begründungen stehen im Klartext in der Datei. Gib sie nur
          weiter, wenn du das möchtest.
        </p>
        <div className="settings-actions">
          <button
            type="button"
            className="primary-button"
            onClick={() => {
              onExport();
              setExported(true);
            }}
          >
            Sicherung herunterladen
          </button>
          <label className="secondary-button file-button">
            Sicherung einspielen …
            <input
              ref={fileInput}
              type="file"
              accept="application/json,.json"
              onChange={(event) => void readFile(event.target.files?.[0])}
            />
          </label>
        </div>
        {exported ? (
          <p className="settings-status" role="status">
            Sicherung heruntergeladen.
          </p>
        ) : null}

        {importState.kind === 'error' ? (
          <div className="import-panel import-error" role="alert">
            <h3 tabIndex={-1} ref={resultHeading}>
              „{importState.fileName}“ wurde nicht übernommen
            </h3>
            <p>Dein aktueller Fortschritt ist unverändert.</p>
            <ul>
              {importState.errors.slice(0, 6).map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            {importState.errors.length > 6 ? (
              <p>… und {importState.errors.length - 6} weitere Probleme.</p>
            ) : null}
            <button type="button" className="secondary-button" onClick={() => setImportState({ kind: 'idle' })}>
              Schließen
            </button>
          </div>
        ) : null}

        {importState.kind === 'preview' && preview ? (
          <div className="import-panel" aria-labelledby={`${ids}-preview`}>
            <h3 id={`${ids}-preview`} tabIndex={-1} ref={resultHeading}>
              Vorschau: Sicherung vom {formatDateTime(preview.exportedAt)}
            </h3>
            <p className="settings-text">
              Enthält {plural(preview.file.lessons, 'abgeschlossene Lektion', 'abgeschlossene Lektionen')},{' '}
              {plural(preview.file.answeredQuestions, 'beantwortete Frage', 'beantwortete Fragen')},{' '}
              {plural(preview.file.reviewCards, 'Wiederholungskarte', 'Wiederholungskarten')},{' '}
              {plural(preview.file.learningDays, 'Lerntag', 'Lerntage')},{' '}
              {plural(preview.file.milestones, 'Meilenstein', 'Meilensteine')},{' '}
              {plural(preview.file.bookmarks, 'Lesezeichen', 'Lesezeichen')},{' '}
              {plural(preview.file.notes, 'Notiz', 'Notizen')} und{' '}
              {plural(preview.file.caseRuns, 'abgeschlossene Trainerrunde', 'abgeschlossene Trainerrunden')}. Noch
              wurde nichts verändert.
            </p>

            <fieldset className="settings-choices import-modes">
              <legend>Wie soll die Sicherung übernommen werden?</legend>
              <label>
                <input
                  type="radio"
                  name={`${ids}-mode`}
                  checked={mode === 'merge'}
                  onChange={() => setMode('merge')}
                />
                <span>
                  Zusammenführen (empfohlen)
                  <small>Ergänzt deinen Stand. Bestehende Lernfortschritte bleiben erhalten.</small>
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name={`${ids}-mode`}
                  checked={mode === 'replace'}
                  onChange={() => setMode('replace')}
                />
                <span>
                  Vollständig ersetzen
                  <small>Dein aktueller Stand wird durch die Sicherung ersetzt.</small>
                </span>
              </label>
            </fieldset>

            {mode === 'merge' ? (
              <div className="import-effects">
                {mergeLines(preview).length ? (
                  <ul>
                    {mergeLines(preview).map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p>
                    {preview.merge.changes
                      ? 'Die Sicherung ergänzt Antwort- und Plandaten.'
                      : 'Keine Änderungen – dein Stand enthält bereits alles aus dieser Sicherung.'}
                  </p>
                )}
                {preview.merge.preferencesDiffer ? (
                  <label className="settings-toggle">
                    <input
                      type="checkbox"
                      checked={keepPreferences}
                      onChange={(event) => setKeepPreferences(event.target.checked)}
                    />
                    <span>
                      Mein Tagesziel und meine Darstellung behalten
                      <small>
                        Sicherung: {preferencesLabel(importState.imported)}. Aktuell:{' '}
                        {preferencesLabel(progress)}.
                      </small>
                    </span>
                  </label>
                ) : null}
              </div>
            ) : (
              <div className="import-effects import-warning">
                <p>
                  {replaceLosses(preview).length
                    ? `Nur auf diesem Gerät vorhanden und danach verloren: ${replaceLosses(preview).join(', ')}.`
                    : 'Dein aktueller Stand enthält nichts, was in der Sicherung fehlt.'}
                </p>
                <label className="settings-toggle">
                  <input
                    type="checkbox"
                    checked={confirmReplace}
                    onChange={(event) => setConfirmReplace(event.target.checked)}
                  />
                  <span>Ich möchte meinen aktuellen Stand durch diese Sicherung ersetzen.</span>
                </label>
              </div>
            )}

            <div className="backup-offer">
              <p>
                {mode === 'replace' || preview.merge.updatedNotes > 0
                  ? 'Empfehlung: Sichere zuerst deinen aktuellen Stand.'
                  : 'Optional: Sichere zuerst deinen aktuellen Stand.'}
              </p>
              <button
                type="button"
                className="secondary-button"
                onClick={() => {
                  onExport();
                  setBackupBeforeImport(true);
                }}
              >
                Aktuellen Stand sichern
              </button>
              {backupBeforeImport ? (
                <span className="settings-status" role="status">
                  ✓ Aktueller Stand gesichert.
                </span>
              ) : null}
            </div>

            <div className="settings-actions">
              <button
                type="button"
                className="primary-button"
                disabled={mode === 'replace' && !confirmReplace}
                onClick={() => {
                  onImport(importState.imported, mode, { keepLocalPreferences: keepPreferences });
                  setImportState({
                    kind: 'done',
                    message:
                      mode === 'replace'
                        ? `Dein Stand wurde durch die Sicherung vom ${formatDateTime(preview.exportedAt)} ersetzt.`
                        : `Die Sicherung vom ${formatDateTime(preview.exportedAt)} wurde zusammengeführt.`,
                  });
                }}
              >
                {mode === 'replace' ? 'Stand ersetzen' : 'Zusammenführen'}
              </button>
              <button type="button" className="secondary-button" onClick={() => setImportState({ kind: 'idle' })}>
                Abbrechen
              </button>
            </div>
          </div>
        ) : null}

        {importState.kind === 'done' ? (
          <div className="import-panel import-done" role="status">
            <h3 tabIndex={-1} ref={resultHeading}>
              Import abgeschlossen
            </h3>
            <p>{importState.message}</p>
          </div>
        ) : null}
      </section>

      <section className="progress-panel settings-section danger-zone" aria-labelledby={`${ids}-reset`}>
        <h2 id={`${ids}-reset`}>Zurücksetzen</h2>
        <p className="settings-text">
          Löscht ausschließlich die Daten der Academy in diesem Browser: Lektionen, Antworten,
          Wiederholungen, Lerntage, Meilensteine, Lesezeichen, Notizen und Einstellungen. Der
          Fortschritt der bisherigen Website bleibt unberührt.
        </p>
        {resetDone && !resetOpen ? (
          <p className="settings-status" role="status">
            Die Academy-Daten wurden zurückgesetzt.
          </p>
        ) : null}
        {!resetOpen ? (
          <button
            type="button"
            className="secondary-button danger-button"
            onClick={() => {
              setResetOpen(true);
              setResetConfirmed(false);
              setBackupBeforeReset(false);
              setResetDone(false);
            }}
          >
            Academy-Daten zurücksetzen …
          </button>
        ) : (
          <div className="import-panel import-warning">
            <div className="backup-offer">
              <p>Empfehlung: Sichere zuerst deinen aktuellen Stand.</p>
              <button
                type="button"
                className="secondary-button"
                onClick={() => {
                  onExport();
                  setBackupBeforeReset(true);
                }}
              >
                Aktuellen Stand sichern
              </button>
              {backupBeforeReset ? (
                <span className="settings-status" role="status">
                  ✓ Aktueller Stand gesichert.
                </span>
              ) : null}
            </div>
            <label className="settings-toggle">
              <input
                type="checkbox"
                checked={resetConfirmed}
                onChange={(event) => setResetConfirmed(event.target.checked)}
              />
              <span>Ich möchte alle Academy-Daten in diesem Browser löschen.</span>
            </label>
            <div className="settings-actions">
              <button
                type="button"
                className="primary-button danger-button"
                disabled={!resetConfirmed}
                onClick={() => {
                  onReset();
                  setResetOpen(false);
                  setResetDone(true);
                  setImportState({ kind: 'idle' });
                }}
              >
                Endgültig zurücksetzen
              </button>
              <button type="button" className="secondary-button" onClick={() => setResetOpen(false)}>
                Abbrechen
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
