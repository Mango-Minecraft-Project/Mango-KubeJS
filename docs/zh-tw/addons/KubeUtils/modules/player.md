---
title: Player（建構）
---

Player 是一個 `constructed` 輔助類，這表示你必須先建立它才能使用。範例如下：

```javascript
const player = getPlayerFromSomewhere();
const kuPlayer = new Ku.Player(player);

// 你現在可以使用 kuPlayer 來調用下方的方法

// 另一個範例可能像這樣
PlayerEvents.tick((event) => {
  const player = event.player;
  const kuPlayer = new Ku.Player(player);
})
```

## 方法

### `showActionBarComponent(component: Component)`

在客戶端的動作欄（即物品欄上方）顯示訊息。這個方法允許你傳入一個抽象的 Compound，我們會處理剩下的部分。

```javascript
const kuPlayer = new Ku.Player(player);
kuPlayer.showActionBarComponent({
  "text": "Hello",
  "bold": true
})
```

### `showActionBar(text: String)`

與上方方法類似，但僅支援字串輸入。

```javascript
const kuPlayer = new Ku.Player(player);
kuPlayer.showActionBar("hello")
```

### `showActionBar(text: String, color: color)`

與上方方法類似，但除了字串輸入外，還支援顏色參數。

```javascript
const kuPlayer = new Ku.Player(player);
kuPlayer.showActionBar("hello", "blue")
```

### `showActionBar(text: String, color: color, bold: boolean)`

與上方方法類似，除了字串和顏色外，還可以指定文字是否粗體。

```javascript
const kuPlayer = new Ku.Player(player);
kuPlayer.showActionBar("hello", Color.BLUE, true)
```

### `clearStarterItemsFlag()`

屬於 [起始物品系統](../systems/starter-items.md) 的一部分。允許你手動清除玩家防止再次獲得起始物品的標記。

`@return boolean` 如果清除成功則回傳 true

```javascript
const kuPlayer = new Ku.Player(player);
const success = kuPlayer.clearStarterItemsFlag()
console.log(success) // true
```

### `isClientSide()`

回傳玩家是否為本地玩家（單人）或多人遊戲玩家。

```javascript
const kuPlayer = new Ku.Player(player);
const isClient = kuPlayer.isClientSide()
console.log(isClient) // true
```
