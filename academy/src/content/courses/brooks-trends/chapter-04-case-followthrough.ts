import type { Lesson } from '../../types';

export const chapterFourCaseFollowthroughLessons = [
  {
    id: 'brooks-trends.chapter-04.lesson-25',
    title: 'Chartfall 4.1: Fill, Follow-through und die Setups 4–5',
    summary:
      'Wie aus Bar 3 nach dem Fill ein Signal-Bar wird und ii sowie Breakout-Pullback das zweite Aufwärtsbein strukturieren.',
    durationMinutes: 12,
    xp: 50,
    sourceUnit: 'Kapitel 4 · Chartfall 4.1 · Ausführung und Folge-Setups',
    sourceAnchors: [
      'Buy-Stop oberhalb von Bar 3 wird im nächsten Bar ausgelöst',
      'Bar der Auslösung als Entry-Bar',
      'Bull-Trendbar zwei Bars später als Follow-through',
      'Bar 4 als Entry-Bar aus einem ii-Setup für das zweite Aufwärtsbein',
      'Bar 5 als Entry-Bar nach einem Inside-Bar-Breakout-Pullback',
      'Körper der beiden Pause-Bars liegen innerhalb ihrer Vorgänger und wirken funktional wie ii',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-25-explain',
        type: 'explanation',
        eyebrow: 'Chartfall 4.1 · Was nach Bar 3 geschieht',
        title: 'Erst Ausführung und Anschluss machen aus der Idee eine belastbare Sequenz',
        paragraphs: [
          'Der Buy-Stop über Bar 3 wird im nächsten Bar erreicht. In diesem Moment ändern sich die Rollen: Bar 3 wird rückblickend zum Signal-Bar, während der aktuelle Bar zum Entry-Bar wird. Der Markt hat die bullische Zurückweisung damit zumindest um einen kleinen Schritt bestätigt.',
          'Zwei Bars später schließt ein ordentlicher Bull-Trendbar und liefert Follow-through. Dieser Anschluss ist wichtiger als ein bloßes kurzes Überschreiten des Signal-Bar-Hochs. Er zeigt, dass Käufer weitere Preise durchsetzen und der Ausbruch nicht sofort vollständig zurückgenommen wird.',
          'Bar 4 gehört bereits zu einem neuen Setup. Eine ii-Kompression bereitet den Versuch eines zweiten Aufwärtsbeins vor. Der Einstieg entsteht damit nicht mehr direkt aus der ursprünglichen Trendwende, sondern aus einer Pause nach der ersten bullischen Bewegung.',
          'Bar 5 folgt auf einen Inside-Bar-Breakout-Pullback. Der Markt überschreitet die Kompression zunächst nur knapp, zieht zurück und startet erneut. Die Körper der beiden Pause-Bars liegen jeweils innerhalb ihrer Vorgänger und verhalten sich dadurch funktional ähnlich wie ein ii.',
          'Die Fallstudie zeigt, warum ein Chart mehrere Setups nacheinander enthält. Bar 3 handelt die mögliche Umkehr; Bars 4 und 5 handeln spätere Fortsetzungsversuche. Obwohl alle Long sind, beruhen sie auf unterschiedlichen Informationen und besitzen andere Risiken.',
        ],
        callout:
          'Ein guter Trade besteht nicht nur aus dem Signal-Bar: Fill, Follow-through und spätere Folge-Setups erzählen die vollständige Marktgeschichte.',
      },
      {
        id: 'chapter-04-25-diagram',
        type: 'diagram',
        title: 'Die zweite Hälfte des Chartfalls als Rollenkette',
        scenario: 'figure-41-followthrough',
        caption:
          'Nach dem Buy-Stop über Bar 3 folgen der Entry-Bar, ein kräftiger Anschluss sowie zwei neue Setups für den nächsten Aufwärtsschub.',
        observations: [
          'Der Fill macht Bar 3 rückwirkend zum Signal-Bar.',
          'Der spätere Bull-Bar bestätigt die Long-Seite mit Follow-through.',
          'Das ii vor Bar 4 komprimiert die erste Aufwärtsbewegung.',
          'Der Breakout-Pullback vor Bar 5 schafft einen neuen Test und Wiedereinstieg.',
          'Jede Rolle beschreibt ein Ereignis in der Sequenz, nicht nur eine Kerzenform.',
        ],
      },
      {
        id: 'chapter-04-25-compare',
        type: 'comparison',
        title: 'Drei Long-Einstiege, drei verschiedene Informationsstände',
        columns: [
          {
            title: 'Bar 3 · ursprüngliche Umkehr',
            tone: 'warning',
            points: [
              'vorheriger Bärentrend noch relevant',
              'starker Reversal-Bar an zwei Tests nötig',
              'höchste Beweislast der drei Setups',
            ],
          },
          {
            title: 'Bars 4–5 · Fortsetzung',
            tone: 'positive',
            points: [
              'erste bullische Bewegung bereits sichtbar',
              'Kompression oder Pullback verbessert die Lage',
              'Ziel ist das nächste Aufwärtsbein',
            ],
          },
        ],
      },
      {
        id: 'chapter-04-25-question',
        type: 'question',
        title: 'Warum ist Bar 4 ein neues Setup?',
        prompt:
          'Nach dem Follow-through komprimiert der Markt in einem ii und bricht erneut nach oben aus. Was handelt der Einstieg bei Bar 4?',
        options: [
          {
            id: 'second-leg',
            label: 'Eine Fortsetzung in ein mögliches zweites Aufwärtsbein',
            explanation:
              'Richtig. Die erste bullische Reaktion existiert bereits; das ii bereitet den nächsten Schub vor.',
          },
          {
            id: 'original',
            label: 'Noch einmal exakt dieselbe ursprüngliche Trendwende',
            explanation:
              'Der Informationsstand hat sich verändert: Umkehr und erster Anschluss sind bereits sichtbar.',
          },
          {
            id: 'short',
            label: 'Einen sicheren Countertrend-Short',
            explanation:
              'Der Ausbruch aus dem ii erfolgt hier in Richtung der neuen bullischen Bewegung.',
          },
        ],
        correctOptionId: 'second-leg',
      },
      {
        id: 'chapter-04-25-recap',
        type: 'recap',
        title: 'Vom Umkehrversuch zur Fortsetzungsstruktur',
        points: [
          'Der Fill macht Bar 3 zum Signal-Bar und den aktuellen Bar zum Entry-Bar.',
          'Follow-through zeigt Akzeptanz in der neuen Richtung.',
          'Das ii vor Bar 4 bereitet ein zweites Aufwärtsbein vor.',
          'Der Breakout-Pullback vor Bar 5 schafft ein weiteres Fortsetzungs-Setup.',
          'Gleiche Handelsrichtung bedeutet nicht automatisch gleiche Setup-Logik.',
        ],
      },
    ],
  },
] satisfies Lesson[];
