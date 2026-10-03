import { makeLessons } from './lessons';
export const rangesIntroductionLessons = makeLessons('introduction', 'Einleitung · Ausbrüche und Seitwärtsmärkte', [
  {
    "title": "Zwischen Trend und Seitwärtsmarkt",
    "summary": "Eine Range ist ein Bereich, in dem der Kurs mehrfach hin und her läuft.",
    "paragraphs": [
      "Nora beobachtet einen erfundenen Markt. Mehrere abgeschlossene Minuten bleiben zwischen 98 und 100 Punkten. Käufer setzen sich zeitweise durch, Verkäufer drücken den Preis wieder zurück. Diesen wechselnden Verlauf nennen wir Range oder Seitwärtsmarkt.",
      "Ein Trend bewegt sich über mehrere Abschnitte überwiegend in eine Richtung. Eine Range hat stärkere Überlappung: Neue Kerzen handeln häufig in Preisbereichen, die vorherige Kerzen schon besucht haben. Beide Zustände können ineinander übergehen.",
      "Dieser Kurs verbindet diese Übergänge mit Entscheidungen. Nora fragt zuerst, welchen Markt sie sieht, danach, welche Handlung dazu passt. Ein bekannter Mustername beantwortet diese beiden Fragen nicht automatisch."
    ],
    "prompt": "Was beschreibt eine Range?",
    "answers": [
      "Mehrfaches Hin und Her innerhalb eines Preisbereichs.",
      "Jede einzelne fallende Kerze.",
      "Ein sicherer bevorstehender Ausbruch."
    ],
    "rule": "Erst den Markt beschreiben, dann eine Handlung prüfen.",
    "diagram": "par1-context"
  },
  {
    "title": "Ein Ausbruch braucht eine Grenze",
    "summary": "Breakout bedeutet, dass der Preis eine vorher benannte Grenze überschreitet.",
    "paragraphs": [
      "Das englische Wort Breakout bedeutet Ausbruch. In unserem Beispiel ist 100 die vorher bestimmte obere Grenze. Erst wenn Preise darüber handeln, können wir von einem Ausbruch über diese Grenze sprechen.",
      "Ein Ausbruch kann eine Range verlassen oder innerhalb eines Trends ein früheres Hoch überschreiten. Deshalb benennt Nora immer die konkrete Grenze. Ohne diesen Bezug bleibt die Aussage „Das bricht aus“ unklar.",
      "Die erste Überschreitung beweist noch keinen neuen Trend. Der Markt kann zurückfallen. Nora trennt das sichtbare Ereignis von der Vermutung, dass weitere höhere Preise folgen werden."
    ],
    "prompt": "Welcher Bezug fehlt der Aussage „Das ist ein Ausbruch“?",
    "answers": [
      "Die konkrete überschrittene Grenze.",
      "Der Name des Traders.",
      "Ein garantiertes Gewinnziel."
    ],
    "rule": "Benenne die Grenze, bevor du den Ausbruch beurteilst.",
    "diagram": "par1-breakout"
  },
  {
    "title": "Jede Kerze gehört zu ihrem Umfeld",
    "summary": "Eine große Kerze kann je nach Ort etwas anderes bedeuten.",
    "paragraphs": [
      "Eine große steigende Kerze mitten im bisherigen Bereich hat eine andere Bedeutung als eine Kerze, die über dessen obere Grenze schließt. Größe zeigt eine weite Bewegung während des Abschnitts; der Ort zeigt ihren Bezug zum Umfeld.",
      "Nora vergleicht außerdem die vorherigen Kerzen. Wurde die Grenze mehrfach abgewiesen? Gab es bereits eine Folge steigender Tiefs? Erst das Zusammenspiel liefert Gründe für eine Deutung.",
      "Wir lesen abgeschlossene Kerzen. In einem laufenden Abschnitt kann ein hoher Preis sichtbar sein, obwohl der spätere Schluss deutlich tiefer liegt. Eine Entscheidung während des Abschnitts verwendet andere Informationen als eine Entscheidung nach seinem Ende."
    ],
    "prompt": "Was sollte Nora zusätzlich zur Kerzengröße prüfen?",
    "answers": [
      "Ort, vorherigen Verlauf und Abschluss des Abschnitts.",
      "Nur die Farbe.",
      "Nur den späteren Gewinn."
    ],
    "rule": "Eine Kerze erhält ihre Bedeutung durch ihren Kontext.",
    "diagram": "par1-breakout"
  },
  {
    "title": "Beobachtung und Vermutung trennen",
    "summary": "Sichtbare Preise sind Fakten des Beispiels; Fortsetzung bleibt eine Möglichkeit.",
    "paragraphs": [
      "„Kerze 5 schließt bei 101,4“ ist eine Beobachtung unseres Übungsdatensatzes. „Der Kurs könnte weiter steigen“ ist eine Vermutung. Nora schreibt beides getrennt auf.",
      "Ein überzeugendes Bild kann scheitern. Wir ordnen Stärkezeichen ein, nennen aber keine feste Trefferquote aus einem einzelnen Chart. Für eine Zahl wären klar definierte Regeln, viele vergleichbare Fälle und eine nachvollziehbare Auswertung nötig.",
      "Die eigenen Schaubilder dieses Kurses erklären Zusammenhänge. Sie sind absichtlich übersichtlich und belegen keine historische Leistung einer Handelsmethode. Beim Üben zählt deshalb auch eine gut begründete Entscheidung, die später keinen Gewinn gebracht hätte."
    ],
    "prompt": "Beweist ein überzeugendes Schaubild eine feste Trefferquote?",
    "answers": [
      "Nein, dafür braucht es definierte Regeln und ausgewertete Fälle.",
      "Ja, jede große Kerze bedeutet 80 Prozent.",
      "Ja, sobald das Ziel eingezeichnet ist."
    ],
    "rule": "Trenne Preisbeobachtung, Deutung und nachgewiesene Statistik.",
    "diagram": "par1-breakout"
  },
  {
    "title": "Drei Möglichkeiten statt Kaufzwang",
    "summary": "Einsteigen, abwarten und auslassen sind unterschiedliche Entscheidungen.",
    "paragraphs": [
      "Nach einem Ausbruch kann Nora einen sofortigen Einstieg prüfen. Sie kann auch auf einen Rücksetzer warten: eine zwischenzeitliche Bewegung entgegen der Ausbruchsrichtung. Oder sie lässt den Fall vollständig aus.",
      "Ein früher Einstieg kann einen günstigeren Preis bieten, besitzt aber weniger Bestätigung. Warten liefert neue Informationen, kann jedoch zu einem höheren Einstieg führen oder ohne Gelegenheit enden. Keine Möglichkeit ist immer überlegen.",
      "Nora benötigt eine Regel für den Einstieg, eine Grenze für das Scheitern ihrer Idee und ein passendes Risiko. Fehlt etwas davon, ist Auslassen eine begründete Entscheidung. Die nächste Kerze ist kein Termin, zu dem sie handeln muss."
    ],
    "prompt": "Was ist möglich, wenn Nora keinen passenden Risikoplan hat?",
    "answers": [
      "Den Fall auslassen.",
      "Trotzdem sofort kaufen.",
      "Den Stop nach einem Verlust entfernen."
    ],
    "rule": "Eine verpasste Gelegenheit ist kein Auftrag.",
    "diagram": "par1-breakout"
  },
  {
    "title": "Preisrisiko und Geldrisiko unterscheiden",
    "summary": "Der Abstand zum Stop wirkt zusammen mit der Positionsgröße.",
    "paragraphs": [
      "Ein geplanter Kauf zu 101,4 und ein Stop bei 98,4 liegen 3 Punkte auseinander. Das ist die Preisentfernung. Für das Geldrisiko braucht Nora zusätzlich den Geldwert eines Punktes und die Anzahl der Einheiten.",
      "In unserem erfundenen Produkt entspricht ein Punkt je Einheit einem Euro. Bei zehn Einheiten bedeuten 3 Punkte Abstand daher 30 Euro geplantes Risiko vor Kosten. Bei zwanzig Einheiten wären es 60 Euro.",
      "Der Stop garantiert keinen Ausführungspreis. Bei schnellen Bewegungen kann die tatsächliche Ausführung abweichen. Nora unterscheidet deshalb das geplante Risiko von einem garantierten maximalen Verlust."
    ],
    "prompt": "Wie hoch ist das geplante Risiko bei 3 Punkten und 10 Einheiten mit 1 Euro je Punkt?",
    "answers": [
      "30 Euro vor Kosten.",
      "3 Euro unabhängig von der Menge.",
      "Garantiert höchstens 30 Euro."
    ],
    "rule": "Preisabstand mal Punktwert mal Menge ergibt das geplante Geldrisiko.",
    "diagram": "par1-risk"
  },
  {
    "title": "Ein Fall wird Stück für Stück aufgedeckt",
    "summary": "Entscheidungen sollen nur bereits sichtbare Informationen verwenden.",
    "paragraphs": [
      "Unser Übungsfall beginnt mit vier Kerzen im Bereich 98 bis 100. Dann erscheint Kerze 5. Nora bewertet zunächst nur diese fünf abgeschlossenen Kerzen. Die spätere Entwicklung bleibt für diesen Entscheidungspunkt verborgen.",
      "Wenn Kerze 6 folgt, darf sie ihren Bericht ergänzen. Sie darf aber nicht behaupten, ihr früherer Einstieg habe diese neue Kerze bereits berücksichtigt. Sonst würde sie Wissen aus der Zukunft in eine vergangene Entscheidung schmuggeln.",
      "Wir vergleichen später mehrere mögliche Fortsetzungen derselben Ausgangslage. So lernst du, warum die Qualität eines Plans und sein einzelnes Ergebnis getrennt geprüft werden müssen."
    ],
    "prompt": "Welche Daten darf eine Entscheidung nach Kerze 5 verwenden?",
    "answers": [
      "Nur Informationen, die bis dahin bekannt waren.",
      "Auch Kerze 8, weil sie später sichtbar wird.",
      "Nur die spätere Zielerreichung."
    ],
    "rule": "Beurteile einen Plan mit den Informationen seines Entscheidungszeitpunkts.",
    "diagram": "par1-breakout"
  },
  {
    "title": "So hängt der Kurs zusammen",
    "summary": "Ausbrüche, Ziele, Rücksetzer und Management gehören zu einem Ablauf.",
    "paragraphs": [
      "Wir beginnen mit Ausbrüchen und prüfen, ob Anschluss entsteht. Anschluss bedeutet hier, dass folgende Kerzen die neue Richtung unterstützen. Später untersuchen wir Preisbereiche, an denen Bewegungen stocken könnten.",
      "Danach folgen Rücksetzer und der Übergang vom Trend zur Range. Erst wenn diese Bewegung verständlich ist, vertiefen wir enge Seitwärtsmärkte und das Management einer Position: Stop, Ziel und Änderungen am Plan.",
      "Du brauchst kein auswendig gelerntes Wörterbuch. Neue Begriffe werden direkt erklärt und zusätzlich im Glossar gesammelt. Kleine Fragen prüfen jeweils einen Unterschied, den du im Chart selbst erkennen oder rechnen kannst."
    ],
    "prompt": "Was heißt Anschluss nach einem Ausbruch?",
    "answers": [
      "Folgende Kerzen unterstützen die neue Richtung.",
      "Eine technische Internetverbindung.",
      "Ein automatisch garantierter Gewinn."
    ],
    "rule": "Lerne den Zusammenhang zwischen Marktbild und Entscheidung.",
    "diagram": "par1-followthrough"
  }
]);
