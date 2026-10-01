// Globale Inhalte – wörtlich aus dem Bestand (pz-design.de)

export const site = {
  name: 'Maydonoz Döner',
  heroTitle: 'Maydonoz Döner — Die führende internationale Döner-Systemgastronomie',
  slogan: 'Echter Genuss beginnt mit Tradition',
  cta: { label: 'FILIALE SUCHEN!', href: '/filialen/' },
  copyright: '© 2026 Maydonoz Döner Systemgastronomie. Alle Rechte vorbehalten.',
  copyrightShort: '© Maydonoz Döner',
  logoAlt: 'Maydonoz Döner Siegel',
  homeAria: 'Maydonoz Döner Startseite',
  skipLink: 'Direkt zum Inhalt springen',
  ogImage: 'https://maydonozdoner.de/gelbeslogo.png',
} as const;

export interface NavChild {
  label: string;
  href: string;
}
export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

// Nur Ziele, die im Bestand existieren (404-Seiten entfernt, siehe ENTSCHEIDUNGEN.md)
export const nav: NavItem[] = [
  { label: 'STARTSEITE', href: '/' },
  {
    label: 'UNTERNEHMEN',
    href: '/ueber-uns/',
    children: [
      { label: 'Über uns', href: '/ueber-uns/' },
      { label: 'Nachrichten / Neuigkeiten', href: '/news/' },
    ],
  },
  { label: 'NIEDERLASSUNGEN', href: '/filialen/' },
  {
    label: 'KONTAKT',
    href: '/kontakt/',
    children: [
      { label: 'Kontaktformular', href: '/kontakt/' },
      { label: 'Feedback', href: '/feedback/' },
    ],
  },
];

export const quickLinks: NavChild[] = [
  { label: 'Startseite', href: '/' },
  { label: 'Über uns', href: '/ueber-uns/' },
  { label: 'Filialen', href: '/filialen/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const contact = {
  heading: 'Kontakt',
  phone: '+49 (0) 30 1234 567',
  phoneHref: 'tel:+49301234567',
  email: 'info@maydonozdoner.de',
  address: 'Kurfürstendamm 194, 10707 Berlin, Deutschland',
};

export const hours = {
  heading: 'Öffnungszeiten',
  rows: [
    { days: 'Montag – Freitag', time: '10:00 Uhr – 23:00 Uhr' },
    { days: 'Samstag – Sonntag', time: '11:00 Uhr – 00:00 Uhr' },
  ],
};

export type SocialKey = 'facebook' | 'youtube' | 'instagram' | 'x' | 'linkedin';
export const social: { key: SocialKey; label: string; name: string; href: string }[] = [
  { key: 'facebook', name: 'Facebook', label: 'Maydonoz Döner auf Facebook', href: 'https://www.facebook.com/maydonozdoner/' },
  { key: 'youtube', name: 'YouTube', label: 'Maydonoz Döner auf YouTube', href: 'https://www.youtube.com/channel/UCuwInHmBkGmV7DoFDYDxFSw' },
  { key: 'instagram', name: 'Instagram', label: 'Maydonoz Döner auf Instagram', href: 'https://www.instagram.com/maydonozdoner/?hl=tr' },
  { key: 'x', name: 'X', label: 'Maydonoz Döner auf X', href: 'https://x.com/maydonozdonertr' },
  { key: 'linkedin', name: 'LinkedIn', label: 'Maydonoz Döner auf LinkedIn', href: 'https://www.linkedin.com/company/maydonoz-d%C3%B6ner/' },
];

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FastFoodRestaurant',
  name: 'Maydonoz Döner Deutschland',
  url: 'https://maydonozdoner.de/',
  logo: 'https://maydonozdoner.de/gelbeslogo.png',
  image: 'https://maydonozdoner.de/gelbeslogo.png',
  description:
    'Maydonoz Döner — Die führende internationale Döner-Systemgastronomie mit über 250 Standorten. 100% zertifiziertes Halal-Fleisch, frisch gebackenes Lavaş & lukrative Franchise-Möglichkeiten.',
  servesCuisine: ['Türkisch', 'Döner Kebab', 'Halal', 'Systemgastronomie'],
  priceRange: '€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kurfürstendamm 194',
    addressLocality: 'Berlin',
    postalCode: '10707',
    addressCountry: 'DE',
  },
  telephone: '+49301234567',
};
