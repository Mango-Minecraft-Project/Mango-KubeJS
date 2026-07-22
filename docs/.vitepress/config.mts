import { defineConfig } from "vitepress";
import themeConfig from "./theme.mts";
import i18n from "./i18n.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mango's KubeJS Wiki",
  titleTemplate: ":title | Mango's KubeJS Wiki",
  description: "Mango's KubeJS Wiki",
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&family=Noto+Sans+TC:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap",
      },
    ],
  ],
  base: "/",
  cleanUrls: true,
  ignoreDeadLinks: false,
  appearance: "force-dark",
  lastUpdated: true,

  themeConfig,
  ...i18n,

  vite: {
    publicDir: ".vitepress/public/",
  },
});
