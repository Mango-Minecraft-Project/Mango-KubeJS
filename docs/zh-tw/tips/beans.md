---
title: Beans
description: 如何使用 beans
---

::: info 原始網頁
https://kubejs.com/wiki/tips/beans
:::

KubeJS 有一個稱為 beans 的功能，可以讓腳本更易讀。

任何 `getXy()` 都可以用 `xy` 來獲取，任何 `setXy(value)` 都可以用 `xy = value` 來設置，任何 `isXy()` 都可以用 `xy` 來檢查。

這讓我們可以縮短代碼！例如，要獲取所有在線玩家的列表，你可以這樣做：`event.getServer().getPlayers()`。使用 beans 可以縮短為 `event.server.players`！

::: warning
請注意，get 和 is beans 只有在方法沒有參數時才有效。這意味著像 `getHeldItem(InteractionHand hand)` 這樣的方法不能縮短為 `heldItem`。

對於 set 方法，需要有一個參數。
:::