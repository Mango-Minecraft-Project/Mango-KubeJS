---
title: 替換多個物品配方
isOriginal: true
tags: [KubeJS 6]
---

```js
ServerEvents.recipes((event) => {
  event.replaceInput(
    {
      output: [
        "minecraft:diamond_axe",
        "minecraft:diamond_hoe",
        "minecraft:diamond_pickaxe",
        "minecraft:diamond_shovel",
        "minecraft:diamond_sword",
      ],
    },
    "minecraft:diamond",
    "minecraft:emerald"
  );
});
```
