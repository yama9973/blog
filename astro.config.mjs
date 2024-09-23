import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://yama9973blog.netlify.app/',
  integrations: [sitemap()],
  output: "server",
  adapter: netlify(),
});