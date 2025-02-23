<template>
  <figure>
    <img :src="link" :alt="text"></img>
    <figcaption v-if="text">{{ text }}</figcaption>
  </figure>
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