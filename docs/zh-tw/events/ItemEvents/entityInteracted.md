---
title: ItemEvents.entityInteracted
shortTitle: entityInteracted
---

```ts
/**
 * Invoked when a player right clicks on an entity.
 */
function entityInteracted(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemEntityInteractedKubeEvent) => void): void
function entityInteracted(handler: (event: $ItemEntityInteractedKubeEvent) => void): void
```