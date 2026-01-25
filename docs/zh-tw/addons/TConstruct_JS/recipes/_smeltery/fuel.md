## 燃料

::: tabs

@tab 語法

```typescript :no-line-numbers title=" "
melting_fuel(duration?, fluid, temperature?, rate?)
```

@tab 參數說明

| 參數          | 類型         | 說明     | 預設值 |
| ------------- | ------------ | -------- | ------ |
| `duration`    | `number`     | 持續時間 | `100`  |
| `fluid`       | `FluidStack` | 流體燃料 | 必填   |
| `temperature` | `number`     | 溫度     | `100`  |
| `rate`        | `number`     | 燃料效率 | `20`   |

{.arguments}

@tab 方法說明

| 方法           | 參數                    | 說明     |
| -------------- | ----------------------- | -------- |
| `.duration`    | `(duration: number)`    | 持續時間 |
| `.temperature` | `(temperature: number)` | 溫度     |
| `.rate`        | `(rate: number)`        | 燃料效率 |

{.methods}

:::

```javascript title="範例" :no-line-numbers 
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.melting_fuel(300, "tconstruct:molten_gold"); // [!code focus]
  tconstruct.melting_fuel(200, "tconstruct:molten_gold") // [!code focus]
    .temperature(1200); // [!code focus]
    .rate(30); // [!code focus]
});
```