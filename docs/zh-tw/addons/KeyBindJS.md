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


在开始进行使用按键绑定前你需要注册按键绑定或者添加对已有按键绑定的监听
```js
//在startup
KeyBindEvents.register(event=>{
    //创建按键绑定 (第一个参数为标识，按键触发都会使用这个标识)
    event.create('create1','key.test.create.1',-1,'key.group.debug')

    event.create('create2','key.test.create.2',GLFW.GLFW_KEY_X,'key.group.debug')
    //添加修饰按键
    .addModifier(KeyModifier.ALT)
})
KeyBindEvents.modify(event=>{
    //添加对原版前进键的监听 (第一个参数为标识)
    //若不清楚有哪些按键可以使用 @key_name 查看
    event.addListener('forward',"key.forward")
})
```
















