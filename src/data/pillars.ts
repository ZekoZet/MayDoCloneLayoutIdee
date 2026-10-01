// Über uns „Unsere Säulen“ – Texte wörtlich

export type PillarIcon = 'shield' | 'leaf' | 'spark' | 'handshake' | 'chart' | 'store';

export interface Pillar {
  number: string;
  category: string;
  title: string;
  text: string;
  standard: string;
  icon: PillarIcon;
}

export const pillarsIntro = {
  eyebrow: 'Unsere Säulen',
  heading: 'STRATEGISCHE LEITPRINZIPIEN & QUALITÄT',
  text: '100% Halal-Fleisch, ISO 22000 & HACCP Kühlkette, frische Petersilie und gelebte Gastfreundschaft.',
  standardLabel: 'Standard',
};

export const pillars: Pillar[] = [
  {
    number: '01',
    category: 'HYGIENE & STANDARDS',
    title: 'ISO 22000 & HACCP KÜHLKETTE',
    text: 'Lückenlos überwachte Produktionsprozesse vom Schlachthof bis zur Filiale. Wir setzen auf 100% zertifiziertes Halal-Fleisch ohne Kompromisse bei Frische und Sicherheit.',
    standard: '100% ZERTIFIZIERT',
    icon: 'shield',
  },
  {
    number: '02',
    category: 'GESCHMACK & REZEPTUR',
    title: 'DIE GEHEIME MAYDONOZ-SAUCE',
    text: 'Täglich erntefrische glatte Petersilie kombiniert mit unserer geschützten Kräuter-Gewürz-Marinade. Ein unverwechselbares Geschmacksprofil, das Generationen begeistert.',
    standard: 'ORIGINAL REZEPT',
    icon: 'leaf',
  },
  {
    number: '03',
    category: 'INNOVATION & F&E',
    title: 'PRODUKTENTWICKLUNG DER ZUKUNFT',
    text: 'Mit Kreationen wie dem 45cm XL-Dürüm und dem knusprigen Doritos® MayTako setzen unsere Produktentwickler kontinuierlich neue Maßstäbe im Fast-Casual-Segment.',
    standard: 'TRENDSETTER',
    icon: 'spark',
  },
  {
    number: '04',
    category: 'PARTNERSCHAFT',
    title: 'GEGENSEITIGES VERTRAUEN',
    text: 'Wir verstehen Franchising als echtes Teamwork auf Augenhöhe. Transparente Abrechnung, erstklassige Schulungen und kontinuierlicher Support sichern den gemeinsamen Erfolg.',
    standard: 'TEAMWORK',
    icon: 'handshake',
  },
  {
    number: '05',
    category: 'RENTABILITÄT',
    title: 'HOCHRENTABLE STORE-INVESTITIONEN',
    text: 'Durchdachte Kostenstrukturen, optimierte Küchenabläufe und zentrale Beschaffungsvorteile maximieren den Ertrag jedes einzelnen Standorts ab Tag eins.',
    standard: 'ROI-OPTIMIERT',
    icon: 'chart',
  },
  {
    number: '06',
    category: 'NEXT-GEN GASTRO',
    title: 'MODERNE SYSTEMGASTRONOMIE',
    text: 'Stilvolles Raumdesign mit edlen Holz- und Metallelementen, digitale Bestellprozesse und ein schneller, freundlicher Service schaffen ein rundum hochwertiges Ambiente.',
    standard: 'SMART DINING',
    icon: 'store',
  },
];
