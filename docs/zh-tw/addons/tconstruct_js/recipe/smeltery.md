---
title: 冶煉爐配方
isOriginal: true
---

## 合金

#### `tconstruct.alloy`

```ts
/**
 * @param temperature defaults to `100.0`
*/
alloy(result: Internal.OutputFluid_, inputs: Internal.InputFluid_[]):Special.Recipes.AlloyTconstruct
alloy(result: Internal.OutputFluid_, inputs: Internal.InputFluid_[], temperature?: number):Special.Recipes.AlloyTconstruct
```

## 澆鑄

### 物品澆鑄

#### `tconstruct.casting_table`

```ts
/**
 * @param cast_consumed defaults to `false`
 * @param cooling_time defaults to `1.0`
 * @param switch_slots defaults to `false`
*/
casting_table(result: OutputItem_, fluid: Internal.InputFluid_, cast: InputItem_):Special.Recipes.CastingTableTconstruct
casting_table(result: OutputItem_, fluid: Internal.InputFluid_, cast: InputItem_, cast_consumed?: boolean):Special.Recipes.CastingTableTconstruct
casting_table(result: OutputItem_, fluid: Internal.InputFluid_, cast: InputItem_, cast_consumed?: boolean, cooling_time?: number):Special.Recipes.CastingTableTconstruct
casting_table(result: OutputItem_, fluid: Internal.InputFluid_, cast: InputItem_, cast_consumed?: boolean, cooling_time?: number, switch_slots?: boolean):Special.Recipes.CastingTableTconstruct
```

#### `tconstruct.casting_basin`

```ts
/**
 * @param cast_consumed defaults to `false`
 * @param cooling_time defaults to `1.0`
 * @param switch_slots defaults to `false`
*/
casting_basin(result: OutputItem_, fluid: Internal.InputFluid_, cast: InputItem_):Special.Recipes.CastingTableTconstruct
casting_basin(result: OutputItem_, fluid: Internal.InputFluid_, cast: InputItem_, cast_consumed?: boolean):Special.Recipes.CastingTableTconstruct
casting_basin(result: OutputItem_, fluid: Internal.InputFluid_, cast: InputItem_, cast_consumed?: boolean, cooling_time?: number):Special.Recipes.CastingTableTconstruct
casting_basin(result: OutputItem_, fluid: Internal.InputFluid_, cast: InputItem_, cast_consumed?: boolean, cooling_time?: number, switch_slots?: boolean):Special.Recipes.CastingTableTconstruct
```

### 鑄件複製

#### `tconstruct.table_duplication`

```ts
/**
 * @param cooling_time defaults to `1.0`
*/
table_duplication(cast: InputItem_, fluid: Internal.InputFluid_):Special.Recipes.BasinDuplicationTconstruct
table_duplication(cast: InputItem_, fluid: Internal.InputFluid_, cooling_time?: number):Special.Recipes.BasinDuplicationTconstruct
```

#### `tconstruct.basin_duplication`

```ts
/**
 * @param cooling_time defaults to `1.0`
*/
basin_duplication(cast: InputItem_, fluid: Internal.InputFluid_):Special.Recipes.BasinDuplicationTconstruct
basin_duplication(cast: InputItem_, fluid: Internal.InputFluid_, cooling_time?: number):Special.Recipes.BasinDuplicationTconstruct
```

### 藥水澆鑄

#### `tconstruct.casting_table_potion`

```ts
/**
 * @param cooling_time defaults to `1.0`
*/
casting_table_potion(result: OutputItem_, bottle: InputItem_, fluid: Internal.InputFluid_):Special.Recipes.CastingTablePotionTconstruct
casting_table_potion(result: OutputItem_, bottle: InputItem_, fluid: Internal.InputFluid_, cooling_time?: number):Special.Recipes.CastingTablePotionTconstruct
```

#### `tconstruct.casting_basin_potion`

```ts
/**
 * @param cooling_time defaults to `1.0`
*/
casting_basin_potion(result: OutputItem_, bottle: InputItem_, fluid: Internal.InputFluid_):Special.Recipes.CastingBasinPotionTconstruct
casting_basin_potion(result: OutputItem_, bottle: InputItem_, fluid: Internal.InputFluid_, cooling_time?: number):Special.Recipes.CastingBasinPotionTconstruct
```

### 容器填充

#### `tconstruct.table_filling`

```ts
/**
 * @param fluid_amount defaults to `100`
*/
table_filling(fluid_amount?: number, container: InputItem_):Special.Recipes.TableFillingTconstruct
```

#### `tconstruct.basin_filling`

```ts
/**
 * @param fluid_amount defaults to `100`
*/
basin_filling(fluid_amount?: number, container: InputItem_):Special.Recipes.BasinFillingTconstruct
```

## 實體熔煉

::: warning WIP
當前條目並未存在於模組內，未來可能會新增，目前內文僅供參考
:::

#### `tconstruct.entity_melting`

```ts

```

## 燃料

#### `tconstruct.melting_fuel`

```ts
/**
 * @param duration defaults to `100`
 * @param temperature defaults to `100.0`
*/
melting_fuel(duration?: number, fluid: Internal.InputFluid_):Special.Recipes.MeltingFuelTconstruct
melting_fuel(duration?: number, fluid: Internal.InputFluid_, temperature?: number):Special.Recipes.MeltingFuelTconstruct
```

## 融化

### 物品融化

#### `tconstruct.melting`

```ts
/**
 * @param temperature defaults to `100.0`
 * @param time defaults to `100.0`
*/
melting(result: Internal.OutputFluid_, ingredient: InputItem_):Special.Recipes.MeltingTconstruct
melting(result: Internal.OutputFluid_, ingredient: InputItem_, temperature?: number):Special.Recipes.MeltingTconstruct
melting(result: Internal.OutputFluid_, ingredient: InputItem_, temperature?: number, time?: number):Special.Recipes.MeltingTconstruct
```

### 物品融化－根據耐久度

::: warning WIP
當前條目並未存在於模組內，未來可能會新增，目前內文僅供參考
:::

#### `tconstruct.melting_durability`

```ts

```

### 礦物融化

::: warning WIP
當前條目並未存在於模組內，未來可能會新增，目前內文僅供參考
:::

#### `tconstruct.ore_melting`

```ts

```

## 鑄模成形

#### `tconstruct.molding_table`

```ts
molding_table(result: OutputItem_, pattern: InputItem_, material: InputItem_):Special.Recipes.MoldingTableTconstruct
```

#### `tconstruct.molding_basin`

::: warning WIP
當前條目並未存在於模組內，未來可能會新增，目前內文僅供參考
:::

```ts
molding_basin(result: OutputItem_, pattern: InputItem_, material: InputItem_):Special.Recipes.MoldingTableTconstruct
```
