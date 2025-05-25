---
title: BlockEvents.placed
shortTitle: placed
---

```ts
/**
 * Invoked when a block is placed.
 */
function placed(extra: $ResourceKey$$Type<($Block)>, handler: (event: $BlockPlacedKubeEvent) => void): void
function placed(handler: (event: $BlockPlacedKubeEvent) => void): void
```