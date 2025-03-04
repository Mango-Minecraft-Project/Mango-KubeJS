---
title: TinkerDamageHelper
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

## 類別屬性／方法

| 屬性／方法                                 | 參數                                                                                                                                                                                                                                                                     | 說明                                              |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| `breakTool`                                | `(arg0: ItemStack_): void;`                                                                                                                                                                                                                                              | 使物品損毀                                        |
| `damage`                                   | `(arg0: IToolStackView_, arg1: number, arg2: LivingEntity_, arg3: ItemStack_): boolean;`                                                                                                                                                                                 | 指定傷害損害工具                                  |
| `damageAnimated`                           | `(arg0: IToolStackView_, arg1: number, arg2: LivingEntity_, arg3: EquipmentSlot_): boolean;`<hr>`(arg0: IToolStackView_, arg1: number, arg2: LivingEntity_, arg3: InteractionHand_): boolean;`<hr>`(arg0: IToolStackView_, arg1: number, arg2: LivingEntity_): boolean;` | 損害工具，當工具損毀時觸發指定動畫                |
| `directDamage`                             | `(arg0: IToolStackView_, arg1: number, arg2: LivingEntity_, arg3: ItemStack_): boolean;`                                                                                                                                                                                 | 直接損害工具（忽略已定義的 `getToolDamage` 方法） |
| `handleDamageItem<T extends LivingEntity>` | `(arg0: ItemStack_, arg1: number, arg2: T, arg3: Consumer_<T>): void;`                                                                                                                                                                                                   | 損害工具並觸發回呼函式                            |
| `isBroken`                                 | `(arg0: ItemStack_): boolean;`                                                                                                                                                                                                                                           | 檢測是否損毀                                      |
| `repair`                                   | `(arg0: IToolStackView_, arg1: number): void;`                                                                                                                                                                                                                           | 修復工具                                          |
| `getFakeMaxDamage`                         | `(arg0: ItemStack_): number;`                                                                                                                                                                                                                                            | 獲取匠魂工具的最大耐久（非物品堆疊的最大耐久）    |
