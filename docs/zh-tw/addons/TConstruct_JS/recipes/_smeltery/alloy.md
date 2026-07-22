---
index: false
dir: false
---

## 合金

::: tabs

@tab 語法

```typescript :no-line-numbers title=" "
alloy(result, inputs, temperature);
```

@tab 參數說明

| 參數           | 類型           | 說明     | 預設值 |
| -------------- | -------------- | -------- | ------ |
| `result`       | `FluidStack`   | 流體輸出 | 必填   |
| `inputs`       | `FluidStack[]` | 流體輸入 | 必填   |
| `temperature?` | `number`       | 最低溫度 | `100`  |

{.arguments}

@tab 方法說明

| 方法           | 參數                    | 說明 |
| -------------- | ----------------------- | ---- |
| `.temperature` | `(temperature: number)` | 溫度 |

{.methods}

:::

```javascript title="範例" :no-line-numbers {4-14,21}
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.alloy(
    "tconstruct:molten_rose_gold", [
      "tconstruct:molten_gold",
      "tconstruct:molten_copper",
    ]
  );
  tconstruct.alloy(
    "tconstruct:molten_rose_gold",
    ["tconstruct:molten_gold", "tconstruct:molten_copper"],
    1000,
  );
  tconstruct.alloy(
    "tconstruct:molten_rose_gold", 
    [
      "tconstruct:molten_gold",
      "tconstruct:molten_copper",
    ]
  ).temperature(1000);
});
```
