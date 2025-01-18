---
isOriginal: true
category:
  - 範例腳本
tag:
  - 伺服器腳本
  - 配方
---

# 合成時消耗物品耐久

![example-scripts/Damage-Item-Recipe/0.png](/example-scripts/Damage-Item-Recipe/0.png)

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
