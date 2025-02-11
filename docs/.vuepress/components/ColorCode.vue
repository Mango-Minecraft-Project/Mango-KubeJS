<script setup>
import { computed } from "vue";

const props = defineProps({
  color: String,
});

const color = computed(() => {
  return props.color;
});
const backgroundColor = computed(() => {
  return `background-color: ${props.color}`;
});
</script>

<style scoped>
.color-code {
  display: inline-block;
  background-color: #000000;
  border-radius: 1em;
  height: 1em;
  width: 1em;
  border: 1px solid #aaa;
  vertical-align: text-top;
}
</style>

<template>
  <span class="color-code" :style="backgroundColor"><br /></span>&nbsp;{{ color }}
</template>
