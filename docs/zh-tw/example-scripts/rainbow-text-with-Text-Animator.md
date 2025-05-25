---
title: 彩色字體
description: 使用 Text Animator 模組實現彩色字體效果。
isOriginal: true
---

必須搭配 [Text Animator](https://modrinth.com/mod/text-animator) 模組使用

<Attachment link="0.mp4" />

```js
StartupEvents.registry("item", (event) => {
  event
    .create("rainbow_stick")
    .displayName("<shadow-off><rainb>Rainbow Stick</rainb></shadow-off>")
    .texture("minecraft:item/stick");
});
```
