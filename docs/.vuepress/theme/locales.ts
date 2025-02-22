import { enusNavbar, zhtwNavbar, zhcnNavbar } from "./navbar/index.js";
import { enusSidebar, zhtwSidebar, zhcnSidebar } from "./sidebar/index.js";

export default {
  "/": {
    navbar: enusNavbar,
    sidebar: enusSidebar,

    author: "MangoJellyPudding",

    blog: {
      description: "An interested KubeJS developer.",
    },
  },
  "/zh-tw/": {
    navbar: zhtwNavbar,
    sidebar: zhtwSidebar,

    author: "芒果凍布丁",

    navbarLocales: {
      langName: "正體中文",
    },
    metaLocales: {
      origin: "原創",
      toc: "此頁內容",
    },
  },
  "/zh-cn/": {
    navbar: zhcnNavbar,
    sidebar: zhcnSidebar,

    author: "芒果凍布丁",

    blog: {
      description: "一个兴趣使然的 KubeJS 开发者",
    },
  },
};
