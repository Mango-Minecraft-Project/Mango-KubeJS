---
title: 獲取世界種子
description: 獲取 Minecraft 世界的種子，並以 NBT 格式儲存。
isOriginal: true
tags: [KubeJS 6]
---

<!-- #region world-seed -->

# 獲取世界種子

```js
const seed = NBT.l(server.worldData.worldGenOptions().seed());
```

::: tip
只能儲存成 String 或 NBT，若存成 Number 則會因為 Java Double 浮點數精度誤差導致不精確
:::

<!-- #endregion world-seed -->
