---
isOriginal: true
category:
  - 範例腳本
tag:
  - 伺服器腳本
  - Text Animator
  - 文字顯示
---

# 彩色字體

必須搭配 [Text Animator](https://modrinth.com/mod/text-animator) 模組使用

<VidStack src="/example-scripts/Rainbow-Text-with-Text-Animator/0.mp4"/>

```js
StartupEvents.registry("item", (event) => {
  event
    .create("rainbow_stick")
    .displayName("<shadow-off><rainb>Rainbow Stick</rainb></shadow-off>")
    .texture("minecraft:item/stick");
});
```
