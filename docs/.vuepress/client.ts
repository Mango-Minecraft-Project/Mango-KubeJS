import { defineClientConfig } from "vuepress/client";

import BadgeComponent from "./components/shields/index.js";
import ColorCode from "./components/ColorCode.vue";
import IconImage from "./components/IconImage.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    const addComponent = ([name, component]) => app.component(name, component);

    Object.entries(BadgeComponent).forEach(addComponent);
    addComponent(["ColorCode", ColorCode]);
    addComponent(["IconImage", IconImage]);
  },
});
