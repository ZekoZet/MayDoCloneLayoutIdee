// Lokaler Testserver für dist/, verhält sich wie STRATO/IONOS mit der .htaccess
// (gzip, Cache-Header, 404-Seite, Verzeichnis-Weiterleitung) – für realistische PageSpeed-/Lighthouse-Tests:
//   pnpm build && pnpm serve   →  http://localhost:4323
import http from 'node:http';
import { createReadStream, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../dist/', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.webm': 'video/webm', '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json', '.jpg': 'image/jpeg' };
const compress = new Set(['.html', '.css', '.js', '.svg', '.xml', '.txt', '.webmanifest']);
http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let file = join(root, p);
  if (existsSync(file) && statSync(file).isDirectory()) {
    if (!p.endsWith('/')) { res.writeHead(301, { Location: p + '/' }); return res.end(); }
    file = join(file, 'index.html');
  }
  let status = 200;
  if (!existsSync(file)) { file = join(root, '404.html'); status = 404; }
  // dist/ fehlt (z. B. während pnpm build gerade neu baut) → kurze Meldung statt Absturz
  if (!existsSync(file)) { res.writeHead(503, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end('dist/ wird gerade neu gebaut – bitte gleich neu laden.'); }
  const ext = extname(file);
  const headers = { 'Content-Type': types[ext] ?? 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' };
  headers['Cache-Control'] = ext === '.html' ? 'no-cache' : /\.(js|css|webp|woff2)$/.test(file) ? 'public, max-age=31536000, immutable' : 'public, max-age=2592000';
  if (compress.has(ext) && /gzip/.test(req.headers['accept-encoding'] ?? '')) {
    headers['Content-Encoding'] = 'gzip'; headers['Vary'] = 'Accept-Encoding';
    res.writeHead(status, headers); createReadStream(file).on('error', () => res.end()).pipe(zlib.createGzip({ level: 6 })).pipe(res);
  } else { res.writeHead(status, headers); createReadStream(file).on('error', () => res.end()).pipe(res); }
}).listen(Number(process.env.PORT ?? 4323), () => console.log(`dist/ läuft auf http://localhost:${process.env.PORT ?? 4323}`));
