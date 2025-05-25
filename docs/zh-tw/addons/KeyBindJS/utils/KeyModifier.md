---
title: KeyModifier
description: 與修飾按鍵相關的類型和方法
---

## 屬性與方法

### 靜態

| 屬性／方法名稱                                 | 返回值               | 說明                   |
| ---------------------------------------------- | -------------------- | ---------------------- |
| `getValues(arg0: boolean)`                     | `List<KeyModifier> ` | 獲取所有修飾按鍵的列表 |
| `getModifier(arg0: InputConstants$Key_)`       | `KeyModifier`        | 通過鍵碼獲取修飾按鍵   |
| `valueOf(arg0: string)`                        | `KeyModifier`        | 通過名稱獲取修飾按鍵   |
| `valueFromString(arg0: string)`                | `KeyModifier`        | 通過名稱獲取修飾按鍵   |
| `values()`                                     | `KeyModifier[]`      | 獲取所有修飾按鍵       |
| `isKeyCodeModifier(arg0: InputConstants$Key_)` | `boolean`            | 判斷是否為修飾按鍵     |
| `NONE`                                         | `KeyModifier`        | 無修飾按鍵             |
| `ALT`                                          | `KeyModifier`        | ALT 鍵                 |
| `SHIFT`                                        | `KeyModifier`        | SHIFT 鍵               |
| `CONTROL`                                      | `KeyModifier`        | CONTROL 鍵             |

### 實例

| 方法名稱                                                                 | 返回值      | 說明                 |
| ------------------------------------------------------------------------ | ----------- | -------------------- |
| `matches(arg0: InputConstants$Key_)`                                     | `boolean`   | 檢查是否匹配修飾按鍵 |
| `isActive(arg0: IKeyConflictContext_)`                                   | `boolean`   | 檢查是否激活修飾按鍵 |
| `getCombinedName(arg0: InputConstants$Key_, arg1: Supplier_<Component>)` | `Component` | 獲取組合名稱         |
| `name()`                                                                 | `string`    | 獲取名稱             |
| `ordinal()`                                                              | `number`    | 獲取序號             |
