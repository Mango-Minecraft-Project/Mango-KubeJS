---
title: 透過實體標籤減少受到的 TaCZ 子彈傷害
tags: [KubeJS 6]
---

::: code-tabs

@tab 使用 EventJS

```js title="<ServerSide/>"
// 定義一個用於子彈傷害減免的標籤
const BULLET_DAMAGE_REDUCTION_TAG = ResourceLocation.parse("kubejs:bullet_damage_reduction");
const BULLET_DAMAGE_REDUCTION_AMOUNT = 0.5;

// 註冊標籤並套用傷害減免
ServerEvents.tags("entity_type", (event) => {
  event.add(BULLET_DAMAGE_REDUCTION_TAG, "minecraft:creeper");
});

// 監聽生物受傷事件以套用傷害減免
const $LivingHurtEvent = Java.loadClass("net.minecraftforge.event.entity.living.LivingHurtEvent");
NativeEvents.onEvent($LivingHurtEvent, (event) => {
  const { entity, amount } = event;

  // 檢查生物是否具有子彈傷害減免標籤
  if (entity.entityType.tags.anyMatch((tag) => tag.location() == BULLET_DAMAGE_REDUCTION_TAG)) {
    event.setAmount(amount * BULLET_DAMAGE_REDUCTION_AMOUNT);
  }
});
```

:::