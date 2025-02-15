---
title: SimpleTCon
isOriginal: true
---

## 類別屬性／方法

| 屬性／方法             | 參數                                                                          | 說明                                 |
| ---------------------- | ----------------------------------------------------------------------------- | ------------------------------------ |
| `castToolStack`        | `(arg0: IToolStackView_): ToolStack;`                                         | 將 IToolStackView 轉換成 ToolStack   |
| `getLocationKey`       | `(arg0: string): ResourceLocation;`                                           | 將字串轉換成[資源路徑]               |
| `getMaterialsInTool`   | `(arg0: IToolStackView_, arg1: string): number;`                              | 獲取 IToolStackView 的指定材料數量   |
| `getModifier`          | `(arg0: string): Modifier;`                                                   | 透過[資源路徑]獲取修飾符             |
| `getModifierEntry`     | `(arg0: Modifier_, arg1: number): ModifierEntry;`                             | 獲取指定等級的修飾符條目             |
| `getModifierEntry`     | `(arg0: string, arg1: number): ModifierEntry;`                                | 獲取指定等級的修飾符條目             |
| `getModifierId`        | `(arg0: string): ModifierId;`                                                 | 獲取指定修飾符的唯一 ID              |
| `getModifierLevel`     | `(arg0: ItemStack_, arg1: string): number;`                                   | 獲取指定物品堆疊的修飾符等級         |
| `getModifiersFromGame` | `(): Stream<Modifier>;`                                                       | （Getter）獲取遊戲內所有修飾符       |
| `modifiersFromGame`    | `Stream<Modifier>`                                                            | （[Beans]）獲取遊戲內所有修飾符      |
| `getModifiersFromTag`  | `(arg0: string): List<Modifier>;`                                             | 根據修飾符標籤獲取指定的修飾符       |
| `getTinkerData`        | `(arg0: Entity_, arg1: NonNullConsumer_<TinkerDataCapability$Holder>): void;` | 獲取匠魂數據                         |
| `getToolInSlot`        | `(arg0: LivingEntity_, arg1: EquipmentSlot_): ToolStack;`                     | 獲取實體指定欄位的工具堆疊           |
| `getToolStack`         | `(arg0: ItemStack_): ToolStack;`                                              | 將物品堆疊轉換成工具堆疊             |
| `hasMaterialInTool`    | `(arg0: IToolStackView_, arg1: string): boolean;`                             | 判斷 IToolStackView 是否具有指定材料 |
| `hasModifier`          | `(arg0: ItemStack_, arg1: string): boolean;`                                  | 判斷物品堆疊是否具有修飾符           |
| `newBuilder`           | `(): ModifierBuilder;`                                                        | 新建一個修飾符建立器                 |

::: tip 術語解釋
---
- `IToolStackView_`：匠魂工具堆疊介面
- `ToolStack`：匠魂工具堆疊
---
- `Modifier`：修飾符
- `ModifierEntry`：修飾符條目，包含修飾符和等級等額外資訊
:::

[資源路徑]: https://zh.minecraft.wiki/w/資源路徑
[Beans]: /zh-tw/tips/beans
