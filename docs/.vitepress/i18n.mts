import { DefaultTheme, UserConfig } from "vitepress";

export default {
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      link: "/",
    },
    "zh-CN": {
      label: "简体中文（中国）",
      lang: "zh-CN",
      link: "/zh-CN/",
    },
    "zh-TW": {
      label: "繁體中文（台灣）",
      lang: "zh-TW",
      link: "/zh-TW/",
    },
  },
} satisfies UserConfig<NoInfer<DefaultTheme.Config>>;
