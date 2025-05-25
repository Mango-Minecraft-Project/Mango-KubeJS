---
title: ItemEvents.rightClicked
shortTitle: rightClicked
---

```ts
/**
 * Invoked when a player right clicks with an item **without targeting anything**.
 * 
 * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
 */
function rightClicked(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemClickedKubeEvent) => void): void
function rightClicked(handler: (event: $ItemClickedKubeEvent) => void): void
```