---
title: PlayerEvents.respawned
shortTitle: respawned
article: false
timeline: false
---

```ts
/**
 * Invoked when a player respawns.
 * 
 * The reason of respawn can be either death or returning from the end.
 */
function respawned(handler: (event: $PlayerRespawnedKubeEvent) => void): void
```