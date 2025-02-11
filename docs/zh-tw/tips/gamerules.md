---
title: 遊戲規則
---

要正確更改遊戲規則，與其執行命令，你可以這樣做：

```js
BlockEvents.placed('command_block', (event) => {
  event.server.gameRules.set("doMobSpawning", false); // 生成生物
  event.server.gameRules.set("mobGriefing", false); // 允許生物的破壞行為
  event.server.gameRules.set("doDaylightCycle", false); // 日夜交替
})
```

請記住這只是個範例，你的事件／上下文可能會有所不同。
