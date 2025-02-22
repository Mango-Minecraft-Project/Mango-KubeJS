---
author: PrizOwO
title: FilesJS
description: KubeJS 檔案管理附屬模組
categories:
  - forge-1.20
  - neoforge-1.21
tags:
  - 檔案
---

<BadgeCompat CurseForge="mc-mods/filesjs" Modrinth="mod/filesjs" Github="xiaoliziawa/Files-JS" Mcmod="class/17414"/>

---

::: info 原文
https://github.com/xiaoliziawa/Files-JS/blob/main/README-CN.md
:::

*FilesJS（檔案吉斯）是一個功能強大的 KubeJS 6 附屬模組，用來偷走你的失諧帳號和錢包。*

## 功能

- 檔案操作：讀取、寫入、追加、複製、移動和刪除檔案
- 目錄管理：列出、創建和監視目錄
- 檔案監控：監視檔案變更和內容修改
- 檔案分析：比較檔案、計算MD5哈希值、搜索檔案內容
- 備份管理：創建和管理檔案備份
- 歸檔操作：創建 ZIP 壓縮包

## API 部分參考（不全面）

### 檔案讀寫操作

```javascript

// 讀取檔案內容
let content = FilesJS.readFile('kubejs/config/myconfig.txt');

// 寫入檔案
FilesJS.writeFile('kubejs/data/output.txt', '你好，世界！');

// 追加到檔案
FilesJS.appendFile('kubejs/logs/mylog.txt', '新的日誌條目');

// 追加單行
FilesJS.appendLine('kubejs/logs/mylog.txt', '新的一行');

// 寫入多行
FilesJS.writeLines('kubejs/data/lines.txt', ['第一行', '第二行', '第三行']);

// 讀取所有行
let lines = FilesJS.readLines('kubejs/data/lines.txt');

// 讀取最後N行
let lastLines = FilesJS.readLastLines('kubejs/logs/latest.log', 10);

// 保存腳本檔案（自動添加.js副檔名和時間戳註釋）
FilesJS.saveScript('kubejs/scripts/newscript', 'console.log("Hello");');
```

### 檔案管理操作

```javascript
// 檢查檔案是否存在
if (FilesJS.exists('kubejs/scripts/myscript.js')) {
    // 執行操作
}

// 刪除檔案
FilesJS.delete('kubejs/temp/oldfile.txt');

// 複製檔案
FilesJS.copy('source.txt', 'target.txt');

// 移動檔案
FilesJS.move('old/path.txt', 'new/path.txt');

// 重命名檔案
FilesJS.renameFile('oldname.txt', 'newname.txt');

// 創建目錄
FilesJS.createDirectory('kubejs/newdir');

// 檢查檔案是否為空
let isEmpty = FilesJS.isFileEmpty('kubejs/data/file.txt');

// 獲取檔案 MD5 哈希值
let hash = FilesJS.getFileMD5('kubejs/data/important.dat');

// 比較兩個檔案
let areEqual = FilesJS.compareFiles('file1.txt', 'file2.txt');
```

### 批量檔案操作

```javascript
// 合併多個檔案
FilesJS.mergeFiles(['file1.txt', 'file2.txt'], 'merged.txt');

// 批量複製檔案（使用萬用字元）
FilesJS.copyFiles('source/dir', 'target/dir', '*.json');

// 創建 ZIP 壓縮包
FilesJS.createZip('kubejs/data', 'kubejs/backups/data.zip');

// 替換檔案中的內容
FilesJS.replaceInFile('config.txt', '舊值', '新值');
```

### 目錄操作

```javascript
// 列出目錄中的檔案
let files = FilesJS.listFiles('kubejs/data');

// 遞歸列出所有檔案
let allFiles = FilesJS.listFilesRecursively('kubejs/scripts');

// 獲取檔案信息
let fileInfo = FilesJS.getFileInfo('kubejs/config/settings.json');
// fileInfo包含：exists, size, lastModified, isDirectory, isFile, isReadable, isWritable
```

### 檔案監控

```javascript
// 監視目錄變更
FilesJS.watchDirectory('kubejs/data', (changedPath) => {
    console.log('檔案已更改:', changedPath);
});

// 監視檔案內容變更（帶相似度閾值）
FilesJS.watchContentChanges('kubejs/config/dynamic.json', 0.1);

// 監視匹配特定模式的檔案
FilesJS.watchFilePattern('kubejs/scripts', '*.js');

// 監視檔案大小
FilesJS.watchFileSize('kubejs/data/growing.log', 1024 * 1024); // 1MB閾值
```

### 備份系統

```javascript
// 立即創建備份
FilesJS.backupFile('kubejs/important/data.json');

// 計劃備份（延遲執行tick）
FilesJS.scheduleBackup('kubejs/config/settings.json', 100); // 100 tick後開始備份這個檔案

// 搜索檔案內容
let matches = FilesJS.searchInFile('kubejs/logs/latest.log', 'ERROR');
```

## 安全性和限制

### 允許訪問的目錄

只能訪問以下目錄中的檔案：

- `config/`
- `saves/`
- `logs/`
- `mods/`
- `resourcepacks/`
- `kubejs/`
- `scripts/`
- `defaultconfigs/`
- `schematics/`
- `crash-reports/`
- `screenshots/`
- `shaderpacks/`

### 檔案大小限制

- 最大檔案大小：`5 MiB`
- 寫入操作的內容大小限制：`5 MiB`

### 檔案類型限制

允許的檔案副檔名：

- `.json`
- `.toml`
- `.properties`
- `.cfg`
- `.nbt`
- `.mcfunction`
- `.mcmeta`
- `.lang`
- `.dat`
- `.js`
- `.zs`
- `.ts`
- `.txt`
- `.md`
- `.log`
- `.backup`
- `.bak`
- `.zip`

### 安全措施

- 禁止訪問 Minecraft 實例目錄之外的檔案
- 禁止父目錄遍歷（`..`）
- 關鍵操作自動創建備份
- 所有操作都進行檔案訪問驗證
- 檔案大小限制檢查
- 檔案類型驗證
- 路徑安全性檢查
- 檔案副檔名驗證

## 錯誤處理

使用`try` `catch`進行異常處理

```javascript
try {
    Files.writeFile('kubejs/data/test.txt', '內容');
} catch (exception) {
    console.error('寫入檔案失敗:', exception.message);
}
```

## 最佳實踐

1. 始終在腳本中處理異常
2. 使用適當的檔案副檔名
3. 在操作前檢查檔案大小
4. 及時清理臨時檔案
5. 對重要檔案使用備份功能
6. 謹慎監控檔案變更
7. 寫入前驗證檔案內容
8. 使用事件系統進行日誌記錄
9. 實現適當的錯誤恢復機制
10. 定期清理舊的備份檔案

## 性能考慮

1. 大檔案操作時注意內存使用
2. 避免頻繁的檔案監控
3. 合理使用遞歸檔案操作
4. 適當設置監控閾值
5. 使用批量操作代替單個操作

## 支持

如果遇到問題或有疑問：
1. 檢查日誌中的詳細錯誤信息
2. 驗證檔案權限和路徑
3. 確保在允許的目錄中操作
4. 檢查檔案大小限制
5. 查看事件監聽器的日誌輸出

## 許可證

本項目採用 MIT 許可證 - 詳見 LICENSE 檔案

## 問題

1. 如果遇到無法訪問路徑或檔案的，說明是做了限制。
2. 檔案路徑只能在Minecraft的實例路徑開始訪問，超過實例路徑的不得訪問。
3. URI無法訪問。
4. 檔案副檔名做了限制，可能導致有些副檔名的檔案無法訪問。