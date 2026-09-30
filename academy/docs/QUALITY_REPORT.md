# Qualitätsbericht P12

Stand: Ende der Paketreihe P01–P12. Alle Angaben stammen aus automatischen Läufen in Chromium
(Desktop und Pixel-7-Profil). **Echte Geräte wurden nicht getestet** – siehe „Offene Punkte“.

## Was geprüft wurde

| Bereich | Wie | Ergebnis |
| --- | --- | --- |
| Alte Lernstände (Version 1, 2, 5, 8, 9, 10, 12, 14) | `legacyStates.test.ts`: laden, migrieren, exportieren, importieren, zusammenführen | grün |
| Nicht lesbare Daten | Rettungskopie im Test und im Browser (`quality.spec.ts`), Hinweis mit axe geprüft | grün |
| Barrierefreiheit | axe (WCAG 2.2 A/AA) auf allen Hauptansichten inkl. Transfer | grün |
| 360 px, 200 % Zoom | keine Überbreite, Inhalte erreichbar | grün |
| Reduzierte Bewegung | Einstellung „immer reduzieren“ und Systemwunsch | grün |
| Tastatur | Durchlauf aller Ansichten ohne Falle, Fokus sichtbar | grün |
| Touch-Ziele | sichtbare Bedienelemente mindestens 24 × 24 px | grün |
| Größe | `npm run report:size` mit Grenzwerten | siehe unten |

## Größe (gemessen)

- Vor der Runde: Hauptbündel 557 kB roh / 138 kB gzip (Chunk-Warnung über 500 kB).
- Nach dem Nachladen von sechs Ansichten: 468,6 kB roh / 116 kB gzip, keine Warnung.
- Größtes Chunk: Schaubild (ChartFocus) 276 kB roh / 68 kB gzip; größtes Kapitel 27 kB gzip.
- `dist` gesamt 1,91 MB; Offline-Vorladung 32 Dateien, 1,91 MB.

## Änderungen dieser Runde

- Rettungskopie statt stillem Verlust bei nicht lesbaren Daten.
- Sechs selten genutzte Ansichten laden bei Bedarf, jede mit eigenem Lade-Rahmen (ein gemeinsamer
  Rahmen versteckte beim Nachladen bereits geöffnete Ansichten samt Zustand).
- Größere Klickflächen für Textlinks in Themen-, Kurz-lernen- und Wiederholungsansichten.

## Bekannte Grenzen

- Der Ladeblitz „Ansicht wird geladen …“ kann beim ersten Öffnen einer Ansicht kurz sichtbar sein;
  danach ist sie im Speicher (und offline vorgeladen).
- Die sechs C-02-Transferfälle stehen auf `draft`; die Transferprüfung (F-17) ist erst nach
  Freigabe durch Robert sichtbar. Die Themenkarte (C-03) braucht eine fachliche Durchsicht.
- Kein Nachweis zu Screenreadern, echtem iOS-Safari oder Android-Chrome (nur Emulation).
- F-19 ist bewusst zurückgestellt; F-20 (Gerätetest) braucht reale Geräte.

## Offene Punkte für Robert

1. C-02-Fälle fachlich prüfen und freigeben.
2. C-03-Themenkarte fachlich prüfen.
3. Gerätetest nach [`BETA_CHECKLIST.md`](BETA_CHECKLIST.md) durchführen und Ergebnisse eintragen.
4. Entscheiden, ob und wann Beta-Personen eingeladen werden (Deployment und Stores sind nicht Teil
   dieser Runde).
