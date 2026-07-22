import { DefaultTheme } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

export default {
  i18nRouting: true,
  logo: "/logo.png",
  siteTitle: "Mango's KubeJS Wiki",

  nav: [],
  sidebar: generateSidebar({
    documentRootPath: "docs",
  }),

  aside: true,
  outline: "deep",
  socialLinks: [
    {
      icon: "github",
      link: "https://github.com/Mango-Minecraft-Project/Mango-KubeJS",
    },
  ],
  editLink: {
    pattern:
      "https://github.com/Mango-Minecraft-Project/Mango-KubeJS/edit/main/docs/:path",
  },
  lastUpdated: {},
  docFooter: {},

  search: {
    provider: "local",
  },
} satisfies DefaultTheme.Config;
