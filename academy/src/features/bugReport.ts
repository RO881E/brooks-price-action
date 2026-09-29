/*
 * Freiwilliger Beta-Fehlerbericht (F-28): reiner Text, den die Person selbst
 * kopiert oder herunterlädt. Die App sendet nichts. Der Bericht enthält nur:
 * App-Version, grobe Browser-/Geräteangabe, Online-Status, den Bereich der App
 * (erstes Routen-Segment, ohne IDs oder Parameter) und die vom Nutzer
 * geschriebenen Texte. Keine Notizen, Antworten, Begründungen, Speicherinhalte,
 * Importdateien, Geräte-IDs oder URL-Parameter.
 */

export const MAX_REPORT_FIELD = 2000;

export interface BugReportInput {
  what: string;
  steps: string;
  appVersion: string;
  userAgent: string;
  online: boolean;
  hash: string;
}

/** Grobe Angabe wie „Chrome 130 (Desktop, Windows)“ – nur Familie und Hauptversion. */
export function describeBrowser(userAgent: string): string {
  const ua = userAgent ?? '';
  const versionOf = (pattern: RegExp) => pattern.exec(ua)?.[1];
  let browser = 'Unbekannter Browser';
  let version: string | undefined;
  if ((version = versionOf(/Edg(?:e|A|iOS)?\/(\d+)/))) browser = 'Edge';
  else if ((version = versionOf(/OPR\/(\d+)/))) browser = 'Opera';
  else if ((version = versionOf(/(?:Firefox|FxiOS)\/(\d+)/))) browser = 'Firefox';
  else if ((version = versionOf(/(?:Chrome|CriOS)\/(\d+)/))) browser = 'Chrome';
  else if (/Safari\//.test(ua) && (version = versionOf(/Version\/(\d+)/))) browser = 'Safari';

  let system = 'unbekanntes System';
  if (/Android/i.test(ua)) system = 'Android';
  else if (/iPhone|iPad|iPod/.test(ua)) system = 'iOS';
  else if (/Windows/.test(ua)) system = 'Windows';
  else if (/Macintosh|Mac OS X/.test(ua)) system = 'macOS';
  else if (/Linux|X11/.test(ua)) system = 'Linux';
  const device = /Mobi|Android|iPhone|iPod/.test(ua) ? 'Mobil' : /iPad|Tablet/.test(ua) ? 'Tablet' : 'Desktop';
  return `${browser}${version ? ` ${version}` : ''} (${device}, ${system})`;
}

/** Nur der Bereich (`#/lesson/abc?x=1` → „lesson“); IDs und Parameter fallen weg. */
export function describeArea(hash: string): string {
  const segment = /^#?\/?([a-z]{1,20})(?=[/?#]|$)/.exec(hash ?? '')?.[1];
  return segment ?? 'Lernpfad';
}

export function normalizeField(value: string): string {
  return value.replace(/\r\n?/g, '\n').trim().slice(0, MAX_REPORT_FIELD);
}

export function isReportComplete(what: string): boolean {
  return normalizeField(what).length > 0;
}

export function buildBugReport(input: BugReportInput): string {
  const what = normalizeField(input.what);
  const steps = normalizeField(input.steps);
  return [
    'WQT Academy – Fehlerbericht',
    '',
    `App-Version: ${input.appVersion}`,
    `Browser: ${describeBrowser(input.userAgent)}`,
    `Verbindung: ${input.online ? 'online' : 'offline'}`,
    `Bereich: ${describeArea(input.hash)}`,
    '',
    'Was ist passiert?',
    what || '(noch nicht beschrieben)',
    '',
    'Wie lässt es sich nachstellen?',
    steps || '(keine Angabe)',
    '',
  ].join('\n');
}

export const BUG_REPORT_FILENAME = 'wqt-academy-fehlerbericht.txt';
