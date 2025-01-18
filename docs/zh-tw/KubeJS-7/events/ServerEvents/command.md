---
title: ServerEvents.command
shortTitle: command
article: false
timeline: false
---

```ts
function command(extra: string, handler: (event: $CommandKubeEvent) => void): void
function command(handler: (event: $CommandKubeEvent) => void): void
```