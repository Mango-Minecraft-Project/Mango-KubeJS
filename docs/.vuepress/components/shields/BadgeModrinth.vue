<template>
  <a :href="aHref" class="custom-badge" target="_blank">
    <img src="https://img.shields.io/badge/Modrinth-313338?style=for-the-badge&logo=Modrinth" :alt="ImageAlt" />
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
      return this.path.startsWith("i-")
        ? `https://modrinth.com/project/${this.path.replace("i-", "")}`
        : `https://modrinth.com/${this.path}`;
    },
    ImageAlt() {
      return `${this.name ?? this.path} Modrinth Badge`;
    },
  },
};
</script>
