---
title: PlayerEvents.inventoryChanged
shortTitle: inventoryChanged
article: false
timeline: false
---

```ts
/**
 * Invoked when a player's inventory changes.
 */
function inventoryChanged(extra: $ResourceKey$$Type<($Item)>, handler: (event: $InventoryChangedKubeEvent) => void): void
function inventoryChanged(handler: (event: $InventoryChangedKubeEvent) => void): void
```