## 鑄件台/鑄造盆 鑄模成形

::: tabs

@tab 語法

```typescript :no-line-numbers title=" "
molding_table(result, pattern?, material?, pattern_consumed?)
molding_basin(result, pattern?, material?, pattern_consumed?)
```

@tab 參數說明

| 參數               | 類型        | 說明         | 預設值          |
| ------------------ | ----------- | ------------ | --------------- |
| `result`           | `ItemStack` | 物品輸出     | 必填            |
| `pattern`          | `ItemStack` | 模板         | `minecraft:air` |
| `material`         | `ItemStack` | 材料         | `minecraft:air` |
| `pattern_consumed` | `boolean`   | 是否消耗模板 | `false`         |

{.arguments}

@tab 方法說明

| 方法                | 參數                          | 說明         |
| ------------------- | ----------------------------- | ------------ |
| `.pattern`          | `(pattern: ItemStack)`        | 模板         |
| `.material`         | `(material: ItemStack)`       | 材料         |
| `.pattern_consumed` | `(pattern_consumed: boolean)` | 是否消耗模板 |

{.methods}

:::

```javascript title="範例" :no-line-numbers 
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.molding_table("minecraft:gold_ingot", "tconstruct:gold_ingot_pattern", "tconstruct:molten_gold"); // [!code focus]
  tconstruct.molding_basin("minecraft:gold_block", "tconstruct:gold_block_pattern", "tconstruct:molten_gold"); // [!code focus]
});
```