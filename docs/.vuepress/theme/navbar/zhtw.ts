import { navbar } from "vuepress-theme-hope";

export const zhtwNavbar = navbar([
  {
    text: "首頁",
    link: "https://mango-kubejs.pages.dev/zh-tw/",
  },
  {
    text: "Wiki",
    link: "https://wiki.mango-kubejs.pages.dev/zh-tw/",
  },
  {
    text: "文章首頁",
    link: "/zh-tw/",
    children: [
      {
        text: "相關連結",
        icon: "list-ol",
        link: "/zh-tw/links",
      },
      {
        text: "筆記",
        icon: "book",
        link: "/zh-tw/notes/",
      },
      {
        text: "範例腳本",
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
