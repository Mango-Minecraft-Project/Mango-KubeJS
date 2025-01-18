---
title: LevelEvents.afterExplosion
shortTitle: afterExplosion
article: false
timeline: false
---

```ts
/**
 * Invoked right after an explosion happens.
 */
function afterExplosion(extra: $ResourceKey$$Type<($Level)>, handler: (event: $ExplosionKubeEvent$After) => void): void
function afterExplosion(handler: (event: $ExplosionKubeEvent$After) => void): void
```