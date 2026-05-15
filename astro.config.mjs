import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://holdfastpress.com',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
