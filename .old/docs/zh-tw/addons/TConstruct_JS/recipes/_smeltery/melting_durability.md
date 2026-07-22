## 物品融化－根據耐久度

::: warning WIP
當前條目並未存在於模組內，未來可能會新增，目前內文僅供參考
:::

::: tabs

@tab 語法

<!-- ```typescript :no-line-numbers title=" "
casting_table(result, fluid, cast?, cast_consumed?, cooling_time?, switch_slots?)
casting_basin(result, fluid, cast?, cast_consumed?, cooling_time?, switch_slots?)
``` -->

@tab 參數說明

<!-- | 參數            | 類型         | 說明                   | 預設值          |
| --------------- | ------------ | ---------------------- | --------------- |
| `result`        | `ItemStack`  | 物品輸出               | 必填            |
| `fluid`         | `FluidStack` | 流體輸入               | 必填            |
| `cast`          | `ItemStack`  | 鑄模物品               | `minecraft:air` |
| `cast_consumed` | `boolean`    | 是否消耗鑄模           | `false`         |
| `cooling_time`  | `number`     | 冷卻時間（遊戲刻）     | `20`            |
| `switch_slots`  | `boolean`    | 是否將產物放置到輸入欄 | `false`         | -->

{.arguments}

@tab 方法說明

<!-- | 方法             | 參數                       | 說明                   |
| ---------------- | -------------------------- | ---------------------- |
| `.cast`          | `(cast: ItemStack)`        | 鑄模物品               |
| `.cast_consumed` | `(cast_consumed: boolean)` | 是否消耗鑄模           |
| `.cooling_time`  | `(cooling_time: number)`   | 冷卻時間（遊戲刻）     |
| `.switch_slots`  | `(switch_slots: boolean)`  | 是否將產物放置到輸入欄 | -->

{.methods}

:::

<!-- ```javascript title="範例" :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.casting_table("minecraft:golden_apple", "tconstruct:molten_gold"); // [!code focus]
  tconstruct.casting_table("minecraft:golden_apple", "tconstruct:molten_gold", "minecraft:apple") // [!code focus]
    .cast_consumed(true) // [!code focus]
    .cooling_time(20) // [!code focus]
    .switch_slots(true); // [!code focus]

  tconstruct.casting_basin("minecraft:gold_block", "tconstruct:molten_gold"); // [!code focus]
  tconstruct.casting_basin("minecraft:gold_block", "tconstruct:molten_gold", "minecraft:gold_ingot") // [!code focus]
    .cast_consumed(true); // [!code focus]
    .cooling_time(20); // [!code focus]
    .switch_slots(true); // [!code focus]
});
``` -->
