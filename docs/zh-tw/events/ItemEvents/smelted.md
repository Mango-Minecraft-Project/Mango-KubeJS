---
title: ItemEvents.smelted
shortTitle: smelted
---

```ts
/**
 * Invoked when an item is smelted by a player.
 */
function smelted(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemSmeltedKubeEvent) => void): void
function smelted(handler: (event: $ItemSmeltedKubeEvent) => void): void
```