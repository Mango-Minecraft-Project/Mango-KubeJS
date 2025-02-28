<template>
  output: {{ output ?? "output" }}
</template>

<script lang="ts">
import { usePageLang } from 'vuepress/client'

export default {
  props: {
    path: String,
  },
  computed: {
    output() {
      return Object.getOwnPropertyNames(this);
    },
  },
};
</script>
