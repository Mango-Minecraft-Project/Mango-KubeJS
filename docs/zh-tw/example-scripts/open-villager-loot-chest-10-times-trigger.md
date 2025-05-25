---
title: 每開啟 10 次村莊中的戰利品箱後觸發
description: 玩家每開啟 10 次村莊中的戰利品箱後觸發，並在開啟後告訴玩家。
isOriginal: true
---

```js
const dataKey = "villageChestsOpened";
const maxOpenTimes = 10;

BlockEvents.rightClicked("chest", (event) => {
  const { player, block } = event;

  if (block.entityData.getString("LootTable").includes("chests/village/")) {
    player.persistentData.putLong(
      dataKey,
      player.persistentData.getLong(dataKey) + 1
    );
    player.tell("You've opened a village chest!");

    if (player.persistentData.getLong(dataKey) >= maxOpenTimes) {
      player.tell("  You've opened 10 village chests!");
      player.persistentData.putLong(dataKey, 0);
    }
  }
});
```
