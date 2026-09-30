# Beta-Checkliste

Für Robert, bevor jemand anderes die Academy nutzt. Ergänzt die
[Release-Checkliste](RELEASE_CHECKLIST.md). Es wird hier nichts deployed und nichts in Stores
eingereicht. Ergebnisse bitte selbst eintragen – **bisher wurde nichts davon auf echten Geräten
geprüft**.

## Automatisch (vor jedem Stand)

- [ ] `npm test`
- [ ] `npm run build` ohne Chunk-Warnung
- [ ] `npm run report:size` meldet „Alle Grenzwerte eingehalten“
- [ ] `npm run check:content`
- [ ] `npm run test:e2e` (Desktop und Mobil)

## Installation als App (PWA)

| Gerät | Installieren | Startet offline | Update kommt an | Datum / Notiz |
| --- | --- | --- | --- | --- |
| Android (Chrome) | ☐ | ☐ | ☐ | |
| iPhone/iPad (Safari, „Zum Home-Bildschirm“) | ☐ | ☐ | ☐ | |
| Desktop (Chrome/Edge) | ☐ | ☐ | ☐ | |

## Online und offline

- [ ] Einmal online öffnen, Flugmodus an, App neu starten: Lernpfad, eine Lektion, Üben, Fortschritt.
- [ ] Offline eine Runde beenden, wieder online: Stand ist noch da.
- [ ] Einstellungen → Offline & App zeigt Version und Update-Stand.
- [ ] Sicherung exportieren, importieren, Stand stimmt.

## Lernablauf kurz durchspielen

- [ ] Heute-Bereich: eine empfohlene Aktion starten und abschließen.
- [ ] Lektion lesen, Frage falsch, dann richtig beantworten.
- [ ] Kurz lernen (10 Min.), Üben nach Thema, Chart-Trainer mit Rückblick.
- [ ] Hilfe → Fehler melden: Vorschau lesen, Text kopieren (nichts wird gesendet).

## Entscheidungen für Robert

- [ ] C-02-Fälle freigeben (`status: 'approved'`), damit die Transferprüfung sichtbar wird.
- [ ] C-03-Themenkarte fachlich abnehmen.
- [ ] Beta-Kreis und Zeitpunkt festlegen; Rückmeldeweg (Fehlerbericht als Textdatei) bekanntgeben.
- [ ] F-19 später oder gar nicht?

## Bekannte Grenzen

Siehe [`QUALITY_REPORT.md`](QUALITY_REPORT.md).
