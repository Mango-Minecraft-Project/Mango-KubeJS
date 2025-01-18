---
title: BlockEvents.detectorPowered
shortTitle: detectorPowered
---

```ts
/**
 * Invoked when a detector block registered in KubeJS receives a block update.
 * 
 * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
 */
function detectorPowered(extra: string, handler: (event: $DetectorBlockKubeEvent) => void): void
function detectorPowered(handler: (event: $DetectorBlockKubeEvent) => void): void
```