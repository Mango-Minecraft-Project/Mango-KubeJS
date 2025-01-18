import { navbar } from "vuepress-theme-hope";

export const enusNavbar = navbar([
  {
    text: "Wiki",
    link: "https://wiki.mango-kubejs.pages.dev/",
    target: "_self",
  },
  {
    text: "Home Page",
    link: "https://mango-kubejs.pages.dev/",
    target: "_self",
  },
  {
    text: "Article Home",
    link: "/",
    target: "_self",
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
