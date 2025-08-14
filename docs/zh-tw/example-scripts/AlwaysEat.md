---
title: 一直吃
description: 讓所有食物都可以一直吃
isOriginal: true
tags: [KubeJS 6, KubeJS 7]
---

讓玩家可以一直吃食物，即使已經飽了。

::: tabs#code

@tab KubeJS 6 / 7

```js title="<StartupSide/>"
ItemEvents.modification((event) => {
  Ingredient.all.itemIds.forEach((id) => {
    event.modify(id, (item) => {
      if (item.foodProperties != null) {
        item.foodProperties = (properties) => {
          properties.alwaysEdible();
        };
      }
    });
  });
});
```

:::

## 來源

[https://www.curseforge.com/minecraft/mc-mods/alwayseat](https://www.curseforge.com/minecraft/mc-mods/alwayseat)
