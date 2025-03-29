---
title: KeyBindJS.press/release
shortTitle: press/release
description: 按鍵按下/鬆開事件
---

<ClientSide/>

```ts title="@at client"
keyRelease(extra: string, handler: (event: KeyPressedEvent) => void):void,
keyRelease(handler: (event: KeyPressedEvent) => void):void,
keyPressInGui(extra: string, handler: (event: KeyPressedEvent) => void):void,
keyPressInGui(handler: (event: KeyPressedEvent) => void):void,
firstKeyPressInGui(extra: string, handler: (event: KeyPressedEvent) => void):void,
firstKeyPressInGui(handler: (event: KeyPressedEvent) => void):void,
firstKeyPressInGui(extra: string, handler: (event: KeyPressedEvent) => void):void,
firstKeyPressInGui(handler: (event: KeyPressedEvent) => void):void,
keyPress(extra: string, handler: (event: KeyPressedEvent) => void):void,
keyPress(handler: (event: KeyPressedEvent) => void):void,
keyReleaseInGui(extra: string, handler: (event: KeyPressedEvent) => void):void,
keyReleaseInGui(handler: (event: KeyPressedEvent) => void):void,
```

此類事件分成兩種組合

- 狀態
  - `Press` - 按鍵剛按下時觸發一次
  - `Release` - 按鍵鬆開時觸發一次
- 環境
  - `InGui` - 僅在 GUI 中觸發
  - `<none>` - 在任何情況下觸發
- 情境
  - `First` - 只在按下時觸發一次
  - `<none>` - 持續觸發

## `KePressedEvent`

### 屬性與方法

| 名稱                                    | 回傳值            | 說明               |
| --------------------------------------- | ----------------- | ------------------ |
| `removeGameStage(stage: string)`        | `void`            | 移除遊戲階段       |
| `addGameStage(stage: string)`           | `void`            | 添加遊戲階段       |
| `hasGameStage(stage: string)`           | `boolean`         | 判斷是否有遊戲階段 |
| `getCustomName()` <br> `get customName` | `string`          | 獲取自定義名稱     |
| `getEntity()` <br> `get entity`         | `Entity`          | 獲取當前實體       |
| `getLevel()` <br> `get level`           | `Level`           | 獲取當前世界       |
| `getPlayer()` <br> `get player`         | `LocalPlayer`     | 獲取當前玩家       |
| `getServer()` <br> `get server`         | `MinecraftServer` | 獲取伺服器         |