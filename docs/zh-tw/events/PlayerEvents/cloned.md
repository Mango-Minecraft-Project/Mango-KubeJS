---
title: PlayerEvents.cloned
shortTitle: cloned
---

```ts
/**
 * Invoked when a player respawns.
 * 
 * The reason of respawn can be either death or returning from the end.
 */
function cloned(handler: (event: $PlayerClonedKubeEvent) => void): void
```