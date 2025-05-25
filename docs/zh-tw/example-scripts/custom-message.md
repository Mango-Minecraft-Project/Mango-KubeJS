---
title: 自訂訊息顯示
description: 自訂訊息顯示，當玩家發送訊息時，會顯示玩家名稱和訊息
isOriginal: true
---

```js
PlayerEvents.chat((event) => {
  let { player, message, server } = event;
  server.tell([
    Text.yellow(player.displayName),
    " ",
    Text.gray("»"),
    " ",
    Text.white(message),
  ]);
  event.cancel();
});
```
