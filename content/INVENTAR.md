# Inventar – Bestand https://pz-design.de/

Abgerufen am 01.10.2026. Die Domain liefert die Website **Maydonoz Döner Deutschland** aus
(canonical: `https://maydonozdoner.de/`). Wörtliche Inhalte je Seite: siehe `content/<seite>.md`.

## Seiten

| URL | Status | Datei | title |
|---|---|---|---|
| `/` | 200 | `startseite.md` | Maydonoz Döner \| Franchise & Systemgastronomie |
| `/ueber-uns/` | 200 | `ueber-uns.md` | Über uns, Vision & Spezialitäten \| Maydonoz Döner Deutschland |
| `/filialen/` | 200 | `filialen.md` | Maydonoz Döner Niederlassungen \| Interaktiver Filialfinder & Standorte |
| `/news/` | 200 | `news.md` | Nachrichten & Neuigkeiten \| Maydonoz Döner Deutschland |
| `/kontakt/` | 200 | `kontakt.md` | Kundenkontaktformular \| Maydonoz Döner Deutschland |
| `/feedback/` | 200 | `feedback.md` | Feedback & Gästezufriedenheit \| Maydonoz Döner Deutschland |
| `/speisekarte/` | **404** | – | in Navigation/Footer verlinkt, existiert nicht |
| `/franchise/` | **404** | – | in Navigation/Footer verlinkt, existiert nicht |
| `/naehrwerte/` | **404** | – | in Navigation verlinkt, existiert nicht |
| `/karriere/` | **404** | – | in Navigation verlinkt, existiert nicht |
| `/impressum/` | **404** | – | im Footer verlinkt, existiert nicht |
| `/datenschutz/` | **404** | – | im Footer/Formularen verlinkt, existiert nicht |

## SEO (global)
- `theme-color`: **#FAC014** (Markenfarbe, auch in CSS als Hover-/Akzentfarbe)
- `og:image` / Logo: `https://maydonozdoner.de/gelbeslogo.png`
- `og:locale`: de_DE, `twitter:card`: summary_large_image
- JSON-LD `FastFoodRestaurant` (Startseite): Name „Maydonoz Döner Deutschland“, Adresse Kurfürstendamm 194, 10707 Berlin, Tel. +49301234567, priceRange €
- robots.txt: `Allow: /`, Sitemap `https://maydonozdoner.de/sitemap-index.xml`
- Hintergrundfarbe Bestand: `#060505`, Karten `#121215` / `#0c0c0e`

## Globale Inhalte
- **Navigation:** STARTSEITE · UNTERNEHMEN (Über uns, Nachrichten / Neuigkeiten, Karriere / Jobs) · NIEDERLASSUNGEN · FRANCHISE · MENÜS (Gesamte Speisekarte, Nährwerte & Allergene) · KONTAKT (Kontaktformular, Feedback) · Button „FILIALE SUCHEN!“
- **Footer:** Slogan „Echter Genuss beginnt mit Tradition“, Social (Facebook, YouTube, Instagram, X, LinkedIn), Quick Links, Öffnungszeiten (Montag – Freitag 10:00 Uhr – 23:00 Uhr / Samstag – Sonntag 11:00 Uhr – 00:00 Uhr), Kontakt (+49 (0) 30 1234 567, info@maydonozdoner.de, Kurfürstendamm 194, 10707 Berlin, Deutschland), Copyright „© 2026 Maydonoz Döner Systemgastronomie. Alle Rechte vorbehalten.“
- **Standort-Radar-Popup** (auf allen Seiten): 8 Filialen mit Suche und Stadtfilter.
- **Hero auf allen Seiten:** H1 „Maydonoz Döner — Die führende internationale Döner-Systemgastronomie“ + Video `/videos/HomeHero.webm`.

## Datenbestände
- **8 Filialen** (Name, Stadt, NEU-Badge, Adresse, Öffnungszeiten, Telefon, Ausstattung, Lieferdienst-Link) → `src/data/stores.ts`
- **5 Neuheiten** (Startseite) + **4 Spezialitäten** (Über uns) → `src/data/menu.ts`
- **6 Säulen/Leitprinzipien** (Über uns) → `src/data/pillars.ts`
- **16 News** (Datum, Titel, Kategorie; kein Teaser/Detailseite) → `src/data/news.ts`
- **6 Wochenangebote** (Startseite) – nur Platzhaltertext „TITEL / Beschreibung folgt.“

## Medien
| Datei (neu) | Quelle | Größe |
|---|---|---|
| `src/assets/bilder/hero1,2,4,6,7,8.webp` | `/bilder/heroN.webp` | ~1900×850–990 |
| `src/assets/bilder/banner-2,3,5.webp` | `/_astro/banner-N…webp` | ~1900×840–980 |
| `src/assets/konzept/konsept1–6.webp`, `about-kitchen.webp` | `/_astro/…` | 300×300 (Original nicht abrufbar) |
| `src/assets/brand/gelbeslogo.png` | `/gelbeslogo.png` | 97×94 |
| `src/assets/brand/bg-desktop.jpg`, `bg-mobile.jpg` | `/Background/…` | 2048 / 828 px |
| `src/assets/brand/hero-poster.jpg` | Standbild aus `HomeHero.webm` (Sek. 3) | 1920×1080 |
| `public/videos/HomeHero.webm` | `/videos/HomeHero.webm` | 3840×2160, 6 MB |
| `public/favicon*`, `apple-touch-icon*`, `android-chrome-*`, `site.webmanifest` | Root | – |

## Externe Ziele (verlinkt, keine Einbindung)
maydonozdoner.com/gel-al-menuler/, lieferando.de, wolt.com, ubereats.com, Google Maps (Routen), Facebook, YouTube, Instagram, X, LinkedIn.
