# Release-Checkliste WQT Academy

Kurz abhaken, bevor ein Stand nach `main` geht. Alle Befehle im Ordner `academy/`.

## Automatisch

- [ ] `npm test` – Unit- und Komponententests grün.
- [ ] `npm run build` – ohne Fehler und **ohne** Warnung „Some chunks are larger than 500 kB“.
- [ ] `npm run test:e2e` – vollständige Suite auf Desktop **und** Mobil grün. Sie enthält:
  - `tests/release.spec.ts`: alle Hauptansichten mit axe-Prüfung (WCAG 2.2 A/AA), keine
    Überbreite bei 360 px, ein vollständiger Lernabschnitt nur mit der Tastatur (inklusive
    falscher Antwort und neuem Versuch), Review, Fortschritt, Suche, Lesezeichen/Notiz,
    Export/Import per Tastatur und der Hinweis bei nicht ladbarem Schaubild;
  - `tests/pwa.spec.ts`: Produktions-Build unter `/academy/`, Offline-Aufruf, Updates,
    fehlgeschlagene Dateien, keine PDFs oder fremden Ressourcen im Cache;
  - `tests/academy.spec.ts`: die Funktionspakete F-01 bis F-08.

## Von Hand (wenige Minuten)

- [ ] Produktions-Build ansehen: `npm run build && npm run preview` – Konsole ohne Fehler.
- [ ] Schmale Mobilansicht (360 px) und Desktop kurz durchklicken: Lernpfad, eine Lektion,
      Üben, Fortschritt, Glossar, Einstellungen.
- [ ] Eine Lektion nur mit Tab, Pfeiltasten, Enter und Leertaste bis zur Auswertung bedienen;
      der Fokus ist jederzeit sichtbar.
- [ ] Mit Screenreader (z. B. VoiceOver oder NVDA) eine Frage beantworten: Schrittwechsel,
      „richtig“/„falsch“ und „Gespeichert“ werden angesagt.
- [ ] „Bewegung immer reduzieren“ einschalten: keine Einblendanimationen mehr.
- [ ] Nach dem Deployment einmal online öffnen, dann offline neu laden.

## Bekannte Grenzen dokumentieren

- [ ] Bundle-Größen im Pull Request (vorher/nachher) angeben.
- [ ] Neue Abhängigkeiten im Pull Request begründen.
- [ ] Datenmodell geändert? Dann Migration und `ACADEMY_PROGRESS_VERSION` prüfen.
