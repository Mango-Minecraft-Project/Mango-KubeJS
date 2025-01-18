---
isOriginal: true
category:
  - 範例腳本
tag:
  - 伺服器腳本
  - 配方
  - 世界種子
---

# 在配方中使用世界種子

:::: note 前情提要

<!-- @include: Get-World-Seed.md -->

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
