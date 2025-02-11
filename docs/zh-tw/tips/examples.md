---
title: 配方範例
description: 了解如何使用 `printExamples()` 來列印配方類型的範例
---

你可以透過添加 `printExamples()` 讓 KubeJS 列印出任何配方類型的一些範例。  
這裡有一個範例：

```js
ServerEvents.recipes((event) => {
  event.printExamples("create:crushing");
});
```

這將會在你的 `server.log` 日誌中輸出這些範例。  
你可以在 `/logs/kubejs/server.log` 找到它。