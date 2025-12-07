---
title: Smeltery Recipes
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

::: tip
Translate by ChatGPT-5 mini
:::

## Alloys

Syntax: 
```typescript :no-line-numbers
alloy(result: Fluid, inputs: Fluid[])
```

Features: 
- Supports using `.temperature()` to set melting temperature.

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.alloy("tconstruct:molten_rose_gold", [Fluid.of("tconstruct:molten_gold", 1000), Fluid.of("tconstruct:molten_copper", 1000)]);
  tconstruct.alloy("tconstruct:molten_rose_gold", [Fluid.of("tconstruct:molten_gold", 1000), Fluid.of("tconstruct:molten_copper", 1000)], 1000);
  tconstruct.alloy("tconstruct:molten_rose_gold", [Fluid.of("tconstruct:molten_gold", 1000), Fluid.of("tconstruct:molten_copper", 1000)]).temperature(1000);
});
```

## Casting Table/Basin — Item Casting

Syntax: 
```typescript :no-line-numbers :no-line-numbers
casting_table(result: Item, fluid: Fluid, cast: Item)
casting_basin(result: Item, fluid: Fluid, cast: Item)
```

Features: 
- Supports `.cast_consumed(boolean)` to set whether the cast is consumed.
- Supports `.cooling_time(number)` to set cooling time.
- Supports `.switch_slots(boolean)` to switch the item and cast slots for the next recipe.

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

## Casting Table/Basin — Cast Duplication

Syntax: 
```typescript :no-line-numbers
table_duplication(cast: Item, fluid: Fluid)
basin_duplication(cast: Item, fluid: Fluid)
```

Features: 
- Supports `.cooling_time(number)` to set cooling time.

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.table_duplication("minecraft:gold_ingot", Fluid.of("tconstruct:molten_gold", 1000));
  tconstruct.table_duplication("minecraft:gold_ingot", Fluid.of("tconstruct:molten_gold", 1000)).cooling_time(1.5);

  tconstruct.basin_duplication("minecraft:gold_block", Fluid.of("tconstruct:molten_gold", 1000));
  tconstruct.basin_duplication("minecraft:gold_block", Fluid.of("tconstruct:molten_gold", 1000)).cooling_time(1.5);
});
```

## Casting Table/Basin — Potion Casting

Syntax: 

```typescript :no-line-numbers
casting_table_potion(result: Item, bottle: Item, fluid: Fluid)
casting_basin_potion(result: Item, bottle: Item, fluid: Fluid)
```

Features: 
- Supports `.cooling_time(number)` to set cooling time.

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.casting_table_potion("minecraft:potion", "minecraft:glass_bottle", Fluid.of("tconstruct:molten_gold", 1000));
  tconstruct.casting_table_potion("minecraft:potion", "minecraft:glass_bottle", Fluid.of("tconstruct:molten_gold", 1000)).cooling_time(1.5);

  tconstruct.casting_basin_potion("minecraft:potion", "minecraft:glass_bottle", Fluid.of("tconstruct:molten_gold", 1000));
  tconstruct.casting_basin_potion("minecraft:potion", "minecraft:glass_bottle", Fluid.of("tconstruct:molten_gold", 1000)).cooling_time(1.5);
});
```

## Casting Table/Basin — Container Filling

Syntax: 
```typescript :no-line-numbers
table_filling(fluid_amount?: number = 100, container?: Item = AIR)
basin_filling(fluid_amount?: number = 100, container?: Item = AIR)
```

Features: 
- Supports `.fluid_amount(number)` to set fluid amount.
- Supports `.container(Item)` to set the container.

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.table_filling(100, "minecraft:glass_bottle");
  tconstruct.table_filling(200, "minecraft:bucket");

  tconstruct.basin_filling(100, "minecraft:glass_bottle");
  tconstruct.basin_filling(200, "minecraft:bucket");
});
```

## Entity Melting

::: warning WIP
This entry does not currently exist in the mod and may be added in the future; content is for reference only.
:::

Syntax: 
```typescript :no-line-numbers
// entity_melting(result: Fluid, entity: Entity, temperature?: number = 100.0): EntityMeltingTconstruct
```

## Fuel

Syntax: 
```typescript :no-line-numbers
melting_fuel(duration?: number, fluid?: Fluid, temperature?: number = 100, rate?: number = 20)
``` 

Features: 
- Supports `.duration(number)` to set burn duration.
- Supports `.rate(number)` to set fuel rate.
- Supports `.temperature(number)` to set fuel temperature.

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.melting_fuel(300, Fluid.of("tconstruct:molten_gold", 1000), 1200, 30);
  tconstruct.melting_fuel(200, Fluid.of("tconstruct:molten_gold", 1000)).temperature(1200);
  tconstruct.melting_fuel(200, Fluid.of("tconstruct:molten_gold", 1000)).rate(30);
});
```

## Item Melting

Syntax: 
```typescript :no-line-numbers
melting(result: Fluid, ingredient: Item)
```

Features: 
- Supports `.temperature(number)` to set melting temperature.
- Supports `.time(number)` to set melting time.

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.melting(Fluid.of("tconstruct:molten_gold", 1000), "minecraft:gold_ingot");
  tconstruct.melting(Fluid.of("tconstruct:molten_gold", 1000), "minecraft:gold_ingot").temperature(1200);
  tconstruct.melting(Fluid.of("tconstruct:molten_gold", 1000), "minecraft:gold_ingot").time(200);
});
```

## Item Melting — Based on Durability

::: warning WIP
This entry does not currently exist in the mod and may be added in the future; content is for reference only.
:::

Syntax: 
```typescript :no-line-numbers
// melting_durability(result: Fluid, ingredient: Item, temperature?: number = 100, time?: number = 100)
```

## Ore Melting

::: warning WIP
This entry does not currently exist in the mod and may be added in the future; content is for reference only.
:::

Syntax: 
```typescript :no-line-numbers
// ore_melting(result: Fluid, ingredient: Item, temperature?: number = 100, time?: number = 100)
```

## Casting Table/Basin — Molding

Syntax: 

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
