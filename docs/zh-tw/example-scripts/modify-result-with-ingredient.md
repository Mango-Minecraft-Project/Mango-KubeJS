---
title: 根據材料修改合成產物
description: 使用 `.modifyResult` 方法根據材料修改合成產物。
isOriginal: true
---

![example-scripts/Modify-Result-with-Ingredient/0.png](/example-scripts/Modify-Result-with-Ingredient/0.png)

```js
ServerEvents.recipes((event) => {
  const { kubejs } = event.recipes;

  kubejs
    .shapeless(
      Item.of("wooden_axe").withName([
        Text.red("斧頭只會被清除附魔，不會被替換成木斧"),
      ]),
      [
        Ingredient.of("#minecraft:axes").itemIds.map((id) =>
          Item.of(id).enchant("flame", 2).weakNBT()
        ),
        "sponge",
      ]
    )
    .keepIngredient("sponge")
    .modifyResult((grid, result) => {
      const item = grid.find(Ingredient.of("#minecraft:axes"));
      item.nbt.remove("Enchantments");
      return item;
    });
});
```

:::info
僅限 `kubejs:shaped` 和 `kubejs:shapeless` 配方可使用 `.modifyResult`
:::
