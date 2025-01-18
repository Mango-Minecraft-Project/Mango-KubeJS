---
title: ItemEvents.canPickUp
shortTitle: canPickUp
article: false
timeline: false
---

```ts
/**
 * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
 */
function canPickUp(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemPickedUpKubeEvent) => void): void
function canPickUp(handler: (event: $ItemPickedUpKubeEvent) => void): void
```