---
title: 持久化資料
description: 什麼是持久化資料以及如何使用它
---

::: info 原始網頁
https://kubejs.com/wiki/tips/persistent-data
:::

`persistentData` 是一個可用於玩家（`Player`）、世界（`ServerLevel`）和伺服器（`MinecraftServer`）的對象。
它對於簡單的數據存儲非常有用。

<!-- ::: caution
持久數據在 1.21+ 版本中已損壞！
::: -->

以下是持久數據的示例：

```js
PlayerEvents.loggedIn(event => {
  const { persistentData } = event.player;
  if (!persistentData.firstJoin) {
    persistentData.firstJoin = true
    // 僅在首次加入時執行的操作，這裡我們給玩家一些鑽石和一把劍
    event.player.give('29x diamond')
    event.player.give('minecraft:diamond_sword[damage=2]')
  }
})
```