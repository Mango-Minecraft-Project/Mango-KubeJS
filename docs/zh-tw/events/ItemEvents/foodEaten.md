---
title: ItemEvents.foodEaten
shortTitle: foodEaten
---

```ts
/**
 * Invoked when an entity eats food.
 */
function foodEaten(extra: $ResourceKey$$Type<($Item)>, handler: (event: $FoodEatenKubeEvent) => void): void
function foodEaten(handler: (event: $FoodEatenKubeEvent) => void): void
```