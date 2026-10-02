import type { Lesson } from '../../types';
const drafts = [
  {
    "title": "Ein Ausführungsplan beschreibt Handlungen und Grenzen",
    "summary": "Eine Handelsidee wird erst durch klare Anweisungen prüfbar.",
    "paragraphs": [
      "Jana startet im Übungskonto mit 1.000 Euro und ohne Aktien. Sie möchte bis zu fünf Aktien der erfundenen Firma Olin kaufen. Ihr Ausführungsplan beschreibt, welche Aufträge sie dafür verwenden und wie sie bestätigte Ergebnisse prüfen will.",
      "Der Plan ist keine Vorhersage, dass Olin steigt. Er nennt Produkt, Konto, Mengen, Preisregeln, Fristen, Kosten und den Umgang mit Störungen. Auch ein sauber formulierter Plan kann mit einem Verlust enden.",
      "Wir gehen einen Hauptpfad durch und prüfen danach getrennte Alternativen. Alle Preise, Tarife und Verknüpfungen sind eigene Übungsregeln. Die Beispiele liefern keine Empfehlung für ein echtes Produkt oder eine bestimmte Kontogröße."
    ],
    "columns": [
      {
        "title": "Startzustand",
        "tone": "neutral",
        "points": [
          "1.000 Euro, null Aktien.",
          "Bis zu fünf Olin kaufen."
        ]
      },
      {
        "title": "Prüfbarer Plan",
        "tone": "positive",
        "points": [
          "Aufträge und Grenzen vorher festhalten.",
          "Ergebnis anschließend mit Belegen prüfen."
        ]
      }
    ],
    "prompt": "Was leistet der Ausführungsplan?",
    "answers": [
      {
        "label": "Er legt Handlungen, Bedingungen und Prüfungen fest.",
        "explanation": "Richtig: Ein Plan macht Handlungen prüfbar, garantiert aber keinen Gewinn."
      },
      {
        "label": "Er beweist einen späteren Gewinn.",
        "explanation": "Ein Ablaufplan ist keine Kursvorhersage."
      },
      {
        "label": "Er ersetzt jede Ausführungsbestätigung.",
        "explanation": "Tatsächliche Geschäfte müssen weiterhin belegt sein."
      }
    ],
    "correct": 0,
    "rule": "Ein Plan macht Handlungen prüfbar, garantiert aber keinen Gewinn."
  },
  {
    "title": "Den Einstieg als vollständigen Auftrag formulieren",
    "summary": "Seite, Menge, Preisregel und Frist gehören zusammen.",
    "paragraphs": [
      "Janas Kaufauftrag K10 lautet: im Übungskonto bis zu fünf Olin kaufen, Limit 30,10 Euro, gültig bis 17 Uhr des Übungstages. Teilkäufe sind erlaubt. Ein Kauf darf höchstens 30,10 je Aktie kosten.",
      "Die Frist betrifft die offene Kauforder. Sie bedeutet nicht, dass bereits gekaufte Aktien um 17 Uhr automatisch verkauft werden. Der Handelsweg und die Bedeutung der Bestätigungen sind im Übungssystem vorher geklärt.",
      "Jana prüft vor dem Senden die Kennung des Kontos und die Eingaben. Eine Zahl ohne Handelsseite oder Produkt wäre keine ausreichende Anweisung. „Bis zu fünf“ erlaubt auch weniger Käufe; es verlangt nicht sofort alle fünf."
    ],
    "columns": [
      {
        "title": "K10",
        "tone": "neutral",
        "points": [
          "Olin kaufen, bis zu fünf Stück.",
          "Limit 30,10, Teilkäufe erlaubt."
        ]
      },
      {
        "title": "Eigene Zeitregel",
        "tone": "positive",
        "points": [
          "Gültig bis 17 Uhr.",
          "Frist beendet nur einen offenen Orderrest."
        ]
      }
    ],
    "prompt": "Was begrenzt das Kauf-Limit 30,10?",
    "answers": [
      {
        "label": "Eine sichere vollständige Fünfermenge.",
        "explanation": "Auch eine Limitorder kann teilweise oder gar nicht ausgeführt werden."
      },
      {
        "label": "Den höchsten zulässigen Kaufpreis je Aktie.",
        "explanation": "Richtig: Prüfe Produkt, Seite, Menge, Preisregel, Konto und Frist als zusammengehörige Anweisung."
      },
      {
        "label": "Den garantierten Verkaufspreis.",
        "explanation": "Das Limit gehört zum Kaufauftrag."
      }
    ],
    "correct": 1,
    "rule": "Prüfe Produkt, Seite, Menge, Preisregel, Konto und Frist als zusammengehörige Anweisung."
  },
  {
    "title": "Gebühren und Preisannahmen vor der Größenrechnung festlegen",
    "summary": "Ein Planungsbudget braucht ausdrücklich genannte Annahmen.",
    "paragraphs": [
      "Der eigene Tarif kostet je tatsächlich ausgeführtem Auftrag einmal 0,30 Euro und zusätzlich 0,02 je gehandelter Aktie. Teilfills desselben Auftrags lösen keine weitere feste Gebühr aus. Vollständig unausgeführte Orders kosten im Modell nichts.",
      "Jana rechnet für ihre Planung mit Kauf 30,10 und Verkauf 29,50. Dazu setzt sie einen Slippagepuffer von 0,10 je Aktie an. Ein Puffer ist hier eine zusätzliche Rechenannahme für einen ungünstigeren Verkauf, keine Preisgarantie.",
      "Ihr Planungsbudget beträgt 5,00 Euro. Es ist die Grenze für diese vorbereitete Modellrechnung. Weitere Gebühren, Steuern, Währungswechsel und Finanzierung gibt es im Übungsfall nicht. Tatsächliche Verluste können bei anderen Ausführungspreisen höher sein."
    ],
    "columns": [
      {
        "title": "Rechenannahmen",
        "tone": "neutral",
        "points": [
          "Preisabstand 0,60 plus Puffer 0,10 je Aktie.",
          "Je ausgeführter Order 0,30 plus 0,02 je Aktie."
        ]
      },
      {
        "title": "Planungsbudget",
        "tone": "positive",
        "points": [
          "5,00 Euro für die Modellrechnung.",
          "Keine garantierte Verlustobergrenze."
        ]
      }
    ],
    "prompt": "Was bedeutet der Slippagepuffer von 0,10 hier?",
    "answers": [
      {
        "label": "Ein garantierter Höchstbetrag für jede Preislücke.",
        "explanation": "Eine Annahme bindet den Markt nicht."
      },
      {
        "label": "Eine zusätzliche echte Kontogebühr.",
        "explanation": "Der Puffer ist keine Gebührenbuchung."
      },
      {
        "label": "Eine zusätzliche Preisannahme je Aktie in der Planung.",
        "explanation": "Richtig: Benenne Preise, Kosten und Puffer, bevor du eine Menge aus einem Budget ableitest."
      }
    ],
    "correct": 2,
    "rule": "Benenne Preise, Kosten und Puffer, bevor du eine Menge aus einem Budget ableitest."
  },
  {
    "title": "Die geplante Stückzahl mit einer Gegenprobe bestimmen",
    "summary": "Die nächstgrößere Menge muss ebenfalls geprüft werden.",
    "paragraphs": [
      "Für jede Aktie plant Jana 0,60 Preisabstand und 0,10 Puffer, zusammen 0,70. Die Stückgebühren für Kauf und Verkauf kommen mit zweimal 0,02 hinzu. Damit zählt jede Aktie in der Rechnung mit 0,74 Euro.",
      "Die zwei festen Auftragsgebühren ergeben zusätzlich 0,60 Euro. Bei fünf Aktien sind es fünf mal 0,74 plus 0,60, also 4,30 Euro. Bei sechs wären es 4,44 plus 0,60, also 5,04. Das liegt über dem Budget 5,00.",
      "Unter diesen Annahmen passen höchstens fünf ganze Aktien in das Planungsbudget. Das ist nur die Größenrechnung für diesen Aktienfall. Ein Stop garantiert weiterhin keinen Verlust von höchstens 5,00, und der Geldbedarf muss zusätzlich geprüft werden."
    ],
    "columns": [
      {
        "title": "Fünf Aktien",
        "tone": "neutral",
        "points": [
          "5 × 0,74 + 0,60 = 4,30.",
          "Passt in Budget 5,00."
        ]
      },
      {
        "title": "Sechs Aktien",
        "tone": "positive",
        "points": [
          "6 × 0,74 + 0,60 = 5,04.",
          "Passt nicht in Budget 5,00."
        ]
      }
    ],
    "prompt": "Welche größte ganze Menge passt in diese Modellrechnung?",
    "answers": [
      {
        "label": "Fünf Aktien.",
        "explanation": "Richtig: Prüfe die berechnete Menge und die nächstgrößere ganze Menge mit denselben Annahmen."
      },
      {
        "label": "Sechs Aktien.",
        "explanation": "5,04 ist mehr als das Budget 5,00."
      },
      {
        "label": "Sieben Aktien.",
        "explanation": "Eine noch größere Menge überschreitet die Grenze ebenfalls."
      }
    ],
    "correct": 0,
    "rule": "Prüfe die berechnete Menge und die nächstgrößere ganze Menge mit denselben Annahmen."
  },
  {
    "title": "Den Geldbedarf getrennt vom Preisrisiko prüfen",
    "summary": "Eine Risikorechnung bezahlt den Kauf nicht.",
    "paragraphs": [
      "Für fünf Käufe zum Höchstpreis 30,10 beträgt der Handelswert 150,50 Euro. Die Kaufgebühr wäre 0,30 plus fünf mal 0,02, also 0,40. Jana benötigt nach diesem Modell insgesamt 150,90 Euro.",
      "Im Übungskonto stehen 1.000 Euro ohne andere Geldpflichten. Die 150,90 passen hinein. Das Planungsbudget 5,00 bezeichnet einen möglichen Handelsnachteil unter den genannten Annahmen; es ist nicht der zu bezahlende Kaufwert.",
      "Wir handeln hier Aktien ohne Kredit. Konten mit Sicherheitsleistungen, anderen offenen Aufträgen oder Währungswechseln brauchen andere Prüfungen. Aus einer kleinen geplanten Verlustzahl folgt nicht automatisch, dass genügend Geld für einen Auftrag verfügbar ist."
    ],
    "columns": [
      {
        "title": "Geplanter Kaufbedarf",
        "tone": "neutral",
        "points": [
          "Fünf zu 30,10: 150,50.",
          "Gebühr 0,40: insgesamt 150,90."
        ]
      },
      {
        "title": "Getrennte Grenze",
        "tone": "positive",
        "points": [
          "Planungsbudget 5,00.",
          "Nicht der Kaufbetrag."
        ]
      }
    ],
    "prompt": "Welcher maximale Kaufbetrag inklusive Modellgebühr wird hier vorbereitet?",
    "answers": [
      {
        "label": "150,50 Euro.",
        "explanation": "Die Kaufgebühr 0,40 fehlt."
      },
      {
        "label": "150,90 Euro.",
        "explanation": "Richtig: Prüfe Kaufgeld und geplanten Handelsnachteil als zwei verschiedene Rechnungen."
      },
      {
        "label": "5,00 Euro.",
        "explanation": "Das ist das Planungsbudget, nicht die Kaufbelastung."
      }
    ],
    "correct": 1,
    "rule": "Prüfe Kaufgeld und geplanten Handelsnachteil als zwei verschiedene Rechnungen."
  },
  {
    "title": "Ein Kursbild nur mit seiner Zeit und Menge verwenden",
    "summary": "Sichtbare Angebote sind keine Dauerzusage.",
    "paragraphs": [
      "Beim Verarbeiten von K10 zeigt das eigene Übungsbuch zwei Olin zu 30,00, eine zu 30,10 und vier zu 30,20 auf der Verkaufsseite. Jana darf mit ihrem Kauflimit 30,10 nur die ersten beiden Preisstufen nutzen.",
      "Das Buchbild gehört zu diesem Verarbeitungsschritt. Wir lassen konkurrierende Aufträge und weitere Änderungen in diesem Schritt weg. So sind genau drei Aktien innerhalb des Limits verfügbar.",
      "Ein früherer Bildschirmkurs könnte inzwischen anders aussehen. Für einen echten Ausführungsvergleich müssen Zeit, Preisart und Menge passen. Die vier Angebote zu 30,20 sind trotz Sichtbarkeit für K10 zu teuer."
    ],
    "columns": [
      {
        "title": "Innerhalb des Limits",
        "tone": "neutral",
        "points": [
          "Zwei zu 30,00.",
          "Eine zu 30,10."
        ]
      },
      {
        "title": "Außerhalb des Limits",
        "tone": "positive",
        "points": [
          "Vier zu 30,20.",
          "Nicht für K10 nutzbar."
        ]
      }
    ],
    "prompt": "Wie viele Aktien sind in diesem Bild für K10 preislich passend?",
    "answers": [
      {
        "label": "Sieben Aktien.",
        "explanation": "Die vier zu 30,20 überschreiten das Kauflimit."
      },
      {
        "label": "Fünf Aktien.",
        "explanation": "Die gewünschte Menge erzeugt keine passenden Angebote."
      },
      {
        "label": "Drei Aktien.",
        "explanation": "Richtig: Prüfe bei einem Angebot zugleich Zeitpunkt, Preisgrenze und verfügbare Menge."
      }
    ],
    "correct": 2,
    "rule": "Prüfe bei einem Angebot zugleich Zeitpunkt, Preisgrenze und verfügbare Menge."
  },
  {
    "title": "Den tatsächlichen Teilkauf mengenrichtig buchen",
    "summary": "Gewünschte Menge und ausgeführte Menge bleiben verschieden.",
    "paragraphs": [
      "K10 bestätigt zwei Käufe zu 30,00 und einen zu 30,10. Das kostet 60,00 plus 30,10, also 90,10 Euro Handelswert. Drei von fünf Aktien sind gekauft; zwei bleiben zunächst in K10 offen.",
      "Die Kaufgebühr beträgt einmal 0,30 plus drei mal 0,02, also 0,36. Die tatsächliche Belastung ist 90,46 Euro. Der Geldstand sinkt von 1.000 auf 909,54; der Bestand steigt von null auf drei.",
      "Der mittlere Kaufpreis ist 90,10 geteilt durch drei, also ungefähr 30,0333 je Aktie. Für die Geldbuchung verwendet Jana die wirklichen Einzelwerte. Ein früh gerundeter Durchschnitt darf die tatsächliche Belastung nicht verändern."
    ],
    "columns": [
      {
        "title": "Bestätigte Käufe",
        "tone": "neutral",
        "points": [
          "Zwei zu 30,00, einer zu 30,10.",
          "Handelswert 90,10."
        ]
      },
      {
        "title": "Konto danach",
        "tone": "positive",
        "points": [
          "Belastung 90,46; Geld 909,54.",
          "Bestand drei; Kaufrest zwei offen."
        ]
      }
    ],
    "prompt": "Wie hoch ist die tatsächliche Kaufbelastung?",
    "answers": [
      {
        "label": "90,46 Euro.",
        "explanation": "Richtig: Buche die bestätigte Menge zu ihren wirklichen Preisen und ergänze die passenden Gebühren."
      },
      {
        "label": "150,90 Euro.",
        "explanation": "Das wäre der vorbereitete volle Fünferkauf."
      },
      {
        "label": "90,10 Euro.",
        "explanation": "Die ausgeführte Order kostet zusätzlich 0,36."
      }
    ],
    "correct": 0,
    "rule": "Buche die bestätigte Menge zu ihren wirklichen Preisen und ergänze die passenden Gebühren."
  },
  {
    "title": "Den Kaufrest erst nach bestätigtem Storno entfernen",
    "summary": "Der Hauptpfad setzt einen geklärten Restzustand voraus.",
    "paragraphs": [
      "Jana will im Hauptpfad bei den drei gekauften Aktien bleiben. Sie beantragt die Stornierung der zwei offenen Stücke von K10. In diesem Fall entstehen während der Bearbeitung ausdrücklich keine weiteren Käufe.",
      "Das Übungssystem bestätigt danach: zwei Reststücke storniert. K10 hat nun drei ausgeführte Käufe und keinen offenen Rest. Die drei Aktien im Bestand werden durch die Stornierung nicht entfernt.",
      "Ohne diese Bestätigung könnte ein weiterer Kauf noch möglich sein. Der Hauptpfad wartet auf den geklärten Restzustand, bevor die Ausstiegsgruppe eingerichtet wird. In dieser Wartephase ist noch kein automatischer Ausstieg aktiv; sie ist kein Schutzversprechen."
    ],
    "columns": [
      {
        "title": "Vor Bestätigung",
        "tone": "neutral",
        "points": [
          "Drei gekauft, zwei noch offen.",
          "Stornierung nur beantragt."
        ]
      },
      {
        "title": "Im bestätigten Hauptpfad",
        "tone": "positive",
        "points": [
          "Zwei Reststücke storniert.",
          "Drei im Bestand, Kaufrest null."
        ]
      }
    ],
    "prompt": "Welcher Zustand gilt nach der genannten Bestätigung?",
    "answers": [
      {
        "label": "Fünf Aktien im Bestand.",
        "explanation": "Zwei wurden storniert und ausdrücklich nicht gekauft."
      },
      {
        "label": "Drei Aktien im Bestand, kein offener Kaufrest.",
        "explanation": "Richtig: Beende einen Kaufrest erst mit seiner Bestätigung und berücksichtige die Zwischenzeit."
      },
      {
        "label": "Null Aktien im Bestand.",
        "explanation": "Storno entfernt keinen bereits gekauften Bestand."
      }
    ],
    "correct": 1,
    "rule": "Beende einen Kaufrest erst mit seiner Bestätigung und berücksichtige die Zwischenzeit."
  },
  {
    "title": "Die Ausstiegsmenge an den bestätigten Bestand anpassen",
    "summary": "Ein Teilkauf braucht keinen vollen geplanten Fünferverkauf.",
    "paragraphs": [
      "Jana hat nun drei Aktien und keinen offenen Kaufrest. Sie richtet für diese drei einen Zielverkauf mit Limit 30,60 und eine Stop-Market-Bedingung bei 29,50 ein. Beide gehören im Übungssystem zur selben Ausstiegsgruppe.",
      "Würde sie ohne weitere Begrenzung fünf verkaufen, wären das zwei mehr als ihr Bestand. In anderen Konten könnte ein solcher Auftrag abgelehnt werden oder eine unbeabsichtigte Gegenposition erzeugen. Das ist keine passende Mengenanpassung.",
      "Der Hauptpfad verwendet bestätigte Ausstiegsmengen von jeweils drei und eine eigene Koordinationsregel. Die Gruppe wird erst jetzt als aktiv bestätigt. Eine vorbereitete Eingabe vorher war noch kein aktiver Schutz."
    ],
    "columns": [
      {
        "title": "Bestätigter Bestand",
        "tone": "neutral",
        "points": [
          "Drei Aktien.",
          "Keine weiteren offenen Käufe."
        ]
      },
      {
        "title": "Ausstiege",
        "tone": "positive",
        "points": [
          "Ziel und Stop für jeweils drei.",
          "Gemeinsam koordinierte Gruppe."
        ]
      }
    ],
    "prompt": "Welche Menge passt für jeden Ausstiegszweig zum bestätigten Bestand?",
    "answers": [
      {
        "label": "Fünf Aktien.",
        "explanation": "Die gewünschte Kaufmenge wurde nur teilweise erreicht."
      },
      {
        "label": "Zwei Aktien.",
        "explanation": "Zwei ist der stornierte Kaufrest, nicht der Bestand."
      },
      {
        "label": "Drei Aktien.",
        "explanation": "Richtig: Passe Ausstiegsaufträge an den bestätigten Bestand und den geklärten Kaufrest an."
      }
    ],
    "correct": 2,
    "rule": "Passe Ausstiegsaufträge an den bestätigten Bestand und den geklärten Kaufrest an."
  },
  {
    "title": "Die Verknüpfungsregel der Ausstiege ausdrücklich lesen",
    "summary": "Die gemeinsame Regel darf nicht aus einem Gruppennamen geraten werden.",
    "paragraphs": [
      "Für unsere Ausstiegsgruppe gilt eine eigene Regel: Wird der Stop aktiviert, entfernt das System zuerst den gesamten noch offenen Zielzweig und erzeugt dann genau eine Market-Verkaufsorder für den Bestand. Diese Schritte sind im Modell gemeinsam koordiniert.",
      "Für den getrennten Zielpfad gilt: Jeder Ziel-Teilverkauf vermindert sofort die überwachte Stopmenge um dieselbe Stückzahl. Bei vollständig verkauftem Bestand endet die Stopbedingung. Diese Regeln beschreiben nur unser Übungssystem.",
      "Im Hauptpfad gab es vor der Stopaktivierung keinen Zielverkauf. Reale OCO- und Bracket-Funktionen können andere Regeln und technische Grenzen haben. Der Name einer Gruppe allein beweist keine sichere Reihenfolge oder Schutzmenge."
    ],
    "columns": [
      {
        "title": "Stopzweig im Modell",
        "tone": "neutral",
        "points": [
          "Zielrest zuerst entfernen.",
          "Dann eine Market-Order für den Bestand."
        ]
      },
      {
        "title": "Zielzweig im Modell",
        "tone": "positive",
        "points": [
          "Teilverkauf reduziert Stopmenge sofort.",
          "Bei Bestand null endet die Bedingung."
        ]
      }
    ],
    "prompt": "Was macht das Übungssystem bei Stopaktivierung zuerst?",
    "answers": [
      {
        "label": "Es entfernt den noch offenen Zielzweig.",
        "explanation": "Richtig: Prüfe Auslöser, Mengenanpassung und Reihenfolge einer Verknüpfung als konkrete Regeln."
      },
      {
        "label": "Es lässt beide Zweige unverändert gegeneinander handeln.",
        "explanation": "Das widerspricht der ausdrücklich koordinierten Regel."
      },
      {
        "label": "Es kauft automatisch weitere fünf.",
        "explanation": "Die Gruppe enthält nur die beschriebenen Ausstiege."
      }
    ],
    "correct": 0,
    "rule": "Prüfe Auslöser, Mengenanpassung und Reihenfolge einer Verknüpfung als konkrete Regeln."
  },
  {
    "title": "Die Stopauslösung von den Verkaufspreisen trennen",
    "summary": "Ein Auslöser ist kein Festpreis für den Ausstieg.",
    "paragraphs": [
      "Die Stopbedingung beobachtet im Modell den besten Geldkurs. Sobald dieser bei 29,50 oder darunter liegt, wird sie erfüllt. Im Hauptpfad trifft eine verlässliche Beobachtung von genau 29,50 ein.",
      "Das System entfernt nach seiner Gruppenregel den Zielzweig und aktiviert eine Market-Verkaufsorder über drei. Es bestätigt damit noch keine drei Verkäufe zu 29,50. Beim späteren Verarbeiten können die verfügbaren Kaufangebote anders sein.",
      "Die Quelle Geldkurs und die Vergleichsregel wurden vorher festgelegt. Ein letzter Handelspreis oder eine andere Datenquelle wäre nicht automatisch gleichwertig. Jana prüft Aktivierung, Zielstorno und tatsächliche Ausführung separat."
    ],
    "columns": [
      {
        "title": "Bedingung",
        "tone": "neutral",
        "points": [
          "Geldkurs höchstens 29,50.",
          "Beobachtung 29,50 erfüllt sie."
        ]
      },
      {
        "title": "Folge",
        "tone": "positive",
        "points": [
          "Ziel entfernt; Market-Verkauf drei aktiviert.",
          "Verkaufspreise noch nicht bestätigt."
        ]
      }
    ],
    "prompt": "Was belegt die erfüllte Stopbedingung allein?",
    "answers": [
      {
        "label": "Eine neue Limitorder bei 30,60.",
        "explanation": "30,60 gehört zum entfernten Zielzweig."
      },
      {
        "label": "Die Aktivierung des beschriebenen Market-Verkaufs.",
        "explanation": "Richtig: Trenne die festgelegte Auslösequelle, die Aktivierung und die späteren Verkaufspreise."
      },
      {
        "label": "Drei Verkäufe genau zu 29,50.",
        "explanation": "Die Aktivierung ist keine Preisbestätigung."
      }
    ],
    "correct": 1,
    "rule": "Trenne die festgelegte Auslösequelle, die Aktivierung und die späteren Verkaufspreise."
  },
  {
    "title": "Die wirklichen Stop-Verkäufe vollständig zusammenrechnen",
    "summary": "Auch beim Ausstieg zählt jede Preisstufe mit ihrer Menge.",
    "paragraphs": [
      "Beim Verarbeiten der ausgelösten Verkaufsorder sind im Hauptpfad ein Kaufangebot zu 29,45 und zwei zu 29,40 verfügbar. Genau diese drei Verkäufe werden bestätigt. Die beiden Preisstufen liefern 29,45 plus 58,80, also 88,25 Euro.",
      "Die Verkaufsgebühr beträgt einmal 0,30 plus drei mal 0,02, also 0,36. Auf das Konto kommen deshalb 87,89 Euro. Alle drei Aktien sind verkauft; der Bestand und der offene Verkaufsrest sind null.",
      "Gegen drei Verkäufe zur Schwelle 29,50 fehlen im Handelswert 88,50 minus 88,25, also 0,25 Euro. Diese Preisabweichung steckt bereits im tatsächlichen Verkaufswert. Sie wird später nicht nochmals als Gebühr abgezogen."
    ],
    "columns": [
      {
        "title": "Bestätigte Verkäufe",
        "tone": "neutral",
        "points": [
          "Einer zu 29,45, zwei zu 29,40.",
          "Handelswert 88,25."
        ]
      },
      {
        "title": "Kontobuchung",
        "tone": "positive",
        "points": [
          "Gebühr 0,36.",
          "Gutschrift 87,89."
        ]
      }
    ],
    "prompt": "Welche Gutschrift folgt aus diesen Verkäufen?",
    "answers": [
      {
        "label": "88,25 Euro.",
        "explanation": "Die Verkaufsgebühr 0,36 fehlt."
      },
      {
        "label": "88,14 Euro.",
        "explanation": "Das würde von einem nicht bestätigten Schwellenwert ausgehen."
      },
      {
        "label": "87,89 Euro.",
        "explanation": "Richtig: Rechne die tatsächlichen Verkaufspreise mengenrichtig und ziehe die Gebühren genau einmal ab."
      }
    ],
    "correct": 2,
    "rule": "Rechne die tatsächlichen Verkaufspreise mengenrichtig und ziehe die Gebühren genau einmal ab."
  },
  {
    "title": "Den Hauptverlust aus echten Geldbuchungen bestimmen",
    "summary": "Ein Ergebnis ist nach dem vollständigen Ausstieg prüfbar.",
    "paragraphs": [
      "Janas Kaufbelastung war 90,46 Euro. Die spätere Verkaufsgutschrift ist 87,89. Die Differenz beträgt 2,57 Euro Verlust. Vor Gebühren waren es 90,10 minus 88,25, also 1,85 Verlust; beide Gebühren zusammen ergeben 0,72.",
      "1.000 minus 90,46 plus 87,89 ergibt 997,43 Euro. Es gibt keinen Aktienbestand, keinen Kaufrest und keine Ausstiegsreste mehr. Deshalb ist dieser eigene Handelsfall vollständig abgeschlossen.",
      "Jana zieht nicht zusätzlich den früheren Spread, die Stopabweichung oder den Planpuffer ab. Die tatsächlichen Preise enthalten die Preiswirkungen bereits. Der Puffer war eine Planannahme und keine echte Kontobuchung."
    ],
    "columns": [
      {
        "title": "Ergebnis",
        "tone": "neutral",
        "points": [
          "Vor Gebühren 1,85 Verlust.",
          "Mit Gebühren 0,72: Verlust 2,57."
        ]
      },
      {
        "title": "Endzustand",
        "tone": "positive",
        "points": [
          "Geld 997,43.",
          "Bestand und alle Orderreste null."
        ]
      }
    ],
    "prompt": "Wie hoch ist der Verlust nach den Modellgebühren?",
    "answers": [
      {
        "label": "2,57 Euro.",
        "explanation": "Richtig: Bestimme den Abschluss aus echten Belastungen und Gutschriften ohne zusätzliche doppelte Preisabzüge."
      },
      {
        "label": "1,85 Euro.",
        "explanation": "Die beiden tatsächlichen Gebühren fehlen."
      },
      {
        "label": "2,82 Euro.",
        "explanation": "Die Preisabweichung 0,25 wäre doppelt abgezogen."
      }
    ],
    "correct": 0,
    "rule": "Bestimme den Abschluss aus echten Belastungen und Gutschriften ohne zusätzliche doppelte Preisabzüge."
  },
  {
    "title": "Einen Zielpfad als eigene Alternative rechnen",
    "summary": "Ein hypothetischer Gewinn gehört nicht in den Hauptverlust.",
    "paragraphs": [
      "Jetzt betrachten wir eine getrennte Fortsetzung desselben Dreierkaufs. Statt der Stopauslösung werden zwei Zielverkäufe zu 30,70 und einer zu 30,60 bestätigt. Sie erfüllen das Verkaufslimit 30,60.",
      "Der Verkaufswert beträgt 61,40 plus 30,60, also 92,00 Euro. Nach der Modellgebühr 0,36 beträgt die Gutschrift 91,64. Gegen die Kaufbelastung 90,46 ergibt das 1,18 Euro Gewinn; der Geldstand wäre 1.001,18.",
      "Die eigene Gruppenregel beendet mit dem letzten Zielverkauf die Stopbedingung. Dieser Zielpfad wurde im Hauptfall nicht gehandelt. Sein möglicher Gewinn darf nicht mit dem tatsächlich berechneten Hauptverlust zusammengemischt werden."
    ],
    "columns": [
      {
        "title": "Getrennte Zielalternative",
        "tone": "neutral",
        "points": [
          "Zwei zu 30,70, einer zu 30,60.",
          "Verkaufswert 92,00."
        ]
      },
      {
        "title": "Ergebnis nur dieser Alternative",
        "tone": "positive",
        "points": [
          "Gutschrift 91,64.",
          "Gewinn 1,18; Stopbedingung beendet."
        ]
      }
    ],
    "prompt": "Welcher Gewinn gehört nur zur beschriebenen Zielalternative?",
    "answers": [
      {
        "label": "2,57 Euro.",
        "explanation": "2,57 ist der Verlust des anderen Hauptpfads."
      },
      {
        "label": "1,18 Euro.",
        "explanation": "Richtig: Rechne jeden alternativen Verlauf für sich und mische ihn nicht in tatsächliche Buchungen."
      },
      {
        "label": "3,75 Euro.",
        "explanation": "Ein Gewinn und ein Verlust aus alternativen Pfaden werden nicht zusammengerechnet."
      }
    ],
    "correct": 1,
    "rule": "Rechne jeden alternativen Verlauf für sich und mische ihn nicht in tatsächliche Buchungen."
  },
  {
    "title": "Teilweise Zielverkäufe verändern die verbleibende Schutzmenge",
    "summary": "Ein bestätigter Teilverkauf ist noch kein vollständiger Abschluss.",
    "paragraphs": [
      "In einer weiteren getrennten Zielvariante verkauft die Zielorder zunächst zwei der drei Aktien. Eine bleibt im Bestand. Nach unserer sofortigen Mengenregel sinkt die Stopmenge zugleich von drei auf eins.",
      "Die Zielorder hat ebenfalls noch einen offenen Rest von eins. Diese zwei Ausstiegszweige gehören weiter zur Gruppe für die eine verbliebene Aktie. Sie sind nicht zwei unabhängig zusätzlich zu verkaufende Aktien.",
      "Ein vollständiger Nettogewinn für den ganzen Dreierfall steht noch nicht fest. Der spätere Verkauf der letzten Aktie fehlt. Auch eine erfolgreiche erste Teilmenge braucht einen bestätigten Restzustand."
    ],
    "columns": [
      {
        "title": "Nach zwei Zielverkäufen",
        "tone": "neutral",
        "points": [
          "Bestand eins.",
          "Zielrest eins."
        ]
      },
      {
        "title": "Gruppenregel",
        "tone": "positive",
        "points": [
          "Stopmenge sofort eins.",
          "Kein vollständiger Abschluss."
        ]
      }
    ],
    "prompt": "Welche Stopmenge bleibt nach zwei bestätigten Zielverkäufen?",
    "answers": [
      {
        "label": "Drei Aktien.",
        "explanation": "Die sofortige Modellregel reduziert die Menge um die zwei Verkäufe."
      },
      {
        "label": "Null Aktien.",
        "explanation": "Eine Aktie ist noch im Bestand."
      },
      {
        "label": "Eine Aktie.",
        "explanation": "Richtig: Passe den Schutzrest nach jedem bestätigten Teilverkauf an die bekannte Gruppenregel an."
      }
    ],
    "correct": 2,
    "rule": "Passe den Schutzrest nach jedem bestätigten Teilverkauf an die bekannte Gruppenregel an."
  },
  {
    "title": "Eine Preislücke als Stressfall gegenprüfen",
    "summary": "Ein Planpuffer ist kein Schutz vor beliebig großen Abweichungen.",
    "paragraphs": [
      "Dies ist ein eigener Stressfall mit vollständigem Fünferkauf zu je 30,10. Kaufwert 150,50 plus Gebühr 0,40 ergibt 150,90 Belastung. Der Kurs springt anschließend unter die Stopmarke 29,50.",
      "Die ausgelöste Market-Order verkauft in diesem Stressfall alle fünf erst zu 28,50. Der Verkaufswert ist 142,50; nach Gebühr 0,40 kommen 142,10 zurück. 150,90 minus 142,10 ergibt 8,80 Euro Verlust.",
      "Das übersteigt sowohl die geplanten 4,30 als auch das Planungsbudget 5,00. Der angenommene Puffer 0,10 je Aktie war hier zu klein. Ein Stressfall prüft eine ungünstige Möglichkeit, ohne ihre Häufigkeit oder einen schlimmstmöglichen Preis zu behaupten."
    ],
    "columns": [
      {
        "title": "Eigener Stresskauf",
        "tone": "neutral",
        "points": [
          "Fünf zu 30,10, Belastung 150,90.",
          "Andere Fortsetzung als der Dreierhauptpfad."
        ]
      },
      {
        "title": "Preislücke",
        "tone": "positive",
        "points": [
          "Fünf Verkäufe zu 28,50, Gutschrift 142,10.",
          "Verlust 8,80 über Budget 5,00."
        ]
      }
    ],
    "prompt": "Welcher Verlust entsteht in diesem getrennten Stressfall?",
    "answers": [
      {
        "label": "8,80 Euro.",
        "explanation": "Richtig: Prüfe ungünstige Abweichungen; eine geplante Verlustzahl ist keine garantierte Marktgrenze."
      },
      {
        "label": "Höchstens 5,00 Euro.",
        "explanation": "Der Markt ist nicht an das Planungsbudget gebunden."
      },
      {
        "label": "4,30 Euro.",
        "explanation": "Das ist nur die frühere Planung mit einem kleinen Puffer."
      }
    ],
    "correct": 0,
    "rule": "Prüfe ungünstige Abweichungen; eine geplante Verlustzahl ist keine garantierte Marktgrenze."
  },
  {
    "title": "Ein Stop-Limit kann den Preis begrenzen und den Ausstieg offen lassen",
    "summary": "Eine andere Orderart tauscht einen Nachteil gegen einen anderen.",
    "paragraphs": [
      "In einer getrennten Alternative zur Stop-Market-Regel verwendet Jana für drei Aktien einen Stop bei 29,50 und ein Verkaufslimit 29,40. Nach Auslösung darf die Folgeorder nur zu 29,40 oder höher verkaufen.",
      "Im neuen Übungsbuch stehen nur Kaufangebote zu 28,50. Die ausgelöste Limitorder verkauft dort keine Aktie. Der Bestand bleibt drei, und die Verkaufsorder über drei ist weiterhin offen.",
      "Der Preisfilter verhindert in diesem Bild Verkäufe zu 28,50. Er garantiert aber keinen Ausstieg. Jana kann diese Alternative nicht zugleich als sichere Preisgrenze und sichere sofortige Schließung darstellen. Der weitere Verlust des offenen Bestands ist noch nicht endgültig realisiert."
    ],
    "columns": [
      {
        "title": "Folgelimit",
        "tone": "neutral",
        "points": [
          "Verkaufen mindestens zu 29,40.",
          "Drei Aktien beauftragt."
        ]
      },
      {
        "title": "Vorhandene Kaufangebote",
        "tone": "positive",
        "points": [
          "Nur 28,50.",
          "Null verkauft, drei weiter offen."
        ]
      }
    ],
    "prompt": "Wie viele verkauft diese Limit-Folgeorder im genannten Bild?",
    "answers": [
      {
        "label": "Drei zu 28,50.",
        "explanation": "Das liegt unter dem Verkaufslimit."
      },
      {
        "label": "Null Aktien.",
        "explanation": "Richtig: Ein Limit kann ungünstige Preise ausschließen und dabei den gesamten Ausstieg unausgeführt lassen."
      },
      {
        "label": "Drei zu 29,40.",
        "explanation": "Dort ist kein passendes Kaufangebot genannt."
      }
    ],
    "correct": 1,
    "rule": "Ein Limit kann ungünstige Preise ausschließen und dabei den gesamten Ausstieg unausgeführt lassen."
  },
  {
    "title": "Eine Frist löscht nicht den verbliebenen Bestand",
    "summary": "Orderende und Positionsende sind verschiedene Ereignisse.",
    "paragraphs": [
      "In einem eigenen Zeitfall hält Jana nach dem Teilkauf drei Aktien. Eine offene Zielorder endet nach der ausdrücklich festgelegten Übungsfrist um 17 Uhr. Das System bestätigt das Ende ihres Restes.",
      "Es wurde keine Aktie verkauft. Der Zielauftrag ist beendet, der Bestand bleibt drei. Die separate Stopregel braucht ihren eigenen bestätigten Status; ihr Ende folgt nicht automatisch aus der Ziel-Frist.",
      "Ein Ausführungsplan muss deshalb erklären, was nach einem Orderende mit Bestand und anderen Zweigen geschehen soll. Eine Zeitangabe allein ist kein Auftrag, die Position dann zu jedem Preis zu schließen."
    ],
    "columns": [
      {
        "title": "Um 17 Uhr im Zeitfall",
        "tone": "neutral",
        "points": [
          "Zielrest bestätigt beendet.",
          "Keine Verkäufe bestätigt."
        ]
      },
      {
        "title": "Noch zu prüfen",
        "tone": "positive",
        "points": [
          "Drei Aktien im Bestand.",
          "Separater Status der Stopregel."
        ]
      }
    ],
    "prompt": "Welcher Bestand bleibt nach diesem Ende der Zielorder?",
    "answers": [
      {
        "label": "Null Aktien.",
        "explanation": "Das Orderende ist keine Ausführung."
      },
      {
        "label": "Fünf Aktien.",
        "explanation": "Im Zeitfall wurden nur drei gekauft."
      },
      {
        "label": "Drei Aktien.",
        "explanation": "Richtig: Prüfe nach einer Frist sowohl den Bestand als auch die anderen Auftragszweige."
      }
    ],
    "correct": 2,
    "rule": "Prüfe nach einer Frist sowohl den Bestand als auch die anderen Auftragszweige."
  },
  {
    "title": "Eine unbeantwortete Änderung nicht als wirksam eintragen",
    "summary": "Der Plan braucht auch einen Zweig für ungeklärte Zustände.",
    "paragraphs": [
      "In einer Technikvariante will Jana das Ziel ändern. Die App sendet den Wunsch, verliert aber die Verbindung vor einer Bestätigung. Damit kennt sie noch nicht den wirksamen neuen Zustand.",
      "Weder die alte Anzeige noch die neue Eingabe beweist allein, was der Anbieter gerade führt. Jana gleicht die betroffene Kennung über den vorher geprüften Weg ab. Sie erzeugt nicht einfach eine zusätzliche Ersatzorder.",
      "Der Plan hält fest, welche Bestätigung fehlt und was zuletzt sicher bekannt war. Sollte zwischenzeitlich ein Teilverkauf entstanden sein, muss seine Menge beim Abgleich berücksichtigt werden. Eine unklare Änderung darf nicht still als erfolgreicher Schritt im Protokoll erscheinen."
    ],
    "columns": [
      {
        "title": "Änderungswunsch",
        "tone": "neutral",
        "points": [
          "Gesendet, Antwort fehlt.",
          "Wirksamer Stand ungeklärt."
        ]
      },
      {
        "title": "Nächste Prüfung",
        "tone": "positive",
        "points": [
          "Orderkennung und Bestätigungen abgleichen.",
          "Zwischenzeitliche Verkäufe mitprüfen."
        ]
      }
    ],
    "prompt": "Wie wird die unbeantwortete Änderung zunächst geführt?",
    "answers": [
      {
        "label": "Als ungeklärt bis zum bestätigten Abgleich.",
        "explanation": "Richtig: Kennzeichne einen ungeklärten Zustand und kläre ihn vor einer neuen davon abhängigen Handlung."
      },
      {
        "label": "Als sicher erfolgreich.",
        "explanation": "Die Eingabe ist keine Bestätigung."
      },
      {
        "label": "Als sicher gelöscht.",
        "explanation": "Die verlorene Antwort beweist keine Löschung."
      }
    ],
    "correct": 0,
    "rule": "Kennzeichne einen ungeklärten Zustand und kläre ihn vor einer neuen davon abhängigen Handlung."
  },
  {
    "title": "Wiederholte Berichte und Gesamtstände vor dem Abschluss abgleichen",
    "summary": "Eine saubere Bilanz darf Nachrichten nicht mit Geschäften verwechseln.",
    "paragraphs": [
      "Für den Hauptkauf heißen die eindeutigen Geschäfte B1: zwei zu 30,00 und B2: einer zu 30,10. Nach einer erneuten Verbindung kommt B1 noch einmal identisch. Im Modell gibt es keine Handelskorrekturen.",
      "B1 und B2 ergeben drei Käufe und 90,10 Handelswert. Die wiederholte Nachricht erzeugt keinen weiteren Zweierkauf. Ein Gesamtbericht „insgesamt drei“ enthält diese beiden Geschäfte bereits und wird ebenfalls nicht hinzuaddiert.",
      "Jana gleicht das mit K10, dem stornierten Rest und der Geldbelastung 90,46 ab. Wären die Kennungen oder Korrekturregeln unklar, müsste sie diese erst klären. Ähnlich aussehende Preise allein beweisen keine doppelte Meldung."
    ],
    "columns": [
      {
        "title": "Empfang",
        "tone": "neutral",
        "points": [
          "B1 zwei, B2 einer, B1 erneut.",
          "Zusätzlich Gesamtstand drei."
        ]
      },
      {
        "title": "Eindeutige Käufe",
        "tone": "positive",
        "points": [
          "B1 einmal, B2 einmal.",
          "Drei Aktien, Handelswert 90,10."
        ]
      }
    ],
    "prompt": "Wie viele Käufe gehören in die Bilanz dieses Berichtsfalls?",
    "answers": [
      {
        "label": "Acht Aktien.",
        "explanation": "Wiederholung und Gesamtstand sind keine weiteren Geschäfte."
      },
      {
        "label": "Drei Aktien.",
        "explanation": "Richtig: Zähle eindeutige Geschäfte einmal und verwende Gesamtstände als Kontrolle, nicht als Zusatzmenge."
      },
      {
        "label": "Fünf Aktien.",
        "explanation": "Das würde die Wiederholung von B1 erneut zählen."
      }
    ],
    "correct": 1,
    "rule": "Zähle eindeutige Geschäfte einmal und verwende Gesamtstände als Kontrolle, nicht als Zusatzmenge."
  },
  {
    "title": "Ablaufqualität und Ergebnisqualität getrennt beurteilen",
    "summary": "Ein Gewinn beweist keinen guten Ablauf; ein Verlust beweist keinen schlechten.",
    "paragraphs": [
      "Im Hauptpfad hielt Jana das Kauflimit ein, stornierte den Rest mit Bestätigung und stellte passende Ausstiege für drei ein. Sie berechnete den Verlust aus echten Buchungen. Das lässt sich als Ablauf prüfen, obwohl der Fall 2,57 Euro verlor.",
      "Ein anderer Übungsfall kann durch eine versehentlich doppelte Kauforder zufällig gewinnen. Dieser Gewinn würde den Mengenfehler nicht beseitigen. Prozessqualität meint hier, wie gut die Handlungen und Kontrollen zum vorher beschriebenen Plan passen.",
      "Ergebnisqualität meint hier die Bewertung des tatsächlich erzielten Ergebnisses mit seinen Kosten und Risiken. Ein einzelner Gewinn oder Verlust reicht nicht als Beweis einer langfristig guten Handelsidee. Auch der Plan selbst muss auf sinnvolle Grenzen geprüft werden."
    ],
    "columns": [
      {
        "title": "Prozessprüfung",
        "tone": "neutral",
        "points": [
          "Eingaben, Bestätigungen und Mengen prüfen.",
          "Fehler bleiben auch bei Gewinn Fehler."
        ]
      },
      {
        "title": "Ergebnisprüfung",
        "tone": "positive",
        "points": [
          "Tatsächliche Kosten und Resultat prüfen.",
          "Ein Einzelfall beweist keine dauerhafte Stärke."
        ]
      }
    ],
    "prompt": "Was folgt aus einem Gewinn nach einer versehentlich doppelten Order?",
    "answers": [
      {
        "label": "Dass die doppelte Order immer richtig war.",
        "explanation": "Ein zufälliges Ergebnis bestätigt keine Eingabeabsicht."
      },
      {
        "label": "Dass die Gebühren ignoriert werden dürfen.",
        "explanation": "Die Ergebnisrechnung braucht weiterhin alle tatsächlichen Kosten."
      },
      {
        "label": "Der Gewinn beseitigt den Mengenfehler nicht.",
        "explanation": "Richtig: Beurteile Plan, Handlungen und Ergebnis jeweils anhand ihrer eigenen Belege."
      }
    ],
    "correct": 2,
    "rule": "Beurteile Plan, Handlungen und Ergebnis jeweils anhand ihrer eigenen Belege."
  },
  {
    "title": "Eine Planabweichung mit Ursache und Folge festhalten",
    "summary": "Eine Abweichung braucht eine Erklärung, keine nachträgliche Erfolgsstory.",
    "paragraphs": [
      "Janas Plan erlaubte Teilkäufe, und ihr bestätigter Dreierkauf passt dazu. Dass nur drei statt fünf gekauft wurden, ist deshalb kein Eingabefehler. Es ist ein Ergebnis innerhalb der vorher genannten Möglichkeiten.",
      "Eine zusätzliche neue Kauforder ohne vorgesehenen Grund wäre dagegen eine Planabweichung. Das Protokoll müsste nennen, was geändert wurde, warum, welche Bestätigung vorliegt und welche neue Menge oder Geldpflicht entstand.",
      "Die Prüfung unterscheidet einen erwarteten Alternativzustand von einer tatsächlichen Änderung des Plans. Ein später günstiger Preis darf nicht dazu dienen, eine frühere unbegründete Handlung nachträglich als geplant auszugeben."
    ],
    "columns": [
      {
        "title": "Erlaubtes Ergebnis",
        "tone": "neutral",
        "points": [
          "Teilkäufe waren vorgesehen.",
          "Drei von fünf passen zum Plan."
        ]
      },
      {
        "title": "Abweichung",
        "tone": "positive",
        "points": [
          "Neue Handlung außerhalb der beschriebenen Regel.",
          "Grund, Bestätigung und Folgen dokumentieren."
        ]
      }
    ],
    "prompt": "Ist der Dreierkauf bei ausdrücklich erlaubten Teilkäufen allein ein Planfehler?",
    "answers": [
      {
        "label": "Nein, er ist ein vorgesehener möglicher Zustand.",
        "explanation": "Richtig: Unterscheide vorgesehene Möglichkeiten von echten Planänderungen und halte deren Folgen fest."
      },
      {
        "label": "Ja, jede kleinere Menge ist falsch.",
        "explanation": "Der Auftrag erlaubte ausdrücklich weniger als fünf."
      },
      {
        "label": "Nein, deshalb ist jeder zusätzliche Kauf erlaubt.",
        "explanation": "Weitere Handlungen brauchen weiterhin eine passende Regel oder bewusste Änderung."
      }
    ],
    "correct": 0,
    "rule": "Unterscheide vorgesehene Möglichkeiten von echten Planänderungen und halte deren Folgen fest."
  },
  {
    "title": "Den Plan nicht ungeprüft auf andere Produkte übertragen",
    "summary": "Stückwerte und Vertragsregeln können eine neue Rechnung verlangen.",
    "paragraphs": [
      "Unser Fall rechnet mit Euro je Aktie und einer bezahlten Stückmenge. Jana kann daraus nicht ableiten, dass fünf Futures-Kontrakte oder fünf andere Produkte denselben Geldbedarf und dieselben Preisrisiken hätten.",
      "Bei einem Vertrag kann schon eine kleine Preisbewegung einen anderen Geldwert haben. Vor einer Übertragung braucht sie dessen Einheiten, Geldwert je Preisbewegung, Kosten, Kontoregeln und Bedingungen. Diese Angaben sind hier nicht gegeben.",
      "Die Prüfmethode lässt sich mitnehmen: Eingaben klären, Annahmen nennen, Mengen und Geld rechnen, Zustände bestätigen. Die konkreten Olin-Zahlen und der Aktien-Tarif lassen sich ohne neue Produktangaben nicht übernehmen."
    ],
    "columns": [
      {
        "title": "Mitnehmen",
        "tone": "neutral",
        "points": [
          "Die Reihenfolge der Prüfungen.",
          "Bestätigungen und klare Rechnungen."
        ]
      },
      {
        "title": "Neu bestimmen",
        "tone": "positive",
        "points": [
          "Produkteeinheiten und Geldwerte.",
          "Kosten und Kontobedingungen."
        ]
      }
    ],
    "prompt": "Was kann ohne neue Produktdaten sinnvoll übertragen werden?",
    "answers": [
      {
        "label": "Das Aktien-Limit als garantierter Gewinn für jedes Produkt.",
        "explanation": "Ein Preislimit garantiert ohnehin keinen Gewinn."
      },
      {
        "label": "Die Prüfmethode, aber nicht die konkrete Fünfermenge.",
        "explanation": "Richtig: Übertrage die Prüfmethode und rechne Produkteinheiten, Kosten und Kontoregeln neu."
      },
      {
        "label": "Fünf Kontrakte mit sicher demselben Risiko.",
        "explanation": "Die Vertragswerte wurden nicht angegeben."
      }
    ],
    "correct": 1,
    "rule": "Übertrage die Prüfmethode und rechne Produkteinheiten, Kosten und Kontoregeln neu."
  },
  {
    "title": "Den vollständigen Hauptfall selbst abschließen",
    "summary": "Ein Abschluss nennt Geld, Bestand und alle Orderreste.",
    "paragraphs": [
      "Prüfe den Hauptpfad noch einmal: Start 1.000 Euro und null Aktien. K10 kauft zwei zu 30,00 und einen zu 30,10. Belastung 90,46. Zwei Kaufreste werden ohne weitere Käufe bestätigt storniert; danach sind Ausstiege für drei aktiv.",
      "Der Geldkurs erfüllt die Stopbedingung bei 29,50. Die eigene Gruppenregel entfernt den Zielzweig. Ein Verkauf zu 29,45 und zwei zu 29,40 bringen nach Gebühr 87,89 zurück. Bestand, Kaufrest, Zielrest und Verkaufsrest sind danach null; die Bedingung ist beendet.",
      "Der Geldstand 997,43 bestätigt 2,57 Verlust. Zielgewinn und Stressverlust gehören zu anderen Pfaden. Mit diesem Abschluss sind alle zehn Kapitel des Kurses bearbeitbar. Das Gelernte hilft beim Prüfen von Orders; es ist keine Zusage für sichere Gewinne oder eine bereits bewiesene Handelsstrategie."
    ],
    "columns": [
      {
        "title": "Hauptpfad",
        "tone": "neutral",
        "points": [
          "90,46 Kaufbelastung.",
          "87,89 Verkaufsgutschrift."
        ]
      },
      {
        "title": "Vollständiger Abschluss",
        "tone": "positive",
        "points": [
          "Geld 997,43; Verlust 2,57.",
          "Bestand und sämtliche Orderreste null."
        ]
      }
    ],
    "prompt": "Welcher Endbericht passt ausschließlich zum Hauptpfad?",
    "answers": [
      {
        "label": "1.001,18 Euro zusätzlich zum Hauptverlust.",
        "explanation": "Das ist der getrennte Zielpfad, keine Zusatzbuchung."
      },
      {
        "label": "Drei Aktien mit offenem Zielrest.",
        "explanation": "Alle drei Hauptverkäufe und das Ende des Zielzweigs sind bestätigt."
      },
      {
        "label": "997,43 Euro, Bestand null, alle Orderreste null.",
        "explanation": "Richtig: Schließe den Hauptpfad mit tatsächlichen Geldbuchungen, Bestand und allen bestätigten Restzuständen ab."
      }
    ],
    "correct": 2,
    "rule": "Schließe den Hauptpfad mit tatsächlichen Geldbuchungen, Bestand und allen bestätigten Restzuständen ab."
  }
];
export const ordersChapterTenLessons: Lesson[] = drafts.map((draft, index) => {
  const number = String(index + 1).padStart(2, '0');
  const key = `orders-and-execution.chapter-10.lesson-${number}`;
  return {
    id: key,
    title: draft.title,
    summary: draft.summary,
    sourceUnit: 'Kapitel 10 · Einen Ausführungsplan selbst prüfen',
    sourceAnchors: [draft.title],
    durationMinutes: 6,
    xp: 35,
    status: 'published',
    steps: [
      {
        id: `${key}.explain`, type: 'explanation',
        eyebrow: 'Orders verstehen · Kapitel 10', title: draft.title,
        paragraphs: draft.paragraphs, callout: draft.rule,
      },
      {
        id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick',
        columns: draft.columns.map((column) => ({ ...column, tone: column.tone as 'neutral' | 'positive' })),
      },
      {
        id: `${key}.question`, type: 'question', title: 'Kurz prüfen',
        prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`,
        options: draft.answers.map((answer, optionIndex) => ({ id: `choice-${optionIndex}`, ...answer })),
      },
      {
        id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit',
        points: [draft.rule, draft.summary],
      },
    ],
  };
});
