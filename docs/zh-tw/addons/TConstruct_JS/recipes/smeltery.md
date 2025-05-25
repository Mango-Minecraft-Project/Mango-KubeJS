---
title: 冶煉爐配方
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

## 合金

#### `tconstruct.alloy`

```ts
/**
 * @param temperature defaults to `100.0`
*/
alloy(result: OutputFluid_, inputs: InputFluid_[]): AlloyTconstruct
alloy(result: OutputFluid_, inputs: InputFluid_[], temperature?: number): AlloyTconstruct
```
```ts
class AlloyTconstruct {
  result(result: OutputFluid_): this
  inputs(inputs: InputFluid_[]): this
  temperature(temperature: number): this
}
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
casting_table(result: OutputItem_, fluid: InputFluid_, cast: InputItem_): CastingTableTconstruct
casting_table(result: OutputItem_, fluid: InputFluid_, cast: InputItem_, cast_consumed?: boolean): CastingTableTconstruct
casting_table(result: OutputItem_, fluid: InputFluid_, cast: InputItem_, cast_consumed?: boolean, cooling_time?: number): CastingTableTconstruct
casting_table(result: OutputItem_, fluid: InputFluid_, cast: InputItem_, cast_consumed?: boolean, cooling_time?: number, switch_slots?: boolean): CastingTableTconstruct
```
```ts
class CastingTableTconstruct {
  result(result: OutputItem_): this
  fluid(fluid: InputFluid_): this
  cast(cast: InputItem_): this
  cast_consumed(castConsumed: boolean): this
  cooling_time(coolingTime: number): this
  switch_slots(switchSlots: boolean): this
}
```

#### `tconstruct.casting_basin`

```ts
/**
 * @param cast_consumed defaults to `false`
 * @param cooling_time defaults to `1.0`
 * @param switch_slots defaults to `false`
*/
casting_basin(result: OutputItem_, fluid: InputFluid_): CastingBasinTconstruct
casting_basin(result: OutputItem_, fluid: InputFluid_, cast: InputItem_): CastingTableTconstruct
casting_basin(result: OutputItem_, fluid: InputFluid_, cast: InputItem_, cast_consumed?: boolean): CastingTableTconstruct
casting_basin(result: OutputItem_, fluid: InputFluid_, cast: InputItem_, cast_consumed?: boolean, cooling_time?: number): CastingTableTconstruct
casting_basin(result: OutputItem_, fluid: InputFluid_, cast: InputItem_, cast_consumed?: boolean, cooling_time?: number, switch_slots?: boolean): CastingTableTconstruct
```
```ts
class CastingBasinTconstruct {
  result(result: OutputItem_): this
  fluid(fluid: InputFluid_): this
  cast(cast: InputItem_): this
  cast_consumed(castConsumed: boolean): this
  cooling_time(coolingTime: number): this
  switch_slots(switchSlots: boolean): this
}
```

### 鑄件複製

#### `tconstruct.table_duplication`

```ts
/**
 * @param cooling_time defaults to `1.0`
*/
table_duplication(cast: InputItem_, fluid: InputFluid_): BasinDuplicationTconstruct
table_duplication(cast: InputItem_, fluid: InputFluid_, cooling_time?: number): BasinDuplicationTconstruct
```
```ts
class TableDuplicationTconstruct {
  cast(cast: InputItem_): this
  fluid(fluid: InputFluid_): this
  cooling_time(coolingTime: number): this
}
```

#### `tconstruct.basin_duplication`

```ts
/**
 * @param cooling_time defaults to `1.0`
*/
basin_duplication(cast: InputItem_, fluid: InputFluid_): BasinDuplicationTconstruct
basin_duplication(cast: InputItem_, fluid: InputFluid_, cooling_time?: number): BasinDuplicationTconstruct
```
```ts
class BasinDuplicationTconstruct {
  cast(cast: InputItem_): this
  fluid(fluid: InputFluid_): this
  cooling_time(coolingTime: number): this
}
```

### 藥水澆鑄

#### `tconstruct.casting_table_potion`

```ts
/**
 * @param cooling_time defaults to `1.0`
*/
casting_table_potion(result: OutputItem_, bottle: InputItem_, fluid: InputFluid_): CastingTablePotionTconstruct
casting_table_potion(result: OutputItem_, bottle: InputItem_, fluid: InputFluid_, cooling_time?: number): CastingTablePotionTconstruct
```
```ts
class CastingTablePotionTconstruct {
  result(result: OutputItem_): this
  bottle(bottle: InputItem_): this
  fluid(fluid: InputFluid_): this
  cooling_time(coolingTime: number): this
}
```

#### `tconstruct.casting_basin_potion`

```ts
/**
 * @param cooling_time defaults to `1.0`
*/
casting_basin_potion(result: OutputItem_, bottle: InputItem_, fluid: InputFluid_): CastingBasinPotionTconstruct
casting_basin_potion(result: OutputItem_, bottle: InputItem_, fluid: InputFluid_, cooling_time?: number): CastingBasinPotionTconstruct
```
```ts
class CastingBasinPotionTconstruct {
  result(result: OutputItem_): this
  bottle(bottle: InputItem_): this
  fluid(fluid: InputFluid_): this
  cooling_time(coolingTime: number): this
}
```

### 容器填充

#### `tconstruct.table_filling`

```ts
/**
 * @param fluid_amount defaults to `100`
*/
table_filling(fluid_amount?: number, container: InputItem_): TableFillingTconstruct
```
```ts
class TableFillingTconstruct {
  fluid_amount(fluidAmount: number): this
  container(container: InputItem_): this
}
```

#### `tconstruct.basin_filling`

```ts
/**
 * @param fluid_amount defaults to `100`
*/
basin_filling(fluid_amount?: number, container: InputItem_): BasinFillingTconstruct
```
```ts
class BasinFillingTconstruct {
  fluid_amount(fluidAmount: number): this
  container(container: InputItem_): this
}
```

## 實體熔煉

::: warning WIP
當前條目並未存在於模組內，未來可能會新增，目前內文僅供參考
:::

#### `tconstruct.entity_melting`

<!-- ```ts

``` -->

## 燃料

#### `tconstruct.melting_fuel`

```ts
/**
 * @param duration defaults to `100`
 * @param temperature defaults to `100.0`
*/
melting_fuel(duration?: number, fluid: InputFluid_): MeltingFuelTconstruct
melting_fuel(duration?: number, fluid: InputFluid_, temperature?: number): MeltingFuelTconstruct
```
```ts
class MeltingFuelTconstruct {
  duration(duration: number): this
  fluid(fluid: InputFluid_): this
  temperature(temperature: number): this
}
```

## 融化

### 物品融化

#### `tconstruct.melting`

```ts
/**
 * @param temperature defaults to `100.0`
 * @param time defaults to `100.0`
*/
melting(result: OutputFluid_, ingredient: InputItem_): MeltingTconstruct
melting(result: OutputFluid_, ingredient: InputItem_, temperature?: number): MeltingTconstruct
melting(result: OutputFluid_, ingredient: InputItem_, temperature?: number, time?: number): MeltingTconstruct
```
```ts
class MeltingTconstruct {
  result(result: OutputFluid_): this
  ingredient(ingredient: InputItem_): this
  temperature(temperature: number): this
  time(time: number): this
}
```

### 物品融化－根據耐久度

::: warning WIP
當前條目並未存在於模組內，未來可能會新增，目前內文僅供參考
:::

#### `tconstruct.melting_durability`

<!-- ```ts

``` -->

### 礦物融化

::: warning WIP
當前條目並未存在於模組內，未來可能會新增，目前內文僅供參考
:::

#### `tconstruct.ore_melting`

<!-- ```ts

``` -->

## 鑄模成形

#### `tconstruct.molding_table`

```ts
molding_table(result: OutputItem_, pattern: InputItem_, material: InputItem_): MoldingTableTconstruct
```
```ts
class MoldingTableTconstruct {
  result(result: OutputItem_): this
  pattern(pattern: InputItem_): this
  material(material: InputItem_): this
}
```

#### `tconstruct.molding_basin`

```ts
molding_basin(result: OutputItem_, pattern: InputItem_, material: InputItem_): MoldingTableTconstruct
```
```ts
class MoldingBasinTconstruct {
  result(result: OutputItem_): this
  pattern(pattern: InputItem_): this
  material(material: InputItem_): this
}
```
