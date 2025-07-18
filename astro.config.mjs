import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://theboring.app",
  integrations: [sitemap(), mdx(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "always",
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
