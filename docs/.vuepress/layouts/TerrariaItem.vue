<script setup lang="ts">
import CommonWrapper from "vuepress-theme-hope/components/CommonWrapper.js";
import NormalPage from "vuepress-theme-hope/components/NormalPage.js";
import SkipLink from "vuepress-theme-hope/components/SkipLink.js";
</script>

<template>
  <SkipLink />

  <CommonWrapper>
    <NormalPage>
      <template>
        <TerrariaItemInfo />
      </template>
    </NormalPage>
  </CommonWrapper>
</template>

<style lang="scss">
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
}
</style>