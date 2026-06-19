<template>
  <component 
    :is="currentComponent" 
    :link="resolvedLink" 
    :text="resolvedText" 
    v-bind="$attrs" 
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vuepress/client";
import Image from "./AttachmentImage.vue";
import Video from "./AttachmentVideo.vue";
import Download from "./AttachmentDownload.vue";

// 定義 Props
const props = withDefaults(
  defineProps<{
    type?: "download" | "video" | "image";
    link: string;
    text?: string;
    global?: boolean;
  }>(),
  {
    global: false,
  }
);

// 停用屬性繼承到根節點（因為我們要手動 v-bind="$attrs" 給動態組件）
defineOptions({
  inheritAttrs: false,
});

// 獲取目前路由（必須在 setup 頂層調用）
const route = useRoute();

// 輔助函式：取得副檔名
function getExtension(filename: string) {
  const match = filename.match(/\.(\w+)$/);
  return match ? match[1] : "";
}

// 輔助函式：根據副檔名取得組件
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

// 計算屬性：決定要渲染哪個組件
const currentComponent = computed(() => {
  switch (props.type) {
    case "download":
      return Download;
    case "video":
      return Video;
    case "image":
      return Image;
    default:
      return getComponentByExtension(getExtension(props.link));
  }
});

// 計算屬性：解析最終的 Link 路徑
const resolvedLink = computed(() => {
  // 修正：從正確的 route.path 開始處理
  let currentPath = route.path.replace(/\.html$/, "/");
  let url = currentPath + props.link;

  if (props.global) {
    url = url.replace("zh-tw/", "");
  }

  return url.startsWith("/") ? url : "/" + url;
});

// 計算屬性：解析顯示文字
const resolvedText = computed(() => {
  return props.text ?? props.link;
});
</script>