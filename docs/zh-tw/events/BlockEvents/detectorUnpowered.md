---
title: BlockEvents.detectorUnpowered
shortTitle: detectorUnpowered
---

```ts
/**
 * Invoked when a detector block registered in KubeJS receives a block update.
 * 
 * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
 */
function detectorUnpowered(extra: string, handler: (event: $DetectorBlockKubeEvent) => void): void
function detectorUnpowered(handler: (event: $DetectorBlockKubeEvent) => void): void
```