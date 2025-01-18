---
title: BlockEvents.startedFalling
shortTitle: startedFalling
article: false
timeline: false
---

```ts
/**
 * Invoked when a falling block starts to fall.
 */
function startedFalling(extra: $ResourceKey$$Type<($Block)>, handler: (event: $BlockStartedFallingKubeEvent) => void): void
function startedFalling(handler: (event: $BlockStartedFallingKubeEvent) => void): void
```