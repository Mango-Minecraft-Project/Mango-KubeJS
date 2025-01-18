---
title: ItemEvents.dropped
shortTitle: dropped
article: false
timeline: false
---

```ts
/**
 * Invoked when a player drops an item.
 */
function dropped(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemDroppedKubeEvent) => void): void
function dropped(handler: (event: $ItemDroppedKubeEvent) => void): void
```