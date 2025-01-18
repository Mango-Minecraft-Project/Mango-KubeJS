---
title: EntityEvents.beforeHurt
shortTitle: beforeHurt
---

```ts
/**
 * Invoked before an entity is hurt by a damage source.
 */
function beforeHurt(extra: $ResourceKey$$Type<($EntityType<(object)>)>, handler: (event: $BeforeLivingEntityHurtKubeEvent) => void): void
function beforeHurt(handler: (event: $BeforeLivingEntityHurtKubeEvent) => void): void
```