---
isOriginal: true
category:
  - 小技巧
tags:
  - 腳本參數
star: true
sticky: true
---

# 腳本預處理參數 [KubeJS 6+]

可在腳本開頭使用預處理參數，如下

|名稱|用途|參數類別|說明|預設值|
|:--:|----|--------|----|:----:|
|`priority`|載入優先度|整數(Integer)|數字越大越先載入|`0`|
|`ignored`|忽略載入|布林(Boolean)|如果是 `true` 則跳過載入|`false`|
|`packmode`|模組包模式|字串(String)|若模組包模式不等於輸入值內則跳過載入|`default`|
|`requires`|命名空間需求|字串(String)|若未載入該命名空間則跳過載入|` ` (無)|

## 範例

```js
// priority: 100
// ignored: false
// packmode: dev
// requires: forge
// requires: create
```