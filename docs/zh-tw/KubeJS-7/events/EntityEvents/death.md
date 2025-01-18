---
title: EntityEvents.death
shortTitle: death
article: false
timeline: false
---

```ts
/**
 * Invoked before a living entity dies.
 * 
 * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
 */
function death(extra: $ResourceKey$$Type<($EntityType<(object)>)>, handler: (event: $LivingEntityDeathKubeEvent) => void): void
function death(handler: (event: $LivingEntityDeathKubeEvent) => void): void
```