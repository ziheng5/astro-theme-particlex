---
title: Welcome to Astro ParticleX
date: 2026-01-02 10:30:00
description: A sample post showing frontmatter, categories, tags, and headings.
tags:
  - Astro
  - Template
categories:
  - Guide
pinned: 5
---

## Start writing

Create a new Markdown file under `src/posts`. The filename becomes the post slug, and the `date` field controls the final URL:

```txt
/YYYY/MM/DD/slug/
```

## Frontmatter

```yaml
---
title: My First Post
date: 2026-01-02 10:30:00
description: A short summary shown on the home page.
tags:
  - Astro
categories:
  - Notes
pinned: 0
---
```

The `pinned` field is optional. Higher values appear first.

## Math

The template includes `remark-math` and `rehype-katex`, so inline math like $E = mc^2$ and block math both work:

$$
\int_0^1 x^2 dx = \frac{1}{3}
$$

