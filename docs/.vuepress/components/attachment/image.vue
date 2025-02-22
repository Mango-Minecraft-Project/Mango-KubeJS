<template>
  <figure>
    <img :src="link" :alt="text"></img>
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