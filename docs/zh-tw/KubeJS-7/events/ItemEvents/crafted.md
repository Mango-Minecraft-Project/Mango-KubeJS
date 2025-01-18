---
title: ItemEvents.crafted
shortTitle: crafted
article: false
timeline: false
---

```ts
/**
 * Invoked when a player crafts an item.
 */
function crafted(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemCraftedKubeEvent) => void): void
function crafted(handler: (event: $ItemCraftedKubeEvent) => void): void
```