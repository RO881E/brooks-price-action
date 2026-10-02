import type { Lesson, ChartScenarioId } from '../../types';
const drafts = [
  {
    "title": "Eine Zeitebene legt die Länge der Abschnitte fest",
    "summary": "Kurze und längere Zeitkerzen können dieselben Geschäfte zeigen.",
    "paragraphs": [
      "Nora betrachtet einen Ein-Minuten-Chart und einen Drei-Minuten-Chart derselben erfundenen Aktie. Beide können auf derselben Geschäftsliste beruhen. Der Unterschied liegt zunächst darin, wie lange jeder Zeitabschnitt ist. Diese Abschnittslänge nennen wir hier Zeitebene oder Zeitintervall.",
      "Denke an einen Film, den du einmal Szene für Szene und einmal in größeren Kapiteln zusammenfasst. Die längere Zusammenfassung enthält dieselben Ereignisse, nennt aber weniger Einzelheiten. Auch ein größerer Zeitbar fasst mehrere kürzere Abschnitte zusammen.",
      "Die Zeitebene legt nicht fest, wie lange Nora einen Auftrag hält oder wie groß ihr Risiko ist. Sie beschreibt die Datengruppierung im Chart. Für einen sauberen Vergleich bleiben Produkt, Preisquelle, betrachteter Zeitraum und Abschlusszustand gleich."
    ],
    "columns": [
      {
        "title": "Eine Minute",
        "tone": "neutral",
        "points": [
          "Ein Zeitabschnitt dauert60 Sekunden.",
          "Mehr einzelne Kerzen im gleichen Zeitraum."
        ]
      },
      {
        "title": "Drei Minuten",
        "tone": "positive",
        "points": [
          "Ein Zeitabschnitt dauert180 Sekunden.",
          "Mehrere kürzere Abschnitte in einer Kerze."
        ]
      }
    ],
    "prompt": "Was bedeutet die Zeitebene hier?",
    "answers": [
      {
        "label": "Die Länge der zusammengefassten Zeitabschnitte.",
        "explanation": "Sie beschreibt die Gruppierung der Daten."
      },
      {
        "label": "Die garantierte Haltedauer einer Position.",
        "explanation": "Diese ist eine andere Entscheidung."
      },
      {
        "label": "Die zukünftige Kursrichtung.",
        "explanation": "Die Abschnittslänge liefert keine Prognose."
      }
    ],
    "correct": 0,
    "rule": "Nenne Zeitintervall und gemeinsamen Vergleichszeitraum.",
    "diagram": null
  },
  {
    "title": "Eine gemeinsame Liste als Grundlage sichern",
    "summary": "Achtzehn Geschäfte enthalten insgesamt36 Aktien.",
    "paragraphs": [
      "Wir verwenden einen neuen eigenen Riva-Datensatz. Alle Zeiten sind Sekunden nach09:00; Preise sind Euro je Aktie, Mengen sind Aktien. G1–G6 lauten Zeit/Preis/Menge:5/30,00/2;20/30,20/1;50/30,10/3;60/30,10/1;85/29,90/2;110/30,30/2.",
      "G7–G12 lauten125/30,40/3;150/30,50/1;175/30,20/4;180/30,10/1;200/29,80/1;235/30,00/2. G13–G18 lauten245/30,00/2;275/30,60/3;295/30,40/2;300/30,30/1;330/30,20/2;355/30,70/3.",
      "Die Hauptaufnahme erfolgt bei09:06, also Sekunde360. Wir betrachten diese vollständige erklärte Übungsliste ohne zusätzliche Geschäfte. Es gibt keine Sitzungsgrenze in den sechs Minuten. Für spätere Zwischenstände werden ausdrücklich nur die bis dahin bekannten Meldungen verwendet."
    ],
    "columns": [
      {
        "title": "Originaldaten",
        "tone": "neutral",
        "points": [
          "18 geordnete Geschäftsmeldungen.",
          "Gesamtmenge36 Aktien."
        ]
      },
      {
        "title": "Vergleichsgrundlage",
        "tone": "positive",
        "points": [
          "Gleiche Aktie und gehandelte Preise.",
          "Hauptaufnahme09:06; sechs Minuten."
        ]
      }
    ],
    "prompt": "Wie viele Aktien enthält die erklärte Gesamtliste?",
    "answers": [
      {
        "label": "108 Aktien wegen drei Zeitebenen.",
        "explanation": "Andere Ansichten vervielfachen keine gehandelten Aktien."
      },
      {
        "label": "36 Aktien.",
        "explanation": "Die sechs Minutenmengen6/5/8/4/7/6 ergeben36."
      },
      {
        "label": "18 Aktien.",
        "explanation": "18 ist die Zahl der Meldungen."
      }
    ],
    "correct": 1,
    "rule": "Vergleiche Zeitebenen anhand derselben Originaldaten.",
    "diagram": null
  },
  {
    "title": "Geschäfte an der Intervallgrenze genau zuordnen",
    "summary": "Unsere Fenster schließen den Anfang ein und das Ende aus.",
    "paragraphs": [
      "Unsere Ein-Minuten-Fenster beginnen bei09:00,09:01 und so weiter. Für jedes gilt: Der Anfang gehört dazu, die nächste volle Minute nicht mehr. Minute1 ist also09:00 bis vor09:01.",
      "G4 trifft exakt beiSekunde60 ein, also09:01:00. Es gehört in Minute2, nicht zugleich in Minute1. Ebenso gehört G10 beiSekunde180 in Minute4 und damit in den zweiten Drei-Minuten-Abschnitt.",
      "Diese Regel verhindert Doppelzählung an gemeinsamen Grenzen. Andere Programme können Bars mit Anfangs- oder Endzeit beschriften. Die Beschriftung ist deshalb getrennt von der Zuordnungsregel zu lesen. Nora nennt das tatsächliche Fenster und zählt jede Meldung genau einmal je Ansicht."
    ],
    "columns": [
      {
        "title": "Minute1",
        "tone": "neutral",
        "points": [
          "Fenster[09:00,09:01).",
          "G1–G3; G4 gehört nicht dazu."
        ]
      },
      {
        "title": "Minute2",
        "tone": "positive",
        "points": [
          "Fenster[09:01,09:02).",
          "G4 bei09:01:00 gehört dazu."
        ]
      }
    ],
    "prompt": "Wohin gehört G4 beiSekunde60?",
    "answers": [
      {
        "label": "In beide Minuten.",
        "explanation": "Das würde das Geschäft doppelt zählen."
      },
      {
        "label": "In keine Minute.",
        "explanation": "Der Anfang der neuen Minute gehört ausdrücklich dazu."
      },
      {
        "label": "Ausschließlich in Minute2.",
        "explanation": "Die linke Grenze ist enthalten, die rechte ausgeschlossen."
      }
    ],
    "correct": 2,
    "rule": "Ordne Grenzgeschäfte mit einer klaren Regel genau einem Fenster zu.",
    "diagram": null
  },
  {
    "title": "Die erste Minutenkerze aus drei Geschäften bilden",
    "summary": "OHLC und Menge haben unterschiedliche Rechenregeln.",
    "paragraphs": [
      "Minute1 enthält G1 bei30,00, G2 bei30,20 und G3 bei30,10. Die Eröffnung ist der erste Preis30,00. Das Hoch ist30,20, das Tief30,00 und der Schluss der letzte Preis30,10.",
      "Die Mengen zwei, eins und drei werden addiert. Das ergibt sechs Aktien. Die Körperhöhe beträgt0,10 Euro, die gesamte Spanne0,20 Euro. Ein Körper und eine Spanne sind Preisentfernungen; die sechs Aktien sind eine Menge.",
      "Nora trägt die vier Preise in eine normale Kerze ein. Ihr Körper steigt von30,00 auf30,10. Ein oberer Schatten reicht bis30,20. Der erste Preis ist zugleich das Tief; deshalb gibt es in dieser Minute keinen unteren Schatten."
    ],
    "columns": [
      {
        "title": "Vier Preise",
        "tone": "neutral",
        "points": [
          "O30,00/H30,20/L30,00/C30,10.",
          "Körper0,10; Spanne0,20."
        ]
      },
      {
        "title": "Gehandelte Menge",
        "tone": "positive",
        "points": [
          "2 +1 +3 =6 Aktien.",
          "Keine Verdopplung durch Kauf- und Verkaufsseite."
        ]
      }
    ],
    "prompt": "Welche Menge gehört zu Minute1?",
    "answers": [
      {
        "label": "Sechs Aktien.",
        "explanation": "Alle drei Geschäftsmengen zählen einmal."
      },
      {
        "label": "Drei Aktien.",
        "explanation": "Drei ist die Meldungszahl."
      },
      {
        "label": "0,20 Aktien.",
        "explanation": "0,20 Euro ist die Preisspanne."
      }
    ],
    "correct": 0,
    "rule": "Bilde OHLC aus Preisen und Volumen aus der Summe der Mengen.",
    "diagram": "rc7-minute"
  },
  {
    "title": "Die Minuten2 und3 nebeneinander prüfen",
    "summary": "Ein kurzer Körper kann gegen den größeren Körper gerichtet sein.",
    "paragraphs": [
      "Minute2 enthält G4–G6. Sie hat O30,10, H30,30, L29,90 und C30,30. Ihre Menge beträgt1 +2 +2 =5 Aktien. Der Körper steigt um0,20 Euro.",
      "Minute3 enthält G7–G9. Sie hat O30,40, H30,50, L30,20 und C30,20. Die Mengen3 +1 +4 ergeben8 Aktien. Ihr Körper fällt um0,20 Euro, obwohl das Hoch über dem Hoch der vorigen Minute liegt.",
      "Das ist eine Beschreibung von Körpern und Extremen, keine vollständige Trenddiagnose. Die drei ersten Minuten können später in einer einzigen Drei-Minuten-Kerze erscheinen. Nora hält die kleineren Kennwerte fest, um zu sehen, welche Einzelheiten die größere Zusammenfassung nicht mehr nennt."
    ],
    "columns": [
      {
        "title": "Minute2",
        "tone": "neutral",
        "points": [
          "O30,10/H30,30/L29,90/C30,30.",
          "Fünf Aktien; Körper steigt0,20."
        ]
      },
      {
        "title": "Minute3",
        "tone": "positive",
        "points": [
          "O30,40/H30,50/L30,20/C30,20.",
          "Acht Aktien; Körper fällt0,20."
        ]
      }
    ],
    "prompt": "Welche Körperrichtung hat Minute3?",
    "answers": [
      {
        "label": "Keine Bewegung, weil später zusammengefasst wird.",
        "explanation": "Zusammenfassung verändert die ursprünglichen Preise nicht."
      },
      {
        "label": "Abwärts von30,40 auf30,20.",
        "explanation": "Das Hoch30,50 ändert den O-C-Vergleich nicht."
      },
      {
        "label": "Aufwärts, weil ihr Hoch höher liegt.",
        "explanation": "Ein höheres Hoch und Körperrichtung sind verschiedene Vergleiche."
      }
    ],
    "correct": 1,
    "rule": "Nenne die konkreten Bezugspunkte einer Richtungsangabe.",
    "diagram": "rc7-minute"
  },
  {
    "title": "Die ersten drei Minuten zu einer Kerze zusammenfassen",
    "summary": "Erstes O, höchstes H, tiefstes L und letztes C bleiben maßgeblich.",
    "paragraphs": [
      "Für das Fenster09:00 bis vor09:03 nimmt Nora die Eröffnung der ersten Minute:30,00. Das größte Hoch der drei Minuten ist30,50. Das kleinste Tief ist29,90. Der Schluss stammt aus der letzten zugehörigen Minute und beträgt30,20.",
      "Die Mengen werden addiert:6 +5 +8 =19 Aktien. Der Drei-Minuten-Bar hat damit O30,00/H30,50/L29,90/C30,20. Seine Spanne beträgt0,60 Euro, seine Körperhöhe0,20 Euro.",
      "Dasselbe Ergebnis erhält Nora direkt aus G1–G9. Das gilt hier, weil die vollständigen Minutenfenster ohne Überschneidung in das größere Fenster passen und dieselbe Preisquelle nutzen. Diese Zusammenfassung nennen wir Zeitaggregation. Sie ist kein Durchschnitt der vier Preisfelder."
    ],
    "columns": [
      {
        "title": "Aus Minuten1–3",
        "tone": "neutral",
        "points": [
          "O der ersten; Maximum aller H.",
          "Minimum aller L; C der letzten."
        ]
      },
      {
        "title": "Ergebnis09:00–09:03",
        "tone": "positive",
        "points": [
          "O30,00/H30,50/L29,90/C30,20.",
          "Menge19; Spanne0,60; Körper0,20."
        ]
      }
    ],
    "prompt": "Welches Tief hat die erste Drei-Minuten-Kerze?",
    "answers": [
      {
        "label": "30,20 Euro.",
        "explanation": "30,20 ist der letzte Schluss und das Tief der dritten Minute."
      },
      {
        "label": "Der Durchschnitt der drei Tiefs.",
        "explanation": "Ein OHLC-Tief wird durch das Minimum bestimmt."
      },
      {
        "label": "29,90 Euro.",
        "explanation": "Das ist das kleinste der drei Minutentiefs."
      }
    ],
    "correct": 2,
    "rule": "Aggregiere O/H/L/C mit erstem, höchstem, tiefstem und letztem Preis.",
    "diagram": "rc7-three"
  },
  {
    "title": "Hochs und Schlüsse nicht einfach mitteln",
    "summary": "Ein Mittelwert würde andere Daten beschreiben.",
    "paragraphs": [
      "Die Hochs der ersten drei Minuten sind30,20,30,30 und30,50. Ihr arithmetischer Mittelwert liegt bei ungefähr30,33. Das tatsächliche Hoch des gesamten Drei-Minuten-Fensters bleibt aber30,50.",
      "Auch der größere Schluss ist nicht der Durchschnitt der kleinen Schlüsse. Er ist der letzte Geschäftspreis des größeren Abschnitts: hier30,20 aus G9. Ein Mittel aus30,10,30,30 und30,20 wäre zufällig ebenfalls30,20. Die zufällige Gleichheit macht die Mittelwertregel nicht richtig.",
      "Nora prüft deshalb die Definition statt nur einen passenden Zahlenfall. Ein Mittelwert kann als eigene Kennzahl sinnvoll erklärt werden, ist aber kein Ersatz für normale OHLC-Aggregation. Größere Zeitkerzen enthalten weiterhin echte Abschnittsextreme und den letzten zugehörigen Geschäftspreis."
    ],
    "columns": [
      {
        "title": "Richtiges H",
        "tone": "neutral",
        "points": [
          "Maximum:30,50.",
          "Mindestens ein zugehöriger Preis erreichte es."
        ]
      },
      {
        "title": "Andere Kennzahl",
        "tone": "positive",
        "points": [
          "Mittel der Hochs ungefähr30,33.",
          "Kein Hoch des gemeinsamen Fensters."
        ]
      }
    ],
    "prompt": "Welche Rechnung bestimmt das größere Hoch?",
    "answers": [
      {
        "label": "Das Maximum der zugehörigen Hochs.",
        "explanation": "Das größte Hoch ist zugleich das gesamte Abschnittshoch."
      },
      {
        "label": "Immer den Durchschnitt der Hochs.",
        "explanation": "Ein Mittel liegt meist unter dem tatsächlichen Maximum."
      },
      {
        "label": "Immer das Hoch der letzten Minute.",
        "explanation": "Das höchste Extrem kann früher auftreten."
      }
    ],
    "correct": 0,
    "rule": "Verwende die passende Definition, auch wenn eine falsche Rechnung zufällig denselben Wert liefert.",
    "diagram": null
  },
  {
    "title": "Den zweiten Drei-Minuten-Abschnitt berechnen",
    "summary": "Auch ein größerer Körper kann kleinere Rückgänge enthalten.",
    "paragraphs": [
      "Minute4 hat O30,10/H30,10/L29,80/C30,00 und vier Aktien. Minute5 hat O30,00/H30,60/L30,00/C30,40 und sieben Aktien. Minute6 hat O30,30/H30,70/L30,20/C30,70 und sechs Aktien.",
      "Das gemeinsame Fenster09:03 bis vor09:06 hat O30,10 aus Minute4, H30,70 aus Minute6, L29,80 aus Minute4 und C30,70 aus Minute6. Die Menge beträgt4 +7 +6 =17 Aktien.",
      "Der größere Körper steigt um0,60 Euro; seine Spanne beträgt0,90. Trotzdem enthält er die fallende Minute4 und einen Rückgang innerhalb Minute6. Eine steigende größere Kerze bedeutet daher nicht, dass jeder Einzelpreis oder jede kleinere Kerze gestiegen ist."
    ],
    "columns": [
      {
        "title": "Minuten4–6",
        "tone": "neutral",
        "points": [
          "Mengen4 /7 /6 Aktien.",
          "Die vierte Minute hat einen fallenden Körper."
        ]
      },
      {
        "title": "Zusammenfassung",
        "tone": "positive",
        "points": [
          "O30,10/H30,70/L29,80/C30,70.",
          "17 Aktien; Körper steigt0,60."
        ]
      }
    ],
    "prompt": "Welche Menge hat der zweite Drei-Minuten-Bar?",
    "answers": [
      {
        "label": "19 Aktien.",
        "explanation": "Das ist die Menge des ersten Drei-Minuten-Bars."
      },
      {
        "label": "17 Aktien.",
        "explanation": "Vier plus sieben plus sechs ergibt siebzehn."
      },
      {
        "label": "36 Aktien.",
        "explanation": "Das ist die Menge aller sechs Minuten."
      }
    ],
    "correct": 1,
    "rule": "Prüfe jeden größeren Abschnitt anhand seiner tatsächlich zugehörigen kleineren Fenster.",
    "diagram": "rc7-three"
  },
  {
    "title": "Alle sechs Minuten in einem Abschnitt prüfen",
    "summary": "Eine längere Zusammenfassung behält die gesamte Menge genau einmal.",
    "paragraphs": [
      "Nora fasst nun09:00 bis vor09:06 in einem Sechs-Minuten-Bar zusammen. Der erste Preis ist30,00. Das höchste Hoch ist30,70, das tiefste Tief29,80 und der letzte Preis30,70.",
      "Die Menge ergibt19 +17 =36 Aktien. Der Körper steigt um0,70 Euro, die gesamte Spanne beträgt0,90. Dass Schluss und Hoch hier gleich sind, ist eine Eigenschaft dieses Datensatzes und keine allgemeine Regel für Sechs-Minuten-Bars.",
      "Sie könnte dasselbe Ergebnis direkt aus den18 Geschäften oder aus den sechs vollständigen Minutenbars bilden. Die längere Zusammenfassung nennt aber nicht mehr, in welcher kleineren Minute die einzelnen Rückgänge lagen. Die unveränderte Menge und die verlorenen Details sind getrennte Eigenschaften."
    ],
    "columns": [
      {
        "title": "Sechs-Minuten-OHLC",
        "tone": "neutral",
        "points": [
          "O30,00/H30,70/L29,80/C30,70.",
          "Körper0,70; Spanne0,90."
        ]
      },
      {
        "title": "Gleiche Datenmenge",
        "tone": "positive",
        "points": [
          "18 Originalgeschäfte.",
          "36 Aktien in jeder vollständigen Ansicht."
        ]
      }
    ],
    "prompt": "Welche Menge hat der Sechs-Minuten-Bar?",
    "answers": [
      {
        "label": "72 Aktien.",
        "explanation": "Mehrere Darstellungen verdoppeln die Aktien nicht."
      },
      {
        "label": "Sechs Aktien.",
        "explanation": "Sechs ist hier die Abschnittslänge in Minuten."
      },
      {
        "label": "36 Aktien.",
        "explanation": "Die beiden Drei-Minuten-Mengen19 und17 werden einmal addiert."
      }
    ],
    "correct": 2,
    "rule": "Erhalte die gesamte Menge innerhalb jeder Ansicht, ohne Ansichten miteinander zu addieren.",
    "diagram": null
  },
  {
    "title": "Mehrere Ansichten nicht als zusätzliche Geschäfte zählen",
    "summary": "Sechs plus zwei plus eine Kerze sind keine neun unabhängigen Datenreihen.",
    "paragraphs": [
      "Der gemeinsame Zeitraum erzeugt sechs Ein-Minuten-Kerzen, zwei Drei-Minuten-Kerzen und eine Sechs-Minuten-Kerze. Nora könnte neun sichtbare Kerzen zählen, wenn sie alle drei Ansichten öffnet. Diese Kerzen sind aber nicht neun getrennte Handelsereignisse.",
      "Jede Ansicht enthält dieselben36 Aktien. Wer die Mengen über alle drei Ansichten addiert, käme fälschlich auf108. Die Geschäfte wurden nicht dreimal ausgeführt; sie wurden nur in drei Gruppierungen angezeigt.",
      "Auch eine Meldung wie G9 gehört in jeder Ansicht zu genau einem passenden Bar. Die unterschiedlichen Bars sind verschiedene Zusammenfassungen desselben Geschäfts. Nora verwendet mehrere Ansichten zum Verständnis der Details, ohne daraus unabhängige zusätzliche Beobachtungen zu erfinden."
    ],
    "columns": [
      {
        "title": "Sichtbare Kerzen",
        "tone": "neutral",
        "points": [
          "6 +2 +1 =9 Kerzen über drei Ansichten.",
          "Unterschiedliche Gruppierungen derselben Liste."
        ]
      },
      {
        "title": "Originalumfang",
        "tone": "positive",
        "points": [
          "18 Geschäfte,36 Aktien.",
          "Keine Verdreifachung der Daten."
        ]
      }
    ],
    "prompt": "Darf Nora die drei Ansichtsmengen zu108 Aktien addieren?",
    "answers": [
      {
        "label": "Nein, damit würde sie dieselben Geschäfte dreifach zählen.",
        "explanation": "Die Gesamtmenge36 gilt je Ansicht für denselben Zeitraum."
      },
      {
        "label": "Ja, jede Zeitebene schafft neue Geschäfte.",
        "explanation": "Eine Zeichnung führt keine Geschäfte aus."
      },
      {
        "label": "Ja, weil die Kerzen verschieden aussehen.",
        "explanation": "Andere Formen ändern den Originalumfang nicht."
      }
    ],
    "correct": 0,
    "rule": "Zähle denselben Datensatz nicht über mehrere Zeitebenen mehrfach.",
    "diagram": null
  },
  {
    "title": "Eine fallende kleine Kerze in einer steigenden großen Kerze erkennen",
    "summary": "Die Aussagen beziehen sich auf unterschiedliche Zeitfenster.",
    "paragraphs": [
      "Minute3 eröffnet bei30,40 und schließt bei30,20. Ihr Körper fällt um0,20 Euro. Die erste Drei-Minuten-Kerze eröffnet aber bereits bei30,00 und endet ebenfalls bei30,20. Ihr Körper steigt um0,20.",
      "Beide Beschreibungen stimmen. Die kleinere Kerze misst nur09:02 bis vor09:03. Die größere misst09:00 bis vor09:03. Die Eröffnungen gehören zu verschiedenen Zeitpunkten, obwohl der letzte Schluss gemeinsam ist.",
      "Das ist kein Widerspruch und kein Beweis für eine bestimmte kommende Richtung. Nora sagt deshalb „fallender Minutenkörper innerhalb eines steigenden Drei-Minuten-Körpers“ statt „der Chart widerspricht sich“. Eine einzelne Körperrichtung bezeichnet noch keinen sicher festgestellten langfristigen Trend."
    ],
    "columns": [
      {
        "title": "Minute3",
        "tone": "neutral",
        "points": [
          "O30,40 →C30,20.",
          "Körperänderung−0,20."
        ]
      },
      {
        "title": "Erste drei Minuten",
        "tone": "positive",
        "points": [
          "O30,00 →C30,20.",
          "Körperänderung+0,20."
        ]
      }
    ],
    "prompt": "Welche Aussage ist korrekt?",
    "answers": [
      {
        "label": "Eine der beiden Originallisten muss falsch sein.",
        "explanation": "Beide ergeben sich aus derselben erklärten Liste."
      },
      {
        "label": "Minute3 fällt im Körper, die erste Drei-Minuten-Kerze steigt im Körper.",
        "explanation": "Die Fenster und Eröffnungen unterscheiden sich."
      },
      {
        "label": "Beide müssen dieselbe Körperrichtung haben.",
        "explanation": "Zusammenfassung kann unterschiedliche Bezugspunkte erzeugen."
      }
    ],
    "correct": 1,
    "rule": "Nenne bei Richtungsangaben immer das betrachtete Zeitfenster.",
    "diagram": null
  },
  {
    "title": "Körperänderung und Schlussänderung auch hier trennen",
    "summary": "Ein Zeitintervall ersetzt nicht die Angabe der Bezugspunkte.",
    "paragraphs": [
      "Minute6 eröffnet bei30,30 und schließt bei30,70. Ihr Körper steigt um0,40 Euro. Der Schluss der vorherigen Minute5 beträgt aber30,40. Von Schluss zu Schluss beträgt der Anstieg nur0,30 Euro.",
      "Der erste Preis der Minute6 liegt0,10 unter dem vorherigen Schluss. Dieser Abstand erklärt, warum Körperanstieg und Schlussanstieg verschieden sind. Eine andere Zeitebene macht aus beiden Rechnungen keine identische Größe.",
      "Nora verwendet präzise Formulierungen: „O zu C“ bezeichnet den eigenen Körper; „vorheriges C zu aktuellem C“ einen Vergleich benachbarter Abschnitte. Erst danach beurteilt sie, was ein Chartlabel oder eine Farbregel meint. Ein ungenanntes „plus0,40“ wäre ohne Bezugspunkt unvollständig."
    ],
    "columns": [
      {
        "title": "Körper Minute6",
        "tone": "neutral",
        "points": [
          "30,70 −30,30 =+0,40.",
          "Vergleich innerhalb eines Fensters."
        ]
      },
      {
        "title": "Schluss zu Schluss",
        "tone": "positive",
        "points": [
          "30,70 −30,40 =+0,30.",
          "Vergleich Minuten5 und6."
        ]
      }
    ],
    "prompt": "Wie groß ist der Schlussanstieg von Minute5 zu Minute6?",
    "answers": [
      {
        "label": "0,40 Euro.",
        "explanation": "Das ist die eigene Körperhöhe der sechsten Minute."
      },
      {
        "label": "0,10 Euro.",
        "explanation": "Das ist der Betrag der Eröffnungslücke nach unten."
      },
      {
        "label": "0,30 Euro.",
        "explanation": "30,70 minus30,40 ergibt0,30."
      }
    ],
    "correct": 2,
    "rule": "Erkläre Preisänderungen mit beiden Bezugspunkten.",
    "diagram": null
  },
  {
    "title": "Welche Details im größeren Bar verschwinden",
    "summary": "Extreme bleiben erhalten, ihre genaue Zwischenfolge nicht.",
    "paragraphs": [
      "Die erste Drei-Minuten-Kerze bewahrt das Hoch30,50 und das Tief29,90. Sie zeigt aber nicht als eigenes Feld, dass das Tief in Minute2 und das Hoch in Minute3 auftrat. Auch die fallende dritte Minutenkerze ist im größeren Körper nicht separat sichtbar.",
      "Die kleineren OHLC-Bars nennen bereits mehr zeitliche Zuordnung. Unsere ursprünglichen18 Geschäfte liefern noch feinere Information: Sie nennen die einzelnen Preise, Reihenfolge, Zeitstempel und Mengen. Eine normale Zeitkerze enthält dagegen nur ihre zusammengefassten Kennwerte.",
      "Dies nennen wir Informationsverlust durch Zusammenfassung. Verlust heißt hier nicht, dass die Rechnung fehlerhaft ist. Sie lässt bewusst Details weg. Nora wählt deshalb die Auflösung passend zu ihrer Frage und behält für genaue Rekonstruktionen ausreichend feine Ausgangsdaten."
    ],
    "columns": [
      {
        "title": "Größerer Bar bewahrt",
        "tone": "neutral",
        "points": [
          "Gesamthoch und Gesamttief.",
          "Ersten und letzten Preis sowie Gesamtmenge."
        ]
      },
      {
        "title": "Größerer Bar lässt weg",
        "tone": "positive",
        "points": [
          "Zu welcher kleineren Minute jedes Extrem gehört.",
          "Alle einzelnen Zwischenpreise und Mengenverteilung."
        ]
      }
    ],
    "prompt": "Was fehlt im größeren OHLC-Bar?",
    "answers": [
      {
        "label": "Die vollständige Zwischenfolge der Geschäfte.",
        "explanation": "OHLC fasst zusammen und nennt nicht alle Einzelereignisse."
      },
      {
        "label": "Immer das höchste Hoch.",
        "explanation": "Das korrekte Maximum bleibt erhalten."
      },
      {
        "label": "Immer die gesamte Menge.",
        "explanation": "Bei unseren Daten bleibt die addierte Menge erhalten."
      }
    ],
    "correct": 0,
    "rule": "Prüfe, welche Information deine Zusammenfassung bewahrt und welche sie weglässt.",
    "diagram": null
  },
  {
    "title": "Aus einer großen Kerze keine kleine Folge erfinden",
    "summary": "Die Aggregation lässt sich ohne Zusatzdaten nicht eindeutig umkehren.",
    "paragraphs": [
      "Ein einzelner Sechs-Minuten-Bar nennt O30,00/H30,70/L29,80/C30,70. Daraus kann Nora die sechs ursprünglichen Minutenkerzen nicht eindeutig wiederherstellen. Sie kennt nicht die Eröffnungen und Schlüsse aller Teilfenster.",
      "Zum Beispiel passen beide Preisfolgen30,00 →30,70 →29,80 →30,70 und30,00 →29,80 →30,70 →30,70 zu diesen vier Kennwerten. Ihre Hoch-Tief-Reihenfolge unterscheidet sich. Die vier Werte allein bestimmen außerdem keine genauen Ereigniszeiten.",
      "Diese beiden Folgen sind ausdrücklich getrennte Möglichkeiten, nicht unsere vollständige Riva-Liste. Wer sie als Rekonstruktion verwendet, muss die zusätzlichen Annahmen benennen. Ohne feinere Daten gibt es keinen Beleg, dass genau eine dieser Folgen tatsächlich vorlag."
    ],
    "columns": [
      {
        "title": "Möglichkeit A",
        "tone": "neutral",
        "points": [
          "30,00 →30,70 →29,80 →30,70.",
          "Hoch kommt vor Tief."
        ]
      },
      {
        "title": "Möglichkeit B",
        "tone": "positive",
        "points": [
          "30,00 →29,80 →30,70 →30,70.",
          "Tief kommt vor Hoch."
        ]
      }
    ],
    "prompt": "Kann Nora die sechs Minutenkerzen allein aus dem Sechs-Minuten-OHLC eindeutig rekonstruieren?",
    "answers": [
      {
        "label": "Ja, wenn sie einfach sechs gleiche Körper zeichnet.",
        "explanation": "Das wäre eine unbelegte zusätzliche Annahme."
      },
      {
        "label": "Nein, dafür fehlen Teilfensterwerte und Reihenfolge.",
        "explanation": "Viele feinere Verläufe können zu denselben vier Kennwerten passen."
      },
      {
        "label": "Ja, vier Kennwerte legen jede Minute fest.",
        "explanation": "Vier Werte enthalten nicht die gesamte Zwischenfolge."
      }
    ],
    "correct": 1,
    "rule": "Kennzeichne angenommene Teilverläufe und verwechsle sie nicht mit belegten Daten.",
    "diagram": null
  },
  {
    "title": "Bildausschnitt und Zeitebene getrennt verändern",
    "summary": "Vergrößern verändert nicht automatisch die Datenfenster.",
    "paragraphs": [
      "Nora vergrößert den Ein-Minuten-Chart. Die vorhandenen Kerzen werden größer dargestellt und vielleicht passen weniger davon gleichzeitig auf den Bildschirm. Ihre Zeitfenster und OHLC-Werte bleiben dabei dieselben.",
      "Beim Wechsel von einer auf drei Minuten werden dagegen neue Gruppengrenzen verwendet. Aus sechs Kerzen werden im gemeinsamen Zeitraum zwei. Das verändert die Zusammenfassung, nicht nur die Größe der gezeichneten Körper.",
      "Ein Bildausschnitt bezeichnet den sichtbaren Teil einer vorhandenen Darstellung. Die Zeitebene bezeichnet die Dauer ihrer Datenfenster. Ein Programm kann beide Einstellungen getrennt oder gemeinsam bedienen. Nora prüft daher das Intervalllabel und die Zeitgrenzen, statt nur die Breite der Kerzen anzusehen."
    ],
    "columns": [
      {
        "title": "Nur Vergrößerung",
        "tone": "neutral",
        "points": [
          "Gleiche Ein-Minuten-Fenster.",
          "Gleiche Werte, anderer sichtbarer Ausschnitt."
        ]
      },
      {
        "title": "Wechsel der Zeitebene",
        "tone": "positive",
        "points": [
          "Drei-Minuten-Fenster statt einer Minute.",
          "Neue Gruppierung und weniger Kerzen im gleichen Zeitraum."
        ]
      }
    ],
    "prompt": "Was verändert beim bloßen Vergrößern die OHLC-Daten?",
    "answers": [
      {
        "label": "Die Menge steigt mit der Körperbreite.",
        "explanation": "Eine größere Zeichnung schafft keine Aktien."
      },
      {
        "label": "Jede Kerze wird automatisch ein Drei-Minuten-Bar.",
        "explanation": "Das wäre ein gesonderter Intervallwechsel."
      },
      {
        "label": "Nichts, solange Intervall und Eingaben gleich bleiben.",
        "explanation": "Nur die Darstellung oder der sichtbare Ausschnitt ändert sich."
      }
    ],
    "correct": 2,
    "rule": "Trenne Bildvergrößerung von einer Änderung der Datengruppierung.",
    "diagram": null
  },
  {
    "title": "Gleich lange Fenster können anders ausgerichtet sein",
    "summary": "Auch der Beginn des größeren Fensters muss übereinstimmen.",
    "paragraphs": [
      "Unser erstes Drei-Minuten-Fenster beginnt bei09:00 und endet vor09:03. Eine getrennte Variante betrachtet stattdessen09:01 bis vor09:04. Beide Fenster sind drei Minuten lang, enthalten aber andere Geschäfte.",
      "Das verschobene Fenster umfasst Minuten2,3 und4. Es hat O30,10, H30,50, L29,80 und C30,00. Seine Menge beträgt5 +8 +4 =17 Aktien. Der Hauptfall09:00–09:03 hat dagegen O30,00, L29,90, C30,20 und19 Aktien.",
      "Diese Fensterausrichtung ist Teil der Gruppierungsregel. Eine andere Sitzungsstartzeit oder ein anderer Zeitanker kann andere Grenzen erzeugen. Nora erklärt die Variante als eigenen Ausschnitt und prüft bei Chartvergleichen sowohl Länge als auch tatsächlichen Anfang der Fenster."
    ],
    "columns": [
      {
        "title": "Hauptfenster09:00–09:03",
        "tone": "neutral",
        "points": [
          "Minuten1–3;19 Aktien.",
          "O30,00/H30,50/L29,90/C30,20."
        ]
      },
      {
        "title": "Verschoben09:01–09:04",
        "tone": "positive",
        "points": [
          "Minuten2–4;17 Aktien.",
          "O30,10/H30,50/L29,80/C30,00."
        ]
      }
    ],
    "prompt": "Welche Menge hat das verschobene Fenster09:01–09:04?",
    "answers": [
      {
        "label": "17 Aktien.",
        "explanation": "Minuten2,3,4 liefern5 plus8 plus4."
      },
      {
        "label": "19 Aktien.",
        "explanation": "19 gehört zum Hauptfenster09:00–09:03."
      },
      {
        "label": "Immer dieselbe Menge wie jedes Drei-Minuten-Fenster.",
        "explanation": "Gleiche Länge bedeutet nicht gleiche zugehörige Geschäfte."
      }
    ],
    "correct": 0,
    "rule": "Prüfe Fensterlänge und Fensterausrichtung gemeinsam.",
    "diagram": null
  },
  {
    "title": "Teilfenster dürfen eine Zielgrenze nicht überschreiten",
    "summary": "Nicht jede kleine OHLC-Reihe lässt sich passend neu gruppieren.",
    "paragraphs": [
      "Ein-Minuten-Fenster passen bei unserer Ausrichtung vollständig in Drei-Minuten-Fenster. Anders sieht es bei bereits gebildeten Zwei-Minuten-Bars aus: Das Fenster09:02 bis vor09:04 reicht über die Zielgrenze09:03 hinweg.",
      "Dieser Zwei-Minuten-Bar enthält Minuten3 und4. Sein einzelner OHLC-Satz verrät nicht mehr alle benötigten Werte auf beiden Seiten der Zielgrenze. Nora kann ihn weder vollständig dem ersten noch dem zweiten Drei-Minuten-Fenster zuordnen, ohne Daten falsch zu verteilen.",
      "Für eine genaue Neugruppierung braucht sie deshalb ausreichend feine Daten oder Teilfenster, die vollständig in die Zielgrenzen passen. Einfach abzurunden, zu halbieren oder beide Seiten identisch zu kopieren wäre keine belegte OHLC-Rekonstruktion."
    ],
    "columns": [
      {
        "title": "Passende Teilfenster",
        "tone": "neutral",
        "points": [
          "Eine Minute, gleiche Ausrichtung.",
          "Jedes Teilfenster liegt ganz in einem Drei-Minuten-Fenster."
        ]
      },
      {
        "title": "Übergreifendes Teilfenster",
        "tone": "positive",
        "points": [
          "Zwei-Minuten-Bar09:02–09:04.",
          "Schneidet die Zielgrenze09:03."
        ]
      }
    ],
    "prompt": "Was braucht Nora beim übergreifenden Zwei-Minuten-Bar?",
    "answers": [
      {
        "label": "Sie zählt den ganzen Bar in beiden Zielgruppen.",
        "explanation": "Das würde Preise falsch zuordnen und Mengen doppelt zählen."
      },
      {
        "label": "Feinere Daten für eine genaue Aufteilung.",
        "explanation": "Ein zusammengefasster OHLC-Satz enthält keine eindeutigen Daten für beide Seiten."
      },
      {
        "label": "Sie teilt jedes Preisfeld durch zwei.",
        "explanation": "Halbierte Preise beschreiben keine tatsächlichen Teilfenster."
      }
    ],
    "correct": 1,
    "rule": "Aggregiere Teilbars nur, wenn ihre Fenster vollständig in die Zielgruppen passen.",
    "diagram": null
  },
  {
    "title": "Eine Datenlücke nicht mit einer leeren Handelsminute verwechseln",
    "summary": "Genaue Aggregation setzt eine passende vollständige Datenbasis voraus.",
    "paragraphs": [
      "Angenommen, im Download fehlen alle Meldungen der Minute4. Nora weiß dann nicht allein aus der leeren Stelle, ob tatsächlich nichts gehandelt wurde oder ob Daten verloren gingen. Im vollständigen Riva-Fall weiß sie, dass dort vier Aktien und das Tief29,80 vorkommen.",
      "Wer die übrigen Minuten ohne Prüfung zusammenfasst, könnte diesen tiefsten Preis übersehen und eine zu geringe Menge erhalten. Dass ein Zeitfenster auf der Uhr beendet ist, beweist nicht, dass alle seine Marktdaten angekommen sind.",
      "Ein nachweislich leerer Abschnitt und ein unbekannter Abschnitt brauchen verschiedene Aussagen. Unser Modell ergänzt für einen Abschnitt ohne vorliegende Meldung keine erfundene OHLC-Kerze. Nora prüft Abdeckung und Quelle, bevor sie die Zusammenfassung als vollständigen Marktverlauf bezeichnet."
    ],
    "columns": [
      {
        "title": "Nachweislich keine Geschäfte",
        "tone": "neutral",
        "points": [
          "Keine Original-OHLC aus Geschäften vorhanden.",
          "Keine neue Kerze aus erfundenen Preisen."
        ]
      },
      {
        "title": "Unbekannte Datenlücke",
        "tone": "positive",
        "points": [
          "Geschäfte könnten fehlen.",
          "Hoch, Tief und Gesamtmenge möglicherweise unvollständig."
        ]
      }
    ],
    "prompt": "Was beweist eine leere Stelle im Download allein?",
    "answers": [
      {
        "label": "Sicher null gehandelte Aktien.",
        "explanation": "Fehlende Daten belegen keine Nullmenge."
      },
      {
        "label": "Sicher unveränderte OHLC zum Vorgänger.",
        "explanation": "Diese Werte wären ohne Meldungen erfunden."
      },
      {
        "label": "Keine vollständige Handelsruhe; die Ursache muss geprüft werden.",
        "explanation": "Die Stelle kann leer oder unvollständig sein."
      }
    ],
    "correct": 2,
    "rule": "Prüfe Datenabdeckung, bevor du aggregierte Werte als vollständig liest.",
    "diagram": null
  },
  {
    "title": "Einen gemeinsamen laufenden Zwischenstand bilden",
    "summary": "Alle Ansichten müssen auf denselben bekannten Zeitpunkt begrenzt sein.",
    "paragraphs": [
      "Jetzt stoppen wir die Aufnahme früher, bei09:04:35 beziehungsweise Sekunde275. Es sind nur G1–G14 bekannt. G14 bei30,60 zählt bereits dazu; G15 beiSekunde295 und alle späteren Geschäfte sind noch unbekannt.",
      "Der erste Drei-Minuten-Bar ist abgeschlossen. Der zweite läuft noch und enthält bisher Minute4 sowie G13 und G14 aus Minute5. Seine Werte sind O30,10/H30,60/L29,80/aktueller letzter Preis30,60. Seine bisherige Menge beträgt4 +2 +3 =9 Aktien.",
      "Insgesamt wurden bis dahin19 +9 =28 Aktien gemeldet. Das spätere Hoch30,70 und der spätere endgültige Schluss30,70 gehören noch nicht zur damaligen Information. Nora nennt daher den Aufnahmezeitpunkt und sagt beim laufenden Bar „aktueller letzter Preis“ statt endgültiger Schluss."
    ],
    "columns": [
      {
        "title": "Bekannt bei09:04:35",
        "tone": "neutral",
        "points": [
          "G1–G14;28 Aktien insgesamt.",
          "Zweiter Drei-Minuten-Bar bisher9 Aktien."
        ]
      },
      {
        "title": "Noch unbekannt",
        "tone": "positive",
        "points": [
          "G15–G18.",
          "Späteres Hoch und endgültiger Schluss."
        ]
      }
    ],
    "prompt": "Welche Menge enthält der zweite laufende Drei-Minuten-Bar bei09:04:35?",
    "answers": [
      {
        "label": "Neun Aktien.",
        "explanation": "Minute4 liefert vier, G13 zwei und G14 drei."
      },
      {
        "label": "17 Aktien bereits sicher.",
        "explanation": "17 ist die spätere endgültige Menge einschließlich zukünftiger Geschäfte."
      },
      {
        "label": "Null Aktien, weil er noch offen ist.",
        "explanation": "Ein offener Bar kann bereits Geschäfte und Volumen enthalten."
      }
    ],
    "correct": 0,
    "rule": "Begrenze alle Zeitebenen auf denselben bekannten Aufnahmezeitpunkt.",
    "diagram": "rc7-live"
  },
  {
    "title": "Eine große Kerze kann noch offen sein, obwohl kleine schon fertig sind",
    "summary": "Abschlusszustand hängt von den eigenen Zeitgrenzen ab.",
    "paragraphs": [
      "Bei09:04:35 sind die Minuten1–4 zeitlich beendet. Minute5 ist noch offen. Von den Drei-Minuten-Fenstern ist nur09:00–09:03 abgeschlossen;09:03–09:06 läuft noch. Der Sechs-Minuten-Bar09:00–09:06 läuft ebenfalls.",
      "Die fertige Minute4 liefert feste Werte für den bisherigen Datensatz, macht aber den ganzen zweiten Drei-Minuten-Bar nicht fertig. Bis09:06 können weitere zugehörige Geschäfte seinen letzten Preis, das Hoch, das Tief und die Menge verändern.",
      "Nora trennt deshalb den Status jeder Ansicht. Ein grüner Haken bei einem abgeschlossenen Minutenbar darf nicht automatisch als Abschluss seines größeren Fensters gelten. Für Aussagen über einen endgültigen größeren Schluss wartet sie auf dessen eigene Zeitgrenze und verwendet nur die dann bekannte Datenbasis."
    ],
    "columns": [
      {
        "title": "Bei09:04:35 fertig",
        "tone": "neutral",
        "points": [
          "Minuten1–4.",
          "Erstes Drei-Minuten-Fenster."
        ]
      },
      {
        "title": "Bei09:04:35 noch offen",
        "tone": "positive",
        "points": [
          "Minute5 und zweites Drei-Minuten-Fenster.",
          "Gesamtes Sechs-Minuten-Fenster."
        ]
      }
    ],
    "prompt": "Ist der zweite Drei-Minuten-Bar bei09:04:35 abgeschlossen?",
    "answers": [
      {
        "label": "Ja, weil bereits ein hohes Hoch bekannt ist.",
        "explanation": "Ein Preisextrem ersetzt keine Abschlusszeit."
      },
      {
        "label": "Nein, seine Zeitgrenze liegt erst bei09:06.",
        "explanation": "Kleinere fertige Teilfenster schließen ihn nicht vorzeitig."
      },
      {
        "label": "Ja, weil Minute4 fertig ist.",
        "explanation": "Eine Minute ist nur ein Teil des größeren Fensters."
      }
    ],
    "correct": 1,
    "rule": "Prüfe den Abschlusszustand auf jeder Zeitebene gesondert.",
    "diagram": "rc7-live"
  },
  {
    "title": "Beim Rückblick keine späteren Werte vorziehen",
    "summary": "Ein endgültiges Bild war während seiner Entstehung noch nicht bekannt.",
    "paragraphs": [
      "Im späteren Endbild bei09:06 steht das Hoch des zweiten Drei-Minuten-Bars bei30,70. Beim früheren Stopp09:04:35 liegt sein bekanntes Hoch aber nur bei30,60. Nora hätte30,70 damals nicht als bereits beobachtetes Hoch verwenden dürfen.",
      "Wenn ein historischer Test spätere endgültige Barwerte zu früh benutzt, nennen wir das einen Vorgriff auf spätere Daten. Er macht die vergangene Entscheidung besser informiert, als sie tatsächlich sein konnte. Die fertige größere Kerze enthält Geschäfte, die während früherer kleinerer Kerzen noch nicht vorlagen.",
      "Nora notiert deshalb für jede frühere Entscheidung: Welche Meldungen waren bekannt, welche Fenster waren abgeschlossen und welche Werte waren vorläufig? Ein späterer Vergleich darf das endgültige Bild zeigen, muss aber deutlich vom damaligen Informationsstand getrennt sein."
    ],
    "columns": [
      {
        "title": "Damals09:04:35",
        "tone": "neutral",
        "points": [
          "Bekanntes Hoch zweiter Drei-Minuten-Bar30,60.",
          "Späterer Preis30,70 noch unbekannt."
        ]
      },
      {
        "title": "Endbild09:06",
        "tone": "positive",
        "points": [
          "Endgültiges Hoch30,70.",
          "Zusätzliche spätere Geschäfte verarbeitet."
        ]
      }
    ],
    "prompt": "Welches Hoch durfte Nora beim Stopp09:04:35 verwenden?",
    "answers": [
      {
        "label": "Schon30,70, weil der Endchart es zeigt.",
        "explanation": "Das wäre ein Vorgriff auf spätere Daten."
      },
      {
        "label": "Gar kein Hoch, solange der Bar offen ist.",
        "explanation": "Ein vorläufig bekanntes Hoch kann korrekt benannt werden."
      },
      {
        "label": "30,60 Euro als bisher bekanntes Hoch.",
        "explanation": "30,70 wird erst später gemeldet."
      }
    ],
    "correct": 2,
    "rule": "Verwende im Rückblick nur die Werte, die zum betrachteten Zeitpunkt bekannt waren.",
    "diagram": "rc7-live"
  },
  {
    "title": "Gleiche Barzahl kann verschiedene Zeiträume bedeuten",
    "summary": "Für faire Vergleiche reichen gleiche Anzahlen nicht aus.",
    "paragraphs": [
      "Unsere sechs Ein-Minuten-Kerzen decken zusammen sechs Minuten ab. Die beiden Drei-Minuten-Kerzen decken ebenfalls sechs Minuten ab. Für diesen Vergleich ist der gemeinsame Zeitraum festgehalten, nicht die gleiche Kerzenanzahl.",
      "In einem getrennten lückenlosen Beispiel wären30 Ein-Minuten-Fenster nominell30 Minuten,30 Drei-Minuten-Fenster dagegen90 Minuten. Ein Mittelwert über30 Bars würde dann Daten über verschiedene Dauern verwenden. Auch hier müssen Preisquelle und genaue Fensterregel bekannt bleiben.",
      "Bei Handelspausen oder fehlenden Bars kann die tatsächlich vergangene Kalenderzeit zusätzlich abweichen. Nora prüft deshalb echte Start- und Endzeiten. Sie setzt weder gleiche Barzahl mit gleichem Zeitraum gleich noch behauptet sie aus einer festen Anzahl eine immer identische Informationsmenge."
    ],
    "columns": [
      {
        "title": "Gleicher Riva-Zeitraum",
        "tone": "neutral",
        "points": [
          "Sechs Ein-Minuten-Bars.",
          "Zwei Drei-Minuten-Bars."
        ]
      },
      {
        "title": "Getrennte30-Bar-Beispiele",
        "tone": "positive",
        "points": [
          "1Minute: nominell30 Minuten.",
          "3Minuten: nominell90 Minuten ohne Lücken."
        ]
      }
    ],
    "prompt": "Wie lang sind30 Drei-Minuten-Fenster im lückenlosen Beispiel?",
    "answers": [
      {
        "label": "90 Minuten.",
        "explanation": "Dreißig mal drei ergibt neunzig."
      },
      {
        "label": "30 Minuten.",
        "explanation": "Das wäre bei Ein-Minuten-Fenstern richtig."
      },
      {
        "label": "Immer sechs Minuten.",
        "explanation": "Sechs gehört nur zum erklärten Riva-Vergleich."
      }
    ],
    "correct": 0,
    "rule": "Vergleiche tatsächliche Zeitspannen und nicht bloß die Anzahl der Bars.",
    "diagram": null
  },
  {
    "title": "Wochen und Monate nach ihren tatsächlichen Grenzen lesen",
    "summary": "Längere Kalenderfenster brauchen zusätzlich Handelskalender und Sitzung.",
    "paragraphs": [
      "Die Grundidee der Zusammenfassung lässt sich auf Tage, Wochen und Monate übertragen: erstes O, größtes H, kleinstes L, letztes C und passende Mengensumme. Voraussetzung sind weiterhin zusammenpassende Originaldaten und klare Zeitgrenzen.",
      "Eine Monatskerze besteht jedoch nicht automatisch aus vier Wochenkerzen. Wochen können über eine Monatsgrenze reichen, und Monate haben unterschiedliche Kalenderlängen. Feiertage, Handelspausen und Sitzungsdefinitionen bestimmen, welche Geschäfte überhaupt zum bezeichneten Zeitraum gehören.",
      "Auch ein Tagesschluss kann je nach Datenquelle eine andere Bedeutung als der letzte Intraday-Geschäftspreis haben, etwa einen gesonderten Abrechnungswert. Nora prüft solche Regeln, bevor sie direkte Gleichheit erwartet. Unser Minutenmodell verspricht deshalb keine vollständige Kalender- oder Settlement-Implementierung. Settlement meint hier einen festgelegten Abrechnungswert."
    ],
    "columns": [
      {
        "title": "Allgemeine Aggregation",
        "tone": "neutral",
        "points": [
          "Erstes O, Maximum H, Minimum L, letztes C.",
          "Nur bei passenden Quellen und Grenzen direkt vergleichbar."
        ]
      },
      {
        "title": "Bei Kalenderfenstern prüfen",
        "tone": "positive",
        "points": [
          "Wochengrenzen, Monatsgrenzen, Handelssitzung.",
          "Bedeutung des veröffentlichten Schlusswerts."
        ]
      }
    ],
    "prompt": "Darf Nora jeden Monat einfach aus vier Wochenbars zusammensetzen?",
    "answers": [
      {
        "label": "Ja, die Wochenhochwerte werden nur gemittelt.",
        "explanation": "OHLC-Aggregation mittelt die Hochs nicht."
      },
      {
        "label": "Nein, Wochenfenster können Monatsgrenzen überschreiten.",
        "explanation": "Für genaue Monatswerte braucht sie passende Teilfenster und Kalenderregeln."
      },
      {
        "label": "Ja, jeder Monat hat genau vier Wochen.",
        "explanation": "Kalendermonate sind nicht einheitlich vier Wochen lang."
      }
    ],
    "correct": 1,
    "rule": "Prüfe Kalender, Sitzung und Preisbedeutung vor längeren Zeitaggregationen.",
    "diagram": null
  },
  {
    "title": "Einen Bericht über mehrere Zeitebenen abgeben",
    "summary": "Datenumfang, Fenster und damaliger Informationsstand bleiben sichtbar.",
    "paragraphs": [
      "Nora berichtet den vollständigen Hauptfall bei09:06:18 Riva-Geschäfte und36 Aktien. Sechs Ein-Minuten-Fenster ergeben Mengen6/5/8/4/7/6. Zwei Drei-Minuten-Fenster ergeben19/17. Der gemeinsame Sechs-Minuten-Bar hat O30,00/H30,70/L29,80/C30,70.",
      "Sie nennt die Grenzen: Anfang enthalten, Ende ausgeschlossen, gleicher Zeitanker09:00 und dieselben Geschäftspreise. Größere Bars verlieren Zwischeninformationen; ihre Körper können anders gerichtet sein als einzelne kleinere Körper. Die Ansichten sind keine voneinander unabhängigen zusätzlichen Geschäfte.",
      "Für den früheren Stopp09:04:35 sind nur G1–G14 und28 Aktien bekannt. Der zweite Drei-Minuten-Bar ist dort offen und hat erst das Hoch30,60. Nora trennt diese Aufnahme vom Endbild, prüft Datenlücken und erfindet keine zukünftigen Werte. Als Nächstes vergleicht sie lineare und logarithmische Preisskalen."
    ],
    "columns": [
      {
        "title": "Endaufnahme09:06",
        "tone": "neutral",
        "points": [
          "18 Geschäfte,36 Aktien.",
          "Fenster und Aggregationsregeln klar genannt."
        ]
      },
      {
        "title": "Frühere Aufnahme09:04:35",
        "tone": "positive",
        "points": [
          "14 Geschäfte,28 Aktien.",
          "Zweiter Drei-Minuten-Bar noch offen."
        ]
      }
    ],
    "prompt": "Welche Angabe gehört in einen sauberen Zeitebenenbericht?",
    "answers": [
      {
        "label": "Nur gleich viele grüne Kerzen.",
        "explanation": "Farbe und Anzahl erklären weder Datenbasis noch Zeitraum."
      },
      {
        "label": "Endgültige Werte als schon früher bekannt.",
        "explanation": "Das würde spätere Daten vorziehen."
      },
      {
        "label": "Gemeinsame Datenbasis, tatsächliche Fenster und Aufnahmezeitpunkt.",
        "explanation": "So lässt sich prüfen, ob Ansichten und Abschlusszustände vergleichbar sind."
      }
    ],
    "correct": 2,
    "rule": "Berichte gemeinsame Daten, Zeitgrenzen, Abschlusszustand und Aussagegrenzen zusammen.",
    "diagram": null
  }
];
export const chartsChapterSevenLessons: Lesson[] = drafts.map((draft,index) => {
 const key=`reading-charts.chapter-07.lesson-${String(index+1).padStart(2,'0')}`;
 const live=draft.diagram==='rc7-live';
 return {
  id:key,title:draft.title,summary:draft.summary,
  sourceUnit:'Kapitel 7 · Zeitebenen und gemeinsame Daten',sourceAnchors:[draft.title],durationMinutes:6,xp:35,status:'published',
  steps:[
   {id:`${key}.explain`,type:'explanation',eyebrow:'Charts verstehen · Kapitel 7',title:draft.title,paragraphs:draft.paragraphs,callout:draft.rule},
   ...(draft.diagram?[{id:`${key}.diagram`,type:'diagram' as const,title:live?'Gemeinsamer Zwischenstand bei09:04:35':'Gleiche Riva-Daten in Zeitfenstern',scenario:draft.diagram as ChartScenarioId,caption:live?'Eigene Riva-Meldungen nur bis G14 · Aufnahme09:04:35 · Euro je Aktie und Aktien.':'Eigene Riva-Aufnahme09:06 · vollständige18 Meldungen · Euro je Aktie und Aktien.',observations:live?['Erster Drei-Minuten-Bar abgeschlossen; zweiter noch offen.','Bekannte Mengen19/9; aktueller letzter Preis des offenen Bars30,60.']:draft.diagram==='rc7-minute'?['Sechs Ein-Minuten-Mengen6/5/8/4/7/6; insgesamt36 Aktien.','Minute3 fällt im Körper, obwohl der erste Drei-Minuten-Körper steigt.']:['Zwei Drei-Minuten-Mengen19/17; insgesamt36 Aktien.','Erstes O und letztes C, größtes H und kleinstes L; keine Mittelwerte.']}] : []),
   {id:`${key}.compare`,type:'comparison',title:'Das Beispiel auf einen Blick',columns:draft.columns.map(c=>({...c,tone:c.tone as 'neutral'|'positive'}))},
   {id:`${key}.question`,type:'question',title:'Kurz prüfen',prompt:draft.prompt,correctOptionId:`choice-${draft.correct}`,options:draft.answers.map((a,i)=>({id:`choice-${i}`,...a}))},
   {id:`${key}.recap`,type:'recap',title:'Das nimmst du mit',points:[draft.rule,draft.summary]},
  ],
 };
});
