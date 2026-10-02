import type { Lesson } from '../../types';

// Eigenständige vereinfachte Phasenmodelle; Zahlen und Zusatzregeln gelten nur wie im jeweiligen Fall angegeben.
const drafts = [
  {
    "title": "Eine Handelsphase beschreibt den Ablauf",
    "summary": "Die Uhrzeit allein erklärt noch nicht, wie Geschäfte entstehen.",
    "paragraphs": [
      "Eine Handelsphase ist ein Abschnitt mit bestimmten Handelsregeln. In einer Sammelphase werden Aufträge gesammelt. In einer Preisermittlung werden passende Aufträge nach den Auktionsregeln zusammengeführt. Im fortlaufenden Handel können passende Aufträge laufend zusammentreffen.",
      "Unser Übungsplatz sammelt zunächst, führt dann eine Eröffnungsauktion durch und wechselt zum fortlaufenden Handel. Später kann eine Unterbrechung dazukommen. Eine Anzeige „geöffnet“ ersetzt diese genauere Beschreibung nicht.",
      "Alle Zahlen und Abläufe dieses Kapitels sind eigene vereinfachte Fälle. Preise stehen in Euro je Einheit. Gebühren fehlen. Die Regeln gelten nur wie angegeben. Echte Handelsplätze und Produkte können andere Phasen, Grenzen und Auftragsregeln haben."
    ],
    "columns": [
      {
        "title": "Grobe Anzeige",
        "tone": "neutral",
        "points": [
          "Platz erreichbar.",
          "Noch keine genaue Handelsform genannt."
        ]
      },
      {
        "title": "Genauer Zustand",
        "tone": "positive",
        "points": [
          "Sammeln, Preisermittlung oder fortlaufender Handel.",
          "Jede Phase hat eigene Regeln."
        ]
      }
    ],
    "prompt": "Welche Angabe erklärt den aktuellen Handelsablauf genauer?",
    "answers": [
      {
        "label": "Die Handelsphase mit ihren Regeln.",
        "explanation": "Richtig: Sie beschreibt, was mit Aufträgen gerade passiert."
      },
      {
        "label": "Nur die Farbe der App.",
        "explanation": "Eine Farbe ist keine vollständige Handelsregel."
      },
      {
        "label": "Nur der letzte Handelspreis.",
        "explanation": "Ein alter Trade sagt nicht, welche Phase jetzt läuft."
      }
    ],
    "correct": 0,
    "rule": "Vor einer Ausführung die aktuelle Handelsphase feststellen."
  },
  {
    "title": "Die Eröffnungsauktion bündelt Aufträge",
    "summary": "Ein gemeinsamer Startpreis kann aus gesammelten Aufträgen entstehen.",
    "paragraphs": [
      "Eine Eröffnungsauktion ist eine Sammelauktion zum Beginn eines Handelsabschnitts. Aufträge werden zunächst gesammelt. Danach wird nach festgelegten Regeln ein Preis bestimmt. Zu diesem Preis können mehrere Aufträge zusammen ausgeführt werden.",
      "Im Fall warten ein Käufer und zwei Verkäufer auf die Auktion. Bis zur Preisermittlung gibt es noch keinen Abschluss. Bei der Preisermittlung passen vier Kauf- und vier Verkaufseinheiten zusammen. Es werden vier Einheiten gehandelt, nicht acht.",
      "Der Zweck des Ablaufs ist hier ein gemeinsamer Start mit gebündelten Aufträgen. Er garantiert keinen bestimmten Preis und nicht die Ausführung jedes Auftrags. Nach der Auktion kann eine andere Handelsform beginnen."
    ],
    "columns": [
      {
        "title": "Vor der Preisermittlung",
        "tone": "neutral",
        "points": [
          "Aufträge werden gesammelt.",
          "Noch kein Auktionsgeschäft."
        ]
      },
      {
        "title": "Bei der Preisermittlung",
        "tone": "positive",
        "points": [
          "4 gekauft und dieselben 4 verkauft.",
          "Handelsvolumen 4 Einheiten."
        ]
      }
    ],
    "prompt": "Wie groß ist das Handelsvolumen im Fall?",
    "answers": [
      {
        "label": "Null, weil eine Auktion nie ausführt.",
        "explanation": "Die Sammelphase führt noch nicht aus; die Preisermittlung im Fall schon."
      },
      {
        "label": "Vier Einheiten.",
        "explanation": "Richtig: Kauf- und Verkaufsseite beschreiben dieselben vier Einheiten."
      },
      {
        "label": "Acht Einheiten.",
        "explanation": "Damit würdest du jedes Geschäft doppelt zählen."
      }
    ],
    "correct": 1,
    "rule": "Gesammelte Wünsche und tatsächlich zusammengeführte Menge unterscheiden."
  },
  {
    "title": "In der Sammelphase ist das Buch noch veränderlich",
    "summary": "Eine Momentaufnahme vor der Auktion ist kein fertiges Ergebnis.",
    "paragraphs": [
      "Eine Sammelphase wird auch Aufrufphase genannt. Der Platz sammelt Aufträge für die Preisermittlung. Ob Aufträge noch geändert oder gelöscht werden dürfen, hängt von den Regeln dieser Phase ab.",
      "Unser Fall erlaubt Änderungen bis zum Ende der Sammelphase. Um 08:58 liegen sechs Kauf- und vier Verkaufseinheiten vor. Um 08:59 wird ein Verkaufsauftrag über zwei Einheiten hinzugefügt. Noch hat die Auktion nicht ausgeführt.",
      "Die frühe Momentaufnahme reicht deshalb nicht für das endgültige Ergebnis. Du brauchst den Stand zum maßgeblichen Ende und die Preisregeln. Eine spätere Änderung ist außerdem kein rückwirkend früher vorhandener Auftrag."
    ],
    "columns": [
      {
        "title": "08:58 im Fall",
        "tone": "neutral",
        "points": [
          "6 Kauf- und 4 Verkaufseinheiten.",
          "Sammeln, noch kein Trade."
        ]
      },
      {
        "title": "08:59 im Fall",
        "tone": "positive",
        "points": [
          "2 Verkaufseinheiten hinzugefügt.",
          "Jetzt 6 Kauf- und 6 Verkaufseinheiten; weiter Sammelphase."
        ]
      }
    ],
    "prompt": "Was beweist die Anzeige um 08:58?",
    "answers": [
      {
        "label": "Den sicheren endgültigen Auktionspreis.",
        "explanation": "Die Preisermittlung hat noch nicht stattgefunden."
      },
      {
        "label": "Bereits sechs ausgeführte Einheiten.",
        "explanation": "Die Anzeige beschreibt Wünsche, keine Abschlüsse."
      },
      {
        "label": "Nur den damaligen Auftragsstand.",
        "explanation": "Richtig: Spätere zulässige Änderungen können das Ergebnis verändern."
      }
    ],
    "correct": 2,
    "rule": "Den Auftragsstand mit Zeitpunkt und Phase lesen."
  },
  {
    "title": "Welche Aufträge dürfen bei einem Preis mitmachen?",
    "summary": "Preisgrenzen entscheiden über die zulässige Menge.",
    "paragraphs": [
      "Ein Kauflimit ist der höchste erlaubte Kaufpreis. Ein Verkaufslimit ist der niedrigste erlaubte Verkaufspreis. Bei einem gemeinsamen Auktionspreis dürfen nur Aufträge teilnehmen, deren Grenze diesen Preis erlaubt.",
      "Unsere Käufer wollen fünf Einheiten bis 101 und drei bis 100. Verkäufer bieten zwei ab 99, vier ab 100 und drei ab 101. Bei einem Prüfpreis von 100 dürfen alle acht Kauf- und sechs Verkaufseinheiten mitmachen. Die drei Verkäufer ab 101 dürfen dort nicht verkaufen.",
      "Die gemeinsam handelbare Menge ist die kleinere der beiden zulässigen Seiten. Bei 100 sind das sechs Einheiten. Eine zulässige Menge ist aber zunächst eine Rechnung für diesen Prüfpreis. Die Preiswahl folgt im nächsten Schritt."
    ],
    "columns": [
      {
        "title": "Kaufseite bei 100",
        "tone": "neutral",
        "points": [
          "5 bis 101 plus 3 bis 100.",
          "Zulässig: 8 Einheiten."
        ]
      },
      {
        "title": "Verkaufsseite bei 100",
        "tone": "positive",
        "points": [
          "2 ab 99 plus 4 ab 100.",
          "Zulässig: 6; gemeinsam handelbar: 6."
        ]
      }
    ],
    "prompt": "Wie viele Einheiten können bei 100 gemeinsam handeln?",
    "answers": [
      {
        "label": "Sechs.",
        "explanation": "Richtig: Die kleinere zulässige Seite begrenzt die Menge."
      },
      {
        "label": "Acht, weil Käufer acht wollen.",
        "explanation": "Es fehlen zwei zulässige Verkaufseinheiten."
      },
      {
        "label": "Neun, weil alle Verkäufer zählen.",
        "explanation": "Die drei Einheiten ab 101 erlauben den Preis 100 nicht."
      }
    ],
    "correct": 0,
    "rule": "Für jeden Prüfpreis beide Preisgrenzen anwenden und die kleinere Menge nehmen."
  },
  {
    "title": "Den Auktionspreis Schritt für Schritt auswählen",
    "summary": "Unser Modell wählt den Prüfpreis mit der größten handelbaren Menge.",
    "paragraphs": [
      "Wir verwenden dieselben Aufträge: Käufer fünf bis 101 und drei bis 100; Verkäufer zwei ab 99, vier ab 100 und drei ab 101. Unsere Preisregel prüft nur 99, 100 und 101. Sie wählt die größte gemeinsam handelbare Menge.",
      "Bei 99 stehen acht zulässige Käufer zwei Verkäufern gegenüber: Menge zwei. Bei 100 sind es acht Käufer und sechs Verkäufer: Menge sechs. Bei 101 sind es fünf Käufer und neun Verkäufer: Menge fünf.",
      "Damit gewinnt 100 mit sechs Einheiten. In dieser Einpreisauktion zahlen alle ausgeführten Käufer 100 je Einheit. Die erlaubte Höchstgrenze 101 ist kein zwingender Zahlpreis. Die Auswahlregel ist vereinfacht und ersetzt kein echtes Börsenregelwerk."
    ],
    "columns": [
      {
        "title": "Prüfpreise",
        "tone": "neutral",
        "points": [
          "99: Kauf 8, Verkauf 2 → Menge 2.",
          "101: Kauf 5, Verkauf 9 → Menge 5."
        ]
      },
      {
        "title": "Gewähltes Ergebnis",
        "tone": "positive",
        "points": [
          "100: Kauf 8, Verkauf 6 → Menge 6.",
          "6 × 100 = 600 Euro Preisbetrag."
        ]
      }
    ],
    "prompt": "Welcher Prüfpreis gewinnt nach unserer Regel?",
    "answers": [
      {
        "label": "99, weil billig immer die Auswahlregel ist.",
        "explanation": "Bei 99 können nur zwei Einheiten handeln."
      },
      {
        "label": "100 mit sechs Einheiten.",
        "explanation": "Richtig: Sechs ist die größte der drei handelbaren Mengen."
      },
      {
        "label": "101, weil das der höchste Preis ist.",
        "explanation": "Unsere Regel maximiert die Menge, nicht den Preis."
      }
    ],
    "correct": 1,
    "rule": "Preiswahl aus der angegebenen Regel ableiten."
  },
  {
    "title": "Ein Kaufüberhang ist noch kein zusätzlicher Trade",
    "summary": "Nicht zusammenpassende Wünsche bleiben unvollständig ausgeführt.",
    "paragraphs": [
      "Ein Auftragsüberhang ist die Menge auf einer zulässigen Seite, die keine passende Gegenseite findet. Er wird für einen bestimmten Preis und Auftragsstand berechnet. Er ist kein eigenes Geschäft.",
      "Bei unserem Auktionspreis 100 stehen acht zulässige Kauf- und sechs Verkaufseinheiten bereit. Sechs werden zusammengeführt. Der Kaufüberhang beträgt acht minus sechs, also zwei Einheiten. Diese zwei werden in dieser Auktion nicht ausgeführt.",
      "Trotz des Überhangs werden gleich viele Einheiten gekauft und verkauft. Der Überhang kann sich vor einer späteren Auktion ändern. Er ist keine sichere Vorhersage, dass der nächste Preis steigt."
    ],
    "columns": [
      {
        "title": "Zulässige Wünsche bei 100",
        "tone": "neutral",
        "points": [
          "Kauf 8; Verkauf 6.",
          "Kaufüberhang 8 − 6 = 2."
        ]
      },
      {
        "title": "Abschlüsse",
        "tone": "positive",
        "points": [
          "6 Einheiten gekauft und verkauft.",
          "2 Kaufwünsche in dieser Auktion nicht ausgeführt."
        ]
      }
    ],
    "prompt": "Was bedeutet der Kaufüberhang von zwei?",
    "answers": [
      {
        "label": "Zwei Einheiten wurden ohne Verkäufer gekauft.",
        "explanation": "Jeder Abschluss braucht beide Seiten."
      },
      {
        "label": "Der nächste Preis steigt garantiert um zwei Euro.",
        "explanation": "Eine Restmenge ist keine sichere Preisprognose."
      },
      {
        "label": "Zwei zulässige Kaufwünsche finden hier keine Gegenseite.",
        "explanation": "Richtig: Der Überhang ist nicht zusätzliches Handelsvolumen."
      }
    ],
    "correct": 2,
    "rule": "Überhang als unerfüllten Wunsch am genannten Preis verstehen."
  },
  {
    "title": "Indikativ heißt vorläufig",
    "summary": "Eine errechnete Vorschau ist noch kein Abschluss.",
    "paragraphs": [
      "Ein indikativer Auktionspreis ist eine vorläufige Preisangabe aus dem aktuellen Auftragsstand. Indikativ bedeutet hier anzeigend oder hinweisend. Die Anzeige beschreibt, was die Regeln mit diesem Stand ergeben würden.",
      "In unserem Fall zeigt die Vorschau 100 und sechs handelbare Einheiten. Die Sammelphase läuft weiter. Ein Verkäufer könnte einen Auftrag noch zulässig zurücknehmen. Dann kann eine neue Vorschau anders aussehen.",
      "Die Anzeige ist deshalb weder eine Zusage an jeden Nutzer noch ein bereits ausgeführter Trade. Für das tatsächliche Ergebnis zählen der maßgebliche Stand, die geltenden Regeln und die Meldung über die Ausführung."
    ],
    "columns": [
      {
        "title": "Vorschau",
        "tone": "neutral",
        "points": [
          "Indikativ 100, Menge 6.",
          "Sammelphase noch offen."
        ]
      },
      {
        "title": "Bestätigung",
        "tone": "positive",
        "points": [
          "Endgültige Preisermittlung fehlt noch.",
          "Eigene Ausführung noch nicht bestätigt."
        ]
      }
    ],
    "prompt": "Ist die Vorschau bereits ein bestätigter Kauf zu 100?",
    "answers": [
      {
        "label": "Nein, sie ist eine vorläufige Rechnung.",
        "explanation": "Richtig: Die Sammelphase kann den Stand noch verändern."
      },
      {
        "label": "Ja, jede Vorschau ist automatisch ein eigener Trade.",
        "explanation": "Eine Anzeige führt den Auftrag nicht aus."
      },
      {
        "label": "Ja, sogar alle Aufträge müssen vollständig handeln.",
        "explanation": "Die zulässige Gegenseite kann kleiner sein."
      }
    ],
    "correct": 0,
    "rule": "Indikativen Preis und bestätigte Ausführung getrennt lesen."
  },
  {
    "title": "Eine Stornierung kann die Vorschau verändern",
    "summary": "Preisänderungen können ohne neue Ausführung entstehen.",
    "paragraphs": [
      "Wir kehren zum Buch mit Käufen fünf bis 101 und drei bis 100 zurück. Verkäufer bieten zwei ab 99, vier ab 100 und drei ab 101. Im ersten Stand gewinnt der Prüfpreis 100 mit sechs Einheiten.",
      "Während des erlaubten Sammelns werden die vier Verkaufseinheiten ab 100 vollständig storniert. Nun sind bei 99 und 100 jeweils nur zwei Einheiten handelbar. Bei 101 erlauben fünf Käufer und fünf Verkäufer einen Abschluss über fünf Einheiten.",
      "Die neue Vorschau lautet deshalb 101 mit fünf Einheiten. Es gab in diesem Schritt keinen Trade. Die Stornierung hat den möglichen Abschluss geändert. Ob das neue Ergebnis wirklich ausgeführt wird, entscheidet sich erst beim maßgeblichen Ende."
    ],
    "columns": [
      {
        "title": "Vor der Stornierung",
        "tone": "neutral",
        "points": [
          "99 / 100 / 101: Mengen 2 / 6 / 5.",
          "Vorschau 100 mit 6."
        ]
      },
      {
        "title": "Nach der Stornierung",
        "tone": "positive",
        "points": [
          "99 / 100 / 101: Mengen 2 / 2 / 5.",
          "Vorschau 101 mit 5; noch kein Trade."
        ]
      }
    ],
    "prompt": "Was erklärt die neue Vorschau?",
    "answers": [
      {
        "label": "Die Höchstgrenze jedes Käufers wurde automatisch erhöht.",
        "explanation": "Die Kaufaufträge blieben unverändert."
      },
      {
        "label": "Vier Verkaufseinheiten ab 100 wurden entfernt.",
        "explanation": "Richtig: Die verfügbaren Mengen und damit die Preiswahl ändern sich."
      },
      {
        "label": "Sechs Einheiten wurden zu 101 gehandelt.",
        "explanation": "Die Sammelphase läuft noch; die neue Menge ist fünf."
      }
    ],
    "correct": 1,
    "rule": "Änderungen der Vorschau auf Auftragsänderungen prüfen, nicht als Trade zählen."
  },
  {
    "title": "Ein Gleichstand braucht eine weitere Regel",
    "summary": "Die größte Menge kann zu mehreren Preisen passen.",
    "paragraphs": [
      "Manchmal haben mehrere Prüfpreise dieselbe größte handelbare Menge. Dann reicht die Regel „größte Menge“ nicht zur eindeutigen Auswahl. Ein Handelsplatz braucht weitere Auswahlregeln. Diese können je nach Modell verschieden sein.",
      "Unser eigener Fall prüft 100, 101 und 102. Käufer wollen sechs Einheiten bis 102. Verkäufer bieten zwei ab 100 und drei ab 101. Bei 100 handeln zwei; bei 101 und 102 jeweils fünf. Unsere Zusatzregel wählt bei gleicher Menge den Preis näher am Referenzpreis 101.",
      "Der Referenzpreis ist hier nur ein festgelegter Vergleichswert. Deshalb gewinnt 101 mit fünf Einheiten. Eine Regel, einfach den höchsten Preis zu wählen, würde etwas anderes ergeben. Erfinde die Zusatzregel nicht erst nach dem Ergebnis."
    ],
    "columns": [
      {
        "title": "Mengenvergleich",
        "tone": "neutral",
        "points": [
          "100 → 2 Einheiten.",
          "101 und 102 → je 5 Einheiten."
        ]
      },
      {
        "title": "Zusatzregel im Fall",
        "tone": "positive",
        "points": [
          "Nähe zum Referenzpreis 101.",
          "Auswahl: 101 mit 5."
        ]
      }
    ],
    "prompt": "Warum gewinnt 101 statt 102?",
    "answers": [
      {
        "label": "Weil 102 weniger Einheiten handeln könnte.",
        "explanation": "Beide Preise ermöglichen im Fall fünf."
      },
      {
        "label": "Weil jeder echte Handelsplatz immer diese Regel nutzt.",
        "explanation": "Die Zusatzregel ist ausdrücklich unser Übungsmodell."
      },
      {
        "label": "Wegen der vorher genannten Referenzpreisregel.",
        "explanation": "Richtig: Die Mengen allein ergeben einen Gleichstand."
      }
    ],
    "correct": 2,
    "rule": "Bei gleichen Mengen die festgelegten Zusatzregeln nachlesen."
  },
  {
    "title": "Wer bekommt die knappe Menge?",
    "summary": "Preiswahl und Verteilung sind zwei verschiedene Fragen.",
    "paragraphs": [
      "Ein Auktionspreis kann feststehen, obwohl noch offen ist, welche einzelnen Aufträge wie viel bekommen. Diese Verteilung heißt Zuteilung. Dafür gelten eigene Prioritätsregeln, etwa Preis und Reihenfolge.",
      "Unser Fall legt den Preis 100 und sechs Verkaufseinheiten fest. Ein Käufer mit besserem Limit 101 erhält nach unserer Regel zuerst seine fünf Einheiten. Zwei Käufer mit Limit 100 wollen je zwei. Von diesen bekommt der früher eingegangene Auftrag die verbleibende eine Einheit.",
      "Die Preisermittlung allein hätte die Namen dieser Käufer nicht bestimmt. Außerdem wird der frühe Auftrag nur teilweise ausgeführt. Andere Modelle können anders verteilen. Lies Preiswahl und Zuteilungsregel getrennt."
    ],
    "columns": [
      {
        "title": "Zuteilung im Fall",
        "tone": "neutral",
        "points": [
          "Besseres Kauflimit 101: 5 Einheiten zuerst.",
          "Danach bleibt 1 Verkaufseinheit."
        ]
      },
      {
        "title": "Gleiche Limits 100",
        "tone": "positive",
        "points": [
          "Früherer Auftrag erhält 1 von gewünschten 2.",
          "Späterer Auftrag erhält 0."
        ]
      }
    ],
    "prompt": "Wie viel erhält der frühere Auftrag mit Limit 100?",
    "answers": [
      {
        "label": "Eine Einheit.",
        "explanation": "Richtig: Nach den fünf zuerst zugeteilten bleibt eine."
      },
      {
        "label": "Zwei, weil sein Wunsch zwei beträgt.",
        "explanation": "Ein Wunsch garantiert keine ausreichende Gegenmenge."
      },
      {
        "label": "Fünf, weil das der beste Käufer erhält.",
        "explanation": "Die fünf gehören dem Auftrag mit besserem Limit."
      }
    ],
    "correct": 0,
    "rule": "Gemeinsamen Preis und individuelle Zuteilung getrennt prüfen."
  },
  {
    "title": "Was passiert mit dem Restauftrag?",
    "summary": "Nicht ausgeführte Menge folgt der Gültigkeitsregel.",
    "paragraphs": [
      "Nach einer Auktion kann ein Auftrag ganz oder teilweise offen bleiben. Ob er in den nächsten Abschnitt übertragen wird oder verfällt, bestimmen seine Gültigkeit und die Regeln des Platzes.",
      "Im Beispiel will ein Käufer vier Einheiten. Zwei werden in der Auktion ausgeführt. Die übrigen zwei sind ein Restauftrag. Fall A erlaubt die Übernahme in den fortlaufenden Handel. Fall B ist nur für diese Auktion gültig und lässt den Rest danach verfallen.",
      "Die ursprünglichen vier werden nicht nochmals vollständig eingegeben. Sonst könnte versehentlich mehr gekauft werden als geplant. Für den nächsten Schritt prüfst du ausgeführte Menge, offene Menge und bestätigten Status."
    ],
    "columns": [
      {
        "title": "Fall A",
        "tone": "neutral",
        "points": [
          "4 gewünscht, 2 ausgeführt, 2 offen.",
          "Rest 2 wird nach der Regel übernommen."
        ]
      },
      {
        "title": "Fall B",
        "tone": "positive",
        "points": [
          "Gleiche Teilfüllung von 2.",
          "Rest 2 verfällt nach dieser Auktion."
        ]
      }
    ],
    "prompt": "Welche Menge bleibt unmittelbar nach der Teilfüllung noch unerfüllt?",
    "answers": [
      {
        "label": "Sechs, weil beide Mengen addiert werden.",
        "explanation": "Offene Menge entsteht durch Abziehen, nicht Addieren."
      },
      {
        "label": "Zwei Einheiten.",
        "explanation": "Richtig: Vier gewünscht minus zwei ausgeführt ergibt zwei."
      },
      {
        "label": "Vier, weil Teilfüllungen nicht zählen.",
        "explanation": "Die ausgeführten zwei zählen bereits zum Auftrag."
      }
    ],
    "correct": 1,
    "rule": "Teilfüllung und bestätigten Reststatus vor einem neuen Auftrag prüfen."
  },
  {
    "title": "Die Schlussauktion hat einen eigenen Ablauf",
    "summary": "Der letzte fortlaufende Trade muss nicht der Schlussauktionspreis sein.",
    "paragraphs": [
      "Eine Schlussauktion bündelt Aufträge zum Ende eines Handelsabschnitts. Sie kann nach dem fortlaufenden Handel stattfinden. Ein Schlussauktionspreis ist das Ergebnis dieser Auktion, nicht automatisch der letzte davor ausgeführte Preis.",
      "Im Fall liegt der letzte fortlaufende Trade bei 100. Danach wird eine Schlussauktion mit fünf Einheiten zu 102 bestätigt. Die beiden Preisangaben beschreiben verschiedene Ereignisse. Der Unterschied beträgt zwei Euro.",
      "Welche Zahl ein Datenanbieter „Schlusskurs“ nennt, hängt auch von Produkt und Datenregel ab. Hier ist nur die Schlussauktion bestätigt. Ihr Preis garantiert weder eine weitere sofortige Ausführung noch den nächsten Eröffnungspreis."
    ],
    "columns": [
      {
        "title": "Vor der Schlussauktion",
        "tone": "neutral",
        "points": [
          "Letzter fortlaufender Trade: 100.",
          "Eigener Zeitpunkt."
        ]
      },
      {
        "title": "Schlussauktion im Fall",
        "tone": "positive",
        "points": [
          "Bestätigt: 5 Einheiten zu 102.",
          "Abstand zum vorigen Trade: 2 Euro."
        ]
      }
    ],
    "prompt": "Müssen beide Preisangaben gleich sein?",
    "answers": [
      {
        "label": "Ja, eine Schlussauktion darf nie einen anderen Preis haben.",
        "explanation": "Das ist keine Regel unseres Falls."
      },
      {
        "label": "Ja, der letzte Preis wird rückwirkend gelöscht.",
        "explanation": "Ein neuer Abschluss verändert nicht den alten Trade."
      },
      {
        "label": "Nein, sie stammen aus verschiedenen Handelsereignissen.",
        "explanation": "Richtig: Der Fall bestätigt unterschiedliche Preise."
      }
    ],
    "correct": 2,
    "rule": "Letzten fortlaufenden Trade und Schlussauktionspreis unterscheiden."
  },
  {
    "title": "Nur für eine Auktion bestimmte Aufträge",
    "summary": "Eine besondere Gültigkeit kann den Handelsabschnitt begrenzen.",
    "paragraphs": [
      "Ein Auftrag kann auf eine bestimmte Auktion beschränkt sein. Er nimmt dann nur nach den dafür vorgesehenen Regeln teil. Der englische Zusatz Auction Only bedeutet sinngemäß nur Auktion.",
      "Unser Übungsauftrag darf ausschließlich in der Schlussauktion handeln. Er ist schon um 15:00 beim Broker angenommen. Bis zur Schlussauktion wird er nach unserer Regel zurückgehalten. Ein passendes Angebot im fortlaufenden Handel führt ihn deshalb nicht aus.",
      "Auch in der Schlussauktion ist seine Ausführung nicht garantiert. Preisgrenze und Gegenmenge müssen passen. Der Zusatz legt einen zulässigen Abschnitt fest, keine sichere Zuteilung. Einzelheiten besonderer Auftragsarten gehören zum Kurs über Orders und Ausführung."
    ],
    "columns": [
      {
        "title": "Vorher im Fall",
        "tone": "neutral",
        "points": [
          "15:00: Auftrag angenommen.",
          "Für die Schlussauktion zurückgehalten."
        ]
      },
      {
        "title": "Zulässiger Abschnitt",
        "tone": "positive",
        "points": [
          "Nur Schlussauktion.",
          "Preis und Menge müssen weiter passen."
        ]
      }
    ],
    "prompt": "Warum wird der Auftrag vorher nicht fortlaufend ausgeführt?",
    "answers": [
      {
        "label": "Weil seine Gültigkeit auf die Schlussauktion beschränkt ist.",
        "explanation": "Richtig: Das ist die ausdrücklich genannte Auftragsregel."
      },
      {
        "label": "Weil die Annahme automatisch eine Stornierung ist.",
        "explanation": "Annahme und Stornierung sind unterschiedliche Zustände."
      },
      {
        "label": "Weil in Schlussauktionen jeder Preis erlaubt sein muss.",
        "explanation": "Eine Preisgrenze kann weiterhin gelten."
      }
    ],
    "correct": 0,
    "rule": "Phasenbeschränkung eines Auftrags vor der Preisprüfung berücksichtigen."
  },
  {
    "title": "Eine Pause ist noch keine Aussetzung",
    "summary": "Der Grund einer Unterbrechung gehört zum Status.",
    "paragraphs": [
      "Handelsunterbrechung ist zunächst ein Oberbegriff. Ein geplanter Abschnitt ohne Ausführungen, eine automatische Schutzphase und eine ausdrückliche Handelsaussetzung können unterschiedliche Regeln haben. Der Grund bestimmt, welche nächsten Schritte möglich sind.",
      "Unser Platz meldet für Produkt A eine automatische Schutzauktion. Für Produkt B meldet er eine Handelsaussetzung bis zur weiteren Mitteilung. Aus beiden Meldungen folgt im Fall: derzeit kein normaler fortlaufender Abschluss. Die Wiederaufnahme ist aber unterschiedlich geregelt.",
      "Eine stillstehende Kursanzeige beweist keine dieser Ursachen. Es könnte auch einfach kein neuer Trade angekommen sein. Lies die aktuelle Statusmeldung für das konkrete Produkt und den Platz, statt aus einer ruhigen Linie zu raten."
    ],
    "columns": [
      {
        "title": "Produkt A",
        "tone": "neutral",
        "points": [
          "Automatische Schutzauktion gemeldet.",
          "Auktionsregeln maßgeblich."
        ]
      },
      {
        "title": "Produkt B",
        "tone": "positive",
        "points": [
          "Handelsaussetzung gemeldet.",
          "Weitere Mitteilung erforderlich."
        ]
      }
    ],
    "prompt": "Beweist eine unveränderte Kursanzeige bereits eine Handelsaussetzung?",
    "answers": [
      {
        "label": "Ja, dann sind alle Produkte weltweit ausgesetzt.",
        "explanation": "Der Status kann auf ein einzelnes Produkt begrenzt sein."
      },
      {
        "label": "Nein, dafür brauchst du eine passende Statusmeldung.",
        "explanation": "Richtig: Fehlende Trades können mehrere Gründe haben."
      },
      {
        "label": "Ja, jeder ruhige Kurs ist eine Aussetzung.",
        "explanation": "Es können auch schlicht neue Abschlüsse fehlen."
      }
    ],
    "correct": 1,
    "rule": "Unterbrechungsgrund aus einer zuständigen aktuellen Meldung entnehmen."
  },
  {
    "title": "Ein Preiskorridor prüft den nächsten möglichen Preis",
    "summary": "Ein Schutzbereich ist keine feste Bewertung des Produkts.",
    "paragraphs": [
      "Ein Preiskorridor ist ein Bereich um einen genannten Vergleichspreis. Manche Handelsmodelle prüfen damit, ob ein möglicher nächster Abschluss zu weit entfernt liegt. Die Prüfung kann eine Schutzphase auslösen.",
      "Unser Modell setzt den Referenzpreis auf 100 und den erlaubten Bereich auf 95 bis 105 einschließlich der Grenzen. Der nächste mögliche Preis 104 liegt innen. Ein möglicher Preis 106 liegt außen und löst nach unserer Regel eine Unterbrechung vor diesem Abschluss aus.",
      "Die Zahlen sind erfunden und keine echten Schwellen eines Handelsplatzes. Ein Korridor sagt auch nicht, dass ein Produkt dauerhaft höchstens 105 wert sein kann. Er ist hier eine Ablaufregel für den nächsten Ausführungsschritt."
    ],
    "columns": [
      {
        "title": "Übungsgrenzen",
        "tone": "neutral",
        "points": [
          "Referenz 100; Bereich 95 bis 105 einschließlich.",
          "104 und 105 liegen innen."
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "106 liegt außerhalb.",
          "Im Modell Unterbrechung vor Ausführung zu 106."
        ]
      }
    ],
    "prompt": "Welcher Preis löst im Modell die Unterbrechung aus?",
    "answers": [
      {
        "label": "105.",
        "explanation": "Die obere Grenze ist im Fall eingeschlossen."
      },
      {
        "label": "104, weil jeder Anstieg verboten ist.",
        "explanation": "104 liegt innerhalb des Bereichs."
      },
      {
        "label": "106.",
        "explanation": "Richtig: Er liegt außerhalb der ausdrücklich genannten Grenzen."
      }
    ],
    "correct": 2,
    "rule": "Grenzen, Referenzwert und Auslösebedingung des konkreten Modells prüfen."
  },
  {
    "title": "Vor der Unterbrechung kann eine Teilfüllung liegen",
    "summary": "Eine Schutzphase macht frühere Abschlüsse nicht ungeschehen.",
    "paragraphs": [
      "Eine größere Order kann zunächst innerhalb eines erlaubten Bereichs handeln und danach einen unzulässigen nächsten Preis erreichen. Ob vorher Teilfüllungen erfolgen dürfen, hängt von der Order und dem Handelsmodell ab.",
      "Unser Fall erlaubt Teilfüllungen und hat den Korridor 95 bis 105. Ein Käufer will drei Einheiten und erlaubt bis 106. Zwei sind zu 104 angeboten, eine weitere zu 106. Zuerst werden zwei zu 104 ausgeführt. Vor der dritten löst die Korridorregel eine Schutzphase aus.",
      "Es wurden also zwei Einheiten für 208 Euro gehandelt. Eine bleibt unerfüllt. Die Unterbrechung storniert die zwei bestätigten Abschlüsse im Fall nicht. Der Rest wird nach unserer Regel in die Schutzauktion übernommen; deren Ergebnis steht noch offen."
    ],
    "columns": [
      {
        "title": "Bereits bestätigt",
        "tone": "neutral",
        "points": [
          "2 × 104 = 208 Euro.",
          "Ausgeführte Menge 2."
        ]
      },
      {
        "title": "Nächster Schritt",
        "tone": "positive",
        "points": [
          "Möglicher Preis 106 außerhalb.",
          "1 Einheit offen; Schutzauktion folgt."
        ]
      }
    ],
    "prompt": "Wie viele Einheiten sind vor der Schutzphase ausgeführt?",
    "answers": [
      {
        "label": "Zwei.",
        "explanation": "Richtig: Nur die beiden zu 104 sind bestätigt."
      },
      {
        "label": "Null, weil jede Unterbrechung alles rückgängig macht.",
        "explanation": "Der Fall behält bestätigte Geschäfte bei."
      },
      {
        "label": "Drei, weil der Käufer 106 erlaubt.",
        "explanation": "Sein Limit hebt die Korridorregel nicht auf."
      }
    ],
    "correct": 0,
    "rule": "Bestätigte Teilfüllungen, Auslöser und Restauftrag getrennt festhalten."
  },
  {
    "title": "Volatilitätsunterbrechung: die Handelsform kann wechseln",
    "summary": "Ein Schutzmechanismus kann eine zusätzliche Auktion einleiten.",
    "paragraphs": [
      "Volatilität beschreibt die Stärke von Preisschwankungen. Eine Volatilitätsunterbrechung ist in manchen Modellen eine Schutzphase bei einem zu weit entfernten möglichen Preis. Sie kann den fortlaufenden Handel in eine zusätzliche Auktion überführen.",
      "Unser Modell stoppt den nächsten fortlaufenden Abschluss und sammelt Aufträge für eine Schutzauktion. Während des Sammelns dürfen Teilnehmer nach unserer Regel ändern oder löschen. Ein neuer vorläufiger Auktionspreis kann sich deshalb verändern.",
      "Das ist keine weltweit einheitliche Regel. Ein anderes Produkt kann Preisbänder oder andere Unterbrechungsmechanismen haben. Auch eine Schutzauktion garantiert keine Rückkehr zum alten Preis. Lies Auslöser und weitere Phasen im konkreten Modell."
    ],
    "columns": [
      {
        "title": "Vorher",
        "tone": "neutral",
        "points": [
          "Fortlaufender Handel.",
          "Möglicher nächster Preis verletzt die Übungsgrenze."
        ]
      },
      {
        "title": "Danach im Modell",
        "tone": "positive",
        "points": [
          "Zusätzliche Sammelauktion.",
          "Vorläufiger Preis kann sich ändern."
        ]
      }
    ],
    "prompt": "Welche Änderung beschreibt unser Fall?",
    "answers": [
      {
        "label": "Automatische Löschung aller früheren Trades.",
        "explanation": "Ein Phasenwechsel löscht die Historie nicht."
      },
      {
        "label": "Wechsel vom fortlaufenden Handel in eine Schutzauktion.",
        "explanation": "Richtig: Die Handelsform ändert sich."
      },
      {
        "label": "Sichere Rückkehr jedes Preises zum alten Wert.",
        "explanation": "Der Mechanismus gibt diese Zusage nicht."
      }
    ],
    "correct": 1,
    "rule": "Schutzmechanismus als Ablaufregel lesen, nicht als Preisgarantie."
  },
  {
    "title": "Das Ende kann zufällig oder verlängert sein",
    "summary": "Eine geplante Zeit ist nicht immer der tatsächliche Abschlusszeitpunkt.",
    "paragraphs": [
      "Eine Aufrufphase kann nach einer Mindestdauer ein zufälliges Ende haben. Damit steht die genaue letzte Sekunde nicht schon vorher fest. Manche Modelle verlängern das Sammeln zusätzlich, wenn ihre Schutzbedingungen noch nicht erfüllt sind.",
      "Unsere Übungsauktion endet ohne Verlängerung irgendwann zwischen 09:00:00 und 09:00:30. Um 09:00:10 könnte sie also bereits beendet sein oder noch laufen. Der Nutzer braucht den aktuellen Phasenstatus statt nur seine Uhr.",
      "Eine Verlängerung kann das angenommene Fenster weiter verschieben. Das Beispiel behauptet keine bestimmte echte Auktionsdauer. Für einen Auftrag zählt zudem, ob seine Änderung am zuständigen System noch rechtzeitig angenommen und bestätigt wurde."
    ],
    "columns": [
      {
        "title": "Ohne Verlängerung im Fall",
        "tone": "neutral",
        "points": [
          "Mögliches Ende 09:00:00–09:00:30.",
          "Genaues Ende vorher unbekannt."
        ]
      },
      {
        "title": "Um 09:00:10",
        "tone": "positive",
        "points": [
          "Beendet oder noch offen möglich.",
          "Aktuellen Status und Bestätigung prüfen."
        ]
      }
    ],
    "prompt": "Ist die Auktion um 09:00:10 sicher noch offen?",
    "answers": [
      {
        "label": "Ja, immer bis exakt 09:00:30.",
        "explanation": "Das ist nur die obere Grenze ohne Verlängerung."
      },
      {
        "label": "Ja, eine Änderung am Handy gilt rückwirkend.",
        "explanation": "Der Eingang am zuständigen System ist maßgeblich."
      },
      {
        "label": "Nein, das genaue Ende ist im Fall unbekannt.",
        "explanation": "Richtig: Der Zeitpunkt liegt innerhalb des möglichen Endfensters."
      }
    ],
    "correct": 2,
    "rule": "Bei variablem Ende Status und bestätigten Auftragseingang prüfen."
  },
  {
    "title": "Ein Stornierungswunsch ist noch keine Bestätigung",
    "summary": "Eine Nachricht kann den entscheidenden Zeitpunkt verfehlen.",
    "paragraphs": [
      "Stornieren heißt, einen offenen Auftrag zurückzunehmen. Das Absenden eines Wunsches ist noch nicht seine Bestätigung. Besonders nahe an einer Preisermittlung können Eingang und Ausführung zeitlich zusammenfallen.",
      "Unsere Uhren sind vergleichbar. Die Auktion führt den Auftrag um 09:00:05 aus. Der Stornierungswunsch erreicht das zuständige System erst um 09:00:06. Nach unserer Regel kann ein bereits ausgeführter Auftrag nicht mehr storniert werden.",
      "Auch wenn der Nutzer um 09:00:04 auf den Knopf gedrückt hat, zählt das nicht als bestätigte Rücknahme. Im Fall gab es eine Übertragungsverzögerung. Prüfe die Ausführungs- und Stornierungsantwort, bevor du einen Ersatzauftrag schickst."
    ],
    "columns": [
      {
        "title": "Bekannte Folge",
        "tone": "neutral",
        "points": [
          "09:00:04: Knopf gedrückt.",
          "09:00:05: Ausführung am Platz."
        ]
      },
      {
        "title": "Späterer Eingang",
        "tone": "positive",
        "points": [
          "09:00:06: Stornierungswunsch angekommen.",
          "Keine Rücknahme des ausgeführten Geschäfts im Fall."
        ]
      }
    ],
    "prompt": "Warum verhindert der Knopfdruck die Ausführung hier nicht?",
    "answers": [
      {
        "label": "Weil die Stornierung erst nach der Ausführung ankommt.",
        "explanation": "Richtig: Ein früherer lokaler Klick ist keine rechtzeitige Bestätigung."
      },
      {
        "label": "Weil jeder Klick automatisch einen zweiten Trade erzeugt.",
        "explanation": "Ein Stornierungswunsch ist kein neuer Kauf."
      },
      {
        "label": "Weil die Uhrzeit grundsätzlich keine Rolle spielt.",
        "explanation": "Gerade die bekannte Reihenfolge erklärt das Ergebnis."
      }
    ],
    "correct": 0,
    "rule": "Auf bestätigten Status statt allein auf den lokalen Klick vertrauen."
  },
  {
    "title": "Die Wiederaufnahme kann einen neuen Preis ergeben",
    "summary": "Eine neue Auktion verwendet den dann gültigen Auftragsstand.",
    "paragraphs": [
      "Nach einer Unterbrechung kann ein Platz den Handel mit einer Wiederaufnahmeauktion starten. Sie sammelt die dann zulässigen Aufträge. Der alte Trade ist eine historische Zahl und muss nicht der neue Auktionspreis sein.",
      "Im Fall war der letzte Trade 100. Für die Wiederaufnahme gelten als Prüfpreise 102, 103 und 104. Käufer wollen vier bis 104. Verkäufer bieten drei ab 102 und zwei ab 104. Die Mengen lauten drei, drei und vier. Unsere Regel wählt die größte Menge.",
      "Damit handeln vier Einheiten zu 104. Der Abstand zum alten Trade beträgt vier Euro. Schutzprüfung und Freigabe sind im Fall bereits erledigt. Es wird kein Geschäft zu 101 erfunden, nur weil dieser Preis zwischen beiden liegt."
    ],
    "columns": [
      {
        "title": "Vorher und neue Wünsche",
        "tone": "neutral",
        "points": [
          "Alter Trade 100.",
          "Kauf 4 bis 104; Verkauf 3 ab 102 und 2 ab 104."
        ]
      },
      {
        "title": "Wiederaufnahme im Fall",
        "tone": "positive",
        "points": [
          "102 / 103 / 104: Mengen 3 / 3 / 4.",
          "4 zu 104; Abstand zum alten Trade 4 Euro."
        ]
      }
    ],
    "prompt": "Welcher neue Preis folgt aus unserer Mengenregel?",
    "answers": [
      {
        "label": "101, weil jeder Zwischenpreis gehandelt werden muss.",
        "explanation": "Ein Preissprung braucht keine Trades an jeder Zwischenzahl."
      },
      {
        "label": "104 mit vier Einheiten.",
        "explanation": "Richtig: Vier ist die größte gemeinsam handelbare Menge."
      },
      {
        "label": "100, weil jede Wiederaufnahme den alten Preis verwendet.",
        "explanation": "Der neue Stand erlaubt hier andere Ergebnisse."
      }
    ],
    "correct": 1,
    "rule": "Wiederaufnahmepreis aus neuem Stand und gültigen Regeln ableiten."
  },
  {
    "title": "Aussetzung, technisches Problem oder einzelnes Produkt?",
    "summary": "Eine Störung hat einen bestimmten Umfang und eine bestimmte Ursache.",
    "paragraphs": [
      "Eine Handelsaussetzung kann ein Produkt ausdrücklich vom Handel ausschließen, bis eine zuständige Stelle die Wiederaufnahme meldet. Ein technisches Problem betrifft dagegen etwa die Verbindung oder ein Handelssystem. Beides ist nicht allein aus einem alten Kurs abzulesen.",
      "Im Fall meldet der Platz nur für Produkt P eine Aussetzung. Produkt Q bleibt handelbar. Gleichzeitig verliert ein Nutzer seine Verbindung zur App. Daraus folgt nicht, dass Q am Platz geschlossen ist. Ebenso erlaubt eine funktionierende App keinen Handel in P.",
      "Prüfe Produktstatus, Platzstatus, Verbindung und Auftragsstatus getrennt. Eine offene Position verschwindet während der Aussetzung nicht automatisch. Wann und wie wieder gehandelt werden darf, hängt von der gültigen Wiederaufnahmemeldung und den Regeln ab."
    ],
    "columns": [
      {
        "title": "Produktstatus im Fall",
        "tone": "neutral",
        "points": [
          "P ausgesetzt.",
          "Q am Platz weiter handelbar."
        ]
      },
      {
        "title": "Nutzerverbindung",
        "tone": "positive",
        "points": [
          "App-Verbindung unterbrochen.",
          "Keine vollständige Aussage über den Platzstatus."
        ]
      }
    ],
    "prompt": "Beweist die verlorene App-Verbindung, dass Q ausgesetzt ist?",
    "answers": [
      {
        "label": "Ja, alle Produkte teilen automatisch jeden App-Fehler.",
        "explanation": "Der Fehler kann nur den einzelnen Zugang betreffen."
      },
      {
        "label": "Ja, eine offene Position wird dann gelöscht.",
        "explanation": "Ein Verbindungsproblem löscht keine Position."
      },
      {
        "label": "Nein, Q ist laut Platzmeldung weiter handelbar.",
        "explanation": "Richtig: Verbindungsstatus und Produktstatus sind verschiedene Angaben."
      }
    ],
    "correct": 2,
    "rule": "Umfang und Ursache aus den passenden Statusquellen prüfen."
  },
  {
    "title": "Dein Phasencheck: erst Ablauf, dann Ergebnis",
    "summary": "Ein vollständiger Fall verbindet Vorschau, Änderungen und bestätigte Ausführung.",
    "paragraphs": [
      "Für deinen Phasencheck notierst du Produkt, Platz, Zeit und Statusquelle. Bestimme Handelsphase, zulässige Aufträge und Preisregel. Trenne Vorschau, endgültigen Preis, eigene Zuteilung und Reststatus. So entsteht aus einer Anzeige ein überprüfbarer Ablauf.",
      "Im Fall zeigt eine Auktion zuerst 100 mit sechs Einheiten. Dann werden vier Verkaufseinheiten ab 100 storniert. Die neue Vorschau ist 101 mit fünf. Danach ändern sich keine Aufträge mehr. Die Auktion bestätigt fünf gehandelte Einheiten zu 101.",
      "Dein Auftrag wollte zwei Einheiten und erhält laut Ausführungsbericht eine zu 101. Der Rest verfällt nach seiner Gültigkeitsregel. Dein Preisbetrag beträgt 101 Euro vor Kosten, das gesamte Auktionsvolumen fünf. Im nächsten Kapitel betrachten wir, was nach einem Trade passiert."
    ],
    "columns": [
      {
        "title": "Gesamte Auktion",
        "tone": "neutral",
        "points": [
          "Vorschau 100/6; Stornierung; Vorschau 101/5.",
          "Bestätigt: 5 Einheiten zu 101."
        ]
      },
      {
        "title": "Eigener Auftrag",
        "tone": "positive",
        "points": [
          "2 gewünscht; 1 zu 101 ausgeführt.",
          "Preisbetrag 101 Euro; Rest 1 verfällt."
        ]
      }
    ],
    "prompt": "Welche eigene Ausführung ist durch den Bericht bestätigt?",
    "answers": [
      {
        "label": "Eine Einheit für 101 Euro vor Kosten.",
        "explanation": "Richtig: Das Gesamtvolumen gehört nicht vollständig deinem Auftrag."
      },
      {
        "label": "Fünf eigene Einheiten für 505 Euro.",
        "explanation": "Fünf ist das gesamte Auktionsvolumen."
      },
      {
        "label": "Zwei eigene Einheiten zu 100.",
        "explanation": "Das war nur die frühere Vorschau; dein Bericht nennt eine zu 101."
      }
    ],
    "correct": 0,
    "rule": "Phasenstatus, endgültiges Ergebnis und eigenen Ausführungsbericht gemeinsam prüfen."
  }
] as const;

export const marketBasicsChapterTenLessons: Lesson[] = drafts.map((draft, index) => {
  const key = `how-exchanges-work.chapter-10.lesson-${String(index + 1).padStart(2, '0')}`;
  return {
    id: key, title: draft.title, summary: draft.summary,
    sourceUnit: 'Kapitel 10 · Besondere Handelsphasen', sourceAnchors: [draft.title],
    durationMinutes: 6, xp: 35, status: 'published',
    steps: [
      { id: `${key}.explain`, type: 'explanation', eyebrow: 'Trading von null · Kapitel 10', title: draft.title, paragraphs: [...draft.paragraphs], callout: draft.rule },
      { id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick', columns: draft.columns.map((column) => ({ ...column, points: [...column.points] })) },
      { id: `${key}.question`, type: 'question', title: 'Kurz prüfen', prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`, options: draft.answers.map((answer, option) => ({ id: `choice-${option}`, ...answer })) },
      { id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit', points: [draft.rule, draft.summary] },
    ],
  };
});
