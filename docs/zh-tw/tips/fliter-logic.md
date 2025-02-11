---
title: 篩選器邏輯
description: 了解如何使用篩選器邏輯來更好地選擇要移除的配方。
---

配方篩選器可以以不同的方式組合其他篩選器，以實現 `not`、`and` 和 `or` 邏輯。
- `{not: {a: b}}` - `not` 反轉邏輯
- `{a: b, c: d}` - `and` 兩者都必須匹配
- `[{a: b}, {c: d}]` - `or` 任一匹配

## 範例：
移除所有來自 id 為 `mod` 的模組且輸出為 `minecraft:beacon` 的配方。
```js
event.remove({ mod: "mod", output: "minecraft:beacon" });
```
移除所有配方，除了來自 id 為 `mod_id` 的模組的配方。
```js
event.remove({ not: { mod: "mod_id" } });
```

這些邏輯組件也可以結合使用。  
此範例移除所有輸出為 `modid:item_id` 的配方，除了由配方 id 指定的一個特定配方：
```js
event.remove({ output: "modid:item_id", not: { id: "some:recipe_id" } });
```