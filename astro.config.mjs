import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import rehypeKatex from "rehype-katex";

import remarkMath from "remark-math";

export default defineConfig({
  site: "https://ziheng5.github.io",
  base: "/astro-theme-particlex",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: "github-light",
      wrap: true
    }
  }
});
