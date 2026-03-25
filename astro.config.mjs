import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), tailwind(), partytown()],
  site: 'https://inge-jsperez.github.io',
  base: 'profile',
});