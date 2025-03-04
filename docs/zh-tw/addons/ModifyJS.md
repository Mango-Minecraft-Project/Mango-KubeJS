---
title: ModifyJS
description: 讓 KubeJS 能修改更多事情
categories:
  - forge-1.20
tags:
  - modify
  - ItemBuilder
layout: AddonPage
mod:
  name: ModifyJS
  author: AnNingUI
  CurseForge: mc-mod/modifyjs
  Modrinth: mod/modifyjs
  GitHub: AnNingUI/ModifyJS
  McMod: class/18566
source: https://github.com/AnNingUI/ModifyJs/blob/main/README_ZH.md
---

## 簡介

這是一個簡單的模組，最開始只是為了對一些 KubeJS 社區沒有怎麼實現的補充，現在只是實現了一些物品的渲染，可以視作對 [RenderJS](https://github.com/ch1335/RenderJS) 的一些簡單補充，其次是添加了 [Mekanism 模組化物品](https://wiki.aidancbrady.com/wiki/Modules) 的註冊類型。

::: important
這個模組重寫了 `BlockItemBuilder` 的 `createObject` 方法，這可能會在方塊註冊期間引起問題。
:::

## 示例

### 物品渲染

```js
// 方塊物品渲染
const $Axis = Java.loadClass("com.mojang.math.Axis");

StartupEvents.registry("block", (event) => {
  event.create("test_block").item((pose) => {
    pose.isCustomRenderer(true);
    pose.renderByItem((itemStack, itemDisplayContext, poseStack, buffer, packedLight, packedOverlay) => {
      poseStack.pushPose();
      let time = Date.now();
      let angle = (time / 10) % 360;
      poseStack.mulPose($Axis.YP.rotationDegrees(angle));
      Client.itemRenderer
        .getBlockEntityRenderer()
        .renderByItem("blue_bed", itemDisplayContext, poseStack, buffer, packedLight, packedOverlay);
      poseStack.popPose();
    });
  });
});

// 如果你需要為普通物品添加物品渲染器，你應該使用建構器類型 `mjs_item`
StartupEvents.registry("item", (event) => {
  event.create("test_item", "mjs_item")
    .isCustomRenderer(true)
    .renderByItem((itemStack, itemDisplayContext, poseStack, buffer, packedLight, packedOverlay) => {
      Client.itemRenderer
        .getBlockEntityRenderer()
        .renderByItem("blue_bed", itemDisplayContext, poseStack, buffer, packedLight, packedOverlay);
    });
});
```

### Mekanism 模組化物品

```js {5-11}
// [!code word:"mek_unit"]
StartupEvents.registry("item", (event) => {
  const module_item = event.create("module_create_energy_unit", "mek_unit")

    // Mekanism 模組化物品
    module_item
      .setSlot("all")
      .tickServer((module, player) => {
        const maxEnergy = KJSModuleUtils.getMaxEnergy(module.getContainer());
        module.getEnergyContainer().setEnergy(maxEnergy);
      });
});
```

### 物品建立器修改

```js
// [!code word:modifyItemBuilder]
// 這個例子可以讓所有沒有重寫過 use 方法的物品 use 方法都變成終界珍珠的 use 方法。
// 注意：如果要修改指定的物品，需要檢查它的類是否重寫了需要修改的方法。

ItemEvents.modification((event) => {
  event.modifyItemBuilder("*", (itemBuilder) => {
    itemBuilder.use((level, player, hand) => {
      Item.of("ender_pearl").use(level, player, hand);
      return true;
    });
    return itemBuilder;
  });
});
```