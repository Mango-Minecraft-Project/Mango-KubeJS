import { hopeTheme } from "vuepress-theme-hope";

import { enusNavbar, zhtwNavbar, zhcnNavbar } from "./theme/navbar/index.js";
import { enusSidebar, zhtwSidebar, zhcnSidebar } from "./theme/sidebar/index.js";

export default hopeTheme({
  hostname: "wiki.mango-kubejs.pages.dev",

  logo: "/logo.svg",
  darkmode: "enable",
  favicon: "/logo.png",

  repo: "Mango-Minecraft-Project/Mango-KubeJS",
  docsBranch: "wiki",
  docsDir: "docs",

  lastUpdated: true,
  contributors: true,
  editLink: true,

  externalLinkIcon: false,
  fullscreen: true,
  pure: true,
  focus: false,

  displayFooter: true,
  blogLocales: {
    empty: "",
  },


  locales: {
    "/": {
      navbar: enusNavbar,
      sidebar: enusSidebar,

      author: "MangoJellyPudding",

      blog: {
        description: "An interested KubeJS developer.",
      },
    },
    "/zh-tw/": {
      navbar: zhtwNavbar,
      sidebar: zhtwSidebar,

      author: "芒果凍布丁",

      navbarLocales: {
        langName: "正體中文",
      },
      metaLocales: {
        origin: "原創",
      },
    },
    "/zh-cn/": {
      navbar: zhcnNavbar,
      sidebar: zhcnSidebar,

      author: "芒果凍布丁",

      blog: {
        description: "一个兴趣使然的 KubeJS 开发者",
      },
    },
  },

  copyright: "Copyright © 2025 MangoJellyPudding",

  encrypt: {
    config: {},
  },

  // enable it to preview all changes in time
  // hotReload: true,

  // These features are enabled for demo, only preserve features you need here
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
      components: ["Badge", "VPCard", "VidStack"],
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
  },
});
