---
title: 在配方中使用世界種子
description: 在配方中使用 Minecraft 世界的種子，並在伺服器啟動時獲取並儲存種子。
isOriginal: true
tags: [KubeJS 6]
---

:::: note 前情提要

<!-- @include: get-world-seed.md -->

::::

```js
ServerEvents.loaded((event) => {
  const { server } = event;

  const seed = server.worldData.worldGenOptions().seed();
  server.persistentData.putLong("seed", seed);

  server.scheduleInTicks(10, () => server.runCommandSilent("reload"));
});

ServerEvents.recipes((event) => {
  const { server } = Utils;

  if (!server) return;
  const seed = server.persistentData.getLong("seed");

  // do_something(seed);
});
```
