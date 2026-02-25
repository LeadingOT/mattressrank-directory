// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mattressrank.info',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
