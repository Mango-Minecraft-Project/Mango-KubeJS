import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
  enhance: ({ app }) => {
    const addComponent = ([name, component]) => app.component(name, component);
    // Object.entries(BadgeComponent).forEach(addComponent);
  },
});
