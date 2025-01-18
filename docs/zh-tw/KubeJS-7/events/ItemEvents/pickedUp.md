---
title: ItemEvents.pickedUp
shortTitle: pickedUp
article: false
timeline: false
---

```ts
/**
 * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
 */
function pickedUp(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemPickedUpKubeEvent) => void): void
function pickedUp(handler: (event: $ItemPickedUpKubeEvent) => void): void
```