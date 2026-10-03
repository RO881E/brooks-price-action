import type { ChapterTwentyFourScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterTwentyFourScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Ein Umkehrtag hat zwei gerichtete Abschnitte",
    "summary": "Die frühe Tagesrichtung muss nicht bis zum Schluss bestehen.",
    "section": "Umkehrtage lesen",
    "scenario": "c24-01",
    "paragraphs": [
      "Ein Umkehrtag beginnt mit einer gerichteten Bewegung und entwickelt später einen Trend in die Gegenrichtung. Ein kurzer Rücksetzer allein genügt für diese Einordnung noch nicht.",
      "Links zeigt das Beispiel den frühen Käuferabschnitt. Rechts kommt eine Verkäuferfolge hinzu, die bis zum Ende des dargestellten Tages anhält. Die spätere Tagesform war am Morgen noch unbekannt.",
      "Such im laufenden Verlauf nach neuer Gegenwirkung statt nach einem nachträglich passenden Namen. Die spiegelbildliche Entwicklung beginnt bärisch und endet mit Käuferkontrolle."
    ],
    "callout": "Frühe Richtung und spätere Kontrolle getrennt prüfen.",
    "takeaways": [
      "Die frühe Tagesrichtung muss nicht bis zum Schluss bestehen.",
      "Links zeigt das Beispiel den frühen Käuferabschnitt.",
      "Frühe Richtung und spätere Kontrolle getrennt prüfen."
    ],
    "prompt": "Was kennzeichnet den dargestellten Umkehrtag?",
    "answers": [
      {
        "label": "Auf den frühen Käuferabschnitt folgt eine anhaltende Verkäuferstrecke.",
        "explanation": "Richtig. Frühe Richtung und spätere Kontrolle getrennt prüfen."
      },
      {
        "label": "Jeder einzelne rote Bar im Bulltrend.",
        "explanation": "Ein einzelner Gegenbar kann nur ein Rücksetzer sein."
      },
      {
        "label": "Das erste Hoch war bereits als Tageshoch bekannt.",
        "explanation": "Spätere Bars standen damals noch nicht zur Verfügung."
      }
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Versetzte Ranges können einer Umkehr vorausgehen",
    "summary": "Rangeübergänge und Umkehrtag beschreiben verschiedene Aspekte.",
    "section": "Umkehrtage lesen",
    "scenario": "c24-02",
    "paragraphs": [
      "Ein Tag kann zunächst durch versetzte Handelsbereiche laufen und später die Richtung wechseln. Die Bezeichnungen müssen sich deshalb nicht gegenseitig ausschließen.",
      "Die Panels zeigen eine obere Balance nach einem Anstieg und den späteren Ausbruch nach unten. Ein Bereichswechsel ist zuerst nur ein neues Ereignis; erst die weitere Folge zeigt seine Ausdauer.",
      "Halte bekannte Ränder als Testbezüge fest. Ein Rücklauf in den alten Bereich bleibt möglich und darf nicht wegen des Begriffs Umkehrtag ausgeblendet werden."
    ],
    "callout": "Tagesmuster als Beschreibung der Entwicklung verwenden.",
    "takeaways": [
      "Rangeübergänge und Umkehrtag beschreiben verschiedene Aspekte.",
      "Die Panels zeigen eine obere Balance nach einem Anstieg und den späteren Ausbruch nach unten.",
      "Tagesmuster als Beschreibung der Entwicklung verwenden."
    ],
    "prompt": "Warum können Range-Trendtag und Umkehrtag zusammenpassen?",
    "answers": [
      {
        "label": "Eine obere Balance garantiert die spätere Umkehr.",
        "explanation": "Sie kann auch nach oben verlassen werden."
      },
      {
        "label": "Der eine beschreibt Bereichswechsel, der andere den Richtungswechsel im Tagesverlauf.",
        "explanation": "Richtig. Tagesmuster als Beschreibung der Entwicklung verwenden."
      },
      {
        "label": "Jeder Tag darf nur einen Musternamen tragen.",
        "explanation": "Mehrere Merkmale können gleichzeitig vorliegen."
      }
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "Ein kräftiger Gegenspike verändert die Arbeitsannahme",
    "summary": "Gegenwirkung zeigt sich an Strecke und Anschluss.",
    "section": "Umkehrtage lesen",
    "scenario": "c24-03",
    "paragraphs": [
      "Große Gegenbars mit wenig Überlappung können mehr sein als Gewinnmitnahmen im alten Trend. Besonders wichtig ist, ob weitere Bars in der neuen Richtung Raum gewinnen.",
      "Das linke Panel zeigt den Beginn der Gegenbewegung, das rechte zusätzlichen Anschluss. Die neue Verkäuferkontrolle wird damit deutlicher, ohne dass der gesamte spätere Tag bereits feststeht.",
      "Die Begründung kommt aus der Preisreaktion. Ein Nachrichtenname allein erklärt weder die Auslösung einer Order noch die Dauer des neuen Trends."
    ],
    "callout": "Gegenspike und Anschluss zusammen beurteilen.",
    "takeaways": [
      "Gegenwirkung zeigt sich an Strecke und Anschluss.",
      "Das linke Panel zeigt den Beginn der Gegenbewegung, das rechte zusätzlichen Anschluss.",
      "Gegenspike und Anschluss zusammen beurteilen."
    ],
    "prompt": "Was stärkt hier die Annahme neuer Verkäuferkontrolle?",
    "answers": [
      {
        "label": "Allein die vermutete Nachricht.",
        "explanation": "Der Ereignisname bestätigt keine Preisfolge."
      },
      {
        "label": "Die sichere Fortsetzung bis zum nächsten Wochenende.",
        "explanation": "Der dargestellte Verlauf liefert dafür keine Gewissheit."
      },
      {
        "label": "Große Gegenstrecke und zusätzliche Verkäuferbars.",
        "explanation": "Richtig. Gegenspike und Anschluss zusammen beurteilen."
      }
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "Ein später Einstieg braucht eine begrenzte Größe",
    "summary": "Starker Anschluss ersetzt keinen Risikoplan.",
    "section": "Umkehrtage lesen",
    "scenario": "c24-04",
    "paragraphs": [
      "Läuft ein neuer Trend schnell, ist ein Einstieg nach einem kleinen Rücksetzer womöglich sinnvoller als das Warten auf eine große Korrektur. Er kann aber auch weit von einem tragfähigen Schutzbezug entfernt liegen.",
      "Die Diagramme zeigen denselben neuen Verkäufertrend mit einem früheren und einem späteren Entry-Bezug. Ein größerer Stopabstand bedeutet bei gleichem Verlustbudget eine kleinere Positionsgröße.",
      "Leg vor der Order fest, welcher Preis die Idee entkräftet und welches Ziel noch genug Raum bietet. Eine kleine geplante Position ist eine Entscheidung; blindes Hinterherlaufen ist kein eigener Auslöser."
    ],
    "callout": "Schutzabstand, Größe und Reststrecke zusammen planen.",
    "takeaways": [
      "Starker Anschluss ersetzt keinen Risikoplan.",
      "Die Diagramme zeigen denselben neuen Verkäufertrend mit einem früheren und einem späteren Entry-Bezug.",
      "Schutzabstand, Größe und Reststrecke zusammen planen."
    ],
    "prompt": "Was folgt aus größerem Stopabstand bei gleichem Verlustbudget?",
    "answers": [
      {
        "label": "Eine entsprechend kleinere geplante Position.",
        "explanation": "Richtig. Schutzabstand, Größe und Reststrecke zusammen planen."
      },
      {
        "label": "Automatisch eine größere Position.",
        "explanation": "Das würde das Verlustbudget erhöhen."
      },
      {
        "label": "Ein Verzicht auf einen Schutzpreis.",
        "explanation": "Auch ein starker neuer Trend kann scheitern."
      }
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "Ein wachsender Pullback kann zum Gegentrend werden",
    "summary": "Aus einer Korrektur kann eine neue Kanalstruktur entstehen.",
    "section": "Umkehrtage lesen",
    "scenario": "c24-05",
    "paragraphs": [
      "Nach einer frühen Verkäuferstrecke beginnt eine Käuferreaktion mit einem kräftigen Spike. Bleiben ihre Rückgaben klein, kann die vermeintliche Bearflag immer weiter wachsen.",
      "Links ist die erste Käuferreaktion noch eine offene Korrekturidee. Rechts bildet die Folge höhere Tiefs und steigt schließlich über den ursprünglichen Start des Abverkaufs.",
      "Größe und Dauer der Gegenbewegung verlangen eine Neubewertung. Ein ursprünglicher Zweibein-Plan darf nicht dazu führen, immer neue Shorts gegen einen inzwischen steigenden Kanal zu eröffnen."
    ],
    "callout": "Die Korrekturhypothese am tatsächlichen Verlauf prüfen.",
    "takeaways": [
      "Aus einer Korrektur kann eine neue Kanalstruktur entstehen.",
      "Links ist die erste Käuferreaktion noch eine offene Korrekturidee.",
      "Die Korrekturhypothese am tatsächlichen Verlauf prüfen."
    ],
    "prompt": "Was spricht für mehr als eine kleine Bearflag?",
    "answers": [
      {
        "label": "Die Pflicht zur Wiederaufnahme des Morgenstrends.",
        "explanation": "Es gibt keine solche Pflicht."
      },
      {
        "label": "Anhaltende höhere Tiefs und ein Käuferweg über den alten Abverkaufsstart.",
        "explanation": "Richtig. Die Korrekturhypothese am tatsächlichen Verlauf prüfen."
      },
      {
        "label": "Der erste grüne Bar allein.",
        "explanation": "Ein einzelner Bar bestätigt noch keinen dauerhaften Gegentrend."
      }
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "Der alte Plan darf neue Preiswirkung nicht überstimmen",
    "summary": "Ein Richtungswechsel braucht neue Entscheidungen.",
    "section": "Umkehrtage lesen",
    "scenario": "c24-06",
    "paragraphs": [
      "Ein früher Trend kann überzeugend aussehen und trotzdem enden. Wiederholt scheiternde Fortsetzungsversuche sind ein Anlass, die bisherige Annahme neu zu prüfen.",
      "Die Panels zeigen einen letzten Käuferanlauf und seine Rücknahme mit neuen tieferen Schlusskursen. Entscheidend ist diese Preiswirkung; eine Verlustserie deines eigenen Handels ist allein keine Marktdefinition.",
      "Ein bestehender Schutz und ein neuer Gegenplan bleiben getrennt. Die Positionsumkehr beurteilst du nach eigenem Trigger und eigener Größe, statt jeden Ausstieg automatisch in die Gegenposition zu verwandeln."
    ],
    "callout": "Neue Information vor der alten Erwartung gewichten.",
    "takeaways": [
      "Ein Richtungswechsel braucht neue Entscheidungen.",
      "Die Panels zeigen einen letzten Käuferanlauf und seine Rücknahme mit neuen tieferen Schlusskursen.",
      "Neue Information vor der alten Erwartung gewichten."
    ],
    "prompt": "Was trägt die Neubewertung am besten?",
    "answers": [
      {
        "label": "Nur die Anzahl eigener verlorener Trades.",
        "explanation": "Sie hängt auch von der eigenen Ausführung ab."
      },
      {
        "label": "Ein automatischer Richtungswechsel nach jedem Stop.",
        "explanation": "Der neue Plan braucht eine eigene Begründung."
      },
      {
        "label": "Sichtbar scheiternder Anschluss und neue tragfähige Gegenfolge.",
        "explanation": "Richtig. Neue Information vor der alten Erwartung gewichten."
      }
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Kanalmanagement nach bestätigten Swingpunkten",
    "summary": "Ein enger Stop kann eine intakte Trendidee früh beenden.",
    "section": "Umkehrtage lesen",
    "scenario": "c24-07",
    "paragraphs": [
      "Ein neuer Verkäuferkanal kann wiederholt an frühere Entry-Preise zurücklaufen. Ein sehr enger Stop kann dadurch getroffen werden, obwohl die größeren Rücklaufhochs bestehen bleiben.",
      "Das Beispiel trennt Entry-Bezug und strukturelles Swinghoch. Nach einem gehaltenen tieferen Hoch und einem neuen Tief kannst du den Schutzbezug anhand der bestätigten Struktur prüfen.",
      "Ein Swingplan und ein kurzer Gewinnplan haben unterschiedliche Anforderungen. Den ursprünglich akzeptierten Verlust darfst du nicht erst nach einem Rücklauf vergrößern, um den Trade doch noch zu halten."
    ],
    "callout": "Die Schutzführung aus dem vorher gewählten Plan ableiten.",
    "takeaways": [
      "Ein enger Stop kann eine intakte Trendidee früh beenden.",
      "Das Beispiel trennt Entry-Bezug und strukturelles Swinghoch.",
      "Schutzführung aus dem vorher gewählten Plan ableiten."
    ],
    "prompt": "Wann ist ein tieferes Rücklaufhoch als neuer Bezug bestätigt?",
    "answers": [
      {
        "label": "Wenn der Rücklauf endet und anschließend ein neues Tief entsteht.",
        "explanation": "Richtig. Schutzführung aus dem vorher gewählten Plan ableiten."
      },
      {
        "label": "Sobald der Trade kurz im Gewinn liegt.",
        "explanation": "Gewinn allein bestätigt keinen neuen Swingpunkt."
      },
      {
        "label": "Nach beliebigem Ausweiten des alten Stops.",
        "explanation": "Das verändert den akzeptierten Verlust nachträglich."
      }
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "Späte Umkehr kann am Folgetag Anschluss finden",
    "summary": "Die nächste Sitzung bleibt eine neue Prüfung.",
    "section": "Umkehrtage lesen",
    "scenario": "c24-08",
    "paragraphs": [
      "Eine kräftige Umkehr gegen Ende der Sitzung kann Kontext für den nächsten Tag liefern. Auch dann bleibt offen, ob der neue Handel tatsächlich Anschluss bietet.",
      "Links endet ein Verkäuferabschnitt, rechts beginnt ausdrücklich eine neue Sitzung mit Rücklauf und erneuter Verkäuferwirkung. Diese zweite Folge beurteilst du erst nach ihrer Entstehung.",
      "Eine aktuelle Mehrtages-Trefferquote wird nicht behauptet. Prüf neue Eröffnung, Gegenstrecke, Auslösung und Schutz; eine Tagesposition eröffnest du nicht allein wegen des gestrigen Etiketts."
    ],
    "callout": "Die Vortagesstärke ist Kontext, keine automatische neue Order.",
    "takeaways": [
      "Die nächste Sitzung bleibt eine neue Prüfung.",
      "Links endet ein Verkäuferabschnitt, rechts beginnt ausdrücklich eine neue Sitzung mit Rücklauf und erneuter Verkäuferwirkung.",
      "Vortagesstärke ist Kontext, keine automatische neue Order."
    ],
    "prompt": "Was wird am Folgetag benötigt?",
    "answers": [
      {
        "label": "Ein Einstieg ausschließlich wegen des Vortagsnamens.",
        "explanation": "Ein Mustername ersetzt keinen aktuellen Plan."
      },
      {
        "label": "Ein neuer sichtbarer Plan mit aktuellem Trigger und Risiko.",
        "explanation": "Richtig. Vortagesstärke ist Kontext, keine automatische neue Order."
      },
      {
        "label": "Eine sichere mehrtägige Fortsetzung.",
        "explanation": "Die spätere Entwicklung ist offen."
      }
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Lernfall 1: Oberer Docht und ungewöhnlicher Gegenspike",
    "summary": "Frühe Käuferinitiative und Verkäuferwirkung können zusammen auftreten.",
    "section": "Lernfall 1",
    "scenario": "c24-09",
    "paragraphs": [
      "Den höheren Start tragen zunächst die Käufer weiter. Ein langer oberer Docht am ersten Bar zeigt aber, dass höhere Preise nicht widerspruchslos angenommen werden.",
      "Später folgt ein großer Verkäuferbar zurück in den Eröffnungsbereich. Er ist stärker als eine gewöhnliche kleine Pause und verändert den Kontext für einen erneuten Käuferplan.",
      "Der erste Rücksetzer kann weiterhin ein Longsetup liefern. Wegen der ungewöhnlichen Gegenstrecke beurteilst du seine Ausdauer aber erst an der späteren Auslösung und Käuferfolge."
    ],
    "callout": "Gegenwirkung nicht wegen früher Käuferbars ausblenden.",
    "takeaways": [
      "Frühe Käuferinitiative und Verkäuferwirkung können zusammen auftreten.",
      "Später folgt ein großer Verkäuferbar zurück in den Eröffnungsbereich.",
      "Gegenwirkung nicht wegen früher Käuferbars ausblenden."
    ],
    "prompt": "Was macht den Rücklauf hier besonders relevant?",
    "answers": [
      {
        "label": "Jeder obere Docht erzwingt einen Short.",
        "explanation": "Ein Docht allein bestätigt keine Umkehr."
      },
      {
        "label": "Die frühen Käuferbars schließen spätere Verkäufe aus.",
        "explanation": "Neue Bars können den Kontext verändern."
      },
      {
        "label": "Seine große Verkäuferstrecke nach dem frühen Anstieg.",
        "explanation": "Richtig. Gegenwirkung nicht wegen früher Käuferbars ausblenden."
      }
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Lernfall 1: Eröffnungstest und kompaktes Longsetup",
    "summary": "Ein gültiger Longversuch garantiert keinen starken Trendtag.",
    "section": "Lernfall 1",
    "scenario": "c24-10",
    "paragraphs": [
      "Ein Rücklauf testet im Beispiel das frühe Tief. Danach entsteht eine kompakte Folge mit zwei Inside-Bars; ihren oberen Ausbruch prüfst du als eigenen Käuferplan.",
      "Die Öffnungsrange reicht von dreißig bis vierundvierzig. Ihre Höhe vierzehn beträgt bei der angenommenen Referenzbreite vierzig genau fünfunddreißig Prozent.",
      "Die Rechnung beschreibt nur Breite. Eine schon größere Eröffnungsrange und der vorherige Gegenspike geben Anlass, auch begrenzten Anschluss und spätere Rangeentwicklung einzuplanen."
    ],
    "callout": "Auslösung und Erwartung an die Fortsetzung getrennt halten.",
    "takeaways": [
      "Ein gültiger Longversuch garantiert keinen starken Trendtag.",
      "Die Öffnungsrange reicht von dreißig bis vierundvierzig.",
      "Auslösung und Erwartung an die Fortsetzung getrennt halten."
    ],
    "prompt": "Was bedeutet 14 / 40 in diesem Beispiel?",
    "answers": [
      {
        "label": "Die Eröffnungsrange hat fünfunddreißig Prozent der Referenzhöhe.",
        "explanation": "Richtig. Auslösung und Erwartung an die Fortsetzung getrennt halten."
      },
      {
        "label": "Die Käuferchance beträgt fünfunddreißig Prozent.",
        "explanation": "Breitenverhältnis und Trefferquote sind verschiedene Größen."
      },
      {
        "label": "Der Inside-Ausbruch garantiert einen ganzen Bulltrendtag.",
        "explanation": "Die weitere Folge muss erst geprüft werden."
      }
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Lernfall 1: Höheres Hoch nach bereits sichtbarem Verkaufsdruck",
    "summary": "Ein neues Hoch kann auch der Rücklauf eines Gegenspikes sein.",
    "section": "Lernfall 1",
    "scenario": "c24-11",
    "paragraphs": [
      "Nach der ersten kräftigen Verkäuferbewegung steigt der Kurs erneut und erreicht ein höheres Hoch. Große Käuferbars am Ende dieses Anstiegs wirken stark, schließen eine anschließende Erschöpfung aber nicht aus.",
      "Rechts werden der Hochversuch zurückgenommen und tiefere Schlusskurse sichtbar. Der neue Gegenplan hat damit anderen Kontext als ein Short allein gegen den ersten Morgenanstieg.",
      "Ein Low-2-Ansatz braucht zwei erkennbare Verkäuferversuche mit einem dazwischenliegenden Rücklauf. Hier steht zunächst die veränderte Gegenwirkung im Vordergrund; die Auslösung darfst du nicht aus dem späteren Tief erfinden."
    ],
    "callout": "Vorherige Gegenstärke und neue Rücknahme gemeinsam lesen.",
    "takeaways": [
      "Ein neues Hoch kann auch der Rücklauf eines Gegenspikes sein.",
      "Rechts werden der Hochversuch zurückgenommen und tiefere Schlusskurse sichtbar.",
      "Vorherige Gegenstärke und neue Rücknahme gemeinsam lesen."
    ],
    "prompt": "Warum ist der spätere Gegenplan anders zu beurteilen?",
    "answers": [
      {
        "label": "Jeder große Käuferbar ist allein ein Shortsignal.",
        "explanation": "Stärke allein genügt dafür nicht."
      },
      {
        "label": "Vor dem höheren Hoch gab es bereits deutliche Verkäuferwirkung.",
        "explanation": "Richtig. Vorherige Gegenstärke und neue Rücknahme gemeinsam lesen."
      },
      {
        "label": "Das neue Hoch garantiert eine sofortige Wende.",
        "explanation": "Ein höheres Hoch kann auch Anschluss bekommen."
      }
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Lernfall 1: Linienbruch, tieferes Hoch und SMA 20",
    "summary": "Mehrere Merkmale können denselben Kontrollwechsel zeigen.",
    "section": "Lernfall 1",
    "scenario": "c24-12",
    "paragraphs": [
      "Die nächste Gegenbewegung bricht die Käufertrendlinie. Der spätere Rücklauf bleibt unter dem letzten Hoch und endet wieder in Verkäuferbars.",
      "Das rechte Panel ergänzt einen tatsächlich aus Schlusskursen berechneten SMA 20. Die späteren Bars schließen unter ihm, während Hochs und Tiefs weiter sinken.",
      "Ein Durchschnitt ist eine zusätzliche Beschreibung, keine eigenständige Garantie. Für einen neuen Shortplan bleiben Rücklaufstruktur, Auslösung und Schutzpreis maßgeblich."
    ],
    "callout": "Swingstruktur und Durchschnitt zusammen prüfen.",
    "takeaways": [
      "Mehrere Merkmale können denselben Kontrollwechsel zeigen.",
      "Das rechte Panel ergänzt einen tatsächlich aus Schlusskursen berechneten SMA 20.",
      "Swingstruktur und Durchschnitt zusammen prüfen."
    ],
    "prompt": "Was trägt die Verkäuferannahme hier?",
    "answers": [
      {
        "label": "Der SMA sagt jedes spätere Tief voraus.",
        "explanation": "Er wird aus bereits entstandenen Schlusskursen berechnet."
      },
      {
        "label": "Ein einzelner Linienbruch genügt für jeden Short.",
        "explanation": "Weitere Preiswirkung bleibt zu prüfen."
      },
      {
        "label": "Tieferes Hoch, neue Tiefs und Schlusskurse unter dem berechneten SMA.",
        "explanation": "Richtig. Swingstruktur und Durchschnitt zusammen prüfen."
      }
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Lernfall 1: Ausbruch, offener Zwischenraum und Projektion",
    "summary": "Eine Preisprojektion braucht ausdrücklich benannte Anker.",
    "section": "Lernfall 1",
    "scenario": "c24-13",
    "paragraphs": [
      "Eine obere Balance wird nach unten verlassen. Der erste Rücklauf erreicht ihre Untergrenze im Beispiel nicht mehr; zwischen dem alten Rand und dem Rücklaufhoch bleibt ein Zwischenraum.",
      "Die obere Grenze dieses Zwischenraums liegt bei sechzig, die untere bei fünfzig. Der Mittelpunkt fünfundfünfzig liegt im Beispiel auch genau zwischen dem Hoch achtzig und dem späteren Tief dreißig.",
      "Die rechnerische Symmetrie erklärt den dargestellten Zielbezug. Sie garantiert weder den Zielbesuch noch einen echten Sitzungsgap; hier handelt es sich um getrennte Preisbereiche innerhalb derselben Sitzung."
    ],
    "callout": "Zwischenraum, Mittelpunkt und Zielbesuch getrennt nachweisen.",
    "takeaways": [
      "Eine Preisprojektion braucht ausdrücklich benannte Anker.",
      "Die obere Grenze dieses Zwischenraums liegt bei sechzig, die untere bei fünfzig.",
      "Zwischenraum, Mittelpunkt und Zielbesuch getrennt nachweisen."
    ],
    "prompt": "Wie wird der Mittelpunkt zwischen 60 und 50 berechnet?",
    "answers": [
      {
        "label": "(60 + 50) / 2 = 55.",
        "explanation": "Richtig. Zwischenraum, Mittelpunkt und Zielbesuch getrennt nachweisen."
      },
      {
        "label": "60 minus 50 ergibt den Mittelpunkt.",
        "explanation": "Das ergibt die Breite zehn."
      },
      {
        "label": "Der Mittelpunkt garantiert das nächste Tief.",
        "explanation": "Eine Projektion kann verfehlt werden."
      }
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Lernfall 1: Rücklauf gegen einen zu engen Shortstop",
    "summary": "Ein neuer Bearkanal kann seine Entry-Preise erneut besuchen.",
    "section": "Lernfall 1",
    "scenario": "c24-14",
    "paragraphs": [
      "Nach dem Verkäuferausbruch gibt es kleine Aufwärtsbewegungen. Ein enger Stop nahe dem Entry kann dabei getroffen werden, obwohl das bekannte größere Rücklaufhoch nicht erreicht wird.",
      "Links wird der enge Bezug tatsächlich überschritten. Rechts folgt später ein neues Tief, wodurch du ein tieferes Swinghoch als neuen strukturellen Bezug prüfen kannst.",
      "Wer den engen Plan gewählt hatte, zählt seine tatsächliche Ausführung. Das spätere Tief macht den früheren Ausstieg nicht ungeschehen und rechtfertigt kein nachträgliches Umdeuten des Stops."
    ],
    "callout": "Ausführung und späteres Trendbild getrennt bilanzieren.",
    "takeaways": [
      "Ein neuer Bearkanal kann seine Entry-Preise erneut besuchen.",
      "Links wird der enge Bezug tatsächlich überschritten.",
      "Ausführung und späteres Trendbild getrennt bilanzieren."
    ],
    "prompt": "Was gilt für einen bereits ausgelösten engen Stop?",
    "answers": [
      {
        "label": "Jeder Stop muss nach einem Rücklauf weiter werden.",
        "explanation": "Das würde den ursprünglichen Risikoplan verändern."
      },
      {
        "label": "Seine Ausführung bleibt auch nach einem späteren neuen Tief bestehen.",
        "explanation": "Richtig. Ausführung und späteres Trendbild getrennt bilanzieren."
      },
      {
        "label": "Das spätere Tief löscht den Ausstieg.",
        "explanation": "Ausführungen werden nicht rückwirkend geändert."
      }
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "Lernfall 1: Tagesdoji mit langem oberen Docht",
    "summary": "Ein kleiner Tageskörper kann große innere Trends verbergen.",
    "section": "Lernfall 1",
    "scenario": "c24-15",
    "paragraphs": [
      "Der dargestellte Tagesweg beginnt mit einem Anstieg, verliert später Höhe und schließt nahe seinem Open. Die Tageshülle hat dadurch einen kleinen Körper und einen langen oberen Docht.",
      "Das rechte Panel ist exakt aus denselben Intraday-Bars aggregiert: erstes Open, höchstes Hoch, tiefstes Tief und letzter Schluss. Die Reihenfolge der Swings ist im Tagesbar nicht mehr sichtbar.",
      "Ein möglicher bärischer Tagesplan braucht zusätzlich die Lage im größeren Chart und eine spätere Auslösung. Die Tagesform allein sagt nicht, dass jeder Intraday-Long falsch war."
    ],
    "callout": "Verdichtung und Handelsentscheidung auf Tagesbasis unterscheiden.",
    "takeaways": [
      "Ein kleiner Tageskörper kann große innere Trends verbergen.",
      "Das rechte Panel ist exakt aus denselben Intraday-Bars aggregiert: erstes Open, höchstes Hoch, tiefstes Tief und letzter Schluss.",
      "Verdichtung und Handelsentscheidung auf Tagesbasis unterscheiden."
    ],
    "prompt": "Was geht bei der Tagesaggregation verloren?",
    "answers": [
      {
        "label": "Der höchste Preis des Tages.",
        "explanation": "Er bleibt als Hoch erhalten."
      },
      {
        "label": "Der Schlusskurs der letzten Kerze.",
        "explanation": "Er bleibt der Schluss der Tageshülle."
      },
      {
        "label": "Die zeitliche Reihenfolge der inneren Bewegungen.",
        "explanation": "Richtig. Verdichtung und Handelsentscheidung auf Tagesbasis unterscheiden."
      }
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Lernfall 2: Starker Verkäuferstart und mehrere Klimaxbars",
    "summary": "Große Gegenbars können zugleich Impuls und Erschöpfung sein.",
    "section": "Lernfall 2",
    "scenario": "c24-16",
    "paragraphs": [
      "Die Sitzung beginnt höher, fällt aber mit starken Verkäuferbars. Mehrere große Abwärtsbars können den frühen Beartrend prägen und zugleich die Erwartung einer Pause erhöhen.",
      "Rechts folgt ein deutlicher Rücklauf. Er widerlegt noch nicht jede Verkäuferidee, zeigt aber, dass der Preis nach der schnellen Abwärtsbewegung mehr Gegenhandel zulässt.",
      "Ein weiterer kräftiger Verkauf nach der Pause kann neue Tiefs bilden. Weder die Anzahl großer Bars noch der Begriff Klimax garantiert den genauen Zeitpunkt der späteren Umkehr."
    ],
    "callout": "Impulswirkung und mögliche Erschöpfung gemeinsam prüfen.",
    "takeaways": [
      "Große Gegenbars können zugleich Impuls und Erschöpfung sein.",
      "Rechts folgt ein deutlicher Rücklauf.",
      "Impulswirkung und mögliche Erschöpfung gemeinsam prüfen."
    ],
    "prompt": "Was verlangt eine Pause nach mehreren großen Verkäufen?",
    "answers": [
      {
        "label": "Eine neue Prüfung der Rücklaufstärke und des folgenden Anschlusses.",
        "explanation": "Richtig. Impulswirkung und mögliche Erschöpfung gemeinsam prüfen."
      },
      {
        "label": "Eine garantierte endgültige Bodenbildung.",
        "explanation": "Die Verkäufer können erneut Anschluss gewinnen."
      },
      {
        "label": "Die Gewissheit, dass Klimaxbars nie fortsetzen.",
        "explanation": "Auch ein überdehnter Impuls kann weiterlaufen."
      }
    ],
    "correct": 0
  },
  {
    "number": 17,
    "title": "Lernfall 2: Doppeltest als Bearflag und neue Tiefs",
    "summary": "Ein Rücklauf kann einen bekannten Kanalstart testen.",
    "section": "Lernfall 2",
    "scenario": "c24-17",
    "paragraphs": [
      "Nach dem frühen Verkauf steigt der Preis an einen früheren oberen Bezug zurück. Zwei Hochversuche in diesem Bereich bilden im Beispiel eine Bearflag.",
      "Das rechte Panel zeigt den späteren Ausbruch nach unten. Ein möglicher Zielbezug misst die Höhe von sechzig bis vierzig und trägt zwanzig Einheiten ab vierzig nach unten bis zwanzig ab.",
      "Die Referenzen bleiben ausdrücklich festgelegt. Der Zielbesuch ist ein späteres Ereignis und darf nicht schon beim Doppeltest als ausgeführter Gewinn verbucht werden."
    ],
    "callout": "Testbereich, Auslösung und Projektion zeitlich trennen.",
    "takeaways": [
      "Ein Rücklauf kann einen bekannten Kanalstart testen.",
      "Das rechte Panel zeigt den späteren Ausbruch nach unten.",
      "Testbereich, Auslösung und Projektion zeitlich trennen."
    ],
    "prompt": "Welche Rechnung ergibt das gezeigte Ziel 20?",
    "answers": [
      {
        "label": "Ein Doppeltest garantiert jeden gewünschten Zielpreis.",
        "explanation": "Eine Projektion kann vorzeitig scheitern."
      },
      {
        "label": "40 − (60 − 40) = 20.",
        "explanation": "Richtig. Testbereich, Auslösung und Projektion zeitlich trennen."
      },
      {
        "label": "60 minus 40 ergibt direkt den Zielpreis.",
        "explanation": "Das ist zunächst nur die gemessene Strecke zwanzig."
      }
    ],
    "correct": 1
  },
  {
    "number": 18,
    "title": "Lernfall 2: Gescheiterte Wedge-Bullflag",
    "summary": "Ein vermeintliches Fortsetzungsmuster kann nach unten ausbrechen.",
    "section": "Lernfall 2",
    "scenario": "c24-18",
    "paragraphs": [
      "Drei Rücklaufanläufe bilden eine mögliche Bullflag. Der Markt setzt aber nicht nach oben fort, sondern bricht unter die Untergrenze der Formation.",
      "Im Beispiel liegen die festen Projektionsanker bei sechzig und fünfzig. Zehn Einheiten ab fünfzig nach unten ergeben vierzig; die spätere Verkäuferfolge unterschreitet diesen Bezug.",
      "Der Zielüberlauf bestätigt die tatsächlich entstandene Gegenstärke. Ein zusätzliches Abwärtsbein bleibt eine Möglichkeit, aber kein verpflichtender nächster Schritt nach jeder gescheiterten Wedge."
    ],
    "callout": "Die Musterform an Ausbruch und Anschluss messen.",
    "takeaways": [
      "Ein vermeintliches Fortsetzungsmuster kann nach unten ausbrechen.",
      "Im Beispiel liegen die festen Projektionsanker bei sechzig und fünfzig.",
      "Musterform an Ausbruch und Anschluss messen."
    ],
    "prompt": "Was hat Vorrang vor dem Namen Bullflag?",
    "answers": [
      {
        "label": "Der Mustername erzwingt einen Long.",
        "explanation": "Die sichtbare Folge widerspricht diesem Plan."
      },
      {
        "label": "Ein Zielüberlauf garantiert beliebig viele neue Tiefs.",
        "explanation": "Auch eine starke Folge kann pausieren oder drehen."
      },
      {
        "label": "Der tatsächlich entstandene Ausbruch nach unten.",
        "explanation": "Richtig. Musterform an Ausbruch und Anschluss messen."
      }
    ],
    "correct": 2
  },
  {
    "number": 19,
    "title": "Lernfall 2: Drei Tiefanläufe und die Größe der Erholung",
    "summary": "Die Wirkung einer Wedge wird erst nach dem letzten Anlauf sichtbar.",
    "section": "Lernfall 2",
    "scenario": "c24-19",
    "paragraphs": [
      "Der Verkäuferkanal erreicht im Beispiel drei nacheinander tiefere Preisbereiche. Nach dem dritten Tief bildet sich eine Käuferreaktion.",
      "Eine kurze erste Erholung kann im Verhältnis zur langen vorherigen Bewegung klein bleiben. Ein formal gezählter Zweibeiner genügt dann noch nicht, um einen tragfähigen Kontrollwechsel festzustellen.",
      "Bewerte Rückgaben, weitere Anläufe und gewonnene Höhe. Einen starren Mindestanteil der Barzahl setzen wir nicht als Naturgesetz; die zeitliche Ausdehnung ist ein zusätzlicher Kontextbezug."
    ],
    "callout": "Form, Dauer und Strecke der Erholung gemeinsam lesen.",
    "takeaways": [
      "Die Wirkung einer Wedge wird erst nach dem letzten Anlauf sichtbar.",
      "Eine kurze erste Erholung kann im Verhältnis zur langen vorherigen Bewegung klein bleiben.",
      "Form, Dauer und Strecke der Erholung gemeinsam lesen."
    ],
    "prompt": "Warum kann eine kurze zweibeinige Erholung noch unzureichend sein?",
    "answers": [
      {
        "label": "Sie kann wenig Preiswirkung gegen eine deutlich längere Verkäuferphase entfalten.",
        "explanation": "Richtig. Form, Dauer und Strecke der Erholung gemeinsam lesen."
      },
      {
        "label": "Zwei Beine garantieren immer den neuen Bulltrend.",
        "explanation": "Die Wirkung muss zusätzlich geprüft werden."
      },
      {
        "label": "Jeder dritte Tiefanlauf erzwingt den Tagesboden.",
        "explanation": "Eine Wedge kann scheitern."
      }
    ],
    "correct": 0
  },
  {
    "number": 20,
    "title": "Lernfall 2: Höheres Tief und gescheiterter Verkäuferausbruch",
    "summary": "Ein späterer Käuferplan hat einen anderen Kontext als der erste Bodenversuch.",
    "section": "Lernfall 2",
    "scenario": "c24-20",
    "paragraphs": [
      "Nach dem Tief steigt der Preis und bildet beim nächsten Rücklauf ein höheres Tief. Ein erneuter Verkäuferanlauf unterschreitet den nahen Bezug nicht nachhaltig.",
      "Das rechte Panel zeigt die neue Käuferauslösung über dem abgeschlossenen Signalhoch. Ein erster Bodenversuch und dieser spätere Versuch sind getrennte Pläne mit unterschiedlichen Schutzpunkten.",
      "Ein Failed-Low-2-Plan braucht zwei sichtbare Verkäuferversuche und deren Scheitern. Das Beispiel markiert die Versuche getrennt; erst die spätere Käuferstrecke bestätigt den Triggerbesuch."
    ],
    "callout": "Versuche zählen und die neue Käuferauslösung abwarten.",
    "takeaways": [
      "Ein späterer Käuferplan hat einen anderen Kontext als der erste Bodenversuch.",
      "Das rechte Panel zeigt die neue Käuferauslösung über dem abgeschlossenen Signalhoch.",
      "Versuche zählen und die neue Käuferauslösung abwarten."
    ],
    "prompt": "Was verbessert hier den Kontext des späteren Käuferplans?",
    "answers": [
      {
        "label": "Ein Rücklaufhoch genügt ohne Trigger für eine Füllung.",
        "explanation": "Die Order wird erst später preislich erreicht."
      },
      {
        "label": "Höheres Tief und ein gescheiterter erneuter Verkäuferanlauf.",
        "explanation": "Richtig. Versuche zählen und die neue Käuferauslösung abwarten."
      },
      {
        "label": "Eine Pflicht, jeden ersten Tiefpunkt zu kaufen.",
        "explanation": "Der erste Versuch kann weiter fallen."
      }
    ],
    "correct": 1
  },
  {
    "number": 21,
    "title": "Lernfall 2: Kein deutlicher Rücksetzer nach dem Käuferbein",
    "summary": "Eine schwache Gegenreaktion kann Käuferkontrolle zeigen.",
    "section": "Lernfall 2",
    "scenario": "c24-21",
    "paragraphs": [
      "Die Käufererholung enthält viele kleine Rückgaben, aber kein ausgeprägtes neues Verkäuferbein. Der erwartete tiefe Rücklauf zur Bearflag bleibt aus.",
      "Die längere Folge rechts zeigt höhere Tiefs und weiter steigende Preise. Das Fehlen eines klaren Rücksetzers macht die Zweibein-Zählung weniger eindeutig, kann aber zugleich wenig Verkäuferwirkung anzeigen.",
      "Daraus folgt kein Kauf ohne begrenztes Risiko. Pass die alte Verkäuferannahme an die tatsächliche Struktur an und prüf neue Käuferpausen als eigene Setups."
    ],
    "callout": "Ausbleibende Gegenwirkung als Information verwenden.",
    "takeaways": [
      "Eine schwache Gegenreaktion kann Käuferkontrolle zeigen.",
      "Die längere Folge rechts zeigt höhere Tiefs und weiter steigende Preise.",
      "Ausbleibende Gegenwirkung als Information verwenden."
    ],
    "prompt": "Was zeigt das fehlende größere Verkäuferbein?",
    "answers": [
      {
        "label": "Dass ein großer Rücklauf zwingend sofort kommen muss.",
        "explanation": "Der Käuferkanal kann weiterlaufen."
      },
      {
        "label": "Dass jede kleine Pause sicher profitabel gekauft werden kann.",
        "explanation": "Auch passende Setups können scheitern."
      },
      {
        "label": "Bisher wenig nachhaltigen Verkäuferanschluss gegen die Erholung.",
        "explanation": "Richtig. Ausbleibende Gegenwirkung als Information verwenden."
      }
    ],
    "correct": 2
  },
  {
    "number": 22,
    "title": "Lernfall 2: Später Käuferspike in den oberen Bereich",
    "summary": "Ein kräftiger neuer Ausbruch kann die Umkehr deutlicher machen.",
    "section": "Lernfall 2",
    "scenario": "c24-22",
    "paragraphs": [
      "Nach dem steigenden Kanal beschleunigt der Markt in mehreren Käuferbars. Der Ausbruch erreicht den früheren oberen Preisbereich und hält im Beispiel bis zum Schluss.",
      "Die Panels trennen den Kanal vor der Beschleunigung und die spätere Strecke. Ein mögliches Ziel aus einem früheren Käuferbein bleibt eine getrennte Rechnung, deren Anker vor dem Besuch feststehen müssen.",
      "Den Tag kannst du zugleich als Umkehrtag, als Rangeübergang und als Spike-and-Channel-Verlauf beschreiben. Der gewählte Name ersetzt keine tatsächliche Orderausführung."
    ],
    "callout": "Neuen Anschluss vor das passende Tagesetikett stellen.",
    "takeaways": [
      "Ein kräftiger neuer Ausbruch kann die Umkehr deutlicher machen.",
      "Die Panels trennen den Kanal vor der Beschleunigung und die spätere Strecke.",
      "Neuen Anschluss vor das passende Tagesetikett stellen."
    ],
    "prompt": "Was bestätigt die spätere stärkere Käuferwirkung?",
    "answers": [
      {
        "label": "Der reale Ausbruch mit weiteren Käuferbars in den oberen Bereich.",
        "explanation": "Richtig. Neuen Anschluss vor das passende Tagesetikett stellen."
      },
      {
        "label": "Allein der Name Umkehrtag.",
        "explanation": "Der Name beschreibt erst die Entwicklung."
      },
      {
        "label": "Jedes zuvor gedachte Ziel gilt automatisch als erreicht.",
        "explanation": "Der Preisbesuch muss einzeln nachgewiesen werden."
      }
    ],
    "correct": 0
  },
  {
    "number": 23,
    "title": "Lernfall 3: Gleiche Preise, unterschiedliche Bargrenzen",
    "summary": "Kleinere Zeitfenster können zusätzliche Pausen sichtbar machen.",
    "section": "Lernfall 3",
    "scenario": "c24-23",
    "paragraphs": [
      "Die beiden Panels zeigen denselben fünfzehnminütigen Preisweg, links als 3-Minuten-, rechts als 5-Minuten-Bars. Die Kerzen werden aus denselben erfundenen Minutenbars zusammengefasst.",
      "Zwei kleine Gegenbars liegen links innerhalb der jeweils vorherigen Spanne. Rechts verschmelzen sie mit angrenzender Aufwärtsbewegung und bilden keine entsprechenden Inside-Bars.",
      "Mehr Signalformen bedeuten mehr Entscheidungspunkte, nicht automatisch bessere Ergebnisse. Ein Wechsel des Zeitfensters braucht einen klaren Plan und darf eine bereits verfehlte Auslösung nicht rückwirkend erzeugen."
    ],
    "callout": "Zeitaggregation verändert Signalformen, nicht die zugrunde liegenden Preise.",
    "takeaways": [
      "Kleinere Zeitfenster können zusätzliche Pausen sichtbar machen.",
      "Zwei kleine Gegenbars liegen links innerhalb der jeweils vorherigen Spanne.",
      "Zeitaggregation verändert Signalformen, nicht die zugrunde liegenden Preise."
    ],
    "prompt": "Warum erscheinen die zwei Inside-Bars nicht genauso im 5-Minuten-Chart?",
    "answers": [
      {
        "label": "Mehr Bars garantieren einen größeren Gewinn.",
        "explanation": "Die Zahl der Signalformen ist keine Erfolgsgarantie."
      },
      {
        "label": "Die Zeitgrenzen bündeln die gleichen Minutenbars anders.",
        "explanation": "Richtig. Zeitaggregation verändert Signalformen, nicht die zugrunde liegenden Preise."
      },
      {
        "label": "Die beiden Panels verwenden verschiedene Märkte.",
        "explanation": "Beide entstehen aus exakt derselben Preisfolge."
      }
    ],
    "correct": 1
  },
  {
    "number": 24,
    "title": "Lernfall 3: Gegenfarbe bei gemeinsamem Käufertrigger",
    "summary": "Ein Signal kann auf beiden Zeitfenstern erkennbar bleiben.",
    "section": "Lernfall 3",
    "scenario": "c24-24",
    "paragraphs": [
      "Der längere Vergleich zeigt auf beiden Zeitfenstern einen späteren Gegenbar innerhalb der Käuferbewegung. Sein Schluss liegt jeweils unter dem Open, dennoch prüfst du einen Käuferplan über seinem Hoch.",
      "In beiden Panels liegt das Signalhoch bei einundsechzig Komma vier. Der geplante Trigger zweiundsechzig wird erst nach Abschluss beider Signalbars im nächsten Aufwärtsabschnitt erreicht.",
      "Die Signalbars schließen wegen der verschiedenen Zeitgrenzen nicht gleichzeitig. Ein realer Plan muss zum ausgewählten Zeitfenster passen; die gemeinsame Preisreferenz macht die beiden Entscheidungszeitpunkte nicht identisch."
    ],
    "callout": "Signalform, Barabschluss und späteren Triggerbesuch trennen.",
    "takeaways": [
      "Ein Signal kann auf beiden Zeitfenstern erkennbar bleiben.",
      "In beiden Panels liegt das Signalhoch bei einundsechzig Komma vier.",
      "Signalform, Barabschluss und späteren Triggerbesuch trennen."
    ],
    "prompt": "Wann wird der gemeinsame Trigger 62 erreicht?",
    "answers": [
      {
        "label": "Beim roten Schluss der Signalbars.",
        "explanation": "Die Schlusskurse liegen unter dem Trigger."
      },
      {
        "label": "Durch das bloße Wechseln auf drei Minuten.",
        "explanation": "Eine andere Darstellung ist keine Ausführung."
      },
      {
        "label": "Erst in der späteren Käuferstrecke nach beiden Signalabschlüssen.",
        "explanation": "Richtig. Signalform, Barabschluss und späteren Triggerbesuch trennen."
      }
    ],
    "correct": 2
  }
];

export const chapterTwentyFourLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-24-${number}`;
  return {
    id: `price-action-trends.chapter-24.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 24 · ${d.section}`,
    sourceAnchors: [`Kapitel 24 · ${d.section}`, d.title, d.takeaways[0]],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 24 · Umkehrtage',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.title, scenario: d.scenario,
        caption: 'Eigenes schematisches Beispiel mit erfundenen relativen Preisen. Linien und Kerzen zeigen Lernlogik, keine realen Kurse oder Handelssignale.',
        observations: d.takeaways },
      { id: `${key}-question`, type: 'question', title: 'Gegenwirkung, Kontrollwechsel und Auslösung beurteilen',
        prompt: d.prompt, correctOptionId: `choice-${d.correct}`,
        options: d.answers.map((answer, index) => ({ id: `choice-${index}`, ...answer })) },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
});
