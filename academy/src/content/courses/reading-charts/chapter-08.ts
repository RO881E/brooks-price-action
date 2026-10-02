import type { Lesson, ChartScenarioId } from '../../types';
const drafts = [
  {
    "title": "Die Preisskala ist eine Zeichenregel",
    "summary": "Ein Skalenwechsel verändert die Positionen im Bild, nicht die Originalpreise.",
    "paragraphs": [
      "Nora öffnet zwei Bilder derselben erfundenen Aktie. Beide enthalten dieselben Schlusswerte zu denselben vier Zeitabschnitten. Trotzdem wirken die Steigungen unterschiedlich. Die Ursache liegt in der Preisskala: Sie legt fest, wo ein Zahlenwert auf der senkrechten Achse gezeichnet wird.",
      "Eine lineare Skala ordnet gleichen Euro-Abständen gleiche Bildabstände zu. Eine logarithmische Skala ordnet gleichen Preisverhältnissen gleiche Bildabstände zu. Das klingt zunächst schwierig; wir prüfen es an eigenen überschaubaren Zahlen.",
      "Denke an zwei unterschiedlich eingeteilte Messstreifen. Die Messwerte bleiben dieselben, aber ihre Abstände auf dem Streifen unterscheiden sich. Nora prüft daher zuerst Achsenbeschriftung und Skalentyp, bevor sie aus einem steileren Bild eine größere Preisänderung ableitet."
    ],
    "columns": [
      {
        "title": "Originaldaten",
        "tone": "neutral",
        "points": [
          "Gleiche Preise und Zeitpunkte.",
          "Kein zusätzlicher Handel durch den Skalenwechsel."
        ]
      },
      {
        "title": "Bilddarstellung",
        "tone": "positive",
        "points": [
          "Andere senkrechte Positionen möglich.",
          "Abstände hängen von der Skalenregel ab."
        ]
      }
    ],
    "prompt": "Was verändert ein reiner Skalenwechsel?",
    "answers": [
      {
        "label": "Die Darstellung der vorhandenen Preise.",
        "explanation": "Die Originalwerte bleiben erhalten."
      },
      {
        "label": "Die tatsächlich gehandelten Preise.",
        "explanation": "Eine Anzeige schreibt keine früheren Geschäfte um."
      },
      {
        "label": "Die Zahl der Aktien im Depot.",
        "explanation": "Eine Preisskala verändert keine Position."
      }
    ],
    "correct": 0,
    "rule": "Prüfe die Skalenregel, bevor du Bildabstände vergleichst.",
    "diagram": null
  },
  {
    "title": "Vier eigene Schlusswerte als Hauptfall verwenden",
    "summary": "Die gleiche Folge erscheint auf beiden Skalen.",
    "paragraphs": [
      "Unser Hauptbeispiel nennt vier abgeschlossene, gleich lange Zeitabschnitte der erfundenen Sora-Aktie. Ihre Schlusswerte sind15,00,30,00,60,00 und120,00 Euro je Aktie. Die waagerechten Abstände der Abschnitte bleiben in beiden Bildern gleich.",
      "Wir zeichnen nur eine Schlusslinie. Zu diesen vier Abschnitten sind keine vollständigen OHLC-Werte und keine Mengen vorgegeben. Deshalb behauptet das Bild weder Zwischenhochs noch Stückzahlen oder eine genaue Folge aller Geschäfte zwischen den Schlüssen.",
      "Die beiden Hauptbilder verwenden denselben Preisbereich von15 bis120 Euro und dieselbe Zeichenhöhe. Nur die senkrechte Zuordnung ist anders. Diese großen Sprünge sind ausdrücklich Lernzahlen. Sie erleichtern den Vergleich und sind keine Aussage über typische oder künftig erwartete Aktienrenditen."
    ],
    "columns": [
      {
        "title": "Gemeinsame Eingaben",
        "tone": "neutral",
        "points": [
          "Schlüsse15 /30 /60 /120 Euro.",
          "Vier gleich lange Abschnitte."
        ]
      },
      {
        "title": "Gemeinsame Bildgrenzen",
        "tone": "positive",
        "points": [
          "Preisbereich15 bis120.",
          "Gleiche Höhe und waagerechte Abstände."
        ]
      }
    ],
    "prompt": "Welche Daten sind für das Hauptbild bekannt?",
    "answers": [
      {
        "label": "Eine sichere nächste Verdopplung.",
        "explanation": "Die Folge enthält keine Zukunftsgarantie."
      },
      {
        "label": "Vier Schlusswerte, keine vollständigen OHLC oder Mengen.",
        "explanation": "Eine Schlusslinie erlaubt keine zusätzlichen Kennwerte zu erfinden."
      },
      {
        "label": "Vier vollständige Handelslisten.",
        "explanation": "Zwischengeschäfte sind nicht vorgegeben."
      }
    ],
    "correct": 1,
    "rule": "Halte Daten, Achsenbereich und Zeitabstände beim Skalenvergleich gleich.",
    "diagram": "rc8-doubling"
  },
  {
    "title": "Eine absolute Preisänderung in Euro messen",
    "summary": "Die Differenz braucht zwei eindeutig genannte Preise.",
    "paragraphs": [
      "Von15 auf30 Euro beträgt die Änderung30 minus15 gleich15 Euro je Aktie. Von60 auf120 Euro beträgt sie120 minus60 gleich60 Euro. Diese Euro-Differenz nennen wir absolute Preisänderung.",
      "Absolut heißt hier „in Preiseinheiten“. Wir behalten das Vorzeichen bei: Ein Anstieg ist positiv, ein Rückgang negativ. Der Betrag wäre die Größe ohne Vorzeichen. Beispielsweise ist die Änderung von30 auf15 gleich−15 Euro, ihr Betrag aber15.",
      "Die Änderung von60 auf120 ist in Euro viermal so groß wie die von15 auf30. Daraus folgt noch nicht, dass sie relativ zum Anfangspreis viermal so groß ist. Nora berechnet diese zweite Frage gesondert. Auch eine persönliche Geldänderung hängt zusätzlich von der gehaltenen Menge ab."
    ],
    "columns": [
      {
        "title": "Erster Vergleich",
        "tone": "neutral",
        "points": [
          "15 →30: +15 Euro je Aktie.",
          "Anfang und Ende klar genannt."
        ]
      },
      {
        "title": "Zweiter Vergleich",
        "tone": "positive",
        "points": [
          "60 →120: +60 Euro je Aktie.",
          "Viermal größere Euro-Differenz."
        ]
      }
    ],
    "prompt": "Wie groß ist die absolute Preisänderung von60 auf120?",
    "answers": [
      {
        "label": "Plus100 Euro je Aktie.",
        "explanation": "100 ist später der prozentuale Anstieg, nicht die Euro-Differenz."
      },
      {
        "label": "Plus15 Euro je Aktie.",
        "explanation": "15 gehört zum ersten Vergleich."
      },
      {
        "label": "Plus60 Euro je Aktie.",
        "explanation": "120 minus60 ergibt60."
      }
    ],
    "correct": 2,
    "rule": "Miss absolute Preisänderungen als Ende minus Anfang in der genannten Preiseinheit.",
    "diagram": null
  },
  {
    "title": "Die relative Preisänderung am Anfangswert messen",
    "summary": "Ein Prozentwert braucht eine bekannte Basis.",
    "paragraphs": [
      "Für eine relative Preisänderung teilen wir die Euro-Differenz durch den Anfangspreis und multiplizieren mit100. Von15 auf30 lautet die Rechnung(30 −15) /15 ×100 =100 Prozent.",
      "Von60 auf120 ergibt(120 −60) /60 ×100 ebenfalls100 Prozent. Beide Preise verdoppeln sich. Ihre Euro-Zuwächse sind verschieden, ihre Verhältnisse zum jeweiligen Anfangspreis gleich. Prozent bedeutet hier ein Anteil von hundert.",
      "Der Anfangswert ist der Basiswert dieser Rechnung. Nora schreibt ihn mit, weil derselbe Euro-Abstand bei anderer Basis einen anderen Prozentwert ergibt. Ein Prozentwert allein nennt außerdem keine Aktienmenge und keinen persönlich ausgezahlten Gewinn."
    ],
    "columns": [
      {
        "title": "15 →30",
        "tone": "neutral",
        "points": [
          "Differenz15, Basis15.",
          "Relative Änderung+100%."
        ]
      },
      {
        "title": "60 →120",
        "tone": "positive",
        "points": [
          "Differenz60, Basis60.",
          "Relative Änderung ebenfalls+100%."
        ]
      }
    ],
    "prompt": "Wie groß ist der relative Anstieg von60 auf120?",
    "answers": [
      {
        "label": "100 Prozent.",
        "explanation": "Die Differenz60 ist genau so groß wie die Basis60."
      },
      {
        "label": "60 Prozent.",
        "explanation": "60 ist die Euro-Differenz, nicht der Anteil an60."
      },
      {
        "label": "400 Prozent.",
        "explanation": "Viermal größer ist nur die Euro-Differenz gegenüber dem ersten Vergleich."
      }
    ],
    "correct": 0,
    "rule": "Berechne Prozentänderungen mit der ausdrücklich genannten Anfangsbasis.",
    "diagram": null
  },
  {
    "title": "Auf einer linearen Skala gleiche Euro-Abstände erkennen",
    "summary": "Linear wird auch arithmetisch genannt.",
    "paragraphs": [
      "Eine lineare Preisskala teilt die Achse in gleich große Preiseinheiten ein.15 Euro Abstand bekommen überall innerhalb derselben festen Skala dieselbe Bildhöhe. Die Bezeichnung arithmetische Skala meint hier dieselbe Regel.",
      "Für einen getrennten Lernfall verwenden wir die Schlussfolge15,30,45 und60 Euro. Jeder Schritt steigt um15. Bei gleichen Zeitabständen ergibt diese Folge auf einer linearen Skala eine gerade ansteigende Verbindung.",
      "Die Prozentzuwächse dieser Schritte sind dagegen100%,50% und ungefähr33,3%. Die lineare Gleichheit beschreibt nur die Euro-Differenz. Nora liest die beschrifteten Zahlen und verwechselt gleich hohe Bildabschnitte nicht mit gleich großen relativen Veränderungen."
    ],
    "columns": [
      {
        "title": "Gleiche Euro-Schritte",
        "tone": "neutral",
        "points": [
          "15 →30 →45 →60.",
          "Dreimal+15 Euro."
        ]
      },
      {
        "title": "Verschiedene Prozent-Schritte",
        "tone": "positive",
        "points": [
          "+100% /+50% /ungefähr+33,3%.",
          "Jeder Schritt hat eine andere Anfangsbasis."
        ]
      }
    ],
    "prompt": "Welche Abstände sind auf derselben linearen Skala gleich hoch?",
    "answers": [
      {
        "label": "Immer gleiche Aktienmengen.",
        "explanation": "Eine Preisachse zeigt kein Volumen."
      },
      {
        "label": "Gleiche Euro-Differenzen.",
        "explanation": "Die lineare Achse verteilt Preiseinheiten gleichmäßig."
      },
      {
        "label": "Immer gleiche Prozentzuwächse.",
        "explanation": "Diese können je nach Preisniveau verschiedene Euro-Differenzen haben."
      }
    ],
    "correct": 1,
    "rule": "Lies gleiche Bildhöhen auf einer linearen Skala als gleiche Preisabstände.",
    "diagram": "rc8-additive"
  },
  {
    "title": "Auf einer logarithmischen Skala gleiche Preisfaktoren erkennen",
    "summary": "Gleiche Verhältnisse erzeugen gleiche Bildhöhen.",
    "paragraphs": [
      "Bei einer logarithmischen Skala zählt das Verhältnis zwischen zwei positiven Preisen. Von15 auf30 ist der Faktor30 geteilt durch15 gleich2. Von30 auf60 und von60 auf120 ist der Faktor ebenfalls2.",
      "Alle drei Verdopplungen erscheinen deshalb auf derselben logarithmischen Skala gleich hoch. Bei gleichen waagerechten Zeitabständen liegen unsere vier Hauptwerte auf einer geraden ansteigenden Verbindung. Auf der linearen Skala werden die Euro-Zuwächse dagegen immer höher gezeichnet.",
      "Nora muss für diese Leseregel keinen Logarithmus von Hand ausrechnen. Wichtig ist der Preisfaktor: Gleiches Ende-Anfang-Verhältnis ergibt gleiche logarithmische Bildentfernung. Die Skala verändert weder die Euro-Werte noch die Zeitpunkte der zugrunde liegenden Schlüsse."
    ],
    "columns": [
      {
        "title": "Preisfaktor",
        "tone": "neutral",
        "points": [
          "30/15 =60/30 =120/60 =2.",
          "Drei gleiche Verhältnisse."
        ]
      },
      {
        "title": "Logarithmisches Bild",
        "tone": "positive",
        "points": [
          "Drei gleich hohe Aufwärtsschritte.",
          "Jeder entspricht einer Verdopplung."
        ]
      }
    ],
    "prompt": "Warum sind die drei Verdopplungen im Log-Bild gleich hoch?",
    "answers": [
      {
        "label": "Weil alle Euro-Zuwächse15 betragen.",
        "explanation": "Sie betragen15,30 und60."
      },
      {
        "label": "Weil die Originalpreise geändert wurden.",
        "explanation": "Die vier Werte sind auf beiden Skalen identisch."
      },
      {
        "label": "Weil jeder Schritt denselben Preisfaktor2 hat.",
        "explanation": "Die logarithmische Entfernung hängt vom Verhältnis ab."
      }
    ],
    "correct": 2,
    "rule": "Lies gleiche logarithmische Bildhöhen als gleiche positive Preisverhältnisse.",
    "diagram": "rc8-doubling"
  },
  {
    "title": "Gleiche Euro-Zuwächse werden im Log-Bild unterschiedlich hoch",
    "summary": "Der gleiche Betrag hat bei größerer Basis einen kleineren Anteil.",
    "paragraphs": [
      "Im getrennten Beispiel15 →30 →45 →60 beträgt jeder Zuwachs15 Euro. Der erste Schritt verdoppelt den Preis. Der zweite multipliziert ihn mit1,5, der dritte mit4/3, also ungefähr1,333.",
      "Im logarithmischen Bild werden diese Schritte deshalb nacheinander kleiner. Der erste entspricht+100%, der zweite+50%, der dritte ungefähr+33,3%. Im linearen Bild bleiben die drei Euro-Schritte dagegen gleich hoch.",
      "Zum Vergleich außerhalb dieser gezeichneten Folge würde ein Schritt60 →75 ebenfalls15 Euro betragen, relativ aber nur25%. Nora erkennt daran, dass die Grundlage der Prozentrechnung immer der jeweilige Anfangspreis ist. Gleiche Euro-Beträge allein reichen für gleiche logarithmische Abstände nicht aus."
    ],
    "columns": [
      {
        "title": "Lineares Bild",
        "tone": "neutral",
        "points": [
          "Dreimal derselbe Euro-Zuwachs.",
          "Gleich hohe Bildschritte."
        ]
      },
      {
        "title": "Logarithmisches Bild",
        "tone": "positive",
        "points": [
          "Faktoren2 /1,5 /ungefähr1,333.",
          "Die Bildschritte werden kleiner."
        ]
      }
    ],
    "prompt": "Welcher relative Anstieg gehört zu30 →45?",
    "answers": [
      {
        "label": "50 Prozent.",
        "explanation": "15 Euro Zuwachs geteilt durch30 Euro Basis ergibt0,5."
      },
      {
        "label": "100 Prozent.",
        "explanation": "Das gilt für15 →30."
      },
      {
        "label": "15 Prozent.",
        "explanation": "15 ist hier der Euro-Zuwachs."
      }
    ],
    "correct": 0,
    "rule": "Vergleiche Euro-Differenzen und Preisverhältnisse getrennt.",
    "diagram": "rc8-additive"
  },
  {
    "title": "Gleiche Prozentzuwächse bei anderen Preisniveaus prüfen",
    "summary": "Ein Viertel der Basis kann verschiedene Euro-Beträge bedeuten.",
    "paragraphs": [
      "Für einen weiteren getrennten Vergleich steigt ein Preis von16 auf20. Die Differenz ist4, und4 geteilt durch16 ergibt0,25. Das sind25 Prozent. Ein anderer Preis steigt von64 auf80:16 geteilt durch64 ergibt ebenfalls0,25.",
      "Beide Schritte haben den Faktor1,25. Auf derselben logarithmischen Skala mit passenden Grenzen sind ihre senkrechten Entfernungen daher gleich. Auf derselben linearen Skala ist der zweite Euro-Abstand viermal so groß wie der erste.",
      "Dieser Vergleich gilt nur bei gleicher Zuordnung der Preisachse und gleicher Zeichenhöhe. Zwei Bilder mit verschiedenem Zoom können trotz gleicher Regel unterschiedliche Pixelhöhen haben. Nora nennt deshalb auch den gemeinsamen Achsenbereich, wenn sie konkrete Bildlängen gegenüberstellt."
    ],
    "columns": [
      {
        "title": "16 →20",
        "tone": "neutral",
        "points": [
          "+4 Euro, +25%, Faktor1,25.",
          "Kleinere Euro-Basis."
        ]
      },
      {
        "title": "64 →80",
        "tone": "positive",
        "points": [
          "+16 Euro, +25%, Faktor1,25.",
          "Gleicher relativer Schritt."
        ]
      }
    ],
    "prompt": "Welchen Preisfaktor haben beide Schritte?",
    "answers": [
      {
        "label": "25.",
        "explanation": "25% bedeutet nicht eine Verfünfundzwanzigfachung."
      },
      {
        "label": "1,25.",
        "explanation": "Der Endpreis ist jeweils125% des Anfangspreises."
      },
      {
        "label": "4.",
        "explanation": "Vier ist die erste Euro-Differenz und das Verhältnis der beiden Euro-Differenzen."
      }
    ],
    "correct": 1,
    "rule": "Prüfe gleiche Faktoren unter derselben festen Skalenabbildung.",
    "diagram": null
  },
  {
    "title": "Verdopplung und Halbierung mit ihrer Richtung lesen",
    "summary": "Gleich große Log-Abstände haben nicht symmetrische einfache Prozentzahlen.",
    "paragraphs": [
      "Von15 auf30 ist der einfache prozentuale Anstieg100%. In der Gegenrichtung30 →15 beträgt die Differenz−15. Geteilt durch die neue Anfangsbasis30 sind das−50%. Der Rückweg hat also eine andere Prozentzahl.",
      "Die beiden Wege verbinden dieselben Preisniveaus. Im Log-Bild ist ihre Entfernung deshalb gleich groß, nur die Richtung umgekehrt. Ihre Faktoren2 und0,5 sind gegenseitige Kehrwerte:2 mal0,5 ergibt1.",
      "Daraus darf Nora nicht ableiten, dass+20% und−20% gleich weit auseinanderliegen oder sich einfach aufheben. Der Anfangspreis wechselt. Sie nennt bei jeder einfachen Prozentänderung die Richtung und Basis, statt gleichen Bildhöhen automatisch gleiche vorzeichenumgekehrte Prozentzahlen zuzuordnen."
    ],
    "columns": [
      {
        "title": "Aufwärts15 →30",
        "tone": "neutral",
        "points": [
          "Faktor2.",
          "Einfache Änderung+100%."
        ]
      },
      {
        "title": "Abwärts30 →15",
        "tone": "positive",
        "points": [
          "Faktor0,5.",
          "Einfache Änderung−50%."
        ]
      }
    ],
    "prompt": "Welche Prozentänderung beschreibt30 →15?",
    "answers": [
      {
        "label": "Minus100 Prozent.",
        "explanation": "Das würde aus30 den Preis0 machen."
      },
      {
        "label": "Plus100 Prozent.",
        "explanation": "Das gehört zur Gegenrichtung15 →30."
      },
      {
        "label": "Minus50 Prozent.",
        "explanation": "Die Differenz−15 wird durch die Anfangsbasis30 geteilt."
      }
    ],
    "correct": 2,
    "rule": "Trenne gleiche logarithmische Entfernung von einfacher Prozentzahl und Richtung.",
    "diagram": null
  },
  {
    "title": "Drei Verdopplungen nicht als dreihundert Prozent addieren",
    "summary": "Aufeinanderfolgende Faktoren werden multipliziert.",
    "paragraphs": [
      "Unsere Hauptfolge startet bei15 und endet bei120. Die drei Schritte haben jeweils den Faktor2. Gemeinsam ergibt2 ×2 ×2 =8. Der Endpreis ist also achtmal der Anfangspreis.",
      "Die einfache Gesamtänderung ist(120 −15) /15 ×100 =700 Prozent. Nicht300 Prozent: Jeder neue100%-Schritt bezieht sich auf einen inzwischen größeren Anfangspreis. Die einzelnen Euro-Zuwächse15,30 und60 ergeben insgesamt105 Euro.",
      "Nora unterscheidet Preisfaktor und Zuwachs: Faktor8 bedeutet800% des ursprünglichen Preiswerts, aber einen Zuwachs von700%. Das ist eine Rechnung mit fiktiven Schlusswerten. Sie behauptet weder einen üblichen Marktverlauf noch eine persönliche Strategieperformance oder eine nächste Verdopplung."
    ],
    "columns": [
      {
        "title": "Faktorrechnung",
        "tone": "neutral",
        "points": [
          "2 ×2 ×2 =8.",
          "120 ist achtmal15."
        ]
      },
      {
        "title": "Gesamtzuwachs",
        "tone": "positive",
        "points": [
          "(120 −15)/15 =7.",
          "Plus700% gegenüber dem Start."
        ]
      }
    ],
    "prompt": "Wie groß ist der Gesamtanstieg von15 auf120?",
    "answers": [
      {
        "label": "700 Prozent.",
        "explanation": "Der Faktor8 enthält den ursprünglichen100%-Anteil bereits."
      },
      {
        "label": "300 Prozent.",
        "explanation": "Die aufeinanderfolgenden Änderungen haben verschiedene Basen."
      },
      {
        "label": "800 Prozent Zuwachs.",
        "explanation": "800% ist der Endwertanteil am Anfangswert, nicht der zusätzliche Anstieg."
      }
    ],
    "correct": 0,
    "rule": "Multipliziere aufeinanderfolgende Faktoren und ziehe für den Gesamtzuwachs1 ab.",
    "diagram": null
  },
  {
    "title": "Eine feste Prozentbasis ist nicht automatisch eine Log-Skala",
    "summary": "Achsenbeschriftung und Abstandsregel sind verschiedene Angaben.",
    "paragraphs": [
      "Nora kann alle Hauptwerte auch auf den festen Anfangspreis15 beziehen. Dann lauten die Änderungen gegenüber diesem Start0%,100%,300% und700%. Das ist eine feste gemeinsame Prozentbasis, keine Reihe von Prozentänderungen zum jeweiligen Vorgänger.",
      "Eine linear angeordnete Achse solcher Basis-Prozentwerte zeigt gleiche Abstände für gleiche Prozentpunkt-Differenzen. Die Hauptschritte liegen dort100,200 und400 Prozentpunkte auseinander. Sie werden also größer gezeichnet, obwohl jeder Preis zum Vorgänger verdoppelt wurde.",
      "Eine logarithmische Preisachse zeigt dagegen gleiche Abstände für die gleichen Preisfaktoren2. Das Wort Prozent in einer Achsenbeschriftung genügt deshalb nicht, um die Abstandsregel zu kennen. Nora fragt zusätzlich, welche Basis und welche Skalenfunktion verwendet werden."
    ],
    "columns": [
      {
        "title": "Feste Basis15",
        "tone": "neutral",
        "points": [
          "Werte0% /100% /300% /700%.",
          "Differenzen100 /200 /400 Prozentpunkte."
        ]
      },
      {
        "title": "Logarithmische Preisregel",
        "tone": "positive",
        "points": [
          "Faktoren zum Vorgänger jeweils2.",
          "Gleiche Bildhöhe je Verdopplung."
        ]
      }
    ],
    "prompt": "Ist eine linear angeordnete Prozentachse automatisch logarithmisch?",
    "answers": [
      {
        "label": "Ja, weil Prozentwerte niemals negativ werden.",
        "explanation": "Änderungen zu einer festen positiven Basis können negativ sein."
      },
      {
        "label": "Nein, die Abstandsregel muss gesondert geprüft werden.",
        "explanation": "Feste Basis-Prozentwerte können linear angeordnet sein."
      },
      {
        "label": "Ja, sobald ein Prozentzeichen erscheint.",
        "explanation": "Das Zeichen nennt eine Einheit, nicht die gesamte Skalenregel."
      }
    ],
    "correct": 1,
    "rule": "Prüfe Basis und Abstandsregel einer Prozentachse gesondert.",
    "diagram": null
  },
  {
    "title": "Eine Indexierung auf hundert sauber lesen",
    "summary": "Ein gemeinsamer Startwert erleichtert den Vergleich, ersetzt aber keine Skalenangabe.",
    "paragraphs": [
      "Bei einer Indexierung auf100 wird der gewählte Anfangspreis auf den Wert100 gesetzt. Jeder spätere Indexwert lautet aktueller Preis geteilt durch Anfangspreis mal100. Unsere Hauptfolge15,30,60,120 ergibt100,200,400,800.",
      "Der Indexwert200 bedeutet doppelt so hoher Preis wie am Start und damit+100% Preisänderung. Er bedeutet nicht+200% Zuwachs. Ebenso ist800 der achtfache Startwert und entspricht+700% Änderung.",
      "Indexierung ist eine Umrechnung der Werte auf eine gemeinsame Basis. Ob diese Indexwerte linear oder logarithmisch angeordnet werden, ist eine weitere Einstellung. Unterschiedliche Startzeitpunkte könnten zudem andere Vergleichswerte erzeugen. Nora notiert daher Startbasis, Zeitpunkt und Skalenregel zusammen."
    ],
    "columns": [
      {
        "title": "Originalpreise",
        "tone": "neutral",
        "points": [
          "15 /30 /60 /120 Euro.",
          "Anfangsbasis15 Euro."
        ]
      },
      {
        "title": "Index auf100",
        "tone": "positive",
        "points": [
          "100 /200 /400 /800.",
          "Index200 bedeutet+100% gegenüber dem Start."
        ]
      }
    ],
    "prompt": "Welche Preisänderung entspricht dem Indexwert200 bei Start100?",
    "answers": [
      {
        "label": "Plus200 Prozent.",
        "explanation": "Der Endwert200 enthält die ursprünglichen100 bereits."
      },
      {
        "label": "200 Euro je Aktie zwingend.",
        "explanation": "Ein Indexwert ist nicht automatisch der Originalpreis in Euro."
      },
      {
        "label": "Plus100 Prozent.",
        "explanation": "Der Index hat sich verdoppelt."
      }
    ],
    "correct": 2,
    "rule": "Trenne Indexstand, Preisänderung und Skalenregel.",
    "diagram": null
  },
  {
    "title": "OHLC bleibt beim reinen Skalenwechsel unverändert",
    "summary": "Andere Körperformen bedeuten keine anderen Originalkennwerte.",
    "paragraphs": [
      "Für ein getrenntes Kerzenbild verwenden wir zwei eigene OHLC-Sätze. Kerze A hat O15/H30/L12/C24. Kerze B hat O60/H120/L48/C96. Alle Preise sind Euro je Aktie; Mengen und Einzelgeschäftsfolgen sind nicht vorgegeben.",
      "Jeder Wert der Kerze B ist viermal so groß wie der entsprechende Wert der Kerze A. Beide Kerzen werden jeweils auf einer linearen und einer logarithmischen Preisachse gezeigt. Auf beiden bleiben ihre O-, H-, L- und C-Zahlen identisch.",
      "Die senkrechte Zeichnung verändert sich, aber die Ordnung bleibt: Das Hoch liegt oben, das Tief unten. Beide Körper steigen, weil C größer als O ist. Nora verwechselt den Skalenwechsel weder mit einer Neuberechnung wie Heikin-Ashi noch mit einer Änderung der Zeitfenster."
    ],
    "columns": [
      {
        "title": "Kerze A",
        "tone": "neutral",
        "points": [
          "O15/H30/L12/C24.",
          "Normale Originalkennwerte."
        ]
      },
      {
        "title": "Kerze B",
        "tone": "positive",
        "points": [
          "O60/H120/L48/C96.",
          "Viermalige Preise, gleiche Verhältnisse."
        ]
      }
    ],
    "prompt": "Welche OHLC-Werte hat Kerze A nach dem Log-Skalenwechsel?",
    "answers": [
      {
        "label": "Weiterhin O15/H30/L12/C24.",
        "explanation": "Nur die Zeichenpositionen ändern sich."
      },
      {
        "label": "Neue HA-Werte aus Durchschnittspreisen.",
        "explanation": "Ein reiner Skalenwechsel ist keine HA-Berechnung."
      },
      {
        "label": "Alle Werte werden durch vier geteilt.",
        "explanation": "Das wäre eine Änderung der Daten, nicht der Skalenabbildung."
      }
    ],
    "correct": 0,
    "rule": "Trenne Preisabbildung von einer Berechnung neuer OHLC-Werte.",
    "diagram": "rc8-candles"
  },
  {
    "title": "Kerzenkörper in Euro und als Verhältnis vergleichen",
    "summary": "Gleiche relative Körper können verschiedene Euro-Höhen haben.",
    "paragraphs": [
      "Kerze A steigt im Körper von15 auf24. Ihre Körperhöhe beträgt9 Euro, ihr Preisfaktor24/15 =1,6. Die relative Änderung beträgt60%. Kerze B steigt von60 auf96:36 Euro, ebenfalls Faktor1,6 und+60%.",
      "Auf derselben linearen Skala wird der zweite Körper viermal so hoch gezeichnet wie der erste. Auf derselben logarithmischen Skala bekommen die beiden Faktoren1,6 dagegen gleiche Körperhöhen. Auch ihre Schattenverhältnisse sind gleich, weil alle zugehörigen Preise um denselben Faktor4 skaliert wurden.",
      "Das ist eine Eigenschaft der ausdrücklich vorgegebenen proportionalen Kerzen. Es bedeutet nicht, dass gleiche Log-Körper immer gleiche Mengen, Kosten oder persönliche Gewinne anzeigen. Nora liest die verwendeten Preisverhältnisse und ergänzt für andere Fragen die benötigten Daten."
    ],
    "columns": [
      {
        "title": "Kerze A",
        "tone": "neutral",
        "points": [
          "24 −15 =9 Euro.",
          "24/15 =1,6; Körperänderung+60%."
        ]
      },
      {
        "title": "Kerze B",
        "tone": "positive",
        "points": [
          "96 −60 =36 Euro.",
          "96/60 =1,6; Körperänderung+60%."
        ]
      }
    ],
    "prompt": "Wie unterscheiden sich die Körperhöhen auf derselben Log-Skala?",
    "answers": [
      {
        "label": "Kerze A erhält einen fallenden Körper.",
        "explanation": "Ein monotoner Skalenwechsel kehrt die Preisordnung nicht um."
      },
      {
        "label": "Sie sind gleich, weil beide den Faktor1,6 haben.",
        "explanation": "Die logarithmische Höhe hängt vom Verhältnis der Körpergrenzen ab."
      },
      {
        "label": "Kerze B ist zwingend viermal so hoch.",
        "explanation": "Das gilt für dieselbe lineare Preisabbildung."
      }
    ],
    "correct": 1,
    "rule": "Vergleiche gezeichnete Körperhöhen mit der verwendeten Abstandsregel.",
    "diagram": "rc8-candles"
  },
  {
    "title": "Den Körperanteil nicht ungeprüft aus Pixeln ablesen",
    "summary": "Ein Preisverhältnis aus Euro-Abständen ist auf Log-Papier anders gezeichnet.",
    "paragraphs": [
      "Bei Kerze A beträgt die Körperhöhe24 −15 =9 Euro. Die Hoch-Tief-Spanne beträgt30 −12 =18 Euro. Der Körperanteil in Preisabständen ist also9/18 gleich50%. Für Kerze B ergibt36/72 ebenfalls50%.",
      "Im logarithmischen Bild wird dagegen das Verhältnis24/15 für den Körper und30/12 für die gesamte Spanne abgebildet. Das gezeichnete Verhältnis ihrer Höhen beträgt ungefähr51,3%, nicht genau50%. Die Log-Abbildung ist innerhalb der Kerze nicht linear in Euro.",
      "Nora berechnet einen ausdrücklich in Preisabständen definierten Körperanteil daher aus den Originalzahlen. Sie ersetzt diese Rechnung nicht durch ein Lineal auf einem unbekannt skalierten Bildschirm. Körperhöhe, Schattenhöhe und Prozentanteil brauchen ihre jeweilige Definition."
    ],
    "columns": [
      {
        "title": "Preisanteil aus OHLC",
        "tone": "neutral",
        "points": [
          "Körper9 Euro, Spanne18 Euro.",
          "9/18 =50%."
        ]
      },
      {
        "title": "Anteil der Log-Zeichenhöhe",
        "tone": "positive",
        "points": [
          "Verhältnisse1,6 für Körper und2,5 für Spanne.",
          "Gezeichnet ungefähr51,3%."
        ]
      }
    ],
    "prompt": "Wie berechnet Nora den Körperanteil in Euro-Abständen?",
    "answers": [
      {
        "label": "Immer aus den Pixeln des Log-Bilds.",
        "explanation": "Die Pixelhöhen folgen einer anderen Zuordnung."
      },
      {
        "label": "Aus der Aktienmenge des Körpers.",
        "explanation": "Eine normale Kerze nennt keine besondere Körper-Aktienmenge."
      },
      {
        "label": "Aus |C −O| geteilt durch H −L.",
        "explanation": "Damit verwendet sie die erklärte Preisdefinition."
      }
    ],
    "correct": 2,
    "rule": "Berechne Preisanteile aus Preisen und benenne Bildanteile gesondert.",
    "diagram": "rc8-candles"
  },
  {
    "title": "Null und negative Werte auf einer reinen Log-Preisskala ausschließen",
    "summary": "Unsere Log-Abbildung benötigt ausschließlich positive Werte.",
    "paragraphs": [
      "Unser logarithmisches Lernmodell ist nur für Preise größer als null definiert. Zu null gibt es in dieser Abbildung keine endliche Zeichenstelle. Für negative Zahlen ist der verwendete reelle Preislogarithmus ebenfalls nicht definiert.",
      "Das bedeutet nicht, dass jeder denkbare Marktwert positiv sein muss. Beispielsweise könnte eine berechnete Differenz zweier Preise negativ werden. Diese Differenz ist eine andere Größe und braucht eine geeignete Darstellung. Die gewöhnliche positive Log-Preisregel lässt sich nicht einfach darauf anwenden.",
      "Ein Programm kann besondere Verfahren für Vorzeichen oder Übergänge verwenden. Solche Verfahren müssen eigens erklärt sein; wir nennen sie nicht automatisch dieselbe reine Log-Skala. Nora prüft Datenart und zulässigen Wertebereich, bevor sie einen Chartmodus auswählt."
    ],
    "columns": [
      {
        "title": "Reines Log-Lernmodell",
        "tone": "neutral",
        "points": [
          "Nur positive Preise und positive Achsengrenzen.",
          "Null und negative Eingaben werden zurückgewiesen."
        ]
      },
      {
        "title": "Andere Datenarten",
        "tone": "positive",
        "points": [
          "Differenzen können null oder negativ sein.",
          "Dafür passende gesonderte Abbildung prüfen."
        ]
      }
    ],
    "prompt": "Welcher Wert passt nicht in unsere reine Log-Preisabbildung?",
    "answers": [
      {
        "label": "Null Euro.",
        "explanation": "Die verwendete positive Log-Abbildung hat dort keine endliche Position."
      },
      {
        "label": "0,50 Euro.",
        "explanation": "Ein positiver kleiner Preis ist mathematisch zulässig."
      },
      {
        "label": "15 Euro.",
        "explanation": "Dieser positive Preis ist Teil unseres Hauptfalls."
      }
    ],
    "correct": 0,
    "rule": "Prüfe den zulässigen Wertebereich der verwendeten Skalenfunktion.",
    "diagram": null
  },
  {
    "title": "Eine lineare Achse kann auch null oder negative Zahlen enthalten",
    "summary": "Die Datenbedeutung bleibt unabhängig von der Zeichenregel zu prüfen.",
    "paragraphs": [
      "Eine lineare Zahlenachse kann beispielsweise von−10 bis+10 reichen. Die Werte−5,0 und+5 stehen dann in gleichen Abständen. Für die lineare Zuordnung sind Vorzeichen grundsätzlich kein Hindernis.",
      "Das ist hier eine allgemeine Zahlenabbildung, keine Behauptung über die Preise unserer Sora-Aktie. Nora könnte sie beispielsweise für eine erklärte Preisdifferenz verwenden. Einheit und Bedeutung dieser Differenz müssen weiterhin bekannt sein.",
      "Die einfache Prozentänderungsrechnung braucht ebenfalls Aufmerksamkeit: Eine Anfangsbasis von null erlaubt keine Division durch den Anfangswert. Für unsere positiven Preisvergleiche verwenden wir deshalb eine positive Basis. Dass ein Wert linear gezeichnet werden kann, macht jede denkbare Prozentrechnung noch nicht gültig."
    ],
    "columns": [
      {
        "title": "Lineare Darstellung",
        "tone": "neutral",
        "points": [
          "−5 /0 /+5 können gezeichnet werden.",
          "Gleiche Zahlendifferenzen, gleiche Bildabstände."
        ]
      },
      {
        "title": "Prozentrechnung prüfen",
        "tone": "positive",
        "points": [
          "Basis0 darf nicht als Divisor dienen.",
          "Hier Prozentänderungen mit positiver Preisbasis."
        ]
      }
    ],
    "prompt": "Kann eine lineare Zahlenachse null darstellen?",
    "answers": [
      {
        "label": "Ja, deshalb kann man immer durch null teilen.",
        "explanation": "Darstellung und gültige Division sind getrennte Fragen."
      },
      {
        "label": "Ja, bei einem passenden endlichen Achsenbereich.",
        "explanation": "Die lineare Zuordnung braucht keine positive Log-Eingabe."
      },
      {
        "label": "Nein, jede Skala muss positive Werte haben.",
        "explanation": "Diese Einschränkung gehört zu unserem reinen Log-Modell."
      }
    ],
    "correct": 1,
    "rule": "Trenne zulässige Darstellung von der Gültigkeit einer Verhältnisrechnung.",
    "diagram": null
  },
  {
    "title": "Die Mitte zwischen zwei Achsenwerten richtig lesen",
    "summary": "Lineare Mitte und logarithmische Mitte sind unterschiedliche Preiswerte.",
    "paragraphs": [
      "Wir betrachten die zwei Preisniveaus30 und120. Die lineare Mitte liegt bei(30 +120)/2 =75. Nach beiden Seiten beträgt der Preisabstand45 Euro. Das ist die arithmetische Mitte.",
      "Die logarithmische Mitte liegt dagegen bei60. Von30 auf60 und von60 auf120 gilt jeweils der Faktor2. Die gleichen Verhältnisse machen die beiden Log-Abstände gleich groß.60 ist die geometrische Mitte, also die positive Quadratwurzel aus30 mal120.",
      "Nora muss die Quadratwurzel hier nicht selbst bestimmen:30 ×120 =3600 und60 ×60 =3600. Sie erkennt, warum die Mitte auf dem Bildschirm nicht immer der Durchschnitt der angrenzenden Preislabels ist. Vor dem Schätzen eines Preises liest sie die Skalenregel."
    ],
    "columns": [
      {
        "title": "Lineare Mitte",
        "tone": "neutral",
        "points": [
          "Zwischen30 und120:75.",
          "Gleiche Euro-Abstände45 und45."
        ]
      },
      {
        "title": "Logarithmische Mitte",
        "tone": "positive",
        "points": [
          "Zwischen30 und120:60.",
          "Gleiche Faktoren2 und2."
        ]
      }
    ],
    "prompt": "Welcher Preis liegt logarithmisch in der Mitte zwischen30 und120?",
    "answers": [
      {
        "label": "75 Euro.",
        "explanation": "Das ist die arithmetische Mitte."
      },
      {
        "label": "90 Euro.",
        "explanation": "90 ist die gesamte Euro-Differenz, nicht der mittlere Preis."
      },
      {
        "label": "60 Euro.",
        "explanation": "30 →60 und60 →120 sind gleiche Verdopplungen."
      }
    ],
    "correct": 2,
    "rule": "Lies Zwischenpositionen mit der verwendeten Skala statt mit einer ungeprüften Euro-Mittelung.",
    "diagram": null
  },
  {
    "title": "Einen steileren Winkel nicht als zusätzliche Preisänderung lesen",
    "summary": "Die Form hängt auch vom Seitenverhältnis des Bilds ab.",
    "paragraphs": [
      "Nora zieht ein Chartfenster höher und schmaler. Dieselben Punkte können danach steiler verbunden erscheinen, obwohl Preise und Zeitabstände unverändert bleiben. Das Verhältnis von Bildbreite zu Bildhöhe nennen wir Seitenverhältnis.",
      "Auch ein Wechsel zwischen linearer und logarithmischer Achse verändert die sichtbaren Steigungen. Eine bestimmte Winkelzahl auf dem Bildschirm ist deshalb ohne Skala, Grenzen und Abmessungen keine stabile Marktgröße.",
      "Nora beschreibt eine Bewegung besser mit klaren Preis- und Zeitbezügen als mit „sieht steil aus“. Im Hauptfall kann sie drei Verdopplungen in drei gleichen Zeitabständen nennen. Daraus folgt keine sichere Fortsetzung und keine zusätzliche Bewegung allein durch das schmalere Bild."
    ],
    "columns": [
      {
        "title": "Gleiche Eingaben",
        "tone": "neutral",
        "points": [
          "Unveränderte Preise und Zeitpunkte.",
          "Unveränderte Euro- und Prozentrechnungen."
        ]
      },
      {
        "title": "Verändertes Bild",
        "tone": "positive",
        "points": [
          "Andere Breite oder Höhe.",
          "Sichtbarer Winkel kann sich ändern."
        ]
      }
    ],
    "prompt": "Was kann einen Chart optisch steiler machen, ohne Preise zu verändern?",
    "answers": [
      {
        "label": "Ein anderes Seitenverhältnis des Bilds.",
        "explanation": "Höher und schmaler kann dieselbe Verbindung steiler erscheinen lassen."
      },
      {
        "label": "Zusätzlicher garantierter Gewinn.",
        "explanation": "Die Zeichnungsform bestätigt keine Auszahlung."
      },
      {
        "label": "Immer eine neue Geschäftsmeldung.",
        "explanation": "Eine reine Größenänderung braucht keine neue Meldung."
      }
    ],
    "correct": 0,
    "rule": "Beschreibe Bewegungen mit Daten und nicht allein mit Bildschirmwinkeln.",
    "diagram": null
  },
  {
    "title": "Den Achsenbereich beim Höhenvergleich festhalten",
    "summary": "Andere Grenzen können denselben Preisabstand größer darstellen.",
    "paragraphs": [
      "Im Hauptbild reicht die lineare Achse von15 bis120. Das sind105 Euro Gesamtspanne. Der Schritt30 →60 umfasst30 Euro und damit ungefähr28,6% der gesamten Zeichenhöhe.",
      "In einem getrennten Ausschnitt reicht dieselbe lineare Achse nur von15 bis75. Die Gesamtspanne beträgt60 Euro. Der unveränderte Schritt30 →60 umfasst nun50% der Zeichenhöhe. Er sieht größer aus, obwohl die Preisänderung dieselbe bleibt.",
      "Das ist ein anderer Achsenbereich, kein anderer Marktverlauf. Programme können die Grenzen auch automatisch an sichtbare Daten anpassen. Nora vergleicht deshalb Pixelhöhen nur bei gleicher Skala, gleichen Grenzen und gleicher Bildhöhe. Sie verwechselt eine solche Anpassung nicht mit einer Beschleunigung der Originalpreise."
    ],
    "columns": [
      {
        "title": "Linear15 bis120",
        "tone": "neutral",
        "points": [
          "Gesamtspanne105 Euro.",
          "30 Euro Schritt:ungefähr28,6% der Höhe."
        ]
      },
      {
        "title": "Linear15 bis75",
        "tone": "positive",
        "points": [
          "Gesamtspanne60 Euro.",
          "Derselbe Schritt:50% der Höhe."
        ]
      }
    ],
    "prompt": "Ändert der neue Achsenbereich die Euro-Differenz30 →60?",
    "answers": [
      {
        "label": "Ja, sie wird105 Euro.",
        "explanation": "105 ist die erste gesamte Achsenspanne."
      },
      {
        "label": "Nein, sie bleibt30 Euro.",
        "explanation": "Nur ihr Anteil an der Zeichenhöhe verändert sich."
      },
      {
        "label": "Ja, sie wird50 Euro.",
        "explanation": "50 ist hier der Prozentanteil an der Zeichenhöhe."
      }
    ],
    "correct": 1,
    "rule": "Halte Skala, Achsengrenzen und Bildhöhe für direkte Höhenvergleiche gleich.",
    "diagram": null
  },
  {
    "title": "Eine logarithmische Preisachse lässt die Zeitachse getrennt",
    "summary": "Unser Vergleich ist semilogarithmisch.",
    "paragraphs": [
      "In unseren Skalenbildern verändern wir nur die senkrechte Preisabbildung. Die vier gleich langen Zeitabschnitte stehen waagerecht weiterhin in gleichen Abständen. Die Zeitachse wird nicht logarithmisch umgerechnet.",
      "Ein solches Bild nennt man semilogarithmisch: Eine Achse verwendet die logarithmische Regel, die andere behält hier die normale gleichmäßige Zeitzuordnung. Semi bedeutet in diesem Zusammenhang, dass nicht beide Achsen logarithmisch sind.",
      "Der Skalenwechsel fasst auch keine Zeitabschnitte neu zusammen. Eine Änderung von einer auf drei Minuten wäre weiterhin ein eigener Wechsel der Zeitebene. Nora prüft waagerechte und senkrechte Regeln getrennt und erklärt, ob eine Ansicht nur anders skaliert oder zusätzlich anders gruppiert wurde."
    ],
    "columns": [
      {
        "title": "Senkrechte Achse",
        "tone": "neutral",
        "points": [
          "Positive Preisverhältnisse logarithmisch.",
          "Andere Preispositionen möglich."
        ]
      },
      {
        "title": "Waagerechte Achse",
        "tone": "positive",
        "points": [
          "Gleiche Zeitabstände bleiben gleich.",
          "Keine neue Aggregation."
        ]
      }
    ],
    "prompt": "Was bedeutet semilogarithmisch in unserem Bild?",
    "answers": [
      {
        "label": "Alle Zeitfenster verdoppeln sich.",
        "explanation": "Die Zeitabschnitte werden durch den Skalenwechsel nicht verändert."
      },
      {
        "label": "Beide Achsen werden zwingend logarithmisch.",
        "explanation": "Das wäre keine Beschreibung unseres Vergleichs."
      },
      {
        "label": "Nur die Preisachse ist logarithmisch, die Zeitzuordnung bleibt gleichmäßig.",
        "explanation": "Die zwei Achsen haben unterschiedliche Abstandsregeln."
      }
    ],
    "correct": 2,
    "rule": "Prüfe Zeitregel und Preisregel als getrennte Achseneigenschaften.",
    "diagram": null
  },
  {
    "title": "Eine gerade Verbindung hat je nach Skala andere Zwischenwerte",
    "summary": "Gezeichnete Linien sind keine belegte Einzelgeschäftsfolge.",
    "paragraphs": [
      "Nora verbindet die ersten und letzten Hauptwerte15 und120 über drei gleiche Zeitabstände mit einer geraden Linie. Auf der linearen Preisachse liegen die gedachten Zwischenwerte dieser Verbindung bei50 und85: pro Abschnitt35 Euro mehr.",
      "Auf der logarithmischen Preisachse liegen die Zwischenwerte derselben geraden Endpunktverbindung bei30 und60. Jeder Abschnitt hat den Faktor2. Diese Werte passen zur vorgegebenen Schlussfolge; auf linearer Achse liegt dieselbe Schlussfolge hingegen nicht auf einer einzigen geraden Endpunktlinie.",
      "Beide Zwischenrechnungen beschreiben gezeichnete Verbindungen. Eine Linie beweist keine Geschäfte zu jedem Zwischenwert und liefert keine sichere kommende Fortsetzung. Nora nennt daher Achsenskala und Endpunkte, wenn sie einen Linienverlauf beschreibt oder eine Zeichnung vergleicht."
    ],
    "columns": [
      {
        "title": "Gerade lineare Endpunktlinie",
        "tone": "neutral",
        "points": [
          "15 →50 →85 →120.",
          "Gedachte gleiche Euro-Schritte35."
        ]
      },
      {
        "title": "Gerade Log-Endpunktlinie",
        "tone": "positive",
        "points": [
          "15 →30 →60 →120.",
          "Gedachte gleiche Faktoren2."
        ]
      }
    ],
    "prompt": "Welcher erste Zwischenwert liegt auf der geraden Log-Verbindung15 bis120?",
    "answers": [
      {
        "label": "30 Euro.",
        "explanation": "Drei gleiche Log-Schritte teilen den Faktor8 in dreimal Faktor2."
      },
      {
        "label": "50 Euro.",
        "explanation": "Das gehört zur geraden linearen Verbindung."
      },
      {
        "label": "Ein garantierter zukünftiger Kaufpreis.",
        "explanation": "Eine gezeichnete Verbindung belegt keine eigene Ausführung."
      }
    ],
    "correct": 0,
    "rule": "Benenne Skala und Endpunkte einer Linienzeichnung und trenne sie von beobachteten Geschäften.",
    "diagram": "rc8-doubling"
  },
  {
    "title": "Gleiche Prozentbewegung ist nicht derselbe Eurogewinn",
    "summary": "Für eine persönliche Geldrechnung braucht es Menge und Ausführungen.",
    "paragraphs": [
      "In zwei getrennten gedachten Aktienkäufen hält Nora jeweils zwei Aktien. Kauf15 und Verkauf30 würden vor zusätzlichen Kosten eine Preisdifferenz von15 mal2 gleich30 Euro ergeben. Kauf60 und Verkauf120 würden60 mal2 gleich120 Euro ergeben.",
      "Beide Preisbewegungen sind+100%, aber der zweite eingesetzte Kaufbetrag ist ebenfalls viermal so groß:120 statt30 Euro für zwei Aktien. Gleiche relative Preisänderung bedeutet deshalb bei gleicher Aktienzahl nicht denselben Eurobetrag.",
      "Dies ist nur eine Rechenübung mit angenommenen bestätigten Kauf- und Verkaufspreisen. Für einen wirklichen eigenen Gewinn braucht Nora ihre tatsächlichen Mengen, Ausführungen und Kosten. Die Linien unserer Schlussbilder bestätigen solche Aufträge nicht. Auch Futures-Punktwerte oder Hebel wären andere Produktregeln, die hier nicht mitgerechnet werden."
    ],
    "columns": [
      {
        "title": "Zwei Aktien15 →30",
        "tone": "neutral",
        "points": [
          "Angenommener Kaufbetrag30 Euro.",
          "Differenz vor Kosten30 Euro."
        ]
      },
      {
        "title": "Zwei Aktien60 →120",
        "tone": "positive",
        "points": [
          "Angenommener Kaufbetrag120 Euro.",
          "Differenz vor Kosten120 Euro."
        ]
      }
    ],
    "prompt": "Welche Aussage passt zu den beiden gedachten Käufen?",
    "answers": [
      {
        "label": "Jedes Schlussbild bestätigt Noras Ausführung.",
        "explanation": "Die persönliche Orderfolge ist aus einer Schlusslinie nicht belegt."
      },
      {
        "label": "Gleiche Prozentbewegung, unterschiedliche Eurobeträge.",
        "explanation": "Preisniveau und eingesetzter Betrag unterscheiden sich."
      },
      {
        "label": "Beide bringen genau100 Euro.",
        "explanation": "100 ist der Prozentwert, nicht ein Geldbetrag."
      }
    ],
    "correct": 1,
    "rule": "Trenne Preisänderung, eingesetzten Betrag und tatsächlich bestätigtes eigenes Ergebnis.",
    "diagram": null
  },
  {
    "title": "Einen Skalenbericht vollständig abgeben",
    "summary": "Werte, Skala, Grenzen und Aussagezweck bleiben nachvollziehbar.",
    "paragraphs": [
      "Nora berichtet die vier eigenen Sora-Schlüsse15/30/60/120 Euro je Aktie. Die Zeitabschnitte und Preisgrenzen15 bis120 bleiben beim Vergleich gleich. Linear wachsen die gezeichneten Schrittgrößen mit den Euro-Differenzen15/30/60. Logarithmisch sind die Schritte wegen der gleichen Faktoren2 gleich hoch.",
      "Sie ergänzt: Der Gesamtfaktor ist8, der einfache Zuwachs zum Start700%. OHLC-Daten bleiben bei einem reinen Skalenwechsel unverändert. Feste Basis-Prozentwerte und Indexierung auf100 sind zusätzliche Umrechnungen und müssen gesondert erklärt werden.",
      "Für Euro-Abstandsfragen prüft sie die lineare Regel, für Verhältnisfragen die Log-Regel bei positiven Preisen. Sie nennt auch Achsenbereich und Bildgröße, statt nur eine steile Form zu bewerten. Keine Ansicht garantiert eine nächste Richtung oder eigene Ausführung. Als Nächstes prüft Nora Datenquellen, Bereinigungen und fortlaufende Kontrakte."
    ],
    "columns": [
      {
        "title": "Nachprüfbarer Vergleich",
        "tone": "neutral",
        "points": [
          "Gleiche Preise und Zeitabstände.",
          "Skalenregel und Preisgrenzen ausdrücklich genannt."
        ]
      },
      {
        "title": "Klare Bedeutung",
        "tone": "positive",
        "points": [
          "Euro-Differenz, Preisfaktor und Prozentbasis getrennt.",
          "Keine sichere Prognose allein aus der Bildform."
        ]
      }
    ],
    "prompt": "Welche Angabe gehört in einen sauberen Skalenbericht?",
    "answers": [
      {
        "label": "Nur der sichtbare Winkel.",
        "explanation": "Der Winkel hängt von Darstellungseinstellungen ab."
      },
      {
        "label": "Die Zusage einer nächsten Verdopplung.",
        "explanation": "Die Daten zeigen nur vorgegebene vergangene Schlüsse."
      },
      {
        "label": "Skalentyp, Wertebereich, Daten und Vergleichszweck.",
        "explanation": "Diese Angaben erklären die Bedeutung der Bildabstände."
      }
    ],
    "correct": 2,
    "rule": "Berichte Daten, Achsengrenzen, Skalenregel und Aussagegrenzen zusammen.",
    "diagram": null
  }
];
export const chartsChapterEightLessons: Lesson[] = drafts.map((draft,index) => {
 const key=`reading-charts.chapter-08.lesson-${String(index+1).padStart(2,'0')}`;
 const candle=draft.diagram==='rc8-candles',additive=draft.diagram==='rc8-additive';
 return {
  id:key,title:draft.title,summary:draft.summary,
  sourceUnit:'Kapitel 8 · Lineare und logarithmische Skalen',sourceAnchors:[draft.title],durationMinutes:6,xp:35,status:'published',
  steps:[
   {id:`${key}.explain`,type:'explanation',eyebrow:'Charts verstehen · Kapitel 8',title:draft.title,paragraphs:draft.paragraphs,callout:draft.rule},
   ...(draft.diagram?[{id:`${key}.diagram`,type:'diagram' as const,title:candle?'Gleiche OHLC-Werte auf zwei Skalen':additive?'Gleiche Euro-Schritte auf zwei Skalen':'Gleiche Preisfaktoren auf zwei Skalen',scenario:draft.diagram as ChartScenarioId,caption:candle?'Eigene OHLC-Beispiele A und B · Euro je Aktie · Preisbereich12 bis120.':additive?'Getrennte eigene Schlussfolge15/30/45/60 · Euro je Aktie · Preisbereich15 bis60.':'Eigene Sora-Schlussfolge15/30/60/120 · Euro je Aktie · Preisbereich15 bis120.',observations:candle?['Körper A:15 →24; Körper B:60 →96.','Linear vierfache Körperhöhe, logarithmisch gleiche Höhe durch Faktor1,6.']:additive?['Dreimal+15 Euro; relative Änderungen+100%,+50%,ungefähr+33,3%.','Linear gleich hohe Schritte; logarithmisch kleinere Schritte.']:['Euro-Zuwächse15/30/60; Preisfaktor jeweils2.','Gleiche Daten, Grenzen und Zeitabstände; logarithmisch gleich hohe Schritte.']}] : []),
   {id:`${key}.compare`,type:'comparison',title:'Das Beispiel auf einen Blick',columns:draft.columns.map(c=>({...c,tone:c.tone as 'neutral'|'positive'}))},
   {id:`${key}.question`,type:'question',title:'Kurz prüfen',prompt:draft.prompt,correctOptionId:`choice-${draft.correct}`,options:draft.answers.map((a,i)=>({id:`choice-${i}`,...a}))},
   {id:`${key}.recap`,type:'recap',title:'Das nimmst du mit',points:[draft.rule,draft.summary]},
  ],
 };
});
