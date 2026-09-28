# WQT Academy – Funktionsroadmap

Stand: 28. September 2026, nach Kapitel 4 und dem Ausbau von Kapitel 3.

Diese Roadmap betrifft ausschließlich die Funktionalität der React-Academy unter
`academy/`. Neue Buchinhalte und die WQT-Fachbände sind nicht Teil dieser
Arbeitspakete.

## Zielbild

Die Academy soll sich wie ein moderner, kursbasierter Lerntrainer anfühlen:
kleine Lektionen, ein klarer nächster Schritt, gezielte Wiederholung und gut
verständlicher Fortschritt. Duolingo ist eine Inspiration für den Lernfluss,
nicht für künstlichen Druck oder eine Kopie der Oberfläche.

Die Anwendung bleibt zunächst **local-first und kostenlos betreibbar**. Alle
Kernfunktionen müssen ohne Benutzerkonto, bezahlten Dienst oder eigenes Backend
funktionieren. Eine spätere Cloud-Synchronisierung darf vorbereitet, aber in
dieser Roadmap nicht vorausgesetzt werden.

## Ausgangslage

Der technische Pilot besitzt bereits:

- einen Lernpfad und einen Buchmodus;
- 124 veröffentlichte Mikro-Lektionen in Quellenreihenfolge;
- Erklärungen, Schaubilder, Vergleiche, Fragen und Zusammenfassungen;
- einen einfachen Übungsmodus für abgeschlossene Lektionen;
- ein durchsuchbares Glossar;
- sequenzielle Freischaltung;
- lokalen Fortschritt unter `wqt-academy-progress-v1`;
- lesende Kompatibilität mit `brooks-progress` und `brooks-tr-best`;
- Unit-, Render- und Playwright-Tests für die wichtigsten Grundabläufe.

Noch fehlen unter anderem ein exaktes Fortsetzen innerhalb einer Lektion,
wiederholbare Antworten, belastbare Mastery-Werte, eine intelligente
Wiederholungswarteschlange, eine Fortschrittsseite, Datensicherung und ein
Offline-Modus.

## Verbindliche Leitplanken

1. **Lernnutzen vor Gamification.** Erst Speichern, Bewerten und Wiederholen
   zuverlässig machen; danach XP, Streaks und Abzeichen ausbauen.
2. **Buchreihenfolge schützen.** Funktionen dürfen weder Lektionen umsortieren
   noch inhaltliche Abkürzungen erzwingen.
3. **Fortschritt niemals verlieren.** Jede Änderung am Datenmodell braucht eine
   explizite Migration und Tests mit alten, fehlerhaften und leeren Daten.
4. **Bestehende Schlüssel erhalten.** `brooks-progress`, `brooks-tr-best` und
   `wqt-academy-progress-v1` werden weder gelöscht noch still überschrieben.
5. **Local-first.** Keine Anmeldung, Datenbank, Analytics, Werbung oder
   kostenpflichtige API in den Arbeitspaketen F-01 bis F-10.
6. **Eine Funktion pro Pull Request.** Claude implementiert immer nur das
   ausdrücklich beauftragte Paket und beginnt das nächste nicht selbstständig.
7. **Logik aus Komponenten heraushalten.** Migration, Bewertung, Terminierung
   und Statistik gehören in kleine, rein testbare Funktionen.
8. **Mobil und zugänglich.** Jede neue Funktion muss per Tastatur bedienbar,
   verständlich beschriftet und bei schmaler Breite ohne horizontalen Überlauf
   nutzbar sein.
9. **Keine Lerninhalte nebenbei ändern.** Textkorrekturen oder neue Lektionen
   gehören in separate Content-Pull-Requests.
10. **Keine ungeprüften Bibliotheken.** Eine neue Abhängigkeit braucht einen
    konkreten Nutzen, geringe Wartungskosten und eine Begründung im Pull Request.

## Reihenfolge und Abhängigkeiten

| Paket | Ergebnis | Voraussetzung | Priorität |
| --- | --- | --- | --- |
| F-01 | Exaktes Fortsetzen und stabile URLs | aktueller Pilot | Jetzt |
| F-02 | Wiederholbare Fragen und Lektionsabschluss | F-01 | Jetzt |
| F-03 | Intelligente Wiederholungswarteschlange | F-02 | Jetzt |
| F-04 | Verständliche Fortschrittsseite | F-03 | Jetzt |
| F-05 | Tagesziel, Streak und Meilensteine | F-04 | Danach |
| F-06 | Globale Suche und Sprungnavigation | F-01 | Danach |
| F-07 | Lesezeichen und persönliche Notizen | F-01 | Danach |
| F-08 | Export, Import und sichere Einstellungen | F-05, F-07 | Danach |
| F-09 | Installierbare Offline-App | F-08 | Später |
| F-10 | Barrierefreiheit, Leistung und Release-Gate | F-01 bis F-09 | Später |

F-06 und F-07 dürfen nach F-04 in umgekehrter Reihenfolge umgesetzt werden.
Alle anderen Abhängigkeiten bleiben bestehen.

---

## F-01 – Exaktes Fortsetzen und stabile URLs

### Nutzerergebnis

Wer eine Lektion bei Schritt 3 schließt oder den Browser neu lädt, kann genau an
dieser Stelle weitermachen. Ansichten und Lektionen besitzen teilbare,
reload-feste URLs.

### Umfang

- Eine kleine, typisierte Navigationsschicht für Lernpfad, Buchmodus, Üben,
  Glossar und Lektionen.
- Für statisches Hosting geeignete Hash-URLs, zum Beispiel `#/path` und
  `#/lesson/<lesson-id>?step=3`.
- Speicherung einer begonnenen Lektion und des letzten gültigen Schritts.
- Sichtbarer Unterschied zwischen „Weiterlernen“ und „Nächste Lektion“.
- Validierung ungültiger oder veralteter URLs mit sicherem Rückfall auf den
  Lernpfad.
- Migration des Academy-Fortschritts auf ein erweiterbares Datenmodell. Alte
  Daten bleiben lesbar; die drei bestehenden Schlüssel bleiben erhalten.
- Zurück-/Vorwärts-Navigation des Browsers funktioniert erwartungsgemäß.

### Nicht enthalten

- keine neuen Lerninhalte;
- keine Punkte-, Streak- oder Mastery-Berechnung;
- keine neue Routing-Bibliothek, sofern die kleine Hash-Navigation ohne sie
  verständlich und testbar bleibt.

### Abnahme

- Neustart und Reload öffnen eine begonnene Lektion am gespeicherten Schritt.
- Eine bereits abgeschlossene Lektion kann bewusst von vorn geöffnet werden.
- Gelöschte oder unbekannte Lektions-IDs erzeugen keinen Fehler.
- Migrationstests decken v1, leere Daten, beschädigtes JSON und unbekannte
  Zusatzfelder ab.
- Bestehende E2E-Tests bleiben grün; neue Tests prüfen Reload, Deep Link und
  Browser-Zurück.

## F-02 – Wiederholbare Fragen und Lektionsabschluss

### Nutzerergebnis

Fragen sind keine einmalige Sackgasse mehr. Eine falsche Antwort kann nach der
Erklärung erneut versucht werden. Am Ende erscheint eine klare
Lektionsauswertung.

### Umfang

- Getrennte Speicherung von aktueller Auswahl, Versuchen und Ergebnis.
- Schaltfläche „Noch einmal versuchen“ nach einer falschen Antwort.
- Die richtige Lösung bleibt samt Erklärung sichtbar, ohne den Nutzer zu
  bestrafen.
- Abschlussansicht mit beantworteten Fragen, Erstversuch-Trefferquote,
  abgeschlossener Lektion und tatsächlich verdienter XP.
- XP einer Lektion werden höchstens einmal vergeben, auch nach Reload oder
  erneutem Durchspielen.
- „Lektion wiederholen“ und „Zurück zum Lernpfad“ als eindeutige Aktionen.
- Bereits gespeicherte Antworten aus älteren Versionen bleiben erhalten, ohne
  erfundene historische Versuchsdaten zu erzeugen.

### Nicht enthalten

- noch kein zeitgesteuertes Spaced Repetition;
- keine Sperre der nächsten Lektion aufgrund einer schlechten Quote;
- keine Streaks oder Abzeichen.

### Abnahme

- Falsch → Erklärung → neuer Versuch → richtig funktioniert ohne Reload.
- Mehrfaches Abschließen erhöht XP und Abschlusszahl nicht doppelt.
- Ein Reload in der Abschlussansicht beschädigt den Fortschritt nicht.
- Unit-Tests prüfen Erstversuch, Wiederholung, Idempotenz und alte Antworten.
- Playwright prüft einen richtigen und einen falschen Lernpfad auf Desktop und
  Mobil.

## F-03 – Intelligente Wiederholungswarteschlange

### Nutzerergebnis

Der Übungsbereich zeigt zuerst das, was Robert tatsächlich wiederholen sollte,
statt alle Fragen immer in derselben Reihenfolge abzuspulen.

### Umfang

- Rein testbarer Scheduler mit einfachen Intervallen, zum Beispiel 1, 3, 7,
  14 und 30 Tage.
- Falsche Antwort setzt eine Frage auf ein kurzes Intervall zurück; richtige
  Antworten verlängern das Intervall schrittweise.
- Übungsstartseite mit mindestens:
  - „Heute fällig“;
  - „Fehler trainieren“;
  - „Kapitel auswählen“;
  - „Alles mischen“.
- Nur Fragen aus bereits abgeschlossenen beziehungsweise zugänglichen
  Lektionen werden verwendet.
- Sitzungsfortschritt, direkte Erklärungen und Ergebnisübersicht.
- Deterministische Auswahl in Tests; zufällige Reihenfolge darf die Anwendung
  nicht untestbar machen.
- Datumslogik arbeitet mit lokalen Kalendertagen und nicht mit rohen
  24-Stunden-Differenzen.

### Nicht enthalten

- kein komplexer SM-2-Algorithmus;
- keine Push-Nachrichten;
- keine Cloud-Synchronisierung.

### Abnahme

- Scheduler-Tests frieren die Zeit ein und prüfen alle Intervallwechsel.
- Eine falsche Wiederholungsantwort wird erneut früher fällig.
- Leere, erstmalige und vollständig erledigte Warteschlangen besitzen klare
  Empty States.
- Reload setzt eine laufende Wiederholung nicht ungewollt zurück.

## F-04 – Fortschrittsseite

### Nutzerergebnis

Eine neue Ansicht erklärt auf einen Blick, was geschafft wurde, wo Schwächen
liegen und was als Nächstes sinnvoll ist.

### Umfang

- Neuer Navigationspunkt „Fortschritt“.
- Kennzahlen, die aus echten Daten abgeleitet werden:
  - abgeschlossene Lektionen und Kursfortschritt;
  - einmalig verdiente XP;
  - Erstversuch-Trefferquote;
  - heute fällige Wiederholungen;
  - aktive Lerntage der letzten 7 und 30 Tage;
  - Fortschritt je Buchabschnitt.
- Kleine, eigenständige CSS-/SVG-Visualisierungen ohne schwere Chartbibliothek.
- Handlungsempfehlung mit direktem Einstieg in nächste Lektion oder fällige
  Wiederholung.
- Saubere Empty States für neue Nutzer und alte migrierte Daten.

### Nicht enthalten

- keine Rendite-, Trading- oder Leistungsprognosen;
- kein Vergleich mit anderen Nutzern;
- keine künstliche Mastery-Zahl ohne nachvollziehbare Definition.

### Abnahme

- Jede Kennzahl besitzt eine zentrale Berechnungsfunktion und Unit-Tests.
- Keine Division durch null, `NaN` oder negative Werte.
- Desktop und 360-Pixel-Mobilansicht sind ohne Überlauf lesbar.
- Screenreader erhalten für Diagramme eine textliche Zusammenfassung.

## F-05 – Tagesziel, Streak und Meilensteine

### Nutzerergebnis

Regelmäßiges Lernen wird sichtbar belohnt, ohne Schuldgefühl oder aggressive
Mechaniken.

### Umfang

- Wählbares Tagesziel auf Basis von XP oder abgeschlossenen Lernaktivitäten.
- Streak zählt lokale Kalendertage mit echter Aktivität. Bloßes Öffnen der App
  zählt nicht.
- Echte Aktivität: Lektionsabschluss oder beendete Wiederholungssitzung mit
  beantworteten Fragen.
- Wochenansicht mit erfüllten und offenen Tagen.
- Kleine Meilensteine, zum Beispiel erste Lektion, erstes Kapitel, 1000 XP,
  sieben Lerntage und eine komplett gemeisterte Wiederholungsrunde.
- Dezente Abschlussanimation unter Beachtung von `prefers-reduced-motion`.
- Alle Belohnungen werden idempotent vergeben.

### Nicht enthalten

- keine Rangliste, In-App-Währung, Bezahlschranke oder Streak-Kaufoption;
- keine manipulativen Verlustwarnungen;
- keine Benachrichtigungen ohne gesonderten Auftrag.

### Abnahme

- Tests decken Monatswechsel, Jahreswechsel, Sommer-/Winterzeit und
  ausgelassene Tage ab.
- Reload, Wiederholen und Zurücksetzen einer Ansicht erzeugen keine doppelten
  XP oder Abzeichen.
- Ohne Aktivität bleibt der Streak unverändert.

## F-06 – Globale Suche und Sprungnavigation

### Nutzerergebnis

Eine Suche findet Lektionen, Schrittüberschriften und Glossarbegriffe und führt
direkt zum richtigen Ort.

### Umfang

- Globale Suche über Lektionsname, Zusammenfassung, Quelle, Schrittüberschrift,
  Glossarterm und Alias.
- Öffnen über sichtbare Schaltfläche und Tastenkürzel `/`, sofern kein
  Eingabefeld fokussiert ist.
- Gruppierte Treffer mit Typ, Buchabschnitt und Zugriffsstatus.
- Treffer einer verfügbaren Lektion öffnet den passenden Schritt.
- Gesperrte Treffer dürfen als Vorschau erscheinen, umgehen aber niemals die
  Freischaltungslogik.
- Suchlogik normalisiert Groß-/Kleinschreibung und deutsche Umlaute sinnvoll.

### Nicht enthalten

- keine externe Suchmaschine oder serverseitige Indexierung;
- keine Änderung der Content-Reihenfolge.

### Abnahme

- Suche ist vollständig per Tastatur nutzbar und hält den Fokus korrekt im
  Dialog.
- Escape schließt, Enter öffnet den markierten Treffer.
- Unit-Tests prüfen Alias, Umlaut, leere Suche und gesperrte Lektion.
- E2E prüft Suchsprung und anschließendes Browser-Zurück.

## F-07 – Lesezeichen und persönliche Notizen

### Nutzerergebnis

Wichtige Stellen lassen sich markieren und mit eigenen Gedanken versehen.

### Umfang

- Lesezeichen auf Lektions- und optional auf Schritt-Ebene.
- Persönliche Klartextnotiz pro Lektion oder Schritt mit Autosave-Anzeige.
- Übersicht „Gespeichert“ mit Sprung zur Fundstelle.
- Notizen werden ausschließlich als Text gerendert; kein ungefiltertes HTML.
- Speicherung im migrierbaren Academy-Datenmodell.
- Löschen besitzt eine kurze Rückgängig-Option.

### Nicht enthalten

- kein Rich-Text-Editor, Dateiupload oder Cloudkonto;
- keine öffentlichen Kommentare;
- keine automatisch erzeugten KI-Zusammenfassungen.

### Abnahme

- Sonderzeichen, lange Notizen und leere Inhalte beschädigen den Datensatz
  nicht.
- Autosave verliert beim schnellen Ansichtswechsel keine bestätigte Eingabe.
- Tastatur, Screenreader-Labels und Mobilansicht sind geprüft.

## F-08 – Export, Import und sichere Einstellungen

### Nutzerergebnis

Der lokale Fortschritt kann kostenlos gesichert, auf ein anderes Gerät
übertragen und kontrolliert zurückgesetzt werden.

### Umfang

- JSON-Export mit Formatversion, Exportdatum und Academy-Daten.
- Import mit Schema-Prüfung und verständlicher Vorschau vor jeder Änderung.
- Standardmäßig sicherer Merge; vollständiges Ersetzen nur nach ausdrücklicher
  Bestätigung.
- Import darf unbekannte, gefährliche oder übergroße Daten nicht ungeprüft
  übernehmen.
- Einstellungen für Tagesziel, reduzierte Animation und optionale kompakte
  Darstellung.
- Reset löscht nur Academy-eigene Daten. `brooks-progress` und
  `brooks-tr-best` bleiben unberührt.
- Vor dem Überschreiben wird automatisch ein herunterladbares Backup
  angeboten.

### Nicht enthalten

- kein Google-, Apple- oder E-Mail-Login;
- kein Server-Backup;
- keine Synchronisierung im Hintergrund.

### Abnahme

- Export → Reset → Import stellt den getesteten Stand wieder her.
- Ungültige Version, beschädigtes JSON und fehlende Felder werden ohne
  Datenverlust abgelehnt.
- Merge-Regeln sind dokumentiert und vollständig unit-getestet.

## F-09 – Installierbare Offline-App

### Nutzerergebnis

Die Academy lässt sich auf dem Handy installieren und bereits geladene Inhalte
auch ohne Verbindung öffnen.

### Umfang

- Web-App-Manifest mit WQT-Academy-Name, Farben und eigenen Icons.
- Service Worker für App-Shell, gebündelte Kursdaten und statische Assets.
- Klare Update-Strategie: neue Version wird angekündigt und erst nach
  Zustimmung aktiviert, wenn sonst laufender Fortschritt gefährdet wäre.
- Verständliche Offline- und Update-Hinweise.
- Cache-Namen werden versioniert und alte Caches kontrolliert entfernt.
- Funktioniert mit statischem Hosting und relativem Basis-Pfad.

### Nicht enthalten

- keine Hintergrundsynchronisierung oder Push-Benachrichtigungen;
- keine PDFs oder fremden Ressourcen blind vollständig cachen.

### Abnahme

- Produktions-Build registriert den Service Worker ohne Konsolenfehler.
- Nach einem Online-Aufruf funktionieren Lernpfad, eine Lektion, Glossar und
  gespeicherter Fortschritt offline.
- Updates führen nicht zu einer Endlosschleife oder einem weißen Bildschirm.

## F-10 – Barrierefreiheit, Leistung und Release-Gate

### Nutzerergebnis

Die ausgebauten Funktionen bleiben schnell, stabil und für Tastatur- sowie
Screenreader-Nutzer verständlich.

### Umfang

- Semantische und visuelle Prüfung aller Hauptabläufe.
- Fokusführung in Dialogen, Lesson Player, Suche, Import und Ergebnisansicht.
- Sinnvolle Live-Regions für Antworten und gespeicherte Zustände.
- Farbkontrast und Nicht-Farb-Signale für richtig, falsch, gesperrt und fällig.
- Code-Splitting für große Chart- und Content-Bündel; vorhandene
  Bundle-Warnung gezielt reduzieren.
- Fehlergrenze mit verständlicher Wiederherstellung statt leerer Seite.
- E2E-Release-Suite für Desktop und Mobil mit allen Hauptansichten, mindestens
  einem vollständigen Lernpfad, Review, Suche, Backup und Offline-Prüfung.
- Kurze Release-Checkliste im Repository.

### Nicht enthalten

- kein optischer Komplettumbau;
- keine Content-Umsortierung;
- keine kosmetische Metrik-Optimierung zulasten der Verständlichkeit.

### Abnahme

- `npm test`, `npm run build` und die vollständige E2E-Suite bestehen.
- Keine ungefangenen JavaScript-Fehler in den getesteten Abläufen.
- Keine horizontale Seitenüberbreite bei 360 Pixeln.
- Hauptabläufe sind ohne Maus abschließbar.
- Der Pull Request dokumentiert Bundle-Größe vor und nach der Änderung.

---

## Definition of Done für jedes Paket

Ein Paket gilt nur dann als fertig, wenn alle folgenden Punkte erfüllt sind:

- Arbeit beginnt auf dem aktuellen `main` in einem neuen `claude/`-Branch.
- Es wurde ausschließlich das beauftragte Paket umgesetzt.
- Datenmigration und Rückwärtskompatibilität sind geprüft, sofern der
  Fortschritt betroffen ist.
- Neue Geschäftslogik besitzt Unit-Tests.
- Betroffene Nutzerabläufe besitzen mindestens einen Integration- oder
  Playwright-Test.
- `npm test` und `npm run build` sind bestanden.
- `npm run test:e2e` ist bestanden; falls Chromium technisch nicht verfügbar
  ist, wird das transparent im Pull Request dokumentiert und nicht als
  bestanden ausgegeben.
- Desktop und schmale Mobilansicht wurden geprüft.
- Es gibt keine neuen Konsolenfehler.
- Der Pull Request beschreibt Ergebnis, Dateien, Tests, Migration und bekannte
  Grenzen.
- Claude pusht den Branch und eröffnet den Pull Request, führt ihn aber niemals
  selbst zusammen.

## Nicht Teil dieser Roadmap

- neue Kapitel oder Buchinhalte;
- Einbindung der WQT-Fachbände;
- Echtgeld-Trading, Broker- oder Prop-Firm-Anbindung;
- Community, Ranglisten oder soziale Profile;
- Bezahlfunktionen;
- Konten, Cloud-Datenbank und geräteübergreifende Live-Synchronisierung;
- KI-Chat oder automatisch erzeugte Trading-Signale.

Diese Punkte benötigen später jeweils eine eigene Produktentscheidung,
Datenschutzprüfung und technische Roadmap.
