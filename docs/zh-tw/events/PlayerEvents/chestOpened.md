---
title: PlayerEvents.chestOpened
shortTitle: chestOpened
---

```ts
/**
 * Invoked when a player opens a chest.
 * 
 * Same as `PlayerEvents.inventoryOpened`, but only for chests.
 */
function chestOpened(extra: $ResourceKey$$Type<($MenuType<(object)>)>, handler: (event: $ChestKubeEvent) => void): void
function chestOpened(handler: (event: $ChestKubeEvent) => void): void
```