# Maydonoz Döner – Layout-Nachbau

Inhalte von https://pz-design.de/, Layout nach `referenz/preview.webp`.
Astro (SSG) · Tailwind 4 · TypeScript strict · GSAP (nur Desktop) · self-hosted Fonts.

## Start

```bash
pnpm install
pnpm dev
```

Build: `pnpm build` → `dist/`.

Lokal wie auf dem Webspace testen (gzip, Cache-Header, 404 – wie STRATO/IONOS mit `.htaccess`):

```bash
pnpm build && pnpm serve
```

→ http://localhost:4323 – dort mit Chrome DevTools → Lighthouse messen (Ziel: überall 100, siehe ENTSCHEIDUNGEN.md → Performance).

Schriften liegen fertig in `public/fonts/`; nur bei Schriftänderungen neu erzeugen mit `pnpm fonts`.

## Upload auf STRATO / IONOS (FTP)

1. `pnpm build` ausführen → im Ordner `dist/` liegt nur, was auf den Server gehört.
2. Im FTP-Programm (z. B. FileZilla) **versteckte Dateien anzeigen** (FileZilla: Server → „Anzeigen versteckter Dateien erzwingen“), sonst fehlt `.htaccess`.
3. Den **Inhalt** von `dist/` (nicht den Ordner selbst) in das Webverzeichnis der Domain hochladen.
   - STRATO: das Verzeichnis, auf das die Domain im Kundenbereich zeigt (Standard: `/`).
   - IONOS: das Zielverzeichnis der Domain (Hosting → Webspace, z. B. `/` oder ein Unterordner).
4. SSL-Zertifikat im Kundenbereich aktivieren – die `.htaccess` leitet alle Aufrufe auf HTTPS um.
5. Bei späteren Updates: alte Dateien in `_astro/` dürfen gelöscht werden (Dateinamen enthalten einen Hash und ändern sich bei jedem Build).

Inhalt von `dist/`:
| Datei/Ordner | Zweck |
|---|---|
| `index.html`, `ueber-uns/`, `filialen/`, `news/`, `kontakt/`, `feedback/`, `404.html` | Seiten |
| `_astro/` | CSS, JavaScript, optimierte Bilder (Dateinamen mit Hash) |
| `fonts/`, `videos/` | Schriften (Teilmengen), Hero-Video (nur Desktop) |
| `favicon*`, `apple-touch-icon*`, `android-chrome-*`, `site.webmanifest` | Icons |
| `robots.txt`, `sitemap-index.xml`, `sitemap-0.xml` | Suchmaschinen |
| `.htaccess` | Apache-Einstellungen: HTTPS, 404-Seite, Komprimierung, Caching, MIME-Typen, Sicherheits-Header |

Sitemap und canonical-Links verwenden `site` aus `astro.config.mjs` (aktuell `https://maydonozdoner.de`). Für eine andere Domain dort anpassen und neu bauen; die Domain in `public/robots.txt` ebenfalls.

## Seiten
| URL | Datei |
|---|---|
| `/` | `src/pages/index.astro` |
| `/ueber-uns/` | `src/pages/ueber-uns.astro` |
| `/filialen/` | `src/pages/filialen.astro` |
| `/news/` | `src/pages/news.astro` |
| `/kontakt/` | `src/pages/kontakt.astro` |
| `/feedback/` | `src/pages/feedback.astro` |

## Struktur
- `content/`: Bestandsinhalte je Seite (wörtlich) + `INVENTAR.md`
- `referenz/`: Vorlagenbild, `LAYOUT.md` (Analyse), `MAPPING.md` (Sektion ↔ Inhalt)
- `src/data/`: Filialen, Menü, Säulen, News, globale Daten
- `src/components/`: je Sektionstyp eine Komponente
- `src/styles/global.css`: Design-Tokens (`@theme`) und Komponenten-Klassen
- `ENTSCHEIDUNGEN.md`: Entscheidungen und **offene Punkte (Impressum/Datenschutz!)**
