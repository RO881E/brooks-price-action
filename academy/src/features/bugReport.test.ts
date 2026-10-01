import { describe, expect, it } from 'vitest';
import { MAX_REPORT_FIELD, buildBugReport, describeArea, describeBrowser, isReportComplete } from './bugReport';

const chrome = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.92 Safari/537.36';
const iphone = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1';
const pixel = 'Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36';

describe('Beta-Fehlerbericht (F-28)', () => {
  it('beschreibt Browser und Gerät nur grob', () => {
    expect(describeBrowser(chrome)).toBe('Chrome 130 (Desktop, Windows)');
    expect(describeBrowser(iphone)).toBe('Safari 17 (Mobil, iOS)');
    expect(describeBrowser(pixel)).toBe('Chrome 131 (Mobil, Android)');
    expect(describeBrowser(chrome + ' Edg/130.0.1')).toContain('Edge 130');
    expect(describeBrowser('')).toBe('Unbekannter Browser (Desktop, unbekanntes System)');
  });

  it('nennt nur den Bereich, nie IDs oder Parameter', () => {
    expect(describeArea('#/lesson/price-action-trends.chapter-01.x?token=geheim')).toBe('lesson');
    expect(describeArea('#/train/bar-case.a/review/run-1')).toBe('train');
    expect(describeArea('')).toBe('Lernpfad');
    expect(describeArea('#/')).toBe('Lernpfad');
    expect(describeArea('#/GEHEIM123')).toBe('Lernpfad');
  });

  it('enthält nur die erlaubten Angaben und die Nutzertexte', () => {
    const report = buildBugReport({
      what: '  Die Frage lädt nicht.\r\n',
      steps: '',
      appVersion: '0.1.0',
      userAgent: chrome,
      online: false,
      hash: '#/lesson/secret-id?note=privat',
    });
    expect(report).toContain('App-Version: 0.1.0');
    expect(report).toContain('Browser: Chrome 130 (Desktop, Windows)');
    expect(report).toContain('Verbindung: offline');
    expect(report).toContain('Bereich: lesson');
    expect(report).toContain('Die Frage lädt nicht.');
    expect(report).toContain('(keine Angabe)');
    expect(report).not.toContain('secret-id');
    expect(report).not.toContain('privat');
    expect(report).not.toContain('\r');
  });

  it('Pflichtfeld und Längenbegrenzung', () => {
    expect(isReportComplete('   ')).toBe(false);
    expect(isReportComplete('x')).toBe(true);
    const long = buildBugReport({ what: 'a'.repeat(MAX_REPORT_FIELD + 500), steps: '', appVersion: '1', userAgent: '', online: true, hash: '' });
    expect(long).toContain('a'.repeat(MAX_REPORT_FIELD));
    expect(long).not.toContain('a'.repeat(MAX_REPORT_FIELD + 1));
  });
});
