import type { Lesson } from '../../types';

// Eigene Auktionsmodelle mit ausdrücklich vereinfachten Preis- und Zuteilungsregeln.
const drafts = [
  {
    "title": "Auktion: Handelswünsche nach Regeln zusammenbringen",
    "summary": "Eine Auktion ist mehr als ein steigendes Gebot.",
    "paragraphs": [
      "Bei einer Auktion denkst du vielleicht an einen Gegenstand und immer höhere Gebote. Ein Finanzmarkt kann anders funktionieren. Viele Käufer und Verkäufer nennen gleichzeitig Preise und Mengen. Ein Handelssystem verbindet passende Wünsche nach seinen Regeln.",
      "Wir betrachten gleiche Einheiten desselben Produkts. Käufer nennen, was sie höchstens zahlen wollen. Verkäufer nennen, was sie mindestens erhalten wollen. Wenn wir nichts anderes sagen, gibt es keine Gebühren, Währungsunterschiede oder Sonderbedingungen. So können wir den Ablauf einfacher erklären.",
      "Eine Auktion verspricht keinen einzig richtigen Wert und keinen Handel für jeden. Sie bringt passende Bedingungen zusammen. Erst wenn Aufträge tatsächlich verbunden werden, kommt ein Geschäft zustande. Unsere Beispiele erklären die Grundidee. Sie beschreiben nicht jede echte Börsenregel."
    ],
    "columns": [
      {
        "title": "Handelswünsche",
        "tone": "neutral",
        "points": [
          "Kaufseite: Preis und gewünschte Menge.",
          "Verkaufsseite: Preis und angebotene Menge."
        ]
      },
      {
        "title": "Regelgeleiteter Austausch",
        "tone": "positive",
        "points": [
          "Passende Bedingungen zusammenführen.",
          "Nicht jeder Wunsch erhält automatisch eine Ausführung."
        ]
      }
    ],
    "prompt": "Was leistet die Auktion in unserem Lernmodell?",
    "answers": [
      {
        "label": "Sie verbindet passende Handelswünsche nach Regeln.",
        "explanation": "Richtig: Das ist keine Garantie für einen objektiv richtigen Preis oder jede gewünschte Ausführung."
      },
      {
        "label": "Sie garantiert allen Beteiligten Gewinn.",
        "explanation": "Ein Handelsmechanismus ist keine Gewinnzusage."
      },
      {
        "label": "Sie entfernt die verkaufende Seite aus dem Handel.",
        "explanation": "Ein Austausch benötigt beide Seiten."
      }
    ],
    "correct": 0,
    "rule": "Auktion beschreibt einen Handelsprozess, keine Gewinn- oder Wertgarantie."
  },
  {
    "title": "Zwei Seiten: höchste Kaufbereitschaft und niedrigste Verkaufsforderung",
    "summary": "Geld und Brief zeigen unterschiedliche Bedingungen.",
    "paragraphs": [
      "Ein Kaufangebot sagt, zu welchem Preis jemand kaufen will. Ein Verkaufsangebot sagt, zu welchem Preis jemand verkaufen will. Das höchste Kaufangebot heißt bester Bid. Das niedrigste Verkaufsangebot heißt bester Ask. Diese beiden Preise zeigen die besten Bedingungen auf den zwei Seiten.",
      "Unsere Käufer bieten 98 und 99 Euro. Verkäufer verlangen 101 und 102 Euro. Der beste Bid ist 99, der beste Ask 101. Die Bedingungen passen noch nicht: Niemand bietet hier so viel, wie der günstigste Verkäufer verlangt. Es entsteht nicht automatisch ein Handel bei 100 Euro.",
      "100 ist zwar der Mittelwert von 99 und 101. Ein berechneter Mittelwert ist aber noch kein nutzbares Angebot. Für einen Handel braucht es passende Bedingungen auf beiden Seiten. Außerdem müssen die Regeln des Handelsplatzes erfüllt sein."
    ],
    "columns": [
      {
        "title": "Beste Angebote",
        "tone": "neutral",
        "points": [
          "Bid: 99 Euro.",
          "Ask: 101 Euro."
        ]
      },
      {
        "title": "Dazwischen",
        "tone": "positive",
        "points": [
          "Mittelwert: 100 Euro.",
          "Nicht automatisch ein angebotenes oder gehandeltes Niveau."
        ]
      }
    ],
    "prompt": "Entsteht automatisch ein Trade bei 100 Euro?",
    "answers": [
      {
        "label": "Ja, jede Spanne wird zwingend in der Mitte gehandelt.",
        "explanation": "Ein Mittelwert allein schafft keine passende Gegenpartei."
      },
      {
        "label": "Nein, der Mittelwert ist noch kein ausführbares Angebot.",
        "explanation": "Richtig: Die vorhandenen Bedingungen passen zunächst nicht unmittelbar."
      },
      {
        "label": "Ja, zu 100 gibt es unbegrenzte Menge.",
        "explanation": "Die Beispielangebote nennen keine Menge zu diesem Preis."
      }
    ],
    "correct": 1,
    "rule": "Ein berechneter Mittelwert ist keine automatische Ausführung."
  },
  {
    "title": "Preisgrenzen: passend ist nicht immer derselbe Wunschpreis",
    "summary": "Eine Grenze erlaubt einen Bereich, keinen beliebigen Preis.",
    "paragraphs": [
      "Ein Käufer will höchstens 101 Euro für eine Einheit zahlen. Ein Verkäufer will mindestens 100 Euro erhalten. Zwischen 100 und 101 liegen Preise, die beide Grenzen einhalten. Beide könnten dort grundsätzlich zusammenkommen. Ihre Grenzen allein bestimmen aber noch nicht den tatsächlichen Preis.",
      "Für unser Beispiel gilt folgende Regel: Ein Verkaufsangebot zu 100 liegt bereits vor. Danach kommt ein Kaufauftrag, der diesen Preis erlaubt. Er nimmt das Angebot an. Unter dieser festgelegten Regel wird die Einheit zu 100 gehandelt.",
      "Der Käufer zahlt also nicht automatisch seine Höchstgrenze von 101. Diese Grenze darf im Modell aber auch nicht überschritten werden. Unterscheide deshalb Preisgrenze, Gegenangebot und tatsächlichen Handelspreis. Verschiedene Auftragsarten und ihre genauen Bedingungen erklären wir später ausführlicher."
    ],
    "columns": [
      {
        "title": "Bedingungen",
        "tone": "neutral",
        "points": [
          "Käufer: höchstens 101 Euro.",
          "Verkäufer: mindestens 100 Euro."
        ]
      },
      {
        "title": "Festgelegter Ablauf im Beispiel",
        "tone": "positive",
        "points": [
          "Verkaufsangebot 100 steht bereits bereit.",
          "Späterer passender Kauf wird zu 100 ausgeführt."
        ]
      }
    ],
    "prompt": "Muss der Käufer allein wegen seiner Grenze 101 Euro zahlen?",
    "answers": [
      {
        "label": "Ja, jede Grenze muss vollständig ausgeschöpft werden.",
        "explanation": "Ein günstigeres passendes Gegenangebot kann im Lernfall genutzt werden."
      },
      {
        "label": "Er darf im Modell ohne weitere Bedingung 105 Euro zahlen.",
        "explanation": "105 läge über seiner festgelegten Kaufgrenze."
      },
      {
        "label": "Nein, er zahlt hier den vorhandenen Angebotspreis von 100 Euro.",
        "explanation": "Richtig: Preisgrenze und Ausführungspreis sind verschieden."
      }
    ],
    "correct": 2,
    "rule": "Preisgrenze, Gegenangebot und tatsächlichen Ausführungspreis unterscheiden."
  },
  {
    "title": "Ein Kauf akzeptiert ein Verkaufsangebot",
    "summary": "Erst die Ausführung verwandelt Wünsche in einen Trade.",
    "paragraphs": [
      "Eine Verkäuferin bietet zwei Einheiten für je 100 Euro an. Ein späterer Käufer möchte genau diese zwei sofort zu diesem Preis kaufen. Wir nehmen an, dass das Angebot unverändert bleibt. Unter unseren Regeln kommen zwei gehandelte Einheiten zustande.",
      "Der Preisbetrag ist 2 × 100 = 200 Euro vor Kosten. Der Käufer kauft zwei Einheiten. Die Verkäuferin verkauft dieselben zwei. Es sind insgesamt zwei Einheiten, nicht vier. Wir beschreiben denselben Austausch nur von zwei Seiten.",
      "Das Verkaufsangebot ist damit vollständig genutzt. Welche Angebote danach verfügbar sind, musst du neu prüfen. Der letzte Handel bei 100 erklärt einen abgeschlossenen Vorgang. Er verspricht nicht, dass du noch weitere Einheiten für 100 kaufen kannst."
    ],
    "columns": [
      {
        "title": "Vorher",
        "tone": "neutral",
        "points": [
          "Verkaufsangebot: 2 Einheiten zu 100 Euro.",
          "Käufer möchte genau diese 2 Einheiten."
        ]
      },
      {
        "title": "Nachher",
        "tone": "positive",
        "points": [
          "2 Einheiten gehandelt; Preisbetrag 200 Euro.",
          "Das beschriebene Angebot ist aufgebraucht."
        ]
      }
    ],
    "prompt": "Wie viele Einheiten wurden in diesem Austausch gehandelt?",
    "answers": [
      {
        "label": "Zwei Einheiten.",
        "explanation": "Richtig: Die gekaufte und verkaufte Menge sind die zwei Seiten desselben Austauschs."
      },
      {
        "label": "Vier, weil Käufer und Verkäufer getrennt gezählt werden.",
        "explanation": "Das würde dieselben Einheiten doppelt zählen."
      },
      {
        "label": "Unbegrenzt viele, weil ein Trade zu 100 stattfand.",
        "explanation": "Der Fall nennt ausdrücklich zwei angebotene Einheiten."
      }
    ],
    "correct": 0,
    "rule": "Kauf- und Verkaufsmenge beschreiben denselben ausgeführten Austausch."
  },
  {
    "title": "Teilmenge: nicht jeder Wunsch passt vollständig",
    "summary": "Die kleinere verfügbare Menge begrenzt den ersten Austausch.",
    "paragraphs": [
      "Eine Käuferin möchte fünf Einheiten für höchstens 100 Euro. Es gibt aber nur drei passende Einheiten zu 100. Weitere passende Angebote fehlen. Nach unseren Beispielregeln werden zunächst drei gekauft. Zwei der gewünschten Einheiten sind noch nicht gekauft.",
      "Für die drei entstehen 3 × 100 = 300 Euro Preisbetrag vor Kosten. In diesem Fall legen wir fest, dass der restliche Auftrag wartet. Wie es weitergeht, hängt von seiner Gültigkeit und neuen Angeboten ab. In anderen Fällen können andere Bedingungen gelten.",
      "Teilweise ausgeführt bedeutet hier: Ein Teil der Menge wurde gehandelt. Die Meldung verspricht nicht, dass der Rest später folgt oder wann das geschieht. Halte deshalb geplante Menge und tatsächlich gekaufte Menge getrennt fest. Ein Wunsch ist noch kein vollständiges Geschäft."
    ],
    "columns": [
      {
        "title": "Gewünscht und verfügbar",
        "tone": "neutral",
        "points": [
          "Kaufwunsch: 5 Einheiten, Grenze 100 Euro.",
          "Verfügbar: 3 Einheiten zu 100."
        ]
      },
      {
        "title": "Ergebnis im Lernfall",
        "tone": "positive",
        "points": [
          "3 ausgeführt; 2 bleiben wartend.",
          "Bisheriger Preisbetrag: 300 Euro."
        ]
      }
    ],
    "prompt": "Was ist nach dem beschriebenen Austausch sicher?",
    "answers": [
      {
        "label": "Alle fünf wurden automatisch zum ersten Preis gekauft.",
        "explanation": "Zu diesem Preis standen nur drei Einheiten bereit."
      },
      {
        "label": "Drei Einheiten sind ausgeführt, zwei noch nicht.",
        "explanation": "Richtig: Die fehlenden passenden Angebote begrenzen zunächst die Ausführung."
      },
      {
        "label": "Die zwei übrigen werden garantiert in einer Sekunde gefüllt.",
        "explanation": "Eine wartende Restmenge ist keine spätere Ausführungsgarantie."
      }
    ],
    "correct": 1,
    "rule": "Geplante Menge und bereits ausgeführte Menge getrennt zählen."
  },
  {
    "title": "Bereitstellen oder akzeptieren: zwei Tätigkeiten",
    "summary": "Aggressiv beschreibt hier die Ausführung, nicht ein Gefühl.",
    "paragraphs": [
      "Du kannst ein Angebot einstellen und warten. Damit stellst du handelbare Menge bereit. Oder du nimmst ein vorhandenes Gegenangebot an. Damit nutzt du die bereitgestellte Menge. Das unmittelbare Annehmen heißt in der Handelssprache oft aggressives Handeln.",
      "Eine Person bietet einen Kaufpreis unter dem aktuellen Ask an und wartet. Eine andere kauft sofort zum verfügbaren Ask. Der Ask ist das Verkaufsangebot. Beide wollen kaufen, gehen aber unterschiedlich vor. Auch ein Auftrag mit Preisgrenze kann je nach Lage warten oder sofort passende Angebote nutzen.",
      "Aggressiv bedeutet hier nicht wütend oder unvernünftig. Es sagt auch nichts über die Größe des Auftrags. Das Wort beschreibt nur den Umgang mit vorhandenen Gegenangeboten. Echte Abläufe können komplizierter sein. Hier hilft dir die Unterscheidung, Angebot und tatsächlichen Handel auseinanderzuhalten."
    ],
    "columns": [
      {
        "title": "Bereitstellen",
        "tone": "neutral",
        "points": [
          "Preis- und Mengenbedingung wartet.",
          "Noch keine passende Gegenausführung."
        ]
      },
      {
        "title": "Akzeptieren",
        "tone": "positive",
        "points": [
          "Vorhandenes Gegenangebot wird genutzt.",
          "Eine Ausführung kann zustande kommen."
        ]
      }
    ],
    "prompt": "Was meint „aggressiv“ in diesem Lernzusammenhang?",
    "answers": [
      {
        "label": "Dass die Person emotional wütend sein muss.",
        "explanation": "Die technische Verwendung des Wortes sagt das nicht."
      },
      {
        "label": "Dass jeder große Auftrag zwingend so ausgeführt wird.",
        "explanation": "Auch große Aufträge können warten oder aufgeteilt werden."
      },
      {
        "label": "Das unmittelbare Akzeptieren verfügbarer Gegenangebote.",
        "explanation": "Richtig: Es beschreibt den Ablauf, nicht die Stimmung des Traders."
      }
    ],
    "correct": 2,
    "rule": "Handelsbereitschaft nicht mit Emotion oder Teilnehmergröße verwechseln."
  },
  {
    "title": "Besserer Bid: ein Angebot kann sich ohne Trade verändern",
    "summary": "Quote und letzter Handel können auseinanderlaufen.",
    "paragraphs": [
      "Der beste Bid liegt zunächst bei 99. Der beste Ask liegt bei 101. Nun bietet ein neuer Kaufauftrag 100. Der günstigste Verkäufer verlangt weiter 101. Deshalb entsteht noch kein Handel. Das beste Kaufangebot steigt trotzdem von 99 auf 100.",
      "Die Differenz zwischen Ask und Bid heißt Spread. Vorher waren es 101 − 99 = 2 Euro. Jetzt sind es 101 − 100 = 1 Euro. Der Spread wird kleiner. Der letzte Handel kann aber weiterhin bei seinem früheren Preis bleiben.",
      "Ein verändertes Angebot ist also etwas anderes als ein neuer Handel. Der Käufer zeigt Kaufbereitschaft zu seiner Preisgrenze. Das beweist weder, dass sein Angebot lange bleibt, noch dass er den nächsten Kurs kennt. Wir notieren: höherer Bid, kleinerer Spread, noch kein neuer Trade."
    ],
    "columns": [
      {
        "title": "Vorher",
        "tone": "neutral",
        "points": [
          "Bid 99; Ask 101.",
          "Spread: 2 Euro."
        ]
      },
      {
        "title": "Nach dem neuen Kaufangebot",
        "tone": "positive",
        "points": [
          "Bid 100; Ask 101.",
          "Spread: 1 Euro; noch kein passender Trade."
        ]
      }
    ],
    "prompt": "Muss ein höherer bester Bid bereits ein neuer Trade sein?",
    "answers": [
      {
        "label": "Nein, im Beispiel verbessert sich nur das Kaufangebot.",
        "explanation": "Richtig: Ohne passende Verkaufsbedingung bleibt der Austausch aus."
      },
      {
        "label": "Ja, jede Quote ist automatisch ein ausgeführtes Geschäft.",
        "explanation": "Angebote und Ausführungen sind verschiedene Ereignisse."
      },
      {
        "label": "Ja, damit ist ein weiterer Preisanstieg garantiert.",
        "explanation": "Ein Angebot ist keine Zukunftszusage."
      }
    ],
    "correct": 0,
    "rule": "Ein verbessertes Angebot kann den Spread verändern, ohne einen Trade zu erzeugen."
  },
  {
    "title": "Ein Angebot verschwindet: nicht jeder Abgang ist ein Trade",
    "summary": "Stornieren und ausführen unterscheiden.",
    "paragraphs": [
      "Ein wartender Auftrag kann nach den Regeln geändert oder zurückgezogen werden. Zurückziehen heißt auch Stornieren. Wenn eine Menge dadurch aus der Anzeige verschwindet, wurde sie nicht automatisch gehandelt. Eine Stornierung und eine Ausführung sind verschiedene Ereignisse.",
      "Es gibt ein Kaufangebot für zwei Einheiten zu 100 Euro. Das nächstniedrige Kaufangebot liegt bei 99. Der erste Auftrag wird vollständig storniert, bevor ein Handel entsteht. Nun ist der beste Bid 99. Die zwei Einheiten wurden dabei nicht verkauft.",
      "Der letzte Handel muss sich durch diese Änderung nicht ändern. Siehst du nur die neue Anzeige, kennst du den Grund möglicherweise nicht. Für Sicherheit brauchst du passende Ereignis- oder Ausführungsdaten. Erfinde deshalb keinen Handel allein deshalb, weil eine Zeile verschwunden ist."
    ],
    "columns": [
      {
        "title": "Vor der Stornierung",
        "tone": "neutral",
        "points": [
          "Bid: 2 Einheiten zu 100.",
          "Weiteres Kaufangebot bei 99."
        ]
      },
      {
        "title": "Nach der Stornierung",
        "tone": "positive",
        "points": [
          "Der Auftrag bei 100 ist entfernt.",
          "Bester Bid 99; kein Trade aus dieser Stornierung."
        ]
      }
    ],
    "prompt": "Wie viele Einheiten wurden durch die beschriebene Stornierung gehandelt?",
    "answers": [
      {
        "label": "Zwei, weil jede verschwundene Menge verkauft wurde.",
        "explanation": "Eine Stornierung ist kein Verkauf."
      },
      {
        "label": "Keine.",
        "explanation": "Richtig: Der Fall nennt ausdrücklich eine Entfernung ohne Ausführung."
      },
      {
        "label": "Vier, weil Käufer und Verkäufer gezählt werden.",
        "explanation": "Ohne Trade gibt es hier keinen ausgeführten Austausch."
      }
    ],
    "correct": 1,
    "rule": "Verschwundene Angebote nicht automatisch als gehandelte Mengen zählen."
  },
  {
    "title": "Ein größerer Kauf erreicht mehrere Preisstufen",
    "summary": "Der letzte Teilpreis ist nicht der Durchschnitt.",
    "paragraphs": [
      "Es gibt zwei Einheiten für je 100 Euro und drei für je 101 Euro. Ein Käufer möchte sofort vier Einheiten kaufen und erlaubt beide Preise. Wir nehmen unveränderte Angebote an. Nach unseren Regeln wird zuerst das günstigere Angebot genutzt.",
      "Er kauft zwei Einheiten zu 100 und zwei zu 101. Die ersten kosten 200 Euro, die anderen 202 Euro. Zusammen sind das 402 Euro. Der Durchschnitt ist 402 / 4 = 100,50 Euro. Der letzte Teil wird bei 101 gehandelt. Dort bleibt eine der angebotenen Einheiten übrig.",
      "Alle vier gekauften Einheiten werden auch verkauft. Es gibt nicht mehr Käufe als Verkäufe. Der höhere letzte Preis entsteht hier, weil die günstigere Menge nicht für den ganzen Auftrag reicht. Gehandelte Menge, Durchschnittspreis und letzter Handelspreis sind drei verschiedene Angaben."
    ],
    "columns": [
      {
        "title": "Angebote vor dem Kauf",
        "tone": "neutral",
        "points": [
          "2 Einheiten zu 100 Euro.",
          "3 Einheiten zu 101 Euro."
        ]
      },
      {
        "title": "Kauf von vier Einheiten",
        "tone": "positive",
        "points": [
          "2 × 100 + 2 × 101 = 402 Euro.",
          "Durchschnitt 100,50; letzter Teilpreis 101."
        ]
      }
    ],
    "prompt": "Wie groß ist der Durchschnittspreis?",
    "answers": [
      {
        "label": "Immer 101 Euro, weil der letzte Teil dort liegt.",
        "explanation": "Der letzte Teilpreis ist nicht der Durchschnitt aller Einheiten."
      },
      {
        "label": "100 Euro, weil die erste Stufe jede Menge abdeckt.",
        "explanation": "Auf der ersten Stufe standen nur zwei Einheiten bereit."
      },
      {
        "label": "100,50 Euro vor Kosten.",
        "explanation": "Richtig: Die vier Ausführungen ergeben 402 Euro geteilt durch vier."
      }
    ],
    "correct": 2,
    "rule": "Ausführungsfolge, letzten Preis und Durchschnitt getrennt berechnen."
  },
  {
    "title": "Ein größerer Verkauf erreicht niedrigere Gebote",
    "summary": "Die Gegenrichtung folgt derselben Mengenlogik.",
    "paragraphs": [
      "Käufer bieten für zwei Einheiten je 99 Euro und für drei weitere je 98 Euro. Ein Verkäufer will sofort vier Einheiten abgeben und erlaubt beide Preise. Die Angebote bleiben in unserem Fall unverändert. Wir nutzen zuerst das höhere Kaufangebot.",
      "Zwei Einheiten werden zu 99 und zwei zu 98 verkauft. Das ergibt 198 + 196 = 394 Euro. Der Durchschnitt ist 394 / 4 = 98,50 Euro. Der letzte Teilpreis ist 98. Dort bleibt eine Einheit des Kaufangebots übrig.",
      "Auch hier werden genauso viele Einheiten gekauft wie verkauft. Der Verkäufer nutzt mehrere Preisstufen, weil die höchste Stufe nicht genug Menge bietet. Der sinkende letzte Preis beschreibt die Reihenfolge der Geschäfte. Er bedeutet nicht, dass mehr Einheiten verkauft als gekauft wurden."
    ],
    "columns": [
      {
        "title": "Gebote vor dem Verkauf",
        "tone": "neutral",
        "points": [
          "2 Einheiten zu 99 Euro.",
          "3 Einheiten zu 98 Euro."
        ]
      },
      {
        "title": "Verkauf von vier Einheiten",
        "tone": "positive",
        "points": [
          "2 × 99 + 2 × 98 = 394 Euro.",
          "Durchschnitt 98,50; letzter Teilpreis 98."
        ]
      }
    ],
    "prompt": "Warum liegt der letzte Teil im Lernfall bei 98?",
    "answers": [
      {
        "label": "Zu 99 waren nur zwei Einheiten verfügbar.",
        "explanation": "Richtig: Die verbleibenden zwei werden gegen die nächste erlaubte Stufe ausgeführt."
      },
      {
        "label": "Weil für die letzten Einheiten keine Käufer nötig sind.",
        "explanation": "Auch diese Einheiten werden von der Gegenseite gekauft."
      },
      {
        "label": "Weil die gesamte Menge immer zu 99 ausgeführt werden muss.",
        "explanation": "Das würde die begrenzte Menge auf der ersten Stufe übersehen."
      }
    ],
    "correct": 0,
    "rule": "Verfügbare Gebote und Mengen erklären die Preisfolge eines Verkaufs."
  },
  {
    "title": "Gleich viele gehandelte Einheiten, unterschiedliche Bereitschaft",
    "summary": "Handelsvolumen ist kein Zählen von Meinungen.",
    "paragraphs": [
      "Bei jedem abgeschlossenen Geschäft gehört zu einer gekauften Einheit eine verkaufte Einheit. Trotzdem können die Beteiligten unterschiedlich dringend handeln wollen. Sie können auch verschiedene Preisgrenzen setzen. Das beeinflusst, unter welchen Bedingungen der nächste Austausch möglich ist.",
      "Im vorigen Kaufbeispiel wurden vier Einheiten gekauft und vier verkauft. Der Käufer akzeptierte zuerst 100 und dann 101 Euro. Der letzte Preis stieg bei gleichen gehandelten Mengen auf beiden Seiten. Auch die Zahl der Personen muss nicht gleich sein. Ein Auftrag kann mehrere Gegenparteien treffen.",
      "Das Wort Kaufdruck ist oft eine kurze Beschreibung. Für eine genaue Erklärung musst du sagen, welche Aufträge, Angebote oder Geschäfte du beobachtet hast. Die Stückzahl allein beweist keine zusätzlichen Käufe ohne Verkäufe. Sie verrät auch nicht sicher, welche Personen gehandelt haben."
    ],
    "columns": [
      {
        "title": "Ausgeführte Menge",
        "tone": "neutral",
        "points": [
          "Vier Einheiten gekauft.",
          "Dieselben vier Einheiten verkauft."
        ]
      },
      {
        "title": "Unterschiedliche Bedingungen",
        "tone": "positive",
        "points": [
          "Kauf akzeptiert mehrere Verkaufsstufen.",
          "Personenzahl und Motive bleiben gesonderte Fragen."
        ]
      }
    ],
    "prompt": "Was kann trotz gleicher ausgeführter Kauf- und Verkaufsmenge passieren?",
    "answers": [
      {
        "label": "Es können Einheiten ganz ohne Gegenseite gehandelt werden.",
        "explanation": "Ein ausgeführter Austausch hat beide Seiten."
      },
      {
        "label": "Der letzte Preis kann sich durch unterschiedliche verfügbare Stufen verändern.",
        "explanation": "Richtig: Gleiche Austauschmenge bedeutet nicht gleichbleibende Angebotsbedingungen."
      },
      {
        "label": "Die Zahl der Personen muss exakt identisch sein.",
        "explanation": "Ein großer Auftrag kann mehreren kleineren gegenüberstehen."
      }
    ],
    "correct": 1,
    "rule": "Gehandelte Menge nicht mit Zahl oder Dringlichkeit der Teilnehmer verwechseln."
  },
  {
    "title": "Sammelauktion: Wünsche bündeln statt sofort nacheinander handeln",
    "summary": "Ein gemeinsamer Zeitpunkt verändert den Ablauf.",
    "paragraphs": [
      "Eine Sammelauktion bündelt Handelswünsche für einen gemeinsamen Ablauf. Ihre Regeln bestimmen den Preis und welche passenden Mengen zugeteilt werden. Das unterscheidet sich vom fortlaufenden Handel. Dort können Aufträge nacheinander eintreffen und sofort passende Angebote nutzen.",
      "Wir verwenden nur Aufträge mit Preisgrenzen für gleiche Einheiten. Es gibt drei mögliche Preise: 100, 101 und 102 Euro. Unsere vereinfachte Regel wählt den Preis, bei dem die größte Menge zusammenkommt. In unserem Fall gewinnt genau ein Preis eindeutig.",
      "Echte Plätze können weitere Auftragsarten und Preisstufen nutzen. Sie brauchen auch Regeln, falls mehrere Preise gleich gut passen. Unsere Rechnung ersetzt diese Regeln nicht. Sie zeigt dir zunächst, wie du bei jedem möglichen Preis die erlaubten Kauf- und Verkaufsmengen zählst."
    ],
    "columns": [
      {
        "title": "Fortlaufende Lernfälle",
        "tone": "neutral",
        "points": [
          "Aufträge können nacheinander ausgeführt werden.",
          "Vorhandene Gegenangebote sind dabei wichtig."
        ]
      },
      {
        "title": "Sammelauktion im Modell",
        "tone": "positive",
        "points": [
          "Aufträge für einen gemeinsamen Ablauf bündeln.",
          "Preis mit eindeutig größter möglicher Menge wählen."
        ]
      }
    ],
    "prompt": "Welche Preisregel verwenden die nächsten Beispiele?",
    "answers": [
      {
        "label": "Immer den höchsten genannten Preis.",
        "explanation": "Ein hoher Preis kann zu wenig erlaubte Kaufmenge übrig lassen."
      },
      {
        "label": "Eine Garantie, dass jedes reale Handelssystem identisch funktioniert.",
        "explanation": "Reale Plätze können zusätzliche Regeln besitzen."
      },
      {
        "label": "Wir wählen den Preis, bei dem eindeutig die größte Menge gehandelt werden kann.",
        "explanation": "Richtig: Diese Regel ist für unser Lernmodell ausdrücklich festgelegt."
      }
    ],
    "correct": 2,
    "rule": "Auktionsrechnung immer zusammen mit ihren festgelegten Regeln lesen."
  },
  {
    "title": "Welche Kaufmenge ist bei einem Preis erlaubt?",
    "summary": "Käufer dürfen ihre Höchstgrenze nicht überschreiten.",
    "paragraphs": [
      "In unserer Sammelauktion liegen drei Kaufaufträge vor. Der erste will zwei Einheiten für höchstens 102 Euro. Der zweite will drei für höchstens 101. Der dritte will vier für höchstens 100. Bei jedem möglichen Preis prüfen wir: Welche Grenzen erlauben diesen Kauf?",
      "Bei 100 dürfen alle kaufen: 2 + 3 + 4 = 9 Einheiten. Bei 101 ist die dritte Grenze zu niedrig. Es bleiben 2 + 3 = 5 Einheiten. Bei 102 darf nur der erste Auftrag kaufen: zwei Einheiten. Höhere Preise überschreiten hier mehr Kaufgrenzen.",
      "Diese Mengen sind bisher nur erlaubte Kaufwünsche. Es sind noch keine abgeschlossenen Geschäfte. Dazu muss auch genug passende Verkaufsmenge vorhanden sein. Prüfe deshalb beide Seiten. Die Grenze eines einzelnen Auftrags beschreibt nicht den gesamten Markt."
    ],
    "columns": [
      {
        "title": "Kaufaufträge",
        "tone": "neutral",
        "points": [
          "2 bis 102; 3 bis 101; 4 bis 100 Euro.",
          "Jede Zahl nennt eine Menge und ihre Höchstgrenze."
        ]
      },
      {
        "title": "Erlaubte Mengen je Kandidat",
        "tone": "positive",
        "points": [
          "Bei 100: 9; bei 101: 5.",
          "Bei 102: 2 Einheiten."
        ]
      }
    ],
    "prompt": "Wie viele Einheiten dürfen bei 101 Euro gekauft werden?",
    "answers": [
      {
        "label": "Fünf.",
        "explanation": "Richtig: Zwei mit Grenze 102 und drei mit Grenze 101 passen."
      },
      {
        "label": "Neun, denn jede Grenze darf überschritten werden.",
        "explanation": "Die vier Einheiten mit Grenze 100 dürfen bei 101 nicht kaufen."
      },
      {
        "label": "Nur drei, weil eine höhere Grenze einen günstigeren Preis verbietet.",
        "explanation": "Eine Höchstgrenze 102 erlaubt auch einen Kauf zu 101."
      }
    ],
    "correct": 0,
    "rule": "Für jeden Kandidaten alle erlaubten Kaufmengen zusammenzählen."
  },
  {
    "title": "Welche Verkaufsmenge ist bei einem Preis erlaubt?",
    "summary": "Verkäufer dürfen untere Grenzen nicht unterschreiten.",
    "paragraphs": [
      "Auf der Verkaufsseite liegen ebenfalls drei Aufträge. Der erste bietet drei Einheiten für mindestens 99 Euro. Der zweite bietet vier für mindestens 101. Der dritte bietet zwei für mindestens 102. Bei jedem möglichen Preis zählen nur die erfüllten Mindestpreise.",
      "Bei 100 dürfen die drei Einheiten mit Mindestpreis 99 verkaufen. Bei 101 kommen vier hinzu: 3 + 4 = 7. Bei 102 dürfen alle verkaufen: 3 + 4 + 2 = 9. Ein höherer Preis erfüllt hier mehr Verkaufsbedingungen.",
      "Mindestens 99 bedeutet nicht ausschließlich 99. Auch 101 liegt über dieser Grenze und ist erlaubt. Trotzdem sind diese Mengen noch keine ausgeführten Verkäufe. Erst eine passende Kaufseite macht den Austausch möglich. Die kleinere passende Seite begrenzt die gemeinsam handelbare Menge."
    ],
    "columns": [
      {
        "title": "Verkaufsaufträge",
        "tone": "neutral",
        "points": [
          "3 ab 99; 4 ab 101; 2 ab 102 Euro.",
          "Jede Zahl nennt eine Menge und ihre Mindestforderung."
        ]
      },
      {
        "title": "Erlaubte Mengen je Kandidat",
        "tone": "positive",
        "points": [
          "Bei 100: 3; bei 101: 7.",
          "Bei 102: 9 Einheiten."
        ]
      }
    ],
    "prompt": "Wie viele Einheiten dürfen bei 101 Euro verkauft werden?",
    "answers": [
      {
        "label": "Nur vier, weil die Grenze 99 keinen höheren Preis erlaubt.",
        "explanation": "Ein Preis über der Mindestforderung erfüllt sie ebenfalls."
      },
      {
        "label": "Sieben.",
        "explanation": "Richtig: Drei ab 99 und vier ab 101 passen; die zwei ab 102 noch nicht."
      },
      {
        "label": "Neun, obwohl zwei mindestens 102 verlangen.",
        "explanation": "Diese zwei dürfen im Modell zu 101 nicht verkaufen."
      }
    ],
    "correct": 1,
    "rule": "Für jeden Kandidaten alle erlaubten Verkaufsmengen zusammenzählen."
  },
  {
    "title": "Auktionspreis berechnen: die kleinere Seite begrenzt den Austausch",
    "summary": "Die größte gemeinsame Menge liegt hier bei 101.",
    "paragraphs": [
      "Für jeden Preis vergleichen wir erlaubte Kauf- und Verkaufsmengen. Höchstens die kleinere Menge kann gehandelt werden. Wenn Käufer neun Einheiten wollen, Verkäufer aber nur drei anbieten, können nur drei zusammenkommen. Du darfst die Wünsche nicht zu zwölf gehandelten Einheiten addieren.",
      "Bei 100 Euro stehen neun Kaufwünsche drei Verkaufswünschen gegenüber: möglich sind drei Einheiten. Bei 101 sind es fünf und sieben: möglich sind fünf. Bei 102 sind es zwei und neun: möglich sind zwei. Nach unserer Regel gewinnt 101 Euro mit fünf Einheiten.",
      "Diese fünf werden im Modell gemeinsam zu 101 ausgeführt. Der Preisbetrag ist 5 × 101 = 505 Euro. Von den sieben erlaubten Verkaufseinheiten werden nur fünf gehandelt. Für zwei fehlt hier eine passende Kaufmenge. Erlaubt heißt deshalb noch nicht ausgeführt."
    ],
    "columns": [
      {
        "title": "Zusammenführbare Mengen",
        "tone": "neutral",
        "points": [
          "100: min(9, 3) = 3 Einheiten.",
          "101: min(5, 7) = 5; 102: min(2, 9) = 2."
        ]
      },
      {
        "title": "Ergebnis nach der Modellregel",
        "tone": "positive",
        "points": [
          "Auktionspreis 101 Euro; fünf gehandelte Einheiten.",
          "Preisbetrag: 5 × 101 = 505 Euro."
        ]
      }
    ],
    "prompt": "Welcher Kandidat gewinnt nach der festgelegten Regel?",
    "answers": [
      {
        "label": "102 Euro, weil der höchste Preis immer gewinnt.",
        "explanation": "Bei 102 passen nur zwei Kauf- und damit gemeinsame Einheiten."
      },
      {
        "label": "100 Euro mit zwölf Einheiten aus 9 plus 3.",
        "explanation": "Kauf- und Verkaufsmenge werden nicht als getrennte gehandelte Stücke addiert."
      },
      {
        "label": "101 Euro. Bei diesem Preis können fünf Einheiten gehandelt werden.",
        "explanation": "Richtig: Fünf ist das eindeutige Maximum unter drei, fünf und zwei."
      }
    ],
    "correct": 2,
    "rule": "Gemeinsame Menge je Preis berechnen, dann die angegebene Preisregel anwenden."
  },
  {
    "title": "Nicht jeder bekommt alles: Restmengen und Zuteilung",
    "summary": "Preiswahl und Auftragszuordnung sind eigene Regeln.",
    "paragraphs": [
      "Bei unserem gewählten Preis von 101 sind fünf Kauf- und sieben Verkaufseinheiten erlaubt. Fünf werden gehandelt. Zwei erlaubte Verkaufseinheiten bleiben übrig. Welche Verkäufer tatsächlich verkaufen, bestimmt eine weitere Regel: die Zuteilung.",
      "Nur für unser Beispiel gilt: Niedrigere Mindestpreise werden zuerst bedient. Deshalb verkaufen die drei Einheiten mit Mindestpreis 99 vollständig. Dazu kommen zwei der vier Einheiten mit Mindestpreis 101. Zwei dieser Einheiten bleiben übrig. Die Aufträge mit Mindestpreis 102 sind bei 101 gar nicht erlaubt.",
      "Das ist unsere festgelegte Beispielregel. Sie gilt nicht automatisch an jeder Börse. Bei gleichrangigen Aufträgen wären weitere Regeln nötig. Der Preis mit der größten gemeinsam handelbaren Menge verspricht deshalb keinem einzelnen Auftrag, dass seine ganze Menge ausgeführt wird."
    ],
    "columns": [
      {
        "title": "Bei 101 erlaubt",
        "tone": "neutral",
        "points": [
          "Kauf: 5; Verkauf: 7 Einheiten.",
          "Gemeinsame Ausführung: 5."
        ]
      },
      {
        "title": "Zuteilung im festgelegten Fall",
        "tone": "positive",
        "points": [
          "3 Einheiten ab 99 und 2 ab 101 ausgeführt.",
          "2 erlaubte Verkaufseinheiten ab 101 bleiben übrig."
        ]
      }
    ],
    "prompt": "Warum bleiben zwei erlaubte Verkaufseinheiten unausgeführt?",
    "answers": [
      {
        "label": "Am Preis 101 gibt es nur fünf passende Kaufseinheiten.",
        "explanation": "Richtig: Eine erlaubte Preisbedingung ist keine Garantie für jede gewünschte Menge."
      },
      {
        "label": "Weil kein Auktionspreis ermittelt wurde.",
        "explanation": "Im Modell ist 101 eindeutig gewählt worden."
      },
      {
        "label": "Weil Kauf- und Verkaufsmenge im Trade ungleich sein dürfen.",
        "explanation": "Die ausgeführten Mengen sind weiterhin auf beiden Seiten fünf."
      }
    ],
    "correct": 0,
    "rule": "Erlaubt sein, zugeteilt werden und vollständig ausgeführt sein unterscheiden."
  },
  {
    "title": "Vorläufiger Auktionspreis: neue Aufträge können das Ergebnis ändern",
    "summary": "Ein Zwischenstand ist noch keine abgeschlossene Auktion.",
    "paragraphs": [
      "Eine vorläufige Anzeige zeigt, welches Auktionsergebnis mit den aktuell bekannten Aufträgen herauskäme. Sie ist ein Zwischenstand. Neue oder geänderte Aufträge können das Ergebnis beeinflussen. Was genau angezeigt wird, hängt vom jeweiligen System und seinen Regeln ab.",
      "Bisher gewinnt 101 mit fünf Einheiten. Nun kommen vier Kaufwünsche mit Höchstpreis 102 hinzu. Die Verkäufer bleiben gleich. Die gemeinsam mögliche Menge beträgt bei 100 weiter drei Einheiten. Bei 101 steigt sie auf sieben. Bei 102 steigt sie auf sechs. Der beste Preis bleibt 101, aber die mögliche Menge wächst.",
      "Andere Änderungen könnten auch den Preis verändern. Unser Fall zeigt: Mehr handelbare Menge bedeutet nicht automatisch einen anderen Auktionspreis. Erst der endgültige Ablauf und die bestätigten Geschäfte belegen das tatsächliche Ergebnis. Der Zwischenstand ist noch keine feste Ausführung."
    ],
    "columns": [
      {
        "title": "Ursprünglicher Stand",
        "tone": "neutral",
        "points": [
          "Mögliche Mengen: 3, 5, 2.",
          "Gewählter Kandidat: 101 mit fünf Einheiten."
        ]
      },
      {
        "title": "Nach vier Käufen bis 102",
        "tone": "positive",
        "points": [
          "Mögliche Mengen: 3, 7, 6.",
          "Kandidat bleibt 101; nun sieben mögliche Einheiten."
        ]
      }
    ],
    "prompt": "Was ändert sich in diesem konkreten Zwischenstand?",
    "answers": [
      {
        "label": "Der Preis muss zwingend auf 102 steigen.",
        "explanation": "Dort sind sechs möglich, bei 101 aber sieben."
      },
      {
        "label": "Die mögliche Menge steigt auf sieben; der Kandidat bleibt bei 101.",
        "explanation": "Richtig: Neue Kaufmenge verändert hier das Maximum mengenmäßig, nicht seinen Preis."
      },
      {
        "label": "Die erste Anzeige garantiert weiterhin genau fünf endgültige Trades.",
        "explanation": "Neue Aufträge können den Zwischenstand verändern."
      }
    ],
    "correct": 1,
    "rule": "Vorläufige Preis- und Mengenanzeigen sind keine endgültigen Ausführungen."
  },
  {
    "title": "Handelspreis und Werturteil sind nicht dieselbe Sache",
    "summary": "Ein Trade beweist Einigung, keine objektive Wahrheit.",
    "paragraphs": [
      "Ein Handelspreis zeigt, zu welchem Preis ein Austausch zustande kam. Ein Werturteil ist dagegen eine Einschätzung: Was könnte das Produkt unter bestimmten Annahmen wert sein? Menschen können dafür andere Zeiträume, Erwartungen und Pflichten berücksichtigen. Preis und Werturteil sind deshalb verschiedene Dinge.",
      "Ein Käufer und ein Verkäufer handeln bei 101. Der Käufer will vielleicht langfristig anlegen. Der Verkäufer braucht vielleicht Geld für eine Rechnung. Beide müssen 101 nicht für denselben richtigen Zukunftswert halten. Es reicht, dass das Geschäft zu ihren jeweiligen Aufgaben passt.",
      "Auch unser Auktionspreis entsteht zunächst aus den bekannten Aufträgen und den Modellregeln. Er verspricht kein späteres Kursziel. Nutze beobachtete Preise als Daten. Schreibe ihnen aber keine sicheren Werturteile oder Absichten zu, für die dir Belege fehlen."
    ],
    "columns": [
      {
        "title": "Beobachtet",
        "tone": "neutral",
        "points": [
          "Trade bei 101 Euro.",
          "Austausch unter passenden Bedingungen."
        ]
      },
      {
        "title": "Nicht dadurch bewiesen",
        "tone": "positive",
        "points": [
          "Identische Zukunftserwartungen beider Seiten.",
          "Ein sicherer objektiver Zukunftswert."
        ]
      }
    ],
    "prompt": "Was belegt die Ausführung bei 101 allein?",
    "answers": [
      {
        "label": "Dass alle Beteiligten dieselbe künftige Wertschätzung besitzen.",
        "explanation": "Ziele und Horizonte können verschieden sein."
      },
      {
        "label": "Dass spätere Kurse zwingend zu 101 zurückkehren.",
        "explanation": "Ein Ausführungspreis ist keine garantierte Zukunftsmarke."
      },
      {
        "label": "Dass zu diesem Preis ein Geschäft zustande kam.",
        "explanation": "Richtig: Wertschätzung und Motive der Beteiligten bleiben zusätzliche Fragen."
      }
    ],
    "correct": 2,
    "rule": "Preis als beobachtetes Ergebnis behandeln, Werturteil als Einschätzung."
  },
  {
    "title": "Neue Information: Angebote können reagieren, bevor gehandelt wird",
    "summary": "Die Reaktion ist ein Ablauf, keine sichere Prognose.",
    "paragraphs": [
      "Neue Nachrichten können Handelswünsche verändern. Teilnehmer können Angebote einstellen, ändern oder zurückziehen. Dadurch können sich die sichtbaren Kauf- und Verkaufspreise ändern. Dafür muss noch kein neuer Handel stattgefunden haben. Angebote und Ausführungen bleiben verschiedene Ereignisse.",
      "Unser bester Bid liegt zuerst bei 99, der beste Ask bei 101. Nach einer Nachricht werden beide Angebote ersetzt. Nun sind es 102 und 103. Wir legen fest: Bis jetzt wurden nur Angebote verändert. Der letzte Handel behält daher seinen bisherigen Preis.",
      "Die Reaktion beweist nicht, dass alle die Nachricht gleich verstehen. Sie verrät auch keinen sicheren späteren Kurs. Nachricht, Angebotsänderung und Ausführung sind drei getrennte Schritte. Ihre Reihenfolge hilft dir beim Beschreiben. Sie macht die Zukunft aber nicht vorhersehbar."
    ],
    "columns": [
      {
        "title": "Vor der Nachricht",
        "tone": "neutral",
        "points": [
          "Bid 99; Ask 101.",
          "Letzter Trade aus einem früheren Geschäft."
        ]
      },
      {
        "title": "Nach den Angebotsänderungen",
        "tone": "positive",
        "points": [
          "Bid 102; Ask 103.",
          "Zunächst noch kein neuer Trade im Lernfall."
        ]
      }
    ],
    "prompt": "Muss der letzte Trade durch diese Angebotsänderung schon bei 103 liegen?",
    "answers": [
      {
        "label": "Nein, erst eine neue Ausführung verändert den letzten Trade.",
        "explanation": "Richtig: Der Fall beschreibt zunächst nur neue Kauf- und Verkaufsbedingungen."
      },
      {
        "label": "Ja, jeder neue Ask ist automatisch ein Trade.",
        "explanation": "Ask und Ausführung sind verschiedene Preisbezüge."
      },
      {
        "label": "Ja, damit ist jede weitere Preisrichtung garantiert.",
        "explanation": "Eine Reaktion auf Informationen ist keine sichere Prognose."
      }
    ],
    "correct": 0,
    "rule": "Nachricht, Angebotsänderung und Ausführung getrennt notieren."
  },
  {
    "title": "Dein Auktionscheck: Bedingungen, Ereignis, Ergebnis",
    "summary": "Einen Handelsablauf ohne erfundene Gewissheit erklären.",
    "paragraphs": [
      "Für deinen Auktionscheck beschreibst du zuerst Produkt und Regeln. Notiere dann Angebote mit Preis, Menge und Zeitpunkt. Unterscheide neue Aufträge, Änderungen, Stornierungen und tatsächliche Geschäfte. Berechne zuletzt die gehandelte Menge, den Preisbetrag und bei Bedarf den Durchschnitt.",
      "Es gibt zwei Einheiten zu 100 und drei zu 101. Ein Käufer will vier und erlaubt beide Preise. Die Angebote bleiben gleich. Er kauft zwei zu 100 und zwei zu 101: zusammen vier Einheiten für 402. Der Durchschnitt ist 100,50. Der letzte Teilpreis ist 101. Dort bleibt eine angebotene Einheit übrig.",
      "Fehlen Regeln, Zeitangaben oder passende Gegenmengen, lässt du die entsprechende Antwort offen. Du kannst die Auktion jetzt als Ablauf erklären. Im nächsten Kapitel über das Orderbuch betrachten wir Preisstufen und Mengen genauer. Dabei unterscheiden wir weiter sichtbare Angebote von tatsächlich abgeschlossenen Geschäften."
    ],
    "columns": [
      {
        "title": "Ablauf im Abschlussfall",
        "tone": "neutral",
        "points": [
          "2 zu 100 und 2 zu 101 ausgeführt.",
          "1 angebotene Einheit zu 101 bleibt übrig."
        ]
      },
      {
        "title": "Ergebnis vor Kosten",
        "tone": "positive",
        "points": [
          "4 Einheiten; Preisbetrag 402 Euro.",
          "Durchschnitt 100,50; letzter Teilpreis 101."
        ]
      }
    ],
    "prompt": "Welche Ergebnisbeschreibung passt vollständig zum Abschlussfall?",
    "answers": [
      {
        "label": "Acht Einheiten, weil Käufe und Verkäufe addiert werden.",
        "explanation": "Dabei würden die vier ausgetauschten Einheiten doppelt gezählt."
      },
      {
        "label": "Vier Einheiten, 402 Euro Preisbetrag und 100,50 Euro Durchschnitt.",
        "explanation": "Richtig: Menge und beide Ausführungspreise werden gemeinsam berücksichtigt."
      },
      {
        "label": "Vier Einheiten ausschließlich zu 101 Euro.",
        "explanation": "Zwei wurden ausdrücklich zu 100 ausgeführt."
      }
    ],
    "correct": 1,
    "rule": "Bedingungen, Ereignisse und berechnetes Ergebnis getrennt erklären."
  }
] as const;

export const marketBasicsChapterFiveLessons: Lesson[] = drafts.map((draft, index) => {
  const key = `how-exchanges-work.chapter-05.lesson-${String(index + 1).padStart(2, '0')}`;
  return {
    id: key, title: draft.title, summary: draft.summary,
    sourceUnit: 'Kapitel 5 · Der Markt als Auktion', sourceAnchors: [draft.title],
    durationMinutes: 6, xp: 35, status: 'published',
    steps: [
      { id: `${key}.explain`, type: 'explanation', eyebrow: 'Trading von null · Kapitel 5', title: draft.title, paragraphs: [...draft.paragraphs], callout: draft.rule },
      { id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick', columns: draft.columns.map((column) => ({ ...column, points: [...column.points] })) },
      { id: `${key}.question`, type: 'question', title: 'Kurz prüfen', prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`, options: draft.answers.map((answer, option) => ({ id: `choice-${option}`, ...answer })) },
      { id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit', points: [draft.rule, draft.summary] },
    ],
  };
});
