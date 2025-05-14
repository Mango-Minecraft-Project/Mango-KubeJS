---
title: KeyBindJS
description: 一个为 KubeJS 添加按键绑定的拓展模組。
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
此模组为纯客户端模组
:::

一个支持整合包作者使用 KubeJS 来注册、修改、移除、使用按键绑定的模组。

以下是一個將打開飾品欄的預設按鍵改為 ALT+X，並移到原版的雜項分類下面，以及刪除跳躍按鍵的範例：

```js
KeyBindEvents.modify((event) => {
  event.modifyKey("key.curios.open.desc", GLFW.GLFW_KEY_X);
  event.modifyModifier("key.curios.open.desc", KeyModifier.ALT);
  event.modifyCategory("key.curios.open.desc", "key.categories.misc");

  event.remove("key.jump");
});
```

---

<Catalog hideHeading/>
