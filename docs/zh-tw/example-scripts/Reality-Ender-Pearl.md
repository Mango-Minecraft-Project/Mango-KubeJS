---
isOriginal: true
category:
  - 範例腳本
tag:
  - 伺服器腳本
---

# 真實的終界珍珠

<VidStack src="/example-scripts/Reality-ender-pearl/0.mp4"/>

```js
ItemEvents.rightClicked("ender_pearl", (event) => {
  const { level, player, item } = event;

  if (!player.cooldowns.isOnCooldown(item)) {
    player.cooldowns.addCooldown(item, 20);
    let thrownEnderpearl = level.createEntity("snowball");
    thrownEnderpearl.item = item;
    thrownEnderpearl.setPosition(player.x, player.y + 1, player.z);
    thrownEnderpearl.deltaMovement = player.lookAngle.scale(1.5);

    thrownEnderpearl.spawn();
    player.startRiding(thrownEnderpearl);
  }

  event.cancel();
});
```
