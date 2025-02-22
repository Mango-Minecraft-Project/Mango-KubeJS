<template>
  <div v-if="frontmatter.mod" class="component-modinfo-block">
    <div v-if="name">模組名稱：{{ name }}</div>
    <div v-if="author">作者：{{ author }}</div>
    <div v-if="hasExternalLink">
      <span v-if="CurseForge"><BadgeCurseForge :path="CurseForge" /><br></span>
      <span v-if="Modrinth"><BadgeModrinth :path="Modrinth" /><br></span>
      <span v-if="GitHub"><BadgeGitHub :path="GitHub" /><br></span>
      <span v-if="McMod"><BadgeMcMod :path="McMod" /><br></span>
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
  }
}
</style>

<script lang="ts">
export default {
  computed: {
    frontmatter() {
      return this.$page.frontmatter;
    },
    name() {
      return this.frontmatter.mod.name ?? this.frontmatter.title;
    },
    author() {
      const author = this.frontmatter.mod.author ?? this.frontmatter.author;
      if (typeof author === "string") return author;
      if (Array.isArray(author)) return author.join(", ");
    },
    hasExternalLink() {
      return this.CurseForge || this.Modrinth || this.GitHub || this.McMod || this.Wiki;
    },
    CurseForge() {
      return this.frontmatter.mod.CurseForge ?? this.frontmatter.mod.curseforge;
    },
    Modrinth() {
      return this.frontmatter.mod.Modrinth ?? this.frontmatter.mod.modrinth;
    },
    GitHub() {
      return this.frontmatter.mod.GitHub ?? this.frontmatter.mod.Github ?? this.frontmatter.mod.github;
    },
    McMod() {
      return this.frontmatter.mod.McMod ?? this.frontmatter.mod.Mcmod ?? this.frontmatter.mod.mcmod;
    },
    Wiki() {
      return this.frontmatter.mod.Wiki ?? this.frontmatter.mod.wiki;
    },
  },
};
</script>
