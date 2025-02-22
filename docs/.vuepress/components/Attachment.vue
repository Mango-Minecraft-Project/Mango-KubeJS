<template>
  <component :is="currentComponent" :link="link" :text="text" />
</template>

<script setup>
import { useRoute } from "vuepress/client";
import { computed } from "vue";
import Image from "./attachment/image.vue";
import Video from "./attachment/video.vue";
import Download from "./attachment/download.vue";


const props = defineProps({
  type: {
    type: String,
    validator: (value) => ["download", "video", "image"].includes(value),
  },
  link: {
    type: String,
    required: true,
  },
  text: String,
});

const currentComponent = computed(() => {
  // 優先根據 type 做判斷
  switch (props.type) {
    case "download":
      return Download;
    case "video":
      return Video;
    case "image":
      return Image;
    default: // 不指定 type 時，根據 link 的副檔名做判斷
      switch (props.link.match(/\.(\w+)$/)[1]) {
        case "mp4":
        case "mp3":
        case "ogg":
          return Video;
        case "png":
        case "jpg":
        case "gif":
          return Image;
        default:
          return Download;
      }
  }
});

const route = useRoute();
const { path } = route;

// "/xxx.html" -> "/docs/xxx/"
const link = computed(() => "/docs/" + path.replace(/\.html$/, "/").replace(/^\//, "") + props.link);

// 如果沒有指定 text，則使用 link
const text = computed(() => props.text ?? props.link);
</script>
