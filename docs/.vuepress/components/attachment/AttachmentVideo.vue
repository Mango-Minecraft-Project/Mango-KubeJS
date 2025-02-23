<template>
  <VidStack :src="link" :title="text" />
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    text: String
  },
};
</script>