---
title: JsonIO
description: 了解如何使用 `JsonIO` 來讀取和寫入 JSON 文件
---

以下是一個簡單的代碼片段，展示了如何在 Minecraft 文件夾中的任何位置使用 `JsonIO` 讀取／寫入 JSON 文件：

```js
// 從給定路徑讀取文件內容
let config = JsonIO.read("kubejs/config/myawesomeconfig.json");

// 寫入到現有/新文件
JsonIO.write("kubejs/config/myawesomeconfig.json", { settings: "creeper", weirdblock: "minecraft:end_gateway" });
```
