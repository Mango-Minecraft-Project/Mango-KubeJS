---
title: 標頭
description: 什麼是標頭以及如何使用它們
---

::: info 原文
https://kubejs.com/wiki/tips/headers
:::

在 1.19.2+ 版本中，您可以在腳本的頂部添加各種標頭來更改其加載條件。

| 標頭名稱   | 類型     | 說明                                                                            |
| ---------- | -------- | ------------------------------------------------------------------------------- |
| `ignored`  | 布林值   | 當為 `true` 時，腳本將被忽略                                                    |
| `packmode` | 字串     | 當與 `kubejs/config/common.properties` 中的 `packmode` 設置相符時，腳本將被加載 |
| `priority` | 數字     | 腳本的加載優先級，數字越大，優先級越高                                          |
| `requires` | 字串     | 要求加載的模組 ID，可以堆疊使用                                                 |
| `requires` | `client` | 要求腳本在僅客戶端加載                                                          |


## 範例

例如：

```js
//ignored: true
console.log("我永遠不會被打印")
```

```js
//packmode: default
console.log('只有當 kubejs/config/common.properties 中的 packmode 設置為 default 時，我才會打印')
```

您也可以堆疊它們！

```js
//requires: minecraft
//requires: create
console.log('只有當加載了 id 為 minecraft 和 create 的模組時，我才會打印')
```

```js
//priority: 10
//packmode: hard
//requires: create
//requires: tconstruct
console.log('我很複雜！')
```