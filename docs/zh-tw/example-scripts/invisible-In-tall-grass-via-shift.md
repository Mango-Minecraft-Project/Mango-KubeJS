---
title: 玩家在芒草蹲下後隱身
description: 玩家在芒草蹲下後隱身，當玩家站起來時則會解除隱身效果。
isOriginal: true
tags: [KubeJS 6]
---

```js
PlayerEvents.tick((event) => {
  const { player } = event;

  if (player.shiftKeyDown && player.block.id === "minecraft:tall_grass") {
    if (!player.hasEffect("invisibility")) {
      player.potionEffects.add("invisibility", -1, 0, false, false);
    }
  } else {
    player.removeEffect("invisibility");
  }
});
```
