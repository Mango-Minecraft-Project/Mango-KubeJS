---
title: BlockEvents.stoppedFalling
shortTitle: stoppedFalling
article: false
timeline: false
---

```ts
/**
 * Invoked when a falling block finishes falling.
 */
function stoppedFalling(extra: $ResourceKey$$Type<($Block)>, handler: (event: $BlockStoppedFallingKubeEvent) => void): void
function stoppedFalling(handler: (event: $BlockStoppedFallingKubeEvent) => void): void
```