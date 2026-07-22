## 鑄件台/鑄造盆 鑄件複製

::: tabs

@tab 語法

```typescript :no-line-numbers title=" "
table_duplication(cast, fluid, cooling_time);
basin_duplication(cast, fluid, cooling_time);
```

@tab 參數說明

| 參數           | 類型         | 說明               | 預設值          |
| -------------- | ------------ | ------------------ | --------------- |
| `cast`         | `ItemStack`  | 鑄模物品           | `minecraft:air` |
| `fluid`        | `FluidStack` | 流體輸入           | 必填            |
| `cooling_time` | `number`     | 冷卻時間（遊戲刻） | `20`            |

{.arguments}

@tab 方法說明

| 方法            | 參數                     | 說明               |
| --------------- | ------------------------ | ------------------ |
| `.cooling_time` | `(cooling_time: number)` | 冷卻時間（遊戲刻） |

{.methods}

:::

```javascript title="範例" :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.table_duplication(
    "minecraft:gold_ingot",
    "tconstruct:molten_gold",
  ); // [!code focus]
  tconstruct
    .table_duplication("minecraft:gold_ingot", "tconstruct:molten_gold") // [!code focus]
    .cooling_time(1.5); // [!code focus]

  tconstruct.basin_duplication(
    "minecraft:gold_block",
    "tconstruct:molten_gold",
  ); // [!code focus]
  tconstruct
    .basin_duplication("minecraft:gold_block", "tconstruct:molten_gold") // [!code focus]
    .cooling_time(1.5); // [!code focus]
});
```
