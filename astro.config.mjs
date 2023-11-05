import { defineConfig } from 'astro/config';
import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
    outDir: './docs',
    site: 'https://184.moo.jp',
    integrations: [relativeLinks()]
});
