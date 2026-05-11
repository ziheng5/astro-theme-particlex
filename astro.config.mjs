import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import rehypeKatex from "rehype-katex";

import remarkMath from "remark-math";

const site = process.env.ASTRO_SITE ?? "https://example.com";
const base = process.env.ASTRO_BASE;

export default defineConfig({
  site,
  ...(base ? { base } : {}),
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
