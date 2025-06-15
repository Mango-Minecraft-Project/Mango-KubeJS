---
title: TConJSEvents.equipmentChange
shortTitle: equipmentChange
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

<button @click="enableDetails = !enableDetails" class="btn">
  {{ enableDetails ? "隱藏細節" : "顯示細節" }}
</button>

語法：
```typescript :no-line-numbers title="<ServerSide/>"
TConJSEvents.equipmentChange((event: TinkerToolChangeEventJS) => {})
```

## 欄位概觀

<table>
  <thead>
    <tr>
      <th>名稱</th>
      <th>類型</th>
      <th>說明</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="[name, type, description] in fields">
      <td><code><a :href="'#f_' + name" class="field-color">{{ name }}</a></code></td>
      <td><code class="type-color">{{ type }}</code></td>
      <td v-html="description"></td>
    </tr>
  </tbody>
</table>

## 方法概觀

<table>
  <thead>
    <tr>
      <th>名稱</th>
      <th>回傳值</th>
      <th>說明</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="[name, param, type, description] in methods">
      <td><a :href="'#m_' + name" class="normal-color"><code><span class="method-color">{{ name }}</span>(<span class="type-color">{{ param }}</span>)</code></a></td>
      <td><code class="field-color">{{ type }}</code></td>
      <td v-html="description"></td>
    </tr>
  </tbody>
</table>

<div v-if="enableDetails">

## 欄位細節

<div v-for="[name, type, summary, details] in fields" :id="'f_' + name">

:::note {{ name }}
<code><span class="field-color">{{ name }}</span>: <span class="type-color">{{ type }}</span></code>

<div v-if="details">
  <span v-html=details></span>
</div>
<div v-else>
  <span v-html="summary"></span>
</div>
　
:::

</div>

## 方法細節

<div v-for="[name, param, type, summary, details] in methods" :id="'m_' + name">

:::note {{ name }}
<code><span class="method-color">{{ name }}</span>(<span class="type-color">{{ param }}</span>): <span class="field-color">{{type}}</span></code>

<div v-if="details">
  <span v-html=details></span>
</div>
<div v-else>
  <span v-html="summary"></span>
</div>
　
:::

</div>

</div>

<script setup lang="ts">
import { ref } from 'vue'

const fields: [name: string, type: string, summary: string, details?: string][] = [
  ["context", "EquipmentChangeContext", "原 Forge 事件的上下文"],
  ["entity", "LivingEntity", "觸發事件的實體"],
  ["original", "ItemStack", "原欄位的物品堆疊"],
  ["originalTool", "IToolStackView", "原欄位的匠魂 NBT 資料"],
  ["player?", "Player", "觸發事件的玩家（若 <code>event.entity</code> 不為玩家，則回傳 <code>Null</code>）"],
  ["replacement", "ItemStack", "被替換的物品堆疊"],
  ["replacementTool", "IToolStackView", "被替換的匠魂 NBT 資料"],
  ["tinkerData", "LazyOptional<TinkerDataCapability$Holder>", "匠魂資料"],
  ["world", "Level", "玩家所在維度"],
  ["hasModifiableArmor", "boolean", "實體是否具有匠魂盔甲值"]
]

const methods: [name: string, param: string, type: string, summary: string, details?: string][] = [
  ["getToolInSlot", "slot: EquipmentSlot", "IToolStackView", "獲取指定欄位的匠魂工具堆疊。這個方法可以用來獲取特定裝備欄位的工具資訊。"],
  ["hasModifiableArmor", "slot: EquipmentSlot[]", "boolean", "檢查實體是否具有匠魂盔甲值。這個方法可以用來判斷實體是否裝備了匠魂相關的盔甲。"],
]

let enableDetails = ref(false);

</script>

<style lang="scss">
.field-color {
  color: var(--field-color);
}
.method-color {
  color: var(--method-color);
}
.type-color {
  color: var(--type-color);
}
.normal-color {
  color: var(--normal-color);
}

body {
  --field-color: #E06C75;
  --method-color: #61AFEF;
  --type-color: #E5C07B;
  --normal-color: #ABB2BF;
}

h1, h2, h3 {
  pointer-events: none;
  a {
    pointer-events: auto;
  }
}

table {
  tr td:not(:last-child) {
    white-space: nowrap;
  }
}
</style>