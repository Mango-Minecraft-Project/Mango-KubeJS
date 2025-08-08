---
title: KubeUtils
description: 為 1.20.1 的 Tinkers' Construct 添加 KubeJS 支援。
isOriginal: true
dir:
  link: true
  icon: star
  order: 1
categories:
  - forge-1.18
  - forge-1.19
  - forge-1.20
  - neoforge-1.21
layout: AddonPage
mod:
  name: KubeUtils
  author: ErrorMikey
  CurseForge: mc-mods/kube-utils
  Modrinth: mod/kube-utils
  GitHub: nanite/KubeUtils
  # McMod: class/18657
---

# Kube Utils 文件

Kube Utils 是一個為 KubeJS 製作的相對簡單的附加模組。我將一些在 Minecraft 和 KubeJS 中較難介接的內容，透過一系列實用工具和類別包裝，簡化了複雜度並提升了在大量使用 KubeJS 程式碼時的效能。

## 聲明

> Kube Utils 主要根據作者的使用情境開發，因此模組的範圍可能較為有限。如果你有想要加入 KubeUtils 的功能，歡迎告訴我，只要可行我會盡量新增 :D

## 模組

KubeUtils 所引入的每個模組都會以 `Ku` 命名空間為前綴。每個模組都旨在改善 Minecraft / KubeJS 的特定元素，並且通常不會超出該元素的範疇。

在 KubeJS 中使用模組很簡單。`Ku` 命名空間始終可用，但有時你需要建立一個 `Ku` 模組的實例，有時則可以直接使用。

下方每個模組都會標註是 `static`（靜態）還是 `constructed`（需建立實例）。`static` 模組可以直接使用，無需建立實例；`constructed` 模組則需要先建立才能使用。例如 `players` 模組，你需要透過 `new Ku.Player(your_mc_player_object)` 來使用。這與 `static` 模組如 `utils` 不同，後者可以直接使用，例如 `Ku.Utils.nullOrEmpty(the_object_you_want_to_check)`。

### [玩家 `Ku.Player` `constructed`](modules/player.md)

玩家模組提供了許多實用方法，如 `showActionBar`、`isClientSide`，以及清除 KubeUtils 啟動物品系統中 `clearStartItemsFlag` 的能力。

### [世界 `Ku.Level` `constructed`](modules/level.md)

世界模組目前專注於提供結構處理、獲取特定區域方塊、生成結構和尋找隨機位置等簡單方法。

### [流體 `Ku.Fluid` `static`](modules/fluids.md)

流體模組允許你透過命名空間或多個命名空間獲取流體，並能檢查流體是否為空。此模組仍在持續擴充中。

### [列表 `Ku.Lists` `static`](modules/lists.md)

列表模組目前功能有限，但可根據權重系統隨機取得一個條目。

### [串流 `Ku.Streams` `static`](modules/streams.md)

串流模組目前也較為有限。你可以用它將 `BlockPos` 清單轉換為 `BlockContainerJS` 清單。

## 系統

與上述模組不同，系統的設計理念是提供「預製」功能，讓你可以用 Ku 或 KubeJS 來介接。目前僅有一個系統，但歡迎提出建議。

### [啟動物品](systems/starter-items.md)

此系統主要為模組包開發者設計。它能讓你定義玩家首次進入世界時應獲得的物品清單。
