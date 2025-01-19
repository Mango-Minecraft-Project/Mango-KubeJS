---
author: G_cat [KJSPKG/HehVerse]
banner: https://kubejs.com/wiki/files/tooling/kjspkg/kjspkg.png
description: KubeJS 套件管理器
---

# KJSPKG

KJSPKG 是一個 KubeJS 的套件管理器，允許你下載不同的範例腳本和庫到你的實例中。  
它會自動管理你的 Minecraft 版本、模組加載器、依賴和不兼容控制。它適用於所有現代的 KubeJS 版本，甚至應該適用於一些較舊的版本，例如 1.12！

![](https://kubejs.com/wiki/files/tooling/kjspkg/kjspkg.png)

## 安裝

1. 下載 [KJSPKG 的 CLI 版本](https://github.com/Modern-Modpacks/kjspkg/tree/main#installation--update)。
2. 在你的實例中的 kubejs 目錄中打開終端。
3. 運行 kjspkg init 並選擇你的 Minecraft 版本/模組加載器。

::: tip
現在你可以將套件安裝到你的實例中了！
:::

## 使用方法

- 要查看有關套件的更多信息，運行 `kjspkg pkg <package_name>`
- 要下載套件，運行 `kjspkg install <package_name>`
- 要移除套件，運行 `kjspkg remove <package_name>`
- 要更新套件，運行 `kjspkg update <package_name>`
- 要搜索套件，運行 `kjspkg search <query>`
- 要列出實例中的所有套件，運行 `kjspkg list`
- 要列出所有可用的命令，運行 `kjspkg help`

## 添加你自己的套件

如果你有想要在 KJSPKG 上分享的範例腳本，請查看 KJSPKG 的 README 中的 [“添加你自己的套件”部分](https://github.com/Modern-Modpacks/kjspkg#adding-your-own-package)。我們總是很高興將不同作者的更多腳本添加到我們的列表中！