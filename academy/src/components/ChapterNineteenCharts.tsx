import type { ChartScenarioId, ChapterNineteenScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
export interface TeachingLine {
  start: readonly [index: number, price: number]; end: readonly [index: number, price: number];
  kind: 'trend' | 'channel' | 'reference' | 'average'; label?: string;
}
interface Panel { title: string; note: string; bars: readonly Bar[]; lines: readonly TeachingLine[]; focus: readonly number[]; }
interface Definition { heading: string; panels: readonly [Panel, Panel]; footer: string; description: string; }

// Original synthetic paths. Shared data also preserves before/after replay continuity.
const bars = (points: readonly number[]): Bar[] => points.slice(1).map((close, i) =>
  [points[i], Math.max(points[i], close) + 2, Math.min(points[i], close) - 2, close]);
const mirror = (values: readonly Bar[]): Bar[] => values.map(([o, h, l, c]) => [100-o, 100-l, 100-h, 100-c]);
const level = (values: readonly Bar[], price: number, label: string, start = 0): TeachingLine =>
  ({ start: [start, price], end: [values.length-1, price], kind: 'reference', label });
const slope = (start: readonly [number, number], end: readonly [number, number], kind: 'trend' | 'channel'): TeachingLine => ({start, end, kind});
const panel = (title: string, note: string, values: readonly Bar[], levels: readonly (readonly [number, string])[] = [], focus: readonly number[] = [], extra: readonly TeachingLine[] = []): Panel =>
  ({title, note, bars: values, lines: [...levels.map(([price, label]) => level(values, price, label)), ...extra], focus});
const average = (values: readonly Bar[], history: readonly number[], period: number): TeachingLine[] => {
  const closes = [...history, ...values.map((bar) => bar[3])];
  const means = values.map((_, i) => closes.slice(history.length+i-period+1, history.length+i+1).reduce((sum,v)=>sum+v,0)/period);
  return means.slice(1).map((value,i)=>({start:[i,means[i]],end:[i+1,value],kind:'average', ...(i===0 ? {label:`SMA ${period}`} : {})}));
};
const withAverage = (value: Panel, history: readonly number[], period: number): Panel =>
  ({...value, lines:[...value.lines, ...average(value.bars,history,period)]});
const define = (heading: string, left: Panel, right: Panel, footer: string): Definition => ({heading, panels:[left,right],footer,
  description:`Eigenes schematisches Beispiel: links ${left.title} (${left.note}), rechts ${right.title} (${right.note}). Gepunktet: Preisreferenz; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter Durchschnitt. ${footer}`});

const up = bars([20,31,43,56,67,79]);
const down = mirror(up);
const swings = bars([22,40,32,51,43,63,54,76]);
const calm: Bar[] = Array.from({length:12},(_,i)=>[30+3*i,35+3*i,29+3*i,32+3*i]);
const tight: Bar[] = [[20,31,20,30],[30,42,30,41],[41,53,40,52],[52,64,52,63],[63,75,62,74]];
const overlap = bars([28,40,33,44,35,45,37,48]);
const bodyGap: Bar[] = [[32,42,31,40],[43,52,39,50],[50,61,49,59]];
const fullGap: Bar[] = [[32,42,31,40],[43,52,43,50],[50,61,49,59]];
const functional: Bar[] = [[32,44,31,42],[42,61,41,59],[59,67,57,65],[65,71,60,69]];
const measure: Bar[] = [[34,50,33,48],[48,66,47,64],[64,65,54,56],[56,73,55,71]];
const closedMeasure: Bar[] = [measure[0],measure[1],[64,65,49,52],[52,70,51,68]];
const micro: Bar[] = [[20,40,19,38],[38,57,37,55],[55,65,42,63]];
const touching: Bar[] = [micro[0],micro[1],[55,65,40,63]];
const gapHistory = [13,15,17,19,21,23,25,27,29,31];
const gap: Bar[] = Array.from({length:20},(_,i)=>[30+2*i,34+2*i,29+2*i,33+2*i]);
const gapTest: Bar[] = [...gap,[71,72,56,59],[59,67,58,65],[65,66,52,55],[55,68,54,66],[66,78,65,76]];
const pause: Bar[] = [...up,[79,84,74,78],[78,81,69,79],[79,83,75,81],[81,90,80,88]];
const h2: Bar[] = [[22,40,21,38],[38,57,37,55],[55,68,54,66],[66,67,51,54],[54,59,49,57],[57,62,52,60],[60,61,46,50],[50,64,48,62],[62,76,61,74]];
const against: Bar[] = [...up,[79,80,59,62],[62,68,61,66],[66,67,55,59],[59,77,58,75],[75,86,74,84]];
const mature = bars([22,42,36,57,49,73,64,94,77,63]);
const balance = bars([30,46,39,55,46,64,54,75,57,66,49,62,53]);
const reversal: Bar[] = [...down,[21,40,20,38],[38,41,29,31],[31,44,30,42],[42,43,19,22],[22,23,11,13]];
const dayStart: Bar[] = [[24,29,23,27],[43,52,42,50],[50,56,49,54],[54,55,48,50],[50,51,41,44],[44,60,43,58],[58,72,57,70],[70,80,69,78]];
const legs = bars([60,48,39,45,50,43,35,41,52,58,62,66,70]);
const aggregates = (values: readonly Bar[], count: number): Bar[] => {
  if (values.length % count !== 0) throw new Error('Incomplete synthetic aggregation');
  return Array.from({length:values.length/count},(_,i)=> {
    const group=values.slice(i*count,(i+1)*count);
    return [group[0][0],Math.max(...group.map(b=>b[1])),Math.min(...group.map(b=>b[2])),group.at(-1)![3]];
  });
};
const first: Bar[] = [...up,[79,81,67,72],[72,86,71,84]];
const six: Bar[] = [[63,66,60,64],[64,67,61,63],[63,66,60,64],[64,66,61,65],[65,67,61,64],[64,66,60,63],[63,64,56,58],[58,68,57,66]];
const dojis: Bar[] = [[48,53,47,50],[50,54,48,51],[51,53,48,50],[50,63,49,61],[61,62,47,49],[49,50,39,41],[41,54,40,52]];
const attempts: Bar[] = [[62,64,49,51],[51,65,50,54],[54,55,46,48],[48,56,47,53],[53,54,44,46],[46,55,45,52],[52,53,42,45],[45,52,44,50],[50,51,41,44],[44,55,43,53],[53,65,52,63]];
const finalFlag: Bar[] = [...up,[79,80,72,75],[75,84,74,82],[82,83,73,76],[76,87,75,85],[85,95,84,93]];
const wedge = bars([24,43,36,58,48,71,63,78,72,88]);
const bearish: Bar[] = [[84,86,71,73],[73,78,72,76],[76,77,61,63],[63,73,62,71],[71,73,55,57],[57,62,56,60],[60,61,47,49],[49,63,48,61],[61,62,40,42],[42,47,41,45],[45,46,33,35],[35,43,34,41],[41,42,25,27]];
const below: Bar[] = Array.from({length:12},(_,i)=>[74-3*i,75-3*i,68-3*i,70-3*i]);
const bearHistory = [100,98,96,94,92,90,88,86,84,82];
const bearRally: Bar[] = [...below,[37,45,36,43],[43,52,42,50],[50,62,49,60],[60,70,59,68],[68,79,67,77]];
const touchModel: Bar[] = [[30,40,29,40],[41,51,41,50],[50,61,49,60],[60,70,59,68],[68,81,67,79]];
const equalModel: Bar[] = [touchModel[0],[40,51,40,50],...touchModel.slice(2)];
const nextDay: Bar[] = [[46,58,45,56],[56,67,55,65],[65,69,64,67],[67,68,50,52],[52,59,51,57],[57,58,42,44],[44,51,43,49],[49,50,31,33]];

export const chapterNineteenCharts: Record<ChapterNineteenScenarioId, Definition> = {
  "c19-01": define("Stärkemerkmale gemeinsam einordnen", panel('Gerichtete Kontrolle','viel Gewinn, geringe Rückgabe',up), panel('Mehr Gegenhandel','überlappende Bewegungen',overlap), "Mehr passende Merkmale sind keine gemessene Trefferquote"),
  "c19-02": define("Großes Eröffnungsgap und unterschiedliche Folgen", panel('Gap bleibt erhalten','Anschluss oberhalb des alten Bereichs',dayStart.slice(0,3),[[27,'vorheriger Schluss']],[1,2]), panel('Gap wird zurückgenommen','frühe kräftige Gegenreaktion',[dayStart[0],[43,46,31,33],[33,36,24,26]],[[27,'vorheriger Schluss']],[1,2]), "Früher Sprung und spätere Tagesform getrennt lesen"),
  "c19-03": define("Höhere oder tiefere Swings derselben Größe", panel('Bullenfolge','Hochs und Tiefs werden höher',swings,[],[2,4,6]), panel('Bärenfolge','Hochs und Tiefs werden tiefer',mirror(swings),[],[2,4,6]), "Lokale und größere Bezugspunkte nicht vermischen"),
  "c19-04": define("Viele Körper mit der Richtung, einige dagegen", panel('Käuferfolge','Gegenbars bleiben kleine Pausen',swings), panel('Verkäuferfolge','auffällige Käuferbars ohne großen Anschluss',bearish,[],[1,3,7,11]), "Eine einzelne Gegenfarbe beendet die größere Kontrolle nicht"),
  "c19-05": define("Körperüberlappung und ganze Barspannen", panel('Kaum Körperüberlappung','Tails können dennoch zurückreichen',tight), panel('Viel Körperüberlappung','mehr wiederholter Gegenhandel',overlap), "Open und Close definieren den Körper; High und Low die volle Spanne"),
  "c19-06": define("Kleine Tails und gerichtete Körper", panel('Bullenfall','Open am Tief, Close nahe Hoch',tight), panel('Bärenfall','Open am Hoch, Close nahe Tief',mirror(tight)), "Dringlichkeit ist eine Interpretation der sichtbaren Barqualität"),
  "c19-07": define("Körpergap oder voller Spannenabstand?", panel('Open 43 nach Close 40','Tief 39 reicht in die alte Spanne',bodyGap,[[40,'alter Schluss 40']],[1]), panel('Neues Tief 43 über Hoch 42','ganze Spannen bleiben getrennt',fullGap,[[42,'altes Hoch 42']],[1]), "Gap-Art ausdrücklich benennen statt verschiedene Geometrien vermischen"),
  "c19-08": define("Trendbar verschiebt die Handelslage", panel('Kräftiger Ausbruchsbar','Körper durchläuft den Preisbereich',functional.slice(0,2),[[44,'alte Grenze 44']],[1]), panel('Neue Zone bleibt darüber','spätere Rückgabe ist klein',functional,[[44,'alte Grenze 44']],[2,3]), "Funktionaler Gap bedeutet nicht, dass im Körper nie gehandelt wurde"),
  "c19-09": define("Rücktest hält Abstand zum Ausbruchspunkt", panel('Abstand bleibt offen','Ausbruch 50, Testtief 54',measure,[[50,'Ausbruch 50'],[54,'Test 54']],[2]), panel('Abstand wird geschlossen','späterer Testtiefbereich 49',closedMeasure,[[50,'Ausbruch 50']],[2]), "Erhaltener Abstand ist ein Merkmal, kein garantiertes Kursziel"),
  "c19-10": define("Mikro-Gap zwischen den äußeren Bars", panel('Zwei Einheiten Abstand','Hoch davor 40, Tief danach 42',micro,[[40,'davor 40'],[42,'danach 42']],[1,2]), panel('Grenzvariante Berührung','Tief danach genau bei 40',touching,[[40,'Berührung 40']],[2]), "Der kräftige Mittelbar handelt durch den Vergleichsbereich"),
  "c19-11": define("Ruhiger Trend oder wiederholte Beschleunigung?", panel('Viele kleine Bars','stetiger Raumgewinn',calm), panel('Reife große Schübe','mehr Aufmerksamkeit für Korrektur',mature,[],[6,7,8]), "Ruhig ist nicht automatisch schwach; groß ist nicht automatisch sicher"),
  "c19-12": define("Äußere Überschreitung und kleine Zeitkorrektur", panel('Kleiner Überschuss','seitliche Pause statt Gegenstrecke',pause,[],[5,6,7],[slope([4,81],[7,83],'channel')]), panel('Großer Überschuss','kräftige Rückgabe verändert die Lage',mature,[],[6,7,8],[slope([0,42],[8,82],'channel')]), "Die Reaktion bestimmt das Gewicht der äußeren Grenzverletzung"),
  "c19-13": define("Linienbruch: seitlich oder kräftig dagegen?", panel('Mehr Zeit als Preis zurück','alte Linie bleibt sichtbar',pause,[],[5,6,7],[slope([2,41],[7,80],'trend')]), panel('Gerichtete Gegenfolge','mehr Preisrückgabe',against,[],[5,6,7],[slope([0,18],[8,82],'trend')]), "Die alte Linie nicht heimlich an das spätere Ergebnis anpassen"),
  "c19-14": define("Keil-Umkehrversuch mit scheiternder Gegenfolge", panel('Dritter Schub und Gegenbar','Gegenidee ist noch offen',wedge.slice(0,8),[],[2,4,6,7]), panel('Neuer Käuferdurchbruch','Gegenidee bekommt keinen Anschluss',wedge,[[80,'Signalbereich 80']],[8]), "Form und erfolgreiche Umkehr sind unterschiedliche Beobachtungen"),
  "c19-15": define("Zwanzig vollständig getrennte Bars", withAverage(panel('Bullenfolge','alle Tiefs über dem SMA',gap),gapHistory,10), withAverage(panel('Bärenfolge','alle Hochs unter dem SMA',mirror(gap)),gapHistory.map(v=>100-v),10), "Zwanzig Fünf-Minuten-Bars entsprechen hundert Minuten"),
  "c19-16": define("Schöne Gegenbars, wenig Platz zum Gegenziel", panel('Auffällige Käuferreaktion','Verkäufer gewinnen danach wieder Raum',bearish,[[80,'weites Gegenziel']],[3,4]), panel('Auffälliger Gegenbar','größere Käuferfolge kehrt zurück',against,[[40,'weites Gegenziel']],[5,8]), "Vorher festgelegten Raum prüfen statt perfekte spätere Wendepunkte wählen"),
  "c19-17": define("Die erhoffte große Rückgabe bleibt aus", panel('Kleine seltene Pausen','Trend läuft überwiegend weiter',pause), panel('Ruhige Beharrlichkeit','viele kleine neue Preise',calm), "Das Gefühl von Dringlichkeit ersetzt keinen ausführbaren Auftrag"),
  "c19-18": define("Signalbarfarbe und Trendkontrolle trennen", panel('Deutliches Käufersignal','High 2 im größeren Bullenfall',h2,[],[7,8]), panel('Grüner Verkaufssignalbar','Outside-Down-Auslösung folgt',[[80,82,67,69],[69,75,68,73],[73,77,60,62],[62,70,61,68],[68,72,50,52],[52,54,42,44]],[],[3,4]), "Schwacher lokaler Auslöser und starke größere Kontrolle sind vereinbar"),
  "c19-19": define("Schlüsse und Körper arbeiten höher", panel('Gerichtete Eigenschaften','kleine Bars verschieben sich',calm), panel('Nur lokaler Gegenabschnitt','Käuferphase im großen Bärenverlauf',bearish,[],[5,7]), "Zeitraum und Strukturgröße für jede Aussage benennen"),
  "c19-20": define("Zwei Gegenbeine als wiederkehrende Flagge", panel('Erster zweibeiniger Pullback','Zwischenreaktion trennt die Beine',against), panel('Gespiegelte Trendflagge','größerer Bärenkontext',mirror(against)), "Ein wiederholter Ablauf garantiert die nächste Folge nicht"),
  "c19-21": define("Gegenschluss oder fortgesetzter Gegenhandel?", withAverage(panel('Ein Schluss darunter','Käufer kehren rasch zurück',gapTest,[],[20,21]),gapHistory,10), withAverage(panel('Zwei Verkäufer-Schlüsse','mehr sichtbare Gegenstärke',[...gap,[71,72,56,59],[59,60,47,50],[50,51,39,41]],[],[20,21]),gapHistory,10), "Schlussprüfung ist nicht dieselbe wie vollständige Gap-Bar-Trennung"),
  "c19-22": define("Mehrere bekannte Preisbereiche werden überschritten", panel('Erste Preisbarrieren','alte Bereiche vor dem Durchbruch',up.slice(0,3),[[42,'erster Bereich'],[55,'zweiter Bereich']]), panel('Kräftiger Anschluss','neue Preise weiter außerhalb',up,[[42,'erster Bereich'],[55,'zweiter Bereich']],[3,4]), "Anschluss zählt mehr als die Anzahl gezeichneter Referenzen"),
  "c19-23": define("Gegenspike bekommt keine große Fortsetzung", panel('Kräftiger Gegenstoß','große Umkehr noch unbestätigt',against.slice(0,8),[],[5,6,7]), panel('Käufer kehren zurück','Gegenstoß bleibt eine Flagge',against,[],[8,9]), "Die Flaggenlesart entsteht erst mit der sichtbaren Folge"),
  "c19-24": define("Mehr lokale Details auf kleinerer Zeitebene", panel('Zwölf Detailbars','zwei Beine und kleine Zwischenreaktionen',legs), panel('Vier größere Bars','je drei Einzelbars zusammengefasst',aggregates(legs,3)), "Mehr sichtbare Formen erhöhen weder Pflichtorders noch Risikobudget"),
  "c19-25": define("Frühe Stärke und späterer zweiseitiger Handel", panel('Anfangs gerichtet','kleinere regelmäßige Rückgabe',balance.slice(0,7)), panel('Später breiter überlappend','Gegenraum und schwache neue Tests',balance,[],[8,9,10,11]), "Neue Daten verändern den Kontext, ohne alte Entscheidungen zu löschen"),
  "c19-26": define("Gap, lokaler Fehlausbruch und Eröffnungstest", panel('Früher Hochbruch kehrt zurück','lokale Verkäuferreaktion',dayStart.slice(0,5),[[29,'Vortag oben 29'],[42,'Eröffnungstief 42']],[3,4]), panel('Käufer verlassen die Eröffnung','neuer Anschluss nach dem Test',dayStart,[[56,'Eröffnungshoch 56'],[42,'Eröffnungstief 42']],[5,6]), "Die Gaprichtung ergänzt die Hypothese, ersetzt aber keine Auslösung"),
  "c19-27": define("Zwei Beine werden in der Detailansicht sichtbar", panel('Einzelbars','Abwärtsbein, Reaktion, zweites Bein',legs,[],[1,4,5]), panel('Aggregierte Hülle','Innensequenz nicht vollständig ablesbar',aggregates(legs,3)), "Aus einem Tail allein lässt sich keine sichere Intrabar-Reihenfolge ableiten"),
  "c19-28": define("Erste Käuferauslösung nach kleinem Rücklauf", panel('Starker frischer Spike','erster Gegenbar ist nur lokal',first.slice(0,6),[],[5]), panel('High-1-Fortsetzung','neuer Käuferdurchbruch',first,[[82,'Auslösung 82']],[6]), "Lokale Abwärtsauslösung ist noch kein gleichwertiger großer Shortplan"),
  "c19-29": define("Zweiter Gegenabschnitt nach Verkäufer-Spike", panel('Gegenstoß und Zwischenreaktion','mehr Struktur als ein einzelner Bruch',against.slice(0,7),[],[5,6]), panel('Zweites Gegenbein','Flagge statt großer Bärenkanal möglich',against,[],[7,8,9]), "Kräftiger Gegenspike allein bestimmt nicht den gesamten Tag"),
  "c19-30": define("Sechs enge Bars vor dem kleinen Ausbruchsversuch", panel('Enge lokale Balance','sechs stark überlappende Bars',six.slice(0,6)), panel('Unterer Versuch kehrt zurück','Gegenzielraum bleibt begrenzt',six,[[60,'lokale Grenze 60']],[6,7]), "Lokale Range und größere Trendrichtung können gleichzeitig bestehen"),
  "c19-31": define("Erster zweibeiniger Durchschnittspullback", withAverage(panel('Vor dem Kontakt','zwanzig vollständige Gap-Bars',gap),gapHistory,10), withAverage(panel('Zwei Gegenbeine und Rückkehr','erst jetzt neue Käuferreaktion',gapTest,[],[20,21,22,23]),gapHistory,10), "Lange Vorgeschichte ist Kontext, keine neue Verlustfreigabe"),
  "c19-32": define("Lokale Hochumkehr ohne vorherige Verkäuferfolge", panel('Sieben Käuferbars','kaum sichtbare vorherige Gegenstärke',[[25,34,24,33],[33,42,32,41],[41,50,40,49],[49,58,48,57],[57,64,56,63],[63,70,62,69],[69,78,68,77]]), panel('Neuer Gegenbar am Hoch','große Umkehr weiter unbestätigt',[[25,34,24,33],[33,42,32,41],[41,50,40,49],[49,58,48,57],[57,64,56,63],[63,70,62,69],[69,78,68,77],[77,79,68,70],[70,85,69,83]],[],[7,8]), "Ein lokales Hoch ist noch nicht das bekannte endgültige Tageshoch"),
  "c19-33": define("Dojizone zieht beide Ausbruchsversuche zurück", withAverage(panel('Kleine Balance am SMA','Käuferausbruch wird zurückgenommen',dojis.slice(0,5),[[50,'Balance 50']],[3,4]),[40,43,46,48],5), withAverage(panel('Auch Verkäuferbruch kehrt zurück','erneute Rückkehr in die Überlappung',dojis,[[50,'Balance 50']],[5,6]),[40,43,46,48],5), "Outside-Form und tatsächlicher Anschluss sind verschiedene Dinge"),
  "c19-34": define("Schwacher späterer Test mit mehreren Versuchen", withAverage(panel('Vier Aufwärtsversuche','mehrere Rückgaben im Pullback',attempts,[[42,'Ausbruchspunkt 42'],[30,'großes Tief 30']], [1,3,5,9]),[74,72,70,68],5), withAverage(panel('Ein Bar ganz unter SMA','Hoch darunter, nicht nur Schluss',attempts,[[42,'Ausbruchspunkt 42'],[30,'großes Tief 30']],[0,8,9]),[74,72,70,68],5), "Geschlossener Abstand und neues höheres Tief sind vereinbar"),
  "c19-35": define("Direkter Vorbar als erster Versuch für High 2", panel('Erste Käuferauslösung','Rückgabe folgt danach',h2.slice(0,7),[],[5,6]), panel('Zweiter Käuferdurchbruch','derselbe Abschnitt weitergezählt',h2,[],[7,8]), "Zwischenreaktion statt willkürlicher Mindestdauer zählt die Versuche"),
  "c19-36": define("Final-Flag-Gegensignal bleibt ohne Auslösung", panel('Verkäufersignal tief bei 72','Shortstop bei 71 bleibt offen',finalFlag.slice(0,7),[[71,'Shortstop 71']],[5]), panel('Käuferfolge und zweites Gegenbein','keine Folgespanne erreicht 71',finalFlag,[[71,'Shortstop 71']],[7,8,9]), "Ein ungetriggertes Signal ist keine ausgeführte Verlustposition"),
  "c19-37": define("Keilförmiger Mikrokanal mit scheiterndem Gegensignal", panel('Lokaler Gegenbar','große Verkäuferfolge fehlt',wedge.slice(0,8),[[80,'Signalbereich 80']],[7]), panel('Kräftiger Käuferdurchbruch','Preis steigt durch die Gegenreferenz',wedge,[[80,'Signalbereich 80']],[8]), "Fremde Stops sind eine plausible Erklärung, keine sichtbare Positionsliste"),
  "c19-38": define("Äußerer Test und Zweibar-Käuferreaktion", panel('Schubgrenze überschritten','kleiner Gegenbruch danach',pause.slice(0,8),[],[5,6],[slope([4,81],[7,83],'channel'),slope([2,41],[7,80],'trend')]), panel('Käufer setzen sich wieder durch','zwei Käuferbars liefern neue Folge',pause,[],[7,8],[slope([4,81],[7,83],'channel'),slope([2,41],[7,80],'trend')]), "Äußere Grenze und innere Trendseite getrennt benennen"),
  "c19-39": define("Auffällige Gegenbars im großen Bärenverlauf", panel('Viele kleine Verkaufssignale','Trend bleibt abwärtsgerichtet',bearish,[],[1,3,5,7,11]), panel('Gescheiterter Käuferabschnitt','neuer Sell-Stop-Plan gesondert prüfen',bearish,[[47,'eigener Auslösebereich']],[7,8]), "Schöne Gegenform und größere Kontrolle müssen nicht übereinstimmen"),
  "c19-40": define("Lange Bärenkontrolle und spätere SMA-Ausnahme", withAverage(panel('Früher vollständig darunter','kein fortgesetzter Käuferabschnitt',below),bearHistory,10), withAverage(panel('Spätere größere Käuferfolge','mehrere Schlüsse und ein ganzer Bar darüber',bearRally,[],[13,14,15,16]),bearHistory,10), "Die spätere Ausnahme gehört erst ab ihrer sichtbaren Entstehung zum Plan"),
  "c19-41": define("Preise sind Daten, vermutete Motive sind Erklärung", panel('Sichtbare Verkäuferfolge','Hochs und Tiefs arbeiten tiefer',bearish), panel('Sichtbare kleine Rückgabe','keine Teilnehmerpositionen bekannt',mirror(calm)), "OHLC belegt weder Identität noch genaue Absicht handelnder Gruppen"),
  "c19-42": define("Limitpreis: nicht besucht oder nur berührt?", panel('Vorbar-Schluss 40','nächstes Tief 41 erreicht ihn nicht',touchModel,[[40,'Limit 40']],[1,3]), panel('Nächstes Tief genau 40','Preisberührung ohne Füllgarantie',equalModel,[[40,'Limit 40']],[1]), "Ein späterer Bar handelt unter seinem Vorbar-Schluss; Ausführung bleibt modellabhängig"),
  "c19-43": define("Neuer lokaler Käufer-Spike unter dem alten Hoch", panel('Vorheriger Bullenabschnitt','altes Hoch und Kanalstart bekannt',swings,[[78,'altes Hoch 78'],[38,'Kanalstart 38']]), panel('Folgetag nach Kanalbruch','neue Spitze bleibt unter 78',nextDay,[[78,'altes Hoch 78'],[38,'Kanalstart 38']],[2,3]), "Ähnliche lokale Barstärke kann in neuem Tageskontext anders enden"),
  "c19-44": define("Gescheiterte Rückkehr und zweite Abwärtsauslösung", panel('Früher Rückgewinnversuch','tieferes Hoch und Verkäufer-Spike',nextDay.slice(0,4),[[78,'altes Hoch 78']],[2,3]), panel('Käuferunterbrechung und neuer Short','zweite Auslösung im neuen Tag',nextDay,[[48,'neuer Auslösebereich']],[4,5]), "Gedrängte Positionierung bleibt Interpretation; Gegenanschluss ist sichtbar"),
  "c19-45": define("Dein Stärke-Protokoll vor den neuen Bars", panel('Bisherige Merkmale','Referenzen und Zeitebene festhalten',swings), panel('Neue Folge beurteilen','Stärke erhalten oder deutlich zweiseitiger?',balance,[],[8,9,10,11]), "Beschreibung, Order und begrenztes Risiko getrennt prüfen")
};

export const chapterNineteenDescriptions = Object.fromEntries(
  Object.entries(chapterNineteenCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterNineteenScenarioId, string>;

function PanelDrawing({ value, x }: { value: Panel; x: number }) {
  const width = 343;
  const y = (price: number) => 260 - price * 1.55;
  const spacing = (width - 52) / value.bars.length;
  const bodyWidth = Math.min(23, spacing * 0.48);
  const cx = (index: number) => x + 26 + (index + 0.5) * spacing;
  return <g>
    <rect className="chart-panel" x={x} y={65} width={width} height={230} rx={14} />
    <text className="chart-panel-title" x={x + width / 2} y={87} textAnchor="middle">{value.title}</text>
    {value.lines.map((line, index) => <g key={`line-${index}`}><line
      className="c19-teaching-line" data-kind={line.kind}
      x1={cx(line.start[0])} y1={y(line.start[1])}
      x2={cx(line.end[0])} y2={y(line.end[1])}
      stroke="currentColor" strokeWidth={2} opacity={0.65}
      strokeDasharray={line.kind === 'channel' ? '6 4' : line.kind === 'reference' ? '2 4' : line.kind === 'average' ? '8 3 2 3' : undefined} />{line.label ? <text className="chart-small" x={x + width - 18 - (index % 3) * 95} y={y(line.end[1]) - 5} textAnchor="end">{line.label}</text> : null}</g>)}
    {value.bars.map(([open, high, low, close], index) => {
      const tone = close >= open ? 'bull' : 'bear';
      const xBar = cx(index);
      return <g key={index}>
        {value.focus.includes(index) ? <rect className="chart-zone"
          x={xBar - bodyWidth / 2 - 7} y={y(high) - 8}
          width={bodyWidth + 14} height={y(low) - y(high) + 16} rx={6} /> : null}
        <line className={`candle-wick ${tone}`} x1={xBar} x2={xBar} y1={y(high)} y2={y(low)} />
        <rect className={`candle-body ${tone}`} x={xBar - bodyWidth / 2}
          y={Math.min(y(open), y(close))} width={bodyWidth}
          height={Math.max(3, Math.abs(y(open) - y(close)))} rx={2} />
      </g>;
    })}
    <text className="chart-small strong" x={x + width / 2} y={286} textAnchor="middle">{value.note}</text>
  </g>;
}

export function ChapterNineteenChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterNineteenCharts, scenario)) return null;
  const definition = chapterNineteenCharts[scenario as ChapterNineteenScenarioId];
  return <g className="chapter-nineteen-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((value, index) =>
      <PanelDrawing key={index} value={value} x={30 + index * 357} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}
