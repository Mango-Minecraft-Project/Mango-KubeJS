---
author: PrizOwO
title: FilesJS
description: KubeJS 文件管理附屬模組
isOriginal: true
---

<BadgeCompat CurseForge="mc-mods/filesjs" Modrinth="mod/filesjs" Github="xiaoliziawa/Files-JS" Mcmod="class/17414"/>

*FilesJS（文件吉斯）是一個功能強大的 KubeJS 6 附屬模組，用來偷走你的失諧帳號和錢包。*

## 功能

- 文件操作：讀取、寫入、追加、複製、移動和刪除文件
- 目錄管理：列出、創建和監視目錄
- 文件監控：監視文件變更和內容修改
- 文件分析：比較文件、計算MD5哈希值、搜索文件內容
- 備份管理：創建和管理文件備份
- 歸檔操作：創建ZIP壓縮包

## API 部分參考（不全面）

### 文件讀寫操作

```javascript

// 讀取文件內容
let content = FilesJS.readFile('kubejs/config/myconfig.txt');

// 寫入文件
FilesJS.writeFile('kubejs/data/output.txt', '你好，世界！');

// 追加到文件
FilesJS.appendFile('kubejs/logs/mylog.txt', '新的日誌條目');

// 追加單行
FilesJS.appendLine('kubejs/logs/mylog.txt', '新的一行');

// 寫入多行
FilesJS.writeLines('kubejs/data/lines.txt', ['第一行', '第二行', '第三行']);

// 讀取所有行
let lines = FilesJS.readLines('kubejs/data/lines.txt');

// 讀取最後N行
let lastLines = FilesJS.readLastLines('kubejs/logs/latest.log', 10);

// 保存腳本文件（自動添加.js擴展名和時間戳註釋）
FilesJS.saveScript('kubejs/scripts/newscript', 'console.log("Hello");');
```

### 文件管理操作

```javascript
// 檢查文件是否存在
if (FilesJS.exists('kubejs/scripts/myscript.js')) {
    // 執行操作
}

// 刪除文件
FilesJS.delete('kubejs/temp/oldfile.txt');

// 複製文件
FilesJS.copy('source.txt', 'target.txt');

// 移動文件
FilesJS.move('old/path.txt', 'new/path.txt');

// 重命名文件
FilesJS.renameFile('oldname.txt', 'newname.txt');

// 創建目錄
FilesJS.createDirectory('kubejs/newdir');

// 檢查文件是否為空
let isEmpty = FilesJS.isFileEmpty('kubejs/data/file.txt');

// 獲取文件MD5哈希值
let hash = FilesJS.getFileMD5('kubejs/data/important.dat');

// 比較兩個文件
let areEqual = FilesJS.compareFiles('file1.txt', 'file2.txt');
```

### 批量文件操作

```javascript
// 合併多個文件
FilesJS.mergeFiles(['file1.txt', 'file2.txt'], 'merged.txt');

// 批量複製文件（使用通配符）
FilesJS.copyFiles('source/dir', 'target/dir', '*.json');

// 創建ZIP壓縮包
FilesJS.createZip('kubejs/data', 'kubejs/backups/data.zip');

// 替換文件中的內容
FilesJS.replaceInFile('config.txt', '舊值', '新值');
```

### 目錄操作

```javascript
// 列出目錄中的文件
let files = FilesJS.listFiles('kubejs/data');

// 遞歸列出所有文件
let allFiles = FilesJS.listFilesRecursively('kubejs/scripts');

// 獲取文件信息
let fileInfo = FilesJS.getFileInfo('kubejs/config/settings.json');
// fileInfo包含：exists, size, lastModified, isDirectory, isFile, isReadable, isWritable
```

### 文件監控

```javascript
// 監視目錄變更
FilesJS.watchDirectory('kubejs/data', (changedPath) => {
    console.log('文件已更改:', changedPath);
});

// 監視文件內容變更（帶相似度閾值）
FilesJS.watchContentChanges('kubejs/config/dynamic.json', 0.1);

// 監視匹配特定模式的文件
FilesJS.watchFilePattern('kubejs/scripts', '*.js');

// 監視文件大小
FilesJS.watchFileSize('kubejs/data/growing.log', 1024 * 1024); // 1MB閾值
```

### 備份系統

```javascript
// 立即創建備份
FilesJS.backupFile('kubejs/important/data.json');

// 計劃備份（延遲執行tick）
FilesJS.scheduleBackup('kubejs/config/settings.json', 100); // 100 tick後開始備份這個文件

// 搜索文件內容
let matches = FilesJS.searchInFile('kubejs/logs/latest.log', 'ERROR');
```

## 安全性和限制

### 允許訪問的目錄

只能訪問以下目錄中的文件：
- kubejs/
- config/
- logs/
- backups/
- scripts/

### 文件大小限制

- 最大文件大小：5MB
- 寫入操作的內容大小限制：5MB

### 文件類型限制

允許的文件擴展名：
- .txt
- .json
- .js
- .log
- .cfg
- .toml
- .properties
- .backup
- 。。。還有很多

### 安全措施

- 禁止訪問Minecraft實例目錄之外的文件
- 禁止父目錄遍歷 (..)
- 關鍵操作自動創建備份
- 所有操作都進行文件訪問驗證
- 文件大小限制檢查
- 文件類型驗證
- 路徑安全性檢查
- 文件擴展名驗證

## 錯誤處理

使用`try` `catch`進行異常處理

```javascript
try {
    Files.writeFile('kubejs/data/test.txt', '內容');
} catch (e) {
    console.error('寫入文件失敗:', e.message);
}
```

## 最佳實踐

1. 始終在腳本中處理異常
2. 使用適當的文件擴展名
3. 在操作前檢查文件大小
4. 及時清理臨時文件
5. 對重要文件使用備份功能
6. 謹慎監控文件變更
7. 寫入前驗證文件內容
8. 使用事件系統進行日誌記錄
9. 實現適當的錯誤恢復機制
10. 定期清理舊的備份文件

## 性能考慮

1. 大文件操作時注意內存使用
2. 避免頻繁的文件監控
3. 合理使用遞歸文件操作
4. 適當設置監控閾值
5. 使用批量操作代替單個操作

## 支持

如果遇到問題或有疑問：
1. 檢查日誌中的詳細錯誤信息
2. 驗證文件權限和路徑
3. 確保在允許的目錄中操作
4. 檢查文件大小限制
5. 查看事件監聽器的日誌輸出

## 許可證

本項目採用 MIT 許可證 - 詳見 LICENSE 文件

## 問題

1. 如果遇到無法訪問路徑或文件的，說明是做了限制。
2. 文件路徑只能在Minecraft的實例路徑開始訪問，超過實例路徑的不得訪問。
3. URI無法訪問。
4. 文件擴展名做了限制，可能導致有些擴展名的文件無法訪問。