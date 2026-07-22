---
title: JsonIO
description: 了解如何使用 `JsonIO` 來讀取和寫入 JSON 檔案
---

以下是一個簡單的代碼片段，展示了如何在 Minecraft 資料夾中的任何位置使用 `JsonIO` 讀取／寫入 JSON 檔案：

```js
// 從給定路徑讀取檔案內容
let config = JsonIO.read("kubejs/config/myawesomeconfig.json");

// 寫入到現有/新檔案
JsonIO.write("kubejs/config/myawesomeconfig.json", {
  settings: "creeper",
  weirdblock: "minecraft:end_gateway",
});
```
