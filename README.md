# astro-theme-particlex

`astro-theme-particlex` 是一个基于 Astro 的静态博客主题模板，前身是 [theme-particlex/hexo-theme-particlex](https://github.com/theme-particlex/hexo-theme-particlex)。原主题是一个基于 Particle 风格延续而来的简洁 Hexo 主题，本项目将其视觉风格和核心博客体验迁移到 Astro，并在此基础上补充了文章目录、友链、收藏夹、About 页面等功能。

这个仓库可以直接作为一个 Astro 博客项目使用，也可以在 GitHub 上设置为 template repository，供新博客一键创建。

- [Demo display](https://ziheng5.github.io/astro-theme-particlex/)
- [Coldrain's example](https://coldrain.top/)

## Features

- Astro 5 静态站点，适合部署到 GitHub Pages、Vercel、Netlify、Cloudflare Pages 等平台
- Markdown 文章，默认放在 `src/posts`
- 首页文章列表、分页、文章置顶
- 日期型文章路径：`/YYYY/MM/DD/slug/`
- 归档页、分类页、标签页
- 文章页右侧目录
- 友链页、收藏夹页、About 页面
- 图片点击预览
- 归档页搜索
- KaTeX 数学公式支持
- GitHub Pages 自动部署工作流

## Requirements

- Node.js 18.20.8、20.3.0 或更高版本
- pnpm

如果还没有 pnpm：

```bash
npm install -g pnpm
```

## Quick Start

克隆项目：

```bash
git clone https://github.com/your-name/astro-theme-particlex.git
cd astro-theme-particlex
```

安装依赖：

```bash
pnpm install
```

启动开发服务器：

```bash
pnpm dev
```

默认会启动本地预览地址，通常是：

```txt
http://localhost:4321
```

构建生产版本：

```bash
pnpm build
```

本地预览生产构建：

```bash
pnpm preview
```

## Project Structure

```txt
.
├── public/
│   ├── css/
│   ├── images/
│   └── js/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── lib/
│   │   ├── posts.ts
│   │   └── site.ts
│   ├── pages/
│   └── posts/
├── astro.config.mjs
├── package.json
└── pnpm-lock.yaml
```

常用目录说明：

- `src/posts`: Markdown 文章目录
- `src/lib/site.ts`: 站点信息、菜单、社交链接、友链、收藏夹配置
- `src/pages`: 路由页面
- `src/components`: 页面组件
- `public/images`: 头像、背景、文章图片等静态资源
- `public/css`: 主题样式

## Configuration

主要配置集中在 `src/lib/site.ts`。

站点信息：

```ts
export const site = {
  title: "Astro ParticleX",
  subtitle: "A clean Astro blog template",
  description: "Write, archive, tag, and share your notes.",
  author: "Your Name",
  language: "zh-CN",
  avatar: "/images/avatar.svg",
  loading: "/images/loading.svg",
  background: ["/images/background.svg"],
  since: 2026,
  profile: "Keep writing. Keep shipping."
};
```

菜单配置：

```ts
export const menu = [
  { label: "Homepage", icon: "house", theme: "solid", href: "/" },
  { label: "About", icon: "id-card", theme: "solid", href: "/2026/01/01/about/" },
  { label: "Archives", icon: "box-archive", theme: "solid", href: "/archives/" },
  { label: "Categories", icon: "bookmark", theme: "solid", href: "/categories/" },
  { label: "Tags", icon: "tags", theme: "solid", href: "/tags/" },
  { label: "Links", icon: "link", theme: "solid", href: "/friends/" },
  { label: "Favorites", icon: "star", theme: "solid", href: "/favorites/" }
];
```

图标来自 Font Awesome 6。`icon` 填图标名，`theme` 常用值为 `solid` 或 `brands`。

社交链接、友链和收藏夹也在同一个文件里：

- `iconLinks`: 个人信息卡片里的社交链接
- `friends`: 友链页数据
- `favorites`: 收藏夹页数据
- `colors`: 分类和标签颜色

站点 URL 在 `astro.config.mjs` 中配置：

```js
export default defineConfig({
  site: "https://example.com"
});
```

部署前请把 `site` 改成你的最终访问地址。

## Writing Posts

在 `src/posts` 下新增 Markdown 文件：

```txt
src/posts/my-first-post.md
```

示例 frontmatter：

```md
---
title: My First Post
date: 2026-01-02 10:30:00
description: A short summary shown on the home page.
tags:
  - Astro
  - Blog
categories:
  - Notes
pinned: 0
---

Write your post here.
```

字段说明：

- `title`: 文章标题
- `date`: 发布时间，参与排序和 URL 生成
- `description`: 首页文章摘要
- `tags`: 标签列表
- `categories`: 分类列表，文章卡片默认显示第一个分类
- `pinned`: 置顶权重，可省略；数值越大越靠前

文章 URL 由日期和文件名生成。例如：

```txt
src/posts/my-first-post.md
date: 2026-01-02 10:30:00
```

生成路径为：

```txt
/2026/01/02/my-first-post/
```

## Images

静态图片放在 `public/images` 下，然后在 Markdown 中用绝对路径引用：

```md
![demo](/images/demo.png)
```

头像、加载图和首页背景默认也放在 `public/images`，并通过 `src/lib/site.ts` 配置。

## Math

主题内置 `remark-math` 和 `rehype-katex`，可以直接写数学公式。

行内公式：

```md
$E = mc^2$
```

块级公式：

```md
$$
\int_0^1 x^2 dx = \frac{1}{3}
$$
```

## Deploy

### GitHub Pages

仓库已经包含 `.github/workflows/deploy.yml`。推荐部署步骤：

1. 在 GitHub 创建新仓库，例如 `astro-theme-particlex`。
2. 将本项目推送到该仓库。
3. 修改 `astro.config.mjs` 中的 `site`。
4. 打开 GitHub 仓库的 `Settings -> Pages`。
5. 在 `Build and deployment` 中选择 `Source: GitHub Actions`。
6. 推送到 `main` 分支后，Actions 会自动构建并发布。

如果部署到用户或组织主页仓库：

```txt
https://USER.github.io/
```

配置：

```js
export default defineConfig({
  site: "https://USER.github.io"
});
```

如果部署到普通项目仓库：

```txt
https://USER.github.io/REPO/
```

需要同时设置 `site` 和 `base`：

```js
export default defineConfig({
  site: "https://USER.github.io",
  base: "/REPO"
});
```

如果使用自定义域名：

```js
export default defineConfig({
  site: "https://example.com"
});
```

同时需要在 `public` 目录下新增 `CNAME` 文件：

```txt
example.com
```

### Vercel

1. 将仓库导入 Vercel。
2. Framework Preset 选择 `Astro`。
3. Build Command 使用 `pnpm build`。
4. Output Directory 使用 `dist`。
5. 部署前将 `astro.config.mjs` 的 `site` 改为生产域名。

### Netlify

1. 将仓库导入 Netlify。
2. Build command 使用 `pnpm build`。
3. Publish directory 使用 `dist`。
4. 部署前将 `astro.config.mjs` 的 `site` 改为生产域名。

### Cloudflare Pages

1. 在 Cloudflare Pages 中连接 GitHub 仓库。
2. Framework preset 选择 `Astro`。
3. Build command 使用 `pnpm build`。
4. Build output directory 使用 `dist`。
5. 部署前将 `astro.config.mjs` 的 `site` 改为生产域名。

## Update Content

日常写作流程通常是：

```bash
pnpm dev
```

新增或修改 `src/posts` 下的 Markdown 文件，确认页面正常后：

```bash
pnpm build
git add .
git commit -m "Add new post"
git push
```

如果使用 GitHub Pages workflow，推送后会自动部署。

## Credits

- 本主题前身：[theme-particlex/hexo-theme-particlex](https://github.com/theme-particlex/hexo-theme-particlex)
- 原 Hexo ParticleX 主题基于 Particle 风格延续而来
- 本项目保留原主题 MIT License 署名，并在 Astro 版本中新增文章目录、友链、收藏夹和 About 页面等功能

## License

MIT License. See [LICENSE](./LICENSE).
