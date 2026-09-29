# WQT Academy – Funktionsroadmap Phase 2

Stand: 29. September 2026. Gegenstand ist ausschließlich die Academy zu Al Brooks'
*Trading Price Action Trends* unter `academy/`. Diese Roadmap beschreibt die
Funktionalität, die Claude nach den abgeschlossenen Paketen F-01 bis F-10
entwickeln soll. Die Buchinhalte, Quellenprüfung und neuen Chartfälle bleiben
eine gesonderte redaktionelle Arbeit.

## Ausgangspunkt und Ziel

F-01 bis F-10 sind auf `main`: stabile Links und exaktes Fortsetzen,
wiederholbare Fragen, Review, Fortschritt, Ziele, Suche, Notizen, Backup,
installierbare Offline-PWA und Release-Tests. Diese Funktionen werden nicht
erneut beauftragt. Der „Buchmodus“ ist derzeit eine Kapitelübersicht mit Links
auf dieselben Lektionen; er ist noch kein fortlaufender Leser. Die Diagramme
sind auf schmalen Displays oft zu klein. Der Kurs lädt einen gemeinsamen
Kapitel-Chunk; mit weiteren Kapiteln wächst er. Ein Bar-für-Bar-Trainer fehlt.

PR #23 enthält Kapitel 5 und ist zum Zeitpunkt dieses Plans noch offen.
Vor produktiven Funktionsänderungen wird sein Merge-Stand geprüft. Erst nach
einem Merge darf eine Aufgabe Kapitel 5 als Inhalt auf `main` voraussetzen.

**Zielbild:** Auf dem Handy verständlich lesen und Charts prüfen; Brooks'
Gedankengang in Buchreihenfolge durcharbeiten; anschließend Entscheidungen an
neuen, eigens erstellten Chartfällen trainieren und eigene Fehler gezielt
bearbeiten. Die Website bleibt ohne Konto, Backend, bezahlte Dienste und
Store-Eintrag vollständig benutzbar.

## Verbindliche Arbeitsregeln

1. Für **jedes** F-Paket ein eigener `claude/`-Branch vom aktuellen `main`,
   ein fokussierter PR und kein selbstständiger Merge. Nach dem PR auf den
   nächsten Auftrag warten. Die fertigen Prompts stehen in
   [CLAUDE_PROMPTS_PHASE_2.md](CLAUDE_PROMPTS_PHASE_2.md).
2. Den bestehenden Lernpfad, die Buchreihenfolge, IDs, Antworten, XP-Regeln,
   Freischaltung und Speicherstände erhalten. Ein neuer Lesefluss darf keine
   Lektion doppelt abschließen und keine XP doppelt vergeben.
3. `brooks-progress`, `brooks-tr-best` und `wqt-academy-progress-v1` bleiben
   erhalten. Bei neuen gespeicherten Feldern: Datenmodell-Version erhöhen,
   Migration, Backup/Import/Merge/Reset und Altstände prüfen. Bestehende
   Schlüssel nicht umbenennen.
4. Vorhandene Lehrtexte und Chartfälle als Quelle im UI wiederverwenden. Claude
   schreibt keine neuen Brooks-Lehren, erfindet keine Marktbeispiele und
   rekonstruiert keine Buchabbildungen. Neue Trainingsfälle kommen in einem
   eigenen, geprüften Content-PR.
5. Lernentscheidungen sind didaktisch: kein Live-Kursfeed, Brokerzugriff,
   Echtgeldhandel, Renditeversprechen oder automatisches Handelssignal.
6. React-/UI-Zustand von Auswertungs- und Speicherlogik trennen. Öffentliche
   Routen validieren, unbekannte IDs sicher behandeln, dynamische Inhalte nur
   als Klartext ausgeben.
7. Jede neue Ansicht funktioniert auf 360 px ohne Seitenüberlauf, per Tastatur
   und mit Screenreader; `prefers-reduced-motion` beachten. Auf Mobilgerät und
   Desktop prüfen, einschließlich installierter Offline-PWA.
8. `npm test`, `npm run build`, `npm run test:e2e` im Ordner `academy/`
   ausführen. Nicht ausführbare E2E-Tests im PR ausdrücklich als **nicht
   ausgeführt** melden. Für reine Architekturpakete ohne Nutzeransicht sind
   aussagekräftige Unit- und Integrationstests die Abnahme; bestehende
   E2E-Suite läuft trotzdem als Regression.
9. Neue Abhängigkeiten nur mit begründetem Nutzen. Keine Konten,
   Nutzungsverfolgung, Push-Nachrichten oder bezahlten APIs hinzufügen.

## Reihenfolge

| Schritt | Ergebnis | Voraussetzung | Priorität |
| --- | --- | --- | --- |
| G-00 | PR #23 und Mobilansicht prüfen; Robert entscheidet über Merge | offen | vor Kapitel-5-bezogenen Arbeiten |
| F-11 | Diagramme vergrößern und bedienen | F-10; für Kapitel 5 G-00 | sofort |
| F-12 | Kurs kapitelweise laden, Suche/Offline intakt halten | F-10; vor Kapitel 6 | sofort |
| F-13 | Wirklicher Buchleser mit Fortsetzungsposition | F-12 | hoch |
| F-14 | Datenvertrag und reine Logik für Bar-für-Bar-Fälle | F-12 | hoch |
| C-01 | Kuratierte Erstfälle als eigener Content-PR | F-14 | redaktioneller Übergabepunkt |
| F-15 | Sichtbarer Bar-für-Bar-Trainer | F-14 und C-01 | hoch |
| F-16 | Erklärbare Fehlerübersicht mit passenden Lernlinks | F-15 | mittel |
| C-02 | Neue, ungesehene Transferfälle als Content-PR | F-15 | redaktioneller Übergabepunkt |
| F-17 | Transferprüfung mit unabhängigen Fällen | F-15 und C-02 | mittel |
| F-18 | Kurze Einführung und verständliche Modi | F-13, F-15 | mittel |
| F-19 | Wählbare Offline-Kapitel, falls tatsächlicher Bedarf | F-12, F-13 | später |
| F-20 | Öffentliche PWA-Beta vorbereiten und auf Geräten prüfen | F-11 bis F-18 | vor Veröffentlichung |
| S-01 | Store-Paket für Android/iPhone | eigene Entscheidung | optional, kein automatischer Claude-Auftrag |

F-11 und F-12 können unabhängig nacheinander erfolgen. F-19 ist nur nötig,
wenn die vollständige Vorladung aller Kapitel in F-12 auf realen Geräten ein
messbares Download- oder Speicherproblem erzeugt. C-01 und C-02 sind keine
Claude-Funktionspakete und werden nicht im selben PR wie die Engine gemischt.

---

## G-00 – Offenen Kapitel-5-PR prüfen

PR #23 gegen den aktuellen `main` prüfen: Book-Order und stabile IDs, die drei
Chartfälle, Mobilbreite, Chartlesbarkeit, `npm test`, Build und E2E auf einem
System mit Chromium. Echte Probleme mit Dateipfad und reproduzierbarem
Schritt melden; nicht selbst mergen. Ist #23 inzwischen gemergt, den Gate-Status
im nächsten PR nur kurz dokumentieren. Diese Prüfung ändert keinen Content.

## F-11 – Diagramm-Fokus für Mobil und Desktop

**Nutzerablauf.** Jedes bestehende Schaubild erhält eine sichtbare Aktion
„Vergrößern“. Eine Dialogansicht zeigt das Diagramm mit gut lesbaren Labels;
Mausrad/Buttons beziehungsweise Touch erlauben Zoom, Ziehen verschiebt die
Ansicht. „Zurücksetzen“ stellt die Ausgangsansicht wieder her; „Schließen“
führt zum Diagramm-Schritt zurück. Titel, Bildbeschreibung, Caption und
Beobachtungen bleiben zugänglich. Die normale Lektionsansicht verändert sich
sonst nicht.

**Technik.** Eine gemeinsame Hülle um `LearningChart` und die bestehenden
SVG-Szenarien; keine 100 Einzellösungen. Zoom begrenzen, Verlassen des
Diagramms und Re-Open definiert behandeln. Im Dialog Fokus hinein, Tab im
Dialog halten, Escape schließen, vorherigen Fokus wiederherstellen;
Tastatur-Buttons für Zoom und Schwenken. Bei sehr langen Beschreibungen darf
der Text eigenständig scrollen. Keine unscharfen Raster-Screenshots als Ersatz
für vorhandene Vektorgrafiken.

**Abnahme.** 360-px-Ansicht und Desktop; mindestens je ein Diagramm aus
Einleitung und den veröffentlichten Kapiteln. Test für Öffnen, Zoom-Grenzen,
Reset, Escape/Fokusrückgabe und Scroll-Sperre; Touch auf echtem Gerät oder
Emulation prüfen. Kein horizontaler Seitenüberlauf oder Verlust der
Lektionsposition.

## F-12 – Kapitelweise Auslieferung ohne Funktionsverlust

**Nutzerablauf.** Die Startansicht lädt die Kursnavigation zügig; die
vollständigen Lektionsschritte eines Kapitels werden erst geladen, wenn die
Person es benötigt. Ein direkter Lektionslink, Browser-Zurück, Suche, Review
und Fortsetzen funktionieren weiterhin. Auch offline muss ein zuvor für die
PWA bereitgestelltes Kapitel zuverlässig geöffnet werden.

**Technik.** Kleine, synchrone Metadaten für Reihenfolge, Titel, Status und
stabile IDs; Lektionsdaten in einzelnen dynamischen Kapitel-Imports. Die
Freischaltung darf keine asynchrone Lücke als „frei“ interpretieren. Suche und
Review können ihre Indizes bei Bedarf nachladen und müssen fehlende Assets
verständlich behandeln. Keine hardcodierte Liste in mehreren Komponenten.
Vor und nach der Änderung messen: Initial-JS, größter Content-Chunk, Zahl und
Größe der Vorladedateien, Zeit bis nutzbarer Lernpfad auf einem gedrosselten
Mobilprofil. Optimierung ist nur erfolgreich, wenn auch Navigation und Offline
korrekt bleiben.

**Abnahme.** Direkter Link auf eine freigeschaltete Lektion nach frischem
Aufruf, Rücknavigation, Suche über noch nicht geladene Kapitel, Review aus
einem anderen Kapitel, Offline-Neustart und Update der PWA. Tests für
asynchrone Ladefehler, unbekannte/geplante Lektionen, unveränderte
Buchreihenfolge und IDs. CI- und Mobilmesswerte im PR. F-12 ersetzt nicht
automatisch die vollständige Offline-Vorladung; deren Änderung gehört F-19.

## F-13 – Buchmodus als zusammenhängender Leser

**Nutzerablauf.** Aus der Kapitelübersicht „Kapitel lesen“ wählen. Die
veröffentlichten Lektionen erscheinen in Originalreihenfolge als lesbare
Abschnitte mit Überschrift, Erklärung, Diagramm, Vergleich und Zusammenfassung.
Zwischen Abschnitten navigieren, ohne zur Übersicht zurückzukehren. Eine
Kapitelgliederung, „Weiterlesen“ und ein sichtbarer Lesefortschritt helfen bei
der Orientierung. Schließen, Reload und Öffnen am Folgetag führen zur letzten
Leseposition zurück. Diagramm-Fokus aus F-11 ist auch hier nutzbar.

**Lernlogik.** Der Leser benutzt dieselbe Content-Quelle. Fragen und
Lektionsabschluss verwenden die vorhandene Antwort- und XP-Logik; eine
unbeantwortete Pflichtfrage wird nicht still übersprungen. Ein noch gesperrter
Abschnitt wird mit dem nötigen nächsten Schritt benannt und nicht als erledigt
markiert. Freigeschaltete fertige Lektionen können erneut gelesen werden,
ohne neue XP. Leseposition und abgeschlossene Lektion sind verschiedene Daten.
Die Bezeichnung „Buchmodus“ darf erst nach dieser Umsetzung den Eindruck
eines durchgehenden Lesers vermitteln.

**Technik.** Route etwa `#/read/<unit-id>?lesson=<lesson-id>` mit validierten
IDs und stabilem Zurück-Verhalten; `readerPosition` je Einheit im
Academy-Datenmodell, ohne Änderung alter Schlüssel. Version/Migration,
Export, Merge und Reset mitprüfen. Kapitel in überschaubaren Abschnitten
rendern, nicht alle SVGs und Fragen des ganzen Kurses gleichzeitig mounten.
Die Darstellung soll auf Papier und bei reduzierter Bewegung lesbar sein.

**Abnahme.** Start mitten in einem Kapitel, Frage falsch/richtig, Wechsel zum
Lernpfad, Rückkehr zur exakten Position, Reload, Import und spätere
Lektionswiederholung; keine doppelten XP. Gesperrte und geplante Inhalte sind
korrekt gekennzeichnet. Tastatur, 360 px, Diagramm-Fokus, Screenreader und
Offline-PWA getestet.

## F-14 – Trainingsdatenvertrag und Entscheidungslogik

**Ziel.** Ein schlankes, typisiertes Format für eigenständige Chartfälle,
unabhängig von den statischen Lehrdiagrammen. Jeder Fall besitzt eine stabile
ID, zugeordnete veröffentlichte Einheit/Lektion, kurze Ausgangslage, eine
OHLC-Folge mit relativen Werten, Entscheidungszeitpunkte, mindestens die
Optionen „Long“, „Short“, „Abwarten“, eine begründete Einordnung jeder
Option, spätere Bars und Quellenanker. Ein „Abwarten“ kann die sachgerechte
Entscheidung sein. Die Antwort beurteilt Kontext und Begründung, nicht
behauptete Gewissheit über den nächsten Bar.

**Technik.** Validator für Sortierung, finite OHLC-Werte
(`low <= open/close <= high`), Referenzen, eindeutige IDs, keine Zukunftsbars
vor einer Entscheidung und vollständige Erklärungen. Reine Funktionen für
Sichtbarkeit, Auswahl, Reveal und Sitzungsfortschritt. Test-Fälle bleiben in
Fixtures und erscheinen nicht als redaktionell geprüfte Übungen im Produkt.
Vorhandene Frage-IDs und Review-Daten unverändert. Eine kleine dokumentierte
Schnittstelle für C-01, damit Inhalte ohne Änderung der Engine angelegt werden.

**Abnahme.** Unit-Tests für valide und defekte Fälle, Reveal-Grenzen,
Navigation, Reload-/Abbruchzustand und deterministische Bewertung. Kein
öffentlich sichtbarer Trainer mit unredigierten Testdaten.

## C-01 – Kuratierte Erstfälle (redaktionelle Übergabe)

Nach F-14 liefert Codex in einem eigenen Content-PR zunächst **6–10**
unabhängig entworfene Trainingsfälle aus bereits veröffentlichten Brooks-
Themen, mit mindestens zwei echten „Abwarten“-Entscheidungen und mehreren
plausiblen Fehlinterpretationen. Es werden keine Originalcharts, Buchgrafiken
oder langen Buchpassagen übernommen. Jeder Fall beschreibt nur Informationen,
die am Entscheidungspunkt schon sichtbar sind, und erklärt auch die nicht
gewählten Optionen. Fachliche Freigabe und Reihenfolge erfolgen vor F-15.
Eine überschaubare Anzahl guter Fälle ist besser als viele austauschbare.

## F-15 – Bar-für-Bar-Trainer

**Nutzerablauf.** Nach einer bereits zugänglichen Lektion „Chart trainieren“
oder im Bereich „Üben“ starten. Der Chart zeigt nur die bis zum jeweiligen
Zeitpunkt bekannten Bars. Die Person wählt Long, Short oder Abwarten und
markiert eine kurze Begründung. Danach erst erscheinen Erklärung und nächste
Bars. Die nächste Entscheidung startet mit aktualisiertem Kontext. Am Ende
zeigt eine sachliche Auswertung, welche Hinweise erkannt oder übersehen
wurden, mit Links zu den passenden Lektionen. Wiederholen ist möglich.

**Technik.** Ausschließlich geprüfte Fälle aus C-01 veröffentlichen. Keine
Zukunftsbars, Lösungen, Markierungen oder Antworttexte vor der Entscheidung
im gerenderten DOM, in ARIA-Texten oder durch Vor-/Zurück-Interaktion verraten.
Ein clientseitiges Lernangebot kann seine gebündelten Falldaten technisch
nicht vor absichtlicher Quellcode-Inspektion geheim halten. Im
lokalen Fortschritt stabile Case-ID und abgeschlossene Sitzungen speichern;
keine doppelten XP durch Wiederholung. Version, Migration und Backup/Import
abdecken. Unterbrochene Sitzung entweder exakt fortsetzen oder klar
bestätigt von vorn beginnen; Verhalten im PR dokumentieren.

**Abnahme.** Richtige, falsche und abwartende Wahl, mehrstufiger Fall,
Reload, Abbruch, erneute Runde, offline, Mobil und Tastatur. Tests verifizieren,
dass spätere Bars und Lösungen vor dem Reveal nicht zugänglich sind. Kein
Depot, P&L oder automatisierter Handelsvorschlag.

## F-16 – Fehler verstehen und gezielt üben

**Nutzerablauf.** Eine Übersicht „Was ich noch verwechsle“ zeigt wiederholte
Fehler aus vorhandenen Lektionsfragen und Trainerfällen: konkrete Frage oder
Fall, zuletzt übersehener Hinweis, Häufigkeit und ein direkter Link zur
erklärenden Lektion. „Erneut üben“ nutzt den bestehenden Review-Mechanismus
oder einen veröffentlichten Trainerfall. Keine künstliche Prozentzahl
„Brooks-Meisterschaft“.

**Technik.** Nur belegte Ergebnisse aus `questionResults`, `reviewCards` und
Trainerdaten; Altstände mit unbekanntem Erstversuch bleiben „nicht erfasst“.
Keine automatisierte Wortanalyse, die falsche Konzepte erfindet. Für genaue
Begriffe nur redaktionell gepflegte Zuordnung aus C-01. Sortierung und Auswahl
als reine Funktionen; Erklärungen immer auf die vorhandenen Quellenanker
zurückführbar.

**Abnahme.** Neu, ohne Fehler, alter Datensatz, mehrfacher Fehler, erfolgreicher
späterer Versuch, gelöschter Fall und Import; keine falschen Diagnosen oder
gesperrten Deep Links. Alle Empfehlungen sind über den bestehenden Zugriff
erreichbar.

## C-02 – Ungesehene Transferfälle (redaktionelle Übergabe)

Mindestens **4–6** neue Fälle zu bereits vermittelten Themen, mit anderen
Chartverläufen und Entscheidungspunkten als in C-01. Die fachliche Begründung
und alle Alternativen werden redaktionell geprüft. Dieselbe Fall-ID darf nie
gleichzeitig im gewöhnlichen Trainer und in einer ersten Transferprüfung
auftauchen.

## F-17 – Transferprüfung

**Nutzerablauf.** Nach passenden Lektionen kann die Person mehrere zuvor
ungesehene Chartentscheidungen ohne sofortige Auflösung durchlaufen. Danach
erscheinen begründete Lösungen, die eigenen Entscheidungen und passende
Lernstellen. Ein weiterer Durchlauf ist möglich, wird aber ausdrücklich als
Wiederholung gekennzeichnet. Ein Ergebnis ist eine Lernstandsanzeige, keine
Trading-Prognose.

**Technik.** Nur C-02-Fälle, getrennt vom gewöhnlichen Trainerpool;
Erstversuch und spätere Versuche sauber trennen, alte Ergebnisse nicht
rückwirkend erfinden. Pause/Reload, verfügbare Anzahl, Zugriff auf noch
gesperrte Lektionen und Offline-Fallzahlen klar definieren. Keine künstliche
Zufallsauswahl, die Tests oder Erklärungen unzuverlässig macht.

**Abnahme.** Erst- und Zweitversuch, keine vorzeitige Lösung, leere
Fallauswahl, Import/Reload, zugängliche Auswertung, echte Mobilprüfung.

## F-18 – Orientierung beim ersten Besuch

**Nutzerablauf.** Eine kurze, jederzeit erneut aufrufbare Einführung erklärt
„Lernpfad“, „Buchmodus“, „Üben“ und „Chart trainieren“ mit einem Satz pro Modus
und einer sinnvollen Startaktion. Sie erklärt, dass der Fortschritt lokal auf
diesem Gerät liegt und über Einstellungen gesichert werden kann. Bestehende
Nutzer sehen keinen erzwungenen Dialog. Keine Tour, die einzelne Funktionen
überlagert oder das Lernen verzögert.

**Abnahme.** Erstbesuch, bestehender Fortschritt, Abbruch/Wiederaufruf,
gesperrter Trainer ohne Fälle, Offline, Tastatur und Screenreader. Eine
Einführung darf weder Lektionen abschließen noch den Streak auslösen.

## F-19 – Wählbare Offline-Kapitel (nur bei Bedarf)

**Auslöser.** Erst nach F-12 reale Vorladegröße, Update-Downloads und
Gerätespeicher messen. Bleibt vollständiges Offline-Lernen schnell und
zuverlässig, F-19 zurückstellen.

**Nutzerablauf bei Umsetzung.** „Für offline speichern“ je Kapitel, Größe und
Status sichtbar, Entfernen mit Bestätigung, Kernfunktionen weiterhin offline.
Ein Kapitel darf nach abgebrochenem Download nicht als „bereit“ erscheinen;
Speicherknappheit erhält eine verständliche Meldung.

**Technik/Abnahme.** App-Shell und zuletzt verwendete Inhalte bleiben
zuverlässig; alle vom Kapitel benötigten JS-/Chartdateien werden als Einheit
validiert. Installation, Update, Offline-Aufruf, abgebrochener Download,
Cache-Löschung durch Browser und lokaler Fortschritt werden getestet. Entfernen
eines Cache-Pakets löscht niemals Lerndaten.

## F-20 – PWA-Beta mit überprüfbarer Qualität

**Ziel.** Ein stabiler, installierbarer Stand, der sich auf Android und iPhone
ohne Store-Eintrag ausprobieren lässt. Keine Veröffentlichung wird durch
diesen Code-PR automatisch ausgelöst.

**Umfang.** Namensgebung, Icons und Startansicht konsistent prüfen;
verständliche Installationshilfe für unterstützte Browser; Offline-/Update-
Hinweise prüfen; Metadaten und eigene Screenshots für spätere Veröffentlichung
vorbereiten. Ein kurzes Geräte-Testprotokoll im Repository: Android-Chrome,
iPhone-Safari, 360-px-Ansicht, Tastatur/Screenreader, Kapitel-Deep-Link,
Reader, Diagramm-Fokus, Trainer, Backup, Neustart offline, Update. Fehler
mit Schweregrad und Reproduktionsschritt dokumentieren. Ein PR darf keine
Testresultate behaupten, die auf den Geräten nicht geprüft wurden.

**Abnahme.** `npm test`, `npm run build`, komplette Playwright-Suite und
manuelle Prüfung der verfügbaren Geräte; offene Blocker benennen. Danach
entscheidet Robert über die Veröffentlichung des Beta-Standes.

## S-01 – Stores erst nach gesonderter Entscheidung

Die installierte PWA ist der erste App-Schritt. Für Google Play könnte später
ein Android-Paket der Web-App erstellt werden; für den Apple App Store wäre
ein eigener Einreichungs- und Review-Schritt nötig. Account-Gebühren,
Store-Regeln, Rechte an Namen/Inhalten und die geforderte App-Qualität werden
erst bei einer tatsächlichen Store-Entscheidung geprüft. S-01 enthält hier
**keinen** Auftrag zum Bauen, Hochladen, Bezahlen oder Einreichen.

## Fertig bedeutet

Der einzelne PR nennt die bearbeitete Paketnummer, den Ablauf aus Sicht eines
Lernenden, geänderte Dateien, Datenmodell/Migration, Unit- und E2E-Resultate,
manuelle Mobilprüfung, Offline-Verhalten und bekannte Grenzen. Claude prüft
den gesamten Diff und die bestehenden Hauptabläufe. Robert entscheidet
über den Merge. Für C-01 und C-02 gibt es eigene Content-PRs mit fachlicher
Prüfung; die Funktions-PRs ändern diese Inhalte nicht beiläufig.
