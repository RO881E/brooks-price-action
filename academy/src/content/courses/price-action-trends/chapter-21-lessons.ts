import type { ChapterTwentyOneScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterTwentyOneScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Impuls, Pause und Kanal",
    "summary": "Drei Abschnitte zeitlich auseinanderhalten.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-01",
    "paragraphs": [
      "Ein Spike ist ein schneller gerichteter Impuls. Nach einer ersten Pause kann sich die Bewegung als Kanal fortsetzen: Die Richtung bleibt, aber der Preisweg enthält mehr Gegenhandel.",
      "Der Kanal ist erst mit seinem tatsächlichen Anschluss erkennbar. Direkt nach dem Impuls sind Fortsetzung, Seitwärtsphase und Umkehr noch offene Möglichkeiten.",
      "Markiere im eigenen Beispiel den schnellen Anstieg, den Rücklauf und die späteren höheren Swings. Verwende den fertigen Tagesnamen nicht schon beim ersten Bar."
    ],
    "callout": "Die Tagesform wird schrittweise sichtbar.",
    "takeaways": [
      "Drei Abschnitte zeitlich auseinanderhalten.",
      "Der Kanal ist erst mit seinem tatsächlichen Anschluss erkennbar.",
      "Die Tagesform wird schrittweise sichtbar."
    ],
    "prompt": "Wann ist die Kanalfortsetzung mehr als eine Erwartung?",
    "answers": [
      {
        "label": "Wenn nach der Pause neue gerichtete Swings entstehen.",
        "explanation": "Richtig. Die Tagesform wird schrittweise sichtbar."
      },
      {
        "label": "Schon vor dem ersten Rücklauf.",
        "explanation": "Die Pause und ihr Anschluss sind dann noch unbekannt."
      },
      {
        "label": "Allein durch die Farbe des ersten Bars.",
        "explanation": "Eine Barfarbe beschreibt keinen fertigen Kanal."
      }
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Den Spike an seinen Preisen erkennen",
    "summary": "Geschwindigkeit und geringe Rückgabe gemeinsam lesen.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-02",
    "paragraphs": [
      "Ein Spike kann ein einzelner großer Trendbar oder eine Folge mehrerer Bars sein. Wichtig sind gewonnene Strecke, wenig Rückgabe und deutlicher gerichteter Anschluss im bisherigen Kontext.",
      "Ein großer Körper allein genügt nicht. In einer breiten Seitwärtsphase kann derselbe Bar nur ein kurzer Ausflug sein und rasch zurückgenommen werden.",
      "Vergleiche links den direkten Impuls mit dem überlappenden Verlauf rechts. Die Diagnose beschreibt bisherige Kontrolle; sie liefert keine genaue Wahrscheinlichkeit für den nächsten Trade."
    ],
    "callout": "Bargröße braucht Kontext.",
    "takeaways": [
      "Geschwindigkeit und geringe Rückgabe gemeinsam lesen.",
      "Ein großer Körper allein genügt nicht.",
      "Bargröße braucht Kontext."
    ],
    "prompt": "Was stützt die Spike-Lesart?",
    "answers": [
      {
        "label": "Eine exakte aus dem Namen ablesbare Trefferquote.",
        "explanation": "Der Mustername ist keine statistische Messung."
      },
      {
        "label": "Viel gerichtete Strecke mit wenig Rückgabe und Anschluss.",
        "explanation": "Richtig. Bargröße braucht Kontext."
      },
      {
        "label": "Jeder große Bar unabhängig vom Umfeld.",
        "explanation": "Ein großer Rangebar kann sofort zurückgenommen werden."
      }
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "Erste Pause als Phasengrenze",
    "summary": "Der erste Gegenabschnitt beendet die direkte Impulsphase.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-03",
    "paragraphs": [
      "Die erste sichtbare Pause oder Rückgabe trennt den direkten Impuls von dem, was anschließend kommt. Ein kleiner Inside-Bar kann dafür genügen, wenn er nach der gewählten Regel eine Pause bildet.",
      "Ein sofortiger neuer Schub kann auf der größeren Ebene wieder zu einem einzigen Impuls gehören. Benenne deshalb den Arbeitsmaßstab, statt jeden kleinen Gegenbar als vollständigen Trendwechsel zu werten.",
      "Im Replay bleibt das Impulsende beim letzten gerichteten Bar vor der Pause. Es wird nicht rückwirkend bis zum schönsten späteren Hoch verlängert."
    ],
    "callout": "Phasengrenze und Trendende sind verschiedene Dinge.",
    "takeaways": [
      "Der erste Gegenabschnitt beendet die direkte Impulsphase.",
      "Ein sofortiger neuer Schub kann auf der größeren Ebene wieder zu einem einzigen Impuls gehören.",
      "Phasengrenze und Trendende sind verschiedene Dinge."
    ],
    "prompt": "Was beendet zunächst die direkte Spike-Phase?",
    "answers": [
      {
        "label": "Immer das endgültige Tageshoch.",
        "explanation": "Das ist an diesem Zeitpunkt noch unbekannt."
      },
      {
        "label": "Zwingend eine große Richtungsumkehr.",
        "explanation": "Eine Pause kann zur Fortsetzung führen."
      },
      {
        "label": "Die erste nach der Regel erkennbare Pause oder Rückgabe.",
        "explanation": "Richtig. Phasengrenze und Trendende sind verschiedene Dinge."
      }
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "Kurzer oder langer erster Rücklauf",
    "summary": "Die Länge der Pause verändert die Arbeitshypothese.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-04",
    "paragraphs": [
      "Der erste Rücklauf kann nur einen Bar dauern oder eine längere Folge bilden. Ein kurzer Rücklauf mit erneuter Trendfolge passt zu einer Kanalfortsetzung.",
      "Ein langer Rücklauf mit vielen überlappenden Swings kann zu einer Range heranwachsen. Eine feste Barzahl allein ersetzt die Prüfung von Struktur und Anschluss nicht.",
      "Vergleiche die schmale Pause links mit der ausgedehnten Balance rechts. Beide beginnen nach demselben Impuls. Erst die neu entstehenden Bars begründen ihre unterschiedliche Einordnung."
    ],
    "callout": "Dauer und Preisstruktur zusammen prüfen.",
    "takeaways": [
      "Die Länge der Pause verändert die Arbeitshypothese.",
      "Ein langer Rücklauf mit vielen überlappenden Swings kann zu einer Range heranwachsen.",
      "Dauer und Preisstruktur zusammen prüfen."
    ],
    "prompt": "Was spricht eher für eine heranwachsende Range?",
    "answers": [
      {
        "label": "Längerer Gegenhandel mit wiederholter Überlappung und Swings in beide Richtungen.",
        "explanation": "Richtig. Dauer und Preisstruktur zusammen prüfen."
      },
      {
        "label": "Eine beliebige einzelne Pause.",
        "explanation": "Ein einzelner Bar kann nur ein kurzer Rücklauf sein."
      },
      {
        "label": "Eine universelle Barzahl ohne Preisprüfung.",
        "explanation": "Dauer allein beschreibt die Kontrolle nicht."
      }
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "Nach dem Impuls: drei mögliche Wege",
    "summary": "Fortsetzung, Balance und Umkehr offenhalten.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-05",
    "paragraphs": [
      "Nach einem Aufwärtsimpuls kann eine Käuferfortsetzung entstehen. Der Markt kann aber auch um denselben Bereich pendeln oder mit kräftiger Verkäuferfolge die neue Strecke zurücknehmen.",
      "Notiere vor den nächsten Bars diese Möglichkeiten. Weder die erste grüne Serie noch der Wunsch nach einem Longtrade schließt die Gegenrichtung aus.",
      "Unsere Vergleichspfade setzen denselben ersten Schub fort oder nehmen ihn zurück. Eine Seitwärtsvariante bleibt im Protokoll zusätzlich möglich. Passe die Lesart erst an sichtbare neue Information an."
    ],
    "callout": "Ein Impuls bestimmt nicht den ganzen Tag.",
    "takeaways": [
      "Fortsetzung, Balance und Umkehr offenhalten.",
      "Notiere vor den nächsten Bars diese Möglichkeiten.",
      "Ein Impuls bestimmt nicht den ganzen Tag."
    ],
    "prompt": "Was ist nach dem ersten Rücklauf weiterhin möglich?",
    "answers": [
      {
        "label": "Nur ein garantierter Kanalbruch.",
        "explanation": "Ein Kanal muss sich erst bilden."
      },
      {
        "label": "Fortsetzung, Seitwärtsphase oder Umkehr.",
        "explanation": "Richtig. Ein Impuls bestimmt nicht den ganzen Tag."
      },
      {
        "label": "Nur eine sichere Fortsetzung.",
        "explanation": "Der Rücklauf kann mehr Gegenkontrolle entwickeln."
      }
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "Der Kanal handelt in beide Richtungen",
    "summary": "Gegenbars können innerhalb eines Trends liegen.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-06",
    "paragraphs": [
      "Ein Kanal enthält häufig überlappende Bars, Schatten und Rückläufe. Käufer und Verkäufer handeln sichtbar gegeneinander, während eine Seite weiterhin höhere oder tiefere Swings durchsetzt.",
      "Ein roter Bar im Bullenkanal ist deshalb noch keine bestätigte Bärenumkehr. Prüfe, ob die Gegenbewegung größere Swingpunkte bricht und eigenen Anschluss gewinnt.",
      "Links steigt ein enger Kanal trotz kleiner Rückgaben. Rechts zeigen breitere Swings mehr Gegenraum. Die Breite verändert die Ausführungsbedingungen, ohne automatisch die Richtung aufzuheben."
    ],
    "callout": "Zweiseitiger Handel kann gerichtete Struktur enthalten.",
    "takeaways": [
      "Gegenbars können innerhalb eines Trends liegen.",
      "Ein roter Bar im Bullenkanal ist deshalb noch keine bestätigte Bärenumkehr.",
      "Zweiseitiger Handel kann gerichtete Struktur enthalten."
    ],
    "prompt": "Welche Beobachtung kann zu einem Bullenkanal passen?",
    "answers": [
      {
        "label": "Nur grüne Bars ohne Pause.",
        "explanation": "Ein Kanal kann deutlichen Gegenhandel enthalten."
      },
      {
        "label": "Jeder rote Bar beendet den Bullentrend.",
        "explanation": "Die größere Struktur muss gesondert geprüft werden."
      },
      {
        "label": "Rote Gegenbars bei weiterhin höheren größeren Tiefs.",
        "explanation": "Richtig. Zweiseitiger Handel kann gerichtete Struktur enthalten."
      }
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Enger Kanal und kleiner Gegenraum",
    "summary": "Eine Gegenidee benötigt ausreichend Strecke.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-07",
    "paragraphs": [
      "In einem engen Kanal sind Rückläufe klein. Ein Gegentrade kann dadurch wenig Zielraum bekommen, während der Schutzabstand relativ groß bleibt.",
      "Ein sichtbarer Gegenbar ist kein Beweis, dass die nächste Korrektur für einen Scalp reicht. Vergleiche erreichbaren Zielraum und begrenzten Verlust, bevor du eine Order erwägst.",
      "Unser enger Kanal wird mit einem breiteren Beispiel verglichen. Für Einsteiger ist die Trendseite im engen Verlauf die klarere Suchrichtung; auch dort bleibt Auslassen bei ungünstigem Verhältnis möglich."
    ],
    "callout": "Ein Signal ohne Zielraum ist kein vollständiger Plan.",
    "takeaways": [
      "Eine Gegenidee benötigt ausreichend Strecke.",
      "Ein sichtbarer Gegenbar ist kein Beweis, dass die nächste Korrektur für einen Scalp reicht.",
      "Ein Signal ohne Zielraum ist kein vollständiger Plan."
    ],
    "prompt": "Warum kann ein Gegentrade im engen Kanal ungeeignet sein?",
    "answers": [
      {
        "label": "Weil der Rücklaufraum klein gegenüber dem benötigten Schutzabstand ist.",
        "explanation": "Richtig. Ein Signal ohne Zielraum ist kein vollständiger Plan."
      },
      {
        "label": "Weil Gegenbars nie vorkommen.",
        "explanation": "Auch enge Kanäle enthalten Pausen und Gegenbars."
      },
      {
        "label": "Weil ein enger Kanal sofort umkehren muss.",
        "explanation": "Enge Kontrolle kann länger bestehen bleiben."
      }
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "Breiter Kanal und größere Swings",
    "summary": "Mehr Gegenraum erhöht zugleich die Unruhe.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-08",
    "paragraphs": [
      "Ein breiter Kanal kann größere Gegenbewegungen ermöglichen. Das macht Handel in beide Richtungen grundsätzlich prüfbar, verlangt aber die Unterscheidung von lokalem Swing und größerer Trendseite.",
      "Breite allein garantiert keinen profitablen Gegentrade. Eine passende Auslösung, Kosten, Zielraum und Risikogrenze bleiben nötig. Komplexere Swings können mehr Fehlsignale enthalten.",
      "Vergleiche die größere Rückgabe rechts mit den kleinen Pausen links. Schreibe vorab, ob deine Halteidee nur bis zur nächsten Kanalzone oder auf einen größeren Richtungswechsel zielt."
    ],
    "callout": "Halteabsicht vor dem Einstieg benennen.",
    "takeaways": [
      "Mehr Gegenraum erhöht zugleich die Unruhe.",
      "Breite allein garantiert keinen profitablen Gegentrade.",
      "Halteabsicht vor dem Einstieg benennen."
    ],
    "prompt": "Was verändert ein breiterer Kanal?",
    "answers": [
      {
        "label": "Die Garantie einer großen Umkehr.",
        "explanation": "Die größere Trendseite kann erhalten bleiben."
      },
      {
        "label": "Den möglichen Gegenraum und die Ausführungsbedingungen.",
        "explanation": "Richtig. Halteabsicht vor dem Einstieg benennen."
      },
      {
        "label": "Die Pflicht, jeden Gegenswing zu handeln.",
        "explanation": "Mehr Raum erzeugt keinen Handlungszwang."
      }
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Starker Impuls und schwächerer Kanal",
    "summary": "Weniger Tempo ist nicht sofort Richtungswechsel.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-09",
    "paragraphs": [
      "Nach einem steilen Impuls kann die Fortsetzung flacher werden. Mehr Überlappung und längere Rückläufe zeigen schwächere einseitige Kontrolle.",
      "Solange die größeren Swings noch in Trendrichtung arbeiten, bleibt ein Kanaltrend als Lesart möglich. Erst stärkerer Gegenanschluss verändert das Gewicht der Umkehridee.",
      "Markiere die direkte Anfangsstrecke und die langsameren späteren Hochs. Die Verlangsamung darf zu vorsichtigerem Management führen, ohne eine automatische Gegenorder auszulösen."
    ],
    "callout": "Tempo und Richtung getrennt lesen.",
    "takeaways": [
      "Weniger Tempo ist nicht sofort Richtungswechsel.",
      "Solange die größeren Swings noch in Trendrichtung arbeiten, bleibt ein Kanaltrend als Lesart möglich.",
      "Tempo und Richtung getrennt lesen."
    ],
    "prompt": "Was kann ein flacher werdender Bullenkanal bedeuten?",
    "answers": [
      {
        "label": "Bereits eine sichere Bärenumkehr.",
        "explanation": "Tempoverlust allein bestätigt sie nicht."
      },
      {
        "label": "Unverändert denselben einseitigen Impuls.",
        "explanation": "Mehr Überlappung zeigt eine andere Phase."
      },
      {
        "label": "Schwächere Käuferkontrolle bei noch aufwärtsgerichteter Struktur.",
        "explanation": "Richtig. Tempo und Richtung getrennt lesen."
      }
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Kanalstart als bekannter Bezug",
    "summary": "Der erste Rücklauf liefert eine spätere Testzone.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-10",
    "paragraphs": [
      "Nach dem Impuls bildet der erste Rücklauf den Ausgangsbereich der Kanalfortsetzung. Im Bullenfall ist sein Tief eine mögliche spätere Testzone, im Bärenfall sein Hoch.",
      "Der Kanalstart wird erst nach sichtbarer Reaktion als Bezug markiert. Er ist kein garantierter späterer Zielpreis; manche Trends testen ihn erst viel später oder gar nicht im betrachteten Fenster.",
      "Im Beispiel ist die Referenz 40 bereits bekannt, bevor der Kanal weiter steigt. Ein späterer Rückgang kann sie prüfen. Halte den Bezug fest und verschiebe ihn nicht nachträglich zum erreichten Tief."
    ],
    "callout": "Eine bekannte Zone bleibt eine offene Testhypothese.",
    "takeaways": [
      "Der erste Rücklauf liefert eine spätere Testzone.",
      "Der Kanalstart wird erst nach sichtbarer Reaktion als Bezug markiert.",
      "Eine bekannte Zone bleibt eine offene Testhypothese."
    ],
    "prompt": "Wie verwendest du den Kanalstart?",
    "answers": [
      {
        "label": "Als vorab bekannten möglichen Testbereich.",
        "explanation": "Richtig. Eine bekannte Zone bleibt eine offene Testhypothese."
      },
      {
        "label": "Als garantierten Schlusskurs.",
        "explanation": "Der spätere Verlauf bleibt offen."
      },
      {
        "label": "Als nachträglich beliebig verschiebbaren Bezug.",
        "explanation": "Das würde die Testhypothese unprüfbar machen."
      }
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Spike als funktionaler Abstand",
    "summary": "Schnelle Preisverlagerung ist keine zwingende Kurslücke.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-11",
    "paragraphs": [
      "Ein Impuls verlagert den Handel schnell aus einem alten Bereich. Wenn der erste Rücklauf darüber bleibt, entsteht ein funktionaler Abstand zum Ausbruchspunkt.",
      "Dabei können alle Preise des Impulses tatsächlich gehandelt worden sein. Eine wörtliche Voll-Lücke zwischen zwei Bars ist eine andere geometrische Aussage und darf nicht allein aus dem Wort Spike abgeleitet werden.",
      "Unser Beispiel markiert Ausbruchspunkt 32 und erstes Rücklauftief 40. Der Abstand beträgt acht relative Einheiten. Die verbundenen Bars enthalten trotzdem Handel durch den Impulsbereich."
    ],
    "callout": "Funktionalen Abstand und ungehandelten Preisraum trennen.",
    "takeaways": [
      "Schnelle Preisverlagerung ist keine zwingende Kurslücke.",
      "Dabei können alle Preise des Impulses tatsächlich gehandelt worden sein.",
      "Funktionalen Abstand und ungehandelten Preisraum trennen."
    ],
    "prompt": "Was belegt ein Rücklauftief oberhalb des Ausbruchspunkts?",
    "answers": [
      {
        "label": "Eine garantierte spätere Lückenschließung.",
        "explanation": "Ein Test kann ausbleiben oder erst später erfolgen."
      },
      {
        "label": "Ein bisher offener funktionaler Abstand zum Bezug.",
        "explanation": "Richtig. Funktionalen Abstand und ungehandelten Preisraum trennen."
      },
      {
        "label": "Dass jeder Preis dazwischen nie gehandelt wurde.",
        "explanation": "Der Impuls kann diese Preise vollständig durchlaufen haben."
      }
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Inside-Pause und erste Kanal-Auslösung",
    "summary": "Signal, Auslösung und Anschluss zeitlich trennen.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-12",
    "paragraphs": [
      "Nach einem Käuferimpuls kann ein Inside-Bar pausieren. Ein weiterer Bar kann dessen Tief unterschreiten, dann aber nach oben schließen und ein Käufersignal bilden.",
      "Erst ein späterer Handel oberhalb des Signalhochs kann einen entsprechend geplanten Buy-Stop auslösen. Die bloße Signalform ist noch keine ausgeführte Position.",
      "Im erfundenen Beispiel wird das Signalhoch 53 später überschritten. Anschließende höhere Swings stützen die Kanalidee. Schutzabstand und Positionsgröße werden vor dieser Auslösung festgelegt."
    ],
    "callout": "Signalbar ist nicht gleich Einstieg.",
    "takeaways": [
      "Signal, Auslösung und Anschluss zeitlich trennen.",
      "Erst ein späterer Handel oberhalb des Signalhochs kann einen entsprechend geplanten Buy-Stop auslösen.",
      "Signalbar ist nicht gleich Einstieg."
    ],
    "prompt": "Wann wäre der Buy-Stop oberhalb des Signalhochs ausgelöst?",
    "answers": [
      {
        "label": "Schon beim Tiefbruch des Inside-Bars.",
        "explanation": "Das ist noch die Entstehung des Signals."
      },
      {
        "label": "Sobald der fertige Kanal später schön aussieht.",
        "explanation": "Ein späteres Ergebnis ersetzt keine damalige Auslösung."
      },
      {
        "label": "Erst beim späteren Handel durch den festgelegten Auslösepreis.",
        "explanation": "Richtig. Signalbar ist nicht gleich Einstieg."
      }
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Zwei Zielprojektionen vergleichen",
    "summary": "Die Anker bestimmen die Rechnung.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-13",
    "paragraphs": [
      "Eine Projektion kann die Impulsstrecke oberhalb des Impulsendes wiederholen. Alternativ kann dieselbe Strecke ab dem Rücklauftief als zweites Bein abgetragen werden.",
      "Im Beispiel läuft der Impuls von 20 auf 50, also 30 Einheiten. Die erste Projektion ergibt 80. Beginnt das zweite Bein bei 40, ergibt die Gleichstreckenprojektion 70.",
      "Beide Ziele dürfen gleichzeitig als Zonen beobachtet werden. Sie sind unterschiedliche Rechnungen mit unterschiedlichen Startpunkten. Schreibe die Anker auf, statt nachträglich nur den passend erreichten Preis zu zeigen."
    ],
    "callout": "30 ab 50 und 30 ab 40 ergeben verschiedene Ziele.",
    "takeaways": [
      "Die Anker bestimmen die Rechnung.",
      "Im Beispiel läuft der Impuls von 20 auf 50, also 30 Einheiten.",
      "30 ab 50 und 30 ab 40 ergeben verschiedene Ziele."
    ],
    "prompt": "Welche zwei Ziele ergeben sich im Beispiel?",
    "answers": [
      {
        "label": "80 ab Impulsende und 70 ab Rücklauftief.",
        "explanation": "Richtig. 30 ab 50 und 30 ab 40 ergeben verschiedene Ziele."
      },
      {
        "label": "Immer derselbe Preis 80.",
        "explanation": "Die zweite Rechnung beginnt bei einem anderen Anker."
      },
      {
        "label": "Eine garantierte Umkehr bei 70.",
        "explanation": "Ein berechnetes Ziel bestimmt keine Reaktion."
      }
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Projektionsziel und Gewinnmitnahme",
    "summary": "Ein Ziel ist zunächst eine Prüfzone.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-14",
    "paragraphs": [
      "Ein erreichtes Projektionsziel kann Anlass sein, geplante Gewinne zu sichern oder den Schutz zu überprüfen. Die Trendseite kann trotzdem weiteren Anschluss gewinnen.",
      "Eine Gegenorder braucht ein eigenes tragfähiges Signal. Allein das Erreichen der Rechnung rechtfertigt weder einen ungeplanten Short noch eine größere Menge.",
      "Vergleiche links den Zielbesuch mit rechts weiterem Käuferanschluss. Beide Verläufe sind mit einer Zielzone vereinbar. Definiere Teilgewinn oder Halteplan vorab, statt den Zielnamen als Umkehrbefehl zu behandeln."
    ],
    "callout": "Zielbesuch und Gegen-Signal getrennt prüfen.",
    "takeaways": [
      "Ein Ziel ist zunächst eine Prüfzone.",
      "Eine Gegenorder braucht ein eigenes tragfähiges Signal.",
      "Zielbesuch und Gegen-Signal getrennt prüfen."
    ],
    "prompt": "Was folgt allein aus dem Besuch eines Projektionsziels?",
    "answers": [
      {
        "label": "Die Erlaubnis für unbegrenztes Gegennachkaufen.",
        "explanation": "Das zulässige Geldrisiko bleibt begrenzt."
      },
      {
        "label": "Eine Prüfung des vorab geplanten Managements.",
        "explanation": "Richtig. Zielbesuch und Gegen-Signal getrennt prüfen."
      },
      {
        "label": "Eine sichere Trendwende.",
        "explanation": "Weitere Trendfolge bleibt möglich."
      }
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "Dritter Schub und Kanalüberschreitung",
    "summary": "Eine auffällige Endform braucht Reaktion.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-15",
    "paragraphs": [
      "Drei Aufwärtsschübe können einen keilartigen Kanal bilden. Der dritte kann eine obere Grenze überschreiten und mit einem Verkäuferbar reagieren.",
      "Die Anzahl drei und eine Überschreitung reichen nicht allein. Beachte Körperqualität, Gegenanschluss und die größere Struktur; auch ein vierter Schub ist möglich.",
      "Unser Beispiel zeigt drei durch Rückläufe getrennte Spitzen. Rechts setzt nach der dritten Verkäuferfolge ein. Diese neue Information unterstützt eine Korrekturlesart, bestimmt aber deren gesamte Länge nicht."
    ],
    "callout": "Dreischubform ist kein automatischer Short.",
    "takeaways": [
      "Eine auffällige Endform braucht Reaktion.",
      "Die Anzahl drei und eine Überschreitung reichen nicht allein.",
      "Dreischubform ist kein automatischer Short."
    ],
    "prompt": "Welche Folge stärkt die Korrekturlesart?",
    "answers": [
      {
        "label": "Nur die Zahl drei.",
        "explanation": "Ein Trend kann weitere Schübe bilden."
      },
      {
        "label": "Eine Überschreitung ohne jede Reaktion.",
        "explanation": "Das kann auch Fortsetzung sein."
      },
      {
        "label": "Zurückweisung der dritten Spitze mit Verkäuferanschluss.",
        "explanation": "Richtig. Dreischubform ist kein automatischer Short."
      }
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Ausbruch in Kanalrichtung",
    "summary": "Neuer Impuls oder kurzlebige Übertreibung?",
    "section": "Phasen und Ausführung",
    "scenario": "c21-16",
    "paragraphs": [
      "Ein Bullenkanal kann oben ausbrechen und einen weiteren schnellen Käuferabschnitt bilden. Dieser kann Anschluss gewinnen oder rasch in den alten Kanal zurückkehren.",
      "Verwende keine feste Fünf-Bar-Uhr als Gewissheit. Entscheidend ist die tatsächliche Rücknahme oder Fortsetzung des Ausbruchs. Eine steile Bewegung kann länger dauern als erwartet.",
      "Die Vergleichspfade zeigen Erfolg und Rücknahme nach derselben Vorgeschichte. Beide müssen im Replay möglich bleiben; der neue große Bar darf nicht nachträglich schon als sichere Endspitze gelten."
    ],
    "callout": "Ein großer Ausbruchsbar kann scheitern oder fortsetzen.",
    "takeaways": [
      "Neuer Impuls oder kurzlebige Übertreibung?",
      "Verwende keine feste Fünf-Bar-Uhr als Gewissheit.",
      "Ein großer Ausbruchsbar kann scheitern oder fortsetzen."
    ],
    "prompt": "Was trennt die beiden Folgen?",
    "answers": [
      {
        "label": "Ob neuer Anschluss entsteht oder der Ausbruch sichtbar zurückgenommen wird.",
        "explanation": "Richtig. Ein großer Ausbruchsbar kann scheitern oder fortsetzen."
      },
      {
        "label": "Eine für jeden Markt garantierte Barzahl.",
        "explanation": "Ein solches Zeitgesetz liefert das Muster nicht."
      },
      {
        "label": "Allein die Größe des Ausbruchs.",
        "explanation": "Größe bestimmt das spätere Ergebnis nicht."
      }
    ],
    "correct": 0
  },
  {
    "number": 17,
    "title": "Ausbruch gegen den Kanal",
    "summary": "Den Bruch nicht blind verfolgen.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-17",
    "paragraphs": [
      "Ein Ausbruch unter einen Bullenkanal verändert die Struktur. Wenn der Preis schon weit gefallen ist, kann ein sofortiger Short wenig Zielraum oder ungünstigen Schutzabstand bieten.",
      "Ein Rücklauf zum gebrochenen Bereich kann einen neuen Plan ermöglichen. Prüfe dort Zurückweisung und Verkäuferauslösung, statt jeden Bruch ohne Preisvergleich zu handeln.",
      "Im Beispiel folgt auf den Gegenbruch eine Erholung unter das vorige größere Hoch. Die spätere Verkäuferfolge ist neu. Der frühere Bruch war noch keine Zusage, dass der Kanalstart erreicht wird."
    ],
    "callout": "Bruch, Rücklauf und neue Auslösung getrennt planen.",
    "takeaways": [
      "Den Bruch nicht blind verfolgen.",
      "Ein Rücklauf zum gebrochenen Bereich kann einen neuen Plan ermöglichen.",
      "Bruch, Rücklauf und neue Auslösung getrennt planen."
    ],
    "prompt": "Was ist nach einem weit gelaufenen Gegenbruch sinnvoll zu prüfen?",
    "answers": [
      {
        "label": "Den alten Trendnamen unverändert festhalten.",
        "explanation": "Der Gegenbruch ist relevante neue Information."
      },
      {
        "label": "Einen Rücklauf mit neuem Signal und ausreichendem Zielraum.",
        "explanation": "Richtig. Bruch, Rücklauf und neue Auslösung getrennt planen."
      },
      {
        "label": "Jeden Bruch unabhängig vom Preis verfolgen.",
        "explanation": "Ein später Einstieg kann ein ungünstiges Verhältnis haben."
      }
    ],
    "correct": 1
  },
  {
    "number": 18,
    "title": "Rücklauftest: höher, gleich oder tiefer",
    "summary": "Die Testform allein entscheidet nicht die Richtung.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-18",
    "paragraphs": [
      "Nach einem Verkäuferimpuls kann ein Käufer-Rücklauf als tieferes Hoch, Doppelhoch oder sogar höheres Hoch erscheinen. Ein später gescheiterter höherer Test ist trotzdem mit einem Verkäuferkanal vereinbar.",
      "Benenne die Referenzgröße. Ein höheres lokales Hoch kann unter einem alten größeren Hoch liegen; ein tatsächlicher größerer Überschuss ist eine andere Beobachtung.",
      "Die Beispiele zeigen unterschiedliche Rücklaufhöhen vor neuem Verkäuferanschluss. Keine Testform garantiert diesen Anschluss. Erst die Folge begründet, ob die Käufer das alte Niveau halten konnten."
    ],
    "callout": "Rücklaufhöhe und Testergebnis sind verschiedene Fragen.",
    "takeaways": [
      "Die Testform allein entscheidet nicht die Richtung.",
      "Benenne die Referenzgröße.",
      "Rücklaufhöhe und Testergebnis sind verschiedene Fragen."
    ],
    "prompt": "Kann ein höherer Rücklauftest später scheitern?",
    "answers": [
      {
        "label": "Nein, jedes höhere Hoch verbietet Abwärtsfolge.",
        "explanation": "Eine Überschreitung kann zurückgenommen werden."
      },
      {
        "label": "Nur wenn man die Referenz nachträglich verschiebt.",
        "explanation": "Der ursprüngliche Bezug muss erhalten bleiben."
      },
      {
        "label": "Ja, wenn nach der Überschreitung neue Verkäuferkontrolle entsteht.",
        "explanation": "Richtig. Rücklaufhöhe und Testergebnis sind verschiedene Fragen."
      }
    ],
    "correct": 2
  },
  {
    "number": 19,
    "title": "Test des Kanalstarts und Gegenreaktion",
    "summary": "Eine Rückkehr kann eine Range sichtbar machen.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-19",
    "paragraphs": [
      "Nach dem Kanalbruch kann der Gegenabschnitt den bekannten Startbereich prüfen. Eine anschließende Reaktion in alter Trendrichtung bildet einen weiteren Swing.",
      "Die Kombination aus Kanal, Gegenbein und Reaktion kann eine größere Range sichtbar machen. Der Reaktionsumfang ist keine garantierte Mindestquote; auch die Startzone kann durchbrochen werden.",
      "Unser Beispiel fällt vom Hoch 72 zur Zone 40 und reagiert auf 48. Acht von 32 Einheiten sind 25 Prozent des Rückgangs. Diese Rechnung beschreibt nur das Beispiel, kein Mindestziel für künftige Tage."
    ],
    "callout": "Eine Beispielquote ist keine Marktgarantie.",
    "takeaways": [
      "Eine Rückkehr kann eine Range sichtbar machen.",
      "Die Kombination aus Kanal, Gegenbein und Reaktion kann eine größere Range sichtbar machen.",
      "Eine Beispielquote ist keine Marktgarantie."
    ],
    "prompt": "Was bedeutet der Anstieg 40 → 48 nach 72 → 40?",
    "answers": [
      {
        "label": "Eine Rücknahme von 8 der zuvor gefallenen 32 Einheiten.",
        "explanation": "Richtig. Eine Beispielquote ist keine Marktgarantie."
      },
      {
        "label": "Eine garantierte 25-Prozent-Regel für alle Tests.",
        "explanation": "Das ist nur die konkrete Beispielrechnung."
      },
      {
        "label": "Ein sicherer neuer Bullentrend.",
        "explanation": "Die Reaktion kann Teil einer Range bleiben."
      }
    ],
    "correct": 0
  },
  {
    "number": 20,
    "title": "Doppeltief am Kanalstart",
    "summary": "Die Käuferauslösung darf auch fehlen.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-20",
    "paragraphs": [
      "Der erste Rücklauf und der spätere Starttest können zwei Tiefs in derselben Zone bilden. Eine Käuferreaktion wäre als Doppeltief-Flagge prüfbar.",
      "Ein enger Verkäuferkanal in die Zone kann jedoch weiteren Abwärtsanschluss entwickeln. Ein kleines Käufersignal, das nicht ausgelöst wird, ist noch kein ausgeführter Verlusttrade.",
      "Links hält der Test und reagiert. Rechts bleibt das spätere Hoch unter dem geplanten Buy-Stop, bevor Verkäufer weiter fallen. Führe den nicht ausgelösten Plan ausdrücklich im Replay mit."
    ],
    "callout": "Testzone ist kein garantierter Halt.",
    "takeaways": [
      "Die Käuferauslösung darf auch fehlen.",
      "Ein enger Verkäuferkanal in die Zone kann jedoch weiteren Abwärtsanschluss entwickeln.",
      "Testzone ist kein garantierter Halt."
    ],
    "prompt": "Wie behandelst du einen nicht ausgelösten Buy-Stop?",
    "answers": [
      {
        "label": "Als nachträglich trotzdem ausgeführt.",
        "explanation": "Das würde die Orderhistorie erfinden."
      },
      {
        "label": "Als offenen oder verworfenen Plan ohne ausgeführte Position.",
        "explanation": "Richtig. Testzone ist kein garantierter Halt."
      },
      {
        "label": "Als sicheren Verlusttrade.",
        "explanation": "Ohne Auslösung wurde diese Position nicht eröffnet."
      }
    ],
    "correct": 1
  },
  {
    "number": 21,
    "title": "Von Trend zu Range umschalten",
    "summary": "Neue Swings ändern den passenden Arbeitsmodus.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-21",
    "paragraphs": [
      "Wenn der Kanalstart getestet wurde und eine Gegenreaktion entsteht, kann der Verlauf zunehmend zwischen bekannten Zonen pendeln. Die frühere reine Trendlesart wird dann weniger passend.",
      "Die spätere Range-Mitte war während des ersten Kanals noch nicht sicher bekannt. Ebenso lässt sich aus dem Chart keine exakte 50-Prozent-Wahrscheinlichkeit für gleiche Strecken messen.",
      "Beschreibe mehr Überlappung, Rückkehr und gescheiterte Ausbrüche. Prüfe beide Richtungen neu mit begrenztem Risiko. Eine Range kann später oben oder unten verlassen werden."
    ],
    "callout": "Der neue Kontext ersetzt die alte Gewissheit.",
    "takeaways": [
      "Neue Swings ändern den passenden Arbeitsmodus.",
      "Die spätere Range-Mitte war während des ersten Kanals noch nicht sicher bekannt.",
      "Der neue Kontext ersetzt die alte Gewissheit."
    ],
    "prompt": "Was zeigt der Rangeübergang direkt?",
    "answers": [
      {
        "label": "Eine exakt gemessene 50-Prozent-Chance.",
        "explanation": "Dafür wäre eine eigene statistische Auswertung nötig."
      },
      {
        "label": "Eine garantierte Ausbruchsrichtung.",
        "explanation": "Die spätere Richtung bleibt offen."
      },
      {
        "label": "Mehr zweiseitige Swings und Rückkehr in bekannte Bereiche.",
        "explanation": "Richtig. Der neue Kontext ersetzt die alte Gewissheit."
      }
    ],
    "correct": 2
  },
  {
    "number": 22,
    "title": "Beschleunigender Kanal",
    "summary": "Steiler werden ist nicht sofort fertig sein.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-22",
    "paragraphs": [
      "Ein Kanal kann zunehmend steiler werden und damit eine parabolische Form annehmen. Das beschreibt zunehmende Geschwindigkeit und mögliche Überdehnung.",
      "Überdehnung ist keine zeitgenaue Umkehrprognose. Ein Gegentrade ohne Bestätigung kann gegen anhaltenden starken Anschluss laufen. Prüfe die Ausführung statt allein die Form zu handeln.",
      "Unser enger Verlauf beschleunigt im zweiten Abschnitt. Vergleiche die stärkere Steigung mit einem normalen Kanal. Der spätere Gegenbruch gehört erst ab seiner tatsächlichen Entstehung zur Lesart."
    ],
    "callout": "Ein steiler Kanal kann länger laufen als erwartet.",
    "takeaways": [
      "Steiler werden ist nicht sofort fertig sein.",
      "Überdehnung ist keine zeitgenaue Umkehrprognose.",
      "Ein steiler Kanal kann länger laufen als erwartet."
    ],
    "prompt": "Warum ist sofortiges Shorten allein wegen Beschleunigung unvollständig?",
    "answers": [
      {
        "label": "Weil eine bestätigte Umkehr und ein tragfähiger Plan noch fehlen.",
        "explanation": "Richtig. Ein steiler Kanal kann länger laufen als erwartet."
      },
      {
        "label": "Weil der Kanal sicher schon beendet ist.",
        "explanation": "Beschleunigung kann weiterlaufen."
      },
      {
        "label": "Weil jeder steile Verlauf unbegrenzten Gewinn garantiert.",
        "explanation": "Auch starke Trends können korrigieren."
      }
    ],
    "correct": 0
  },
  {
    "number": 23,
    "title": "Zwei oder drei aufeinanderfolgende Klimaxe",
    "summary": "Pausen trennen schnelle Schübe.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-23",
    "paragraphs": [
      "Zwei große gerichtete Impulse mit einer kurzen Pause dazwischen können als aufeinanderfolgende Klimaxe gelesen werden. Die zweite schnelle Strecke übernimmt dann funktional die Rolle der späteren Phase.",
      "Danach ist eine größere Korrektur plausibel, aber weder ein dritter Impuls noch Seitwärtsfolge ausgeschlossen. Eine feste Mindestzahl von Korrekturbars ist keine Garantie.",
      "Im Beispiel stehen zwei Verkäuferimpulse einer Variante mit drittem Schub gegenüber. Die spätere Käuferreaktion prüft einen vorherigen Pausenbereich. Vermutete Panik bleibt eine Interpretation der Preise."
    ],
    "callout": "Klimax bedeutet Überdehnung, nicht sichere sofortige Umkehr.",
    "takeaways": [
      "Pausen trennen schnelle Schübe.",
      "Danach ist eine größere Korrektur plausibel, aber weder ein dritter Impuls noch Seitwärtsfolge ausgeschlossen.",
      "Klimax bedeutet Überdehnung, nicht sichere sofortige Umkehr."
    ],
    "prompt": "Welche Folge bleibt nach zwei Klimaxschüben möglich?",
    "answers": [
      {
        "label": "Eine verpflichtende Order gegen den Trend.",
        "explanation": "Ein Signal- und Risikoplan fehlt noch."
      },
      {
        "label": "Korrektur, weitere Pause oder ein zusätzlicher Schub.",
        "explanation": "Richtig. Klimax bedeutet Überdehnung, nicht sichere sofortige Umkehr."
      },
      {
        "label": "Nur eine sofortige fertige Umkehr.",
        "explanation": "Ein dritter Impuls kann entstehen."
      }
    ],
    "correct": 1
  },
  {
    "number": 24,
    "title": "Kanal zuerst, Klimax später",
    "summary": "Die Reihenfolge kann eine Variante bilden.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-24",
    "paragraphs": [
      "Manchmal läuft zuerst ein Kanal, bevor ein großer Trendbar die Bewegung stark beschleunigt. Das Endverhalten kann einer Spike-und-Klimax-Variante ähneln.",
      "Die zeitliche Beschreibung bleibt trotzdem Kanal, dann Spike. Du brauchst die Begriffe nicht umzudrehen, um eine mögliche tiefere Korrektur und einen Test des Beschleunigungsstarts zu prüfen.",
      "Vergleiche die geordnete Anfangsbewegung mit dem späten großen Körper. Prüfe nachfolgende Pause und Gegenfolge. Der große Körper allein legt das Tageshoch noch nicht sicher fest."
    ],
    "callout": "Funktionale Ähnlichkeit ändert nicht die Reihenfolge.",
    "takeaways": [
      "Die Reihenfolge kann eine Variante bilden.",
      "Die zeitliche Beschreibung bleibt trotzdem Kanal, dann Spike.",
      "Funktionale Ähnlichkeit ändert nicht die Reihenfolge."
    ],
    "prompt": "Wie beschreibst du einen Kanal mit spätem großem Impuls?",
    "answers": [
      {
        "label": "Als rückwirkend anders verlaufene Chronologie.",
        "explanation": "Die tatsächliche Reihenfolge bleibt erhalten."
      },
      {
        "label": "Als sicheren Umkehrtrade beim Schluss.",
        "explanation": "Ein Gegensignal muss zusätzlich entstehen."
      },
      {
        "label": "Als Kanal, dann Klimaxschub mit offenem weiteren Ergebnis.",
        "explanation": "Richtig. Funktionale Ähnlichkeit ändert nicht die Reihenfolge."
      }
    ],
    "correct": 2
  },
  {
    "number": 25,
    "title": "Eröffnungsgap als Impulsvariante",
    "summary": "Die Sessiondarstellung beeinflusst das sichtbare Bild.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-25",
    "paragraphs": [
      "Ein Sprung vom vorherigen Schluss zur neuen Eröffnung kann die schnelle Verlagerung eines Impulses darstellen. Nach einer Pause kann ein Kanal anschließen.",
      "Der sichtbare Gapabstand hängt von Sitzung und Datendarstellung ab. Zwei unterschiedliche Instrumente sind kein exakter OHLC-Vergleich desselben Preiswegs.",
      "Unser eigenes Beispiel zeigt den vorherigen Schluss und die neue Eröffnung. Es wird nicht als reale Index-Futures-Gleichheit ausgegeben. Prüfe Anschluss und frühe Rücknahme des Sprungs getrennt."
    ],
    "callout": "Sessionbezug für den Gapvergleich benennen.",
    "takeaways": [
      "Die Sessiondarstellung beeinflusst das sichtbare Bild.",
      "Der sichtbare Gapabstand hängt von Sitzung und Datendarstellung ab.",
      "Sessionbezug für den Gapvergleich benennen."
    ],
    "prompt": "Wovon hängt ein sichtbares Eröffnungsgap mit ab?",
    "answers": [
      {
        "label": "Von der verwendeten Sitzung und Preisreferenz.",
        "explanation": "Richtig. Sessionbezug für den Gapvergleich benennen."
      },
      {
        "label": "Von einer garantierten Instrumentengleichheit.",
        "explanation": "Unterschiedliche Datenreihen sind nicht identisch."
      },
      {
        "label": "Vom späteren Tagesgewinn.",
        "explanation": "Der Gapabstand ist vor dem Ergebnis sichtbar."
      }
    ],
    "correct": 0
  },
  {
    "number": 26,
    "title": "Ein Preisweg, mehrere Zeitebenen",
    "summary": "Ein enger Kanal kann verdichtet wie ein Spike wirken.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-26",
    "paragraphs": [
      "Ein eng gerichteter Kanal auf kleinen Bars kann in einer gröberen Darstellung als einzelner großer Impuls erscheinen. Die kleinere Pause kann innerhalb eines größeren Körpers oder Schattens verschwinden.",
      "Für unseren Vergleich werden jeweils drei identische Ausgangsbars aggregiert. Open, höchstes High, niedrigstes Low und letzter Close bleiben rechnerisch erhalten.",
      "Du siehst dieselbe Bewegung zweimal, keine unabhängige Bestätigung. Ein späterer Kanal auf der größeren Ebene darf im kleinen frühen Verlauf nicht schon als sicher bekannt angenommen werden."
    ],
    "callout": "Aggregation verändert die Ansicht, nicht die Datenhistorie.",
    "takeaways": [
      "Ein enger Kanal kann verdichtet wie ein Spike wirken.",
      "Für unseren Vergleich werden jeweils drei identische Ausgangsbars aggregiert.",
      "Aggregation verändert die Ansicht, nicht die Datenhistorie."
    ],
    "prompt": "Wie prüfst du die beiden Zeitebenen?",
    "answers": [
      {
        "label": "Als zwei unabhängige Beweise.",
        "explanation": "Die Datenquelle ist dieselbe."
      },
      {
        "label": "Durch echte Aggregation desselben chronologischen Preiswegs.",
        "explanation": "Richtig. Aggregation verändert die Ansicht, nicht die Datenhistorie."
      },
      {
        "label": "Mit zwei beliebig ähnlichen erfundenen Reihen.",
        "explanation": "Das wäre kein identischer Zeitebenenvergleich."
      }
    ],
    "correct": 1
  },
  {
    "number": 27,
    "title": "Gegenspikes sammeln Gewicht",
    "summary": "Mehrere Gegenimpulse können den Kontext verändern.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-27",
    "paragraphs": [
      "Ein erster Verkäuferimpuls in einem starken Bullentrend kann zunächst nur eine Flagge erzeugen. Weitere kräftige Gegenimpulse zeigen zunehmend zweiseitigen Handel.",
      "Der letzte auffällige Bar muss nicht allein die Veränderung verursachen. Frühere Gegenstrecken, tiefere Rückläufe und gebrochene Linien gehören zum bisher bekannten Verlauf.",
      "Vergleiche die frühe kleine Gegenreaktion mit mehreren späteren Verkäuferabschnitten. Beurteile sie zeitgerecht. Aus dem Chart folgt keine vollständige Liste der beteiligten Positionen."
    ],
    "callout": "Übergang aus der ganzen sichtbaren Folge lesen.",
    "takeaways": [
      "Mehrere Gegenimpulse können den Kontext verändern.",
      "Der letzte auffällige Bar muss nicht allein die Veränderung verursachen.",
      "Übergang aus der ganzen sichtbaren Folge lesen."
    ],
    "prompt": "Was gehört zur Bewertung eines späteren Gegenbruchs?",
    "answers": [
      {
        "label": "Nur der letzte große Bar.",
        "explanation": "Frühere Veränderungen können schon relevant gewesen sein."
      },
      {
        "label": "Die sichere Kenntnis aller Händlerabsichten.",
        "explanation": "OHLC zeigt Preise, nicht ihre vollständigen Motive."
      },
      {
        "label": "Auch frühere Gegenimpulse und Strukturveränderungen.",
        "explanation": "Richtig. Übergang aus der ganzen sichtbaren Folge lesen."
      }
    ],
    "correct": 2
  },
  {
    "number": 28,
    "title": "Entgegengesetzte Impulse und Balance",
    "summary": "Zwei schnelle Richtungen können eine Range vorbereiten.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-28",
    "paragraphs": [
      "Ein Käuferimpuls kann kurz darauf kräftig von Verkäufern zurückgenommen werden. Wenn beide Seiten anschließend wiederholt reagieren, ist eine Balance als Lesart plausibel.",
      "Die spätere Richtung entscheidet sich am Anschluss. Ein zweiter Käuferausbruch kann gelingen oder in Verkäuferfolge übergehen. Der erste Impuls darf nicht jeden späteren Bar dominieren.",
      "Unsere Panels zeigen konkurrierende Schübe und danach einen Verkäuferkanal. Dieser wird erst mit der neuen Folge sichtbar. Vorher bleibt der Rangeausbruch in beide Richtungen offen."
    ],
    "callout": "Konkurrierende Impulse brauchen Anschlussprüfung.",
    "takeaways": [
      "Zwei schnelle Richtungen können eine Range vorbereiten.",
      "Die spätere Richtung entscheidet sich am Anschluss.",
      "Konkurrierende Impulse brauchen Anschlussprüfung."
    ],
    "prompt": "Was bestimmt nach zwei Gegenimpulsen die weitere Hauptlesart?",
    "answers": [
      {
        "label": "Welche Seite anschließend gerichteten Anschluss gewinnt.",
        "explanation": "Richtig. Konkurrierende Impulse brauchen Anschlussprüfung."
      },
      {
        "label": "Immer der zeitlich erste Impuls.",
        "explanation": "Er kann später zurückgenommen werden."
      },
      {
        "label": "Eine garantierte sofortige Rangeauflösung.",
        "explanation": "Balance kann länger dauern."
      }
    ],
    "correct": 0
  },
  {
    "number": 29,
    "title": "Phasen passend handeln",
    "summary": "Impuls und Kanal verlangen unterschiedliche Preisprüfung.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-29",
    "paragraphs": [
      "Im direkten Impuls können Market- oder kleine Rücklaufeinstiege prüfbar sein. Im Kanal können Trendpullbacks oder geplante Limits an bekannten Bezügen besser zur Struktur passen.",
      "Eine Limitberührung garantiert keine Füllung. Gemeinsames Geldrisiko, Schutzabstand und Gesamtmenge müssen auch bei Teilpositionen begrenzt bleiben. Ein Gegen-Nachkauf ohne Plan ist keine harmlose Ergänzung.",
      "Vergleiche die schnelle Anfangsphase mit der langsameren Kanalphase. Halte Preis, Verlustgrenze und Halteabsicht fest. Das Muster rechtfertigt weder blindes Hinterherlaufen noch endloses Aufstocken gegen die Richtung."
    ],
    "callout": "Phase beschreiben, Order gesondert rechnen.",
    "takeaways": [
      "Impuls und Kanal verlangen unterschiedliche Preisprüfung.",
      "Eine Limitberührung garantiert keine Füllung.",
      "Phase beschreiben, Order gesondert rechnen."
    ],
    "prompt": "Was bleibt bei jeder Einstiegsart nötig?",
    "answers": [
      {
        "label": "Unbegrenzte Gegenpositionen bei jedem Rücklauf.",
        "explanation": "Der Gesamtverlust muss begrenzt bleiben."
      },
      {
        "label": "Ein eigener ausführbarer Plan mit begrenztem Gesamtgeldrisiko.",
        "explanation": "Richtig. Phase beschreiben, Order gesondert rechnen."
      },
      {
        "label": "Garantierte Füllung bei einer Limitberührung.",
        "explanation": "Preisbesuch und tatsächliche Ausführung unterscheiden sich."
      }
    ],
    "correct": 1
  },
  {
    "number": 30,
    "title": "Dein Phasenprotokoll vor dem nächsten Bar",
    "summary": "Bekannte Anker und offene Folgen festhalten.",
    "section": "Phasen und Ausführung",
    "scenario": "c21-30",
    "paragraphs": [
      "Notiere den Impulsursprung, das bisherige Ende, die erste Pause und den bekannten Kanalstart. Benenne außerdem deine Arbeitsgröße und die noch offene Hauptlesart.",
      "Halte erwarteten Test und tatsächlichen Preisbesuch getrennt. Ein später erfülltes Ziel oder ein schöner Kanal darf die frühere unbekannte Folge nicht ersetzen.",
      "Prüfe eine mögliche Order gesondert mit Einstieg, Schutz, Menge und Halteabsicht. Nimm ausgelassene, nicht ausgelöste und gescheiterte Varianten auf; nur Gewinner zu sammeln würde die Auswertung verzerren."
    ],
    "callout": "Beschreibung und Orderhistorie getrennt führen.",
    "takeaways": [
      "Bekannte Anker und offene Folgen festhalten.",
      "Halte erwarteten Test und tatsächlichen Preisbesuch getrennt.",
      "Beschreibung und Orderhistorie getrennt führen."
    ],
    "prompt": "Was macht das Phasen-Replay fair?",
    "answers": [
      {
        "label": "Nur die später schönsten Gewinner.",
        "explanation": "Ausgelassene und gescheiterte Varianten fehlen dann."
      },
      {
        "label": "Ein nachträglich immer passender Startpunkt.",
        "explanation": "Das würde die Hypothese an das Ergebnis anpassen."
      },
      {
        "label": "Zeitgerecht notierte Anker samt offenen Alternativen und eigener Orderprüfung.",
        "explanation": "Richtig. Beschreibung und Orderhistorie getrennt führen."
      }
    ],
    "correct": 2
  },
  {
    "number": 31,
    "title": "Unsaubere Eröffnung und zweite Käuferidee",
    "summary": "Ein grüner Gegenbar kann vollständig überlappen.",
    "section": "Lernfall 1",
    "scenario": "c21-31",
    "paragraphs": [
      "Im ersten Lernfall beginnt der Handel mit Verkäuferdruck. Ein grüner Bar im gleichen Bereich muss noch keine große Umkehr begründen, wenn sein Preisraum den vorherigen Bar stark überlappt.",
      "Ein weiterer Versuch mit neuem Käuferanschluss liefert zusätzliche Information. Der Vergleich gilt der tatsächlichen Folge, nicht dem nachträglich bekannten Tagestief.",
      "Links bleibt die erste Käuferreaktion klein. Rechts entsteht später ein direkter Käuferimpuls. Der frühe unklare Long darf nicht mit dem späteren gelungenen Verlauf gerechtfertigt werden."
    ],
    "callout": "Überlappung vor Umkehrnamen prüfen.",
    "takeaways": [
      "Ein grüner Gegenbar kann vollständig überlappen.",
      "Ein weiterer Versuch mit neuem Käuferanschluss liefert zusätzliche Information.",
      "Überlappung vor Umkehrnamen prüfen."
    ],
    "prompt": "Warum kann die erste grüne Eröffnungsreaktion unklar sein?",
    "answers": [
      {
        "label": "Weil sie den vorherigen Verkäuferbereich weitgehend überlappt.",
        "explanation": "Richtig. Überlappung vor Umkehrnamen prüfen."
      },
      {
        "label": "Weil grüne Bars immer schlechte Signale sind.",
        "explanation": "Der Kontext entscheidet ihr Gewicht."
      },
      {
        "label": "Weil das spätere Tagestief bereits sicher bekannt ist.",
        "explanation": "Dieses Wissen war früh nicht verfügbar."
      }
    ],
    "correct": 0
  },
  {
    "number": 32,
    "title": "Drei Kanalspitzen und Gegenübergang",
    "summary": "Frühere Gegenschübe bleiben Teil der Geschichte.",
    "section": "Lernfall 1",
    "scenario": "c21-32",
    "paragraphs": [
      "Nach dem Käuferimpuls steigt im ersten Lernfall ein Kanal in mehreren Schüben. Dazwischen treten Verkäuferbars und größere Rückgaben auf.",
      "Der dritte Hochtest und die neue Verkäuferfolge unterstützen die Korrekturidee. Die früheren Gegenabschnitte dürfen dabei nicht aus der Bewertung verschwinden.",
      "Markiere Impuls, Rücklauftief und drei spätere Spitzen. Prüfe den Kanalbruch getrennt vom bloßen Hochbesuch. Seine Auslösung war am ersten Käuferimpuls noch nicht bekannt."
    ],
    "callout": "Den Gegenübergang zeitgerecht lesen.",
    "takeaways": [
      "Frühere Gegenschübe bleiben Teil der Geschichte.",
      "Der dritte Hochtest und die neue Verkäuferfolge unterstützen die Korrekturidee.",
      "Den Gegenübergang zeitgerecht lesen."
    ],
    "prompt": "Welche Information stärkt hier den Gegenübergang?",
    "answers": [
      {
        "label": "Jede dritte Spitze ohne Folge.",
        "explanation": "Ein weiterer Schub bleibt möglich."
      },
      {
        "label": "Mehr Gegenhandel plus späterer Kanalbruch mit Anschluss.",
        "explanation": "Richtig. Den Gegenübergang zeitgerecht lesen."
      },
      {
        "label": "Nur das spätere fertige Tagesbild.",
        "explanation": "Das führt zu Rückblickwissen."
      }
    ],
    "correct": 1
  },
  {
    "number": 33,
    "title": "Starttest scheitert und Korrektur wächst",
    "summary": "Ein enger Gegenkanal kann einen zweiten Schub vorbereiten.",
    "section": "Lernfall 1",
    "scenario": "c21-33",
    "paragraphs": [
      "Im ersten Lernfall erreicht die Verkäuferfolge den alten Kanalstart. Ein kleines Käufersignal bleibt ohne Auslösung, während der Preis weiter nach unten läuft.",
      "Die schnelle erste Gegenstrecke kann nur das erste größere Bein einer komplexeren Korrektur sein. Kleine innere Teilbewegungen bestimmen nicht automatisch die gesamte Korrekturzahl.",
      "Links endet das Replay beim Starttest. Rechts wird die nicht ausgelöste Käuferidee verworfen und die spätere Erholung sichtbar. Trenne Test, Orderstatus und spätere neue Struktur."
    ],
    "callout": "Ein nicht ausgelöstes Signal ist keine Position.",
    "takeaways": [
      "Ein enger Gegenkanal kann einen zweiten Schub vorbereiten.",
      "Die schnelle erste Gegenstrecke kann nur das erste größere Bein einer komplexeren Korrektur sein.",
      "Ein nicht ausgelöstes Signal ist keine Position."
    ],
    "prompt": "Was folgt aus dem kleinen Käufersignal ohne Trigger?",
    "answers": [
      {
        "label": "Ein sicher realisierter Longverlust.",
        "explanation": "Es gab keine Auslösung."
      },
      {
        "label": "Ein garantierter Halt der Startzone.",
        "explanation": "Der Verkäuferkanal kann weiterlaufen."
      },
      {
        "label": "Eine noch nicht ausgeführte Idee, die verworfen werden kann.",
        "explanation": "Richtig. Ein nicht ausgelöstes Signal ist keine Position."
      }
    ],
    "correct": 2
  },
  {
    "number": 34,
    "title": "Bärenkanal über eine Sitzung hinaus",
    "summary": "Der spätere Starttest muss nicht heute erfolgen.",
    "section": "Lernfall 2",
    "scenario": "c21-34",
    "paragraphs": [
      "Im zweiten Lernfall folgt auf Verkäuferimpulse ein abwärtsgerichteter Kanal. Kleine Erholungen ändern die größere Folge tieferer Hochs zunächst nicht.",
      "Ein Test des Kanalstarts kann erst in einer späteren Sitzung entstehen. Markiere den bekannten Bezug vor dem späteren Gap oder Käuferimpuls; ein erwarteter Test ist kein garantierter Tagesabschluss.",
      "Links ist nur der erste Tagesabschnitt sichtbar. Rechts bleibt derselbe Bezug für die spätere Käuferreaktion bestehen. Verwende das nächste Tagesergebnis nicht für frühere Einstiege."
    ],
    "callout": "Sessiongrenze beendet die Testhypothese nicht automatisch.",
    "takeaways": [
      "Der spätere Starttest muss nicht heute erfolgen.",
      "Ein Test des Kanalstarts kann erst in einer späteren Sitzung entstehen.",
      "Sessiongrenze beendet die Testhypothese nicht automatisch."
    ],
    "prompt": "Wie bleibt ein späterer Starttest prüfbar?",
    "answers": [
      {
        "label": "Der bekannte Bezug wird vor der nächsten Sitzung festgehalten.",
        "explanation": "Richtig. Sessiongrenze beendet die Testhypothese nicht automatisch."
      },
      {
        "label": "Er wird erst beim erreichten späteren Hoch erfunden.",
        "explanation": "Dann wäre die Hypothese rückblickend angepasst."
      },
      {
        "label": "Er muss zwingend vor dem heutigen Schluss erfolgen.",
        "explanation": "Der betrachtete Test kann später liegen."
      }
    ],
    "correct": 0
  },
  {
    "number": 35,
    "title": "Beschleunigung am Bärenkanalende",
    "summary": "Steilerer Verkauf macht Longnachkäufe nicht sicher.",
    "section": "Lernfall 2",
    "scenario": "c21-35",
    "paragraphs": [
      "Der zweite Lernfall beschleunigt gegen Ende des Verkäuferkanals. Das kann Überdehnung anzeigen, ohne den Zeitpunkt eines Bodens festzulegen.",
      "Gegen-Nachkäufe können die Verlustposition vergrößern, besonders bei wenig verbleibender Handelszeit. Eine erhoffte Rückkehr zum Kanalstart ist keine zulässige unbegrenzte Risikogrenze.",
      "Vergleiche den normalen Bärenkanal mit der steileren letzten Strecke. Erst der spätere Käuferbruch ist neue Bestätigung. Die späte Endspitze war vorher nicht sicher bekannt."
    ],
    "callout": "Zeit und Gesamtgeldrisiko bleiben begrenzt.",
    "takeaways": [
      "Steilerer Verkauf macht Longnachkäufe nicht sicher.",
      "Gegen-Nachkäufe können die Verlustposition vergrößern, besonders bei wenig verbleibender Handelszeit.",
      "Zeit und Gesamtgeldrisiko bleiben begrenzt."
    ],
    "prompt": "Warum rechtfertigt Überdehnung keine endlosen Longnachkäufe?",
    "answers": [
      {
        "label": "Weil die Uhr jeden Verlust automatisch schließt.",
        "explanation": "Ein erzwungener Ausstieg kann einen großen Verlust ergeben."
      },
      {
        "label": "Weil weiterer Verkäuferanschluss und wachsende Verluste möglich sind.",
        "explanation": "Richtig. Zeit und Gesamtgeldrisiko bleiben begrenzt."
      },
      {
        "label": "Weil ein Boden exakt feststeht.",
        "explanation": "Die Form datiert keine sichere Umkehr."
      }
    ],
    "correct": 1
  },
  {
    "number": 36,
    "title": "Neuer Käuferkontext und alter Bärenbezug",
    "summary": "Ein alter Testbereich ersetzt die jüngste Kontrolle nicht.",
    "section": "Lernfall 2",
    "scenario": "c21-36",
    "paragraphs": [
      "Nach dem Bärenkanal entsteht im zweiten Lernfall eine kräftige Käuferfolge. Die alte Startzone bleibt ein Preisbezug, aber der aktuelle Kontext hat sich verändert.",
      "Ein Short am alten Bezug braucht deshalb neues Verkäufersignal und passenden Raum. Viele neue Käuferkörper und höhere Swings sprechen gegen die bloße Wiederholung der alten Tageslesart.",
      "Die Beispiele zeigen die neue Käuferstrecke und einen begrenzten späteren Rücklauf. Die frühere Bärenkontrolle bleibt Geschichte; sie ist kein automatischer Auftrag für den nächsten Trade."
    ],
    "callout": "Alte Referenz mit neuer Kontrolle vergleichen.",
    "takeaways": [
      "Ein alter Testbereich ersetzt die jüngste Kontrolle nicht.",
      "Ein Short am alten Bezug braucht deshalb neues Verkäufersignal und passenden Raum.",
      "Alte Referenz mit neuer Kontrolle vergleichen."
    ],
    "prompt": "Was muss am alten Bärenbezug zusätzlich geprüft werden?",
    "answers": [
      {
        "label": "Nur der gestrige Trendname.",
        "explanation": "Die aktuelle Folge kann ihn überholt haben."
      },
      {
        "label": "Eine garantierte Rückkehr in den ganzen alten Trend.",
        "explanation": "Das bleibt offen."
      },
      {
        "label": "Die jüngste Käuferstruktur und ein neues tragfähiges Gegensignal.",
        "explanation": "Richtig. Alte Referenz mit neuer Kontrolle vergleichen."
      }
    ],
    "correct": 2
  },
  {
    "number": 37,
    "title": "Verschachtelte Impulse und Kanäle",
    "summary": "Mehrere Größen können gleichzeitig passen.",
    "section": "Lernfall 3",
    "scenario": "c21-37",
    "paragraphs": [
      "Im dritten Lernfall enthält ein größerer Verlauf mehrere kleinere Impuls-Pause-Kanal-Folgen. Ein steiler kleiner Kanal kann auf der größeren Ebene noch Teil eines Impulses sein.",
      "Benenne die Ebene jeder Beobachtung. Ein kleiner Starttest erfüllt nicht automatisch die offene Hypothese für den größeren Kanalstart.",
      "Links wird ein kleiner Abschnitt isoliert, rechts zeigt derselbe synthetische Preisweg seinen größeren Zusammenhang. Beide Beschreibungen bleiben möglich, solange die Anker ausdrücklich getrennt sind."
    ],
    "callout": "Bezug und Größe für jeden Test notieren.",
    "takeaways": [
      "Mehrere Größen können gleichzeitig passen.",
      "Benenne die Ebene jeder Beobachtung.",
      "Bezug und Größe für jeden Test notieren."
    ],
    "prompt": "Was verhindert eine falsche Gleichsetzung der Tests?",
    "answers": [
      {
        "label": "Getrennte Anker für kleine und große Kanalebene.",
        "explanation": "Richtig. Bezug und Größe für jeden Test notieren."
      },
      {
        "label": "Alle Startpunkte ohne Größenangabe zusammenwerfen.",
        "explanation": "Dann wird unklar, welcher Bezug getestet wurde."
      },
      {
        "label": "Jeden kleinen Bruch als Ende aller Trends werten.",
        "explanation": "Die größere Struktur kann weiter gelten."
      }
    ],
    "correct": 0
  },
  {
    "number": 38,
    "title": "Ein Starttest bleibt aus",
    "summary": "Ein Muster darf nicht jedes Ergebnis vereinnahmen.",
    "section": "Lernfall 3",
    "scenario": "c21-38",
    "paragraphs": [
      "Im dritten Lernfall gelingt nach dem Rücklauf eine neue Käuferfortsetzung. Eine vorher mögliche Rückkehr zur Startzone entsteht im betrachteten Fenster nicht.",
      "Notiere die nicht erfüllte Hypothese ausdrücklich. Ein Kanalstarttest ist keine Pflicht; das neue Käuferhoch ist keine versteckte Erfüllung des erwarteten Rückgangs.",
      "Die Vergleichspanels zeigen denselben Start mit Test oder ohne Test. Verändere die Referenz nicht nachträglich. Auch ein ausgelassener Gegentrade kann damit nachvollziehbar bleiben."
    ],
    "callout": "Ausgebliebene Tests gehören ins Protokoll.",
    "takeaways": [
      "Ein Muster darf nicht jedes Ergebnis vereinnahmen.",
      "Notiere die nicht erfüllte Hypothese ausdrücklich.",
      "Ausgebliebene Tests gehören ins Protokoll."
    ],
    "prompt": "Wie dokumentierst du den fehlenden Starttest?",
    "answers": [
      {
        "label": "Durch Verschieben der Startzone zum neuen Hoch.",
        "explanation": "Der vorher bekannte Bezug muss erhalten bleiben."
      },
      {
        "label": "Als im Beobachtungsfenster nicht entstandene Folge.",
        "explanation": "Richtig. Ausgebliebene Tests gehören ins Protokoll."
      },
      {
        "label": "Als heimlich erfüllt trotz fehlender Berührung.",
        "explanation": "Das erfindet einen Preisbesuch."
      }
    ],
    "correct": 1
  },
  {
    "number": 39,
    "title": "Früher Verkäuferimpuls, später höherer Test",
    "summary": "Der sichtbare Kanal kann später beginnen.",
    "section": "Lernfall 3",
    "scenario": "c21-39",
    "paragraphs": [
      "Im dritten Lernfall lässt ein früher Verkäuferimpuls eine größere Korrektur erwarten. Der anschließende Käufer-Rücklauf erreicht trotzdem ein höheres Hoch.",
      "Wenn dieses neue Hoch danach scheitert, kann dort der spätere Verkäuferkanal beginnen. Der frühere Verkäuferimpuls bleibt als möglicher Ausgangspunkt relevant.",
      "Vergleiche tieferen und höheren Rücklauftest. Beschreibe die alternative Lesart offen, ohne zu behaupten, alle Marktteilnehmer hätten denselben Start gewählt. Erst neuer Verkäuferanschluss stützt sie."
    ],
    "callout": "Ein höherer Rücklauf kann vor einem Bärenkanal liegen.",
    "takeaways": [
      "Der sichtbare Kanal kann später beginnen.",
      "Wenn dieses neue Hoch danach scheitert, kann dort der spätere Verkäuferkanal beginnen.",
      "Ein höherer Rücklauf kann vor einem Bärenkanal liegen."
    ],
    "prompt": "Was ist nach einem frühen Verkäuferimpuls möglich?",
    "answers": [
      {
        "label": "Zwingend nur ein tieferes Hoch.",
        "explanation": "Ein höherer Test kann zurückgenommen werden."
      },
      {
        "label": "Sichere Kenntnis des einheitlichen Marktstartpunkts.",
        "explanation": "Die Erklärung ist eine Interpretation."
      },
      {
        "label": "Ein höherer Rücklauftest, der später scheitert.",
        "explanation": "Richtig. Ein höherer Rücklauf kann vor einem Bärenkanal liegen."
      }
    ],
    "correct": 2
  },
  {
    "number": 40,
    "title": "Gleichmäßiger Mikrokanal und Beschleunigung",
    "summary": "Stärke und Überdehnung unterscheiden.",
    "section": "Lernfall 4",
    "scenario": "c21-40",
    "paragraphs": [
      "Im vierten Lernfall steigen zunächst ähnlich große Bars in einem engen Mikrokanal. Das ist eine andere Qualität als ein späterer sehr großer Klimaxkörper.",
      "Kleine Rückgabe kann einen starken Arbeitskontext stützen. Wird die Folge später steiler, steigt die Gefahr einer größeren Korrektur, ohne deren Beginn bereits festzulegen.",
      "Markiere gleichmäßigen Abschnitt und Beschleunigung getrennt. Der starke Trend benötigt bei weitem Schutzabstand eine entsprechend kleinere Menge. Stärke hebt das Geldrisikolimit nicht auf."
    ],
    "callout": "Kleine Menge kann zu weitem Schutz passen.",
    "takeaways": [
      "Stärke und Überdehnung unterscheiden.",
      "Kleine Rückgabe kann einen starken Arbeitskontext stützen.",
      "Kleine Menge kann zu weitem Schutz passen."
    ],
    "prompt": "Was verbindet Stärke mit einem weiten Schutzabstand?",
    "answers": [
      {
        "label": "Die Menge muss zum unveränderten Geldrisiko passen.",
        "explanation": "Richtig. Kleine Menge kann zu weitem Schutz passen."
      },
      {
        "label": "Das Risiko darf wegen starker Bars unbegrenzt steigen.",
        "explanation": "Stärke ersetzt die Verlustrechnung nicht."
      },
      {
        "label": "Die Umkehr ist beim ersten großen Bar sicher.",
        "explanation": "Sie braucht tatsächliche Gegenfolge."
      }
    ],
    "correct": 0
  },
  {
    "number": 41,
    "title": "Erster Gegenversuch im Mikrokanal",
    "summary": "Eine erste Umkehridee kann scheitern.",
    "section": "Lernfall 4",
    "scenario": "c21-41",
    "paragraphs": [
      "Der erste Verkäuferbar im engen Käuferverlauf kann zunächst nur eine kleine Pause bilden. Neuer Käuferanschluss kann seine Gegenidee rasch zurücknehmen.",
      "Eine Positionsreduzierung nach einem vorab festgelegten Plan ist etwas anderes als ein ungeprüfter großer Short. Beides muss im damaligen Zeitpunkt getrennt bewertet werden.",
      "Links erscheint der erste Gegenbar. Rechts setzt die Käuferfolge fort. Die spätere Beschleunigung erklärt nicht rückwirkend, dass ein früher Gegentrade sicher sein musste."
    ],
    "callout": "Erster Gegenbar und bestätigte Umkehr trennen.",
    "takeaways": [
      "Eine erste Umkehridee kann scheitern.",
      "Eine Positionsreduzierung nach einem vorab festgelegten Plan ist etwas anderes als ein ungeprüfter großer Short.",
      "Erster Gegenbar und bestätigte Umkehr trennen."
    ],
    "prompt": "Was kann nach dem ersten Verkäuferbar geschehen?",
    "answers": [
      {
        "label": "Jeder Teilgewinn ist automatisch ein Short.",
        "explanation": "Gewinnmitnahme und neue Gegenposition sind unterschiedliche Handlungen."
      },
      {
        "label": "Die Käufer können den Trend fortsetzen.",
        "explanation": "Richtig. Erster Gegenbar und bestätigte Umkehr trennen."
      },
      {
        "label": "Nur eine sofortige große Umkehr.",
        "explanation": "Ein enger Trend kann den Gegenversuch zurücknehmen."
      }
    ],
    "correct": 1
  },
  {
    "number": 42,
    "title": "Später Klimax und tieferer Rücklauf",
    "summary": "Ein großer Endbar verändert die Managementfrage.",
    "section": "Lernfall 4",
    "scenario": "c21-42",
    "paragraphs": [
      "Im vierten Lernfall folgt nach langem Anstieg ein besonders großer Käuferbar. Er kann neue Stärke oder eine späte Überdehnung anzeigen.",
      "Gewinnmitnahmen und neue Shorts als Ursache sind plausible Deutungen, aber keine vollständigen OHLC-Fakten. Überprüfbar sind Pause, Rücknahme und nachfolgender Verkäuferanschluss.",
      "Die Beispiele zeigen den späten Körper und eine komplexere Gegenfolge. Ein Short nur aufgrund des Wortes Klimax bleibt unvollständig; Auslösung, Schutz und Menge brauchen einen eigenen Plan."
    ],
    "callout": "Sichtbare Folge vor vermuteten Motiven gewichten.",
    "takeaways": [
      "Ein großer Endbar verändert die Managementfrage.",
      "Gewinnmitnahmen und neue Shorts als Ursache sind plausible Deutungen, aber keine vollständigen OHLC-Fakten.",
      "Sichtbare Folge vor vermuteten Motiven gewichten."
    ],
    "prompt": "Was ist nach dem großen Endbar direkt überprüfbar?",
    "answers": [
      {
        "label": "Die genaue Position aller späten Käufer.",
        "explanation": "OHLC enthält diese Liste nicht."
      },
      {
        "label": "Eine garantierte sofortige Wende.",
        "explanation": "Weiterer Käuferanschluss bleibt möglich."
      },
      {
        "label": "Ob der Preis pausiert, zurückgenommen wird und Gegenanschluss gewinnt.",
        "explanation": "Richtig. Sichtbare Folge vor vermuteten Motiven gewichten."
      }
    ],
    "correct": 2
  },
  {
    "number": 43,
    "title": "Gap, Rücklauf und neuer Kanal",
    "summary": "Der Eröffnungssprung kann den schnellen Teil liefern.",
    "section": "Lernfall 5",
    "scenario": "c21-43",
    "paragraphs": [
      "Im fünften Lernfall verlagert ein Eröffnungsgap den Handel nach oben. Ein anschließender Rücklauf liefert den Startbereich eines langsameren Käuferkanals.",
      "Die Gaprichtung allein bestimmt den späteren Tag nicht. Notiere vorherigen Schluss, Eröffnung, Rücklauftief und tatsächlich folgende Swings.",
      "Unsere erfundenen Sitzungen enthalten den Preisabstand ausdrücklich. Es wird kein reales Instrument verglichen. Der neue Kanal entsteht erst nach sichtbarer Käuferfortsetzung."
    ],
    "callout": "Gap und Anschluss getrennt lesen.",
    "takeaways": [
      "Der Eröffnungssprung kann den schnellen Teil liefern.",
      "Die Gaprichtung allein bestimmt den späteren Tag nicht.",
      "Gap und Anschluss getrennt lesen."
    ],
    "prompt": "Welche Folge ergänzt die Käufer-Gaplesart?",
    "answers": [
      {
        "label": "Neue höhere Swings nach dem ersten Rücklauf.",
        "explanation": "Richtig. Gap und Anschluss getrennt lesen."
      },
      {
        "label": "Nur das Gap ohne jede Folge.",
        "explanation": "Es kann früh zurückgenommen werden."
      },
      {
        "label": "Die Behauptung identischer Instrumentkurse.",
        "explanation": "Unterschiedliche Reihen wären kein exakter Vergleich."
      }
    ],
    "correct": 0
  },
  {
    "number": 44,
    "title": "Abflachender Kanal nach dem Gap",
    "summary": "Kleinere Fortschritte zeigen Tempoverlust.",
    "section": "Lernfall 5",
    "scenario": "c21-44",
    "paragraphs": [
      "Der Käuferkanal im fünften Lernfall erreicht noch höhere Preise, gewinnt aber weniger neue Strecke. Die fortschreitende Abflachung zeigt zunehmenden Gegenhandel.",
      "Tempoverlust bedeutet noch nicht automatisch Bärenkontrolle. Vergleiche größere Tiefs und die tatsächliche neue Verkäuferfolge.",
      "Die Panels zeigen zunächst den Kanal und später den Gegenbruch. Die gegensätzliche Folge war am Gapstart nicht bekannt. Halte die Einordnung im Replay deshalb offen."
    ],
    "callout": "Abflachung ist ein Befund, kein fertiger Trade.",
    "takeaways": [
      "Kleinere Fortschritte zeigen Tempoverlust.",
      "Tempoverlust bedeutet noch nicht automatisch Bärenkontrolle.",
      "Abflachung ist ein Befund, kein fertiger Trade."
    ],
    "prompt": "Was fehlt für einen vollständigen Gegentrade bei Tempoverlust?",
    "answers": [
      {
        "label": "Eine bereits sichere Umkehr.",
        "explanation": "Diese kann gerade noch unbestätigt sein."
      },
      {
        "label": "Ein tatsächliches Signal mit Auslösung und Risikoplan.",
        "explanation": "Richtig. Abflachung ist ein Befund, kein fertiger Trade."
      },
      {
        "label": "Nur ein schöner Name.",
        "explanation": "Ein Name ersetzt die Ausführung nicht."
      }
    ],
    "correct": 1
  },
  {
    "number": 45,
    "title": "Kanalstarttest am Folgetag",
    "summary": "Spätere Sitzung mit alten Ankern vergleichen.",
    "section": "Lernfall 5",
    "scenario": "c21-45",
    "paragraphs": [
      "Im fünften Lernfall wird der erste Rücklaufbereich erst nach dem Kanalhoch in einer späteren Sitzung geprüft. Der Bezug stammt aus dem bereits bekannten alten Verlauf.",
      "Ein Starttest kann halten oder weiter durchfallen. Eine neue Sitzung löscht die alte Referenz nicht, liefert aber neuen Kontext und eigene Ausführungsbedingungen.",
      "Links steht der frühere Kanalstart, rechts der spätere Besuch. Keine Zukunftsbar wird in die erste Sitzung eingeblendet. Eine eventuelle neue Order wird anhand des dann sichtbaren Signals beurteilt."
    ],
    "callout": "Historischer Bezug ist kein heutiger Orderbefehl.",
    "takeaways": [
      "Spätere Sitzung mit alten Ankern vergleichen.",
      "Ein Starttest kann halten oder weiter durchfallen.",
      "Historischer Bezug ist kein heutiger Orderbefehl."
    ],
    "prompt": "Was gehört zum späteren Testplan?",
    "answers": [
      {
        "label": "Nur das gestrige Kursmuster.",
        "explanation": "Die heutige Folge kann es verändern."
      },
      {
        "label": "Eine garantierte Käuferreaktion.",
        "explanation": "Die Startzone kann durchbrochen werden."
      },
      {
        "label": "Alter bekannter Bezug plus aktuell sichtbare Reaktion.",
        "explanation": "Richtig. Historischer Bezug ist kein heutiger Orderbefehl."
      }
    ],
    "correct": 2
  },
  {
    "number": 46,
    "title": "Steiler Kanal als gröberer Impuls",
    "summary": "Derselbe Verlauf kann verschiedene Phasennamen tragen.",
    "section": "Lernfall 6",
    "scenario": "c21-46",
    "paragraphs": [
      "Im sechsten Lernfall enthält der kleine Chart mehrere eng gerichtete Käuferabschnitte. Verdichtet wirken diese gemeinsam wie ein starker großer Impuls.",
      "Ein Kanalstart auf kleiner Ebene und ein späterer großer Kanalstart sind verschiedene Bezüge. Eine kleine Rückgabe muss nicht die ganze größere Impulsstrecke testen.",
      "Unsere Dreieraggregation verwendet exakt dieselben Bars. Der Unterschied entsteht durch Verdichtung. Beschreibe den Maßstab vor der Benennung, statt eine zweite unabhängige Bestätigung zu behaupten."
    ],
    "callout": "Phasennamen gelten auf einer benannten Ebene.",
    "takeaways": [
      "Derselbe Verlauf kann verschiedene Phasennamen tragen.",
      "Ein Kanalstart auf kleiner Ebene und ein späterer großer Kanalstart sind verschiedene Bezüge.",
      "Phasennamen gelten auf einer benannten Ebene."
    ],
    "prompt": "Warum können beide Beschreibungen passen?",
    "answers": [
      {
        "label": "Weil dieselben Daten auf verschiedenen Größen verdichtet werden.",
        "explanation": "Richtig. Phasennamen gelten auf einer benannten Ebene."
      },
      {
        "label": "Weil zwei unabhängige Marktwege übereinstimmen.",
        "explanation": "Es ist derselbe Ausgangsweg."
      },
      {
        "label": "Weil die kleine Pause historisch entfernt wurde.",
        "explanation": "Sie bleibt im aggregierten High-Low-Bereich enthalten."
      }
    ],
    "correct": 0
  },
  {
    "number": 47,
    "title": "Kleiner Gegenspike in großer Käuferfolge",
    "summary": "Die große Struktur kann den Gegenabschnitt überstehen.",
    "section": "Lernfall 6",
    "scenario": "c21-47",
    "paragraphs": [
      "Im sechsten Lernfall unterbricht ein schneller Verkäuferabschnitt die Käuferfolge. Der größere Verlauf nimmt anschließend seine Richtung wieder auf.",
      "Ein lokaler Gegenspike ist relevant, aber nicht automatisch eine komplette große Umkehr. Prüfe das größere höhere Tief und neuen Anschluss.",
      "Markiere Gegenstrecke und spätere Käuferbars getrennt. Der Stop einer neuen Position darf nicht allein wegen der späteren Fortsetzung rückwirkend enger gerechnet werden."
    ],
    "callout": "Lokaler Impuls und größere Kontrolle getrennt prüfen.",
    "takeaways": [
      "Die große Struktur kann den Gegenabschnitt überstehen.",
      "Ein lokaler Gegenspike ist relevant, aber nicht automatisch eine komplette große Umkehr.",
      "Lokaler Impuls und größere Kontrolle getrennt prüfen."
    ],
    "prompt": "Was kann ein kleiner Verkäuferimpuls im starken Käuferkontext sein?",
    "answers": [
      {
        "label": "Ein Grund, den früheren Stop nachträglich zu verbessern.",
        "explanation": "Die damalige Ausführung muss erhalten bleiben."
      },
      {
        "label": "Ein begrenzter Rücklauf mit späterer Fortsetzung.",
        "explanation": "Richtig. Lokaler Impuls und größere Kontrolle getrennt prüfen."
      },
      {
        "label": "Zwingend der Beginn jeder größeren Bärenphase.",
        "explanation": "Die größere Struktur kann halten."
      }
    ],
    "correct": 1
  },
  {
    "number": 48,
    "title": "Großer Kanal und späterer Starttest",
    "summary": "Die Verdichtung legt einen anderen Testbezug offen.",
    "section": "Lernfall 6",
    "scenario": "c21-48",
    "paragraphs": [
      "Nach dem größeren Impuls entwickelt sich im sechsten Lernfall auf der größeren Ebene ein eigener Kanal. Dessen Start kann später zum Bezug einer Korrektur werden.",
      "Dieser Bezug ist nicht automatisch identisch mit jeder kleinen inneren Pause. Notiere die genaue größere Reaktion, bevor du den späteren Test beurteilst.",
      "Die Panels zeigen kleinen Preisweg und zugehörige Aggregation. Im Protokoll bleibt offen, ob und wann der größere Startbereich besucht wird. Ein Test braucht tatsächliche neue Preise."
    ],
    "callout": "Testziel gehört zur Ebene seines Ursprungs.",
    "takeaways": [
      "Die Verdichtung legt einen anderen Testbezug offen.",
      "Dieser Bezug ist nicht automatisch identisch mit jeder kleinen inneren Pause.",
      "Testziel gehört zur Ebene seines Ursprungs."
    ],
    "prompt": "Welchen Bezug prüfst du beim größeren Kanalstarttest?",
    "answers": [
      {
        "label": "Jede kleine Pause ohne Unterscheidung.",
        "explanation": "Das vermischt verschiedene Größen."
      },
      {
        "label": "Einen erst nach dem Ergebnis gewählten Tiefpunkt.",
        "explanation": "Damit wäre der Test nicht zeitgerecht."
      },
      {
        "label": "Den vorher benannten Start der größeren Kanalphase.",
        "explanation": "Richtig. Testziel gehört zur Ebene seines Ursprungs."
      }
    ],
    "correct": 2
  },
  {
    "number": 49,
    "title": "Ein Kanal kann deutlich später beginnen",
    "summary": "Lange Zwischenphase schließt die Lesart nicht aus.",
    "section": "Lernfall 7",
    "scenario": "c21-49",
    "paragraphs": [
      "Im siebten Lernfall folgt auf einen Verkäuferimpuls eine längere Gegenphase. Der spätere Verkäuferkanal beginnt erst nach deren Ende.",
      "Ein großer zeitlicher Abstand macht die Zuordnung unsicherer und verlangt klare Anker. Eine alternative Lesart mit neuem Verkäuferimpuls kann ebenfalls passen.",
      "Links endet das Replay in der Gegenphase. Rechts setzt später Verkäuferanschluss ein. Schreibe den früheren Ausgangsimpuls als Hypothese auf, statt ihn als einzige Wahrheit zu behaupten."
    ],
    "callout": "Alternative Startlesarten offen benennen.",
    "takeaways": [
      "Lange Zwischenphase schließt die Lesart nicht aus.",
      "Ein großer zeitlicher Abstand macht die Zuordnung unsicherer und verlangt klare Anker.",
      "Alternative Startlesarten offen benennen."
    ],
    "prompt": "Was macht die spätere Kanalzuordnung nachvollziehbar?",
    "answers": [
      {
        "label": "Klare alte Anker und die tatsächliche spätere Verkäuferfolge.",
        "explanation": "Richtig. Alternative Startlesarten offen benennen."
      },
      {
        "label": "Eine unsichtbare garantierte Verbindung.",
        "explanation": "Der Abstand erfordert eine prüfbare Begründung."
      },
      {
        "label": "Beliebiges Neuzählen nach jedem Ergebnis.",
        "explanation": "Das passt die Regel rückwirkend an."
      }
    ],
    "correct": 0
  },
  {
    "number": 50,
    "title": "Rücklauf über den Impulsursprung",
    "summary": "Eine Überschreitung kann später zurückgenommen werden.",
    "section": "Lernfall 7",
    "scenario": "c21-50",
    "paragraphs": [
      "Im siebten Lernfall steigt der Rücklauf über den Ursprung des frühen Verkäuferimpulses. Damit wird dessen frühere einseitige Lesart deutlich schwächer.",
      "Wenn anschließend neue Verkäuferkontrolle entsteht, ist eine größere Spike-Kanal-Deutung weiterhin möglich, aber keine während des Rücklaufs sichere Prognose.",
      "Vergleiche beide Testhöhen mit der ursprünglichen Referenz. Nenne die Überschreitung ehrlich und prüfe die spätere Reaktion. Die alte Zone darf nicht verschoben werden, um sie zu verbergen."
    ],
    "callout": "Eine Überschreitung ist echte neue Information.",
    "takeaways": [
      "Eine Überschreitung kann später zurückgenommen werden.",
      "Wenn anschließend neue Verkäuferkontrolle entsteht, ist eine größere Spike-Kanal-Deutung weiterhin möglich, aber keine während des Rücklaufs sichere Prognose..",
      "Eine Überschreitung ist echte neue Information."
    ],
    "prompt": "Wie behandelst du den Rücklauf über den Ursprung?",
    "answers": [
      {
        "label": "Als Garantie für jede nächste Aufwärtsstrecke.",
        "explanation": "Sie kann später zurückgenommen werden."
      },
      {
        "label": "Als Schwächung der alten Lesart mit offenem späterem Ergebnis.",
        "explanation": "Richtig. Eine Überschreitung ist echte neue Information."
      },
      {
        "label": "Als nie stattgefundenen Preis.",
        "explanation": "Die sichtbare Überschreitung darf nicht verborgen werden."
      }
    ],
    "correct": 1
  },
  {
    "number": 51,
    "title": "Kleiner Verkäuferimpuls im späteren Kanal",
    "summary": "Verschachtelte Phase ohne doppelte Beweiszählung.",
    "section": "Lernfall 7",
    "scenario": "c21-51",
    "paragraphs": [
      "Der spätere Verkäuferkanal im siebten Lernfall beginnt selbst mit einem neuen kleinen Impuls und einer Pause. Innerhalb der größeren Lesart liegt also eine kleinere Spike-Kanal-Folge.",
      "Diese verschachtelten Namen beschreiben teilweise dieselben Preise. Sie sind keine voneinander unabhängigen statistischen Beweise.",
      "Markiere zuerst den größeren Start und dann die inneren Anker. Prüfe beim nächsten Rücklauf, welcher Bezug tatsächlich besucht wird. Eine Order braucht nur den passenden konkreten Preisplan, keine maximale Namensliste."
    ],
    "callout": "Mehr Musterwörter bedeuten nicht mehr unabhängige Sicherheit.",
    "takeaways": [
      "Verschachtelte Phase ohne doppelte Beweiszählung.",
      "Diese verschachtelten Namen beschreiben teilweise dieselben Preise.",
      "Mehr Musterwörter bedeuten nicht mehr unabhängige Sicherheit."
    ],
    "prompt": "Wie bewertest du verschachtelte passende Muster?",
    "answers": [
      {
        "label": "Als automatisch multiplizierte Trefferquote.",
        "explanation": "Die Beobachtungen sind nicht unabhängig."
      },
      {
        "label": "Als Ersatz für eine Verlustgrenze.",
        "explanation": "Muster ersetzen keinen Risikoplan."
      },
      {
        "label": "Als Beschreibungen verschiedener Größen desselben Preiswegs.",
        "explanation": "Richtig. Mehr Musterwörter bedeuten nicht mehr unabhängige Sicherheit."
      }
    ],
    "correct": 2
  },
  {
    "number": 52,
    "title": "Aufeinanderfolgende Verkäuferklimaxe",
    "summary": "Der dritte Schub ist möglich, nicht vorgeschrieben.",
    "section": "Lernfall 8",
    "scenario": "c21-52",
    "paragraphs": [
      "Im achten Lernfall folgen auf schnelle Verkäuferstrecken kurze Pausen und weitere Verkäuferimpulse. Nach zwei Klimaxschüben bleibt eine dritte Strecke möglich.",
      "Ein Klimaxname datiert deshalb keinen sicheren Boden. Die spätere Käuferreaktion kann größer werden, muss aber tatsächlich entstehen und eigenen Anschluss gewinnen.",
      "Links stehen zwei Schübe, rechts kommt ein dritter mit nachfolgender Reaktion hinzu. Die alten Bars sind identisch. Wer früher long plante, konnte diesen Boden nicht schon sicher wissen."
    ],
    "callout": "Die letzte Spitze ist erst im Rückblick die letzte.",
    "takeaways": [
      "Der dritte Schub ist möglich, nicht vorgeschrieben.",
      "Ein Klimaxname datiert deshalb keinen sicheren Boden.",
      "Die letzte Spitze ist erst im Rückblick die letzte."
    ],
    "prompt": "Was bleibt nach zwei Verkäuferklimaxen offen?",
    "answers": [
      {
        "label": "Ob ein weiterer Verkäuferimpuls entsteht.",
        "explanation": "Richtig. Die letzte Spitze ist erst im Rückblick die letzte."
      },
      {
        "label": "Ein sicher fertiger Boden.",
        "explanation": "Ein dritter Schub ist möglich."
      },
      {
        "label": "Eine unbegrenzte Longposition.",
        "explanation": "Das Geldrisiko muss begrenzt bleiben."
      }
    ],
    "correct": 0
  },
  {
    "number": 53,
    "title": "Schrumpfende Hochfortschritte im Käuferkanal",
    "summary": "Mehrere Spitzen können weniger Momentum liefern.",
    "section": "Lernfall 8",
    "scenario": "c21-53",
    "paragraphs": [
      "Nach der Käuferumkehr im achten Lernfall entsteht ein Kanal mit drei höheren Spitzen. Die zusätzlichen Hochgewinne werden kleiner.",
      "Das ist ein Zeichen abnehmenden Momentums, noch kein alleiniger Beweis einer großen Umkehr. Vergleiche Rückgabe, Überlappung und späteren Gegenbruch.",
      "Die eigenen Beispielspitzen liegen bei 62, 71 und 76: Die Fortschritte betragen neun und fünf Einheiten. Notiere die Rechnung und prüfe anschließend die sichtbare Verkäuferfolge."
    ],
    "callout": "Kleinere Hochgewinne und Gegenanschluss getrennt lesen.",
    "takeaways": [
      "Mehrere Spitzen können weniger Momentum liefern.",
      "Das ist ein Zeichen abnehmenden Momentums, noch kein alleiniger Beweis einer großen Umkehr.",
      "Kleinere Hochgewinne und Gegenanschluss getrennt lesen."
    ],
    "prompt": "Was zeigen die Hochs 62, 71 und 76?",
    "answers": [
      {
        "label": "Zunehmend größere Hochgewinne.",
        "explanation": "Die zweite Zunahme ist kleiner."
      },
      {
        "label": "Abnehmende zusätzliche Gewinne von neun auf fünf Einheiten.",
        "explanation": "Richtig. Kleinere Hochgewinne und Gegenanschluss getrennt lesen."
      },
      {
        "label": "Schon eine sichere große Wende.",
        "explanation": "Die Gegenfolge muss hinzukommen."
      }
    ],
    "correct": 1
  },
  {
    "number": 54,
    "title": "Komplexe Korrektur und neuer Tiefentest",
    "summary": "Kleine Beine können nur das erste große Bein bilden.",
    "section": "Lernfall 8",
    "scenario": "c21-54",
    "paragraphs": [
      "Im achten Lernfall fällt die erste Gegenstrecke in einem engen Kanal. Trotz kleiner innerer Unterbrechungen kann sie nur das erste größere Korrekturbein sein.",
      "Eine spätere schwache Erholung und ein erneuter Tiefentest machen die größere Zweiteilung deutlicher. Der Tiefentest kann danach ein neues Käufersignal bilden.",
      "Markiere große und kleine Ebenen getrennt. Ein neuer tieferer Test nach einem inneren Linienbruch ist nicht automatisch widersprüchlich. Die Reaktion am Test entscheidet über den nächsten Plan."
    ],
    "callout": "Große Korrektur und innere Unterteilung auseinanderhalten.",
    "takeaways": [
      "Kleine Beine können nur das erste große Bein bilden.",
      "Eine spätere schwache Erholung und ein erneuter Tiefentest machen die größere Zweiteilung deutlicher.",
      "Große Korrektur und innere Unterteilung auseinanderhalten."
    ],
    "prompt": "Warum können kleine zwei Abwärtsbeine noch unvollständig sein?",
    "answers": [
      {
        "label": "Weil jede innere Zählung verboten ist.",
        "explanation": "Sie ist auf ihrer benannten Größe möglich."
      },
      {
        "label": "Weil der spätere Tiefentest schon vorher sicher bekannt war.",
        "explanation": "Das wäre Zukunftswissen."
      },
      {
        "label": "Weil sie innerhalb des ersten größeren Korrekturbeins liegen.",
        "explanation": "Richtig. Große Korrektur und innere Unterteilung auseinanderhalten."
      }
    ],
    "correct": 2
  },
  {
    "number": 55,
    "title": "Großes Gap und kleine Eröffnungsrange",
    "summary": "Eine enge Startbalance lässt die Richtung offen.",
    "section": "Lernfall 9",
    "scenario": "c21-55",
    "paragraphs": [
      "Im neunten Lernfall folgt auf einen großen Eröffnungssprung eine kleine Range. Ein Doppeltief und Käuferanschluss können zur Aufwärtsfortsetzung passen.",
      "Vergleiche die Rangebreite mit einem vorher bekannten Durchschnittsmaß. Im Beispiel sind es zwölf Einheiten bei einer Referenz von 50, also 24 Prozent. Diese Verhältniszahl ist eine Lernheuristik, keine garantierte Ausbruchsquote.",
      "Eine kleine Range nach einem Gap kann auch unten verlassen werden. Markiere beide Grenzen und prüfe den tatsächlichen Anschluss. Die neue Tagesrichtung steht nicht allein wegen des Gaps fest."
    ],
    "callout": "Enge Eröffnungsbalance bleibt in beide Richtungen offen.",
    "takeaways": [
      "Eine enge Startbalance lässt die Richtung offen.",
      "Vergleiche die Rangebreite mit einem vorher bekannten Durchschnittsmaß.",
      "Enge Eröffnungsbalance bleibt in beide Richtungen offen."
    ],
    "prompt": "Was bedeutet 12 geteilt durch 50?",
    "answers": [
      {
        "label": "Eine relative Rangebreite von 24 Prozent im Beispiel.",
        "explanation": "Richtig. Enge Eröffnungsbalance bleibt in beide Richtungen offen."
      },
      {
        "label": "Eine garantierte 24-Prozent-Trefferquote.",
        "explanation": "Die Rechnung misst Breite, keine Trefferquote."
      },
      {
        "label": "Eine sichere Käuferausbruchsrichtung.",
        "explanation": "Der Ausbruch kann auch nach unten erfolgen."
      }
    ],
    "correct": 0
  },
  {
    "number": 56,
    "title": "Käuferklimax trifft Verkäuferspike",
    "summary": "Konkurrierende schnelle Bewegungen prüfen.",
    "section": "Lernfall 9",
    "scenario": "c21-56",
    "paragraphs": [
      "Im neunten Lernfall folgt nach Käuferfortsetzung ein schneller Verkäuferabschnitt. Beide Seiten haben damit kurz nacheinander gerichtete Strecke gewonnen.",
      "Anschließende Überlappung kann eine Balance darstellen. Welcher Impuls später einen Kanal erhält, entscheidet die neue Folge, nicht die ursprüngliche Gaprichtung.",
      "Links stehen die konkurrierenden Impulse. Rechts gewinnt Verkäuferanschluss aus der Balance. Ein späterer Bärenkanal war unmittelbar nach dem Käuferklimax noch nicht sicher."
    ],
    "callout": "Das jüngste Anschlussverhalten neu gewichten.",
    "takeaways": [
      "Konkurrierende schnelle Bewegungen prüfen.",
      "Anschließende Überlappung kann eine Balance darstellen.",
      "Das jüngste Anschlussverhalten neu gewichten."
    ],
    "prompt": "Was entscheidet hier über den neuen Kanal?",
    "answers": [
      {
        "label": "Die genaue vermutete Absicht jedes Händlers.",
        "explanation": "Diese ist im OHLC-Chart nicht bekannt."
      },
      {
        "label": "Die nachfolgende gerichtete Kontrolle aus der Balance.",
        "explanation": "Richtig. Das jüngste Anschlussverhalten neu gewichten."
      },
      {
        "label": "Immer der Käuferimpuls vom Start.",
        "explanation": "Er kann zurückgenommen werden."
      }
    ],
    "correct": 1
  },
  {
    "number": 57,
    "title": "Letzte Käuferflagge mit kurzer Auslösung",
    "summary": "Ein echter Ausbruch kann sofort scheitern.",
    "section": "Lernfall 9",
    "scenario": "c21-57",
    "paragraphs": [
      "Im neunten Lernfall versucht eine kleine Käuferflagge die Aufwärtsrichtung noch einmal aufzunehmen. Ein kurzer Käuferbar bricht aus, gewinnt aber keinen anhaltenden Anschluss.",
      "Der folgende Verkäuferbar kann eine tatsächlich ausgelöste Longidee invalidieren. Das unterscheidet sich von einer nie ausgelösten Order. Stop und Menge müssen vor dem kurzen Ausbruch bekannt sein.",
      "Unsere Panels zeigen zuerst den Käufertrigger und dann seine Rücknahme. Behalte diesen Ablauf in der Auswertung, statt den Trade nachträglich als nie vorhanden zu behandeln."
    ],
    "callout": "Ausgelöst und ungetriggert sind verschiedene Zustände.",
    "takeaways": [
      "Ein echter Ausbruch kann sofort scheitern.",
      "Der folgende Verkäuferbar kann eine tatsächlich ausgelöste Longidee invalidieren.",
      "Ausgelöst und ungetriggert sind verschiedene Zustände."
    ],
    "prompt": "Wie bewertest du eine ausgelöste, danach zurückgenommene Longidee?",
    "answers": [
      {
        "label": "Als automatisch nie ausgeführt.",
        "explanation": "Eine echte Auslösung darf nicht gelöscht werden."
      },
      {
        "label": "Als sicheren Gewinner wegen des Flaggennamens.",
        "explanation": "Der Anschluss kann scheitern."
      },
      {
        "label": "Nach ihrem tatsächlichen Einstieg und vorab geplanten Verlustlimit.",
        "explanation": "Richtig. Ausgelöst und ungetriggert sind verschiedene Zustände."
      }
    ],
    "correct": 2
  },
  {
    "number": 58,
    "title": "Kanal mit spätem Käuferklimax",
    "summary": "Ein Trendbar am Ende kann eine andere Rolle haben.",
    "section": "Lernfall 10",
    "scenario": "c21-58",
    "paragraphs": [
      "Im zehnten Lernfall läuft zuerst ein Käuferkanal. Ein später großer Käuferkörper beschleunigt die Bewegung, bevor Gegenhandel einsetzt.",
      "Eine Buy-Vacuum-Deutung meint, dass der Preis schnell in eine nahe Zielzone läuft, weil entgegenstehende Aktivität vorübergehend gering ist. OHLC belegt diese Ursache nicht direkt.",
      "Beschreibe deshalb zuerst den großen Körper, die bekannte Zielzone und die nachfolgende Rücknahme. Ein berechnetes Ziel allein war noch keine sichere Shortauslösung."
    ],
    "callout": "Buy-Vacuum ist eine Deutung der sichtbaren Folge.",
    "takeaways": [
      "Ein Trendbar am Ende kann eine andere Rolle haben.",
      "Eine Buy-Vacuum-Deutung meint, dass der Preis schnell in eine nahe Zielzone läuft, weil entgegenstehende Aktivität vorübergehend gering ist.",
      "Buy-Vacuum ist eine Deutung der sichtbaren Folge."
    ],
    "prompt": "Welche Aussage ist direkt überprüfbar?",
    "answers": [
      {
        "label": "Der schnelle Zielbesuch und die anschließende Preisrücknahme.",
        "explanation": "Richtig. Buy-Vacuum ist eine Deutung der sichtbaren Folge."
      },
      {
        "label": "Die vollständige Abwesenheit aller Verkäufer.",
        "explanation": "OHLC zeigt keine vollständige Orderliste."
      },
      {
        "label": "Eine sichere Ursache durch bestimmte Institutionen.",
        "explanation": "Die Teilnehmermotive bleiben Interpretation."
      }
    ],
    "correct": 0
  },
  {
    "number": 59,
    "title": "Frühe Käufer-Signale in der Korrektur",
    "summary": "High 1 und High 2 können scheitern.",
    "section": "Lernfall 10",
    "scenario": "c21-59",
    "paragraphs": [
      "Nach dem späten Klimax im zehnten Lernfall entsteht eine größere Gegenstrecke. Frühe kleine Käuferversuche können innerhalb ihres ersten Beins bleiben und scheitern.",
      "Die Namen High 1 oder High 2 sichern keine Fortsetzung. Prüfe die neue Verkäuferkontrolle und die größere mögliche Zweiteilung der Korrektur.",
      "Links ist der erste Käuferversuch sichtbar. Rechts setzt später weitere Verkäuferfolge ein. Ein Stop einer bereits geplanten Shortposition wird nur nach neuer bestätigter Struktur angepasst, nicht allein wegen eines Gegenbars."
    ],
    "callout": "Zweite Versuchszahl ersetzt keine Kontextprüfung.",
    "takeaways": [
      "High 1 und High 2 können scheitern.",
      "Die Namen High 1 oder High 2 sichern keine Fortsetzung.",
      "Zweite Versuchszahl ersetzt keine Kontextprüfung."
    ],
    "prompt": "Warum kann auch High 2 scheitern?",
    "answers": [
      {
        "label": "Weil jeder Käuferbar den ganzen Gegenabschnitt beendet.",
        "explanation": "Er kann nur eine kleine Pause sein."
      },
      {
        "label": "Weil die größere Verkäuferkorrektur noch Anschluss entwickeln kann.",
        "explanation": "Richtig. Zweite Versuchszahl ersetzt keine Kontextprüfung."
      },
      {
        "label": "Weil High 2 immer sicher gewinnt.",
        "explanation": "Die Versuchszahl ist keine Garantie."
      }
    ],
    "correct": 1
  },
  {
    "number": 60,
    "title": "Neuer Verkäuferkanal und zweiter Ausbruch",
    "summary": "Der Kontext kann sich innerhalb des Tages mehrfach ändern.",
    "section": "Lernfall 10",
    "scenario": "c21-60",
    "paragraphs": [
      "Im zehnten Lernfall entwickelt sich aus der Gegenkorrektur ein Verkäufertrend mit eigenen Kanalabschnitten. Ein später Ausbruch unter den Kanal kann wiederum zurückgenommen werden.",
      "Die Folge lässt sich zugleich in größere obere und untere Handelsbereiche gliedern. Wähle die Beschreibung, die zum aktuellen Preisplan passt, und halte ihre Ebene fest.",
      "Nach einer Rückkehr in den unteren Bereich wird der vorherige Ausbruch anders bewertet. Die alten Käuferdaten bleiben erhalten, bestimmen aber nicht mehr automatisch jede spätere Order."
    ],
    "callout": "Aktuellen Anschluss statt alten Tagesnamen handeln.",
    "takeaways": [
      "Der Kontext kann sich innerhalb des Tages mehrfach ändern.",
      "Die Folge lässt sich zugleich in größere obere und untere Handelsbereiche gliedern.",
      "Aktuellen Anschluss statt alten Tagesnamen handeln."
    ],
    "prompt": "Was ist nach Rücknahme eines Verkäuferausbruchs nötig?",
    "answers": [
      {
        "label": "Für immer an der alten Käuferlesart festhalten.",
        "explanation": "Der Tag kann sich mehrfach verändern."
      },
      {
        "label": "Die Ausbruchsrücknahme verbergen.",
        "explanation": "Sie ist relevante neue Information."
      },
      {
        "label": "Den aktuellen Range- oder Trendkontext erneut prüfen.",
        "explanation": "Richtig. Aktuellen Anschluss statt alten Tagesnamen handeln."
      }
    ],
    "correct": 2
  }
];

export const chapterTwentyOneLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-21-${number}`;
  return {
    id: `price-action-trends.chapter-21.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 21 · ${d.section}`,
    sourceAnchors: [`Kapitel 21 · ${d.section}`, d.title, d.takeaways[0]],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 21 · Impuls und Kanal',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.title, scenario: d.scenario,
        caption: 'Eigenes schematisches Beispiel mit erfundenen relativen Preisen. Linien und Kerzen zeigen Lernlogik, keine realen Kurse oder Handelssignale.',
        observations: d.takeaways },
      { id: `${key}-question`, type: 'question', title: 'Phasen, Tests und Anschluss beurteilen',
        prompt: d.prompt, correctOptionId: `choice-${d.correct}`,
        options: d.answers.map((answer, index) => ({ id: `choice-${index}`, ...answer })) },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
});
