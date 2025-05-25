---
title: 禁止玩家使用特定指令
description: 禁止玩家使用特定指令，例如禁止使用 `painter` 指令
isOriginal: true
---

_You Shall Not Pass!_

```js
/**
 * @param {Internal.CommandEventJS_} event
 */
function youShallNotUsePainter(event) {
  const { input, parseResults } = event;

  if (input.split(" ")[1] === "painter") {
    parseResults.context.source.player.tell("You Shall Not Use Painter!");
    event.cancel();
  }
}

ServerEvents.command("kubejs", youShallNotUsePainter);
ServerEvents.command("kjs", youShallNotUsePainter);
```
