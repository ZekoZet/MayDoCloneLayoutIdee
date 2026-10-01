// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// canonical-Domain aus dem Bestand übernommen
export default defineConfig({
  site: 'https://maydonozdoner.de',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // CSS direkt ins HTML: kein render-blockierender Request (PageSpeed)
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
  },
});
