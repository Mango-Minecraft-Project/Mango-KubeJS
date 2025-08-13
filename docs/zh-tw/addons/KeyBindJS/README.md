---
title: KeyBindJS
description: 一個為 KubeJS 添加按鍵綁定的擴充模組。
author:
  - 小忆然喵
  - 芒果凍布丁
isOriginal: true
dir:
  link: true
  icon: star
  order: 1
categories:
  - forge-1.20
tags:
  - 按鍵綁定
layout: AddonPage
mod:
  name: KeyBindJS
  author: 小忆然喵
  CurseForge: mc-mods/keybindjs
  Modrinth: mod/keybindjs
  GitHub: yiran1457/KeyBindJS
  McMod: class/18686
---

::: important
此模組為純客戶端模組，請勿在獨立伺服器端安裝此模組
:::

一個支援模組包作者使用 KubeJS 來註冊、修改、移除按鍵綁定的模組。

以下是一個將打開飾品欄的預設按鍵改為 ALT+X，並移到原版的雜項分類下面，以及刪除跳躍按鍵的範例：

::: code-tabs#code

@tab KubeJS 6

```js
KeyBindEvents.modify((event) => {
  event.modifyKey("key.curios.open.desc", GLFW.GLFW_KEY_X);
  event.modifyModifier("key.curios.open.desc", KeyModifier.ALT);
  event.modifyCategory("key.curios.open.desc", "key.categories.misc");

  event.remove("key.jump");
});
```

@tab KubeJS 7

```js
KeyBindJSEvents.modify((event) => {
  event.modifyKey("key.curios.open.desc", GLFW.GLFW_KEY_X);
  event.modifyModifier("key.curios.open.desc", KeyModifier.ALT);
  event.modifyCategory("key.curios.open.desc", "key.categories.misc");

  event.remove("key.jump");
});
```

:::

---

<Catalog hideHeading/>
