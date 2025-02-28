<template>
  <div v-if="!frontmatter.isOriginal && source" class="component-info-block">
    <div v-if="source">
      {{ i18nText.source }}<a :href="source">{{ source }}</a>
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
    i18nText() {
      return {
        "en-US": {
          source: "Original Article:",
        },
        "zh-CN": {
          source: "原文：",
        },
        "zh-TW": {
          source: "原文：",
        },
      }[usePageLang().value];
    },
  },
};
</script>
