---
title: ItemEvents.firstRightClicked
shortTitle: firstRightClicked
---

```ts
/**
 * Invoked when a player right clicks with an item **without targeting anything**.
 * 
 * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
 */
function firstRightClicked(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemClickedKubeEvent) => void): void
function firstRightClicked(handler: (event: $ItemClickedKubeEvent) => void): void
```