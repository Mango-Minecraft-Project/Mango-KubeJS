import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";

const Dir = ($path: string) => path.resolve(getDirname(import.meta.url), $path);

export default defineUserConfig({
  base: "/",
  port: 8080,

  locales: {
    "/": {
      lang: "en-US",
      title: "Mango's KubeJS Wiki",
      description: "Mango's KubeJS Wiki",
    },
    "/zh-tw/": {
      lang: "zh-TW",
      title: "芒果的 KubeJS Wiki",
      description: "芒果的 KubeJS Wiki",
    },
    "/zh-cn/": {
      lang: "zh-CN",
      title: "芒果的 KubeJS Wiki",
      description: "芒果的 KubeJS Wiki",
    },
    // "/test/zh-tw": {
    //   lang: "zh-TW",
    // },
    // "/test/zh-cn": {
    "/test/": {
      lang: "zh-CN",
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

  clientConfigFile: Dir("./client.ts"),

  alias: {
    "@components": Dir("./components"),
    "@private-components": Dir("./components/private"),
    "@theme-hope": "vuepress-theme-hope",
  },

  markdown: {
    headers: {
      level: [2, 3, 4, 5],
    },
  },
});
