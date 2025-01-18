---
isOriginal: true
category:
  - 範例腳本
tag:
  - 伺服器腳本
  - 配方
---

# 替換多個物品配方

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
