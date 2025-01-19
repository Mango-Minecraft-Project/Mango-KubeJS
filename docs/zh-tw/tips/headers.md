---
description: 什麼是標頭以及如何使用它們
---

# 標頭

在 1.19.2+ 版本中，您可以在腳本的頂部添加各種標頭來更改其加載條件。
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