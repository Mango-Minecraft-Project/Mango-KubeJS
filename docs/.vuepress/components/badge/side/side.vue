<template>
  <Badge :text="side" type="info" :vertical="vertical" />
</template>

<script lang="ts">
const sides = ["Client", "Server", "Startup"];
const verticals = ["top", "middle", "baseline", "bottom"];

export default {
  props: {
    side: {
      type: String,
      required: true,
      validator(value, props) {
        return sides.includes(String(value));
      },
    },
    vertical: {
      type: String,
      default: "baseline",
      validator(value, props) {
        return verticals.includes(String(value));
      },
    },
  },
};
</script>
