<template>
  <Badge :text="text" type="info" :vertical="vertical" />
</template>

<script lang="ts">
import { usePageLang } from 'vuepress/client';

const sides = ["Client", "Server", "Startup"];
const verticals = ["top", "middle", "baseline", "bottom"];
const i18nText = {
  "en-US": {
    Client: "Client",
    Server: "Server",
    Startup: "Startup",
  },
  "zh-CN": {
    Client: "客户端",
    Server: "服务端",
    Startup: "启动端",
  },
  "zh-TW": {
    Client: "客戶端",
    Server: "伺服器端",
    Startup: "啟動端",
  },
}

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
  computed: {
    text() {
      return (i18nText[usePageLang().value] ?? i18nText["en-US"])[this.side];
    }
  },
};
</script>
