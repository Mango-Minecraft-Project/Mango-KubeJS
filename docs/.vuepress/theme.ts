import { hopeTheme } from "vuepress-theme-hope";
import { Page } from "vuepress";

import { enusNavbar, zhtwNavbar, zhcnNavbar } from "./theme/navbar/index.js";
import { enusSidebar, zhtwSidebar, zhcnSidebar } from "./theme/sidebar/index.js";

export default hopeTheme({
  hostname: "wiki.mango-kubejs.pages.dev",

  logo: "/logo.svg",
  repo: "Mango-Minecraft-Project/Mango-KubeJS",
  docsBranch: "wiki",
  darkmode: "enable",
  docsDir: "docs",
  favicon: "/logo.png",

  blog: {
    medias: {
      BiliBili: "https://space.bilibili.com/430008973",
      Discord: "https://discord.com/invite/SCAfRyAVnR",
      Github: "https://github.com/EvanHsieh0415/",
      QQ: "https://qm.qq.com/q/qmCIBVUwY",
      Youtube: "https://www.youtube.com/@%E8%8A%92%E6%9E%9C%E5%87%8D%E5%B8%83%E4%B8%81",
      "Personal Blog": {
        icon: "https://avatars.githubusercontent.com/u/74277414",
        link: "https://mango-blog.pages.dev/",
      },
    },
    avatar: "https://avatars.githubusercontent.com/u/74277414",
  },

  displayFooter: true,
  blogLocales: {
    empty: "",
  },

  locales: {
    "/": {
      navbar: enusNavbar,
      sidebar: enusSidebar,

      blog: {
        description: "An interested KubeJS developer.",
      },
    },
    "/zh-tw/": {
      navbar: zhtwNavbar,
      sidebar: zhtwSidebar,

      blog: {
        description: "一個興趣使然的 KubeJS 開發者",
      },

      navbarLocales: {
        langName: "正體中文",
      }
    },
    "/zh-cn/": {
      navbar: zhcnNavbar,
      sidebar: zhcnSidebar,

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
      defaultLang: "javascript",
      logLevel: "silent",
    }
  },

  plugins: {
    blog: {
      filter: ({ frontmatter, filePathRelative, lang, path }: Page) =>
        !!(
          frontmatter.article ??
          (!!filePathRelative &&
            !frontmatter.home &&
            frontmatter.index !== false)
        ),
      excerptLength: 100,
    },

    components: {
      components: ["Badge", "VPCard", "VidStack"],
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});
