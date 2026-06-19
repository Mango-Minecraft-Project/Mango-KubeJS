---
title: TinkerSlotType
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

::: tip
`TinkerSlotType` is bound to Tinkers' Construct's `slimeknights.tconstruct.library.tools.SlotType`.
For the actual behavior, refer to the [source code on GitHub](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/src/main/java/slimeknights/tconstruct/library/tools/SlotType.java).
:::

| Field                     | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| `TinkerSlotType.UPGRADE`  | <Attachment link="upgrade_slot.png" class="icon-image" /> Upgrade slot |
| `TinkerSlotType.ABILITY`  | <Attachment link="ability_slot.png" class="icon-image" /> Ability slot |
| `TinkerSlotType.DEFENSE`  | <Attachment link="defense_slot.png" class="icon-image" /> Defense slot |
| `TinkerSlotType.SOUL`     | <Attachment link="soul_slot.png" class="icon-image" /> Soul slot |

| Method name      | Parameters    | Return value | Description                         |
| ---------------- | ------------- | ------------ | ----------------------------------- |
| `getOrCreate`    | `String name` | `SlotType`   | Get or create a slot type by name   |
| `getPrefix`      | No parameters | `String`     | Get the prefix name                 |
| `format`         | `int count`   | `Component`  | Format the count into display text  |
| `getDisplayName` | No parameters | `Component`  | Get the display name                |
| `getColor`       | No parameters | `TextColor`  | Get the color                       |
