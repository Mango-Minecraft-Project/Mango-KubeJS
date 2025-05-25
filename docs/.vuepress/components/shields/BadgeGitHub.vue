<template>
  <a :href="aHref" class="custom-badge" target="_blank">
    <img src="https://img.shields.io/badge/Github-313338?style=for-the-badge&logo=Github" :alt="ImageAlt" />
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
      return `https://github.com/${this.path}`;
    },
    ImageAlt() {
      return `${this.name ?? this.path} GitHub Badge`;
    },
  },
};
</script>
