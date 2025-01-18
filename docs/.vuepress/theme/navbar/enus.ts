import { navbar } from "vuepress-theme-hope";

export const enusNavbar = navbar([
  {
    text: "Home Page",
    link: "https://mango-kubejs.pages.dev/",
  },
  {
    text: "Wiki",
    link: "https://wiki.mango-kubejs.pages.dev/",
  },
  {
    text: "Article Home",
    link: "/",
    children: [
      {
        text: "Helpful Links",
        icon: "list-ol",
        link: "/zh-tw/links",
      },
      {
        text: "Notes",
        icon: "book",
        link: "/zh-tw/notes/",
      },
      {
        text: "Example Scripts",
        icon: "book",
        link: "/zh-tw/example-scripts/",
      },
      {
        text: "Tips and Tricks",
        icon: "book",
        link: "/zh-tw/tips-and-tricks/",
      },
    ],
  },
]);
