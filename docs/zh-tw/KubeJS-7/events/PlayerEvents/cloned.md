---
title: PlayerEvents.cloned
shortTitle: cloned
article: false
timeline: false
---

```ts
/**
 * Invoked when a player respawns.
 * 
 * The reason of respawn can be either death or returning from the end.
 */
function cloned(handler: (event: $PlayerClonedKubeEvent) => void): void
```