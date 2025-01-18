---
isOriginal: true
category:
  - 範例腳本
tag:
  - 伺服器腳本
  - 玩家頭顱
---

# 玩家死亡後掉落玩家頭顱

```js
EntityEvents.death("player", (event) => {
  const { player } = event;

  player.block.popItem(Item.playerHead(player.username));
});
```
