---
title: 獲取當前月相
description: 獲取當前月相，並在每個 Minecraft 日的第一個 tick 告訴玩家。
isOriginal: true
---

```js
const moonPhaseList = ["滿", "虧凸", "下弦", "殘", "新", "峨嵋", "滿", "滿"];

LevelEvents.tick("overworld", (event) => {
  const { moonPhase, dayTime, server } = event;

  if (dayTime % 24000 === 1) {
    server.tell(`今天的月像是${moonPhaseList[moonPhase]}月`);
  }
});
```
