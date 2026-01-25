## 物品融化

::: tabs

@tab 語法

```typescript :no-line-numbers title=" "
melting(result, ingredient)
```

@tab 參數說明

| 參數         | 類型         | 說明     | 預設值 |
| ------------ | ------------ | -------- | ------ |
| `result`     | `FluidStack` | 流體輸出 | 必填   |
| `ingredient` | `ItemStack`  | 物品輸入 | 必填   |

{.arguments}

@tab 方法說明

無特殊方法

{.methods}

:::

```javascript title="範例" :no-line-numbers 
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.melting("tconstruct:molten_gold", "minecraft:gold_ingot"); // [!code focus]
  tconstruct.melting("tconstruct:molten_gold", "minecraft:gold_ingot") // [!code focus]
    .temperature(1200); // [!code focus]
    .time(200); // [!code focus]
});
```