<template>
  <div v-if="hasInfoBox" class="component-modinfo-block">
    <div v-if="name">{{ i18nText.name }}<br />　{{ name }}</div>
    <div v-if="author">{{ i18nText.author }}<br />　{{ author }}</div>
    <div v-if="hasExternalLink">
      <span v-if="CurseForge"><BadgeCurseForge :path="CurseForge" /><br /></span>
      <span v-if="Modrinth"><BadgeModrinth :path="Modrinth" /><br /></span>
      <span v-if="GitHub"><BadgeGitHub :path="GitHub" /><br /></span>
      <span v-if="McMod"><BadgeMcMod :path="McMod" /><br /></span>
      <span v-if="Wiki"><BadgeWiki :path="Wiki" /></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component-modinfo-block {
  background-color: var(--vp-c-bg-alt);
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  margin: 0.5rem 1rem;

  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: var(--vp-c-text-mute);

  div {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    white-space: nowrap;
  }
}
</style>

<script lang="ts">
import { usePageLang } from "vuepress/client";

export default {
  computed: {
    mod() {
      return this.$page.frontmatter.mod;
    },

    i18nText() {
      return {
        "en-US": {
          name: "Mod Name: ",
          author: "Author: ",
        },
        "zh-CN": {
          name: "模组名称：",
          author: "作者：",
        },
        "zh-TW": {
          name: "模組名稱：",
          author: "作者：",
        },
      }[usePageLang().value];
    },

    hasInfoBox() {
      return this.mod && (this.name || this.author || this.hasExternalLink);
    },
    name() {
      return this.mod.name;
    },
    author() {
      const author = this.mod.author;
      if (typeof author === "string") return author;
      if (Array.isArray(author)) return author.join(", ");
    },

    hasExternalLink() {
      return this.CurseForge || this.Modrinth || this.GitHub || this.McMod || this.Wiki;
    },
    CurseForge() {
      return this.mod.CurseForge ?? this.mod.curseforge;
    },
    Modrinth() {
      return this.mod.Modrinth ?? this.mod.modrinth;
    },
    GitHub() {
      return this.mod.GitHub ?? this.mod.Github ?? this.mod.github;
    },
    McMod() {
      return this.mod.McMod ?? this.mod.Mcmod ?? this.mod.mcmod;
    },
    Wiki() {
      return this.mod.Wiki ?? this.mod.wiki;
    },
  },
};
</script>
