## 鑄件台/鑄造盆 容器填充

::: tabs

@tab 語法

```typescript :no-line-numbers title=" "
table_filling(fluid_amount?, container?)
basin_filling(fluid_amount?, container?)
```

@tab 參數說明

| 參數           | 類型        | 說明     | 預設值          |
| -------------- | ----------- | -------- | --------------- |
| `fluid_amount` | `number`    | 流體數量 | `100`           |
| `container`    | `ItemStack` | 容器物品 | `minecraft:air` |

{.arguments}

@tab 方法說明

| 方法            | 參數                     | 說明     |
| --------------- | ------------------------ | -------- |
| `.fluid_amount` | `(fluid_amount: number)` | 流體數量 |
| `.container`    | `(container: ItemStack)` | 容器物品 |

{.methods}

:::

```javascript title="範例" :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.table_filling(100, "minecraft:glass_bottle"); // [!code focus]
  tconstruct.table_filling(200, "minecraft:bucket"); // [!code focus]

  tconstruct.basin_filling(100, "minecraft:glass_bottle"); // [!code focus]
  tconstruct.basin_filling(200, "minecraft:bucket"); // [!code focus]
});
```
