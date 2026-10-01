// Erzeugt die Kacheln für den Seitenhintergrund (einmalig bzw. wenn sich die Ausgangsbilder ändern):
//   node scripts/make-page-bg.mjs
// - 2× hochgerechnet (Lanczos3) + leicht nachgeschärft → schärfer als die Vergrößerung im Browser
// - oberer und unterer Bildrand (Hochformat auch links/rechts) weich überblendet → nahtlos wiederholbar
//   (für den Parallax-Effekt über die ganze Seite, ohne sichtbare Kante oder Spiegelung)
import sharp from 'sharp';

const OVERLAP = 0.28; // Anteil der Bildhöhe, der überblendet wird

// [Quelle, Ziel, seitlich überblenden?] – seitliches Überblenden erzeugt beim Rosmarin Doppelbilder, daher aus
const jobs = [
  ['src/assets/brand/page-bg-desktop.jpg', 'src/assets/brand/page-bg-landscape-tile.jpg', false],
  ['src/assets/brand/page-bg-mobile.jpg', 'src/assets/brand/page-bg-portrait-tile.jpg', false],
];

for (const [src, out, blendX] of jobs) {
  const meta = await sharp(src).metadata();
  const w = meta.width * 2;
  const h = meta.height * 2;
  const { data } = await sharp(src)
    .resize(w, h, { kernel: 'lanczos3' })
    .sharpen({ sigma: 0.7, m1: 0.6, m2: 1.4 })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const o = Math.round(h * OVERLAP);
  const th = h - o; // Kachelhöhe
  const tile = Buffer.alloc(w * th * 3);
  for (let y = 0; y < th; y++) {
    for (let x = 0; x < w * 3; x++) {
      const own = data[y * w * 3 + x];
      if (y < o) {
        // oben: Übergang vom unteren Bildende (Fortsetzung der vorigen Kachel) zum eigenen Inhalt
        const t = y / o;
        const ease = t * t * (3 - 2 * t);
        const below = data[(th + y) * w * 3 + x];
        tile[y * w * 3 + x] = Math.round(below * (1 - ease) + own * ease);
      } else {
        tile[y * w * 3 + x] = own;
      }
    }
  }
  // optional: linken und rechten Rand ebenso überblenden → auch seitlich nahtlos wiederholbar
  let final = tile;
  let tw = w;
  if (blendX) {
    const ox = Math.round(w * OVERLAP);
    tw = w - ox;
    final = Buffer.alloc(tw * th * 3);
    for (let y = 0; y < th; y++) {
      for (let x = 0; x < tw; x++) {
        for (let c = 0; c < 3; c++) {
          const own = tile[(y * w + x) * 3 + c];
          if (x < ox) {
            const t = x / ox;
            const ease = t * t * (3 - 2 * t);
            const right = tile[(y * w + tw + x) * 3 + c];
            final[(y * tw + x) * 3 + c] = Math.round(right * (1 - ease) + own * ease);
          } else {
            final[(y * tw + x) * 3 + c] = own;
          }
        }
      }
    }
  }
  await sharp(final, { raw: { width: tw, height: th, channels: 3 } }).jpeg({ quality: 92, mozjpeg: true }).toFile(out);
  console.log(out, `${tw}×${th}`);
}
