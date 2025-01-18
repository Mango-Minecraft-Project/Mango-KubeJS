import { hopeTheme } from "vuepress-theme-hope";
import { Page } from "vuepress";

import { enusNavbar, zhtwNavbar, zhcnNavbar } from "./navbar/index.js";
import { enusSidebar, zhtwSidebar, zhcnSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "Mr.Hope",
    url: "https://mister-hope.com",
  },

  logo: "https://theme-hope-assets.vuejs.press/logo.svg",
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  darkmode: "enable",
  docsDir: "docs",
  favicon: "/logo.png",

  blog: {
    medias: {
      Baidu: "https://example.com",
      BiliBili: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "mailto:info@example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
      VuePressThemeHope: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://theme-hope.vuejs.press",
      },
    },
  },

  locales: {
    "/en-us/": {
      navbar: enusNavbar,
      sidebar: enusSidebar,

      footer: "Default footer",
      displayFooter: true,

      blog: {
        description: "A FrontEnd programmer",
        intro: "/en-us/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
    "/zh-tw/": {
      navbar: zhtwNavbar,
      sidebar: zhtwSidebar,

      footer: "預設頁腳",
      displayFooter: true,

      blog: {
        description: "一個前端開發者",
        intro: "/en-tw/intro.html",
      },

      metaLocales: {
        editLink: "在 GitHub 上編輯此頁",
      },
    },
    "/zh-cn/": {
      navbar: zhcnNavbar,
      sidebar: zhcnSidebar,

      footer: "默认页脚",
      displayFooter: true,

      blog: {
        description: "一个前端开发者",
        intro: "/en-cn/intro.html",
      },

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {},
  },

  // enable it to preview all changes in time
  // hotReload: true,

  // These features are enabled for demo, only preserve features you need here
  markdown: {
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

    redirect: {
      switchLocale: "modal",
      defaultBehavior: "homepage",
      defaultLocale: "/en-us/",
      config: {
        "/": "/en-us/",
      },
    },

    components: {
      components: ["Badge", "VPCard", "VidStack"],
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});
