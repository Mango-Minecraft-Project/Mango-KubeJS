---
title: 編輯標籤
description: 添加、移除和修改標籤
---

::: info 原始網頁
https://kubejs.com/wiki/tutorials/tags
:::

::: warning
此處的標籤是指[資料包標籤](https://zh.minecraft.wiki/w/標籤)，而非[記分板標籤](https://zh.minecraft.wiki/w/記分板)或 [NBT 標籤](https://zh.minecraft.wiki/w/NBT格式)。

標籤是針對每個物品/方塊/流體/實體類型的，因此不能基於像 NBT 數據這樣的東西添加標籤！
:::

標籤事件接受一個額外的參數，用於確定它正在向哪個註冊表添加標籤。您通常只需要物品、方塊、流體和實體類型的標籤。然而，它確實支持向任何註冊表添加標籤，包括其他模組的註冊表。對於模組的註冊表，請確保包含命名空間！

```js
// 監聽物品標籤事件
ServerEvents.tags('item', (event) => {
  // 將鑽石礦添加到 #forge:cobblestone 標籤中
  event.add('forge:cobblestone', 'minecraft:diamond_ore')

  // 從 #forge:cobblestone 標籤中移除所有物品
  event.remove('forge:cobblestone', 'minecraft:mossy_cobblestone')

  // 從 #forge:ingots/copper 標籤中移除所有物品
  event.removeAll('forge:ingots/copper')

  // 將 minecraft:clay_ball 添加到 forge:completely_new_tag 標籤中
  event.add('forge:completely_new_tag', 'minecraft:clay_ball')

  // 將 forge:ingots/copper 標籤添加到 c:copper_ingots 標籤中
  event.add('c:stones', '#forge:stone')

  // 將 minecraft:stick 從所有標籤中移除
  event.removeAllTagsFrom('minecraft:stick')

  // 將 forge:stone 標籤中的所有物品添加到 c:stone 標籤中，除非 ID 包含 diorite
  const stones = event.get('forge:stone').objectIds
  const blacklist = Ingredient.of(/.*diorite.*/)
  stones.forEach(stone => {
    if (!blacklist.test(stone)) event.add('c:stone', stone)
  })
})
```

::: warning
配方使用物品標籤，而不是方塊或流體標籤。即使代表這些的物品是方塊，如 `minecraft:cobblestone`，它仍然使用物品標籤來處理配方。
:::

```js
// 監聽方塊標籤事件
ServerEvents.tags('block', event => {
  // 將 minecraft:tall_grass 添加到 minecraft:climbable 標籤中，使高草叢可被攀爬。
  event.add('minecraft:climbable', 'minecraft:tall_grass')
})
```