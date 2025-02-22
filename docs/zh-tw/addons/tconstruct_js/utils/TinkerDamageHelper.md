---
title: TinkerDamageHelper
isOriginal: true
---

## 類別屬性／方法

| 屬性／方法                                 | 參數                                                                                                                                                                                                                                                                     | 說明 |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- |
| `breakTool`                                | `(arg0: ItemStack_): void;`                                                                                                                                                                                                                                              |      |
| `damage`                                   | `(arg0: IToolStackView_, arg1: number, arg2: LivingEntity_, arg3: ItemStack_): boolean;`                                                                                                                                                                                 |      |
| `damageAnimated`                           | `(arg0: IToolStackView_, arg1: number, arg2: LivingEntity_, arg3: EquipmentSlot_): boolean;`<hr>`(arg0: IToolStackView_, arg1: number, arg2: LivingEntity_, arg3: InteractionHand_): boolean;`<hr>`(arg0: IToolStackView_, arg1: number, arg2: LivingEntity_): boolean;` |      |
| `directDamage`                             | `(arg0: IToolStackView_, arg1: number, arg2: LivingEntity_, arg3: ItemStack_): boolean;`                                                                                                                                                                                 |      |
| `handleDamageItem<T extends LivingEntity>` | `(arg0: ItemStack_, arg1: number, arg2: T, arg3: Consumer_<T>): void;`                                                                                                                                                                                                   |      |
| `isBroken`                                 | `(arg0: ItemStack_): boolean;`                                                                                                                                                                                                                                           |      |
| `repair`                                   | `(arg0: IToolStackView_, arg1: number): void;`                                                                                                                                                                                                                           |      |
