// Nachrichten – Titel, Datum, Kategorie wörtlich aus /news/

export interface NewsItem {
  date: string;
  isoDate: string;
  title: string;
  category: string;
}

export const newsIntro = {
  eyebrow: 'Aktuelles & Presse',
  heading: 'NACHRICHTEN & NEUIGKEITEN',
  text: 'Bleiben Sie informiert über aktuelle Aktionen, neue Geschmackskreationen, Store-Eröffnungen und Auszeichnungen von Maydonoz Döner.',
  author: 'Maydonoz Döner',
  authorSuffix: 'am',
  comments: '0',
};

export const newsFilters = [
  'Alle',
  'Expansion & Filialen',
  'Produktneuheit & Geschmack',
  'Aktion & Kampagne',
  'Auszeichnung & Qualität',
];

export const news: NewsItem[] = [
  { date: '16. September 2026', isoDate: '2026-09-16', title: 'Maydonoz Döner: Neue Filiale in Ankara Mamak eröffnet!', category: 'expansion & filialen' },
  { date: '11. September 2026', isoDate: '2026-09-11', title: 'Neuer Geschmack bei Maydonoz Döner: Das MayBurrito ist da!', category: 'produktneuheit & geschmack' },
  { date: '08. September 2026', isoDate: '2026-09-08', title: 'Geschmacksinnovation: Das neue MayBurrito & knusprige Doritos® MayTako im Menü', category: 'produktneuheit & geschmack' },
  { date: '31. August 2026', isoDate: '2026-08-31', title: 'Maydonoz Döner eröffnet neue Filiale in Istanbul Maslak 1453', category: 'expansion & filialen' },
  { date: '27. August 2026', isoDate: '2026-08-27', title: 'Maydonoz Döner eröffnet neue Filiale im Einkaufszentrum Sakarya Cadde 54', category: 'expansion & filialen' },
  { date: '20. August 2026', isoDate: '2026-08-20', title: 'Geschmacksreise geht weiter: Neuer Store im Zentrum von Zonguldak eröffnet', category: 'expansion & filialen' },
  { date: '18. August 2026', isoDate: '2026-08-18', title: 'Maydonoz Döner eröffnet neuen Standort in Antalya Işıklar', category: 'expansion & filialen' },
  { date: '13. August 2026', isoDate: '2026-08-13', title: 'Neue Produktlinie bei Maydonoz Döner: Der Maydonoz Döner Burger', category: 'produktneuheit & geschmack' },
  { date: '13. August 2026', isoDate: '2026-08-13', title: 'Maydonoz bringt Freude: Food-Truck an 3 Standorten im Einsatz', category: 'aktion & kampagne' },
  { date: '01. August 2026', isoDate: '2026-08-01', title: 'Kult-Aktion: Jeden 7. des Monats – Maydonoz Döner feiert den Tag des Genusses', category: 'aktion & kampagne' },
  { date: '12. Mai 2026', isoDate: '2026-05-12', title: 'Zertifizierte Frische: Ausbau zentraler Logistik-Depots nach ISO 22000 & HACCP', category: 'qualität & standards' },
  { date: '15. März 2026', isoDate: '2026-03-15', title: 'Maydonoz Döner expandiert mit neuen Flagship-Stores in Deutschland', category: 'expansion & presse' },
  { date: '13. März 2026', isoDate: '2026-03-13', title: 'Döner trifft Taco: Neuer knuspriger Doritos® MayTako', category: 'produktneuheit & geschmack' },
  { date: '30. Juli 2025', isoDate: '2025-07-30', title: 'Neuer Schritt im Geschmack: MayPide jetzt in allen Filialen!', category: 'produktneuheit & geschmack' },
  { date: '14. März 2025', isoDate: '2025-03-14', title: 'A.C.E Awards 2025: Maydonoz Döner erhält Auszeichnung für Gästezufriedenheit', category: 'auszeichnung & qualität' },
  { date: '23. Mai 2024', isoDate: '2024-05-23', title: 'Weltweit führend: Maydonoz Döner auf globalem Expansionskurs', category: 'auszeichnung & qualität' },
];

export const press = {
  eyebrow: 'PRESSE- & MEDIENANFRAGEN',
  heading: 'Sie sind Journalist oder Redakteur?',
  text: 'Für Bildmaterial, hochauflösende Markenlogos, Pressemitteilungen oder Interviewanfragen wenden Sie sich bitte direkt an unsere Pressestelle.',
  cta: { label: 'Pressekontakt aufnehmen', href: '/kontakt/' },
};
