---
title: TooltipUtil
layout: AddonPage
mod:
  ref: "./README.md"
---

## 類別屬性／方法

| 屬性／方法    | 參數                                                                                                             | 說明 |
| ------------- | ---------------------------------------------------------------------------------------------------------------- | ---- |
| `itemTooltip` | `(itemStack: $ItemStack$$Type, size: integer): $TooltipComponent`                                                |      |
| `itemTooltip` | `(itemStack: $ItemStack$$Type): $TooltipComponent`                                                               |      |
| `multi`       | `(...components: $TooltipComponent$$Type[]): $TooltipComponent`                                                  |      |
| `multi`       | `(height: integer, ...components: $TooltipComponent$$Type[]): $TooltipComponent`                                 |      |
| `playerHead`  | `(playerName: string, uuid: $UUID$$Type, size: integer): $TooltipComponent`                                      |      |
| `playerHead`  | `(playerName: string): $TooltipComponent`                                                                        |      |
| `playerHead`  | `(playerName: string, size: integer): $TooltipComponent`                                                         |      |
| `string`      | `(component: $Component$$Type): $TooltipComponent`                                                               |      |
| `texture`     | `(texture: $ResourceLocation$$Type, width: integer, height: integer): $TooltipComponent`                         |      |
| `texture`     | `(texture: $ResourceLocation$$Type): $TooltipComponent`                                                          |      |
| `texture`     | `(texture: $ResourceLocation$$Type, x: integer, y: integer, width: integer, height: integer): $TooltipComponent` |      |