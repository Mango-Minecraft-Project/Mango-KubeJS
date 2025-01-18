---
title: EntityEvents.checkSpawn
shortTitle: checkSpawn
article: false
timeline: false
---

```ts
/**
 * Invoked before an entity is spawned into the world.
 * 
 * Only entities from a `BaseSpawner` or world generation will trigger this event.
 */
function checkSpawn(extra: $ResourceKey$$Type<($EntityType<(object)>)>, handler: (event: $CheckLivingEntitySpawnKubeEvent) => void): void
function checkSpawn(handler: (event: $CheckLivingEntitySpawnKubeEvent) => void): void
```