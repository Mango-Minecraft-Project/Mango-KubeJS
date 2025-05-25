---
title: BlockEvents.detectorChanged
shortTitle: detectorChanged
---

```ts
/**
 * Invoked when a detector block registered in KubeJS receives a block update.
 * 
 * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
 */
function detectorChanged(extra: string, handler: (event: $DetectorBlockKubeEvent) => void): void
function detectorChanged(handler: (event: $DetectorBlockKubeEvent) => void): void
```