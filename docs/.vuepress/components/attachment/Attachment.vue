<template>
  <component :is="currentComponent" :link="resolvedLink" :text="resolvedText" v-bind="$attrs" />
</template>

<script lang="ts">
import { useRoute } from "vuepress/client";
import Image from "./AttachmentImage.vue";
import Video from "./AttachmentVideo.vue";
import Download from "./AttachmentDownload.vue";

function getExtension(filename: string) {
  return filename.match(/\.(\w+)$/)[1];
}

function getComponentByExtension(extension: string) {
  switch (extension) {
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

export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      validator: (value: string) => ["download", "video", "image"].includes(value),
    },
    link: {
      type: String,
      required: true,
    },
    text: String,
    global: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentComponent() {
      // 優先根據 type 做判斷
      switch (this.type) {
        case "download":
          return Download;
        case "video":
          return Video;
        case "image":
          return Image;
        default: // 不指定 type 時，根據 link 的副檔名做判斷
          return getComponentByExtension(getExtension(this.link));
      }
    },
    resolvedLink() {
      let currentPath = useRoute().path.replace(/\.html$/, "/");
      let url = currentPath + this.link;
      if (this.global) {
        url = url.replace("zh-tw/", ""); 
      }
      return url.startsWith('/') ? url : '/' + url;
    },
    resolvedText() {
      // 如果沒有指定 text，則使用 link
      return this.text ?? this.link;
    },
  },
};
</script>
