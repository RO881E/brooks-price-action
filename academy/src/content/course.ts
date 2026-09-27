import type { Course, Lesson } from './types';

const planned = (
  id: string,
  title: string,
  summary: string,
  sourceUnit: string,
): Lesson => ({
  id,
  title,
  summary,
  durationMinutes: 0,
  xp: 0,
  sourceUnit,
  status: 'planned',
  steps: [],
});

export const brooksTrendsCourse: Course = {
  id: 'brooks-trends',
  eyebrow: 'Buch 1 von 3 · Price Action',
  title: 'Trading Price Action Trends',
  subtitle:
    'Lerne, Kursbewegungen als fortlaufende Auktion zu lesen – vom einzelnen Bar bis zum vollständigen Trendtag.',
  sourceOrderNotice:
    'Der Lernpfad folgt der Reihenfolge des Buches. Kleine Lektionen ersetzen keine Inhalte, sondern machen sie schrittweise zugänglich.',
  units: [
    {
      id: 'brooks-trends.introduction',
      order: 1,
      kind: 'introduction',
      label: 'Einleitung',
      title: 'Wie Price Action gedacht wird',
      description:
        'Bevor einzelne Muster sinnvoll werden, brauchst du ein belastbares Modell für Markt, Wahrscheinlichkeit und Kontext.',
      estimatedLessonCount: 19,
      lessons: [
        {
          id: 'brooks-trends.introduction.lesson-01',
          title: 'Der Chart ist das Ergebnis',
          summary:
            'Warum ein Chart keine Meinung, sondern das sichtbare Ergebnis einer laufenden Auktion ist.',
          durationMinutes: 7,
          xp: 20,
          sourceUnit: 'Einleitung',
          status: 'published',
          steps: [
            {
              id: 'intro-01-explain',
              type: 'explanation',
              eyebrow: 'Grundmodell',
              title: 'Preis entsteht nur, wenn zwei Seiten handeln',
              paragraphs: [
                'Ein Kurs ist kein Urteil darüber, was ein Markt „wirklich wert“ ist. Er ist der Preis, zu dem sich Käufer und Verkäufer in diesem Moment auf eine Transaktion einigen. Jeder Bar verdichtet viele solcher Entscheidungen zu Open, High, Low und Close.',
                'Ein steigender Markt bedeutet deshalb nicht, dass es keine Verkäufer gibt. Es bedeutet, dass kaufwillige Marktteilnehmer aggressiver handeln oder höhere Preise akzeptieren. Auf der Gegenseite verkaufen andere Teilnehmer aus völlig unterschiedlichen Gründen: Gewinnmitnahme, Absicherung, kurzfristige Strategie oder eine abweichende Einschätzung.',
                'Für die Analyse ist entscheidend, was diese Auseinandersetzung im Kurs hinterlässt. Nachrichten und Erklärungen können helfen, ein Ereignis einzuordnen. Ob Käufer oder Verkäufer tatsächlich die Kontrolle gewinnen, zeigt sich jedoch erst in der Reaktion des Marktes.',
              ],
              callout:
                'Lies einen Bar nicht als Geschichte über eine einzelne Gruppe. Lies ihn als verdichtetes Ergebnis vieler konkurrierender Entscheidungen.',
            },
            {
              id: 'intro-01-diagram',
              type: 'diagram',
              title: 'Eine Auktion hinter jedem Bar',
              scenario: 'auction-balance',
              caption:
                'Aggressive Käufe heben den gehandelten Preis an; aggressive Verkäufe drücken ihn. Der Bar zeigt das Ergebnis, nicht die Motive jedes einzelnen Teilnehmers.',
              observations: [
                'Das Hoch zeigt, wie weit Käufer Preise anheben konnten, bevor Angebot wirksam wurde.',
                'Das Tief zeigt, wie weit Verkäufer drücken konnten, bevor Nachfrage wirksam wurde.',
                'Der Schlusskurs verrät, welche Seite am Ende des Zeitfensters mehr Kontrolle behielt.',
              ],
            },
            {
              id: 'intro-01-question',
              type: 'question',
              title: 'Was zählt für deine Entscheidung?',
              prompt:
                'Eine stark positive Nachricht erscheint. Der Markt eröffnet höher, wird sofort verkauft und schließt nahe dem Tagestief. Welche Information ist für einen kurzfristigen Price-Action-Trader am wichtigsten?',
              options: [
                {
                  id: 'headline',
                  label: 'Die positive Schlagzeile',
                  explanation:
                    'Die Nachricht erklärt den Anlass, aber nicht, ob Käufer zu den höheren Preisen weiter dominieren.',
                },
                {
                  id: 'reaction',
                  label: 'Die schwache Kursreaktion',
                  explanation:
                    'Richtig. Der Markt konnte das höhere Preisniveau nicht halten. Diese Reaktion ist unmittelbare Information über Angebot und Nachfrage.',
                },
                {
                  id: 'prediction',
                  label: 'Eine langfristige Prognose',
                  explanation:
                    'Ein langfristiges Szenario kann korrekt sein und trotzdem für die nächste Intraday-Entscheidung ungeeignet bleiben.',
                },
              ],
              correctOptionId: 'reaction',
            },
            {
              id: 'intro-01-recap',
              type: 'recap',
              title: 'Das nimmst du mit',
              points: [
                'Der Chart ist das Protokoll einer fortlaufenden Auktion.',
                'Jeder Bar enthält Information über den Kampf um Preisakzeptanz.',
                'Für kurzfristige Entscheidungen wiegt die tatsächliche Kursreaktion schwerer als eine isolierte Erklärung.',
              ],
            },
          ],
        },
        {
          id: 'brooks-trends.introduction.lesson-02',
          title: 'Wahrscheinlichkeit statt Gewissheit',
          summary:
            'Warum ein guter Trade verlieren und ein schlechter Trade gewinnen kann.',
          durationMinutes: 8,
          xp: 25,
          sourceUnit: 'Einleitung',
          status: 'published',
          steps: [
            {
              id: 'intro-02-explain',
              type: 'explanation',
              eyebrow: 'Trader-Gleichung',
              title: 'Ein Setup ist kein Versprechen',
              paragraphs: [
                'Price Action liefert keine sicheren Vorhersagen. Sie hilft dabei, mehrere mögliche Verläufe zu gewichten. Ein Setup ist gut, wenn die Kombination aus Wahrscheinlichkeit, möglichem Gewinn und möglichem Verlust langfristig vorteilhaft ist.',
                'Trefferquote allein reicht nicht. Eine Strategie kann häufig gewinnen und trotzdem Geld verlieren, wenn wenige Verluste sehr groß werden. Umgekehrt kann eine niedrigere Trefferquote profitabel sein, wenn Gewinner deutlich größer als Verlierer ausfallen.',
                'Die Qualität eines Trades wird deshalb am Entscheidungszeitpunkt beurteilt: Waren Kontext, Einstieg, Risiko und Ziel logisch? Das spätere Ergebnis ist wichtig für die Statistik, aber es schreibt die damalige Entscheidung nicht nachträglich um.',
              ],
              callout:
                'Guter Trade und Gewinner sind nicht dasselbe. Schlechter Trade und Verlierer ebenfalls nicht.',
            },
            {
              id: 'intro-02-diagram',
              type: 'diagram',
              title: 'Wahrscheinlichkeit bewegt sich auf einem Spektrum',
              scenario: 'probability-spectrum',
              caption:
                'Die meiste Zeit besitzt keine Seite einen überwältigenden Vorteil. Erst mehrere übereinstimmende Hinweise verschieben die Erwartung.',
              observations: [
                'Nahe 50:50 ist selektives Handeln wichtiger als eine Richtungsprognose.',
                'Starke Evidenz kann die Wahrscheinlichkeit verschieben, beseitigt das Gegenrisiko aber nie.',
                'Je kleiner der statistische Vorteil, desto wichtiger werden Kosten und konsequentes Risikomanagement.',
              ],
            },
            {
              id: 'intro-02-comparison',
              type: 'comparison',
              title: 'Zwei Wege zu positiver Erwartung',
              columns: [
                {
                  title: 'Höhere Trefferquote',
                  tone: 'positive',
                  points: [
                    'Gewinner und Verlierer ähnlich groß',
                    'braucht viele saubere Wiederholungen',
                    'ein zu großer Verlust kann viel zerstören',
                  ],
                },
                {
                  title: 'Größere Gewinner',
                  tone: 'neutral',
                  points: [
                    'mehrere kleine Verluste sind möglich',
                    'Gewinner müssen konsequent Raum erhalten',
                    'psychologisch oft schwerer auszuhalten',
                  ],
                },
              ],
            },
            {
              id: 'intro-02-question',
              type: 'question',
              title: 'Rechne nicht nur Treffer',
              prompt:
                'Von zehn gleich großen Trades gewinnen vier jeweils 100 Euro. Sechs verlieren jeweils 50 Euro. Wie ist das Ergebnis vor Kosten?',
              options: [
                {
                  id: 'loss',
                  label: '100 Euro Verlust',
                  explanation:
                    'Vier Gewinner ergeben 400 Euro. Sechs Verluste ergeben 300 Euro. Die Differenz ist positiv.',
                },
                {
                  id: 'flat',
                  label: 'Unverändert',
                  explanation:
                    'Eine Trefferquote unter 50 Prozent bedeutet nicht automatisch Breakeven oder Verlust.',
                },
                {
                  id: 'profit',
                  label: '100 Euro Gewinn',
                  explanation:
                    'Richtig. 400 Euro Gewinn minus 300 Euro Verlust ergeben 100 Euro vor Gebühren.',
                },
              ],
              correctOptionId: 'profit',
            },
            {
              id: 'intro-02-recap',
              type: 'recap',
              title: 'Das nimmst du mit',
              points: [
                'Jede Markteinschätzung bleibt probabilistisch.',
                'Trefferquote, durchschnittlicher Gewinn und durchschnittlicher Verlust gehören zusammen.',
                'Bewerte die Prozessqualität getrennt vom Ergebnis eines einzelnen Trades.',
              ],
            },
          ],
        },
        {
          id: 'brooks-trends.introduction.lesson-03',
          title: 'Trend, Range und Übergang',
          summary:
            'Die drei Zustände, zwischen denen sich jeder Chart fortlaufend bewegt.',
          durationMinutes: 9,
          xp: 25,
          sourceUnit: 'Einleitung',
          status: 'published',
          steps: [
            {
              id: 'intro-03-explain',
              type: 'explanation',
              eyebrow: 'Marktzustand',
              title: 'Nicht jedes gute Muster gehört in jedes Regime',
              paragraphs: [
                'In einem Trend akzeptiert der Markt fortlaufend neue Preise in eine Richtung. Rücksetzer bleiben begrenzt und werden wieder in Trendrichtung beantwortet. In einer Trading Range wird Preis außerhalb eines akzeptierten Bereichs dagegen häufig zurückgewiesen.',
                'Dazwischen liegen Übergänge. Ein Trend verliert Tempo, Bars überlappen stärker und beide Seiten schaffen erfolgreiche Gegenbewegungen. Oder eine Range bricht aus und der Markt beginnt, außerhalb des bisherigen Bereichs neue Preise zu akzeptieren.',
                'Der gleiche Signalbar kann deshalb völlig unterschiedliche Bedeutung haben. Ein bearisher Reversal-Bar am oberen Rand einer reifen Range ist etwas anderes als derselbe Bar mitten in einem starken Aufwärtstrend.',
              ],
              callout:
                'Zuerst Regime und Ort bestimmen, erst danach das einzelne Signal bewerten.',
            },
            {
              id: 'intro-03-diagram',
              type: 'diagram',
              title: 'Vom Trend über Balance zum neuen Impuls',
              scenario: 'trend-range-transition',
              caption:
                'Der Beispielverlauf wechselt nicht schlagartig die Identität. Überlappung und beidseitige Erfolge markieren den Übergang.',
              observations: [
                'Im Trend schließen Bars häufiger in Bewegungsrichtung.',
                'Im Übergang nehmen Überlappung und Tails zu.',
                'Eine Range wird erst durch Akzeptanz außerhalb ihrer Grenze wieder zum Trend.',
              ],
            },
            {
              id: 'intro-03-comparison',
              type: 'comparison',
              title: 'Handelslogik nach Regime',
              columns: [
                {
                  title: 'Trend',
                  tone: 'positive',
                  points: [
                    'Fortsetzung zunächst wahrscheinlicher',
                    'Pullbacks mit dem Trend bewerten',
                    'Gegenbewegung braucht zusätzliche Bestätigung',
                  ],
                },
                {
                  title: 'Trading Range',
                  tone: 'warning',
                  points: [
                    'Ausbrüche scheitern häufiger',
                    'Rand und Mitte unterscheiden',
                    'beide Richtungen bleiben glaubwürdig',
                  ],
                },
              ],
            },
            {
              id: 'intro-03-question',
              type: 'question',
              title: 'Kontext vor Kerzenform',
              prompt:
                'Ein einzelner bearisher Reversal-Bar erscheint mitten in einem starken Aufwärtstrend. Was ist die vorsichtigste erste Interpretation?',
              options: [
                {
                  id: 'short',
                  label: 'Sofortiger neuer Abwärtstrend',
                  explanation:
                    'Ein einzelner Gegenbar reicht in einem starken Trend selten für diese Schlussfolgerung.',
                },
                {
                  id: 'pullback',
                  label: 'Möglicher Beginn eines Pullbacks',
                  explanation:
                    'Richtig. Für eine echte Umkehr braucht es weitere strukturelle Bestätigung.',
                },
                {
                  id: 'ignore',
                  label: 'Der Bar enthält keine Information',
                  explanation:
                    'Auch wenn kein Short sinnvoll ist, kann der Bar auf nachlassendes Momentum oder einen Pullback hinweisen.',
                },
              ],
              correctOptionId: 'pullback',
            },
            {
              id: 'intro-03-recap',
              type: 'recap',
              title: 'Das nimmst du mit',
              points: [
                'Trend, Range und Übergang verlangen unterschiedliche Erwartungen.',
                'Überlappung und erfolgreiche Gegenbewegungen liefern Regimeinformation.',
                'Ein Signal erhält seine Bedeutung erst durch Kontext und Position im Chart.',
              ],
            },
          ],
        },
        planned(
          'brooks-trends.introduction.lesson-04',
          'Zeitebenen und Fraktalität',
          'Wie dieselbe Struktur je nach Zoom als Trend, Pullback oder Range erscheint.',
          'Einleitung',
        ),
        planned(
          'brooks-trends.introduction.lesson-05',
          'Disziplin und regelbasiertes Handeln',
          'Warum klare Prozesse wichtiger sind als die perfekte Vorhersage.',
          'Einleitung',
        ),
      ],
    },
    {
      id: 'brooks-trends.part-01-introduction',
      order: 2,
      kind: 'part-introduction',
      label: 'Teil I · Einführung',
      title: 'Die Grammatik der Price Action',
      description:
        'Marktteilnehmer, Stärkezeichen und die Zählweise für Korrekturbeine.',
      estimatedLessonCount: 12,
      lessons: [
        {
          id: 'brooks-trends.part-01-introduction.lesson-01',
          title: 'High und Low zählen',
          summary:
            'Eine nüchterne Sprache für erste, zweite und weitere Fortsetzungsversuche.',
          durationMinutes: 8,
          xp: 25,
          sourceUnit: 'Teil I – Einführung',
          status: 'published',
          steps: [
            {
              id: 'part-01-count-explain',
              type: 'explanation',
              eyebrow: 'Bar Counting',
              title: 'Gezählt werden Versuche, nicht einfach grüne oder rote Bars',
              paragraphs: [
                'In einer Abwärtsbewegung innerhalb eines übergeordneten Aufwärtstrends entsteht ein High 1, wenn erstmals ein Bar über das Hoch seines Vorgängers steigt. Setzt sich die Korrektur danach fort und startet ein neuer Aufwärtsversuch, entsteht ein High 2. Für Abwärtsversuche gilt die Logik spiegelbildlich als Low 1 und Low 2.',
                'Die Zählung beschreibt, wie oft der Markt versucht hat, die ursprüngliche Richtung wieder aufzunehmen. Sie ist kein automatisches Kaufsignal. Trendstärke, Ort, Signalqualität und Platz bis zum nächsten Hindernis bleiben entscheidend.',
                'Ein zweiter Versuch kann informativer sein, weil der erste Fehlschlag bereits schwache Marktteilnehmer gebunden hat. Trotzdem gewinnt High 2 oder Low 2 nie allein gegen einen klar ungeeigneten Kontext.',
              ],
              callout:
                'Die Zahl ordnet die Sequenz. Sie ersetzt nicht die Analyse des Regimes.',
            },
            {
              id: 'part-01-count-diagram',
              type: 'diagram',
              title: 'Zwei Fortsetzungsversuche innerhalb eines Pullbacks',
              scenario: 'high-low-count',
              caption:
                'Der erste Aufwärtsversuch scheitert. Nach einem weiteren Abwärtsbein markiert der nächste Bruch über ein Vorgängerhoch den zweiten Versuch.',
              observations: [
                'High 1 beginnt nach dem ersten Abwärtsbein.',
                'High 2 beginnt erst nach einem erneuten Abwärtsversuch.',
                'Die Zählung wird zurückgesetzt, wenn sich der strukturelle Kontext grundlegend ändert.',
              ],
            },
            {
              id: 'part-01-count-question',
              type: 'question',
              title: 'Was sagt High 2 wirklich aus?',
              prompt:
                'Welche Aussage trifft am besten zu?',
              options: [
                {
                  id: 'guarantee',
                  label: 'High 2 garantiert die Trendfortsetzung',
                  explanation:
                    'Kein einzelnes Price-Action-Muster garantiert einen Verlauf.',
                },
                {
                  id: 'attempt',
                  label: 'Es ist der zweite Aufwärtsversuch im Pullback',
                  explanation:
                    'Richtig. Die Bezeichnung beschreibt die Sequenz; die Qualität ergibt sich aus dem Kontext.',
                },
                {
                  id: 'two-bars',
                  label: 'Es sind genau zwei bullische Bars',
                  explanation:
                    'Die Anzahl bullischer Bars ist nicht das Kriterium. Gezählt werden Fortsetzungsversuche.',
                },
              ],
              correctOptionId: 'attempt',
            },
            {
              id: 'part-01-count-recap',
              type: 'recap',
              title: 'Das nimmst du mit',
              points: [
                'High/Low 1 und 2 zählen Versuche innerhalb einer Korrektur.',
                'Ein zweiter Versuch enthält mehr Sequenzinformation, ist aber kein Automatismus.',
                'Regime, Ort und Signalqualität bleiben übergeordnet.',
              ],
            },
          ],
        },
        planned(
          'brooks-trends.part-01-introduction.lesson-02',
          'Stärke ist eine Summe von Hinweisen',
          'Wie mehrere kleine Beobachtungen zu einer belastbaren Einschätzung werden.',
          'Teil I – Einführung',
        ),
      ],
    },
    {
      id: 'brooks-trends.chapter-01',
      order: 3,
      kind: 'chapter',
      label: 'Kapitel 1',
      title: 'Das Spektrum von Trend bis Range',
      description:
        'Charts bewegen sich nicht zwischen zwei starren Schubladen, sondern auf einem Kontinuum.',
      estimatedLessonCount: 5,
      lessons: [
        {
          id: 'brooks-trends.chapter-01.lesson-01',
          title: 'Ein Spektrum, keine Schubladen',
          summary:
            'Wie Trends kleinere Ranges und Ranges kleinere Trends enthalten.',
          durationMinutes: 8,
          xp: 30,
          sourceUnit: 'Kapitel 1',
          status: 'published',
          steps: [
            {
              id: 'chapter-01-spectrum-explain',
              type: 'explanation',
              eyebrow: 'Kapitel 1',
              title: 'Marktverhalten besitzt viele Zwischenstufen',
              paragraphs: [
                'Ein extremer Trend mit fast ununterbrochener Bewegung und eine extrem enge Trading Range sind seltene Endpunkte. Die meisten Charts liegen irgendwo dazwischen: ein Trend mit deutlichen Pullbacks, ein breiter Channel oder eine Range mit kräftigen einzelnen Beinen.',
                'Die Einordnung hängt außerdem vom Zeitrahmen ab. Was auf dem Fünf-Minuten-Chart wie ein vollständiger Abwärtstrend aussieht, kann auf dem Stundenchart nur ein Rücksetzer sein. Umgekehrt besteht eine mehrstündige Range aus vielen kleinen Trends.',
                'Deshalb ist die nützlichere Frage nicht nur „Trend oder Range?“, sondern: Wie trendstark oder wie zweiseitig ist der Markt gerade, und verändert sich dieser Zustand?',
              ],
              callout:
                'Regime ist eine abgestufte Einschätzung. Die Mitte des Spektrums ist häufiger als seine Extreme.',
            },
            {
              id: 'chapter-01-spectrum-diagram',
              type: 'diagram',
              title: 'Trendstärke nimmt ab, Überlappung nimmt zu',
              scenario: 'trend-range-transition',
              caption:
                'Der Verlauf beginnt gerichtet, wird zweiseitiger und verlässt die Balance später mit einem neuen Impuls.',
              observations: [
                'Große Körper und geringe Überlappung liegen näher am Trendextrem.',
                'Mehr Tails und Rückläufe verschieben den Markt Richtung Range.',
                'Ein Ausbruch zählt erst dann als neuer Trend, wenn Anschluss und Preisakzeptanz folgen.',
              ],
            },
            {
              id: 'chapter-01-spectrum-question',
              type: 'question',
              title: 'Welche Beschreibung ist präziser?',
              prompt:
                'Ein Markt steigt insgesamt, besitzt aber tiefe, überlappende Rücksetzer und häufige Gegenbewegungen. Wie würdest du ihn zunächst beschreiben?',
              options: [
                {
                  id: 'extreme',
                  label: 'Extrem starker Trend',
                  explanation:
                    'Tiefe Rücksetzer und starke Überlappung sprechen gegen das Trendextrem.',
                },
                {
                  id: 'broad',
                  label: 'Breiter bullischer Channel',
                  explanation:
                    'Richtig. Die übergeordnete Richtung ist aufwärts, gleichzeitig bleibt der Handel deutlich zweiseitig.',
                },
                {
                  id: 'flat',
                  label: 'Vollständig richtungslose Range',
                  explanation:
                    'Die steigende Gesamtstruktur enthält weiterhin gerichtete Information.',
                },
              ],
              correctOptionId: 'broad',
            },
            {
              id: 'chapter-01-spectrum-recap',
              type: 'recap',
              title: 'Das nimmst du mit',
              points: [
                'Trend und Range sind Endpunkte eines Spektrums.',
                'Jeder Zeitrahmen kann eine andere Ebene derselben Struktur zeigen.',
                'Überlappung, Pullbacktiefe und Anschlussbewegung helfen bei der Abstufung.',
              ],
            },
          ],
        },
        planned(
          'brooks-trends.chapter-01.lesson-02',
          'Marktträgheit praktisch lesen',
          'Warum Trends Fortsetzung und Ranges Rückkehr begünstigen.',
          'Kapitel 1',
        ),
        planned(
          'brooks-trends.chapter-01.lesson-03',
          'Struktur über mehrere Zeitebenen',
          'Trend, Pullback und Range gleichzeitig richtig einordnen.',
          'Kapitel 1',
        ),
      ],
    },
  ],
};

export const publishedLessons = brooksTrendsCourse.units.flatMap((unit) =>
  unit.lessons.filter((lesson) => lesson.status === 'published'),
);

export const publishedLessonIds = publishedLessons.map((lesson) => lesson.id);
