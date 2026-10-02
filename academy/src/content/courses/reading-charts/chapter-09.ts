import type { Lesson, ChartScenarioId } from '../../types';
import { dataDescriptions } from '../../../components/ReadingDataDescriptions';
const drafts = [
  {
    "title": "Den Datenzettel zum Chart lesen",
    "summary": "Quelle und Einstellungen gehören zum Bild.",
    "paragraphs": [
      "Nora sieht zwei verschiedene Bilder derselben erfundenen Aktie. Bevor sie einen Fehler vermutet, liest sie den Datenzettel: Produkt, Handelsplatz, Währung und Zeitraum. Auch die Zeitzone gehört dazu.",
      "Metadaten sind Angaben über Daten. Sie erklären beispielsweise, ob ein Preis in Euro je Aktie oder in Punkten je Kontrakt angegeben ist. Ein ähnlicher Name reicht für einen sicheren Vergleich nicht aus.",
      "Nora notiert außerdem Anbieter, Abrufzeit, Preisart und Bereinigungsregel. So kann eine andere Person denselben Vergleich später nachbauen."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Produkt und Handelsplatz",
          "Währung und Zeitzone"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Preisart und Bereinigung",
          "Anbieter und Abrufzeit"
        ]
      }
    ],
    "prompt": "Welche Angaben erklären die Herkunft eines Charts?",
    "answers": [
      {
        "label": "Produkt, Quelle und Einstellungen.",
        "explanation": "Preisart und Bereinigung Anbieter und Abrufzeit"
      },
      {
        "label": "Nur die Farbe der Linie.",
        "explanation": "Eine Linienfarbe erklärt die Datenherkunft nicht."
      },
      {
        "label": "Nur Noras Lieblingsindikator.",
        "explanation": "Ein Indikator nennt weder Produkt noch Datenquelle."
      }
    ],
    "correct": 0,
    "rule": "Quelle und Einstellungen gehören zum Bild.",
    "diagram": null
  },
  {
    "title": "Geschäftspreis und Angebotspreis unterscheiden",
    "summary": "Eine Preisart benennt, was beobachtet wurde.",
    "paragraphs": [
      "Ein Geschäftspreis stammt aus einem gemeldeten Abschluss. Geld bezeichnet hier ein Kaufangebot, Brief ein Verkaufsangebot. Ein Angebot allein bestätigt noch kein Geschäft.",
      "In einem eigenen Moment liegen Geld bei 40 und Brief bei 42 Euro. Ihre Mitte ist 41. Gleichzeitig ist das letzte gemeldete Geschäft 39 Euro. Diese vier Angaben beschreiben unterschiedliche Dinge.",
      "Eine Kerze aus Mittelkursen kann deshalb andere Werte haben als eine Kerze aus Geschäftspreisen. Nora liest die Preisart, bevor sie Hoch und Tief vergleicht."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Letztes Geschäft:39 Euro",
          "Geld 40, Brief 42 Euro"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Mitte der Angebote:41 Euro",
          "Keine bestätigte Ausführung bei 41"
        ]
      }
    ],
    "prompt": "Beweist die Angebotsmitte 41 eine Ausführung?",
    "answers": [
      {
        "label": "Ja, Nora hat sicher gekauft.",
        "explanation": "Ein Angebot bestätigt keinen persönlichen Kauf."
      },
      {
        "label": "Nein, sie ist hier nur aus zwei Angeboten berechnet.",
        "explanation": "Mitte der Angebote:41 Euro Keine bestätigte Ausführung bei 41"
      },
      {
        "label": "Ja, jede Mitte wurde gehandelt.",
        "explanation": "Eine errechnete Mitte ist keine Geschäftsmeldung."
      }
    ],
    "correct": 1,
    "rule": "Eine Preisart benennt, was beobachtet wurde.",
    "diagram": null
  },
  {
    "title": "Den erfassten Handelsplatz prüfen",
    "summary": "Verschiedene Abdeckungen können verschiedene Daten liefern.",
    "paragraphs": [
      "Eine Aktie kann an mehreren Handelsplätzen erscheinen. Ein Anbieter erfasst vielleicht nur einen Platz, ein anderer mehrere. Beide Bilder müssen daher nicht dieselben Geschäfte enthalten.",
      "Auch Mengen beziehen sich auf die erfasste Auswahl. In einem eigenen Zeitfenster meldet Platz A zehn Aktien und Platz B sechs. Nur A ergibt zehn; beide zusammen ergeben sechzehn, sofern jede Meldung genau einmal gezählt wird.",
      "Nora nennt die Abdeckung ausdrücklich. Eine größere angezeigte Menge beweist ohne diese Angabe keine größere Aktivität am selben einzelnen Platz."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Nur A:10 Aktien",
          "Auswahl eines Platzes"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "A und B:16 Aktien",
          "Jede Meldung einmal zählen"
        ]
      }
    ],
    "prompt": "Was muss beim Mengenvergleich bekannt sein?",
    "answers": [
      {
        "label": "Nur die Linienfarbe.",
        "explanation": "Die Farbe sagt nichts über erfasste Plätze aus."
      },
      {
        "label": "Die sichere nächste Richtung.",
        "explanation": "Mengen enthalten keine sichere Prognose."
      },
      {
        "label": "Welche Handelsplätze und Meldungen erfasst sind.",
        "explanation": "A und B:16 Aktien Jede Meldung einmal zählen"
      }
    ],
    "correct": 2,
    "rule": "Verschiedene Abdeckungen können verschiedene Daten liefern.",
    "diagram": null
  },
  {
    "title": "Handelszeiten und Zeitfenster abgleichen",
    "summary": "Andere Fenstergrenzen können andere Kerzen bilden.",
    "paragraphs": [
      "Zwei Anbieter verwenden dieselben Geschäfte, aber einer beginnt sein Stundenfenster um 09:00 und der andere um 09:30. Ihre Kerzen bündeln dadurch andere Ausschnitte.",
      "Zusätzliche Handelszeiten vor oder nach einer Hauptsitzung können ebenfalls andere Eröffnungen, Hochs und Mengen ergeben. Die Zeitzone erklärt, welche Uhrzeit ein Zeitstempel bezeichnet.",
      "Nora hält Zeitzone, Sitzungsumfang und Fensterbeginn fest. Erst danach prüft sie, ob eine Abweichung wirklich in den Geschäftsdaten liegt."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Zeitzone und Sitzung",
          "Beginn der Zeitfenster"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Gleiche Fenster vergleichen",
          "Offene Fenster kennzeichnen"
        ]
      }
    ],
    "prompt": "Warum können gleiche Geschäfte andere Stundenkerzen ergeben?",
    "answers": [
      {
        "label": "Weil die Fenster anders beginnen.",
        "explanation": "Gleiche Fenster vergleichen Offene Fenster kennzeichnen"
      },
      {
        "label": "Weil Farben Geschäfte verändern.",
        "explanation": "Farben ändern keine Fenstergrenzen."
      },
      {
        "label": "Weil jede Stunde denselben Preis haben muss.",
        "explanation": "Gleiche Fensterlänge bedeutet nicht gleichen Preis."
      }
    ],
    "correct": 0,
    "rule": "Andere Fenstergrenzen können andere Kerzen bilden.",
    "diagram": null
  },
  {
    "title": "Fehlende Daten nicht als ruhigen Markt deuten",
    "summary": "Eine leere Stelle kann eine Datenlücke sein.",
    "paragraphs": [
      "Zwischen zwei Meldungen fehlt Noras Anbieter eine Minute. Nora weiß zunächst nicht, ob dort kein Handel stattfand oder die Übertragung unterbrochen war.",
      "Ein Programm kann eine leere Stelle frei lassen oder mit dem vorigen Schluss füllen. Eine aufgefüllte Linie sieht ruhiger aus, enthält aber einen angenommenen Ersatzwert.",
      "Nora prüft Meldungsstatus, Verzögerung und Lückenregel. Bei unbekannter Ursache schreibt sie „Daten fehlen“, statt einen bewegungslosen Markt zu behaupten."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Keine Meldung vorhanden",
          "Ursache zunächst unbekannt"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Ersatzwert ist berechnet",
          "Lückenregel dokumentieren"
        ]
      }
    ],
    "prompt": "Was beweist eine fehlende Minute allein?",
    "answers": [
      {
        "label": "Dass der Preis sicher gleich blieb.",
        "explanation": "Ein Ersatzwert beweist keinen unveränderten Marktpreis."
      },
      {
        "label": "Nur, dass in dieser Auswahl Daten fehlen.",
        "explanation": "Ersatzwert ist berechnet Lückenregel dokumentieren"
      },
      {
        "label": "Dass niemand gehandelt hat.",
        "explanation": "Eine Datenlücke kann auch eine Störung sein."
      }
    ],
    "correct": 1,
    "rule": "Eine leere Stelle kann eine Datenlücke sein.",
    "diagram": null
  },
  {
    "title": "Korrekturen und Datenstände aufbewahren",
    "summary": "Historische Daten können nachträglich berichtigt werden.",
    "paragraphs": [
      "Ein Anbieter berichtigt eine falsch gemeldete Menge oder entfernt einen fehlerhaften Preis. Ein neu geladener Chart kann danach anders aussehen.",
      "Nora bewahrt für einen wichtigen Vergleich den Export und dessen Abrufzeit auf. Eine Versionsangabe hilft zu erkennen, ob zwei Auswertungen denselben Datenstand benutzen.",
      "Eine Korrektur kann sinnvoll sein. Trotzdem darf Nora nicht so tun, als sei die neue Information damals schon verfügbar gewesen. Das wird besonders bei einer nachträglichen Prüfung alter Entscheidungen wichtig."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Alter Export mit Datum",
          "Damals bekannte Informationen"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Neuer korrigierter Stand",
          "Änderungen nachvollziehen"
        ]
      }
    ],
    "prompt": "Was hilft beim Nachvollziehen einer späteren Änderung?",
    "answers": [
      {
        "label": "Nur die neue Bildschirmfarbe.",
        "explanation": "Die Farbe benennt keinen Datenstand."
      },
      {
        "label": "Das Löschen aller alten Angaben.",
        "explanation": "Ohne alten Export lässt sich die Änderung schwerer prüfen."
      },
      {
        "label": "Export, Abrufzeit und Versionsangabe.",
        "explanation": "Neuer korrigierter Stand Änderungen nachvollziehen"
      }
    ],
    "correct": 2,
    "rule": "Historische Daten können nachträglich berichtigt werden.",
    "diagram": null
  },
  {
    "title": "Einen Zwei-für-eins-Split verstehen",
    "summary": "Mehr Stücke bedeuten allein noch keinen Mehrwert.",
    "paragraphs": [
      "Unser eigener Lernfall beginnt mit vier Taro-Aktien zu je 80 Euro. Der Positionswert beträgt 320 Euro. Bei einem Zwei-für-eins-Split wird aus jeder alten Aktie rechnerisch ein Paar neuer Aktien.",
      "Danach hält Nora acht Aktien. Der theoretische Vergleichspreis beträgt 40 Euro: acht mal 40 ergibt wieder 320. Wir lassen in dieser Rechnung alle anderen Markteinflüsse weg.",
      "Der Split allein verdoppelt hier die Stückzahl, nicht den Wert. Ein wirklicher Marktpreis nach dem Ereignis kann zusätzlich durch Angebot und Nachfrage abweichen."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Vorher:4 ×80 =320 Euro",
          "Alte Stückeinheit"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Nachher:8 ×40 =320 Euro",
          "Neue Stückeinheit"
        ]
      }
    ],
    "prompt": "Welcher Wert entsteht im reinen Split-Modell?",
    "answers": [
      {
        "label": "Weiterhin 320 Euro.",
        "explanation": "Nachher:8 ×40 =320 Euro Neue Stückeinheit"
      },
      {
        "label": "640 Euro allein durch den Split.",
        "explanation": "Acht neue Aktien zu 40 ergeben 320, nicht 640."
      },
      {
        "label": "160 Euro bei unveränderter Rechnung.",
        "explanation": "Acht mal 40 ergibt 320, nicht 160."
      }
    ],
    "correct": 0,
    "rule": "Mehr Stücke bedeuten allein noch keinen Mehrwert.",
    "diagram": "rc9-split"
  },
  {
    "title": "Historische Splitpreise auf dieselbe Stückeinheit bringen",
    "summary": "Die Bereinigung verändert frühere Anzeigewerte.",
    "paragraphs": [
      "Vor dem Split lag der eigene Schluss bei 80 Euro. Nach dem Split liegt ein späterer Schluss bei 41 Euro je neuer Aktie. Die beiden unbereinigten Werte verwenden unterschiedliche Stückeinheiten.",
      "Für unseren bereinigten Vergleich teilen wir den alten Preis durch zwei. Aus 80 werden 40. Die Folge 40 →41 zeigt auf gemeinsamer Stückbasis einen Anstieg von 2,5 Prozent.",
      "Die damalige Ausführung zu 80 wird dadurch nicht nachträglich zu einer Ausführung zu 40. Die Bereinigung ist eine Umrechnung für den Vergleich."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Unbereinigt:80 →41",
          "Unterschiedliche Stückbasis"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Bereinigt:40 →41",
          "Gleiche neue Stückbasis"
        ]
      }
    ],
    "prompt": "Welcher alte Vergleichspreis passt zur neuen Stückeinheit?",
    "answers": [
      {
        "label": "160 Euro.",
        "explanation": "Bei zwei neuen je alter Aktie wird der Preis geteilt, nicht verdoppelt."
      },
      {
        "label": "40 Euro.",
        "explanation": "Bereinigt:40 →41 Gleiche neue Stückbasis"
      },
      {
        "label": "80 Euro ohne Änderung.",
        "explanation": "80 gehört zur alten Stückeinheit."
      }
    ],
    "correct": 1,
    "rule": "Die Bereinigung verändert frühere Anzeigewerte.",
    "diagram": "rc9-split"
  },
  {
    "title": "Alle vier Kerzenwerte gemeinsam bereinigen",
    "summary": "Eine Kerze braucht eine einheitliche Preisbasis.",
    "paragraphs": [
      "Die alte eigene Kerze hat O 78, H 82, L 76 und C 80 Euro. O ist der erste Preis, H der höchste, L der tiefste und C der letzte im Abschnitt.",
      "Beim Zwei-für-eins-Split teilen wir alle vier alten Werte durch zwei. Die bereinigte Kerze hat O 39, H 41, L 38 und C 40. Wir verändern hier nicht nur den Schluss.",
      "Würde Nora nur C halbieren und O, H, L stehen lassen, wäre das Bild kein einheitlich umgerechneter Abschnitt. Sie prüft deshalb, welche Felder ein Anbieter tatsächlich bereinigt."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "O 78/H 82/L 76/C 80",
          "Alte Stückbasis"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "O 39/H 41/L 38/C 40",
          "Jedes Feld geteilt durch 2"
        ]
      }
    ],
    "prompt": "Welche Felder werden in unserer Splitkerze halbiert?",
    "answers": [
      {
        "label": "Nur der Schluss.",
        "explanation": "Nur C zu ändern mischt die Stückbasen."
      },
      {
        "label": "Nur das Hoch.",
        "explanation": "Nur H zu ändern lässt drei Felder auf alter Basis."
      },
      {
        "label": "Alle vier OHLC-Werte.",
        "explanation": "O 39/H 41/L 38/C 40 Jedes Feld geteilt durch 2"
      }
    ],
    "correct": 2,
    "rule": "Eine Kerze braucht eine einheitliche Preisbasis.",
    "diagram": null
  },
  {
    "title": "Mengenbasis und Positionswert getrennt prüfen",
    "summary": "Eine Preisbereinigung erklärt noch keine Mengenregel.",
    "paragraphs": [
      "In einem getrennten eigenen Geschäft vor dem Split wechseln zehn alte Aktien zu je 80 Euro den Besitzer. Der Geschäftswert ist 800 Euro.",
      "Auf neuer Stückbasis entsprechen sie zwanzig Aktien zu je 40 Euro. Auch zwanzig mal 40 ergibt 800. Preise und Stückzahl werden hier gegensinnig umgerechnet.",
      "Das beschreibt unsere erklärte Mengenbasis. Anbieter können historische Mengen anders anzeigen oder unverändert lassen. Nora prüft Preis- und Mengenregel getrennt, statt aus dem Wort „bereinigt“ beide Regeln abzuleiten."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "10 alte Aktien ×80",
          "Geschäftswert 800 Euro"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "20 neue Einheiten ×40",
          "Gleicher Geschäftswert"
        ]
      }
    ],
    "prompt": "Welche neue Menge erhält 800 Euro bei 40 Euro je Stück?",
    "answers": [
      {
        "label": "20 Stück.",
        "explanation": "20 neue Einheiten ×40 Gleicher Geschäftswert"
      },
      {
        "label": "5 Stück.",
        "explanation": "Fünf mal 40 ergibt nur 200 Euro."
      },
      {
        "label": "10 Stück.",
        "explanation": "Zehn mal 40 ergibt nur 400 Euro."
      }
    ],
    "correct": 0,
    "rule": "Eine Preisbereinigung erklärt noch keine Mengenregel.",
    "diagram": null
  },
  {
    "title": "Ein Kursminus nach einem Split richtig einordnen",
    "summary": "Ein Vergleich darf die Stückeinheit nicht wechseln.",
    "paragraphs": [
      "Die rohe Folge 80 →41 sieht wie ein Rückgang von 48,75 Prozent aus. Diese Rechnung vergleicht aber eine alte mit einer neuen Aktie.",
      "Noras vier alte Aktien wurden zu acht neuen. Bei 41 Euro sind diese acht zusammen 328 Euro wert. Gegenüber 320 sind das acht Euro oder 2,5 Prozent mehr, vor Kosten und ohne Verkauf.",
      "Nora nennt diesen Betrag eine Wertänderung im eigenen Beispiel. Ein tatsächlicher Verkaufserlös braucht zusätzlich bestätigte Ausführungen und Kosten."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Rohe Preisrechnung:−48,75%",
          "Stückbasis wechselt"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Position:320 →328 Euro",
          "Wertänderung+2,5%"
        ]
      }
    ],
    "prompt": "Welche Wertänderung hat die erklärte Position?",
    "answers": [
      {
        "label": "Plus 320 Euro allein durch den Split.",
        "explanation": "Der Split allein erhält im Modell 320 Euro."
      },
      {
        "label": "Plus 8 Euro vor Kosten.",
        "explanation": "Position:320 →328 Euro Wertänderung+2,5%"
      },
      {
        "label": "Minus 156 Euro sicher ausgezahlt.",
        "explanation": "Acht neue Aktien zu 41 ergeben 328 Euro."
      }
    ],
    "correct": 1,
    "rule": "Ein Vergleich darf die Stückeinheit nicht wechseln.",
    "diagram": "rc9-split"
  },
  {
    "title": "Ex-Tag und Auszahlung unterscheiden",
    "summary": "Ein Anspruch ist noch kein gutgeschriebenes Bargeld.",
    "paragraphs": [
      "Für einen getrennten Dividendenfall setzen wir ausdrücklich voraus: Nora hat Anspruch auf einen Euro je Aktie für acht Aktien. Eine Dividende ist eine Ausschüttung des Unternehmens.",
      "Am Ex-Tag wird die Aktie ohne diesen Ausschüttungsanspruch gehandelt. Der Auszahlungstag ist der Tag der Zahlung. Unser Lernfall nennt den Ex-Tag D 2 und die Zahlung D 4; wir leiten daraus keine allgemeinen Kalenderregeln ab.",
      "Am D 2 steht in unserem Modell ein Anspruch von acht Euro. Das Geld ist noch nicht auf Noras Konto. Welche echten Stichtage und Anspruchsregeln gelten, muss sie bei der konkreten Ausschüttung prüfen."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "D 2:Anspruch 8 Euro",
          "Noch kein Zahlungseingang"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "D 4:Zahlung 8 Euro",
          "Anspruch wird durch Geld ersetzt"
        ]
      }
    ],
    "prompt": "Ist der Anspruch am Ex-Tag schon gutgeschriebenes Geld?",
    "answers": [
      {
        "label": "Ja, jeder Anspruch ist sofort Bargeld.",
        "explanation": "Anspruch und Zahlung sind verschiedene Zustände."
      },
      {
        "label": "Nein, deshalb ist der Anspruch immer wertlos.",
        "explanation": "Ein noch unbezahlter Anspruch ist nicht automatisch wertlos."
      },
      {
        "label": "Nein, die Zahlung erfolgt im Beispiel erst an D 4.",
        "explanation": "D 4:Zahlung 8 Euro Anspruch wird durch Geld ersetzt"
      }
    ],
    "correct": 2,
    "rule": "Ein Anspruch ist noch kein gutgeschriebenes Bargeld.",
    "diagram": null
  },
  {
    "title": "Preis und Dividendenanspruch zusammen rechnen",
    "summary": "Die Ausschüttung schafft allein keinen kostenlosen Gewinn.",
    "paragraphs": [
      "Vor dem Ex-Tag kostet die Aktie im eigenen vereinfachten Modell 51 Euro. Acht Aktien sind 408 Euro wert. Wir nehmen keine weiteren Markteinflüsse, Steuern oder Gebühren an.",
      "Am Ex-Tag setzen wir den Preis für die Rechnung auf 50. Die Aktien sind nun 400 Euro wert, dazu kommt der Anspruch von acht Euro. Zusammen ergibt das wieder 408. Ein echter Marktpreis muss nicht genau um die Dividende fallen.",
      "Bei der späteren Zahlung ersetzt acht Euro Bargeld den Anspruch. Bleibt der Preis in diesem Modell 50, beträgt die Summe weiterhin 408. Nora zählt den Anspruch und die Zahlung nicht doppelt."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Vorher:8 ×51 =408",
          "Keine zusätzliche Ausschüttung addieren"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Ex:400 +8 Anspruch =408",
          "Zahlung:400 +8 Geld =408"
        ]
      }
    ],
    "prompt": "Wie groß ist der Modellwert direkt nach dem Ex-Tag?",
    "answers": [
      {
        "label": "408 Euro einschließlich Anspruch.",
        "explanation": "Ex:400 +8 Anspruch =408 Zahlung:400 +8 Geld =408"
      },
      {
        "label": "416 Euro wegen doppelter Zählung.",
        "explanation": "Anspruch und Zahlung dürfen nicht doppelt gezählt werden."
      },
      {
        "label": "400 Euro einschließlich angeblich wertlosem Anspruch.",
        "explanation": "Die acht Euro Anspruch gehören im Modell zum Gesamtwert."
      }
    ],
    "correct": 0,
    "rule": "Die Ausschüttung schafft allein keinen kostenlosen Gewinn.",
    "diagram": "rc9-dividend"
  },
  {
    "title": "Eine Dividendenbereinigung als Rechenregel lesen",
    "summary": "Ein bereinigter Preis ist kein Kontoauszug.",
    "paragraphs": [
      "Für unseren eigenen Preisvergleich setzen wir den historischen Faktor(51 −1)/51 an. Er beträgt 50/51. Der alte Schluss 51 wird dadurch als 50 dargestellt.",
      "Der neue Modellschluss 50 bleibt 50. Die bereinigte Linie zeigt hier keinen Sprung durch die angenommene Ausschüttung. Sie schreibt Nora jedoch keine acht Euro Bargeld gut.",
      "Das ist eine ausdrücklich erklärte vereinfachte Preisumrechnung. Wir behaupten damit keine allgemeine Anbietermethode und keine vollständige Renditerechnung mit Wiederanlage, Steuern und Kosten."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Historischer Faktor:50/51",
          "51 wird als 50 angezeigt"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Aktueller Modellpreis:50",
          "Zahlung separat buchen"
        ]
      }
    ],
    "prompt": "Was bewirkt unser historischer Faktor?",
    "answers": [
      {
        "label": "Einen garantierten zusätzlichen Gewinn.",
        "explanation": "Die Preisumrechnung schafft keinen zusätzlichen Modellwert."
      },
      {
        "label": "Eine Preisumrechnung, keine Kontogutschrift.",
        "explanation": "Aktueller Modellpreis:50 Zahlung separat buchen"
      },
      {
        "label": "Eine automatische Wiederanlage aller Gelder.",
        "explanation": "Unser Faktor führt keine Geldtransaktion aus."
      }
    ],
    "correct": 1,
    "rule": "Ein bereinigter Preis ist kein Kontoauszug.",
    "diagram": "rc9-dividend"
  },
  {
    "title": "Das Wort bereinigt genauer hinterfragen",
    "summary": "Die verwendete Ereignis- und Rechenregel muss bekannt sein.",
    "paragraphs": [
      "Ein Anbieter bereinigt nur Splits, ein anderer zusätzlich Dividenden. Schon diese Auswahl kann unterschiedliche historische Linien erzeugen.",
      "Auch Bezugsdatum, Rundung und Nachlieferungen können eine Rolle spielen. Nora sucht die Beschreibung der konkreten Methode, statt das Etikett „bereinigt“ als vollständige Erklärung zu verwenden.",
      "Sie notiert, welche Ereignisse einbezogen sind und welche historischen Felder verändert werden. Eine Reihe ist für ihren Zweck nur dann gut vergleichbar, wenn diese Regeln passen."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Welche Ereignisse?",
          "Welche Felder?"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Welcher Bezug und Datenstand?",
          "Welche Rundung?"
        ]
      }
    ],
    "prompt": "Welche Nachfrage passt zum Etikett bereinigt?",
    "answers": [
      {
        "label": "Welche Farbe garantiert Gewinn?",
        "explanation": "Farbe beantwortet keine Frage nach einer Bereinigungsregel."
      },
      {
        "label": "Welcher Kurs steigt sicher morgen?",
        "explanation": "Eine Regelbeschreibung ist keine Zukunftsgarantie."
      },
      {
        "label": "Nach welchen Ereignissen und welcher Methode?",
        "explanation": "Welcher Bezug und Datenstand? Welche Rundung?"
      }
    ],
    "correct": 2,
    "rule": "Die verwendete Ereignis- und Rechenregel muss bekannt sein.",
    "diagram": null
  },
  {
    "title": "Bereinigte Werte nicht als frühere Orderpreise einsetzen",
    "summary": "Vergleichspreis und Ausführung haben verschiedene Aufgaben.",
    "paragraphs": [
      "Ein alter Kauf wurde im eigenen Splitfall tatsächlich zu 80 Euro je alter Aktie bestätigt. Der bereinigte Chart zeigt dafür 40 je neuer Stückeinheit.",
      "Für den Nachweis der Ausführung gilt die Bestätigung mit damaliger Menge und damaliger Stückbasis. Für einen Chartvergleich kann die neue Basis sinnvoll sein. Beides braucht seine eigene Kennzeichnung.",
      "Nora schreibt keine echte Order nachträglich auf einen berechneten Chartpreis um. Auch bei einem neuen Auftrag muss sie das aktuelle handelbare Produkt und dessen Preis prüfen."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Bestätigter Kauf:80 alt",
          "Ausführungsbeleg behalten"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Chartvergleich:40 neu",
          "Umrechnung kennzeichnen"
        ]
      }
    ],
    "prompt": "Welcher Beleg zeigt den damaligen Kaufpreis?",
    "answers": [
      {
        "label": "Die Ausführungsbestätigung auf damaliger Stückbasis.",
        "explanation": "Chartvergleich:40 neu Umrechnung kennzeichnen"
      },
      {
        "label": "Jede später bereinigte Linie.",
        "explanation": "Die neue Linie zeigt eine andere Stückbasis."
      },
      {
        "label": "Eine neue Bildschirmhöhe.",
        "explanation": "Bildhöhe ist kein Ausführungsbeleg."
      }
    ],
    "correct": 0,
    "rule": "Vergleichspreis und Ausführung haben verschiedene Aufgaben.",
    "diagram": null
  },
  {
    "title": "Einen einzelnen Futures-Kontrakt benennen",
    "summary": "Ein fortlaufendes Symbol kann mehrere Laufzeiten verbinden.",
    "paragraphs": [
      "Ein Future ist ein Vertrag mit festgelegten Produktregeln und einer bestimmten Laufzeit. In unserem eigenen Beispiel heißen zwei unterschiedliche Kontrakte F-A und F-B.",
      "Ein fortlaufender Chart verbindet Abschnitte mehrerer Kontrakte zu einer langen Reihe. Er kann damit mehr Geschichte zeigen als ein einzelner Kontrakt. Das verbundene Symbol bezeichnet aber nicht automatisch einen einzelnen handelbaren Vertrag.",
      "Nora liest den konkreten Kontraktnamen, die Laufzeit und den Punktwert. Die Produktregeln erklären, wie ein Preis in Punkten zu einer Geldrechnung gehört."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "F-A und F-B getrennt",
          "Eigene Laufzeiten und Preise"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Fortlaufende Reihe",
          "Abschnitte mehrerer Kontrakte"
        ]
      }
    ],
    "prompt": "Was muss eine echte Futures-Order eindeutig benennen?",
    "answers": [
      {
        "label": "Nur die Farbe der Kerze.",
        "explanation": "Eine Farbe identifiziert keine Laufzeit."
      },
      {
        "label": "Den tatsächlich handelbaren Kontrakt.",
        "explanation": "Fortlaufende Reihe Abschnitte mehrerer Kontrakte"
      },
      {
        "label": "Nur eine beliebige lange Linie.",
        "explanation": "Die Linie kann mehrere verschiedene Kontrakte verbinden."
      }
    ],
    "correct": 1,
    "rule": "Ein fortlaufendes Symbol kann mehrere Laufzeiten verbinden.",
    "diagram": null
  },
  {
    "title": "Die Rollregel vor dem Vergleich lesen",
    "summary": "Der Zeitpunkt des Wechsels gehört zur Konstruktion.",
    "paragraphs": [
      "Rollen bedeutet hier, vom alten zum folgenden Kontrakt zu wechseln. Für unseren Chart setzen wir den Wechsel ausdrücklich nach T 3 an.",
      "Andere Konstruktionen können nach Kalender oder nach einer Mengenregel wechseln. Eine Regel muss angeben, wann entschieden wird und welche Daten dabei schon bekannt sind.",
      "Nora verwechselt den Wechsel im Chart nicht mit einem ausgeführten Auftrag im Depot. Eine persönliche Position braucht bestätigtes Schließen und Öffnen sowie deren Preise und Kosten."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Chartwechsel nach T 3",
          "Erklärte Auswahlregel"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Eigene Position separat",
          "Bestätigte Aufträge nötig"
        ]
      }
    ],
    "prompt": "Was erklärt eine Rollregel im Chart?",
    "answers": [
      {
        "label": "Dass Noras Position automatisch ausgeführt wurde.",
        "explanation": "Ein Chartwechsel bestätigt keine eigene Order."
      },
      {
        "label": "Dass jeder Anbieter denselben Tag nutzt.",
        "explanation": "Kalender- und Mengenregeln können verschieden wechseln."
      },
      {
        "label": "Wann die Reihe den verwendeten Kontrakt wechselt.",
        "explanation": "Eigene Position separat Bestätigte Aufträge nötig"
      }
    ],
    "correct": 2,
    "rule": "Der Zeitpunkt des Wechsels gehört zur Konstruktion.",
    "diagram": null
  },
  {
    "title": "Einen rohen Kontraktwechsel zerlegen",
    "summary": "Ein Sprung kann aus zwei verschiedenen Kontrakten stammen.",
    "paragraphs": [
      "F-A hat eigene Schlüsse 72,74 und 76 Punkte an T 1 bis T 3. F-B liegt zur selben Bezugszeit T 3 bei 83 und an T 4 bei 84. Unser roher fortlaufender Chart zeigt 72/74/76/84.",
      "Von T 3 zu T 4 sieht man acht Punkte mehr. Davon gehören sieben zur gleichzeitigen Preisdifferenz 83 minus 76 zwischen den Kontrakten. Ein Punkt gehört zur Bewegung 83 →84 im neuen Kontrakt.",
      "Die sieben Punkte sind kein belegter Kursgewinn beim Halten eines einzigen Kontrakts. Nora benennt den Produktwechsel, bevor sie die sichtbare Lücke als Marktbewegung bewertet."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Rohe Folge:72/74/76/84",
          "Sichtbarer letzter Schritt+8"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Gleichzeitige Differenz:+7",
          "Neuer Kontrakt bewegt sich+1"
        ]
      }
    ],
    "prompt": "Wie zerlegt sich der letzte rohe Schritt im Beispiel?",
    "answers": [
      {
        "label": "Sieben Punkte Kontraktunterschied plus ein Punkt Bewegung.",
        "explanation": "Gleichzeitige Differenz:+7 Neuer Kontrakt bewegt sich+1"
      },
      {
        "label": "Acht Punkte Gewinn in F-A.",
        "explanation": "F-A hat am T 4 keinen hier vorgegebenen Schluss."
      },
      {
        "label": "Acht Punkte sicherer Geldgewinn.",
        "explanation": "Preispunkte sind ohne Ausführungen und Punktwert kein Geldgewinn."
      }
    ],
    "correct": 0,
    "rule": "Ein Sprung kann aus zwei verschiedenen Kontrakten stammen.",
    "diagram": "rc9-roll"
  },
  {
    "title": "Eine additive Rückbereinigung nachrechnen",
    "summary": "Ein fester Zuschlag erhält alte Punktdifferenzen.",
    "paragraphs": [
      "Wir berechnen an T 3 den Abstand 83 minus 76 gleich sieben Punkte. Für unsere additive Rückbereinigung addieren wir diese sieben zu allen gezeigten alten F-A-Werten.",
      "Aus 72/74/76 werden 79/81/83. Der neue F-B-Wert 84 bleibt unverändert. Die verbundene Folge 79/81/83/84 zeigt am Übergang nur noch den einen Punkt Bewegung im neuen Kontrakt.",
      "Die alten Schritte bleiben jeweils zwei Punkte. Ihre Prozentwerte ändern sich jedoch, weil die Anfangspreise nun andere sind. Außerdem waren 79 und 81 keine ursprünglichen F-A-Schlüsse."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Alt:72/74/76",
          "Zuschlag jeweils+7"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Bereinigt:79/81/83/84",
          "Alter Punktabstand bleibt 2"
        ]
      }
    ],
    "prompt": "Was bleibt bei einem festen Zuschlag gleich?",
    "answers": [
      {
        "label": "Jeder ursprüngliche absolute Preis.",
        "explanation": "Die historischen Preisniveaus werden um sieben verschoben."
      },
      {
        "label": "Die Punktdifferenz innerhalb des alten Abschnitts.",
        "explanation": "Bereinigt:79/81/83/84 Alter Punktabstand bleibt 2"
      },
      {
        "label": "Jeder alte Prozentwert.",
        "explanation": "Ein Zuschlag verändert den Anfangswert der Prozentrechnung."
      }
    ],
    "correct": 1,
    "rule": "Ein fester Zuschlag erhält alte Punktdifferenzen.",
    "diagram": "rc9-roll"
  },
  {
    "title": "Eine Verhältnisbereinigung von einem Zuschlag unterscheiden",
    "summary": "Ein Faktor erhält Verhältnisse, aber verändert Punktabstände.",
    "paragraphs": [
      "Eine andere eigene Methode verwendet den Faktor 83/76. Wir multiplizieren die alten F-A-Werte mit diesem positiven Faktor. Der letzte alte Wert 76 wird dadurch ebenfalls 83.",
      "Der erste Wert 72 wird ungefähr 78,63 und 74 wird ungefähr 80,82. Für die Rechnung behalten wir die ungerundeten Werte. Der neue Schluss 84 bleibt wieder unverändert.",
      "Die alten Preisverhältnisse bleiben gleich: der Faktor kürzt sich beim Teilen heraus. Die alten Punktdifferenzen werden dagegen mit dem Faktor vergrößert. Nora gibt an, welche Methode ihr Bild verwendet."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Additiv:+7 je altem Preis",
          "Punktabstände unverändert"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Verhältnis:Faktor 83/76",
          "Preisverhältnisse unverändert"
        ]
      }
    ],
    "prompt": "Was erhält die Verhältnisbereinigung innerhalb des alten Abschnitts?",
    "answers": [
      {
        "label": "Alle Punktdifferenzen genau.",
        "explanation": "Die Punktdifferenzen werden mit 83/76 multipliziert."
      },
      {
        "label": "Die ursprünglichen Preise unverändert.",
        "explanation": "Ein Faktor ungleich eins verändert die alten Preisniveaus."
      },
      {
        "label": "Die Preisverhältnisse.",
        "explanation": "Verhältnis:Faktor 83/76 Preisverhältnisse unverändert"
      }
    ],
    "correct": 2,
    "rule": "Ein Faktor erhält Verhältnisse, aber verändert Punktabstände.",
    "diagram": null
  },
  {
    "title": "Spätere Wechsel können alte Chartwerte verändern",
    "summary": "Eine rückbereinigte Geschichte braucht einen Datenstand.",
    "paragraphs": [
      "Beim nächsten Kontraktwechsel kann eine weitere Rückbereinigung erfolgen. Dadurch ändern sich frühere Anzeigewerte erneut, obwohl die alten Originalmeldungen gleich bleiben.",
      "Nora speichert für einen historischen Versuch Regel, Datenstand und Export. Sie prüft, ob die spätere Konstruktion Informationen nutzt, die zum damaligen Entscheidungszeitpunkt noch nicht vorlagen.",
      "Ein rückblickend glattes Bild kann hilfreich für Vergleiche sein. Es ersetzt aber weder die damals sichtbare Reihe noch die Ausführungsdaten der tatsächlich gehandelten Kontrakte."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Originalmeldungen bleiben",
          "Historische Anzeige kann wechseln"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Export und Regel sichern",
          "Damals verfügbare Informationen prüfen"
        ]
      }
    ],
    "prompt": "Was kann ein späterer Rollwechsel bei Rückbereinigung ändern?",
    "answers": [
      {
        "label": "Frühere Anzeigewerte der verbundenen Reihe.",
        "explanation": "Export und Regel sichern Damals verfügbare Informationen prüfen"
      },
      {
        "label": "Bereits bestätigte alte Ausführungen.",
        "explanation": "Die ursprünglichen Ausführungen werden nicht umgeschrieben."
      },
      {
        "label": "Die Vergangenheit aller Originalgeschäfte.",
        "explanation": "Die Anpassung betrifft die Anzeige, nicht die Originalgeschäfte."
      }
    ],
    "correct": 0,
    "rule": "Eine rückbereinigte Geschichte braucht einen Datenstand.",
    "diagram": null
  },
  {
    "title": "Ein Futures-Ergebnis aus bestätigten Geschäften rechnen",
    "summary": "Die Kontraktlücke wird nicht als Gewinn gebucht.",
    "paragraphs": [
      "In einer eigenen Rechenübung sind vier Ausführungen ausdrücklich bestätigt: ein Kontrakt F-A gekauft zu 72 und verkauft zu 76; anschließend ein Kontrakt F-B gekauft zu 83 und verkauft zu 84.",
      "Die Preisgewinne betragen vier plus einen gleich fünf Punkte. Unser erfundenes Produkt hat zehn Euro je Punkt. Das ergibt 50 Euro vor Kosten. Für jede der vier Ausführungen setzen wir zwei Euro Gebühr an: zusammen acht Euro, Ergebnis 42 Euro.",
      "Die sieben Punkte zwischen 76 und 83 sind hier kein Haltegewinn. Eine reale Rechnung benötigt echte Ausführungen, Mengen, Punktwerte und alle anfallenden Kosten. Chartschlüsse allein bestätigen unsere angenommene Auftragsfolge nicht."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "F-A:+4; F-B:+1 Punkt",
          "5 ×10 =50 Euro vor Kosten"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Vier Gebühren à2 Euro",
          "Modellergebnis 42 Euro"
        ]
      }
    ],
    "prompt": "Wie groß ist das Ergebnis der bestätigten Modellfolge nach Gebühren?",
    "answers": [
      {
        "label": "70 Euro aus dem Kontraktunterschied.",
        "explanation": "Die sieben Punkte wurden nicht als Haltegewinn verdient."
      },
      {
        "label": "42 Euro.",
        "explanation": "Vier Gebühren à2 Euro Modellergebnis 42 Euro"
      },
      {
        "label": "120 Euro aus der ganzen Chartspanne.",
        "explanation": "Der Spannenvergleich enthält den sieben Punkte großen Kontraktunterschied."
      }
    ],
    "correct": 1,
    "rule": "Die Kontraktlücke wird nicht als Gewinn gebucht.",
    "diagram": null
  },
  {
    "title": "Einen Bericht über bereinigte Daten abschließen",
    "summary": "Datenherkunft und Rechenregel machen das Bild prüfbar.",
    "paragraphs": [
      "Nora nennt Produkt, Quelle, Preisart, Handelszeiten, Zeitzone und Datenstand. Bei Aktien ergänzt sie Stückbasis und einbezogene Ausschüttungen. Bei Futures nennt sie die einzelnen Kontrakte und die Rollregel.",
      "Ihre eigenen Modelle zeigen: Ein Split verändert die Stückeinheit. Ein Dividendenanspruch muss von Bargeld unterschieden werden. Ein Kontraktwechsel kann ohne echte Bewegung desselben Produkts einen Chartsprung erzeugen.",
      "Sie erklärt deshalb jede Bereinigung und bewahrt Originaldaten auf. Persönliche Ergebnisse rechnet sie aus bestätigten Geschäften. Im letzten Kapitel verbindet sie diese Prüfungen zu einem vollständigen Chartbericht."
    ],
    "columns": [
      {
        "title": "Ausgangspunkt",
        "tone": "neutral",
        "points": [
          "Herkunft und Datenstand",
          "Produkt und Zeitregeln"
        ]
      },
      {
        "title": "Prüfung",
        "tone": "positive",
        "points": [
          "Bereinigung und Rollregel",
          "Aussage und Grenzen"
        ]
      }
    ],
    "prompt": "Was macht den Bericht nachprüfbar?",
    "answers": [
      {
        "label": "Nur ein besonders glattes Bild.",
        "explanation": "Glätte erklärt weder Quelle noch Konstruktion."
      },
      {
        "label": "Eine Zusage für den nächsten Gewinn.",
        "explanation": "Ein Bericht über vergangene Daten garantiert keinen Gewinn."
      },
      {
        "label": "Datenherkunft, Regeln und klare Aussagegrenzen.",
        "explanation": "Bereinigung und Rollregel Aussage und Grenzen"
      }
    ],
    "correct": 2,
    "rule": "Datenherkunft und Rechenregel machen das Bild prüfbar.",
    "diagram": null
  }
];
export const chartsChapterNineLessons: Lesson[] = drafts.map((draft,index) => {
 const key=`reading-charts.chapter-09.lesson-${String(index+1).padStart(2,'0')}`;
 return {id:key,title:draft.title,summary:draft.summary,sourceUnit:'Kapitel 9 · Datenquellen, Bereinigungen und fortlaufende Kontrakte',sourceAnchors:[draft.title],durationMinutes:6,xp:35,status:'published',steps:[
 {id:`${key}.explain`,type:'explanation',eyebrow:'Charts verstehen · Kapitel 9',title:draft.title,paragraphs:draft.paragraphs,callout:draft.rule},
 ...(draft.diagram?[{id:`${key}.diagram`,type:'diagram' as const,title:draft.diagram==='rc9-split'?'Aktiensplit: zwei Stückeinheiten':draft.diagram==='rc9-dividend'?'Dividende: Preis, Anspruch und Geld':'Kontraktwechsel: roh und rückbereinigt',scenario:draft.diagram as ChartScenarioId,caption:'Eigene vereinfachte Lerndaten; keine tatsächlichen Markt- oder Ausführungsdaten.',observations:[dataDescriptions[draft.diagram as keyof typeof dataDescriptions]]}]:[]),
 {id:`${key}.compare`,type:'comparison',title:'Das Beispiel auf einen Blick',columns:draft.columns.map(c=>({...c,tone:c.tone as 'neutral'|'positive'}))},
 {id:`${key}.question`,type:'question',title:'Kurz prüfen',prompt:draft.prompt,correctOptionId:`choice-${draft.correct}`,options:draft.answers.map((a,i)=>({id:`choice-${i}`,...a}))},
 {id:`${key}.recap`,type:'recap',title:'Das nimmst du mit',points:[draft.rule,draft.paragraphs[2]]},
 ]};
});
