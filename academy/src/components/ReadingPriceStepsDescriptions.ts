export const priceStepDescriptions = {
  'rc4-range': 'Eigene Arvo-Geschäfte mit Range-Schwelle 0,30 Euro: vier abgeschlossene Bars mit Mengen 8/6/5/8 Aktien; fünfter mit drei Aktien offen. Ganzgeschäftsregel, Euro je Aktie, keine feste Zeitdauer.',
  'rc4-renko': 'Eigenes Renko-Modell: Anker 100,00, Stein 0,20 Euro, Zwei-Stein-Umkehr. Fünf fertige Steine aus G4, G9, G13, G14 und G14. Die berechnete Grenze 99,80 ist nicht als Geschäft belegt.',
  'rc4-reversal': 'Zwischenstand bis G11: letzter Aufwärtsstein 100,20 bis 100,40. Fortsetzung ab 100,60, Umkehr ab 100,00. G11 bei 100,30 löst keine Umkehr aus. Eigene Zwei-Stein-Regel, Euro je Aktie.',
} as const;
