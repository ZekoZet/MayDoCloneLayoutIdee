// Erzeugt die schlanken, selbst gehosteten Webfonts in public/fonts/ (nur bei Schriftänderungen nötig):
//   pnpm fonts
// - Montserrat (variabel, Gewichte 400–800): Latin-Hauptdatei + Mini-Datei für türkische Zeichen (İ Ş ş Ğ ğ),
//   die der Browser per unicode-range nur lädt, wenn diese Zeichen vorkommen (News-Seite)
// - Kaushan Script: nur Grundbuchstaben, Ziffern, Satzzeichen und deutsche Umlaute
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from 'node:fs';
import subsetFont from 'subset-font';

const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => String.fromCodePoint(a + i)).join('');
const wght = { wght: { min: 400, max: 800 } };
const ms = 'node_modules/@fontsource-variable/montserrat/files/';

const jobs = [
  { src: ms + 'montserrat-latin-wght-normal.woff2', out: 'montserrat-var-latin.woff2', text: range(0x20, 0x7e) + range(0xa0, 0xff) + 'ı–—‘’‚“”„•…€™', axes: wght },
  { src: ms + 'montserrat-latin-ext-wght-normal.woff2', out: 'montserrat-var-tr.woff2', text: 'İŞşĞğ', axes: wght },
  { src: 'node_modules/@fontsource/kaushan-script/files/kaushan-script-latin-400-normal.woff2', out: 'kaushan-script-subset.woff2', text: range(0x20, 0x7e) + 'ÄÖÜäöüß' },
];

mkdirSync('public/fonts', { recursive: true });
for (const f of readdirSync('public/fonts')) rmSync(`public/fonts/${f}`);
for (const job of jobs) {
  const buf = await subsetFont(readFileSync(job.src), job.text, { targetFormat: 'woff2', variationAxes: job.axes });
  writeFileSync(`public/fonts/${job.out}`, buf);
  console.log(`${job.out}: ${(buf.length / 1024).toFixed(1)} KB`);
}
