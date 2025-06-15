---
title: Smeltery Recipes
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

## Alloy

Syntax:
```typescript :no-line-numbers
alloy(result: Fluid, inputs: Fluid[], temperature?: number = 100)
```

Features:
- Supports the `.temperature()` method to set the smelting temperature.

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.alloy("tconstruct:molten_rose_gold", [Fluid.of("tconstruct:molten_gold", 1000), Fluid.of("tconstruct:molten_copper", 1000)]);
  tconstruct.alloy("tconstruct:molten_rose_gold", [Fluid.of("tconstruct:molten_gold", 1000), Fluid.of("tconstruct:molten_copper", 1000)], 1000);
  tconstruct.alloy("tconstruct:molten_rose_gold", [Fluid.of("tconstruct:molten_gold", 1000), Fluid.of("tconstruct:molten_copper", 1000)]).temperature(1000);
});
```

## Casting Table/Basin - Item Casting

Syntax:
```typescript :no-line-numbers
casting_table(
  result: Item,
  fluid: Fluid,
  cast: Item,
  cast_consumed?: boolean = false,
  cooling_time?: number = 1.0,
  switch_slots?: boolean = false
)

casting_basin(
  result: Item,
  fluid: Fluid,
  cast: Item,
  cast_consumed?: boolean = false,
  cooling_time?: number = 1.0,
  switch_slots?: boolean = false
)
```

Features:
- Supports the `.cast_consumed(boolean)` method to set whether the cast is consumed.
- Supports the `.cooling_time(number)` method to set the cooling time.
- Supports the `.switch_slots(boolean)` method to switch the item and cast slots for the next recipe.

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

## Casting Table/Basin - Cast Duplication

Syntax:
```typescript :no-line-numbers
table_duplication(cast: Item, fluid: Fluid, cooling_time?: number = 1.0)
basin_duplication(cast: Item, fluid: Fluid, cooling_time?: number = 1.0)
```

Features:
- Supports the `.cooling_time(number)` method to set the cooling time.

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.table_duplication("minecraft:gold_ingot", Fluid.of("tconstruct:molten_gold", 1000));
  tconstruct.table_duplication("minecraft:gold_ingot", Fluid.of("tconstruct:molten_gold", 1000)).cooling_time(1.5);

  tconstruct.basin_duplication("minecraft:gold_block", Fluid.of("tconstruct:molten_gold", 1000));
  tconstruct.basin_duplication("minecraft:gold_block", Fluid.of("tconstruct:molten_gold", 1000)).cooling_time(1.5);
});
```

## Casting Table/Basin - Potion Casting

Syntax:

```typescript :no-line-numbers
casting_table_potion(result: Item, bottle: Item, fluid: Fluid, cooling_time?: number = 1.0)
casting_basin_potion(result: Item, bottle: Item, fluid: Fluid, cooling_time?: number = 1.0)
```

Features:
- Supports the `.cooling_time(number)` method to set the cooling time.

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.casting_table_potion("minecraft:potion", "minecraft:glass_bottle", Fluid.of("tconstruct:molten_gold", 1000));
  tconstruct.casting_table_potion("minecraft:potion", "minecraft:glass_bottle", Fluid.of("tconstruct:molten_gold", 1000)).cooling_time(1.5);

  tconstruct.casting_basin_potion("minecraft:potion", "minecraft:glass_bottle", Fluid.of("tconstruct:molten_gold", 1000));
  tconstruct.casting_basin_potion("minecraft:potion", "minecraft:glass_bottle", Fluid.of("tconstruct:molten_gold", 1000)).cooling_time(1.5);
});
```

## Casting Table/Basin - Container Filling

Syntax:
```typescript :no-line-numbers
table_filling(fluid_amount?: number = 100, container?: Item = AIR)
basin_filling(fluid_amount?: number = 100, container?: Item = AIR)
```

Features:
- Supports the `.fluid_amount(number)` method to set the fluid amount.
- Supports the `.container(Item)` method to set the container.

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
This entry does not currently exist in the mod. It may be added in the future. The content below is for reference only.
:::

Syntax:
```typescript :no-line-numbers
// entity_melting(result: Fluid, entity: Entity, temperature?: number = 100.0): EntityMeltingTconstruct
```

## Fuel

Syntax:
```typescript :no-line-numbers
melting_fuel(duration?: number = 100, fluid: Fluid, temperature?: number = 100)
```

Features:
- Supports the `.duration(number)` method to set the burn time.

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.melting_fuel(100, Fluid.of("tconstruct:molten_gold", 1000));
  tconstruct.melting_fuel(200, Fluid.of("tconstruct:molten_gold", 1000), 1200);
});
```

## Item Melting

Syntax:
```typescript :no-line-numbers
melting(result: Fluid, ingredient: Item, temperature?: number = 100, time?: number = 100)
```

Features:
- Supports the `.temperature(number)` method to set the smelting temperature.
- Supports the `.time(number)` method to set the smelting time.

```javascript :no-line-numbers
ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  tconstruct.melting(Fluid.of("tconstruct:molten_gold", 1000), "minecraft:gold_ingot");
  tconstruct.melting(Fluid.of("tconstruct:molten_gold", 1000), "minecraft:gold_ingot").temperature(1200);
  tconstruct.melting(Fluid.of("tconstruct:molten_gold", 1000), "minecraft:gold_ingot").time(200);
});
```

## Item Melting - Based on Durability

::: warning WIP
This entry does not currently exist in the mod. It may be added in the future. The content below is for reference only.
:::

Syntax:
```typescript :no-line-numbers
// melting_durability(result: Fluid, ingredient: Item, temperature?: number = 100, time?: number = 100)
```

## Ore Melting

::: warning WIP
This entry does not currently exist in the mod. It may be added in the future. The content below is for reference only.
:::

Syntax:
```typescript :no-line-numbers
// ore_melting(result: Fluid, ingredient: Item, temperature?: number = 100, time?: number = 100)
```

## Casting Table/Basin - Mold Forming

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