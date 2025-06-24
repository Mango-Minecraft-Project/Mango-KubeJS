---
title: TConJSEvents.equipmentChange
shortTitle: equipmentChange
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

<button @click="enableDetails = !enableDetails" class="btn">
  {{ enableDetails ? "Hide Details" : "Show Details" }}
</button>

Syntax:
```typescript :no-line-numbers title="<ServerSide/>"
TConJSEvents.equipmentChange((event: TinkerToolChangeEventJS) => {})
```

## Field Overview

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
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

## Method Overview

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Return Value</th>
      <th>Description</th>
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

## Field Details

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

## Method Details

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
  ["context", "EquipmentChangeContext", "The context of the original Forge event"],
  ["entity", "LivingEntity", "The entity that triggered the event"],
  ["original", "ItemStack", "The item stack in the original slot"],
  ["originalTool", "IToolStackView", "The Tinkers' NBT data of the original slot"],
  ["player?", "Player", "The player who triggered the event (returns <code>Null</code> if <code>event.entity</code> is not a player)"],
  ["replacement", "ItemStack", "The item stack being replaced"],
  ["replacementTool", "IToolStackView", "The Tinkers' NBT data of the replacement"],
  ["tinkerData", "LazyOptional<TinkerDataCapability$Holder>", "Tinkers' data"],
  ["world", "Level", "The dimension the player is in"],
  ["hasModifiableArmor", "boolean", "Whether the entity has Tinkers' modifiable armor value"]
]

const methods: [name: string, param: string, type: string, summary: string, details?: string][] = [
  ["getToolInSlot", "slot: EquipmentSlot", "IToolStackView", "Get the Tinkers' tool stack in the specified slot. This method can be used to obtain tool information for a specific equipment slot."],
  ["hasModifiableArmor", "slot: EquipmentSlot[]", "boolean", "Check whether the entity has Tinkers' modifiable armor value. This method can be used to determine if the entity is equipped with Tinkers' related armor."],
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