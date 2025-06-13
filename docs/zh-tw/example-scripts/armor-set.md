---
title: 套裝效果 + Tooltip 提示
isOriginal: true
tags: [KubeJS 6]
---

當玩家穿戴完整套裝時，會自動套用套裝效果，並在 Tooltip 中顯示當前套裝名稱。

```js title="<ServerSide/>"
global.armorSets = {
  netherite: "Netherite Armor Set",
};

PlayerEvents.inventoryChanged((event) => {
  const { item, player, slot } = event;

  if (item.hasTag("forge:armors") && !item?.nbt?.armor_set) {
    item.setNbt({ armor_set: "" });
  }

  for (let key of Object.keys(global.armorSets)) {
    let setName = player.armorSlots.every((armor) =>
      Utils.id(armor.id).path.startsWith(key)
    )
      ? key
      : "";

    player.armorSlots.forEach((eachArmor) => {
      if (!eachArmor.empty) eachArmor.setNbt({ armor_set: setName });
    });
    player.inventory.getStackInSlot(slot).setNbt({ armor_set: setName });
    player.persistentData.putString("armor_set", setName);
  }
});
```

## 客戶端腳本

```js
ItemEvents.tooltip((event) => {
  event.addAdvancedToAll((item, isAdvanced, tooltip) => {
    if (item.hasTag("forge:armors") && item?.nbt?.armor_set !== undefined) {
      /** @type {{ armor_set: string }} */
      const { armor_set } = item.nbt;

      if (global.armorSets[armor_set] !== undefined) {
        tooltip.add(1, [
          "Active Armor Set: ",
          Text.green(global.armorSets[armor_set]),
        ]);
      } else {
        tooltip.add(1, ["Active Armor Set: ", Text.red("No Active")]);
      }
    }
  });
});
```
