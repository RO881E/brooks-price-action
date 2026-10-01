# WQT Academy

Eine interaktive Lern-App zu Price Action im Trading: kurze Lektionen mit Fragen, Wiederholungen,
Bar-für-Bar-Training, Glossar und Fortschritt. Läuft komplett im Browser (React + TypeScript + Vite),
der Lernstand bleibt lokal auf dem Gerät.

**Wichtig:** Alle Inhalte sind eigenständig in eigenen Worten formuliert. Es werden keine Texte,
Abbildungen oder Kursdaten aus Büchern übernommen (siehe `CONTRIBUTING.md`, Abschnitt Urheberrecht).

## Struktur

```
academy/     Die App (Quellcode, Tests, Dokumentation unter academy/docs)
docs/        Planungsdokumente
```

## Entwickeln

```bash
cd academy
npm ci
npm run dev        # lokaler Entwicklungsserver
npm test           # Unit-Tests
npm run build      # Produktionsbuild
npm run test:e2e   # Browser-Tests (Playwright)
```

Ausführliche Beschreibung der App, des Datenmodells und der Funktionen: [`academy/README.md`](academy/README.md).

## Veröffentlichen

Bei jedem Push auf `main` baut GitHub Actions die App und veröffentlicht sie über GitHub Pages
(`.github/workflows/deploy-pages.yml`). Die App liegt auf der Startseite der Pages-Adresse
(`https://<nutzer>.github.io/<repo>/`); die frühere Adresse `…/academy/` leitet dorthin um.

## Nutzung

Nur für den persönlichen Lerngebrauch gedacht. Keine Anlageberatung.
