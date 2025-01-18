---
title: ItemEvents.firstLeftClicked
shortTitle: firstLeftClicked
---

```ts
/**
 * Invoked when a player right clicks with an item **without targeting anything**.
 * 
 * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
 */
function firstLeftClicked(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemClickedKubeEvent) => void): void
function firstLeftClicked(handler: (event: $ItemClickedKubeEvent) => void): void
```