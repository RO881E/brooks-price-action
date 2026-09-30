# Lernpfad: aufklappbare Kapitel

Der Lernpfad zeigt zunächst nur die Kapitelköpfe. Die Lektionen eines Kapitels
klappen per Klick auf die Kopfzeile aus (Akkordeon).

- Standard: nur das Kapitel mit dem nächsten Schritt ist offen.
- „Alle öffnen" / „Alle schließen" über der Liste.
- Der Zustand wird pro Browser-Tab in `sessionStorage`
  (`wqt-academy-path-open`) gemerkt – kein Lernfortschritt, nicht in der Sicherung.
- Gesperrte Kapitel lassen sich ansehen; ihre Lektionen bleiben deaktiviert.
- Barrierefrei: `aria-expanded`, `aria-controls`, Tastatur (Enter/Leertaste),
  Zielgröße ≥ 24 px.

Screenshots: `docs/design/path-collapsible/`.
