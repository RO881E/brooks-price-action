import { ACADEMY_PROGRESS_BACKUP_KEY } from './progress';

/*
 * Wiederherstellung unlesbarer Lerndaten (P12). `loadProgress` sichert einen
 * nicht lesbaren Datensatz unter `ACADEMY_PROGRESS_BACKUP_KEY`, bevor die
 * Academy mit einem leeren Stand startet. Diese Funktionen machen die Kopie
 * sichtbar: herunterladen (Rohtext, unverändert) oder bewusst verwerfen.
 * Nichts wird automatisch gelöscht oder eingespielt.
 */

type ReadStorage = Pick<Storage, 'getItem'>;
type WriteStorage = Pick<Storage, 'removeItem'>;

export interface RescuedData {
  /** Unveränderter Rohtext der gesicherten Daten. */
  raw: string;
  /** Größe in Zeichen – nur für die Anzeige. */
  size: number;
}

export function readRescuedData(storage: ReadStorage): RescuedData | null {
  try {
    const raw = storage.getItem(ACADEMY_PROGRESS_BACKUP_KEY);
    return raw ? { raw, size: raw.length } : null;
  } catch {
    return null;
  }
}

export function discardRescuedData(storage: WriteStorage): void {
  try {
    storage.removeItem(ACADEMY_PROGRESS_BACKUP_KEY);
  } catch {
    // Gesperrter Speicher: nichts zu tun, die Kopie bleibt bestehen.
  }
}

export const RESCUE_FILE_NAME = 'wqt-academy-gerettete-daten.txt';
