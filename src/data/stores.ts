// Filialen – Daten wörtlich aus /filialen/

export interface Store {
  id: string;
  name: string;
  city: string;
  isNew: boolean;
  address: string;
  hours: string;
  phone: string;
  phoneHref: string;
  features: string[];
  orderHref: string;
}

export const storesIntro = {
  eyebrow: 'Standorte & Filialen',
  heading: 'NIEDERLASSUNGEN',
  text: 'Finden Sie Ihren nächsten Maydonoz Döner Store in Ihrer Nähe mit Öffnungszeiten und Routenführung.',
  searchPlaceholder: 'Filiale nach Stadt, PLZ oder Straße suchen...',
  cityLabel: 'Stadt:',
  allLabel: 'Alle',
  foundSuffix: 'Standorte gefunden',
  halalNote: 'Alle Standorte 100% Halal zertifiziert',
  emptyTitle: 'Keine Filialen gefunden',
  emptyText: 'Bitte prüfen Sie Ihre Suchbegriffe oder wählen Sie „Alle".',
  newBadge: 'NEU',
  showOnMap: 'Auf Karte anzeigen',
  route: 'Route',
  order: 'Bestellen',
  mapHeading: 'INTERAKTIVE FILIALKARTE',
  mapText: 'Klicken Sie hier oder wählen Sie eine Filiale links aus, um die interaktive Karte mit GPS-Navigation zu laden.',
  mapButton: 'Karte laden',
};

const f3 = ['100% Halal', 'Sitzplätze', 'Lieferung'];
const f4 = [...f3, 'Parkplätze'];

export const stores: Store[] = [
  {
    id: 'berlin-alexanderplatz',
    name: 'Maydonoz Döner Berlin Alexanderplatz',
    city: 'Berlin',
    isNew: true,
    address: 'Dircksenstraße 92, 10179 Berlin',
    hours: 'Mo - So: 10:00 - 03:00 Uhr',
    phone: '+49 (0) 30 1234 5678',
    phoneHref: 'tel:+4903012345678',
    features: f3,
    orderHref: 'https://ubereats.com',
  },
  {
    id: 'duesseldorf-schadowstrasse',
    name: 'Maydonoz Döner Düsseldorf Schadowstraße',
    city: 'Düsseldorf',
    isNew: true,
    address: 'Schadowstraße 56, 40212 Düsseldorf',
    hours: 'Mo - So: 10:30 - 00:00 Uhr',
    phone: '+49 (0) 211 5566 7788',
    phoneHref: 'tel:+49021155667788',
    features: f3,
    orderHref: 'https://ubereats.com',
  },
  {
    id: 'frankfurt-flagship',
    name: 'Maydonoz Döner Frankfurt Flagship',
    city: 'Frankfurt am Main',
    isNew: true,
    address: 'Kaiserstraße 42, 60329 Frankfurt am Main',
    hours: 'Mo - So: 10:30 - 23:00 Uhr',
    phone: '+49 (0) 69 9876 5432',
    phoneHref: 'tel:+4906998765432',
    features: f4,
    orderHref: 'https://lieferando.de',
  },
  {
    id: 'koeln-schildergasse',
    name: 'Maydonoz Döner Köln Schildergasse',
    city: 'Köln',
    isNew: true,
    address: 'Schildergasse 84, 50667 Köln',
    hours: 'Mo - So: 10:00 - 01:00 Uhr',
    phone: '+49 (0) 221 4455 6677',
    phoneHref: 'tel:+49022144556677',
    features: f3,
    orderHref: 'https://lieferando.de',
  },
  {
    id: 'muenchen-hauptbahnhof',
    name: 'Maydonoz Döner München Hauptbahnhof',
    city: 'München',
    isNew: true,
    address: 'Bayerstraße 24, 80335 München',
    hours: 'Mo - So: 10:00 - 00:00 Uhr',
    phone: '+49 (0) 89 8765 4321',
    phoneHref: 'tel:+4908987654321',
    features: f3,
    orderHref: 'https://wolt.com',
  },
  {
    id: 'berlin-kudamm',
    name: "Maydonoz Döner Berlin Ku'damm",
    city: 'Berlin',
    isNew: false,
    address: 'Kurfürstendamm 194, 10707 Berlin',
    hours: 'Mo - So: 10:00 - 02:00 Uhr',
    phone: '+49 (0) 30 1234 5670',
    phoneHref: 'tel:+4903012345670',
    features: f3,
    orderHref: 'https://lieferando.de',
  },
  {
    id: 'hamburg-moenckebergstrasse',
    name: 'Maydonoz Döner Hamburg Mönckebergstraße',
    city: 'Hamburg',
    isNew: false,
    address: 'Mönckebergstraße 18, 20095 Hamburg',
    hours: 'Mo - So: 10:30 - 23:30 Uhr',
    phone: '+49 (0) 40 3322 1100',
    phoneHref: 'tel:+4904033221100',
    features: f4,
    orderHref: 'https://wolt.com',
  },
  {
    id: 'stuttgart-koenigstrasse',
    name: 'Maydonoz Döner Stuttgart Königstraße',
    city: 'Stuttgart',
    isNew: false,
    address: 'Königstraße 38, 70173 Stuttgart',
    hours: 'Mo - So: 11:00 - 23:00 Uhr',
    phone: '+49 (0) 711 9988 7766',
    phoneHref: 'tel:+49071199887766',
    features: f3,
    orderHref: 'https://lieferando.de',
  },
];

export const routeHref = (address: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

export const cities = [...new Set(stores.map((s) => s.city))].sort((a, b) => a.localeCompare(b, 'de'));
