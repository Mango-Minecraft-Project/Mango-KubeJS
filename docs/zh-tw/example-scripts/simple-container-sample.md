---
title: 簡易的容器
description: 創建一個簡單的容器
isOriginal: true
tags: [KubeJS 6, KubeJS 7]
---

:::: tabs#code
@tab KubeJS 6
  ::: code-tabs
  @tab <StartupSide/>
  ```js
  StartupEvents.registry("block", (event) => {
    event.create("kubejs:barrel").blockEntity((info) => {
      info.inventory(9, 3);
      info.rightClickOpensInventory();
    });
  });
  ```
  :::

若需支援輸入輸出，則需額外安裝 [PowerfulJS](https://www.curseforge.com/minecraft/mc-mods/powerfuljs) 並加上

  ::: code-tabs
  @tab <StartupSide/>
  ```js
      info.attachCapability(
        CapabilityBuilder.ITEM.blockEntity()
          .extractItem((blockEntity, slot, amount, simulate) => blockEntity.inventory.extractItem(slot, amount, simulate))
          .insertItem((blockEntity, slot, stack, simulate) => blockEntity.inventory.insertItem(slot, stack, simulate))
          .getSlotLimit((blockEntity, slot) => blockEntity.inventory.getSlotLimit(slot))
          .getSlots((blockEntity) => blockEntity.inventory.slots)
          .getStackInSlot((blockEntity, slot) => blockEntity.inventory.getStackInSlot(slot))
          .isItemValid((blockEntity, slot, stack) => blockEntity.inventory.isItemValid(slot, stack))
          .availableOn((blockEntity, direction) => direction != Direction.UP)
      );
  ```
  :::

@tab KubeJS 7

todo

::::
