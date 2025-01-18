---
isOriginal: true
category:
  - 範例腳本
tag:
  - 伺服器腳本
  - 啟動腳本
---

# 隨機羊毛剪刀

## 啟動腳本

```js
StartupEvents.registry("item", (event) => {
  event.create("random_shear", "shears").texture(":item/shears").maxDamage(238);
});
```

## 伺服器腳本

```js
ItemEvents.entityInteracted("kubejs:random_shear", (event) => {
  const { entity, target, item, hand, server } = event;
  const colors = Object.keys(Color.DYE);

  function shear() {
    server.runCommandSilent(
      `playsound entity.sheep.shear master @a ${target.x} ${target.y} ${target.z} 1 1`
    );
    target.setSheared(true);
    let i = 1 + Utils.random.nextInt(3),
      j = 0,
      color;

    for (j; j < i; ++j) {
      color = colors[Utils.getRandom().nextInt(16)];
      target.block.popItem(`${color}_wool`);
    }
  }

  if (target.type === "minecraft:sheep" && target.readyForShearing()) {
    shear();
    item.hurtAndBreak(1, entity, (entityx) =>
      entityx.broadcastBreakEvent(hand)
    );
    event.cancel();
  }
});
```
