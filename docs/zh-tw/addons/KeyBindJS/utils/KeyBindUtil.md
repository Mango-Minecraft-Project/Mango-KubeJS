---
title: KeyBindUtil
description: 用於獲取按鍵綁定的名稱和分類
---

## 屬性與方法

| 方法名稱                                         | 返回值                  | 說明                         |
| ------------------------------------------------ | ----------------------- | ---------------------------- |
| `findKeyMappingInAllKeyMapping(keyName: string)` | `Internal.KeyMapping`   | 通過本地化按鍵名獲取按鍵綁定 |
| `getAllKeyCategory()` <br> `get allKeyCategory`  | `string[]`              | 獲取所有按鍵綁定的分類       |
| `getAllKeyMappings()` <br> `get allKeyMappings`  | `Internal.KeyMapping[]` | 獲取所有按鍵綁定             |
| `getAllKeyName()` <br> `get allKeyName`          | `string[]`              | 獲取所有按鍵綁定的名稱       |
| `getKeyMapping(customName: string)`              | `Internal.KeyMapping`   | 獲取按鍵綁定                 |
| `isDown(customName: string)`                     | `boolean`               | 判斷按鍵是否按下             |