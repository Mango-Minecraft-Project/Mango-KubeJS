---
title: JEI Crafting
description: 一個 JEI 的附屬模組，它可以讓你在遊戲中透過點擊物品來製作
---

::: info
模組作者：Prunoideae
:::

<BadgeCompat CurseForge="mc-mods/jei-crafting" GitHub="Prunoideae/JEI-Crafting" />

---

這個附屬模組增加了一種定義配方的方法，當玩家將光標懸停在 JEI 物品列表或書籤中的物品上並中鍵點擊它們時，玩家將獲得這些物品，同時消耗一些定義的材料。

也支持 JEI+EMI 或 TMRV+EMI，但在某些極端情況下，當真正的作弊功能啟用時，會有行為問題。

這個附加模組主要是為模組包製作而設計的，所以它不包含任何配方，模組包作者可以定義自己的 JEI 製作配方，以便玩家更容易獲得某些物品。

![](/docs/zh-tw/addons/jei-crafting/2.png)

## 理念

Minecraft 中的一些配方其實很煩人，尤其是對於彩色建築方塊或僅僅是建築材料但需要經過 2 或 3 次製作操作才能獲得的裝飾方塊。例如，如果你想用 5 種不同顏色的混凝土建造一座房子，那麼你需要準備那些染料並提前獲得 5 種混凝土沙子，如果你不小心用完了材料，你需要找到一個製作台並製作更多。

![](/docs/zh-tw/addons/jei-crafting/3.png)

所以，正如模組所提出和提供的功能，一種更簡單的方法就是移除這些配方，讓玩家直接取出不同顏色的混凝土，同時消耗一些基本的混凝土材料。或者更激進一點，讓玩家免費獲得建築材料！

同樣適用於*實際機器*。例如，你在 Create 中有螺旋槳、黃銅手、攪拌機……但每個物品僅作為一兩台機器的製作材料。當你想要重新安置工廠或只是重建其中的一部分時，你的庫存會被機器、齒輪、皮帶和軸塞滿。而這可以通過模組解決，你可以將所有機器還原為原材料，並在需要時將它們轉換為其他機器。配方階段和門檻仍然存在，因為你可以定義製作不同機器所需的材料。

## 使用方法

這個模組提供的配方可以使用數據包定義：

```json
{
  "type": "jei_crafting:jei_crafting",
  "output": {
    "id": "minecraft:smoker",
    "count": 1
  },
  "ingredients": [
    {
      "ingredient": {
        "tag": "minecraft:logs"
      },
      "count": 4
    },
    {
      "ingredient": {
        "tag": "c:cobblestones"
      },
      "count": 8
    }
  ],
  "uncraftsTo": [
    {
      "id": "minecraft:oak_wood",
      "count": 4
    },
    {
      "id": "minecraft:cobblestone",
      "count": 8
    }
  ]
}
```

所以我們定義了一個 JEI 製作配方，將 4 根原木和 8 塊鵝卵石轉換為一個煙燻爐。JEI 製作的默認配置一次製作 8 次，並且可以在 config/jei/_crafting-client.toml 中調整。

可以省略 `uncraftsTo` 來禁用配方的反製作，並且可以省略 `ingredients` 來使配方“免費”，當玩家取出輸出物品時不消耗任何物品：

```json
{
  "type": "jei_crafting:jei_crafting",
  "output": {
    "id": "minecraft:bedrock",
    "count": 1
  }
}
```

免費配方自動不可反製作，因為那時它與將物品放入垃圾桶沒有太大區別。

最後，我們將得到如下所示的內容：

目前 KubeJS 支持不是很完善，因為配方組件不允許空列表，這在定義免費或不可反製作的物品時是不可避免的 :/ 但可以使用 `event.custom` 定義配方，如：

```js
ServerEvents.recipes(event => {

  event.custom({
    type: "jei_crafting:jei_crafting",
    output: Item.of("minecraft:bedrock"),
  })

  event.custom({
    type: "jei_crafting:jei_crafting",
    output: Item.of('minecraft:smoker'),
    ingredients: [{
      ingredient: Ingredient.of('#minecraft:logs'),
      count: 4,
    }, {
      ingredient: Ingredient.of('#c:cobblestones'),
      count: 8
    }],
    uncraftsTo: [
      Item.of('minecraft:oak_wood', 4),
      Item.of('minecraft:cobblestone', 8)
    ],
  })
})
```