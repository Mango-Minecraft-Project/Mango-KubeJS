<template>
  <div class="attachment-image-wrapper" v-if="figure">
    <figure>
      <img :src="link" :alt="text" v-bind="filteredAttrs" :style="computedStyle" />
      <figcaption v-if="text">{{ text }}</figcaption>
    </figure>
  </div>
  <img v-else :src="link" :alt="text" v-bind="filteredAttrs" :style="computedStyle" />
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    link: {
      type: String,
      required: true,
    },
    text: String,
    figure: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    // 1. 把 width 和原本可能存在的 style 從 $attrs 中抽離，防止 width="1em" 被直接寫進 HTML 屬性
    filteredAttrs() {
      const { width, style, ...rest } = this.$attrs;
      return rest;
    },
    // 2. 將抽出來的 width 轉化為標準的 CSS 樣式
    computedStyle() {
      const baseStyle = this.$attrs.style || {};
      
      // 💡 1. 建立當前組件需要的預設樣式
      const defaultStyle = {
        // 如果是 1em 這種小圖示，用 middle 效果最好，它會跟文字的中心線對齊
        // 如果你希望它完全貼緊文字底部，可以改用 'bottom' 或 'text-bottom'
        // verticalAlign: 'middle' 
      };

      // 💡 2. 如果外部有傳 width，就加進來
      if (this.$attrs.width) {
        defaultStyle.width = this.$attrs.width;
      }

      // 💡 3. 合併樣式（外部寫的 style 權重最高，可以覆蓋預設值）
      return { ...defaultStyle, ...baseStyle };
    }
  }
};
</script>