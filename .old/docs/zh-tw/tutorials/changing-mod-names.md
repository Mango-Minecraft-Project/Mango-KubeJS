---
title: 更改模組顯示名稱
description: 是的，這很奇怪，但確實可行！
layout: AddonPage
source: https://kubejs.com/wiki/tutorials/changing-mod-names
---

在啟動腳本中，添加這行代碼：

```js
Platform.setModName("kubejs", "我的模組包名稱");
```

當你使用 KubeJS 添加大量物品但希望它們顯示你的模組包名稱而不是「KubeJS」時，這會很有用。
是的，你也可以更改其他模組的名稱：

```js
Platform.setModName("botania", "植物科技模組");
```