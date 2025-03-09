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
  GitHub: yiran1457/KeyBindJS
  McMod: class/18686
---

::: important
此模組為純客戶端模組，請勿在獨立伺服器端安裝此模組
:::

一个支持整合包作者使用 KubeJS 来注册、修改、移除按键绑定的 Mod。

以下是一个将打开饰品栏的默认按键改为 ALT+X，并移到原版的杂项分类下面，和删除掉跳跃按键的例子：

```js
KeyBindEvents.modify((event) => {
  event.modifyKey('key.curios.open.desc',GLFW.GLFW_KEY_X);
  event.modifyModifier('key.curios.open.desc',KeyModifier.ALT);
  event.modifyCategory('key.curios.open.desc','key.categories.misc');

  event.remove('key.jump');
});
```

---

<Catalog hideHeading/>
