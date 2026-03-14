import { hopeTheme } from "vuepress-theme-hope";
import locales from "./theme/locales.js";
import type { Page } from "vuepress";

export default hopeTheme(
  {
    // # Basic
    hostname: "kubejs.ytmango.uk",
    author: {
      name: "MangoJellyPudding",
      url: "https://ytmango.uk",
    },
    license: "AGPL-3.0",
    favicon: "/logo.png",
    // hotReload: true, // enable it to preview all changes in time
    locales,

    // # Feature
    encrypt: {
      config: {},
    },

    // # Layouts
    // - Navbar
    navbarLayout: {
      start: ["Brand", "Language", "Search"],
      center: ["Links"],
      end: ["Repo", "Outlook"],
    },
    logo: "/logo.svg",
    repo: "Mango-Minecraft-Project/Mango-KubeJS",
    repoDisplay: true,
    repoLabel: "GitHub",

    // - Sidebar
    sidebarSorter: ["readme", "order", "filename", "title", "date", "date-desc"],
    // headerDepth: 2,

    // - Metadata
    lastUpdated: true,
    contributors: true,
    editLink: true,
    docsRepo: "Mango-Minecraft-Project/Mango-KubeJS",
    docsBranch: "main",
    docsDir: "docs",

    // - Footer
    copyright: `Copyright © ${new Date().getUTCFullYear()} MangoJellyPudding`,
    displayFooter: true,

    // - misc
    toc: true,

    // # Appearance
    darkmode: "enable",
    externalLinkIcon: false,
    fullscreen: true,
    pure: true,
    focus: false,
    print: true,

    // i18n
    blogLocales: {
      empty: "",
    },

    // # Markdown
    markdown: {
      // - behavior
      gfm: true,
      vPre: true,
      breaks: true,
      linkify: true,
      figure: true,
      imgLazyload: true,
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
      linksCheck: true,

      // - grammar
      component: true,
      footnote: true,
      imgMark: true,
      imgSize: true,
      obsidianImgSize: true,
      include: true,
      tabs: true,
      tasklist: true,

      // - stylize
      align: true,
      attrs: true,
      mark: true,
      sup: true,
      sub: true,
      spoiler: true,
      stylize: [],

      // - chart
      plantuml: true,

      // - code
      codeTabs: true,
      preview: true,
      demo: true,

      alert: true,
      hint: true,
    },

    plugins: {
      blog: true,

      components: {
        components: ["Badge", "VPCard", "VidStack", "SiteInfo", "VPBanner"],
      },

      icon: {
        prefix: "fa6-solid:",
      },

      slimsearch: {
        indexContent: false,
        suggestion: true,

        customFields: [
          {
            getter: (page: Page) =>
              (<string[]>page.frontmatter.tags ?? []).concat(<string[]>page.frontmatter.categories ?? []),
          },
        ],
        locales: {
          "/zh-tw/": {
            placeholder: "搜尋",
          },
        },
      },

      git: {
        changelog: true,
      },

      redirect: {
        config: (app) => {
          const config = {
            ...Object.fromEntries(
              app.pages
                .filter(({ path }) => {
                  const data = path.split("/").includes("addons");
                  return data;
                })
                .map(({ path }) => {
                  const before = path
                    .replace("Heaven_Destiny_Moment", "heaven_destiny_moment")
                    .replace("TConstruct_JS", "tconstruct_js");
                  const data = [before, path];
                  return before !== path ? data : [];
                })
                .filter((data) => !!data.length),
            ),
            "/zh-tw/addons/advancement_js": "/zh-tw/addons/Advancement_JS",
            "/zh-tw/addons/createheatjs": "/zh-tw/addons/Create_Heat_JS",
            "/zh-tw/addons/create-ponder": "/zh-tw/addons/Create_Ponder",
            "/zh-tw/addons/eventjs": "/zh-tw/addons/EventJS",
            "/zh-tw/addons/filesjs": "/zh-tw/addons/FilesJS",
            "/zh-tw/addons/heaven_destiny_moment/": "/zh-tw/addons/Heaven_Destiny_Moment/",
            "/zh-tw/addons/tconstruct_js/": "/zh-tw/addons/TConstruct_JS/",

            "/addons/tconstruct_js/": "/addons/TConstruct_JS/",
          };
          // console.log(config);
          return config;
        },
      },
    },
  },
  {
    custom: true,
  },
);
