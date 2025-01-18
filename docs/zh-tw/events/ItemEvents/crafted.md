---
title: ItemEvents.crafted
shortTitle: crafted
---

```ts
/**
 * Invoked when a player crafts an item.
 */
function crafted(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemCraftedKubeEvent) => void): void
function crafted(handler: (event: $ItemCraftedKubeEvent) => void): void
```