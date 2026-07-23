<template>
  <component
    :is="currentComponent"
    :src="resolvedSrc"
    :text="resolvedText"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vuepress/client";

import AttachmentImage from "./AttachmentImage.vue";
import AttachmentVideo from "./AttachmentVideo.vue";
import AttachmentDownload from "./AttachmentDownload.vue";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    src?: string;
    link?: string; // 保留舊版相容性
    text?: string;
    type?: string;
    global?: boolean;
  }>(),
  {
    global: true,
  },
);

const route = useRoute();

const LANGUAGES = ["en-us", "zh-tw", "zh-cn"];

const source = computed(() => {
  return props.src ?? props.link ?? "";
});

function getExtension(filename: string) {
  return filename.split(".").pop()?.toLowerCase() ?? "";
}

function getComponentByExtension(extension: string) {
  switch (extension) {
    case "mp4":
    case "mp3":
    case "ogg":
    case "webm":
      return AttachmentVideo;

    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "webp":
    case "svg":
      return AttachmentImage;

    default:
      return AttachmentDownload;
  }
}

function getAttachmentDirectory(path: string) {
  const clean = path.replace(/\.html$/, "").replace(/^\/|\/$/g, "");

  const parts = clean.split("/");

  const filename = parts.pop();

  if (!filename) {
    return parts.join("/");
  }

  // README 不保留資料夾名稱
  if (filename.toLowerCase() === "readme") {
    return parts.join("/");
  }

  // 其他頁面保留檔名作為資料夾
  return [...parts, filename].join("/");
}

const currentComponent = computed(() => {
  const type = props.type?.toLowerCase();

  switch (type) {
    case "download":
      return AttachmentDownload;

    case "image":
    case "img":
      return AttachmentImage;

    case "video":
      return AttachmentVideo;

    default:
      return getComponentByExtension(getExtension(source.value));
  }
});

const resolvedSrc = computed(() => {
  const src = source.value;

  // 外部 URL
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  // 手動指定絕對路徑
  if (src.startsWith("/")) {
    return src;
  }

  const attachmentDir = getAttachmentDirectory(route.path);

  const segments = attachmentDir.split("/").filter(Boolean);

  let lang = "en-us";

  if (segments.length > 0 && LANGUAGES.includes(segments[0].toLowerCase())) {
    lang = segments[0];
    segments.shift();
  }

  const relativeDir = segments.join("/");

  const prefix = props.global ? "/global" : `/${lang}`;

  return `${prefix}/${relativeDir}/${src}`.replace(/\/+/g, "/");
});

const resolvedText = computed(() => {
  return props.text ?? source.value;
});
</script>
