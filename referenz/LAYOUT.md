# Layout-Analyse – `referenz/preview.webp`

Restaurant-Onepager (753 × 1568 px Vorschau, entspricht ~1440 px Desktop-Design). Starker Hell-Dunkel-Wechsel,
Sektionen mit **Papierriss-Kanten**, große **Script-Headlines** zweizeilig (weiß klein + gelb groß).

## Raster
- Max. Inhaltsbreite ~1170 px (≈ 72 rem), zentriert; Seitenränder ~ 4 % (Desktop), 16–20 px (Mobil)
- 12er-Raster: Story-Sektion 5 / 7 Spalten, Footer 3 Spalten (1 : 1,3 : 1), Menü: schmale Tab-Spalte links + zentrierte Bühne
- Gutter ~ 30 px
- Full-bleed: Hero, Menü (dunkle Textur), Discover (Foto), Footer

## Sektionen oben → unten
| # | Typ | Aufteilung | Hintergrund | Übergang unten |
|---|---|---|---|---|
| 0 | Header (über Hero) | Nav zentriert, CTA + Burger rechts | transparent/dunkel ~60 % | – |
| 1 | Hero | zentrierte Script-Headline, Scroll-Maus-Icon unten | Foto dunkel, Overlay ~55 % | **Papierriss** → hell |
| 2 | Story / Intro | links Script „Start“ + kleines Script „with“ + fette Sans „OUR STORY“ + 1 Satz; rechts Feature-Karte (3 Icons) + Button + Textlink; Food-Freisteller angeschnitten an beiden Rändern | hell #F7F7F9 | Papierriss → dunkel, runder Pfeil-Button auf der Kante |
| 3 | Today's Menu | Tabs vertikal links (Breakfast/Lunch/Dinner), Mitte Script „Today's“ + „Menu“, Karussell: runder Teller mit weißem Ring, Badge „HOT“, Pfeile links/rechts, Nachbar-Teller angeschnitten rechts; darunter Name (gelb, fett) + Info-Icon + Tooltip + Unterzeile grau | dunkel #141414 mit Kreide-Textur | gerade Kante, runder Pfeil-Button |
| 4 | Discover | zentrierte Script-Headline „Discover“ / „Our World“, Button | Foto, Overlay dunkel ~60 % | runder Pfeil-nach-oben-Button, gerade Kante |
| 5 | Footer | 3 Spalten: Adresse · Öffnungszeiten (2 Unterspalten) · Social Icons + E-Mail; Copyright zentriert | schwarz #0B0B0B | – |

## Farben
| Rolle | Bild-Wert | Token |
|---|---|---|
| Akzent (Script, Buttons, aktive Nav) | ~#F5A51B | `--color-accent` → **ersetzt durch Markenfarbe #FAC014** |
| Akzent dunkel (Hover) | ~#E0901A | `--color-accent-deep` #E0A800 |
| Dunkel Sektion | ~#151515 | `--color-ink` #141414 |
| Dunkel tief (Footer) | ~#0B0B0B | `--color-night` #0B0B0B |
| Hell Sektion | ~#F7F7F9 | `--color-paper` #F7F7F9 |
| Text auf hell | ~#111111 | `--color-text-dark` #111111 |
| Fließtext auf hell | ~#444444 | `--color-text-muted-dark` #4A4A4A |
| Text auf dunkel | #FFFFFF | `--color-text-light` |
| Grau auf dunkel | ~#9A9A9A | `--color-text-muted` #A3A3A3 |
| Karten-Rahmen hell | ~#E6E6EA | `--color-line` #E6E6EA |

## Typografie
| Einsatz | im Bild | Google-Font (self-hosted) |
|---|---|---|
| Script-Headlines („Our Food!“, „Menu“, „Start“) | pinselartige Brush-Script, fett, leicht geneigt | **Kaushan Script** 400 |
| Sans-Headline („OUR STORY“), Nav, Buttons, Labels | geometrische Grotesk, fett, Versalien | **Montserrat** 700/800 |
| Fließtext | kleine Grotesk | **Montserrat** 400/500 |

Größen (Desktop ≙ 1440 px):
- Script groß: `clamp(3.5rem, 2rem + 7vw, 8.5rem)`, Zeilenhöhe 0,9
- Script klein (weiße Zeile): `clamp(2.25rem, 1.5rem + 3.5vw, 4.5rem)`
- Sans-Headline: `clamp(1.75rem, 1.2rem + 2vw, 2.75rem)`, 800, Laufweite 0,01em
- Nav/Buttons: 0,75 rem, 700, Versalien, Laufweite 0,08em
- Fließtext: 0,9375–1 rem, Zeilenhöhe 1,65

## Komponenten
- **Buttons:** Rechteck, Radius ~2 px, gelb gefüllt, schwarze Versalien, links kleines Icon (Chevron bzw. Uhr); Höhe ~44 px. Sekundär: Textlink gelb, Versalien.
- **Feature-Karte:** weiß, 1 px Rahmen, leichter Schatten, 3 Spalten je Line-Icon (gelb) + fetter Titel + 2 Zeilen Text.
- **Runder Scroll-Button:** Kreis ~36 px, weiß, gelber Chevron, sitzt mittig auf Sektionskante.
- **Navigation:** Versalien 11–12 px, aktiver Punkt mit gelbem Unterstrich 2 px; Burger-Icon aus 3 unterschiedlich langen Linien.
- **Tabs (Menü):** vertikal, weiß, aktiver Tab gelb unterstrichen.
- **Karussell:** zentriertes Element groß, Nachbarn angeschnitten, Pfeil-Chevrons ohne Hintergrund (aktiv gelb).
- **Badge:** gelbes Rechteck, abgerundet, kleiner weißer/schwarzer Text, oben links am Teller.
- **Social Icons:** Kreis-Outline ~26 px, grau, Icon zentriert.
- **Icons-Stil:** feine Line-Icons (Stroke ~1,5 px).

## Bildbehandlung
- Hero/Discover: Vollflächenfoto, dunkles Overlay
- Food als **Freisteller/Kreise**, am Viewport-Rand angeschnitten (Story)
- Teller rund mit weißem Ring (~8 px) und weichem Schatten (Menü)

## Bewegung (abgeleitet)
- Script-Headlines: Einblenden von unten (opacity + translateY), zeilenversetzt
- Hero: leichter Parallax des Hintergrunds
- Scroll-Maus-Icon: pulsierender Punkt
- Karussell: horizontales Gleiten (transform)
- Seitliche Food-Kreise: leichtes Hereinschieben/Drehen beim Scrollen

## Responsive
| Sektion | < 1024 px | < 480 px |
|---|---|---|
| Header | Nav → Burger-Panel, CTA bleibt (kompakt) | nur Logo + Burger, CTA im Panel |
| Hero | Höhe 80 svh, Script kleiner | Script ~3,25 rem |
| Story | einspaltig, Feature-Karte unter Text, Freisteller-Kreise kleiner/oben rechts | Kreise ausgeblendet, Karte Icons untereinander |
| Menü | Tabs horizontal scrollend über dem Karussell; Karussell = scroll-snap | Teller volle Breite, Pfeile ausgeblendet |
| Discover | Höhe reduziert | Button volle Breite |
| Footer | 2 Spalten | 1 Spalte, linksbündig |
