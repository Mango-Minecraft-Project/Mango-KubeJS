---
title: NBTIO
description: 了解如何使用 NBTIO 來讀取和寫入 NBT 文件
---

以下是一個簡單的範例，展示如何使用 NBTIO 在 Minecraft 資料夾中的任何位置讀取/寫入未壓縮的 NBT 文件：

```js
// 從給定路徑讀取文件內容
config = NBTIO.read("kubejs/config/myawesomeconfig.nbt");

// 寫入到現有/新文件
NBTIO.write("kubejs/config/myawesomeconfig.nbt", { settings: "creeper", weirdblock: "minecraft:end_gateway" });
```