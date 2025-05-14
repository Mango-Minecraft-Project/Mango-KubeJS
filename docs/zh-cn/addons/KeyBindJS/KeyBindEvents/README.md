---
title: KeyBindEvents
dir:
  link: true
---

## 登录 <StartupSide/>

| 事件名称                             | 说明         |
| ------------------------------------ | ------------ |
| [`KeyBindEvents.register`][register] | 注册按键绑定 |

[register]: ./register

## 修改 <StartupSide/>

| 事件名称                         | 说明         |
| -------------------------------- | ------------ |
| [`KeyBindEvents.modify`][modify] | 修改按键绑定 |

[modify]: ./modify

## 监听 <ClientSide/>

| 事件名称                                  | 说明                                |
| ----------------------------------------- | ----------------------------------- |
| [`KeyBindEvents.firstKeyPress`][key]      | 按键刚按下时触发一次                |
| [`KeyBindEvents.firstKeyPressInGui`][key] | 按键刚按下时触发一次（仅在 GUI 中） |
| [`KeyBindEvents.keyPress`][key]           | 按键按下时持续触发                  |
| [`KeyBindEvents.keyPressInGui`][key]      | 按键按下时持续触发（仅在 GUI 中）   |
| [`KeyBindEvents.keyRelease`][key]         | 按键松开时触发一次                  |
| [`KeyBindEvents.keyReleaseInGui`][key]    | 按键松开时触发一次（仅在 GUI 中）   |

[key]: ./key
