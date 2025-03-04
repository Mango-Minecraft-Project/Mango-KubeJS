---
title: Create Heat JS
description: 自訂 Create 配方的熱源類型＆熱量等級
categories:
  - forge-1.19
  - forge-1.20
tags:
  - 自訂熱源
layout: AddonPage
mod:
  name: Create Heat JS
  author: 小胡闹
  CurseForge: mc-mods/create-heat-js
  Modrinth: mod/create-heat-js
  GitHub: XiaoHuNao/CreateHeatJS
  McMod: class/15160
source: https://github.com/XiaoHuNao/CreateHeatJS/blob/1.20.1/README.md
---

此 Mod 允許你通過 KubeJS & KubeJS Create 自訂部分加工配方所需求的熱源類型＆熱量等級；

`0.0.3` 版本取消了數字優先級的設定，因此在註冊的時候也不需要填寫數字；

使用 `.heatLevel()` 方法設定熱量類型；

```js
// server_scripts
ServerEvents.recipes((event) => {
  const { create } = event.recipes
   
  create.mixing("minecraft:diamond", [
    "minecraft:coal_block"
  ]).heatLevel("melt")
   
  create.compacting("minecraft:diamond", [
    "minecraft:coal_block"
  ]).heatLevel("melt")
})
```

註冊新的熱源類型 & 熱量等級。

```js
// startup_scripts
CreateHeatJS.registerHeatEvent((event) => {
  event.registerHeat("melt", 0xFF8C00)
    .addHeatSource("minecraft:fire")
    .register()
})
```

::: warning JEI內顯示默認是本地化鍵名，需要自己寫語言文件進行本地化

```js
// client_scripts
ClientEvents.lang("zh_tw", (event) => {
  let heatedTip = [
    ["melt", "熔化"]
  ]
  heatedTip.forEach(([key, text]) => {
    event.add("create.recipe.heat_requirement." + key, text)
  })
})
```
:::