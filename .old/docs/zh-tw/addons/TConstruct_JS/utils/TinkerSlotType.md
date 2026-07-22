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

| 欄位                     | 說明                                                             |
| ------------------------ | ---------------------------------------------------------------- |
| `TinkerSlotType.UPGRADE` | <Attachment link="upgrade_slot.png" class="icon-image" /> 升級槽 |
| `TinkerSlotType.ABILITY` | <Attachment link="ability_slot.png" class="icon-image" /> 能力槽 |
| `TinkerSlotType.DEFENSE` | <Attachment link="defense_slot.png" class="icon-image" /> 防禦槽 |
| `TinkerSlotType.SOUL`    | <Attachment link="soul_slot.png" class="icon-image" /> 靈魂槽    |

| 方法名           | 參數          | 回傳值      | 說明                       |
| ---------------- | ------------- | ----------- | -------------------------- |
| `getOrCreate`    | `String name` | `SlotType`  | 以名稱獲取或創建一個槽類型 |
| `getPrefix`      | 無參數        | `String`    | 取得前綴名稱               |
| `format`         | `int count`   | `Component` | 以數量格式化為顯示用的文字 |
| `getDisplayName` | 無參數        | `Component` | 取得顯示名稱               |
| `getColor`       | 無參數        | `TextColor` | 取得顏色                   |
