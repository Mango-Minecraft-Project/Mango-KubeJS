<template>
  <VidStack :src="src" :title="text" v-bind="$attrs" />
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  text?: string;
}>();
</script>