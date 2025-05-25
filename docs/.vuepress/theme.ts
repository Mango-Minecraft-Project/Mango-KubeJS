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
                .filter((data) => !!data.length)
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
  }
);
