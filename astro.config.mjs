import { defineConfig } from 'astro/config';
// import relativeLinks from 'astro-relative-links';

const isProduction = process.env.NODE_ENV === "production"

// https://astro.build/config
export default defineConfig({
    outDir: './docs',
    site: 'https://184.moo.jp',
    // integrations: [relativeLinks()]
});
