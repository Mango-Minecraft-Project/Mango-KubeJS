<template>
  <div v-if="displayName.some((name) => frontmatter[name])" class="component-info-block">
    <template v-for="name in displayName">
      <div v-if="frontmatter[name]">
        {{ i18nText[name] }}<span v-html="specialConsumer(name)"></span>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.component-info-block {
  background-color: var(--vp-c-bg-alt);
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  margin: 0.5rem 1rem;

  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: var(--vp-c-text-mute);

  text-align: center;
}
</style>

<script lang="ts">
import { usePageLang } from "vuepress/client";

export default {
  computed: {
    frontmatter() {
      return this.$page.frontmatter;
    },
    displayName() {
      return ["source", "license", "idea"];
    },
    specialConsumer() {
      return (name: string) => {
        const text = this.frontmatter[name];
        switch (name) {
          case "source":
          case "idea":
            return `<a href="${text}" target="_blank" rel="noopener noreferrer">${text}</a>`;
          default:
            return text;
        }
      }
    },
    i18nText() {
      return {
        "en-US": {
          source: "Original Article:",
          license: "License: ",
          idea: "Idea from: ",
        },
        "zh-CN": {
          source: "原文：",
          license: "许可：",
          idea: "灵感来源：",
        },
        "zh-TW": {
          source: "原文：",
          license: "許可：",
          idea: "靈感來源：",
        },
      }[usePageLang().value];
    },
  },
};
</script>
