---
title: EntityEvents.afterHurt
shortTitle: afterHurt
---

```ts
/**
 * Invoked after an entity is hurt by a damage source.
 */
function afterHurt(extra: $ResourceKey$$Type<($EntityType<(object)>)>, handler: (event: $AfterLivingEntityHurtKubeEvent) => void): void
function afterHurt(handler: (event: $AfterLivingEntityHurtKubeEvent) => void): void
```