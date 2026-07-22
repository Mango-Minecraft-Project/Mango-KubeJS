---
title: 使用特定物品右鍵召喚實體
tags: [KubeJS 7, KubeJS 6]
layout: AddonPage
idea: https://www.mcmod.cn/post/5162.html
---

在這個範例中，我們將使用特定物品右鍵點擊方塊時召喚一個實體。

```javascript
BlockEvents.rightClicked("minecraft:target", (event) => {
  const { item, block, facing, level } = event;

  if (Ingredient.of("minecraft:bone").test(item)) {
    /** @type {$BlockContainerJS_} */
    let clickBlock = block[facing.name().toLowerCase()];

    let armorStand = level.createEntity("minecraft:skeleton");
    armorStand.pos = new Vec3d(clickBlock.x + 0.5, clickBlock.y + 0.5, clickBlock.z + 0.5);
    armorStand.spawn();
  }
});
```
