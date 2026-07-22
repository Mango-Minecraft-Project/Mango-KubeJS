## 鑄件台/鑄造盆 藥水澆鑄

::: tabs

@tab 語法

```typescript :no-line-numbers title=" "
casting_table_potion(result, bottle, fluid, cooling_time);
casting_basin_potion(result, bottle, fluid, cooling_time);
```

@tab 參數說明

| 參數           | 類型         | 說明               | 預設值          |
| -------------- | ------------ | ------------------ | --------------- |
| `result`       | `ItemStack`  | 物品輸出           | 必填            |
| `bottle`       | `ItemStack`  | 容器               | `minecraft:air` |
| `fluid`        | `FluidStack` | 流體輸入           | 必填            |
| `cooling_time` | `number`     | 冷卻時間（遊戲刻） | `20`            |

{.arguments}

@tab 方法說明

| 方法            | 參數                     | 說明               |
| --------------- | ------------------------ | ------------------ |
| `.bottle`       | `(bottle: ItemStack)`    | 容器               |
| `.cooling_time` | `(cooling_time: number)` | 冷卻時間（遊戲刻） |

{.methods}

:::

```javascript title="範例" :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.casting_table_potion(
    "minecraft:potion",
    "minecraft:glass_bottle",
    "tconstruct:molten_gold",
  ); // [!code focus]
  tconstruct
    .casting_table_potion(
      "minecraft:potion",
      "minecraft:glass_bottle",
      "tconstruct:molten_gold",
    ) // [!code focus]
    .cooling_time(1.5); // [!code focus]

  tconstruct.casting_basin_potion(
    "minecraft:potion",
    "minecraft:glass_bottle",
    "tconstruct:molten_gold",
  ); // [!code focus]
  tconstruct
    .casting_basin_potion(
      "minecraft:potion",
      "minecraft:glass_bottle",
      "tconstruct:molten_gold",
    ) // [!code focus]
    .cooling_time(1.5); // [!code focus]
});
```
