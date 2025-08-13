---
title: KeyBindEvents
dir:
  link: true
---

::: tabs#code

@tab KubeJS 6

## 登錄 <StartupSide/>

| 事件名稱                             | 說明         |
| ------------------------------------ | ------------ |
| [`KeyBindEvents.register`][register] | 註冊按鍵綁定 |

[register]: ./register

## 修改 <StartupSide/>

| 事件名稱                         | 說明         |
| -------------------------------- | ------------ |
| [`KeyBindEvents.modify`][modify] | 修改按鍵綁定 |

[modify]: ./modify

@tab KubeJS 7

## 登錄 <ClientSide/>

| 事件名稱                             | 說明         |
| ------------------------------------ | ------------ |
| [`KeyBindEvents.register`][register] | 註冊按鍵綁定 |

[register]: ./register

## 修改 <ClientSide/>

| 事件名稱                         | 說明         |
| -------------------------------- | ------------ |
| [`KeyBindEvents.modify`][modify] | 修改按鍵綁定 |

[modify]: ./modify

:::

## 監聽 <ClientSide/>

| 事件名稱                                  | 說明                                |
| ----------------------------------------- | ----------------------------------- |
| [`KeyBindEvents.firstKeyPress`][key]      | 按鍵剛按下時觸發一次                |
| [`KeyBindEvents.firstKeyPressInGui`][key] | 按鍵剛按下時觸發一次（僅在 GUI 中） |
| [`KeyBindEvents.keyPress`][key]           | 按鍵按下時持續觸發                  |
| [`KeyBindEvents.keyPressInGui`][key]      | 按鍵按下時持續觸發（僅在 GUI 中）   |
| [`KeyBindEvents.keyRelease`][key]         | 按鍵鬆開時觸發一次                  |
| [`KeyBindEvents.keyReleaseInGui`][key]    | 按鍵鬆開時觸發一次（僅在 GUI 中）   |

[key]: ./key
