---
title: 修改物品的 Builder
isOriginal: true
---

```js
ItemEvents.modification((event) => {
  const ItemBuilder = Java.loadClass(
    "dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder"
  );

  event.modify("...", (item) => {
    const builder = new ItemBuilder("...").glow(true);
    item.setItemBuilder(builder);
  });
});
```
