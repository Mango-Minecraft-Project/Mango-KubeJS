---
title: 魚竿鉤子
description: 當玩家使用魚竿時，會將玩家拉到魚鉤
isOriginal: true
---

<Attachment link="0.mp4">

```js
ItemEvents.rightClicked("fishing_rod", (event) => {
  const { player } = event;

  if (player.fishing) {
    let { fishing: hook } = player;
    player.deltaMovement = new Vec3d(
      hook.x - player.x,
      hook.y - player.y,
      hook.z - player.z
    ).scale(0.25);
    player.hurtMarked = true;
  }
});
```
