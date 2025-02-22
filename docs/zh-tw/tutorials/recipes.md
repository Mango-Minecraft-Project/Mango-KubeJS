---
title: 編輯配方
description: 添加、移除和修改配方
---

::: info 原文
https://kubejs.com/wiki/tutorials/recipes
:::

::: warning
此頁面仍在開發中。內容尚未完成，隨時可能更改。
:::

## 配方、回呼函式與你

配方事件可用於添加、移除或替換配方。

任何修改配方的腳本應放置在 `server_scripts/` 資料夾中，並可隨時使用 `/reload` 重新加載。

任何對配方的修改應在配方事件的上下文中完成。這意味著我們需要為 `ServerEvents.recipes` 事件註冊一個「事件監聽器」，並給它一些代碼，以便在遊戲準備修改配方時執行。以下是我們告訴 KubeJS 在配方時間執行一些代碼的方法：

```js
/* 
  * ServerEvents.recipes(callback) 是一個接受另一個函數（稱為「回呼函式」）作為參數的函數。
 * 當伺服器處理配方時，回呼函式會運行，然後我們可以進行自己的更改。
 * 當回呼函式運行時，也稱為事件「觸發」。
*/

// 監聽「recipes」伺服器事件。
ServerEvents.recipes((event) => {
  // 你可以將 `event` 替換為任何你喜歡的名稱，
  // 只要你在回呼函式內也更改它！

  // 這部分在大括號內是回呼函式函式。
  // 你可以在這裡修改任意數量的配方，
  // 而不需要再次使用 ServerEvents.recipes()。

  console.log('你好！配方事件已觸發！')
})
```

在接下來的部分中，你可以看到在回呼函式內應該放置什麼。

## 添加配方

以下所有代碼應放置在你的配方回呼函式內。

### 有序配方

有序配方使用 `event.recipes.minecraft.crafting_shaped()` 方法添加。有序配方必須按照特定的順序和形狀排列材料，以匹配玩家的輸入。`event.recipes.minecraft.crafting_shaped()` 的參數如下：

1. 輸出物品，數量可以有 1-64。
2. 一個代表工作台行的陣列（最大長度為 3），以字串表示（最大長度為 3）。空格代表沒有物品的槽位，字母代表物品。字母不必有特定含義；你可以在下一個參數中解釋它們的含義。
3. 一個將字母映射到物品的對象，如 `{letter: item}`。輸入的物品數量必須只有 1 個。

如果你想強制嚴格的位置或禁用鏡像配方，請參見自訂配方的方法。

```js
event.recipes.minecraft.crafting_shaped(
  Item.of('minecraft:stone', 3), // 參數 1：輸出
  [
    'A B',
    ' C ', // 參數 2：形狀（字串陣列）
    'B A'
  ],
  {
    A: 'minecraft:andesite',
    B: 'minecraft:diorite',  //參數 3：映射對象
    C: 'minecraft:granite'
  }
)
```

### 無序配方

無序配方使用 `event.recipes.minecraft.crafting_shapeless()` 方法添加。玩家可以將無序配方的材料放在網格上的任何位置，它仍然會製作。`event.recipes.minecraft.crafting_shapeless()` 的參數如下：
1. 輸出物品
2. 一個輸入物品的陣列。陣列的長度必須不大於 9。

```js
event.recipes.minecraft.crafting_shapeless(
  Item.of('minecraft:dandelion', 3), // 參數 1：輸出
  [
    'minecraft:bone_meal',
    'minecraft:yellow_dye', // 參數 2：輸入陣列
    '3x minecraft:ender_pearl'
  ]
)
```

### 鍛造

鍛造配方在 1.19.4 重新設計了 UI 和功能，現在有以下兩種鍛造配方：

#### 鍛造升級

鍛造升級配方有 3 個輸入和一個輸出，使用 `event.recipes.minecraft.smithing_transform()` 方法添加。鍛造配方在鍛造台上製作。

```js
event.recipes.minecraft.smithing_transform(
  'minecraft:netherite_ingot',                     // 參數 1：輸出
  'minecraft:netherite_upgrade_smithing_template', // 參數 2：鍛造模板
  'minecraft:iron_ingot',                          // 參數 3：要升級的物品
  'minecraft:black_dye'                            // 參數 4：升級物品
)
```

#### 盔甲紋樣

盔甲紋樣配方有 3 個輸入和 0 個輸出，使用 `event.recipes.minecraft.smithing_trim()` 方法添加。鍛造配方在鍛造台上製作。

```js
event.recipes.minecraft.smithing_trim(
  'minecraft:eye_armor_trim_smithing_template', // 參數 1：盔甲紋樣鍛造模板
  'minecraft:iron_helmet',                      // 參數 2：要升級的物品
  'minecraft:black_dye'                         // 參數 3：鍛造原材料
)
```

### 熔煉

熔煉配方都非常相似，接受一個輸入（單個物品）並給出一個輸出（數量最多為 64）。燃料不能在此配方事件中更改，應使用標籤來完成。

- 熔爐配方使用 `event.recipes.minecraft.smelting()` 添加。
- 高爐配方使用 `event.recipes.minecraft.blasting()` 添加。
- 煙燻爐配方使用 `event.recipes.minecraft.smoking()` 添加。
- 營火配方使用 `event.recipes.minecraft.campfire_cooking()` 添加。

通過附加 `.xp()` 設置獲得的經驗值。通過附加 `.cookingTime()` 設置烹飪時間（以刻為單位）。它們也可以在輸入和輸出之後指定。

```js
// 在熔爐中將 1 塊石頭熔煉成 3 塊砂礫：
event.recipes.minecraft.smelting('3x minecraft:gravel', 'minecraft:stone')

// 在高爐中將 1 塊鐵錠熔煉成 10 個鐵粒：
event.recipes.minecraft.blasting('10x minecraft:iron_nugget', 'minecraft:iron_ingot')

// 在煙燻爐中將玻璃煙燻成有色玻璃並獲得 0.35 經驗值：
event.recipes.minecraft.smoking('minecraft:tinted_glass', 'minecraft:glass').xp(0.35)

// 在營火上將木棍燒成火把，獲得 0.35 經驗值並需時 30 秒：
event.recipes.minecraft.campfire_cooking('minecraft:torch', 'minecraft:stick', 0.35, 600)
```

### 切石機

像烹飪配方一樣，切石機配方非常簡單，只有一個輸入（單個物品）和一個輸出（數量最多為 64）。它們使用 `event.recipes.minecraft.stonecutting()` 方法添加。

```js
// 在切石機上使用任意木板切割成 3 根木棍
event.recipes.minecraft.stonecutting('3x minecraft:stick', '#minecraft:planks')
```

### 自訂/模組 JSON 配方

如果模組支持資料包配方，你可以在不需要任何附加模組支持的情況下為其添加配方！不幸的是，我們無法提供具體建議，因為每個模組的設計都不同，但如果模組有 GitHub（大多數都有！）或其他原始碼，你可以在 `/src/generated/resources/data/<modname>/recipes/` 中找到相關的 JSON 文件。不然你也可能可以通過解壓模組的 .jar 文件找到它。

這裡有一個添加 農夫樂事（Farmer's Delight） 砧板配方的例子，定義了輸入、輸出和工具，直接取自他們的 [GitHub](https://github.com/vectorwing/FarmersDelight/blob/1.20/src/generated/resources/data/farmersdelight/recipes/cutting/cake.json)。顯然，你可以替換這裡的任何物品來製作自己的配方！

```js
// 在砧板上切蛋糕！
event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { item: 'minecraft:cake' }
  ],
  tool: { tag: 'forge:tools/knives' },
  result: [
    { item: 'farmersdelight:cake_slice', count: 7 }
  ]
})
```

這裡有另一個 `event.custom()` 的例子，用於製作 匠魂（Tinkers' Construct） 合金配方，定義了輸入、輸出和溫度，直接取自他們的 [GitHub](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/src/generated/resources/data/tconstruct/recipes/smeltery/alloys/molten_electrum.json)（已移除模組載入器的資料包載入條件）：

```js
// 添加 Tinkers' Construct 的熔融琥珀金配方
event.custom({
  type: "tconstruct:alloy",
  inputs: [
    { tag: "forge:molten_gold", amount: 90 },
    { tag: "forge:molten_silver", amount: 90 }
  ],
  result: { tag: "forge:molten_electrum", amount: 180 },
  temperature: 760
})
```

## 移除配方

移除配方可以使用 `event.remove()` 方法完成。它接受 1 個參數：配方過濾器。過濾器是一組屬性，用於確定選擇哪些配方。

- 根據輸出物品 `{output: '<item_id>'}`
- 根據輸入物品 `{input: '<item_id>'}`
- 根據模組 `{mod: '<mod_id>'}`
- 根據唯一配方 ID `{id: '<recipe_id>'}`
- 上述條件的組合：
  - 需要滿足**所有**條件：`{condition1: 'value', condition2: 'value2'}`
  - 需要滿足**任何**條件：`[{condition_a: 'true'}, {condition_b: 'true'}]`
  - 需要條件**不**滿足：`{not: {condition: 'requirement'}}`

以下所有內容都可以像往常一樣放在你的配方回呼函式中：

```js
// 空白條件移除所有配方（顯然不推薦）：
event.remove({})

// 移除所有輸出為石鎬的配方：
event.remove({ output: 'minecraft:stone_pickaxe' })

// 移除所有輸出具有羊毛標籤的配方：
event.remove({ output: '#minecraft:wool' })

// 移除所有輸入具有紅石粉標籤的配方：
event.remove({ input: '#forge:dusts/redstone' })

// 移除所有 Farmer's Delight 的配方：
event.remove({ mod: 'farmersdelight' })

// 移除所有營火烹飪配方：
event.remove({ type: 'minecraft:campfire_cooking' })

// 移除所有授予石頭的配方，除了煉製配方：
event.remove({ not: { type: 'minecraft:smelting' }, output: 'stone' })

// 移除輸出為熟雞肉且在營火上烹飪的配方：
event.remove({ output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking' })

// 移除任何輸出為 minecraft:iron_ingot 的爆破或煉製配方：
event.remove([{ type: 'minecraft:smelting', output: 'minecraft:iron_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:iron_ingot' }])

// 根據 ID 移除配方。在這種情況下，data/minecraft/recipes/glowstone.json：
// 注意：配方 ID 和輸出通常不同！
event.remove({ id: 'minecraft:glowstone' })
```

要找到配方的唯一 ID，請使用 `F3 + H` 鍵打開高級工具提示（你會在聊天中看到公告），然後將鼠標懸停在 [+] 符號上（如果使用 REI）或輸出上（如果使用 EMI 或 JEI）。

::: note
當同時安裝 EMI 和 JEI 時，JEI 添加的配方將具有類似於 jei:/mod_id/pathway_1/pathway_2 的 ID。實際的配方 ID 將是 `mod_id:pathway_1/pathway_2`。
:::

## 修改與替換配方

你可以使用 `event.replaceInput()` 和 `event.replaceOutput()` 批量修改支持的配方。它們各自接受 3 個參數：
1. 一個過濾器，類似於 [移除配方](#removing-recipes) 時使用的過濾器
2. 要替換的材料
3. 要替換成的材料（可以是標籤）
例如，假設你要移除所有木棍並讓玩家使用樹苗製作物品。在你的 [回呼函式](#recipes-callbacks-and-you) 中，你會使用：

```js
event.replaceInput(
  { input: 'minecraft:stick' }, // 參數 1：過濾器
  'minecraft:stick',            // 參數 2：要替換的物品
  '#minecraft:saplings'         // 參數 3：要替換成的物品
)
```

## 高級技術

### 幫助函數

你是否在製作大量相似的配方？覺得你在一遍又一遍地輸入相同的內容？試試寫個幫助函數吧！幫助函數將通過僅接收相關部分來執行重複的操作，然後為你完成重複的部分！
這裡有一個幫助函數，讓你透過在花盆旁圍繞著指定的物品來製作物品。

```js
ServerEvents.recipes(event => {
  function potting(output, pottedInput) {
    event.shaped(output, [
      'BIB',
      ' B '
    ], {
      B: 'minecraft:brick',
      I: pottedInput
    })
  }

  //現在我們可以製作許多「potting」配方，而不需要一遍又一遍地輸入那些繁雜的方塊！
  potting('kubejs:potted_snowball', 'minecraft:snowball')
  potting('kubejs:potted_lava', 'minecraft:lava_bucket')
  potting('minecraft:blast_furnace', 'minecraft:furnace')
})
```

### 循環

除了幫助函數，你還可以遍歷一個陣列，對陣列中的每個項目執行操作。
