# Entscheidungen & offene Punkte

## ⚠️ Vor dem Livegang klären
1. **Impressum und Datenschutz fehlen.** `/impressum/` und `/datenschutz/` liefern im Bestand 404. Es wurden keine Rechtstexte erfunden. Die Links wurden aus Footer und Formularen entfernt; die Einwilligungstexte der Formulare stehen wortgleich ohne Link. Beide Seiten sind in Deutschland Pflicht.
2. **Formulare ohne Backend.** Kontakt- und Feedback-Formular senden wie im Bestand an `action="#"` (POST). Ein Formular-Dienst oder Endpoint muss angebunden werden.
3. **Domain.** pz-design.de liefert die Website „Maydonoz Döner Deutschland“ aus; canonical, OG-URLs, JSON-LD, robots.txt und Sitemap zeigen im Bestand auf `https://maydonozdoner.de`. Das wurde 1:1 übernommen (`site` in `astro.config.mjs`). Für einen Betrieb unter pz-design.de dort die Domain ändern.
4. **Telefonnummern** wirken wie Platzhalter (z. B. `+49 (0) 30 1234 5678`) und wurden trotzdem 1:1 übernommen.

## Nicht vorhandene Bestandsseiten
- `/speisekarte/`, `/franchise/`, `/naehrwerte/`, `/karriere/`, `/impressum/`, `/datenschutz/` → 404 im Bestand, daher nicht gebaut.
- Navigation: Menüpunkte MENÜS (beide Ziele 404), FRANCHISE und „Karriere / Jobs“ entfernt. Quick Links ohne Speisekarte/Franchise.
- Über uns: Spezialitäten-Karten verlinkten auf `/speisekarte/` (404) und sind jetzt nicht verlinkt; die Service-Karte „FRANCHISE WERDEN“ ist ebenfalls ohne Link.
- Der Link „zur Speisekarte“ auf der Startseite zeigt wie im Bestand extern auf maydonozdoner.com.

## Inhalte
- **Wochenangebote** (Startseite) entfallen: Der Bestand enthält nur Platzhalter („TITEL / Beschreibung folgt.“).
- **Standort-Radar-Popup** wurde nicht nachgebaut. Der Header-Button „FILIALE SUCHEN!“ führt zu `/filialen/`, wo es den vollständigen Filialfinder gibt.
- **Script-Headlines** (dekorativ, `aria-hidden`) sind auf zwei Zeilen aufgeteilte Bestandstexte: Footer-Slogan „Echter Genuss beginnt mit Tradition“ im Hero; auf den Unterseiten die Eyebrows („Standorte & Filialen“, „Aktuelles & Presse“, „Kundenservice & Betreuung“, „Qualitätssicherung & Feedback“, „Unsere Säulen“, „Unsere Spezialitäten“, „Services & Angebote“, „Vor Ort erleben“, „Unser Menu“) bzw. „Über uns“.
- **Eine H1 pro Seite:** Der Bestand hatte auf Unterseiten zwei H1 (Hero + Sektion). Jetzt steht die Sektions-H1 im Hero (z. B. „NIEDERLASSUNGEN“); die Startseite und „Über uns“ verwenden die Bestands-H1 „Maydonoz Döner — Die führende …“.
- **Startseite „Story“-Sektion:** Hier stehen die Säulen 01–03 von „Über uns“, weil die Bestands-Startseite keinen Story-Inhalt hat.
- **Menü-Tabs** (Vorlage: Breakfast/Lunch/Dinner) = Kategorien der Neuheiten (45 CM, KNUSPRIG, TELLERGERICHT, SNACKS, NEUHEIT).
- **Bildzuordnung des Bestands** übernommen, obwohl zwei Bilder nicht zum Titel passen: „PREMIUM DESSERT-BECHER“ zeigt `hero4` (Franchise-Banner), „FINGERFOOD & SNACK BOX“ zeigt `hero8` (Menü-Banner).
- **News:** Der Bestand hat keine Teaser oder Detailseiten, deshalb sind die Karten nicht verlinkt. Der Filter vergleicht Schlagwörter, damit auch die Kategorien „qualität & standards“ und „expansion & presse“ (ohne eigenen Button) gefunden werden.
- **Footer:** Die Vorlage hat 3 Spalten. Eine 4. Spalte (Logo, Slogan, Quick Links) wurde ergänzt, weil es diese Bestandsinhalte gibt. Die Social-Spalte hat keine Überschrift, da im Bestand keine existiert.
- **Barrierefreiheits-Labels** („Menü öffnen“, „Zurück“, „Weiter“, Hauptnavigation) wurden selbst formuliert. Pfeil-Buttons nutzen die Überschrift der Zielsektion als Label.
- Eine **404-Seite** wurde ergänzt (nur mit Bestandstexten).

## Gestaltung
- **Markenfarbe #FAC014** (theme-color) ersetzt das Orange der Vorlage. Hell/Dunkel-Flächen stammen aus der Vorlage.
- **Kontrast:** Auf hellen Flächen werden gelbe Akzente (Script-Headlines, Säulen-Nummern) in dunklerem Gold `#A87800` dargestellt (3,67:1, WCAG AA für große Schrift); die kleine Script-Zeile ist dafür mind. 24 px groß. Textlinks auf Hell sind dunkel mit gelber Unterstreichung. Auf dunklen Flächen bleibt das Markengelb `#FAC014`.
- **Fonts:** Die Vorlage verlangt Brush-Script + geometrische Grotesk, daher **Kaushan Script** + **Montserrat** (self-hosted) statt Bebas Neue / Plus Jakarta Sans / Caveat aus dem Bestand. Montserrat als *eine* variable Datei (400–800, 36 KB) plus Mini-Datei für türkische Zeichen; Kaushan auf genutzte Zeichen reduziert (23 KB). Erzeugt mit `pnpm fonts` (`scripts/subset-fonts.mjs`).
- **Teller:** Die Vorlage zeigt runde Teller. Die Produktbilder des Bestands sind breite Werbebanner mit eingebranntem Text, deshalb gibt es eine abgerundete 2:1-Bühne mit weißem Ring statt Kreis. Kreise werden nur für die quadratischen Konzeptfotos genutzt (Story-Ränder, Galerie).
- **Food-Freisteller** an den Rändern der Story-Sektion: Im Bestand gibt es keine, daher dienen Konzeptfotos als angeschnittene Kreise (nur ≥ 1024 px).
- **Seitenhintergrund mit Parallax:** Schiefer mit Rosmarin und Gewürzen (Ausschnitt aus `bg-desktop.jpg` ohne Siegel) liegt fest hinter der ganzen Seite und ist in allen dunklen Bereichen sichtbar (Menü, Spezialitäten, Galerie, News, Feedback-Hinweis, Footer). Querformat: gespiegelter Ausschnitt (Rosmarin links + rechts, ruhige Mitte), Hochformat: einseitiger Ausschnitt. Parallax per CSS-Scroll-Animation (`animation-timeline: scroll(root)`, nur `transform`, ohne JS); Firefox und `prefers-reduced-motion`: statisch. Das Bild lädt erst nach load + Leerlauf (PageSpeed) und blendet weich ein. Bilder neu erzeugen: siehe `src/assets/brand/page-bg-*.jpg`.
- **Übergänge:** Unter dunklen Papierkanten blendet der Hintergrund aus einfarbigem Dunkel weich ein (`.fade-top-ink`/`.fade-top-night`), damit keine Naht entsteht.
- **Discover-Sektion:** freigestelltes Maydonoz-Siegel (`pnpm seal` → `scripts/make-seal.mjs`, ovaler weicher Rand, an die Abdunklung angepasst) schwebt über dem durchgehenden Parallax-Hintergrund – kein eigener Bildkasten mehr.
- **Hero-Hintergrund:** Video `HomeHero.webm` nur auf Desktop (IntersectionObserver); Poster = Standbild aus dem Video (Sek. 3). Unterseiten zeigen nur das Poster (Performance).

- **Navigation Handy & Tablet:** Floating Menu Button unten rechts (Daumenbereich) statt Burger im Header. Gilt für Breiten < 1024 px und alle Touch-Geräte ohne Hover (z. B. iPad quer), jeweils hoch und quer. Öffnen: Kreis wächst aus dem Knopf, Menüpunkte schweben gestaffelt herein, Burger wird zum X. Desktop (≥ 1024 px mit Maus): nur die Hauptnavigation, kein Burger. Tailwind-Varianten `touch:` / `desk:` in `global.css`.

## Performance (PageSpeed Insights / Lighthouse: mobil + Desktop überall 100)
Gemessen mit Lighthouse 13 gegen den Produktions-Build über `pnpm serve` (verhält sich wie Apache mit `.htaccess`: gzip, Cache-Header). Alle 6 Seiten × mobil/Desktop: Performance, Barrierefreiheit, Best Practices, SEO = 100.
- **CSS inline** im HTML (`build.inlineStylesheets: 'always'`) – kein render-blockierender Request.
- **Zweistufiges Font-Laden:** erster Aufbau mit maßgleichen Ersatzschriften (Capsize-Werte: `size-adjust`, `ascent-override` …, Basis Arial/Liberation Sans/Roboto), Webfonts erst nach LCP + load (+0,8 s im Leerlauf). Ab der zweiten Seite einer Sitzung sofort aktiv (sessionStorage). Auf der ersten Seite wechselt die Schrift daher kurz nach dem Laden.
- **Kein Astro ClientRouter mehr:** dessen Skript verzögerte das erste Rendern. Seitenübergänge jetzt nativ per CSS `@view-transition` (Chrome/Edge/Safari 18+, ohne JavaScript); Skripte starten direkt. Die Briefing-Vorgabe „Cleanup über astro:before-swap“ entfällt damit (keine Client-Navigation mehr).
- **Galerie (Über uns):** Bilder laden per IntersectionObserver erst 400 px vor dem Sichtbarwerden (natives `loading="lazy"` lädt mobil bis zu 2500 px voraus); `<noscript>`-Fallback.
- **`content-visibility: auto`** für Sektionen außerhalb des ersten Bildschirms (nur dort, wo nichts über den Rand ragt).
- **Bilder:** Hero-Poster Qualität 60, Bilder unterhalb des ersten Bildschirms 55–65; Logo-Quelle 512 px (für scharfe Darstellung auf hochauflösenden Displays); Touch-Icons verlustarm komprimiert (47 → 13 KB).
- **Papierkanten:** kompakte relative Pfade (jeder 4. Punkt), Saum-Pfad per `<use>` wiederverwendet.
- **Hinweis:** PageSpeed Insights misst auf Googles Servern gegen den echten Webspace; Werte schwanken je Lauf um wenige Punkte und hängen von der Server-Antwortzeit (TTFB) des Hostings ab. Die `.htaccess` muss aktiv sein (Komprimierung!).

- **Seitenhintergrund (Schiefer mit Rosmarin, `PageBackground.astro`):** fest hinter allen dunklen Bereichen. Kacheln aus `pnpm page-bg` (`scripts/make-page-bg.mjs`): 2× hochgerechnet (Lanczos3 + leichtes Nachschärfen) und oberer/unterer Rand weich überblendet → nahtlos senkrecht wiederholbar. Anzeige im Querformat mit 88 % Breite und seitlich weich ins Dunkle auslaufend (Maske), im Hochformat in voller Breite (natürliche Proportionen statt „cover“-Zoom), Bildwahl nach Ausrichtung + Pixeldichte (1×/2×), Qualität 62–75. Parallax: läuft mit 25 % der Scrollgeschwindigkeit (CSS-Scroll-Animation, nur transform; Fallback per requestAnimationFrame z. B. für Firefox; bei „Bewegung reduzieren“ ruhig). Wird erst nach LCP + load geladen.

## Bilder
- Alle Bilder stammen von der Bestands-URL und liegen in `src/assets/`. Es gibt keine Platzhalter.
- Konzeptfotos (`KONSEPT1–6`, `about-kitchen`) sind nur in **300 × 300 px** abrufbar, weil die Originale nicht öffentlich sind. Auf Retina wirken sie leicht weich. Bei Bedarf Originale nachliefern.
- Das Logo `gelbeslogo.png` gibt es nur in 97 × 94 px. Eine Vektorversion (SVG) wäre besser.
- Das Hero-Video ist 4K/6 MB. Empfehlung: 1080p-Version (~1,5 MB) erzeugen.

## Technik
- `sharp` ist direkte Abhängigkeit (pnpm löst strikt auf); Build-Skripte für `esbuild`/`sharp` sind in `pnpm-workspace.yaml` freigegeben.
- Google-Maps-iframe wird erst nach Klick auf „Karte laden“ bzw. „Auf Karte anzeigen“ geladen. Beim Seitenaufruf gibt es keine externen Requests (getestet).
- GSAP wird nur ≥ 1024 px und ohne `prefers-reduced-motion` dynamisch geladen (mobil gar nicht).
