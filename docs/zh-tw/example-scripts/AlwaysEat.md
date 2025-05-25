---
title: 一直吃
description: 讓所有食物都可以一直吃
isOriginal: true
---

```js
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

## 來源

[https://www.curseforge.com/minecraft/mc-mods/alwayseat](https://www.curseforge.com/minecraft/mc-mods/alwayseat)
