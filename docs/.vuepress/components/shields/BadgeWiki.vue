<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  }
});

const aHref = computed(() => {
  return props.path;
});

const ImageAlt = computed(() => {
  return `${props.name} Wiki Badge`;
});
</script>

<template>
  <a :href="aHref" class="custom-badge"><img src="https://img.shields.io/badge/Wiki-313338?style=for-the-badge&logo=wikipedia" :alt="ImageAlt" /></a>
</template>
