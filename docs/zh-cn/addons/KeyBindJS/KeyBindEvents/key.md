---
title: KeyBindJS.press/release
shortTitle: press/release
description: 按键按下/松开事件
---

<ClientSide/>

```ts title="@at client"
keyRelease(extra: string, handler: (event: KeyPressedEvent) => void):void,
keyPressInGui(extra: string, handler: (event: KeyPressedEvent) => void):void,
firstKeyPressInGui(extra: string, handler: (event: KeyPressedEvent) => void):void,
keyPress(extra: string, handler: (event: KeyPressedEvent) => void):void,
keyReleaseInGui(extra: string, handler: (event: KeyPressedEvent) => void):void,
```

extra可使用按键绑定的翻译键，也可使用自定义名称

此类事件分成两种组合

- 状态
  - `Press` - 按键刚按下时触发一次
  - `Release` - 按键松开时触发一次
- 环境
  - `InGui` - 仅在 GUI 中触发
  - `<none>` - 在任何情況下触发
- 情境
  - `First` - 只在按下时触发一次
  - `<none>` - 持续触发
