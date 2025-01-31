import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  port: 8080,

  locales: {
    "/": {
      lang: "en-US",
      title: "Mango's KubeJS Encyclopaedia",
      description: "Mango's KubeJS Encyclopaedia",
    },
    "/zh-tw/": {
      lang: "zh-TW",
      title: "芒果的 KubeJS 百科",
      description: "芒果的 KubeJS 百科",
    },
    "/zh-cn/": {
      lang: "zh-CN",
      title: "芒果的 KubeJS 百科",
      description: "芒果的 KubeJS 百科",
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
