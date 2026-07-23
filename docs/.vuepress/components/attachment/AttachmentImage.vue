<template>
  <div class="attachment-image-wrapper" v-if="figure">
    <figure>
      <img
        :src="src"
        :alt="text"
        v-bind="filteredAttrs"
        :style="computedStyle"
      />
      <figcaption v-if="text">{{ text }}</figcaption>
    </figure>
  </div>
  <img
    v-else
    :src="src"
    :alt="text"
    v-bind="filteredAttrs"
    :style="computedStyle"
  />
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    src: string;
    text?: string;
    figure?: boolean;
  }>(),
  {
    figure: false,
  },
);

const attrs = useAttrs();

const filteredAttrs = computed(() => {
  const { width, style, ...rest } = attrs as Record<string, unknown>;
  return rest;
});

const computedStyle = computed(() => {
  const rawStyle = (attrs as Record<string, unknown>).style;
  const width = (attrs as Record<string, unknown>).width;

  const baseStyle =
    rawStyle && typeof rawStyle === "object"
      ? (rawStyle as Record<string, string>)
      : {};

  const defaultStyle: Record<string, string> = {};

  if (typeof width === "string" && width.trim()) {
    defaultStyle.width = width;
  }

  return { ...defaultStyle, ...baseStyle };
});
</script>