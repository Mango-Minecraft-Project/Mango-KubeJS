---
author: ZZZank
description: 為 KubeJS 添加原生事件監聽的熱重載支持
---

<BadgeCompat CurseForge="mc-mods/eventjs" Modrinth="mod/eventjs" Github="ZZZank/EventJS" Mcmod="class/17008"/>

# EventJS

## 太長不看

EventJS 最顯著的功能是，你可以不必重啟遊戲就能刷新/增加/刪減 KubeJS 對 Forge 事件的監聽，只需要進行一次腳本重載（比如命令 `/kubejs reload startup_scripts`）即可。

## EventJS

為 KubeJS 添加了原生事件監聽的熱重載支持。  
借助 EventJS，你既不需要重啟整個遊戲，也不需要用一個 `global['someId']` 存儲監聽函數，就可以刷新你對原生事件的監聽。  
類似地，你也不必重啟遊戲就可以添加/刪減對原生事件的監聽，這是 EventJS 所支持的 KubeJS 版本一直沒能做到的。

## 使用方法

默認情況下，EventJS 會替換掉原來的原生事件監聽，以此為其添加熱重載支持。  
所以，你可以什麼新東西都不必學就可以享受到 EventJS 帶來的好處。  
不過呢，如果你需要一些更加動態，更利於自定義，形式更完整的原生事件監聽，你可以使用 `NativeEvents.onEvent(...)` 監聽事件，或者 `NativeEvents.onGenericEvent(...)` 監聽帶泛型事件（Generic Event）。

`NativeEvents` 在所有三個腳本類型（ScriptType）對應的定義域（client/server/startup）內都是可用的，因此你可以藉此做到為客戶端/服務端分別添加事件監聽，也就是說，比如你在 `client_scripts` 內添加了一個對僅客戶端的事件的監聽，則這個事件監聽不會發生在服務端。

## 語法（版本 1.1.0）

```js
NativeEvents.onEvent(eventType, handler)
NativeEvents.onEvent(priority, receiveCancelled, eventType, handler)
NativeEvents.onEventTyped(priority, receiveCancelled, eventType, handler)
NativeEvents.onGenericEvent(genericClassType, eventType, handler)
NativeEvents.onGenericEvent(genericClassType, priority, receiveCancelled, eventType, handler)
NativeEvents.onGenericEventTyped(genericClassType, priority, receiveCancelled, eventType, handler)
```

`handler` 在 JS 側就是事件的監聽函數，比如 `(event) => {...}`  
`eventType` 與 `genericClassType` 是“可以表示一個類的東西”，比如一個內容是類名的字符串，或者通過 `java(...)` 或 `Java.loadClass(...)` 加載得到的類自身。

## 支持版本

- 版本 1.0.0：1.16.5；
- 版本 1.1.0：1.16.5，1.18.2，1.20.1；
- 版本 1.2.0 起：所有 1.16 與 1.20 間的主流版本，也就是 1.16.5，1.18.2，1.19.2，1.20.1。

## 你知道嗎

作者製作這個 Mod 的動機是，KubeJS 一直拖到 1.21 才添加了原生事件監聽的熱重載支持，然而這早在 1.16 時期（甚至可以更早，一直早到 1.12 時期）就已經可以實現了。作者實在是氣不過，便自己編寫了這個模組。

雖然 EventJS 與 1.21+ 的 KubeJS 在熱重載事件監聽這方面在 JavaScript 側用起來沒有什麼區別，但是具體實現並不一致，在 Java 側與 EventJS 交互時記得不要想當然。
