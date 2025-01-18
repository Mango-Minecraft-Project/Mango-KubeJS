---
title: PlayerEvents.chestClosed
shortTitle: chestClosed
article: false
timeline: false
---

```ts
/**
 * Invoked when a player opens a chest.
 * 
 * Same as `PlayerEvents.inventoryOpened`, but only for chests.
 */
function chestClosed(extra: $ResourceKey$$Type<($MenuType<(object)>)>, handler: (event: $ChestKubeEvent) => void): void
function chestClosed(handler: (event: $ChestKubeEvent) => void): void
```