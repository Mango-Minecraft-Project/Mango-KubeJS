import { hopeTheme } from "vuepress-theme-hope";
import locales from "./theme/locales.js";

export default hopeTheme(
  {
    // Basic
    hostname: "wiki.mango-kubejs.pages.dev",
    favicon: "/logo.png",
    license: "AGPL-3.0",
    // hotReload: true, // enable it to preview all changes in time
    locales,

    // Feature
    encrypt: {
      config: {},
    },

    // Layouts
    // - Navbar
    navbarLayout: {
      start: ["Brand", "Language", "Search"],
      center: ["Links"],
      end: ["Repo", "Outlook"],
    },
    logo: "/logo.svg",
    repo: "Mango-Minecraft-Project/Mango-KubeJS",

    // - Sidebar
    sidebarSorter: ["readme", "order", "filename", "title", "date", "date-desc"],
    headerDepth: 2,

    // - Metadata
    lastUpdated: true,
    contributors: true,
    editLink: true,
    docsRepo: "Mango-Minecraft-Project/Mango-KubeJS",
    docsBranch: "wiki",
    docsDir: "docs",

    // - Footer
    copyright: "Copyright © 2025 MangoJellyPudding",
    displayFooter: true,

    // Appearance
    darkmode: "enable",
    externalLinkIcon: false,
    fullscreen: true,
    pure: true,
    focus: false,

    // i18n
    blogLocales: {
      empty: "",
    },

    // Markdown
    markdown: {
      alert: true,
      hint: true,
      align: true,
      attrs: true,
      codeTabs: true,
      component: true,
      demo: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      highlighter: {
        type: "shiki",

        langAlias: {
          "": "javascript",
          text: "javascript",
          plain: "javascript",
          plaintext: "javascript",
        },

        theme: "one-dark-pro",
        collapsedLines: false,
        notationDiff: true,
        notationFocus: true,
        notationHighlight: true,
        notationErrorLevel: true,
        notationWordHighlight: true,
        whitespace: "trailing",

        defaultLang: "javascript",
        logLevel: "silent",
      },
    },

    plugins: {
      blog: true,

      components: {
        components: ["Badge", "VPCard", "VidStack", "SiteInfo", "VPBanner"],
      },

      icon: {
        prefix: "fa6-solid:",
      },

      search: {
        locales: {
          "/zh-tw/": {
            placeholder: "搜尋",
          },
        },
        maxSuggestions: 20,
        getExtraFields: (page) =>
          (<string[]>page.frontmatter.tags ?? []).concat(<string[]>page.frontmatter.categories ?? []),
      },

      git: {
        changelog: true,
      }
    },
  },
  {
    custom: true,
  }
);
