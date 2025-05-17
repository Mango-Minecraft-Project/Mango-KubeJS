---
title: KeyBindUtil
description: 用于获取按键绑定的名称和分类
---

## 属性与方法

| 方法名称                                         | 返回值                  | 说明                         |
| ------------------------------------------------ | ----------------------- | ---------------------------- |
| `findKeyMappingInAllKeyMapping(keyName: string)` | `Internal.KeyMapping`   | 通过本地化按键名获取按键绑定 |
| `getAllKeyCategory()` <br> `get allKeyCategory`  | `string[]`              | 获取所有按键绑定的分类       |
| `getAllKeyMappings()` <br> `get allKeyMappings`  | `Internal.KeyMapping[]` | 获取所有按键绑定             |
| `getAllKeyName()` <br> `get allKeyName`          | `string[]`              | 获取所有按键绑定的名称       |
| `getKeyMapping(customName: string)`              | `Internal.KeyMapping`   | 获取按键绑定                 |
| `isDown(customName: string)`                     | `boolean`               | 判断按键是否按下             |