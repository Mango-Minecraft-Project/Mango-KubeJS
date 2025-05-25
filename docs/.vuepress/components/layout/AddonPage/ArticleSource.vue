<template>
  <div v-if="!frontmatter.isOriginal && (source || license)" class="component-info-block">
    <div v-if="source">
      {{ i18nText.source }}<a :href="source">{{ source }}</a>
    </div>
    <div v-if="license">
      {{ i18nText.license }}{{ license }}
    </div>
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
    source() {
      return this.frontmatter.source;
    },
    license() {
      return this.frontmatter.license;
    },
    i18nText() {
      return {
        "en-US": {
          source: "Original Article:",
          license: "License: ",
        },
        "zh-CN": {
          source: "原文：",
          license: "许可：",
        },
        "zh-TW": {
          source: "原文：",
          license: "許可：",
        },
      }[usePageLang().value];
    },
  },
};
</script>
