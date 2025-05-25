---
title: 在草地上跳躍有機率將草地踩成泥土
description: 當玩家在草地上跳躍時，有 25% 的機率將草地踩成泥土。
isOriginal: true
---

```js
const inputBlock = "minecraft:grass_block";
const outputBlock = "minecraft:dirt";

PlayerEvents.tick((event) => {
  const { player } = event;

  if (player.fallDistance > 1 && player.block.down.id === inputBlock) {
    player.tell("You fell on grass block!");
    if (Math.random() < 0.25) {
      player.block.down.set(outputBlock);
      player.tell("　The grass turned into dirt!");
    }
  }
});
```
