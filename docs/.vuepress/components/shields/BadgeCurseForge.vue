<template>
  <a :href="aHref" class="custom-badge" target="_blank">
    <img src="https://img.shields.io/badge/CurseForge-313338?style=for-the-badge&logo=CurseForge" :alt="ImageAlt" />
  </a>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    path: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    aHref() {
      return parseInt(this.path)
        ? `https://curseforge.com/projects/${this.path}`
        : `https://curseforge.com/minecraft/${this.path}`;
    },
    ImageAlt() {
      return `${this.name ?? this.path} CurseForge Badge`;
    },
  },
};
</script>
