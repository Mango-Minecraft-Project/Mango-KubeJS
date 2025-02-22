import { defineClientConfig } from "vuepress/client";

import CustomComponents from "./components/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    const addComponent = ([name, component]) => app.component(name, component);

    Object.entries(CustomComponents).forEach(addComponent);
  },
});
