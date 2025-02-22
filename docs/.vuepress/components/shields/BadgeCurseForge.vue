<script setup>
import { computed } from "vue";

const props = defineProps({
  name: String,
  path: {
    type: [String, Number],
    required: true,
  },
});

const aHref = computed(() => {
  if (parseInt(props.path)) return `https://curseforge.com/projects/${props.path}`;
  return `https://curseforge.com/minecraft/${props.path}`;
});

const ImageAlt = computed(() => {
  return `${props.name ?? props.path} CurseForge Badge`;
});
</script>

<template>
  <a :href="aHref" class="custom-badge"
    ><img src="https://img.shields.io/badge/CurseForge-313338?style=for-the-badge&logo=CurseForge" :alt="ImageAlt"
  /></a>
</template>
