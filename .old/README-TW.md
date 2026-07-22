# 芒果的 KubeJS Wiki

## 如何開始

> [!NOTE]
> 需要 pnpm

1. 安裝 NodeJS 模組
   ```ps
   pnpm i
   ```
2. 啟動 VuePress 本地服務
   ```ps
   pnpm docs:dev
   ```

## Git 配置

- 開啟大小寫敏感 `git config core.ignorecase false`

## 特殊功能

### AddonPage

使用特殊的 `AddonPage` 佈局，可以在頁面上顯示模組的相關信息。

```yaml
---
layout: AddonPage

mod:
   name: 模組名稱 # 必填
   author: 作者名稱 # 必填
   CurseForge: 頁面Slug（包括完整前綴的 mc-mods/ 或其他）/ 專案ID # 可選
   Modrinth: 頁面Slug（包括完整前綴的 mod/ 或其他）/ i-專案ID # 可選
   GitHub: 儲存庫路徑 # 可選
   McMod: MC百科頁面（包括完整前綴的 class/ 或其他） # 可選
   Wiki: Wiki 網址 # 可選

isOriginal: 內文是否原創 # 可選
source: 原始內文網址 # 可選
---
```