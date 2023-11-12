import { defineConfig } from 'astro/config';
// import relativeLinks from 'astro-relative-links';
import partytown from "@astrojs/partytown";

// const isProduction = process.env.NODE_ENV === "production"

// https://astro.build/config
export default defineConfig({
    outDir: './docs',
    site: 'https://184.moo.jp',
    // integrations: [relativeLinks()]
    integrations: [
        partytown({
          config: {
            forward: ["dataLayer.push"],
          },
        }),
      ],
    server: { port: 4321, host: true }
});
