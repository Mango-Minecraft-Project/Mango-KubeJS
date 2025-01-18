import { navbar } from "vuepress-theme-hope";

export const zhcnNavbar = navbar([
  {
    text: "Wiki",
    link: "https://wiki.mango-kubejs.pages.dev/zh-cn/",
    target: "_self",
  },
  {
    text: "主页",
    link: "https://mango-kubejs.pages.dev/zh-cn/",
    target: "_self",
  },
  {
    text: "文章主页",
    link: "/zh-cn/",
    target: "_self",
    children: [
      {
        text: "相关链接",
        icon: "list-ol",
        link: "/zh-tw/links",
      },
      {
        text: "笔记",
        icon: "book",
        link: "/zh-tw/notes/",
      },
      {
        text: "示例脚本",
        icon: "book",
        link: "/zh-tw/example-scripts/",
      },
      {
        text: "小技巧",
        icon: "book",
        link: "/zh-tw/tips-and-tricks/",
      },
    ],
  },
]);
