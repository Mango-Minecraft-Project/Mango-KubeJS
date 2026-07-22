<template>
  <img
    :src="`/assets/${namespace}/${path}.png`"
    class="icon-image"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string;
}>();

const [namespace, path] = props.id.split(':');
</script>