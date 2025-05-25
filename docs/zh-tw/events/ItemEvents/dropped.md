---
title: ItemEvents.dropped
shortTitle: dropped
---

```ts
/**
 * Invoked when a player drops an item.
 */
function dropped(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemDroppedKubeEvent) => void): void
function dropped(handler: (event: $ItemDroppedKubeEvent) => void): void
```