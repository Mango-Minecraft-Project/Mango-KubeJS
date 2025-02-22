<script setup lang="ts">
import CommonWrapper from "vuepress-theme-hope/components/CommonWrapper.js";
import NormalPage from "vuepress-theme-hope/components/NormalPage.js";
import SkipLink from "vuepress-theme-hope/components/SkipLink.js";
</script>

<template>
  <SkipLink />

  <CommonWrapper>
    <NormalPage>
      <template #tocBefore>
        <ModInfo />
      </template>
      <template #contentBefore>
        <ArticleSource />
      </template>
    </NormalPage>
  </CommonWrapper>
</template>
