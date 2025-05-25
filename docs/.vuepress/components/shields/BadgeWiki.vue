<template>
  <a :href="aHref" class="custom-badge" target="_blank">
    <img src="https://img.shields.io/badge/Wiki-313338?style=for-the-badge&logo=wikipedia" :alt="ImageAlt" />
  </a>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    path: {
      type: String,
      required: true,
    },
  },
  computed: {
    aHref() {
      return `https://wiki.mcmod.cn/${this.path}`;
    },
    ImageAlt() {
      return `${this.name ?? this.path} Wiki Badge`;
    },
  },
};
</script>
