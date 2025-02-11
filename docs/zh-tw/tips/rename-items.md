---
title: 重命名物品
description: 重命名物品的腳本
---

重命名物品的腳本：

```js
ClientEvents.lang("zh_tw", (event) => {
  event.renameItem("物品 ID", "新名稱");
});
```

可以使用 `F3 + T` 重新載入