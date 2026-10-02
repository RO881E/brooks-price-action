import type { ChapterTwentyThreeScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterTwentyThreeScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Ein Trend ab Handelsbeginn bleibt zunächst eine Annahme",
    "summary": "Frühe Extreme sind erst später als Tagesextreme bestätigt.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-01",
    "paragraphs": [
      "Ein früher Ausbruch kann den Beginn eines gerichteten Tages markieren. Während der ersten Bars ist aber unbekannt, ob das erste Tief tatsächlich bis zum Schluss hält.",
      "Im linken Panel stehen nur die ersten Bars zur Verfügung. Rechts kommt eine längere Käuferfolge hinzu. Das spätere Tagesbild darf nicht rückwirkend zur Begründung des ersten Einstiegs werden.",
      "Arbeite mit einer vorläufigen Trendhypothese, einem Auslöser und einem Preis, der sie entkräftet. Ein neuer Gegenimpuls verlangt eine neue Beurteilung."
    ],
    "callout": "Frühe Richtung prüfen, statt das Tagesende vorwegzunehmen.",
    "takeaways": [
      "Frühe Extreme sind erst später als Tagesextreme bestätigt.",
      "Im linken Panel stehen nur die ersten Bars zur Verfügung.",
      "Frühe Richtung prüfen, statt das Tagesende vorwegzunehmen."
    ],
    "prompt": "Was ist nach den ersten Käuferbars bekannt?",
    "answers": [
      {
        "label": "Eine frühe Käuferfolge, deren Fortsetzung offen bleibt.",
        "explanation": "Richtig. Frühe Richtung prüfen, statt das Tagesende vorwegzunehmen."
      },
      {
        "label": "Das endgültige Tagestief.",
        "explanation": "Spätere Bars können es unterschreiten."
      },
      {
        "label": "Der garantierte Schluss am Hoch.",
        "explanation": "Dafür fehlen die weiteren Daten."
      }
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Kleine Anfangsrange und größere Balance unterscheiden",
    "summary": "Anfangsbreite gehört in einen passenden Tagesbezug.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-02",
    "paragraphs": [
      "Eine kleine Eröffnungsbalance kann von einem ausdauernden Trend abgelöst werden. Bei einer schon großen Anfangsrange gewinnen längere Balancen und versetzte Bereiche als Alternative an Gewicht.",
      "Im Beispiel misst die erste Range acht Einheiten, die ausdrücklich angenommene durchschnittliche Tagesrange vierzig. Acht geteilt durch vierzig ergibt zwanzig Prozent; die Rechnung beschreibt Größe und keine Trefferquote.",
      "Die Referenz braucht definierte Sitzungen und einen Beobachtungszeitraum. Eine feste Prozentgrenze entscheidet den Tagestyp nicht allein; Anschluss und Rückgaben bleiben sichtbar zu prüfen."
    ],
    "callout": "Zwanzig Prozent Breite sind keine zwanzig Prozent Wahrscheinlichkeit.",
    "takeaways": [
      "Anfangsbreite gehört in einen passenden Tagesbezug.",
      "Im Beispiel misst die erste Range acht Einheiten, die ausdrücklich angenommene durchschnittliche Tagesrange vierzig.",
      "Zwanzig Prozent Breite sind keine zwanzig Prozent Wahrscheinlichkeit."
    ],
    "prompt": "Was bedeutet 8 / 40 in diesem Beispiel?",
    "answers": [
      {
        "label": "Das Kursziel liegt zwingend vierzig Einheiten entfernt.",
        "explanation": "Eine Durchschnittsrange ist kein Pflichtziel."
      },
      {
        "label": "Die Anfangsrange beträgt zwanzig Prozent der Referenzbreite.",
        "explanation": "Richtig. Zwanzig Prozent Breite sind keine zwanzig Prozent Wahrscheinlichkeit."
      },
      {
        "label": "Die Trendchance beträgt zwanzig Prozent.",
        "explanation": "Breite und Wahrscheinlichkeit sind verschiedene Größen."
      }
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "Ein Gap gibt keine feste Tagesrichtung vor",
    "summary": "Gaprichtung und Anschlussrichtung getrennt lesen.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-03",
    "paragraphs": [
      "Ein höherer Eröffnungspreis kann weiter steigen oder kräftige Verkäufe anziehen. Auch ein Gap nach unten legt die Richtung der anschließenden Sitzung nicht fest.",
      "Beide Panels beginnen oberhalb des bekannten Vortagsschlusses. Danach entwickeln sie unterschiedliche Folgen. Die Kerzen nach der Eröffnung zeigen, welche Seite tatsächlich Raum gewinnt.",
      "Alte Häufigkeitsangaben ersetzen keine aktuelle Auswertung mit definierten Märkten und Sitzungen. Nutze das Gap als Kontext und beobachte die neuen Bars."
    ],
    "callout": "Das Gap ist eine Ausgangslage, kein Richtungsauftrag.",
    "takeaways": [
      "Gaprichtung und Anschlussrichtung getrennt lesen.",
      "Beide Panels beginnen oberhalb des bekannten Vortagsschlusses.",
      "Das Gap ist eine Ausgangslage, kein Richtungsauftrag."
    ],
    "prompt": "Was entscheidet zwischen den zwei Gap-up-Beispielen?",
    "answers": [
      {
        "label": "Allein der höhere Eröffnungspreis.",
        "explanation": "Er erzwingt keine Aufwärtsfolge."
      },
      {
        "label": "Eine immer gültige historische Prozentzahl.",
        "explanation": "Hier wird keine aktuelle Häufigkeit gemessen."
      },
      {
        "label": "Der tatsächlich entstehende Käufer- oder Verkäuferanschluss.",
        "explanation": "Richtig. Das Gap ist eine Ausgangslage, kein Richtungsauftrag."
      }
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "Der erste Rücksetzer nach einem starken Impuls",
    "summary": "Ein erster Test bietet einen neuen Entscheidungspunkt.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-04",
    "paragraphs": [
      "Mehrere gerichtete Bars mit wenig Rückgabe können eine deutliche erste Bewegung bilden. Wer den Anfang verpasst, kann den ersten Rücksetzer als eigenes Setup prüfen.",
      "Ein bearisher Signalbar im Käufertrend schließt einen Longplan nicht aus. Entscheidend sind seine Lage, die geringe Rückgabe und eine spätere Auslösung über seinem Hoch.",
      "Der günstige Kontext entbindet nicht von Schutz und Positionsgröße. Bleibt der Ausbruch aus oder wird die Impulsbasis gebrochen, gilt die erwartete zweite Strecke nicht als bestätigt."
    ],
    "callout": "Kontext, Auslösung und Schutz gehören zusammen.",
    "takeaways": [
      "Ein erster Test bietet einen neuen Entscheidungspunkt.",
      "Ein bearisher Signalbar im Käufertrend schließt einen Longplan nicht aus.",
      "Kontext, Auslösung und Schutz gehören zusammen."
    ],
    "prompt": "Was bestätigt den geplanten Stop-Einstieg über dem Signalhoch?",
    "answers": [
      {
        "label": "Ein späterer Handel am vorgesehenen Triggerpreis.",
        "explanation": "Richtig. Kontext, Auslösung und Schutz gehören zusammen."
      },
      {
        "label": "Die rote Farbe verhindert jeden Longplan.",
        "explanation": "Die Farbe allein entscheidet den Kontext nicht."
      },
      {
        "label": "Das spätere Hoch füllt die Order rückwirkend.",
        "explanation": "Ausführungen gehören zu ihrem tatsächlichen Zeitpunkt."
      }
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "Seitwärtspausen sind auch Korrekturen",
    "summary": "Eine Pause muss nicht weit gegen den Trend laufen.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-05",
    "paragraphs": [
      "Ein Trend kann sich durch mehrere kleine Bars erholen, während kaum Preis zurückgegeben wird. Diese Zeitkorrektur unterscheidet sich von einem deutlich tieferen Rücklauf.",
      "Die Panels zeigen erst eine enge Pause und anschließend den möglichen Ausbruch. Ein Inside-Muster macht den Markt kompakter, bestätigt aber allein keine Richtung.",
      "Ordne die Pause innerhalb des noch laufenden ersten Impulsabschnitts ein. Nicht jede kleine Unterbrechung ist bereits der erste bedeutende Rücksetzer nach einer abgeschlossenen Trendstrecke."
    ],
    "callout": "Zeit kann korrigieren, ohne viel Preis zurückzugeben.",
    "takeaways": [
      "Eine Pause muss nicht weit gegen den Trend laufen.",
      "Die Panels zeigen erst eine enge Pause und anschließend den möglichen Ausbruch.",
      "Zeit kann korrigieren, ohne viel Preis zurückzugeben."
    ],
    "prompt": "Wie wird eine enge Pause im Käuferimpuls eingeordnet?",
    "answers": [
      {
        "label": "Als sicher abgeschlossene zweite Trendstrecke.",
        "explanation": "Die kleine Pause legt die Phasenzählung nicht eindeutig fest."
      },
      {
        "label": "Als mögliche Zeitkorrektur mit noch offener Ausbruchsrichtung.",
        "explanation": "Richtig. Zeit kann korrigieren, ohne viel Preis zurückzugeben."
      },
      {
        "label": "Als zwingende große Trendwende.",
        "explanation": "Dafür fehlt eine größere Gegenfolge."
      }
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "Drei mögliche Folgen eines frühen Spikes",
    "summary": "Nach einem Impuls bleiben mehrere Wege offen.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-06",
    "paragraphs": [
      "Ein früher Spike kann in einen Kanal übergehen. Ein besonders ausgedehnter Impuls kann stattdessen erschöpfen und nach einer letzten kleinen Flag deutlich drehen.",
      "Eine längere seitliche Balance mit späterer Wiederaufnahme ist eine weitere Möglichkeit. Die Diagramme vergleichen Kanalanschluss und größere Gegenreaktion; die Balance bleibt als dritte Arbeitsalternative im Text.",
      "Bewerte Rückgaben, Fortsetzungsversuche und neue Gegenbars. Ein Etikett am Beginn darf die weitere Entwicklung nicht ausblenden."
    ],
    "callout": "Kanal, Balance und Umkehr als Alternativen führen.",
    "takeaways": [
      "Nach einem Impuls bleiben mehrere Wege offen.",
      "Eine längere seitliche Balance mit späterer Wiederaufnahme ist eine weitere Möglichkeit.",
      "Kanal, Balance und Umkehr als Alternativen führen."
    ],
    "prompt": "Was folgt sicher aus einem frühen Spike?",
    "answers": [
      {
        "label": "Der ganze Tag bleibt ein enger Kanal.",
        "explanation": "Eine Balance oder Umkehr kann folgen."
      },
      {
        "label": "Jede erste Flag ist ein sicherer Umkehrpunkt.",
        "explanation": "Eine Flag kann auch Fortsetzung vorbereiten."
      },
      {
        "label": "Es müssen Anschluss, Pause und mögliche Gegenreaktion neu bewertet werden.",
        "explanation": "Richtig. Kanal, Balance und Umkehr als Alternativen führen."
      }
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Kleine Rückgaben seit dem Trendstart messen",
    "summary": "Verglichen werden Rücksetzer derselben Trendphase.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-07",
    "paragraphs": [
      "Für einen Trend mit kleinen Rücksetzern zählt die Größe der Gegenbewegungen nach seinem Beginn. Eine größere Korrektur vorher gehört zu einem anderen Abschnitt.",
      "Im Diagramm ist die frühe größere Bewegung ausdrücklich vor dem Trendstart eingeordnet. Danach bleiben die Rückgaben klein und wiederholen sich bei höheren Preisbereichen.",
      "Notiere jeweils lokales Hoch und nachfolgendes Tief. Verwende dieselbe Einheit und eine erkennbare Messgrenze; bloß die Körpergröße roter Kerzen ist keine Rücksetzergröße."
    ],
    "callout": "Messung ab Trendstart, mit Hoch und Tief.",
    "takeaways": [
      "Verglichen werden Rücksetzer derselben Trendphase.",
      "Im Diagramm ist die frühe größere Bewegung ausdrücklich vor dem Trendstart eingeordnet.",
      "Messung ab Trendstart, mit Hoch und Tief."
    ],
    "prompt": "Welche Bewegung gehört in den Vergleich der Trendrückgaben?",
    "answers": [
      {
        "label": "Die Gegenbewegungen seit dem markierten Beginn des Trends.",
        "explanation": "Richtig. Messung ab Trendstart, mit Hoch und Tief."
      },
      {
        "label": "Jede Bewegung des Vortags.",
        "explanation": "Sie gehört nicht automatisch zur gleichen Trendphase."
      },
      {
        "label": "Nur die Körper roter Kerzen.",
        "explanation": "Dochte und mehrere Bars können Teil der Rückgabe sein."
      }
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "Viele Gegenbars können trotzdem wenig bewirken",
    "summary": "Gegenfarbe und Gegenstrecke sind nicht dasselbe.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-08",
    "paragraphs": [
      "Ein kleiner Rücksetzer kann zwei oder drei deutliche Gegenbars enthalten. Dadurch sieht ein stabiler Käufertrend schwächer aus, als seine geringe Preisrückgabe nahelegt.",
      "Links wirken einzelne rote Kerzen auffällig. Rechts zeigt der gemeinsame Preisweg höhere Tiefs und neue Hochs. Die Wirkung der Verkäufer wird an ihrem gewonnenen Raum beurteilt.",
      "Ein schwaches Signal wird dadurch nicht automatisch gut. Ein Trendplan braucht eine nachvollziehbare Auslösung und darf bei wachsender Gegenstrecke angepasst werden."
    ],
    "callout": "Die zurückgewonnene Strecke zählt neben der Barfarbe.",
    "takeaways": [
      "Gegenfarbe und Gegenstrecke sind nicht dasselbe.",
      "Links wirken einzelne rote Kerzen auffällig.",
      "Die zurückgewonnene Strecke zählt neben der Barfarbe."
    ],
    "prompt": "Was spricht hier für anhaltende Käuferkontrolle?",
    "answers": [
      {
        "label": "Jede rote Kerze ist eine bestätigte Umkehr.",
        "explanation": "Dafür fehlt die nachhaltige Gegenfolge."
      },
      {
        "label": "Kleine Gegenstrecken und anschließende neue Hochs.",
        "explanation": "Richtig. Die zurückgewonnene Strecke zählt neben der Barfarbe."
      },
      {
        "label": "Die vollständige Abwesenheit roter Bars.",
        "explanation": "Auch starke Trends enthalten Gegenbars."
      }
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Enger Kanal kann langsam und trotzdem stark sein",
    "summary": "Trendstärke ist nicht die Größe des Tagesgewinns.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-09",
    "paragraphs": [
      "Viele kleine Bars mit Überlappung können den Preis langsam vom Open entfernen. Wenn Rückläufe begrenzt bleiben, ist der Gegenhandel trotzdem wenig erfolgreich.",
      "Das rechte Panel gewinnt nur schrittweise Höhe. Die Fortsetzung wirkt weniger spektakulär als der erste Impuls, enthält aber wiederholt höhere Tiefs.",
      "Eine solche Struktur garantiert weder einen großen Gewinn noch einen großen Tagesbereich. Ziel, Restzeit und Kosten müssen zum tatsächlich verfügbaren Raum passen."
    ],
    "callout": "Langsamer Fortschritt kann mit schwacher Gegenwirkung zusammenfallen.",
    "takeaways": [
      "Trendstärke ist nicht die Größe des Tagesgewinns.",
      "Das rechte Panel gewinnt nur schrittweise Höhe.",
      "Langsamer Fortschritt kann mit schwacher Gegenwirkung zusammenfallen."
    ],
    "prompt": "Welche Größen müssen getrennt bleiben?",
    "answers": [
      {
        "label": "Barzahl und garantierter Gewinn.",
        "explanation": "Viele Bars erzeugen keinen garantierten Ertrag."
      },
      {
        "label": "Überlappung und zwingende Trendumkehr.",
        "explanation": "Überlappung allein bestätigt keine Wende."
      },
      {
        "label": "Strukturstärke und tatsächlich gewonnene Preisstrecke.",
        "explanation": "Richtig. Langsamer Fortschritt kann mit schwacher Gegenwirkung zusammenfallen."
      }
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Stop und Limit bieten unterschiedliche Einstiege",
    "summary": "Trigger und Preisangebot getrennt planen.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-10",
    "paragraphs": [
      "Ein Buy-Stop über einem abgeschlossenen Pullback-Bar wartet auf Aufwärtsbewegung. Eine Buy-Limit unter dem aktuellen Kurs versucht dagegen einen Rücklauf zu kaufen.",
      "Die Panels zeigen diese zwei Pläne mit getrennten Preisreferenzen. Ein Limit kann ungefüllt bleiben; ein Stop kann nach seiner Auslösung schlechter als der Triggerpreis ausgeführt werden.",
      "Lege Schutz und Größe vor der Order fest. Werden Teilpositionen aufgebaut, begrenzt ein gemeinsames Verlustbudget alle Teile; Nachlegen ist kein unbegrenztes Verdoppeln. Ein beobachteter Preisbesuch zeigt im Lernbeispiel nur, dass die Preisschwelle erreicht wurde, nicht die Qualität einer realen Ausführung."
    ],
    "callout": "Orderart, Auslösung und Risiko getrennt halten.",
    "takeaways": [
      "Trigger und Preisangebot getrennt planen.",
      "Die Panels zeigen diese zwei Pläne mit getrennten Preisreferenzen.",
      "Orderart, Auslösung und Risiko getrennt halten."
    ],
    "prompt": "Was unterscheidet die zwei Longpläne?",
    "answers": [
      {
        "label": "Der Stop wartet auf Stärke, das Limit bietet einen Rücklaufpreis.",
        "explanation": "Richtig. Orderart, Auslösung und Risiko getrennt halten."
      },
      {
        "label": "Beide müssen am gleichen Preis füllen.",
        "explanation": "Ihre Bedingungen sind verschieden."
      },
      {
        "label": "Ein Limit braucht keinen Schutz.",
        "explanation": "Auch eine Rücklauforder trägt Verlustrisiko."
      }
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Einstand ist keine neue Chartstruktur",
    "summary": "Schutz nach Struktur statt nach Erleichterung versetzen.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-11",
    "paragraphs": [
      "Ein enger Käuferkanal kann nach einem Einstieg nochmals dessen Preis besuchen. Ein sofortiger Einstandsschutz beendet dann möglicherweise eine noch intakte Trendidee.",
      "Links wird der Entry erneut unterschritten, während das bekannte Swingtief hält. Rechts folgt ein neues Hoch; erst jetzt kann das höhere Swingtief als neuer Schutzbezug geprüft werden.",
      "Ein weiter entfernter Schutz verlangt eine entsprechend kleinere Position. Die mögliche Fortsetzung rechtfertigt kein nachträgliches Ausweiten des ursprünglich akzeptierten Verlusts."
    ],
    "callout": "Schutz nach Plan und bestätigter Struktur führen.",
    "takeaways": [
      "Schutz nach Struktur statt nach Erleichterung versetzen.",
      "Links wird der Entry erneut unterschritten, während das bekannte Swingtief hält.",
      "Schutz nach Plan und bestätigter Struktur führen."
    ],
    "prompt": "Wann wird der höhere Swingbezug belastbarer?",
    "answers": [
      {
        "label": "Nach beliebigem Vergrößern des Stopabstands.",
        "explanation": "Das würde den ursprünglichen Risikoplan verändern."
      },
      {
        "label": "Wenn der Rücksetzer hält und anschließend ein neues Hoch entsteht.",
        "explanation": "Richtig. Schutz nach Plan und bestätigter Struktur führen."
      },
      {
        "label": "Sobald die Position kurz im Gewinn liegt.",
        "explanation": "Gewinn allein bildet kein neues Swingtief."
      }
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Der erste Trendlinienbruch ist kein Richtungswechsel",
    "summary": "Ein Bruch kann zunächst nur eine größere Korrektur zeigen.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-12",
    "paragraphs": [
      "Eine erste deutlichere Gegenbewegung kann eine steile Trendlinie brechen. Damit ist die bisherige Beschleunigung beeinträchtigt, aber ein vollständiger Gegentrend noch nicht bestätigt.",
      "Die Diagramme zeigen einen bearishen Trend, einen ersten stärkeren Rücklauf und einen erneuten Tiefversuch. Eine zweite Trendstrecke bleibt neben einer möglichen Balance als Alternative offen.",
      "Prüfe die weitere Verkäuferreaktion und das Rücklaufhoch. Ein Linienbruch allein ist weder automatische Kauforder noch Zusage eines neuen Tiefs."
    ],
    "callout": "Linienbruch und bestätigten Kontrollwechsel unterscheiden.",
    "takeaways": [
      "Ein Bruch kann zunächst nur eine größere Korrektur zeigen.",
      "Die Diagramme zeigen einen bearishen Trend, einen ersten stärkeren Rücklauf und einen erneuten Tiefversuch.",
      "Linienbruch und bestätigten Kontrollwechsel unterscheiden."
    ],
    "prompt": "Was belegt der erste Bruch einer steilen Beartrendlinie?",
    "answers": [
      {
        "label": "Einen garantierten Bulltrend.",
        "explanation": "Dazu braucht es mehr Käuferanschluss."
      },
      {
        "label": "Eine sichere zweite Abwärtsstrecke.",
        "explanation": "Auch die Fortsetzung kann scheitern."
      },
      {
        "label": "Eine größere Gegenreaktion, deren weiterer Ausgang offen bleibt.",
        "explanation": "Richtig. Linienbruch und bestätigten Kontrollwechsel unterscheiden."
      }
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Ein späterer Rücksetzer darf größer werden",
    "summary": "Veränderte Rückgabe neu bewerten.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-13",
    "paragraphs": [
      "Nach vielen kleinen Korrekturen kann eine spätere Gegenbewegung deutlich mehr Raum gewinnen. Das verändert die kurzfristige Lage auch dann, wenn die größere Trendrichtung noch besteht.",
      "Im Beispiel beträgt eine frühere Rückgabe vier, die spätere acht Einheiten. Acht geteilt durch vier ergibt das Doppelte, ohne daraus eine feste Zeitregel abzuleiten.",
      "Ein größerer Rücksetzer kann eine neue Fortsetzung vorbereiten oder in eine Balance übergehen. Ein bestimmter Stundenbereich oder ein Verhältnis allein bestätigt keinen Einstieg."
    ],
    "callout": "Größere Rückgabe messen und neuen Anschluss abwarten.",
    "takeaways": [
      "Veränderte Rückgabe neu bewerten.",
      "Im Beispiel beträgt eine frühere Rückgabe vier, die spätere acht Einheiten.",
      "Größere Rückgabe messen und neuen Anschluss abwarten."
    ],
    "prompt": "Was sagt das Verhältnis 8 / 4 aus?",
    "answers": [
      {
        "label": "Der spätere Beispielrücksetzer ist doppelt so groß.",
        "explanation": "Richtig. Größere Rückgabe messen und neuen Anschluss abwarten."
      },
      {
        "label": "Die Umkehrchance beträgt hundert Prozent.",
        "explanation": "Das Verhältnis ist keine Trefferquote."
      },
      {
        "label": "Der Rücksetzer muss an jedem Tag genau dann erscheinen.",
        "explanation": "Ein Beispiel ist kein Zeitgesetz."
      }
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Späte Beschleunigung kann Erschöpfung anzeigen",
    "summary": "Außergewöhnliche Stärke nach langem Trend braucht einen neuen Blick.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-14",
    "paragraphs": [
      "Zwei große Käuferbars nach langem langsamen Anstieg können neue Nachfrage zeigen. Sie können aber auch einen kurzen Endspurt vor einer größeren Korrektur bilden.",
      "Die Panels stellen Beschleunigung und anschließende Gegenreaktion gegenüber. Im linken Zeitpunkt ist der Rücklauf noch unbekannt; rechts wird er erst durch neue Bars sichtbar.",
      "Teilgewinnmanagement kann zu einem vorher festgelegten Plan gehören. Ein Gegenhandel nur wegen der großen Bars verlangt zusätzliche Begründung und darf nicht aus dem späteren Verlauf abgeleitet werden."
    ],
    "callout": "Beschleunigung schafft Aufmerksamkeit, keine sichere Gegenorder.",
    "takeaways": [
      "Außergewöhnliche Stärke nach langem Trend braucht einen neuen Blick.",
      "Die Panels stellen Beschleunigung und anschließende Gegenreaktion gegenüber.",
      "Beschleunigung schafft Aufmerksamkeit, keine sichere Gegenorder."
    ],
    "prompt": "Welche Aussage gilt beim ersten großen Endspurt-Bar?",
    "answers": [
      {
        "label": "Große Käuferbars erlauben immer einen Short.",
        "explanation": "Stärke allein ist kein ausreichender Gegenhandelsplan."
      },
      {
        "label": "Fortsetzung und Erschöpfung bleiben zunächst Alternativen.",
        "explanation": "Richtig. Beschleunigung schafft Aufmerksamkeit, keine sichere Gegenorder."
      },
      {
        "label": "Die spätere Korrektur war bereits bekannt.",
        "explanation": "Sie ist erst durch spätere Bars sichtbar."
      }
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "SMA-Test nach langer Trennung richtig benennen",
    "summary": "Langer Abstand und vollständig getrennte Bars sind verschiedene Merkmale.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-15",
    "paragraphs": [
      "Nach vielen Bars ohne Berührung des gleitenden Durchschnitts wird ein erster Test ein neuer Beobachtungspunkt. Das ist nicht dasselbe wie ein einzelner Bar, der vollständig auf der anderen Seite liegt.",
      "Die Panels verwenden einen tatsächlich aus Schlusskursen berechneten SMA 20. Links bleibt eine längere Folge darüber; rechts reicht eine Gegenbewegung durch ihn und ein späterer Bar liegt vollständig darunter.",
      "Im Käufertrend ist das zusätzliche Verkäuferwirkung. Ob darauf eine letzte Trendstrecke, eine längere Balance oder eine Umkehr folgt, muss danach geprüft werden."
    ],
    "callout": "SMA 20 berechnen und Berührung von vollständiger Trennung unterscheiden.",
    "takeaways": [
      "Langer Abstand und vollständig getrennte Bars sind verschiedene Merkmale.",
      "Die Panels verwenden einen tatsächlich aus Schlusskursen berechneten SMA 20.",
      "SMA 20 berechnen und Berührung von vollständiger Trennung unterscheiden."
    ],
    "prompt": "Was kennzeichnet den vollständig unter dem SMA liegenden Bar?",
    "answers": [
      {
        "label": "Nur sein Schluss liegt darunter.",
        "explanation": "Sein Hoch könnte den Durchschnitt noch berühren."
      },
      {
        "label": "Er hat zwingend einen bearishen Körper.",
        "explanation": "Seine Lage und seine Körperfarbe sind verschiedene Merkmale."
      },
      {
        "label": "Auch sein Hoch liegt unter dem zugehörigen Durchschnittswert.",
        "explanation": "Richtig. SMA 20 berechnen und Berührung von vollständiger Trennung unterscheiden."
      }
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Nachrichtenbar erst nach dem Schluss beurteilen",
    "summary": "Ein laufender Bar kann seine Aussage ändern.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-16",
    "paragraphs": [
      "Eine schnelle Gegenbewegung während eines Ereignisses kann mitten im Bar dramatisch aussehen. Bis zum Schluss kann eine Käuferreaktion einen großen Teil der Strecke zurücknehmen.",
      "Die zwei Panels zeigen denselben Bar zu zwei Zeitpunkten. Open und bereits entstandenes Tief bleiben gleich, während Schluss und Hoch später aktualisiert werden.",
      "Der abgeschlossene Bar liefert die endgültige Signalform dieses Zeitintervalls. Auch danach braucht eine Order ihre Auslösung; aus dem Ereignisnamen folgt keine Richtung."
    ],
    "callout": "Laufenden Zustand und endgültigen Bar getrennt führen.",
    "takeaways": [
      "Ein laufender Bar kann seine Aussage ändern.",
      "Die zwei Panels zeigen denselben Bar zu zwei Zeitpunkten.",
      "Laufenden Zustand und endgültigen Bar getrennt führen."
    ],
    "prompt": "Welche Form ist für die abgeschlossene Signalbeurteilung maßgeblich?",
    "answers": [
      {
        "label": "Die Form nach dem tatsächlichen Barabschluss.",
        "explanation": "Richtig. Laufenden Zustand und endgültigen Bar getrennt führen."
      },
      {
        "label": "Die rote Form mitten im Intervall.",
        "explanation": "Der spätere Schluss kann sie verändern."
      },
      {
        "label": "Die erwartete Richtung aus dem Nachrichtentitel.",
        "explanation": "Das ersetzt die sichtbare Preisreaktion nicht."
      }
    ],
    "correct": 0
  },
  {
    "number": 17,
    "title": "Kleiner Stop macht einen Gegenhandel nicht automatisch gut",
    "summary": "Verfügbarer Gegenraum muss zum Gewinnplan passen.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-17",
    "paragraphs": [
      "Ein enger Stop kann einen Gegenhandel im starken Trend attraktiv erscheinen lassen. Wenn bisherige Rückgaben aber kaum weiter als bis zur geplanten Auslösung reichen, fehlt Platz für das Ziel.",
      "Im Beispiel liegt das Hoch bei sechzig, der Shorttrigger bei fünfundfünfzig und das Ziel bei fünfzig. Die nötige Gesamtbewegung beträgt zehn Einheiten; bisherige Rückgaben waren nur acht.",
      "Das macht das Ziel anspruchsvoller als die bisher sichtbaren Gegenbewegungen. Eine aktuelle Trefferquote wird damit nicht berechnet; Kosten und möglicher Verlust gehören zusätzlich in den Plan."
    ],
    "callout": "Risiko, Zielraum und Kontext gemeinsam prüfen.",
    "takeaways": [
      "Verfügbarer Gegenraum muss zum Gewinnplan passen.",
      "Im Beispiel liegt das Hoch bei sechzig, der Shorttrigger bei fünfundfünfzig und das Ziel bei fünfzig.",
      "Risiko, Zielraum und Kontext gemeinsam prüfen."
    ],
    "prompt": "Wie groß ist die Strecke vom Hoch 60 zum Ziel 50?",
    "answers": [
      {
        "label": "Eine garantierte erreichbare Strecke.",
        "explanation": "Der Trend kann vorher wieder einsetzen."
      },
      {
        "label": "Zehn Einheiten und damit mehr als die bisherigen acht.",
        "explanation": "Richtig. Risiko, Zielraum und Kontext gemeinsam prüfen."
      },
      {
        "label": "Nur fünf Einheiten.",
        "explanation": "Das zählt nur die Strecke nach dem Trigger."
      }
    ],
    "correct": 1
  },
  {
    "number": 18,
    "title": "Fortsetzung am Folgetag neu prüfen",
    "summary": "Der neue Handelstag braucht einen eigenen Plan.",
    "section": "Trends ab Eröffnung lesen",
    "scenario": "c23-18",
    "paragraphs": [
      "Ein starker Tag kann in der nächsten Sitzung Anschluss finden. Ein größerer früher Rücklauf kann aber ebenso eine neue Balance oder einen Kontrollwechsel einleiten.",
      "Links endet eine Käuferfolge, rechts beginnt ausdrücklich eine neue Sitzung mit Rücklauf und Reaktion. Die Preise der neuen Sitzung werden erst dort beurteilt.",
      "Ein einziger gut lesbarer Zeitrahmen reicht für die Suche nach einem abgeschlossenen Setup. Ein Wechsel auf kleinere Charts ist kein Ersatz für einen fehlenden Plan."
    ],
    "callout": "Vorherige Stärke liefert Kontext, keine Pflichtposition am Folgetag.",
    "takeaways": [
      "Der neue Handelstag braucht einen eigenen Plan.",
      "Links endet eine Käuferfolge, rechts beginnt ausdrücklich eine neue Sitzung mit Rücklauf und Reaktion.",
      "Vorherige Stärke liefert Kontext, keine Pflichtposition am Folgetag."
    ],
    "prompt": "Was wird nach der nächsten Eröffnung neu geprüft?",
    "answers": [
      {
        "label": "Der unveränderte sichere Trend des Vortags.",
        "explanation": "Ein neuer Tag kann anders handeln."
      },
      {
        "label": "Eine automatische Position zum Open.",
        "explanation": "Dafür fehlt ein neuer Auslöser und Risikoplan."
      },
      {
        "label": "Die aktuelle Rückgabe, Reaktion und Auslösung.",
        "explanation": "Richtig. Vorherige Stärke liefert Kontext, keine Pflichtposition am Folgetag."
      }
    ],
    "correct": 2
  },
  {
    "number": 19,
    "title": "Lernfall 1: Erste Gegenfarbe und spätere Käuferfolge",
    "summary": "Der erste Bar darf die Denkweise nicht festschreiben.",
    "section": "Lernfall 1",
    "scenario": "c23-19",
    "paragraphs": [
      "Der erste Bar fällt, während die nächste Folge stark steigt. Ein früher Verkäuferplan wird dadurch entkräftet; das spätere Käuferbild verlangt eine eigene Prüfung.",
      "Die Panels trennen ersten Gegenbar und nachfolgende Käuferstrecke. Ein Rücklauf innerhalb dieser Strecke bleibt klein und endet oberhalb der Impulsbasis.",
      "Wer nur auf eine Schließung des Gaps wartet, kann den entstehenden Trend übersehen. Flexibilität bedeutet eine neue begründete Entscheidung, nicht planloses Wechseln."
    ],
    "callout": "Neue Bars können die erste Richtungshypothese entkräften.",
    "takeaways": [
      "Der erste Bar darf die Denkweise nicht festschreiben.",
      "Die Panels trennen ersten Gegenbar und nachfolgende Käuferstrecke.",
      "Neue Bars können die erste Richtungshypothese entkräften."
    ],
    "prompt": "Welche Reaktion passt nach deutlichem Käuferanschluss?",
    "answers": [
      {
        "label": "Den alten Verkäuferplan neu bewerten und ein Käufer-Setup prüfen.",
        "explanation": "Richtig. Neue Bars können die erste Richtungshypothese entkräften."
      },
      {
        "label": "An der ersten Barfarbe festhalten.",
        "explanation": "Die neue Folge liefert zusätzliche Information."
      },
      {
        "label": "Ohne neuen Schutz sofort beliebig kaufen.",
        "explanation": "Ein Kontrollwechsel ersetzt keinen Risikoplan."
      }
    ],
    "correct": 0
  },
  {
    "number": 20,
    "title": "Lernfall 1: Schwacher Pullback-Bar mit klarem Trigger",
    "summary": "Ein roter Signalbar kann im passenden Kontext stehen.",
    "section": "Lernfall 1",
    "scenario": "c23-20",
    "paragraphs": [
      "Nach dem starken Anstieg schließt der Pullback-Bar unter seinem Open. Sein Rücklauf ist trotzdem klein; die Käuferstrecke davor bleibt sichtbar.",
      "Die Linie markiert den geplanten Stoptrigger über dem Signalhoch. Nur die späteren Bars im rechten Panel erreichen diesen Preis. Das linke Panel zeigt noch keine Ausführung.",
      "Ein Kauf zum Signalabschluss und ein Kauf auf Ausbruch sind unterschiedliche Pläne. Hier wird ausdrücklich der Ausbruch geprüft, mit Schutz unter der begründeten Struktur."
    ],
    "callout": "Die spätere Auslösung vom Signalzeitpunkt trennen.",
    "takeaways": [
      "Ein roter Signalbar kann im passenden Kontext stehen.",
      "Die Linie markiert den geplanten Stoptrigger über dem Signalhoch.",
      "Die spätere Auslösung vom Signalzeitpunkt trennen."
    ],
    "prompt": "Wann wird der dargestellte Buy-Stop preislich erreicht?",
    "answers": [
      {
        "label": "Durch Einzeichnen einer Linie.",
        "explanation": "Die Linie ist nur eine Preisreferenz."
      },
      {
        "label": "Erst in der späteren Aufwärtsfolge über dem Signalhoch.",
        "explanation": "Richtig. Die spätere Auslösung vom Signalzeitpunkt trennen."
      },
      {
        "label": "Bereits beim roten Signalabschluss.",
        "explanation": "Dieser liegt unter dem Trigger."
      }
    ],
    "correct": 1
  },
  {
    "number": 21,
    "title": "Lernfall 2: Kleine Rückgaben trotz vieler Verkäuferbars",
    "summary": "Gegenkerzen allein erklären die Trendwirkung nicht.",
    "section": "Lernfall 2",
    "scenario": "c23-21",
    "paragraphs": [
      "Nach einem frühen Käuferimpuls erscheinen wiederholt rote Bars und kurze Gegenstrecken. Trotzdem entstehen höhere Tiefs und anschließend weitere Hochs.",
      "Die Panels vergleichen einen Ausschnitt mit der längeren Folge. Der geringe Rücklauf macht die vermeintlichen Umkehrmuster weniger wirksam als ihre auffällige Farbe vermuten lässt.",
      "Ein passender Käuferplan darf nicht nur auf die schönste Signalform warten. Er braucht aber weiterhin einen Trigger und einen begrenzten Verlust, falls die kleine Rückgabe doch größer wird."
    ],
    "callout": "Die gemeinsame Struktur neben einzelnen Gegenbars lesen.",
    "takeaways": [
      "Gegenkerzen allein erklären die Trendwirkung nicht.",
      "Die Panels vergleichen einen Ausschnitt mit der längeren Folge.",
      "Die gemeinsame Struktur neben einzelnen Gegenbars lesen."
    ],
    "prompt": "Was fehlt für eine bestätigte Verkäuferumkehr?",
    "answers": [
      {
        "label": "Mindestens ein roter Bar.",
        "explanation": "Rote Bars sind bereits vorhanden."
      },
      {
        "label": "Ein besonders hübscher Mustername.",
        "explanation": "Der Name ersetzt keine Preiswirkung."
      },
      {
        "label": "Eine größere tragfähige Gegenstrecke mit Anschluss.",
        "explanation": "Richtig. Die gemeinsame Struktur neben einzelnen Gegenbars lesen."
      }
    ],
    "correct": 2
  },
  {
    "number": 22,
    "title": "Lernfall 2: Fehlausbruch aus der kleinen Balance",
    "summary": "Ein Randbesuch ist nicht automatisch ein neuer Trend.",
    "section": "Lernfall 2",
    "scenario": "c23-22",
    "paragraphs": [
      "Eine kleine Balance innerhalb des Käufertrends wird kurz nach unten erweitert. Der nächste Bar bringt den Preis zurück in den Bereich.",
      "Links ist nur der Bruch sichtbar. Rechts folgt eine Rückkehr mit erneutem Käuferanschluss. Ein Schutz unter der größeren Impulsbasis ist ein anderer Plan als ein enger Schutz am Balancerand.",
      "Aus der späteren Erholung folgt kein Recht, einen bereits ausgelösten Stop zu ignorieren. Entscheidend ist, welche Struktur vor dem Einstieg als Ungültigkeitsgrenze gewählt wurde."
    ],
    "callout": "Fehlausbruch prüfen, ohne den Schutz rückwirkend umzuschreiben.",
    "takeaways": [
      "Ein Randbesuch ist nicht automatisch ein neuer Trend.",
      "Links ist nur der Bruch sichtbar.",
      "Fehlausbruch prüfen, ohne den Schutz rückwirkend umzuschreiben."
    ],
    "prompt": "Was trennt die beiden Schutzpläne?",
    "answers": [
      {
        "label": "Die vorab gewählte Struktur und der daraus folgende Stopabstand.",
        "explanation": "Richtig. Fehlausbruch prüfen, ohne den Schutz rückwirkend umzuschreiben."
      },
      {
        "label": "Die spätere Erholung löscht jeden Verlust.",
        "explanation": "Eine Ausführung bleibt eine Ausführung."
      },
      {
        "label": "Eine Balance macht jeden Stop überflüssig.",
        "explanation": "Auch Balancen können nachhaltig ausbrechen."
      }
    ],
    "correct": 0
  },
  {
    "number": 23,
    "title": "Lernfall 3: Kompakte Pause vor dem nächsten Ausbruch",
    "summary": "Kaum Preisrückgabe kann ein starkes Fortsetzungsumfeld schaffen.",
    "section": "Lernfall 3",
    "scenario": "c23-23",
    "paragraphs": [
      "Eine kleine Pause im Käuferimpuls enthält aufeinanderfolgende Inside-Bars. Die Preisspanne schrumpft, während ein großer Rücklauf ausbleibt.",
      "Im rechten Panel wird die obere Pausengrenze überschritten und Anschluss kommt hinzu. Das kompakte Muster links ist noch in beide Richtungen offen.",
      "Die Pause wird als Unterbrechung innerhalb der ersten Bewegung behandelt. Ihr Ausbruch braucht ein eigenes Risiko; ein sehr kleiner Bar rechtfertigt keine übergroße Position."
    ],
    "callout": "Kompakte Pause und späteren Anschluss getrennt lesen.",
    "takeaways": [
      "Kaum Preisrückgabe kann ein starkes Fortsetzungsumfeld schaffen.",
      "Im rechten Panel wird die obere Pausengrenze überschritten und Anschluss kommt hinzu.",
      "Kompakte Pause und späteren Anschluss getrennt lesen."
    ],
    "prompt": "Wann ist die Käuferfortsetzung sichtbar?",
    "answers": [
      {
        "label": "Durch eine feste Tageswahrscheinlichkeit.",
        "explanation": "Hier wird keine Wahrscheinlichkeit gemessen."
      },
      {
        "label": "Nach dem tatsächlichen Ausbruch mit neuen Käuferbars.",
        "explanation": "Richtig. Kompakte Pause und späteren Anschluss getrennt lesen."
      },
      {
        "label": "Bereits durch zwei Inside-Bars allein.",
        "explanation": "Sie zeigen Kompression, keine sichere Richtung."
      }
    ],
    "correct": 1
  },
  {
    "number": 24,
    "title": "Lernfall 3: Größerer Rücklauf nach langem Anstieg",
    "summary": "Ein späterer Rücklauf ist mit früheren Korrekturen zu vergleichen.",
    "section": "Lernfall 3",
    "scenario": "c23-24",
    "paragraphs": [
      "Nach langen kleinen Pausen gewinnt der Gegenhandel erstmals mehr Raum. Die Panels zeigen eine frühere Rückgabe von vier und eine spätere von acht Einheiten.",
      "Das Verhältnis beschreibt eine Veränderung der Struktur. Es gibt keinen Anspruch darauf, dass jeder spätere Rücksetzer genau doppelt so groß ist oder sofort wieder steigt.",
      "Prüfe nach der Gegenbewegung einen neuen Anschluss. Eine vorher gute Trendidee muss bei einer neuen Balance angepasst werden, statt jede größere Rückgabe blind zu kaufen."
    ],
    "callout": "Das Größenverhältnis ist ein Beispiel, keine Tagesregel.",
    "takeaways": [
      "Ein späterer Rücklauf ist mit früheren Korrekturen zu vergleichen.",
      "Das Verhältnis beschreibt eine Veränderung der Struktur.",
      "Das Größenverhältnis ist ein Beispiel, keine Tagesregel."
    ],
    "prompt": "Was verlangt die größere Rückgabe?",
    "answers": [
      {
        "label": "Einen sicheren Sofortkauf.",
        "explanation": "Der Rücklauf kann weitergehen."
      },
      {
        "label": "Einen vorgeschriebenen Beginn zu einer bestimmten Uhrzeit.",
        "explanation": "Das Beispiel enthält kein Zeitgesetz."
      },
      {
        "label": "Eine neue Prüfung von Trend, Balance und Anschluss.",
        "explanation": "Richtig. Das Größenverhältnis ist ein Beispiel, keine Tagesregel."
      }
    ],
    "correct": 2
  },
  {
    "number": 25,
    "title": "Lernfall 4: Winzige Pausen im Verkäufertrend",
    "summary": "Nicht jede Gegenbewegung beendet die erste Strecke.",
    "section": "Lernfall 4",
    "scenario": "c23-25",
    "paragraphs": [
      "Ein Verkäuferimpuls wird mehrfach durch kleine Aufwärtsbars unterbrochen. Die Rückläufe gewinnen wenig Höhe und ändern die größere Abwärtsfolge zunächst nicht.",
      "Die Panels zeigen dieselbe Strecke erst kurz, dann länger. Ein auffälliger grüner Bar bleibt klein im Vergleich zum Raum des vorherigen Impulses.",
      "Die Phase darf nicht bei jedem einzelnen Gegenbar neu nummeriert werden. Die Bedeutung einer Korrektur ergibt sich aus ihrer Strecke und aus den gebrochenen Bezügen."
    ],
    "callout": "Korrekturgröße vor Barfarbe gewichten.",
    "takeaways": [
      "Nicht jede Gegenbewegung beendet die erste Strecke.",
      "Die Panels zeigen dieselbe Strecke erst kurz, dann länger.",
      "Korrekturgröße vor Barfarbe gewichten."
    ],
    "prompt": "Warum endet die Abwärtsidee hier nicht beim ersten grünen Bar?",
    "answers": [
      {
        "label": "Seine Gegenstrecke bleibt klein und neue Tiefs folgen.",
        "explanation": "Richtig. Korrekturgröße vor Barfarbe gewichten."
      },
      {
        "label": "Grüne Bars existieren in Beartrends nie.",
        "explanation": "Das Beispiel zeigt gerade solche Bars."
      },
      {
        "label": "Jeder Gegenbar ist bedeutungslos.",
        "explanation": "Eine wachsende Gegenfolge wäre relevant."
      }
    ],
    "correct": 0
  },
  {
    "number": 26,
    "title": "Lernfall 4: Erst der größere Rücklauf bricht die Linie",
    "summary": "Erster Bruch und neue Verkäuferstrecke können aufeinander folgen.",
    "section": "Lernfall 4",
    "scenario": "c23-26",
    "paragraphs": [
      "Eine spätere Aufwärtsbewegung durchbricht die eingezeichnete steile Verkäufertrendlinie. Damit ist die erste beschleunigte Phase beeinträchtigt.",
      "Rechts setzt nach diesem Rücklauf eine neue Verkäuferstrecke ein. Das neue Tief war im linken Entscheidungszeitpunkt noch nicht bekannt und wird nicht als sicherer Ausgang dargestellt.",
      "Der Rücklauf kann auch in eine Balance oder Umkehr führen. Prüfe den neuen Verkäufertrigger und das Rücklaufhoch als getrennte Bestandteile des Plans."
    ],
    "callout": "Ein erster Linienbruch kann einen Fortsetzungsversuch vorbereiten.",
    "takeaways": [
      "Erster Bruch und neue Verkäuferstrecke können aufeinander folgen.",
      "Rechts setzt nach diesem Rücklauf eine neue Verkäuferstrecke ein.",
      "Ein erster Linienbruch kann einen Fortsetzungsversuch vorbereiten."
    ],
    "prompt": "Was bleibt beim Linienbruch offen?",
    "answers": [
      {
        "label": "Dass das rechte Tief schon bekannt war.",
        "explanation": "Es entsteht erst später."
      },
      {
        "label": "Ob anschließend Fortsetzung, Balance oder Umkehr folgt.",
        "explanation": "Richtig. Ein erster Linienbruch kann einen Fortsetzungsversuch vorbereiten."
      },
      {
        "label": "Dass sofort ein dauerhafter Bulltrend entsteht.",
        "explanation": "Der Bruch allein reicht dafür nicht."
      }
    ],
    "correct": 1
  },
  {
    "number": 27,
    "title": "Lernfall 5: Früher Käuferbar scheitert nach Gap-down",
    "summary": "Ein starker Gegenbar kann eine frühe Falle vorbereiten.",
    "section": "Lernfall 5",
    "scenario": "c23-27",
    "paragraphs": [
      "Nach tieferer Eröffnung steigt der erste Bar kräftig. Der nächste Bar erreicht den Beispiel-Buy-Stop; erst danach handelt der Markt unter das Tief des ersten Bars.",
      "Die Panels zeigen getrennt den ausgelösten Käuferplan und die folgende Verkäuferbewegung. Ein Gap-down allein hätte weder den Kauf ausgeschlossen noch den späteren Abbruch garantiert.",
      "Ein Stopausstieg und ein neuer Short sind zwei Entscheidungen. Eine mögliche Umkehrposition braucht eine definierte Größe und einen neuen Schutz."
    ],
    "callout": "Erst Auslösung, dann Scheitern, dann neuer Plan.",
    "takeaways": [
      "Ein starker Gegenbar kann eine frühe Falle vorbereiten.",
      "Die Panels zeigen getrennt den ausgelösten Käuferplan und die folgende Verkäuferbewegung.",
      "Erst Auslösung, dann Scheitern, dann neuer Plan."
    ],
    "prompt": "Was entkräftet den dargestellten frühen Käuferplan?",
    "answers": [
      {
        "label": "Das Gap-down allein.",
        "explanation": "Der Käuferplan konnte zunächst ausgelöst werden."
      },
      {
        "label": "Der erste starke Käuferkörper.",
        "explanation": "Er war Teil des ursprünglichen Setups."
      },
      {
        "label": "Die spätere Bewegung unter seine festgelegte Schutzstruktur.",
        "explanation": "Richtig. Erst Auslösung, dann Scheitern, dann neuer Plan."
      }
    ],
    "correct": 2
  },
  {
    "number": 28,
    "title": "Lernfall 5: Überlappender Reversal-Bar in der Bearflag",
    "summary": "Ein schöner Körper kann im falschen Bereich stehen.",
    "section": "Lernfall 5",
    "scenario": "c23-28",
    "paragraphs": [
      "Ein kräftiger grüner Bar liegt weitgehend in der Spanne der vorherigen Bars. Im Verkäufertrend ist er damit zugleich Teil einer kleinen Gegenbalance.",
      "Das rechte Panel zeigt einen erneuten Verkäuferausbruch. Ein weiterer schwacher Käuferanlauf kann als zusätzlicher Push einer Bearflag erscheinen, ohne eine bestätigte Umkehr zu liefern.",
      "Ein Low-2-Versuch und ein späterer dritter Aufwärtsanlauf müssen nach sichtbaren Versuchen gezählt werden. Ein neues Longmuster verlangt mehr als die Körperfarbe eines einzelnen Bars."
    ],
    "callout": "Überlappung und Trendkontext neben dem Reversal-Körper prüfen.",
    "takeaways": [
      "Ein schöner Körper kann im falschen Bereich stehen.",
      "Das rechte Panel zeigt einen erneuten Verkäuferausbruch.",
      "Überlappung und Trendkontext neben dem Reversal-Körper prüfen."
    ],
    "prompt": "Was begrenzt die Aussage des grünen Bars?",
    "answers": [
      {
        "label": "Seine starke Überlappung innerhalb der Gegenbalance.",
        "explanation": "Richtig. Überlappung und Trendkontext neben dem Reversal-Körper prüfen."
      },
      {
        "label": "Seine Farbe garantiert die Trendwende.",
        "explanation": "Die Lage widerspricht dieser Sicherheit."
      },
      {
        "label": "Ein dritter Anlauf garantiert einen Käuferausbruch.",
        "explanation": "Auch eine Wedge-Bearflag kann nach unten ausbrechen."
      }
    ],
    "correct": 0
  },
  {
    "number": 29,
    "title": "Lernfall 6: Gap-up mit sofortigem Verkäuferanschluss",
    "summary": "Höhere Eröffnung kann kräftige Verkäufe auslösen.",
    "section": "Lernfall 6",
    "scenario": "c23-29",
    "paragraphs": [
      "Der Kurs öffnet oberhalb des bekannten Schlusses, fällt aber schon in den ersten Bars deutlich. Ein Rücklauf zum Open gewinnt den Bereich nicht dauerhaft zurück.",
      "Links ist der frühe Verkaufsdruck sichtbar, rechts der gescheiterte Öffnungstest. Das Gap bleibt als Ausgangslage erhalten, während die neue Folge nach unten handelt.",
      "Ein tieferes Rücklaufhoch kann einen neuen Verkäuferplan liefern. Es ist kein Beweis, dass jedes Gap-up verkauft werden sollte."
    ],
    "callout": "Richtung aus der Folge statt aus dem Gap ableiten.",
    "takeaways": [
      "Höhere Eröffnung kann kräftige Verkäufe auslösen.",
      "Links ist der frühe Verkaufsdruck sichtbar, rechts der gescheiterte Öffnungstest.",
      "Richtung aus der Folge statt aus dem Gap ableiten."
    ],
    "prompt": "Was trägt die Verkäuferidee hier?",
    "answers": [
      {
        "label": "Ein höherer Open bedeutet sicheren Bulltrend.",
        "explanation": "Die neue Folge zeigt das Gegenteil."
      },
      {
        "label": "Starker früher Anschluss und ein gescheiterter Rücklauf zum Open.",
        "explanation": "Richtig. Richtung aus der Folge statt aus dem Gap ableiten."
      },
      {
        "label": "Die Pflicht, jedes Gap-up zu schließen.",
        "explanation": "Es besteht keine solche Pflicht."
      }
    ],
    "correct": 1
  },
  {
    "number": 30,
    "title": "Lernfall 6: Gap-down ohne nachhaltigen Verkaufsdruck",
    "summary": "Ein großer Anfangsbar kann auch Erschöpfung sein.",
    "section": "Lernfall 6",
    "scenario": "c23-30",
    "paragraphs": [
      "Nach tieferer Eröffnung fällt der Preis zunächst kräftig. Ein kleiner Inside-Bar und fehlender weiterer Verkäuferraum lassen die Abwärtsfortsetzung unsicher werden.",
      "Rechts entwickelt sich eine Käuferreaktion. Ein vorangegangener positiver Signalbar kann dabei ungefüllt geblieben sein; der spätere Ausbruch gehört zu einem neuen Zeitpunkt.",
      "Ein Kanalrand aus der vorherigen Sitzung kann Kontext liefern, aber nicht die reale Orderausführung garantieren. Erst sichtbare neue Käuferwirkung unterstützt die Umkehridee."
    ],
    "callout": "Großen Anfangsbar und tragfähigen Anschluss unterscheiden.",
    "takeaways": [
      "Ein großer Anfangsbar kann auch Erschöpfung sein.",
      "Rechts entwickelt sich eine Käuferreaktion.",
      "Großen Anfangsbar und tragfähigen Anschluss unterscheiden."
    ],
    "prompt": "Was schwächt den frühen Beartrendplan?",
    "answers": [
      {
        "label": "Der Gap-down erzwingt weitere Tiefs.",
        "explanation": "Das Gap entscheidet die weitere Richtung nicht."
      },
      {
        "label": "Ein unberührter Buy-Stop zählt bereits als Kauf.",
        "explanation": "Ohne Auslösung gibt es keine dargestellte Füllung."
      },
      {
        "label": "Ausbleibender Anschluss und neue Käuferwirkung.",
        "explanation": "Richtig. Großen Anfangsbar und tragfähigen Anschluss unterscheiden."
      }
    ],
    "correct": 2
  },
  {
    "number": 31,
    "title": "Lernfall 7: Test des Vortagstiefs mit neuem Käuferbar",
    "summary": "Ein Unterstützungsbesuch ist noch keine Longauslösung.",
    "section": "Lernfall 7",
    "scenario": "c23-31",
    "paragraphs": [
      "Nach einem frühen Verkäuferbar wird das bekannte Vortagstief unterschritten. Eine erste Reaktion bleibt schwach; danach bildet sich ein deutlicher Käuferbar.",
      "Die Panels markieren das alte Tief und den späteren Buy-Stop über dem abgeschlossenen Käuferbar. Die Order wird erst in der nachfolgenden Bewegung preislich erreicht.",
      "Falls der Markt stattdessen weiter fällt, wird das ungefüllte Setup neu bewertet. Ein Preisbereich allein rechtfertigt kein beliebiges Nachkaufen."
    ],
    "callout": "Bekannten Bezug, Signal und Trigger getrennt führen.",
    "takeaways": [
      "Ein Unterstützungsbesuch ist noch keine Longauslösung.",
      "Die Panels markieren das alte Tief und den späteren Buy-Stop über dem abgeschlossenen Käuferbar.",
      "Bekannten Bezug, Signal und Trigger getrennt führen."
    ],
    "prompt": "Was löst den dargestellten Longplan aus?",
    "answers": [
      {
        "label": "Der spätere Handel über dem Hoch des abgeschlossenen Käuferbars.",
        "explanation": "Richtig. Bekannten Bezug, Signal und Trigger getrennt führen."
      },
      {
        "label": "Das erste Unterschreiten des Vortagstiefs.",
        "explanation": "Das ist nur der Kontextbesuch."
      },
      {
        "label": "Jeder schwache Gegenbar automatisch.",
        "explanation": "Die gewählte Auslösung ist genauer definiert."
      }
    ],
    "correct": 0
  },
  {
    "number": 32,
    "title": "Lernfall 7: Erster Trendversuch wird zur Range",
    "summary": "Eine frühe Richtung kann in Gegenhandel übergehen.",
    "section": "Lernfall 7",
    "scenario": "c23-32",
    "paragraphs": [
      "Die frühe Verkäuferbewegung wird von einer Käuferreaktion abgelöst. Beide Seiten gewinnen zunächst keinen dauerhaften Anschluss, und eine Balance entsteht.",
      "Rechts bricht später ein neuer Verkäuferimpuls aus der Balance. Dieses spätere Ereignis darf nicht als Bestätigung eines durchgehenden Trends seit dem Open gelesen werden.",
      "Die Breite der Anfangsbalance kann eine Zielprojektion liefern. Ein späterer Rücklauf in sie bleibt möglich, und die Projektion ist keine garantierte Tagesstrecke."
    ],
    "callout": "Frühe Trendidee und spätere Rangephase getrennt benennen.",
    "takeaways": [
      "Eine frühe Richtung kann in Gegenhandel übergehen.",
      "Rechts bricht später ein neuer Verkäuferimpuls aus der Balance.",
      "Frühe Trendidee und spätere Rangephase getrennt benennen."
    ],
    "prompt": "Wie wird die Zwischenphase eingeordnet?",
    "answers": [
      {
        "label": "Als Range mit zwingendem Verdopplungsziel.",
        "explanation": "Eine Projektion bleibt ein mögliches Ziel."
      },
      {
        "label": "Als Balance nach dem frühen Trendversuch.",
        "explanation": "Richtig. Frühe Trendidee und spätere Rangephase getrennt benennen."
      },
      {
        "label": "Als sicher durchgehender Beartrend.",
        "explanation": "Der Gegenhandel hat die Struktur verändert."
      }
    ],
    "correct": 1
  },
  {
    "number": 33,
    "title": "Lernfall 8: Open am Hoch und erster Rücklauf darunter",
    "summary": "Der erste Rücklauf kann vor einem erhofften Bezug drehen.",
    "section": "Lernfall 8",
    "scenario": "c23-33",
    "paragraphs": [
      "Der erste Verkäuferbar öffnet in diesem erfundenen Verlauf auf seinem Hoch. Danach gewinnen weitere Bars schnell Raum nach unten.",
      "Der erste Rücklauf besteht aus mehreren kleinen grünen Körpern. Er bleibt unter dem vorherigen Hoch und wird von neuen Verkäuferbars abgelöst; seine Farbe allein bestätigt keine Käuferumkehr.",
      "Ein erwarteter Durchschnittstest ist keine Pflichtstation. Ein neuer Shortplan braucht seine eigene Auslösung und darf nicht wegen eines verpassten ersten Einstiegs übergroß werden."
    ],
    "callout": "Kleine grüne Körper können eine Bearflag bilden.",
    "takeaways": [
      "Der erste Rücklauf kann vor einem erhofften Bezug drehen.",
      "Der erste Rücklauf besteht aus mehreren kleinen grünen Körpern.",
      "Kleine grüne Körper können eine Bearflag bilden."
    ],
    "prompt": "Was zählt beim ersten Rücklauf stärker als seine Barfarbe?",
    "answers": [
      {
        "label": "Jeder grüne Körper beendet den Beartrend.",
        "explanation": "Die Gegenstrecke bleibt hier klein."
      },
      {
        "label": "Der Markt muss einen bestimmten Bezug erst berühren.",
        "explanation": "Er kann vorher wieder drehen."
      },
      {
        "label": "Seine geringe Höhe und der erneute Verkäuferanschluss.",
        "explanation": "Richtig. Kleine grüne Körper können eine Bearflag bilden."
      }
    ],
    "correct": 2
  },
  {
    "number": 34,
    "title": "Lernfall 8: Früher Umkehrversuch ohne Füllung",
    "summary": "Ein sichtbares Signal ist nicht gleich eine ausgeführte Order.",
    "section": "Lernfall 8",
    "scenario": "c23-34",
    "paragraphs": [
      "Am unteren Trendbereich erscheint ein Käuferbar. Der geplante Buy-Stop liegt über seinem Hoch, aber die nächste Folge erreicht ihn nicht.",
      "Rechts entsteht später ein neuer Käuferimpuls. Dieser darf nicht rückwirkend als Gewinn des ersten ungefüllten Plans verbucht werden. Der Tagesabschluss kann über dem Tief liegen, obwohl der Morgen stark bearish war.",
      "Alte Kanal- oder Wedgehöhen liefern getrennte Projektionsanker. Die tatsächliche Umkehr und die tatsächlich besuchten Ziele müssen jeweils im Preisweg nachgewiesen werden."
    ],
    "callout": "Ungefüllte Idee und spätere neue Bewegung getrennt bilanzieren.",
    "takeaways": [
      "Ein sichtbares Signal ist nicht gleich eine ausgeführte Order.",
      "Rechts entsteht später ein neuer Käuferimpuls.",
      "Ungefüllte Idee und spätere neue Bewegung getrennt bilanzieren."
    ],
    "prompt": "Was gehört dem ersten Buy-Stop-Plan?",
    "answers": [
      {
        "label": "Keine Füllung, solange sein Trigger nicht erreicht wird.",
        "explanation": "Richtig. Ungefüllte Idee und spätere neue Bewegung getrennt bilanzieren."
      },
      {
        "label": "Der gesamte spätere Käufergewinn.",
        "explanation": "Der spätere Impuls gehört zu einem neuen Plan."
      },
      {
        "label": "Ein garantiert bearisher Schluss am Tagestief.",
        "explanation": "Die spätere Käuferreaktion kann das verhindern."
      }
    ],
    "correct": 0
  },
  {
    "number": 35,
    "title": "Lernfall 9: Früher Beartrend verliert seine Fortsetzung",
    "summary": "Ein erster Pullback kann statt Anschluss eine Balance bilden.",
    "section": "Lernfall 9",
    "scenario": "c23-35",
    "paragraphs": [
      "Ein starker früher Verkäuferimpuls erreicht einen tiefen Preisbereich. Der erste Rücklauf sieht zunächst wie eine Bearflag aus, liefert aber keinen unmittelbaren neuen Tiefanschluss.",
      "Die nächste Folge bleibt eng und bildet dann ein höheres Tief. Rechts brechen Käufer über die Balance aus; die ursprüngliche Verkäuferhypothese wird damit neu geprüft.",
      "Ein geplantes Shortsignal und eine tatsächlich ausgelöste Order sind getrennt zu führen. Die frühe Richtung schreibt das spätere Tagesbild nicht fest."
    ],
    "callout": "Fehlenden Verkäuferanschluss als neue Information nutzen.",
    "takeaways": [
      "Ein erster Pullback kann statt Anschluss eine Balance bilden.",
      "Die nächste Folge bleibt eng und bildet dann ein höheres Tief.",
      "Fehlenden Verkäuferanschluss als neue Information nutzen."
    ],
    "prompt": "Was verlangt die Käuferfolge nach dem höheren Tief?",
    "answers": [
      {
        "label": "Einen sicheren Long ohne Schutz.",
        "explanation": "Auch die neue Käuferidee kann scheitern."
      },
      {
        "label": "Eine Neubewertung des ursprünglichen Beartrendplans.",
        "explanation": "Richtig. Fehlenden Verkäuferanschluss als neue Information nutzen."
      },
      {
        "label": "Dass jedes frühe Verkaufssignal richtig gewesen sein muss.",
        "explanation": "Die spätere Struktur hat sich verändert."
      }
    ],
    "correct": 1
  },
  {
    "number": 36,
    "title": "Lernfall 9: Projektionen mit verschiedenen Ankern",
    "summary": "Zielrechnung und Zielbesuch einzeln prüfen.",
    "section": "Lernfall 9",
    "scenario": "c23-36",
    "paragraphs": [
      "Für einen Umkehranstieg können die Höhe der Anfangsbewegung oder die Länge des Käuferimpulses als verschiedene Projektionsanker dienen. Diese Rechnungen ergeben nicht automatisch denselben Preis.",
      "Im Beispiel reicht die Anfangsstrecke von fünfzig bis dreißig. Zwanzig Einheiten über fünfzig ergeben siebzig. Ein anderer Spike von vierzig bis fünfundfünfzig projiziert ab fünfundfünfzig bis siebzig; ein ab fünfzig angesetztes Folgebein ergibt dagegen fünfundsechzig.",
      "Die Panels zeigen die ausdrücklich bezeichneten Anker und eine spätere Rückgabe. Ein Tagesbar aus denselben OHLC-Daten zeigt den Schluss im mittleren Bereich, ohne die inneren Swings zu erklären."
    ],
    "callout": "Start, Länge und Ansatzpunkt jeder Projektion nennen.",
    "takeaways": [
      "Zielrechnung und Zielbesuch einzeln prüfen.",
      "Im Beispiel reicht die Anfangsstrecke von fünfzig bis dreißig.",
      "Start, Länge und Ansatzpunkt jeder Projektion nennen."
    ],
    "prompt": "Warum muss ein Ansatzpunkt ausdrücklich genannt werden?",
    "answers": [
      {
        "label": "Jede Projektion ist automatisch das Tageshoch.",
        "explanation": "Sie kann verfehlt werden."
      },
      {
        "label": "Ein Tagesbar verrät die komplette Intraday-Reihenfolge.",
        "explanation": "Er verdichtet nur Open, Hoch, Tief und Schluss."
      },
      {
        "label": "Die gleiche Strecke kann ab unterschiedlichen Preisen unterschiedliche Ziele ergeben.",
        "explanation": "Richtig. Start, Länge und Ansatzpunkt jeder Projektion nennen."
      }
    ],
    "correct": 2
  },
  {
    "number": 37,
    "title": "Lernfall 10: Wedgeformen korrigieren nur seitwärts",
    "summary": "Drei Anläufe allein bestätigen keinen Gegentrend.",
    "section": "Lernfall 10",
    "scenario": "c23-37",
    "paragraphs": [
      "Ein ruhiger Käuferkanal bildet mehrere höhere Hochs, die wie eine Wedge aussehen. Nach dem letzten Anlauf folgen aber nur kleine seitliche Bars.",
      "Rechts setzt der Anstieg wieder ein. Der Gegenhandel hat vor der Fortsetzung kaum tiefere Preise durchgesetzt; ein kleiner Stop hätte deshalb noch keinen überzeugenden Shortplan geschaffen.",
      "Prüfe die Wirkung nach dem Muster. Wenn eine erwartete größere Korrektur ausbleibt, muss der Gegenhandelsplan angepasst oder verworfen werden."
    ],
    "callout": "Musterform an ihrer tatsächlichen Folge messen.",
    "takeaways": [
      "Drei Anläufe allein bestätigen keinen Gegentrend.",
      "Rechts setzt der Anstieg wieder ein.",
      "Musterform an ihrer tatsächlichen Folge messen."
    ],
    "prompt": "Was zeigt die kleine seitliche Reaktion?",
    "answers": [
      {
        "label": "Bisher wenig nachhaltige Verkäuferwirkung.",
        "explanation": "Richtig. Musterform an ihrer tatsächlichen Folge messen."
      },
      {
        "label": "Einen sicheren starken Beartrend.",
        "explanation": "Der Preis gewinnt kaum Raum nach unten."
      },
      {
        "label": "Eine Pflicht, jeden weiteren höheren Hochpunkt zu shorten.",
        "explanation": "Die Form allein trägt diesen Plan nicht."
      }
    ],
    "correct": 0
  },
  {
    "number": 38,
    "title": "Lernfall 10: Nachrichtenreaktion und zu früh enger Schutz",
    "summary": "Barabschluss und Schutzbezug bleiben getrennte Entscheidungen.",
    "section": "Lernfall 10",
    "scenario": "c23-38",
    "paragraphs": [
      "Ein laufender Ereignisbar fällt stark, erholt sich aber bis zum Abschluss. Danach entwickelt sich ein höheres Tief mit einem neuen Käuferausbruch.",
      "Der nachfolgende Bar kann unter das Tief des Entry-Bars fallen, während das Tief des ursprünglichen Signalbars hält. Ein sofort dort angezogener Stop wäre ein anderer, engerer Plan.",
      "Das Diagramm zeigt die zwei Schutzbezüge ausdrücklich. Ein weiter entfernter ursprünglicher Schutz muss bereits zur Positionsgröße passen und darf nicht erst nach dem Rücklauf erfunden werden."
    ],
    "callout": "Signalbar-Schutz nicht mit Entry-Bar-Schutz verwechseln.",
    "takeaways": [
      "Barabschluss und Schutzbezug bleiben getrennte Entscheidungen.",
      "Der nachfolgende Bar kann unter das Tief des Entry-Bars fallen, während das Tief des ursprünglichen Signalbars hält.",
      "Signalbar-Schutz nicht mit Entry-Bar-Schutz verwechseln."
    ],
    "prompt": "Welcher Stop gehört zum hier dargestellten ursprünglichen Plan?",
    "answers": [
      {
        "label": "Ein beliebig weiter Schutz erst nach dem Rücklauf.",
        "explanation": "Das wäre keine vorab begrenzte Position."
      },
      {
        "label": "Der vorab festgelegte Schutz unter dem Signalbar.",
        "explanation": "Richtig. Signalbar-Schutz nicht mit Entry-Bar-Schutz verwechseln."
      },
      {
        "label": "Automatisch jeder neue Entry-Bar-Tiefpunkt.",
        "explanation": "Das würde den Plan nachträglich verengen."
      }
    ],
    "correct": 1
  },
  {
    "number": 39,
    "title": "Lernfall 11: Opening-Balance und geplante Positionsumkehr",
    "summary": "Eine Umkehrorder schließt zuerst die vorhandene Position.",
    "section": "Lernfall 11",
    "scenario": "c23-39",
    "paragraphs": [
      "Eine kleine Eröffnungsbalance bricht zunächst nach oben aus. Danach fällt die Folge unter den bekannten unteren Rand und entkräftet den Longplan.",
      "Bei einer gehaltenen Longposition von eins und einer gewünschten neuen Shortposition von eins verkauft eine vollständig ausgeführte Umkehrorder zwei: eins schließt den Long, eins eröffnet den Short.",
      "Die Zahl zwei ist hier eine Nettopositionsrechnung und keine Aufforderung, bei jedem Verlust die neue Exposition zu verdoppeln. Schutz, Orderstatus und Gegenorderstreichung gehören zum Plan."
    ],
    "callout": "Schließen und Neueröffnen bei Umkehrorders getrennt rechnen.",
    "takeaways": [
      "Eine Umkehrorder schließt zuerst die vorhandene Position.",
      "Bei einer gehaltenen Longposition von eins und einer gewünschten neuen Shortposition von eins verkauft eine vollständig ausgeführte Umkehrorder zwei: eins schließt den Long, eins eröffnet den Short..",
      "Schließen und Neueröffnen bei Umkehrorders getrennt rechnen."
    ],
    "prompt": "Welche Position bleibt nach Verkauf von zwei aus Long eins?",
    "answers": [
      {
        "label": "Short zwei.",
        "explanation": "Ein Teil schließt zuerst den bestehenden Long."
      },
      {
        "label": "Eine unbegrenzt verdoppelte neue Position.",
        "explanation": "Die Zielposition bleibt hier ausdrücklich eins."
      },
      {
        "label": "Short eins, bei vollständiger Ausführung.",
        "explanation": "Richtig. Schließen und Neueröffnen bei Umkehrorders getrennt rechnen."
      }
    ],
    "correct": 2
  },
  {
    "number": 40,
    "title": "Lernfall 11: Größere Gegenreaktion und späteres Scheitern",
    "summary": "Starker Beartrend und klassischer Small-Pullback-Tag sind nicht identisch.",
    "section": "Lernfall 11",
    "scenario": "c23-40",
    "paragraphs": [
      "Ein früher größerer Rücklauf macht den Tag weniger typisch für eine durchgehend winzige Gegenbewegung. Die größere Verkäuferstruktur kann trotzdem bestehen bleiben.",
      "Später erreicht eine zweibeinige Gegenreaktion einen höheren Bereich und scheitert an einem Doppeltest. Ein weiterer Umkehrversuch am Tief wird von neuem Verkäuferanschluss abgelöst.",
      "Nach einem ersten Durchschnittstest und einer Gegenstrecke ist eine längere Korrektur als Alternative mitzudenken. Weder Wedge noch expanding Bottom garantieren die Umkehr; ein gescheiterter Boden verlangt einen neuen Plan."
    ],
    "callout": "Etikett, tatsächliche Gegenstrecke und neuer Anschluss getrennt prüfen.",
    "takeaways": [
      "Starker Beartrend und klassischer Small-Pullback-Tag sind nicht identisch.",
      "Später erreicht eine zweibeinige Gegenreaktion einen höheren Bereich und scheitert an einem Doppeltest.",
      "Etikett, tatsächliche Gegenstrecke und neuer Anschluss getrennt prüfen."
    ],
    "prompt": "Was entscheidet nach dem späten Bodenversuch?",
    "answers": [
      {
        "label": "Der tatsächliche Käufer- oder Verkäuferanschluss nach dem Versuch.",
        "explanation": "Richtig. Etikett, tatsächliche Gegenstrecke und neuer Anschluss getrennt prüfen."
      },
      {
        "label": "Der Mustername garantiert eine Umkehr.",
        "explanation": "Auch benannte Umkehrmuster können scheitern."
      },
      {
        "label": "Ein früher größerer Rücklauf verbietet jeden Beartrend.",
        "explanation": "Ein starker Trend kann größere einzelne Korrekturen enthalten."
      }
    ],
    "correct": 0
  }
];

export const chapterTwentyThreeLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-23-${number}`;
  return {
    id: `price-action-trends.chapter-23.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 23 · ${d.section}`,
    sourceAnchors: [`Kapitel 23 · ${d.section}`, d.title, d.takeaways[0]],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 23 · Trends ab Eröffnung',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.title, scenario: d.scenario,
        caption: 'Eigenes schematisches Beispiel mit erfundenen relativen Preisen. Linien und Kerzen zeigen Lernlogik, keine realen Kurse oder Handelssignale.',
        observations: d.takeaways },
      { id: `${key}-question`, type: 'question', title: 'Rückgaben, Auslösung und Trendwirkung beurteilen',
        prompt: d.prompt, correctOptionId: `choice-${d.correct}`,
        options: d.answers.map((answer, index) => ({ id: `choice-${index}`, ...answer })) },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
});
