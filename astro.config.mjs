import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";

// const isProduction = process.env.NODE_ENV === "production"

// https://astro.build/config
export default defineConfig({
  outDir: './docs',
  site: 'https://na74.net',
  server: {
    port: 4321,
    host: true
  },
  integrations: [partytown()]
});