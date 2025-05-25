---
title: Global 物件
description: 如何使用 Global 
layout: AddonPage
source: https://kubejs.com/wiki/tips/global
---

`global` 是一個在所有腳本類型中都可以訪問的物件。

它可以用於在腳本之間共享數據，例如自動為物品添加配方。

這裡有一個例子：

```js
// 啟動腳本
global.items = [
  ['hi_wiki', '4x diamond']
]
StartupEvents.registry('item', event => {
  // 註冊物品
  global.items.forEach(items => event.register(items[0]))
})
```
```js
// 伺服器腳本
ServerEvents.recipes(event => {
  // 添加配方
  global.items.forEach(items => event.shapeless(items[0], items[1]))
})
```