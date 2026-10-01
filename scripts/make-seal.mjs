// Stellt das Maydonoz-Siegel aus der Schiefer-Grafik frei (für die Discover-Sektion):
//   node scripts/make-seal.mjs
// Weicher, ovaler Rand im Bereich der dunklen Außenkontur → fügt sich nahtlos in den Seitenhintergrund ein.
import sharp from 'sharp';

const SRC = 'src/assets/brand/bg-desktop.jpg';
const OUT = 'src/assets/brand/seal-cutout.png';
const cx = 1028; // Mittelpunkt des Siegels im Ausgangsbild
const cy = 600;
const inner = { rx: 350, ry: 326 }; // voll sichtbar
const outer = { rx: 386, ry: 362 }; // ab hier transparent
const darken = 0.62; // gleicht die Helligkeit an den abgedunkelten Seitenhintergrund an

const size = { w: outer.rx * 2 + 8, h: outer.ry * 2 + 8 };
const left = cx - size.w / 2;
const top = cy - size.h / 2;

const { data } = await sharp(SRC).extract({ left, top, width: size.w, height: size.h }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const out = Buffer.alloc(size.w * size.h * 4);
for (let y = 0; y < size.h; y++) {
  for (let x = 0; x < size.w; x++) {
    const dx = x - size.w / 2;
    const dy = y - size.h / 2;
    // normierter Abstand: 1 = inneres Oval, 0 = äußeres Oval
    const dIn = Math.hypot(dx / inner.rx, dy / inner.ry);
    const dOut = Math.hypot(dx / outer.rx, dy / outer.ry);
    let a = 1;
    if (dOut >= 1) a = 0;
    else if (dIn > 1) {
      const t = (1 - dOut) / ((1 - dOut) + (dIn - 1)); // 1 innen → 0 außen
      a = t * t * (3 - 2 * t);
    }
    const i = (y * size.w + x) * 3;
    const o = (y * size.w + x) * 4;
    out[o] = Math.round(data[i] * darken);
    out[o + 1] = Math.round(data[i + 1] * darken);
    out[o + 2] = Math.round(data[i + 2] * darken);
    out[o + 3] = Math.round(a * 255);
  }
}
await sharp(out, { raw: { width: size.w, height: size.h, channels: 4 } }).png({ compressionLevel: 9 }).toFile(OUT);
console.log(OUT, `${size.w}×${size.h}`);
