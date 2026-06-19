---
title: TinkerSlotType
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

::: tip
`TinkerSlotType` 綁定的是匠魂的 `slimeknights.tconstruct.library.tools.SlotType`；
實際內容請以 [Github 上的原始碼](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/src/main/java/slimeknights/tconstruct/library/tools/SlotType.java)為準
:::

| 欄位                     | 說明                   |
| ------------------------ | ---------------------- |
| `TinkerSlotType.UPGRADE` | <UpgradeSlot /> 升級槽 |
| `TinkerSlotType.ABILITY` | <AbilitySlot /> 能力槽 |
| `TinkerSlotType.DEFENSE` | <DefenseSlot /> 防禦槽 |
| `TinkerSlotType.SOUL`    | <SoulSlot /> 靈魂槽    |

| 方法名 | 參數 | 回傳值 | 說明 |
| ------ | ---- | ------ | ---- |
| `getPrefix` | 無參數 | `String` | 取得前綴名稱 |
| `format` | `int count` | `Component` | 以數量格式化為顯示用的文字 |
| `getDisplayName` | 無參數 | `Component` | 取得顯示名稱 |
| `getColor` | 無參數 | `TextColor` | 取得顏色 |

<script setup lang="ts">
const AbilitySlot = {
  template: `<Attachment link="ability_slot.png" class="icon-image" />`
}

const DefenseSlot = {
  template: `<Attachment link="defense_slot.png" class="icon-image" />`
}

const SoulSlot = {
  template: `<Attachment link="soul_slot.png" class="icon-image" />`
}

const UpgradeSlot = {
  template: `<Attachment link="upgrade_slot.png" class="icon-image" />`
}
</script>