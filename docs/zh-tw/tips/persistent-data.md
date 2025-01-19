---
description: 什麼是持久數據以及如何使用它
---

# 持久數據

`persistentData` 是一個可用於玩家、關卡和伺服器的對象。
它對於簡單的數據存儲非常有用。

::: caution
持久數據在 1.21+ 版本中已損壞！
:::

以下是持久數據的示例：

```js
PlayerEvents.loggedIn(event => {
  let pData = event.player.persistentData;
  if (!pData.firstJoin) {
    pData.firstJoin = true
    // 僅在首次加入時執行的操作，這裡我們給玩家一些鑽石和一把劍
    event.player.give('29x diamond')
    event.player.give('minecraft:diamond_sword[damage=2]')
  }
})
```