---
title: EntityEvents.spawned
shortTitle: spawned
---

```ts
/**
 * Invoked when an entity is about to be added to the world.
 * 
 * This event also fires for existing entities when they are loaded from a save.
 */
function spawned(extra: $ResourceKey$$Type<($EntityType<(object)>)>, handler: (event: $EntitySpawnedKubeEvent) => void): void
function spawned(handler: (event: $EntitySpawnedKubeEvent) => void): void
```