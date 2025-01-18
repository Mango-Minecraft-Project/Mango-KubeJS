---
title: LevelEvents.beforeExplosion
shortTitle: beforeExplosion
article: false
timeline: false
---

```ts
/**
 * Invoked right before an explosion happens.
 */
function beforeExplosion(extra: $ResourceKey$$Type<($Level)>, handler: (event: $ExplosionKubeEvent$Before) => void): void
function beforeExplosion(handler: (event: $ExplosionKubeEvent$Before) => void): void
```