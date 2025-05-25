---
title: 玩家死亡後掉落玩家頭顱
description: 當玩家死亡時，掉落玩家的頭顱
isOriginal: true
---

```js
EntityEvents.death("player", (event) => {
  const { player } = event;

  player.block.popItem(Item.playerHead(player.username));
});
```
