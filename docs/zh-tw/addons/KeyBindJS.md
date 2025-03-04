---
title: KeyBindJS
description: 一個為 KubeJS 添加按鍵綁定的擴充模組。
categories:
  - forge-1.20
tags:
  - 按鍵綁定
layout: AddonPage
mod:
  name: KeyBindJS
  author: 小忆然喵
  CurseForge: mc-mods/keybindjs
  GitHub: yiran1457/KeyBindJS
  McMod: class/18686
source: https://github.com/yiran1457/KeyBindJS/blob/master/README.md
---

以下是將預設配件選單鍵更改為 ALT+X（移至原版的 Misc 類別下）並刪除跳躍鍵綁定的範例：

```js
KeyBindEvents.modify((event) => {
  event.modifyKey('key.curios.open.desc', GLFM.GLFM_KEY_X);
  event.modifyModifier('key.curios.open.desc', KeyModifier.ALT);
  event.modifyCategory('key.curios.open.desc', 'key.categories.misc');

  event.remove('key.jump');
});
```

::: important
請勿在獨立伺服器端安裝此模組，因為它會導致伺服器和客戶端之間的不一致。
:::