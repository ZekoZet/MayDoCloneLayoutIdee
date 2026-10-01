import type { ImageMetadata } from 'astro';
import hero1 from '../assets/bilder/hero1.webp';
import hero2 from '../assets/bilder/hero2.webp';
import hero4 from '../assets/bilder/hero4.webp';
import hero6 from '../assets/bilder/hero6.webp';
import hero7 from '../assets/bilder/hero7.webp';
import hero8 from '../assets/bilder/hero8.webp';

export interface MenuItem {
  id: string;
  badge: string;
  title: string;
  text?: string;
  image: ImageMetadata;
  alt: string;
}

// Startseite „Unser Menu / NEUHEITEN“ – Texte wörtlich
export const novelties = {
  eyebrow: 'Unser Menu',
  heading: 'NEUHEITEN',
  cta: { label: 'zur Speisekarte', href: 'https://maydonozdoner.com/gel-al-menuler/' },
  items: [
    {
      id: 'duerum',
      badge: '45 CM',
      title: 'SPEZIALSAUCE XLARGE DÜRÜM',
      text: 'Wahlweise mit feinstem Hähnchen- oder Rindfleisch, würziger Spezialsauce und knusprigen Pommes im 45cm Riesen-Fladenbrot.',
      image: hero1,
      alt: 'SPEZIALSAUCE XLARGE DÜRÜM',
    },
    {
      id: 'maytako',
      badge: 'KNUSPRIG',
      title: 'DORITOS® MAY TAKO',
      text: 'Knusprige Taco-Schale mit original Doritos-Chips, zartem Dönerfleisch, geschmolzenem Cheddar und frischen Zwiebeln.',
      image: hero7,
      alt: 'DORITOS® MAY TAKO',
    },
    {
      id: 'teller',
      badge: 'TELLERGERICHT',
      title: 'MAYDONOZ DÖNER TELLER',
      text: 'Köstliches Dönerfleisch (Hähnchen oder Kalb) auf Brotstücken mit gebräunter Butter, cremigem Joghurt & gegrilltem Gemüse.',
      image: hero6,
      alt: 'MAYDONOZ DÖNER TELLER',
    },
    {
      id: 'snackbox',
      badge: 'SNACKS',
      title: 'FINGERFOOD & SNACK BOX',
      text: 'Bester Fingerfood-Mix mit knusprigen Mozzarella-Sticks, Chili-Cheese-Nuggets, Zwiebelringen & knusprigen Pommes Frites.',
      image: hero8,
      alt: 'FINGERFOOD & SNACK BOX',
    },
    {
      id: 'dessert',
      badge: 'NEUHEIT',
      title: 'PREMIUM DESSERT-BECHER',
      text: 'Cremige Dessertbecher in den beliebten Sorten Himbeere, feine Schokolade, Pistazie, Karamell & erfrischende Zitrone.',
      image: hero4,
      alt: 'PREMIUM DESSERT-BECHER',
    },
  ] satisfies MenuItem[],
};

// Über uns „Unsere Spezialitäten“ – Texte wörtlich
export const specialties = {
  eyebrow: 'Unsere Spezialitäten',
  heading: 'UNSERE BELIEBTESTEN GERICHTE',
  items: [
    { id: 'spezial-duerum', badge: 'Signature Spezialität', title: 'SPEZIALSAUCE DÜRÜM', image: hero1, alt: 'SPEZIALSAUCE DÜRÜM' },
    { id: 'maytako', badge: 'Knuspriger Taco', title: 'DORITOS® MAYTAKO', image: hero7, alt: 'DORITOS® MAYTAKO' },
    { id: 'burger', badge: 'Neuer Geschmack', title: 'MAYDONOZ BURGER', image: hero2, alt: 'MAYDONOZ BURGER' },
    { id: 'iskender', badge: 'Traditioneller Teller', title: 'ISKENDER KEBAB', image: hero6, alt: 'ISKENDER KEBAB' },
  ] satisfies MenuItem[],
};
