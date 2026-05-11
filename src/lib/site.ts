const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
};

export const site = {
  title: "Astro ParticleX",
  subtitle: "A clean Astro blog template",
  description: "Write, archive, tag, and share your notes.",
  author: "Your Name",
  language: "zh-CN",
  avatar: withBase("/images/avatar.svg"),
  loading: withBase("/images/loading.svg"),
  background: [withBase("/images/background.svg")],
  since: 2026,
  profile: "Keep writing.\nKeep shipping."
};

export const colors = ["#ffa2c4", "#00bcd4", "#03a9f4", "#00a596", "#ff7d73"];

export const menu = [
  {
    label: "Homepage",
    icon: "house",
    theme: "solid",
    href: withBase("/")
  },
  {
    label: "About",
    icon: "id-card",
    theme: "solid",
    href: withBase("/2026/01/01/about/")
  },
  {
    label: "Archives",
    icon: "box-archive",
    theme: "solid",
    href: withBase("/archives/")
  },
  {
    label: "Categories",
    icon: "bookmark",
    theme: "solid",
    href: withBase("/categories/")
  },
  {
    label: "Tags",
    icon: "tags",
    theme: "solid",
    href: withBase("/tags/")
  },
  {
    label: "Links",
    icon: "link",
    theme: "solid",
    href: withBase("/friends/")
  },
  {
    label: "Favorites",
    icon: "star",
    theme: "solid",
    href: withBase("/favorites/")
  }
];

export const iconLinks = [
  {
    label: "GitHub",
    icon: "github",
    theme: "brands",
    href: "https://github.com/your-name"
  },
  {
    label: "Bilibili",
    icon: "bilibili",
    theme: "brands",
    href: "https://www.bilibili.com/"
  },
  {
    label: "Discord",
    icon: "discord",
    theme: "brands",
    href: "https://discord.com/"
  },
  {
    label: "Email",
    icon: "envelope",
    theme: "solid",
    href: "mailto:hello@example.com"
  }
];

export const friends = [
  {
    name: "Astro",
    url: "https://astro.build/",
    avatar: "https://astro.build/favicon.svg",
    desc: "The web framework for content-driven websites."
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    avatar: "https://github.githubassets.com/favicons/favicon.svg",
    desc: "Host your template repository and deploy with Actions."
  }
];

export const favorites = [
  {
    name: "Documentation",
    items: [
      {
        name: "Astro Docs",
        url: "https://docs.astro.build/",
        desc: "Official Astro documentation.",
        icon: "book"
      },
      {
        name: "Markdown Guide",
        url: "https://www.markdownguide.org/",
        desc: "A quick reference for Markdown syntax.",
        icon: "book"
      }
    ]
  },
  {
    name: "Tools",
    items: [
      {
        name: "Font Awesome",
        url: "https://fontawesome.com/",
        desc: "Icon set used by the theme UI.",
        icon: "icons"
      }
    ]
  }
];
