<template>
  <p>Current Page: {{ currentPage }}</p>
</template>

<script lang="ts">
import { usePageData, withBase, resolveRoute } from "vuepress/client";
import { useRoute } from "vuepress/client";
import { computed, onMounted, ref, watch } from "vue";

export default {
  props: {
    path: String,
  },
  // setup(props) {
  //   const pageData = usePageData();

  //   const currentPage = computed(() => {
  //     const pages = pageData.value.pages;
  //     return pages;
  //   });

  //   return {
  //     currentPage,
  //   };
  // },
  computed: {
    currentPage() {
      let frontmatter = {};
      resolveRoute(this.path, this.$page.path)
        .loader()
        .then((page) => {
          frontmatter = page.data.frontmatter;
        })
        .catch((error) => {
          console.error(error);
          frontmatter = {};
        });
      return frontmatter;
    },
  },
};
</script>
