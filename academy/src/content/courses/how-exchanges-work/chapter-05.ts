import type { Lesson } from '../../types';

// Eigene Auktionsmodelle mit ausdrücklich vereinfachten Preis- und Zuteilungsregeln.
const drafts = [
  {
    "title": "Auktion: Handelswünsche nach Regeln zusammenbringen",
    "summary": "Eine Auktion ist mehr als ein steigendes Gebot.",
    "paragraphs": [
      "Das Wort Auktion erinnert oft an einen Gegenstand, dessen Käufer immer höhere Gebote abgeben. Ein Finanzmarkt kann anders organisiert sein: Mehrere Käufer und Verkäufer geben gleichzeitig Preis- und Mengenbedingungen an. Ein Handelssystem verbindet passende Wünsche nach seinen Regeln.",
      "Wir betrachten in diesem Kapitel einen vereinfachten Markt für identische Einheiten eines Instruments. Käufer nennen, was sie höchstens zahlen wollen; Verkäufer, was sie mindestens erhalten wollen. Es gibt keine Gebühren, keine Währungsunterschiede und keine Sonderbedingungen, sofern der jeweilige Fall nichts anderes sagt.",
      "Eine Auktion garantiert weder einen objektiv richtigen Wert noch einen Handel für jeden Teilnehmer. Sie organisiert das Zusammenkommen von Bedingungen. Erst wenn passende Aufträge tatsächlich verbunden werden, entsteht eine Ausführung. Die folgenden Beispiele sind Lernfälle, keine Beschreibung jeder realen Börsenregel."
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
      "Ein Kaufangebot nennt einen Preis, zu dem jemand kaufen möchte. Ein Verkaufsangebot nennt einen Preis, zu dem jemand verkaufen möchte. Im einfachen Orderbuch ist der beste Bid das höchste Kaufangebot, der beste Ask das niedrigste Verkaufsangebot. Diese Wörter kennst du bereits; jetzt verwenden wir sie im Ablauf der Auktion.",
      "Unser Beispiel zeigt Käufer mit 98 und 99 Euro sowie Verkäufer mit 101 und 102 Euro. Der beste Bid liegt bei 99, der beste Ask bei 101. Die beiden besten Bedingungen passen noch nicht unmittelbar zusammen. Es gibt deshalb nicht automatisch einen Trade in der Mitte bei 100.",
      "Der Mittelwert aus Bid und Ask kann als Referenz berechnet werden. Er ist jedoch nicht allein deshalb ein ausführbares Angebot. Für eine tatsächliche Ausführung müssen Beteiligte passende Bedingungen akzeptieren und die Handelsregeln erfüllt sein."
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
      "Im Lernmodell will ein Käufer eine Einheit für höchstens 101 Euro. Ein Verkäufer will mindestens 100 Euro. Ihre Bedingungen besitzen einen gemeinsamen Bereich von 100 bis 101. Das bedeutet zunächst, dass ein Preis in diesem Bereich beide Grenzen einhalten könnte.",
      "Welcher Preis tatsächlich verwendet wird, hängt von den Handelsregeln und der Reihenfolge ab. Wir legen für den nächsten Fall fest: Ein vorhandenes Verkaufsangebot bei 100 wird von einem späteren Kaufauftrag mit ausreichender Preisgrenze akzeptiert. Dann wird in diesem vereinfachten Modell zu 100 ausgeführt.",
      "Die Kaufgrenze 101 ist also nicht automatisch der Ausführungspreis. Umgekehrt darf sie im Modell nicht einfach überschritten werden. Orderarten und ihre genauen Bedingungen werden im späteren Kurs zu Orders und Ausführung vertieft. Hier zählt, dass Wunschgrenze, passende Gegenbedingung und tatsächlicher Trade verschieden sind."
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
        "label": "Nein, im beschriebenen Ablauf erhält er die vorhandenen 100 Euro.",
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
      "Eine Verkäuferin stellt im Lernfall zwei Einheiten zu 100 Euro bereit. Ein späterer Käufer möchte genau zwei Einheiten sofort zu diesem verfügbaren Preis kaufen. Unter den festgelegten Regeln und bei unveränderten Bedingungen werden zwei Einheiten ausgetauscht.",
      "Der Preisbetrag beträgt 2 × 100 = 200 Euro vor Kosten. Der Käufer hat zwei Einheiten gekauft; die Verkäuferin hat dieselben zwei verkauft. Es sind nicht vier verschiedene Einheiten gehandelt worden, nur weil wir den Vorgang aus beiden Blickrichtungen beschreiben.",
      "Nach diesem vollständigen Austausch ist das beschriebene Verkaufsangebot verbraucht. Was als Nächstes verfügbar ist, muss neu geprüft werden. Der letzte Trade zu 100 beschreibt den abgeschlossenen Vorgang und garantiert keine weitere Menge zu diesem Preis."
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
      "Eine Käuferin möchte fünf Einheiten zu höchstens 100 Euro. Im Lernfall sind nur drei Einheiten zu 100 verfügbar; weitere passende Angebote fehlen. Unter unseren Regeln werden zunächst drei gehandelt. Die übrigen zwei sind damit noch nicht ausgeführt.",
      "Es entstehen 3 × 100 = 300 Euro Preisbetrag vor Kosten. Wie es mit den zwei übrigen Einheiten weitergeht, hängt von der Auftragsgültigkeit und weiteren Angeboten ab. In diesem Fall legen wir fest, dass der verbleibende Kaufauftrag im Markt wartet.",
      "Die Anzeige „teilweise ausgeführt“ ist deshalb eine Mengeninformation. Sie verspricht weder, dass der Rest später gefüllt wird, noch zu welchem Zeitpunkt. Das geplante Gesamtgeschäft und die bisherige Ausführung müssen getrennt aufgeschrieben werden."
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
      "Wer ein Angebot im einfachen Orderbuch bereitstellt und auf eine Gegenseite wartet, stellt handelbare Menge bereit. Wer ein verfügbares Gegenangebot akzeptiert, nimmt diese Menge in Anspruch. Im Marktsprachgebrauch wird das unmittelbare Akzeptieren häufig aggressives Handeln genannt.",
      "Eine Person stellt eine Kaufbedingung unterhalb des aktuellen Ask ein und wartet. Eine andere kauft unmittelbar gegen einen vorhandenen Ask. Beide möchten kaufen, unterscheiden sich aber im Ablauf. Eine Preisgrenze kann je nach Lage entweder warten oder bereits passende Gegenangebote akzeptieren.",
      "Aggressiv bedeutet hier nicht wütend, unvernünftig oder groß. Es beschreibt die Beziehung zu vorhandenen Gegenangeboten. Der tatsächliche Handelsmechanismus kann komplexer sein; die Unterscheidung hilft zunächst dabei, Angebot und Ausführung im Lernmodell auseinanderzuhalten."
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
      "In unserem Ausgangsmarkt liegt der beste Bid bei 99 und der Ask bei 101. Eine neue Kauforder bietet 100 Euro. Da der Verkäufer weiterhin mindestens 101 verlangt, entsteht noch kein passender Austausch. Der beste Bid steigt aber bereits von 99 auf 100.",
      "Die Spanne sinkt von 101 − 99 = 2 Euro auf 101 − 100 = 1 Euro. Der letzte Trade kann währenddessen weiterhin bei einem früheren Wert liegen. Ein geändertes Angebot ist daher eine andere Datenart als eine geänderte Ausführung.",
      "Das höhere Kaufangebot zeigt Bereitschaft unter einer Preisbedingung. Es beweist nicht, dass diese Menge dauerhaft bleibt oder der Käufer den nächsten Kursverlauf kennt. Für diesen Zustand notieren wir: Bid verbessert, Spread kleiner, noch kein neuer Trade."
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
      "Ein Anbieter kann einen wartenden Auftrag nach den Regeln ändern oder stornieren. Verschwindet dadurch eine Menge aus der sichtbaren Anzeige, bedeutet das nicht automatisch, dass sie gehandelt wurde. Eine Ausführung und eine Stornierung sind unterschiedliche Ereignisse.",
      "Im Lernfall gibt es einen Bid mit zwei Einheiten zu 100 Euro und darunter einen Bid zu 99. Der erste Auftrag wird vor einer Ausführung vollständig storniert. Danach ist der beste Bid 99, ohne dass die zwei Einheiten verkauft wurden. Die Angebotsseite verändert sich, der letzte Trade muss sich dadurch nicht ändern.",
      "Wenn ein Datenausschnitt nur die neue Anzeige zeigt, kann der konkrete Grund offenbleiben. Für eine sichere Einordnung werden passende Ereignis- oder Ausführungsdaten benötigt. Erfinde deshalb weder einen Käufer noch einen Verkäufer allein aus einer verschwundenen Zeile."
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
      "Im vereinfachten Verkaufsangebot liegen zwei Einheiten zu 100 und drei zu 101 Euro. Ein Kauf möchte vier Einheiten unmittelbar gegen diese Angebote handeln und erlaubt beide Preise. Wir unterstellen unveränderte Angebote und die Ausführung zuerst auf der günstigeren Stufe.",
      "Dann werden zwei Einheiten zu 100 und zwei zu 101 gekauft. Der Preisbetrag ist 2 × 100 + 2 × 101 = 402 Euro. Der Durchschnitt beträgt 402 / 4 = 100,50 Euro. Die letzte gehandelte Einheit liegt bei 101; dort bleibt im beschriebenen Angebot noch eine Einheit übrig.",
      "Jede dieser vier Einheiten hat eine kaufende und eine verkaufende Seite. Der höhere letzte Preis entsteht durch die verfügbaren Bedingungen auf den Stufen, nicht durch mehr gekaufte als verkaufte Einheiten. Menge, Durchschnitt und letzter Trade sind drei unterschiedliche Angaben."
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
      "Jetzt liegen auf der Kaufseite zwei Einheiten zu 99 und drei zu 98 Euro. Ein Verkäufer möchte vier Einheiten sofort abgeben und akzeptiert beide Preise. Wir nehmen für den Lernfall unveränderte Angebote an und bedienen zuerst das höhere Kaufgebot.",
      "Es werden zwei Einheiten zu 99 und zwei zu 98 verkauft. Der Preisbetrag beträgt 2 × 99 + 2 × 98 = 394 Euro. Der Durchschnitt liegt bei 98,50. Der letzte Teilpreis ist 98; dort bleibt eine Einheit des beschriebenen Kaufangebots übrig.",
      "Auch hier gibt es nicht mehr verkaufte als gekaufte Einheiten. Die sofort verkaufsbereite Seite nimmt Gebote auf mehreren Preisstufen in Anspruch. Der fallende letzte Preis beschreibt die Reihenfolge der Ausführungen, nicht eine ungleiche Zahl ausgeführter Stücke auf beiden Seiten."
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
      "Zu jeder ausgeführten gekauften Einheit gehört eine verkaufte Einheit. Trotzdem können Käufer und Verkäufer unterschiedlich dringend handeln wollen und verschiedene Preisgrenzen besitzen. Diese Unterschiede betreffen die Bedingungen des nächsten möglichen Austauschs.",
      "In der vorigen Kaufrechnung wurden vier Einheiten gekauft und vier verkauft. Die kaufende Seite akzeptierte zuerst 100, dann 101 Euro. Das letzte Niveau stieg, obwohl die ausgeführten Mengen auf beiden Seiten gleich waren. Die Anzahl beteiligter Personen kann ebenfalls verschieden sein: Ein Auftrag kann mehrere Gegenparteien treffen.",
      "„Kaufdruck“ wird oft als Kurzbeschreibung verwendet. Für eine genaue Erklärung musst du jedoch angeben, welche beobachteten Aufträge, Angebote oder Ausführungen gemeint sind. Die bloße Stückzahl beweist keine zusätzlichen Käufer ohne Verkäufer und keine bestimmte Identität."
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
      "In einer Sammelauktion werden Handelswünsche für einen gemeinsamen Ausführungsablauf gebündelt. Ein Regelwerk bestimmt den Auktionspreis und die Zuordnung der passenden Mengen. Das unterscheidet sich von unseren bisherigen fortlaufenden Beispielen mit nacheinander eintreffenden Aufträgen.",
      "Für die nächsten Lernfälle verwenden wir nur preisbegrenzte Aufträge für identische Einheiten und drei mögliche Preise: 100, 101 und 102 Euro. Unsere ausdrücklich vereinfachte Preisregel wählt den Preis mit der größten zusammenführbaren Menge. Wir betrachten einen Fall mit einem eindeutigen Maximum.",
      "Echte Plätze können zusätzliche Auftragsarten, Preisraster und Regeln zur Auflösung gleich guter Kandidaten verwenden. Unsere Rechnung ersetzt diese Regeln nicht. Sie zeigt nur, warum zuerst die erlaubten Kauf- und Verkaufsbedingungen je Preis gezählt werden müssen."
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
        "label": "Das eindeutige Maximum der zusammenführbaren Menge unter den drei Kandidaten.",
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
      "Unsere Sammelauktion enthält drei Kaufaufträge: zwei Einheiten bis höchstens 102 Euro, drei bis höchstens 101 und vier bis höchstens 100. Bei einem möglichen Preis zählen nur die Mengen, deren Kaufgrenze diesen Preis zulässt.",
      "Bei 100 Euro dürfen alle drei Aufträge kaufen: 2 + 3 + 4 = 9 Einheiten. Bei 101 dürfen die Aufträge mit Grenzen 102 und 101 kaufen: 2 + 3 = 5. Bei 102 bleiben nur die zwei Einheiten mit Grenze 102. Die Kaufmenge fällt also, wenn der geprüfte Preis mehr Grenzen überschreitet.",
      "Diese Mengen sind in diesem Schritt erlaubte Kaufwünsche, noch keine Ausführungen. Welche Menge tatsächlich gehandelt werden kann, hängt zusätzlich von der passenden Verkaufsseite ab. Vergleiche deshalb nicht die Grenze eines Einzelauftrags mit dem ganzen Markt."
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
      "Zur selben Sammelauktion gehören drei Verkaufsaufträge: drei Einheiten ab mindestens 99 Euro, vier ab mindestens 101 und zwei ab mindestens 102. Bei einem Kandidaten zählen die Mengen, deren Mindestforderung höchstens so hoch wie dieser Preis ist.",
      "Bei 100 Euro dürfen nur die drei Einheiten mit Mindestpreis 99 verkaufen. Bei 101 kommen die vier mit Mindestpreis 101 hinzu: 3 + 4 = 7. Bei 102 passen alle drei Aufträge: 3 + 4 + 2 = 9. Ein höherer geprüfter Preis lässt hier also mehr Verkaufsbedingungen zu.",
      "Die Mindestforderung 99 verlangt nicht, dass der Verkäufer ausschließlich zu 99 handelt. Ein Preis von 101 erfüllt diese untere Grenze ebenfalls. Wir zählen weiterhin nur erlaubte Wünsche; die Gegenseite begrenzt die tatsächlich mögliche gemeinsame Menge."
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
      "Bei jedem Kandidaten kann höchstens die kleinere der erlaubten Kauf- und Verkaufsmengen gehandelt werden. Wenn neun gekauft werden dürfen, aber nur drei verkauft, sind höchstens drei passende Einheiten austauschbar. Wunschmengen werden nicht addiert, sondern zusammengeführt.",
      "Bei 100 Euro stehen 9 Kauf- und 3 Verkaufseinheiten gegenüber: möglich sind 3. Bei 101 stehen 5 und 7 gegenüber: möglich sind 5. Bei 102 stehen 2 und 9 gegenüber: möglich sind 2. Nach unserer festgelegten Regel besitzt 101 Euro damit das eindeutige Maximum von fünf Einheiten.",
      "Im Lernmodell werden diese fünf zu einem gemeinsamen Preis von 101 ausgeführt. Der Preisbetrag beträgt 5 × 101 = 505 Euro. Dass auf der Verkaufsseite sieben erlaubt waren, macht daraus nicht sieben Ausführungen: Zwei dieser erlaubten Einheiten finden hier keine passende Kaufmenge."
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
        "label": "101 Euro mit fünf zusammenführbaren Einheiten.",
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
      "Am gewählten Preis 101 dürfen im Beispiel fünf Einheiten gekauft und sieben verkauft werden. Es werden fünf ausgetauscht; zwei erlaubte Verkaufseinheiten bleiben ohne Ausführung. Welche konkreten Verkäufer die fünf erhalten, hängt von den Zuteilungsregeln ab.",
      "Für diesen Lernfall ergänzen wir ausdrücklich: Niedrigere Mindestforderungen auf der Verkaufsseite kommen zuerst. Dann verkaufen die drei Einheiten ab 99 vollständig und zwei der vier Einheiten ab 101. Die beiden anderen Einheiten ab 101 bleiben übrig. Die Aufträge ab 102 sind bei diesem Preis ohnehin nicht erlaubt.",
      "Diese Zuordnung ist eine festgelegte Beispielregel, keine allgemeine Aussage zu allen Börsen. Bei gleichrangigen Aufträgen wären weitere Regeln erforderlich. Ein Preis, der die größte gemeinsame Menge ermöglicht, garantiert daher nicht jedem einzelnen Auftrag eine volle Ausführung."
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
      "Eine vorläufige Anzeige kann berechnen, welcher Preis mit den aktuell bekannten Aufträgen herauskäme. Sie ist ein Zwischenstand. Wenn weitere Aufträge eingehen oder vorhandene sich ändern, können sich mögliche Menge und Preis verändern. Die genaue Anzeige und ihre Regeln hängen vom System ab.",
      "Im bisherigen Lernmodell gewinnt 101 mit fünf Einheiten. Nun kommen vier zusätzliche Kaufseinheiten mit Höchstgrenze 102 hinzu, während alle Verkäufer unverändert bleiben. Die gemeinsame Menge wird bei 100 weiter 3, bei 101 nun 7 und bei 102 nun 6. Das Maximum bleibt 101, aber die mögliche Ausführung steigt von fünf auf sieben.",
      "Weitere andere Änderungen könnten auch den gewählten Preis verändern. Unser konkretes Beispiel zeigt bewusst: Mehr Menge bedeutet nicht zwangsläufig einen anderen Auktionspreis. Erst der endgültige Ablauf und seine bestätigten Geschäfte belegen das Ergebnis."
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
      "Ein ausgeführter Preis zeigt, zu welchen Bedingungen ein Austausch zustande gekommen ist. Ein Werturteil ist dagegen eine Einschätzung, was ein Instrument unter bestimmten Annahmen wirtschaftlich wert sein könnte. Unterschiedliche Personen können verschiedene Horizonte, Verpflichtungen und Erwartungen haben.",
      "Ein Käufer und ein Verkäufer handeln bei 101. Der Käufer kann langfristig anlegen, der Verkäufer Geld für eine Rechnung benötigen. Dass beide handeln, bedeutet nicht, dass beide 101 für denselben objektiv richtigen Zukunftswert halten. Es reicht, dass der Austausch in ihren jeweiligen Zusammenhang passt.",
      "Auch der Preis unserer Sammelauktion ist zunächst ein Ergebnis der bekannten Aufträge und Modellregeln. Daraus folgt kein garantiertes Ziel für spätere Preise. Verwende Preisbeobachtungen als Daten, ohne ihnen unbelegte sichere Werturteile oder Absichten zuzuschreiben."
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
        "label": "Dass ein entsprechender Austausch zustande kam.",
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
      "Neue Informationen können Kauf- und Verkaufsbedingungen verändern. Teilnehmer können neue Angebote stellen, Preise ändern oder Aufträge zurückziehen. Bereits dadurch kann sich die sichtbare Spanne verändern, auch bevor ein neuer Trade zustande kommt.",
      "Unser Lernfall startet bei Bid 99 und Ask 101. Nach einer Nachricht werden diese Angebote ersetzt: Nun steht der Bid bei 102 und der Ask bei 103. Wir legen ausdrücklich fest, dass dieser Wechsel zunächst nur durch Änderungen der Angebote geschieht. Der letzte Trade bleibt bis zu einer neuen Ausführung unverändert.",
      "Die Reaktion beweist nicht, wie viele Menschen die Nachricht gleich interpretieren oder welcher Preis später folgt. Eine Nachricht, eine Angebotsänderung und eine Ausführung sind getrennte Ereignisse. Ihre Reihenfolge hilft, Beobachtungen korrekt zu beschreiben, ersetzt aber keine Zukunftskenntnis."
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
      "Für einen Auktionscheck beschreibst du zuerst das Instrument und die Regeln. Dann notierst du Angebote mit Preis, Menge und Zeitpunkt. Als Nächstes unterscheidest du neue Aufträge, Änderungen, Stornierungen und tatsächliche Trades. Zuletzt rechnest du ausgeführte Menge, Preisbetrag und gegebenenfalls Durchschnitt.",
      "Abschlussfall: Zwei Einheiten stehen zu 100 und drei zu 101 bereit. Ein Kauf von vier akzeptiert beide Stufen bei unveränderten Angeboten. Ergebnis: zwei zu 100 und zwei zu 101, insgesamt vier gehandelt, 402 Preisbetrag, 100,50 Durchschnitt. Der letzte Teilpreis ist 101 und dort bleibt eine angebotene Einheit übrig.",
      "Wenn eine Regel, Zeitangabe oder Gegenmenge fehlt, bleibt die entsprechende Aussage offen. Du kannst jetzt eine Auktion als Ablauf erklären, statt nur „mehr Käufer“ oder „die Linie steigt“ zu sagen. Im nächsten Kapitel „Das Orderbuch verstehen“ vertiefen wir Preisstufen, Mengenanzeigen und den Unterschied zwischen sichtbaren Angeboten und ausgeführten Geschäften."
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
