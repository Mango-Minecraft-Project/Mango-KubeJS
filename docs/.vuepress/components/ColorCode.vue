<template>
  <div><span class="color-code" :style="backgroundColor"></span>&nbsp;{{ color }}</div>
</template>

<style scoped>
.color-code {
  display: inline-block;
  background-color: #000000;
  border-radius: 1em;
  height: 1em;
  width: 1em;
  border: 0.1em solid #aaa;
  vertical-align: text-top;
}
</style>

<script lang="ts">
export default {
  props: {
    color: String,
  },
  computed: {
    backgroundColor() {
      return `background-color: ${this.color}`;
    },
  },
};
</script>
