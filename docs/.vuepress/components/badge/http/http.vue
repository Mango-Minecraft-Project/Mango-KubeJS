<template>
  <Badge :text="httpTypeU" :type="badgeType" :vertical="vertical" />
</template>

<script lang="ts">
export default {
  props: {
    httpType: {
      type: String,
      default: "GET",
      validator(value, props) {
        return ["GET", "HEAD", "POST", "PUT", "DELETE", "CONNECT", "OPTIONS", "TRACE", "PATCH"].includes(String(value).toUpperCase());
      },
    },
    vertical: {
      type: String,
      default: "middle",
      validator(value, props) {
        return ["top", "middle", "baseline", "bottom"].includes(String(value));
      },
    }
  },
  computed: {
    httpTypeU() {
      return this.httpType.toUpperCase();
    },
    badgeType() {
      return {
        GET: "tip",
        HEAD: "tip",
        POST: "warning",
        PUT: "warning",
        PATCH: "warning",
        DELETE: "danger",
        CONNECT: "info",
        OPTIONS: "info",
        TRACE: "important",
      }[this.httpTypeU];
    },
  },
};
</script>