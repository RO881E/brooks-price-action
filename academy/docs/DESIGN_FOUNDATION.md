# Designgrundlage (P05)

Ziel: Die Academy soll **spielerischer, farbiger und leichter zu bedienen** sein und
dabei eine seriöse Lernumgebung bleiben. Heller Hintergrund und dunkler, gut
lesbarer Text bleiben; Farbe dient Orientierung, Lernstatus und Aktionen. Gewinne,
Verluste und Trading-Performance werden weder farblich noch spielerisch dargestellt.

## Bestandsaufnahme (360 px und Desktop)

Betrachtet: Lernpfad, Üben, Trainer, Fortschritt, Glossar, Kurzlernen.

| Befund | Beispiel |
|---|---|
| Ein einziger Akzent (Gold) für alles | Navigation, Eyebrows, Abzeichen und Balken sehen in jedem Bereich gleich aus; man erkennt den Ort nur am Text. |
| Alle Karten gleich | Die vier Übungs-Karten unter „Üben“ (fällig, Fehler, Kapitel, Mix) sind ein weißes Raster ohne Unterscheidung. |
| Kleine Bedienelemente | Buttons hatten 11 px Schrift; Navigationssymbole waren winzige, einfarbige Zeichen. |
| Leerzustände grau | Gestrichelte graue Kästen ohne Bezug zum Bereich. |

Vorher/Nachher-Ziele:

1. **Ort erkennen:** Navigation und Seitenkopf tragen den Farbton des Lernmodus.
2. **Karten unterscheiden:** Die vier Übungswege haben je eine Akzentkante und Überschriftsfarbe.
3. **Bedienen:** Buttons ≥ 44 px, 13 px Schrift, Sekundär-Buttons mit Akzentrand.
4. **Orientierung mobil:** Aktiver Reiter der unteren Leiste als Kapsel, Beschriftung 10 px.
5. **Leerzustände** mit Akzentfläche statt grauer Strichlinie.

Bilder: [`docs/design/p05`](design/p05) (`before-*` / `after-*`).

## Farbsystem

| Modus | Ink (Text) | Base (Kante, Balken) | Soft (Fläche) | Wo |
|---|---|---|---|---|
| Lesen (`read`) | `#1d4f91` | `#2f6fbd` | `#e6eefb` | Lernpfad, Buchmodus, Glossar |
| Üben (`practice`) | `#0b6b63` | `#14a094` | `#dff3f0` | Üben, Kurzlernen |
| Wiederholen (`review`) | `#5b3fb0` | `#7c5ce0` | `#ece8fb` | Gespeichert, „Heute fällig“ |
| Chart trainieren (`train`) | `#a8410f` | `#e2662f` | `#fdebe1` | Trainer, Rückblick, „Fehler trainieren“ |
| Fortschritt (`progress`) | `#8a5e1e` | `#bb8734` | `#f4e9d5` | Fortschritt |
| Neutral (`neutral`) | `#3b4453` | `#7a8494` | `#eceef2` | Einstellungen |

Kontrast von `Ink` auf Weiß 5,7–8,1 : 1, auf `Soft` mindestens 4,7 : 1. Auf der dunklen
Navigation nutzt jeder Modus eine hellere `glow`-Variante. Die Farben sind Beiwerk:
Jeder Bereich hat zusätzlich Beschriftung und Symbol, der aktive Ort steht in
`aria-current`, und Erfolg oder Fehler werden weiterhin durch Text und Symbol
ausgedrückt – nicht allein durch Rot oder Grün. Die Farben stehen als
Design-Tokens in `:root` (`--read-ink`, `--practice-base` …); Bereiche wählen sie über
`data-mode` und erhalten `--mode-ink`, `--mode-base`, `--mode-soft`, `--mode-glow`.

## Bausteine

- **Buttons:** `min-height: var(--control-min)` (44 px), `--radius-control`, 13 px.
- **Karten:** `border-top: 4px solid var(--mode-base)`, gleiche Rundung (`--radius`).
- **Seitenkopf:** kleiner Akzentbalken und Eyebrow im `Ink` des Modus.
- **Leerzustände:** Akzentrand und leicht getönte Fläche.
- **Fokus:** unverändert die kräftige Fokusmarkierung; **Bewegung:** Übergänge nur ohne
  Präferenz „Bewegung reduzieren“.

Keine neue UI-Bibliothek und keine Änderung an Buchtexten, Datenmodell oder Logik.
