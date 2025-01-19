import { defineClientConfig } from "vuepress/client";

import BadgeComponent from "./components/shields/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    const addComponent = ([name, component]) => app.component(name, component);

    Object.entries(BadgeComponent).forEach(addComponent);
  },
});
