---
isOriginal: true
category:
  - 小技巧
tag:
  - Beans
star: true
sticky: true
---

# *Beans*

Kubejs 有一個名為 *beans* 的功能，可以讓腳本更易讀。
任何 `getXy()` 都可以用 `xy` 來獲取，任何 `setXy(value)` 都可以用 `xy = value` 來設置，任何 `isXy()` 都可以用 `xy` 來檢查。

這樣我們就可以縮短代碼！例如，要獲取所有在線玩家的列表，可以使用 `event.getServer().getPlayers()`。有了 *beans* ，這可以縮短為 `event.server.players`！

請注意，只有當方法沒有參數時，`get` 和 `is` 時 *beans* 才會起作用。這意味著像 `getHeldItem(InteractionHand hand)` 這樣的方法不能簡寫為 `heldItem`。
對於 `set` 方法，需要有一個參數。