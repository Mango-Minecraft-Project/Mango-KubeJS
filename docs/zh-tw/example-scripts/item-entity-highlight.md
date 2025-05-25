---
title: 物品實體名稱高亮顯示
isOriginal: true
---

```js
ServerEvents.tick((event) => {
  const { server } = event;

  if (server.tickCount % 2) return;

  server.entities.filterSelector("@e[type=item]").forEach(
    /** @param {Internal.ItemEntity_} itemEntity */
    (itemEntity) => {
      /** @type {{Item: { Count: Internal.ByteTag_, id: string }, Age: Internal.ShortTag_}} nbt */
      const { Item: item, Age } = itemEntity.nbt;

      const { descriptionId, rarity } = Item.of(item.id);

      itemEntity.customName = [
        Text.gold(`${item.Count}x`),
        " ",
        Text.translate(descriptionId).color(rarity.color),
        " ",
        Text.gray(
          `(${Age == -32768 ? "∞" : ((6000 - Age) / 20).toFixed(1)}s left)`
        ),
      ];
      itemEntity.customNameVisible = true;
    }
  );
});
```
