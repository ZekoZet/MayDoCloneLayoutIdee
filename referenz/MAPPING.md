# Mapping Vorlage → Bestandsinhalt

Farbentscheidung: Markenfarbe **#FAC014** (theme-color) ersetzt das Vorlagen-Orange; Hell-/Dunkelflächen und Textfarben aus der Vorlage.

## Global
| Vorlagen-Element | Inhalt (Bestand) | Hinweis |
|---|---|---|
| Nav HOME/GALLERY/NEWS/RESERVATION/CONTACT | STARTSEITE · UNTERNEHMEN (Über uns, Nachrichten / Neuigkeiten) · NIEDERLASSUNGEN · KONTAKT (Kontaktformular, Feedback) | nur existierende Seiten; Dropdowns wie Bestand |
| Button „BOOK A TABLE“ (Uhr-Icon) | „FILIALE SUCHEN!“ → `/filialen/` | Pin-Icon statt Uhr |
| Burger rechts | Mobiles Menü-Panel (Bestand „mobile-nav-panel“) | auch Desktop sichtbar wie Vorlage |
| Logo (in Vorlage keins sichtbar) | Siegel `gelbeslogo.png` links | Bestand hat Logo im Header |
| Footer „WHERE WE AT?“ | „Kontakt“: Kurfürstendamm 194, 10707 Berlin, Deutschland · Telefon | Überschrift aus Bestand |
| Footer „WORK HOURS“ | „Öffnungszeiten“: Montag – Freitag / Samstag – Sonntag | 1:1 wie Vorlage (2 Unterspalten, Zeit gelb) |
| Footer „SOCIAL NETWORKS“ | 5 Social-Links + info@maydonozdoner.de | Kreis-Icons |
| (neu) Footer-Spalte | Logo + „Echter Genuss beginnt mit Tradition“ + Quick Links | Bestand ohne Vorlagen-Pendant |
| Copyright | „© 2026 Maydonoz Döner Systemgastronomie. Alle Rechte vorbehalten.“ | |

## Startseite `/`
| Sektion Vorlage | Inhalt | Hinweis |
|---|---|---|
| 1 Hero „…Delicious / Our Food!“ | Script-Zeilen „Echter Genuss“ / „beginnt mit Tradition“ (Footer-Slogan, `aria-hidden`), echte H1 „Maydonoz Döner — Die führende internationale Döner-Systemgastronomie“ als Unterzeile; Video `HomeHero.webm` (Desktop), Poster (Mobil) | Riss-Kante unten |
| 2 Story „Start with OUR STORY“ | Script „Unsere“ / klein „Säulen“, Sans-H2 „STRATEGISCHE LEITPRINZIPIEN & QUALITÄT“, Satz „100% Halal-Fleisch, ISO 22000 …“; Feature-Karte = Säulen 01–03; Button „Über uns“ → `/ueber-uns/`; Textlink „Alle Standorte auf interaktiver Karte ansehen“ → `/filialen/` | Inhalte von `/ueber-uns/`; seitliche Kreise = Konzeptfotos statt Food-Freisteller |
| 3 „Today's Menu“ Karussell | Script „Unser“ / „Menu“, H2 „NEUHEITEN“; 5 Neuheiten (Badge = Kategorie „45 CM“, „KNUSPRIG“ …; Name gelb; Beschreibung grau); Tabs = die 5 Kategorien; Link „zur Speisekarte“ | Teller als abgerundete Bühne statt Kreis (Banner mit eingebranntem Text) |
| 4 „Discover Our World“ | Script „Vor Ort“ / „erleben“, H2 „INZWISCHEN IN EINER MAYDONOZ FILIALE IN IHRER NÄHE“, Button „Alle Standorte auf interaktiver Karte ansehen“ → `/filialen/`; Hintergrund `bg-desktop.jpg` | Inhalt von `/ueber-uns/` |
| – Wochenangebote (Bestand) | entfällt | nur Platzhaltertext „TITEL / Beschreibung folgt.“ |

## Unterseiten (Hero-Kopf klein im Stil Sektion 1, danach Sektionen im Wechsel hell/dunkel mit Riss-Kanten)
| Seite | Sektionen |
|---|---|
| `/ueber-uns/` | Hero (Script „Über“ / „uns“) → **dunkel** Spezialitäten (4 Karten, Karussell-Stil) → **hell** Services (3 Link-Karten im Feature-Karten-Stil) → **dunkel** Vor Ort erleben (Kreis-Galerie 12 Bilder + Social) → **hell** Säulen 01–06 |
| `/filialen/` | Hero (Script „Standorte“ / „& Filialen“) → **hell** Filialfinder: Suche, Stadt-Chips, 8 Store-Karten, Karte per Klick (Google Maps iframe erst nach Klick) |
| `/news/` | Hero (Script „Aktuelles“ / „& Presse“) → **dunkel** Filter-Tabs + 16 News-Karten → **hell** Presse-Box |
| `/kontakt/` | Hero (Script „Kundenservice“ / „& Betreuung“) → **hell** Formular + Zentrale-Karte → **dunkel** Feedback-Teaser |
| `/feedback/` | Hero (Script „Qualitätssicherung“ / „& Feedback“) → **hell** 3-Schritt-Formular mit Sternbewertung |

Script-Zeilen der Unterseiten = Eyebrow-Texte des Bestands, aufgeteilt auf zwei Zeilen (`aria-hidden`); echte H1 = Bestands-H1 der Seite.
