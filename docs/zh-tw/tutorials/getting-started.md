---
title: 如何開始
description: KubeJS 的基礎
order: 1
---

::: info 原始網頁
https://kubejs.com/wiki/tutorials/getting-started
:::

::: warning
在開始使用 KubeJS 之前，您必須學習程式設計和 JavaScript 的基礎知識！
:::

首先，您需要一個程式碼編輯器。程式碼編輯器將使您的程式碼更具可讀性，並幫助您發現所犯的錯誤。

我們推薦 [Visual Studio Code](https://code.visualstudio.com/)，它對 JavaScript 有原生支援。

## 使用 ProbeJS

ProbeJS 是 KubeJS 的一個重要插件，它基於生成的 TypeScript 文件提供程式碼補全功能。

它可以幫助您找到方法和字段，並為方法、函數和事件處理程序提供文檔。

要使用 ProbeJS，您首先需要在安裝了 KubeJS 和 ProbeJS 的情況下啟動遊戲，進入一個世界，並運行命令 `/probejs dump`。

此命令將在您的模組包文件夾中生成所有的類型（文檔）。

接下來，您需要在 Visual Studio Code 中打開您的模組包文件夾（無論是 .minecraft 還是您的模組包名稱），然後打開 kubejs 文件夾。

## 文件夾結構

[文件夾結構](../folder-structure/) 類別更深入地解釋了 kubejs 文件夾結構。

目前，您應該注意以下三個文件夾：
- `server_scripts`
- `client_scripts`
- `startup_scripts`

這些是您將編寫腳本的腳本文件夾。

現在，您應該準備好開始使用 KubeJS 了！

查看其他維基頁面以獲取更多信息，如果您有任何問題，請隨時在 [latvian.dev Discord 伺服器](https://discord.gg/lat) 中詢問！