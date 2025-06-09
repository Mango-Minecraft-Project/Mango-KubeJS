---
title: UtilJS
description: 添加了許多實用的方法和功能
# isOriginal: true
dir:
  link: true
  icon: star
  order: 1
categories:
  - neoforge-1.21
tags:
  - 匠魂
layout: AddonPage
mod:
  name: UtilJS
  author: 窓辺とうこ
  CurseForge: mc-mods/utiljs
  # Modrinth: mod/utiljs
  GitHub: Tki-sor/UtilJS
  McMod: class/20146
source: https://github.com/Tki-sor/UtilJS/wiki/
---

UtilJS 为 KubeJS 添加了一些实用方法，例如能够让代码安全运行的 `.runCatching()` 方法，以及 `let`、`also` 等方法。

并且将 `Integer`、`Boolean` 等基本数据类型的类开放了出来，以便于在某些要求输入这些类型的情况下使用。

此外，UtilJS 还为常用的类扩展了一个 `.wrap()` 方法，通过包装器可以使调用 `let`、`also` 等方法更方便，就像在 Kotlin 中一样。

## 示例

```js
ServerEvents.tick((event) => {
  event.server
    .wrap()
    .takeIf((take) => take.playerCount == 1)
    .also(al => {
      al.runCommandSilent("say player count = 1");
  });

  // 可以保证代码不会因为异常而终止
  let result = UtilJS.control.runCatching(() => {
    // 在 kubejs 这个 1 会被识别成 1.0 而导致失败，应该传入字符串的 "1"
    Integer.valueOf(1);
    return "OK";
  });

  // 然后可以通过 result 来获取返回值，此处 value 理应是 null
  result.getValue();
  result.getError();

  // 当然，也支援 Beans
  result.value;
  result.error;
});
```