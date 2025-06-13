---
title: 跨端的類別
description: 如何在 KubeJS 中創建跨端的類別
isOriginal: true
tags: [KubeJS 7]
---

::: details 前情提要
<!-- @include: ../tips/classes.md -->
:::

你可以先在 `startup` 腳本中定義一個類別，然後在 `client` 和 `server` 腳本中使用它。這樣可以確保類別在兩端都可用。

```javascript title="<StartupSide/> | startup_scripts/index.js"
global.Classes = global.Classes || {};
```

然後在 `startup` 腳本中定義你的類別。這裡我們使用 ES5 的語法來定義類別，因為 KubeJS 使用的是 Rhino 引擎，這樣可以確保在所有端都能正常運行。

```javascript title="<StartupSide/> | startup_scripts/index.js"
function MyClass(name) {
  this.name = name;
};

MyClass.prototype.greet = function() {
  return `Hello, ${this.name}!`;
};
```

接下來有兩種選擇，看你想在調用的時候使用 `new` 以標示這是一個類別，還是直接調用方法。

::: code-tabs#define-class
@tab `new Class()`
```javascript title="<StartupSide/> | startup_scripts/index.js"
global.Classes.MyClass = MyClass;
```

@tab `Class()`
```javascript title="<StartupSide/> | startup_scripts/index.js"
global.Classes.MyClass = () => new MyClass();
```
:::

接下來就可以在 `client` 和 `server` 腳本中使用這個類別了。

::: code-tabs#use-class
@tab `client` 腳本
```javascript title="<ClientSide/> | client_scripts/index.js"
const myInstance = new global.Classes.MyClass("World");
console.log(myInstance.greet()); // 輸出: Hello, World!
```

@tab `server` 腳本
```javascript title="<ServerSide/> | server_scripts/index.js"
const myInstance = new global.Classes.MyClass("Server");
console.log(myInstance.greet()); // 輸出: Hello, Server!
```
:::