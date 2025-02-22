---
title: KubeLoader
description: 允許將打包過的 KubeJS 腳本載入到遊戲中。
author: Whise
isOriginal: true
categories:
  - forge-1.20
tags:
  - contentpack
  - loader
---

<BadgeCompat CurseForge="mc-mod/kubeloader" Modrinth="mod/kubeloader" Github="WhiseNT/kubeloader" Mcmod="class/18512" />

---

::: info 原文
https://github.com/WhiseNT/kubeloader/blob/master/README.md
:::

KubeLoader 是一個 KubeJS 擴充模組，目前處於早期開發階段，僅支持 Forge 1.20.1（因為模組所涉及內容與 Minecraft 本體關聯度不大，所以版本的遷移很容易。在進度足夠時會盡快支持其他版本）。

此模組提供了一種類似於「資源包」或「資料包」的 KubeJS 腳本和資源集合，名為內容包（ContentPack），並支持 **從內容包資料夾** 和 **從模組資源** 兩種讀取方式。

從內容包資料夾的方式為：在 `kubejs/contentpacks/` 下放置資料夾或 `zip` 格式壓縮包（如果沒有，可以自行創建，或等待遊戲啟動後由模組創建）。

在寫入內容後，KubeLoader 會在常規腳本路徑下新建 `contentpack_scripts/` 資料夾來存放腳本（不要修改該資料夾下的任何內容）。

同時會創建 `pack_resources/` 資料夾用於存放內容包的資源（assets + data）。

## 內容包文件結構參考

### 資料夾類型

```
命名空間/ (資料夾)
  └── server_scripts/
  └── client_scripts/
  └── server_scripts/
  └── assets/
  └── data/
```

### 壓縮包類型

```
CustomName.zip (壓縮包)
  └── 命名空間/ 
      └── server_scripts/
      └── client_scripts/
      └── server_scripts/
      └── assets/
      └── data/
```

### 打包入模組資源

```
Resources/ (模組資源)
  └── assets/
  └── data/
  └── contentpack/ (注意，沒有 s)
      └── server_scripts/
      └── client_scripts/
      └── server_scripts/
```

命名空間在文件上不會對腳本產生約束，但希望你使用非 `kubejs` 而是一個新的唯一的名稱作為命名空間（就像你在創建一個新的模組）。

注意：在構建壓縮包時若在目錄中帶有 **其他資料夾** 會導致內容包加載失敗。

## 腳本編寫建議

因為 KubeJS 腳本沒有根據命名空間隔離的功能（只有對於不同類型的腳本進行隔離的）。

所以如果你在編寫一個內容包，請保持所有 **非事件內** 的變數的唯一性，避免衝突。

推薦以下寫法：

### 對象寫法

```js
// 創建一個對象用於存儲事件外的其他變數，防止污染作用域和衝突。
const TestContentPackMod = {};
// 通過給 key 賦值來實現原本的「變數聲明」。
TestContentPackMod.MyTestTrigger = true;
// 在事件中調用
ItemEvents.rightClicked((event) => {
  if (TestContentPackMod.MyTestTrigger) {
    console.log("觸發內容！");
  } else {
    TestContentPackMod.MyTestTrigger = false;
  }
});
```

### IIEF 寫法

```js
(() => {
  // 在大括號內部的變數不會影響全局作用域
  let A = true;

  ItemEvents.rightClicked(event => {
    event.player.tell(A);
  });
})();
```
