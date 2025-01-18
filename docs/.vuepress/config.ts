import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  port: 8080,

  lang: "en-US",
  title: "Blog Demo",
  description: "A blog demo for vuepress-theme-hope",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh-tw/": {
      lang: "zh-TW",
      title: "部落格範例",
      description: "vuepress-theme-hope 的部落格範例",
    },
    "/zh-cn/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,

  head: [
    ["meta", { property: "og:image", content: "/logo.png" }],
    ["meta", { property: "og:image:type", content: "image/png" }],
    ["meta", { property: "og:image:width", content: "128" }],
    ["meta", { property: "og:image:height", content: "128" }],
    ["meta", { property: "theme-color", content: "#422066" }],
  ],

  clientConfigFile: path.resolve(__dirname, "./client.ts"),

  // Enable it with pwa
  // shouldPrefetch: false,
});
