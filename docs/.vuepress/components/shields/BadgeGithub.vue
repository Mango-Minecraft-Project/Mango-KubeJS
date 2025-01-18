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
  return `https://github.com/${props.path}`;
});

const ImageAlt = computed(() => {
  return `${props.name} Github Badge`;
});
</script>

<template>
  <a :href="aHref" class="custom-badge"><img src="https://img.shields.io/badge/Github-313338?style=for-the-badge&logo=Github" :alt="ImageAlt" /></a>
</template>
