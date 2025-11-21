---
title: 冶煉爐配方
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

## 合金

語法：
```typescript :no-line-numbers
alloy(result: Fluid, inputs: Fluid[])
```

特性：
- 支援使用 `.temperature()` 方法設定熔煉溫度。

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.alloy("tconstruct:molten_rose_gold", [Fluid.of("tconstruct:molten_gold", 1000), Fluid.of("tconstruct:molten_copper", 1000)]);
  tconstruct.alloy("tconstruct:molten_rose_gold", [Fluid.of("tconstruct:molten_gold", 1000), Fluid.of("tconstruct:molten_copper", 1000)], 1000);
  tconstruct.alloy("tconstruct:molten_rose_gold", [Fluid.of("tconstruct:molten_gold", 1000), Fluid.of("tconstruct:molten_copper", 1000)]).temperature(1000);
});
```

## 鑄件台/鑄造盆 物品澆鑄

語法：
```typescript :no-line-numbers :no-line-numbers
casting_table(result: Item, fluid: Fluid, cast: Item)
casting_basin(result: Item, fluid: Fluid, cast: Item)
```

特性：
- 支援使用 `.cast_consumed(boolean)` 方法設定鑄件是否消耗。
- 支援使用 `.cooling_time(number)` 方法設定冷卻時間。
- 支援使用 `.switch_slots(boolean)` 方法切換物品和鑄件的槽位，以便進行下一個配方。

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.casting_table("minecraft:gold_apple", Fluid.of("tconstruct:molten_gold", 1000), "minecraft:apple");
  tconstruct.casting_table("minecraft:gold_apple", Fluid.of("tconstruct:molten_gold", 1000), "minecraft:apple").cast_consumed(true);
  tconstruct.casting_table("minecraft:gold_apple", Fluid.of("tconstruct:molten_gold", 1000), "minecraft:apple").cooling_time(1.5);
  tconstruct.casting_table("minecraft:gold_apple", Fluid.of("tconstruct:molten_gold", 1000), "minecraft:apple").switch_slots(true);

  tconstruct.casting_basin("minecraft:gold_block", Fluid.of("tconstruct:molten_gold", 1000), "minecraft:gold_ingot");
  tconstruct.casting_basin("minecraft:gold_block", Fluid.of("tconstruct:molten_gold", 1000), "minecraft:gold_ingot").cast_consumed(true);
  tconstruct.casting_basin("minecraft:gold_block", Fluid.of("tconstruct:molten_gold", 1000), "minecraft:gold_ingot").cooling_time(1.5);
  tconstruct.casting_basin("minecraft:gold_block", Fluid.of("tconstruct:molten_gold", 1000), "minecraft:gold_ingot").switch_slots(true);
});
```

## 鑄件台/鑄造盆 鑄件複製

語法：
```typescript :no-line-numbers
table_duplication(cast: Item, fluid: Fluid)
basin_duplication(cast: Item, fluid: Fluid)
```

特性：
- 支援使用 `.cooling_time(number)` 方法設定冷卻時間。

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.table_duplication("minecraft:gold_ingot", Fluid.of("tconstruct:molten_gold", 1000));
  tconstruct.table_duplication("minecraft:gold_ingot", Fluid.of("tconstruct:molten_gold", 1000)).cooling_time(1.5);

  tconstruct.basin_duplication("minecraft:gold_block", Fluid.of("tconstruct:molten_gold", 1000));
  tconstruct.basin_duplication("minecraft:gold_block", Fluid.of("tconstruct:molten_gold", 1000)).cooling_time(1.5);
});
```

## 鑄件台/鑄造盆 藥水澆鑄

語法：

```typescript :no-line-numbers
casting_table_potion(result: Item, bottle: Item, fluid: Fluid)
casting_basin_potion(result: Item, bottle: Item, fluid: Fluid)
```

特性：
- 支援使用 `.cooling_time(number)` 方法設定冷卻時間。

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.casting_table_potion("minecraft:potion", "minecraft:glass_bottle", Fluid.of("tconstruct:molten_gold", 1000));
  tconstruct.casting_table_potion("minecraft:potion", "minecraft:glass_bottle", Fluid.of("tconstruct:molten_gold", 1000)).cooling_time(1.5);

  tconstruct.casting_basin_potion("minecraft:potion", "minecraft:glass_bottle", Fluid.of("tconstruct:molten_gold", 1000));
  tconstruct.casting_basin_potion("minecraft:potion", "minecraft:glass_bottle", Fluid.of("tconstruct:molten_gold", 1000)).cooling_time(1.5);
});
```

## 鑄件台/鑄造盆 容器填充

語法：
```typescript :no-line-numbers
table_filling(fluid_amount?: number = 100, container?: Item = AIR)
basin_filling(fluid_amount?: number = 100, container?: Item = AIR)
```

特性：
- 支援使用 `.fluid_amount(number)` 方法設定流體量。
- 支援使用 `.container(Item)` 方法設定容器。

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.table_filling(100, "minecraft:glass_bottle");
  tconstruct.table_filling(200, "minecraft:bucket");

  tconstruct.basin_filling(100, "minecraft:glass_bottle");
  tconstruct.basin_filling(200, "minecraft:bucket");
});
```

## 實體熔煉

::: warning WIP
當前條目並未存在於模組內，未來可能會新增，目前內文僅供參考
:::

語法：
```typescript :no-line-numbers
// entity_melting(result: Fluid, entity: Entity, temperature?: number = 100.0): EntityMeltingTconstruct
```

## 燃料

語法：
```typescript :no-line-numbers
melting_fuel(duration?: number = 100, fluid: Fluid, temperature?: number = 100)
```

特性：
- 支援使用 `.duration(number)` 方法設定燃燒時間。

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.melting_fuel(100, Fluid.of("tconstruct:molten_gold", 1000));
  tconstruct.melting_fuel(200, Fluid.of("tconstruct:molten_gold", 1000), 1200);
});
```

## 物品融化

語法：
```typescript :no-line-numbers
melting(result: Fluid, ingredient: Item)
```

特性：
- 支援使用 `.temperature(number)` 方法設定熔煉溫度。
- 支援使用 `.time(number)` 方法設定熔煉時間。

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.melting(Fluid.of("tconstruct:molten_gold", 1000), "minecraft:gold_ingot");
  tconstruct.melting(Fluid.of("tconstruct:molten_gold", 1000), "minecraft:gold_ingot").temperature(1200);
  tconstruct.melting(Fluid.of("tconstruct:molten_gold", 1000), "minecraft:gold_ingot").time(200);
});
```

## 物品融化－根據耐久度

::: warning WIP
當前條目並未存在於模組內，未來可能會新增，目前內文僅供參考
:::

語法：
```typescript :no-line-numbers
// melting_durability(result: Fluid, ingredient: Item, temperature?: number = 100, time?: number = 100)
```

## 礦物融化

::: warning WIP
當前條目並未存在於模組內，未來可能會新增，目前內文僅供參考
:::

語法：
```typescript :no-line-numbers
// ore_melting(result: Fluid, ingredient: Item, temperature?: number = 100, time?: number = 100)
```

## 鑄件台/鑄造盆 鑄模成形

語法：

```typescript :no-line-numbers
molding_table(result: Item, pattern: Item, material: Item)
molding_basin(result: Item, pattern: Item, material: Item)
```

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.molding_table("minecraft:gold_ingot", "tconstruct:gold_ingot_pattern", "tconstruct:molten_gold");
  tconstruct.molding_basin("minecraft:gold_block", "tconstruct:gold_block_pattern", "tconstruct:molten_gold");
});
```