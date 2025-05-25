---
title: 自訂訊息顯示
description: 合成時消耗物品耐久，使用 `.damageIngredient` 方法
isOriginal: true
---

<Attachment link="0.png" />

```js
ServerEvents.recipes((event) => {
  const { kubejs } = event.recipes;

  kubejs
    .shapeless("stripped_oak_log", ["oak_log", "#minecraft:axes"])
    .damageIngredient("#minecraft:axes");
});
```

::: info
僅限 `kubejs:shaped` 和 `kubejs:shapeless` 配方可使用 `.damageIngredient`
:::
