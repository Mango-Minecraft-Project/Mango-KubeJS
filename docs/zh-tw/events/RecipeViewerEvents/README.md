---
title: RecipeViewerEvents
dir:
  link: true
---

關於
這些事件允許您使用相同的事件一次性修改配方查看器模組！
目前支持的模組：

- Roughly Enough Items（1.20及以下版本請點此處）
- Just Enough Items（1.20及以下版本請點此處）
- EMI

您可以在 `client_scripts/` 和 `server_scripts/` 中使用這些事件（僅在伺服器端，僅支持 item 和 fluid 類型）。
支持的功能
✅ - 支持此功能
❌ - 目前不支持此功能
🧋 - 配方查看器模組中本來就沒有此功能

| 通用 RecipeViewerEvents | JEI | REI | EMI |
| ----------------------- | --- | --- | --- |
| `removeCategories`      | ✅  | ✅  | ✅  |
| `removeRecipes`         | ✅  | ✅  | ✅  |

| 物品 RecipeViewerEvents   | JEI | REI | EMI |
| ------------------------- | --- | --- | --- |
| `addEntries`              | ✅  | ✅  | ✅  |
| `removeEntries`           | ✅  | ✅  | ✅  |
| `removeEntriesCompletely` | ✅  | ✅  | ✅  |
| `addInformation`          | ✅  | ✅  | ✅  |
| `groupEntries`            | 🧋  | ✅  | 🧋  |

| 流體 RecipeViewerEvents   | JEI | REI | EMI |
| ------------------------- | --- | --- | --- |
| `addEntries`              | ✅  | ✅  | ✅  |
| `removeEntries`           | ✅  | ✅  | ✅  |
| `removeEntriesCompletely` | ✅  | ✅  | ✅  |
| `addInformation`          | ✅  | ✅  | ✅  |
| `groupEntries`            | 🧋  | ✅  | 🧋  |

如果您看到兩個圖標，則表示客戶端和伺服器端

| 自訂條目 RecipeViewerEvents | JEI | REI       | EMI |
| --------------------------- | --- | --------- | --- |
| `addEntries`                | ❌  | ✅\* / ❌ | ❌  |
| `removeEntries`             | ❌  | ✅\* / ❌ | ❌  |
| removeEntriesCompletely`    | ❌  | ✅\* / ❌ | ❌  |
| `addInformation`            | ❌  | ✅\* / ❌ | ❌  |
| `groupEntries`              | 🧋  | ✅\* / ❌ | 🧋  |

- 需要 KubeJS 插件來註冊自訂類型

<catalog/>
