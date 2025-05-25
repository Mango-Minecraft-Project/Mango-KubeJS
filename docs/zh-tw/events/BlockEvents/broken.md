---
title: BlockEvents.broken
shortTitle: broken
---

```ts
/**
 * Invoked when a block is destroyed by a player.
 */
function broken(extra: $ResourceKey$$Type<($Block)>, handler: (event: $BlockBrokenKubeEvent) => void): void
function broken(handler: (event: $BlockBrokenKubeEvent) => void): void
```