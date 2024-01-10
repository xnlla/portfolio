import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";

// const isProduction = process.env.NODE_ENV === "production"

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  outDir: './docs',
  site: 'https://vvou.uk/',
  server: {
    port: 4321,
    host: true
  },
  integrations: [partytown(), react()]
});