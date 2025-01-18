---
isOriginal: true
category:
  - 範例腳本
tag:
  - 伺服器腳本
  - 物品修改
---

# 一直吃

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
