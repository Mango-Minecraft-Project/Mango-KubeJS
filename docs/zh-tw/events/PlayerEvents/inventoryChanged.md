---
title: PlayerEvents.inventoryChanged
shortTitle: inventoryChanged
---

```ts
/**
 * Invoked when a player's inventory changes.
 */
function inventoryChanged(extra: $ResourceKey$$Type<($Item)>, handler: (event: $InventoryChangedKubeEvent) => void): void
function inventoryChanged(handler: (event: $InventoryChangedKubeEvent) => void): void
```