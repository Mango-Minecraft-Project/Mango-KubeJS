<script setup>
import { computed } from "vue";

const props = defineProps({
  CurseForge: {
    type: String,
    required: false,
  },
  Modrinth: {
    type: String,
    required: false,
  },
  Wiki: {
    type: String,
    required: false,
  },
  Github: {
    type: String,
    required: false,
  },
  Mcmod: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
});

// 只生成有值的 badge 列表
const available = computed(() =>
  ["CurseForge", "Modrinth", "Wiki", "Github", "Mcmod"]
    .filter((key) => props[key]) // 過濾掉沒有值的屬性
    .map((key) => ({
      component: `Badge${key}`, // Badge 的 component 名稱
      path: props[key],
      name: props.name,
    }))
);
</script>

<template>
  <div align="center">
    <table>
      <tbody>
        <tr>
          <td v-for="badge in available" :key="badge.path">
            <!-- 動態渲染 Badge component -->
            <component :is="badge.component" :path="badge.path" :name="badge.name" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
