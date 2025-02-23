<template>
  <div>
    <table>
      <tbody>
        <tr>
          <td v-for="badge in available" :key="badge.path">
            <component :is="badge.component" :path="badge.path" :name="badge.name" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
div {
  align-items: center;
}
</style>

<script lang="ts">
export default {
  props: {
    CurseForge: String,
    Modrinth: String,
    Wiki: String,
    GitHub: String,
    McMod: String,
    name: String,
  },
  computed: {
    available() {
      return ["CurseForge", "Modrinth", "Wiki", "GitHub", "McMod"]
        .filter((key) => this[key]) // 過濾掉沒有值的屬性
        .map((key) => ({
          component: `Badge${key}`, // Badge 的 component 名稱
          path: this[key],
          name: this.name,
        }));
    },
  },
};
</script>
