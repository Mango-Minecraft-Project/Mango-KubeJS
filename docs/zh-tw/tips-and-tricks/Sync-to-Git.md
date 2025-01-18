---
isOriginal: true
category:
  - 小技巧
tag:
  - Github
  - 同步
---

# 將腳本自動同步到 Github

以下步驟皆以 Prism Launcher 為基礎

1. 備份 `.minecraft`；
2. 清空原有的 `.minecraft`；
3. 在 `.minecraft` 中輸入 `git clone "儲存庫網址" .`；
4. 將備份的 `.minecraft` 內的檔案放回 `.minecraft`，視情況選擇覆蓋舊有的或保留舊有的；
5. 新增以下檔案：
    - `.minecraft/.gitignore`
      ```
      *
      !.gitignore
      !kubejs/      
      ```
    - `.minecraft/kubejs/.gitignore`
      ```
      !*
      probe/
      ```