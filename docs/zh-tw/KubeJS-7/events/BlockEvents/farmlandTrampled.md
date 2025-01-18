---
title: BlockEvents.farmlandTrampled
shortTitle: farmlandTrampled
article: false
timeline: false
---

```ts
/**
 * Invoked when an entity attempts to trample farmland.
 */
function farmlandTrampled(extra: $ResourceKey$$Type<($Block)>, handler: (event: $FarmlandTrampledKubeEvent) => void): void
function farmlandTrampled(handler: (event: $FarmlandTrampledKubeEvent) => void): void
```