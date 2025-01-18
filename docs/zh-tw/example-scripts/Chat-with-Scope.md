---
isOriginal: true
category:
  - 範例腳本
tag:
  - 伺服器腳本
  - 聊天訊息
---

# 玩家範圍聊天

```js
const $maxDistance = 10;
/**
 * @param {Internal.Player_} sender
 * @param {string} message
 * @param {Internal.MinecraftServer_} server
 * @returns {Internal.Component}
 */
const $textFactory = (sender, message, server) => [
  Text.green(`[${sender.username}] `),
  message,
];

PlayerEvents.chat((event) => {
  const { player: sender, message, server } = event;

  server.players.forEach((player) => {
    if (sender.distanceToEntity(player) < $maxDistance) {
      player.tell($textFactory(sender, message, server));
    }
  });
  event.cancel();
});
```
