<template>
  <a :href="src" download>{{ text }}</a>
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  text: string;
}>();
</script>
