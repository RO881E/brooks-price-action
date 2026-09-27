# WQT Academy V2

Technisches Grundgerüst für den neuen, kursbasierten Lernbereich. Die bestehende Website im
Stammverzeichnis bleibt während der Entwicklung unverändert.

## Was der Pilot bereits kann

- Lernpfad mit aufeinander aufbauenden Mikro-Lektionen
- alternative Kapitelansicht in der Reihenfolge der Buchvorlage
- Erklärungen, eigene interaktive Schaubilder, Verständnisfragen und Zusammenfassungen
- Übungsmodus für bereits abgeschlossene Lektionen
- durchsuchbares Glossar
- lokaler Lernfortschritt unter `wqt-academy-progress-v1`
- lesender Kompatibilitätscheck für `brooks-progress` und `brooks-tr-best`
- responsive Navigation für Desktop und Mobilgeräte

Der Inhalt ist bewusst als Pilot markiert. Die veröffentlichten Lektionen demonstrieren das
Format; geplante Einträge bilden die Quellenreihenfolge ab, ohne Vollständigkeit vorzutäuschen.

## Lokal starten

```bash
npm install
npm run dev
```

## Qualität prüfen

```bash
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Die End-to-End-Tests prüfen Desktop und Mobilansicht, Navigation, JavaScript-Fehler,
Fortschrittsspeicherung und den unveränderten Erhalt der bestehenden Local-Storage-Schlüssel.
