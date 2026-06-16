// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://lilu.dev",
  prefetch: true,
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});
