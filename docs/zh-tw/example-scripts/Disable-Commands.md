---
isOriginal: true
category:
  - 範例腳本
tag:
  - 伺服器腳本
  - 指令
---

# 禁止玩家使用特定指令

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
