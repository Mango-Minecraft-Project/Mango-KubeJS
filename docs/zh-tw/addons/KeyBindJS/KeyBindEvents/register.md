---
title: KeyBindEvents.register
shortTitle: register
description: 註冊按鍵綁定
---
<StartupSide/>

```ts title="@at startup"
register(handler: (event: KeyBindEvent) => void):void
```

---

## 範例

```js title="@at startup"
KeyBindEvents.register((event) => {
  // 創建按鍵綁定 (第一個參數為標識，按鍵觸發都會使用這個標識)
  event.create("create1", "key.test.create.1", -1, "key.group.debug");
  event.create("create2", "key.test.create.2", GLFW.GLFW_KEY_X, "key.group.debug")
    .addModifier(KeyModifier.ALT); // 添加修飾按鍵
});
```

## 方法

| 方法名稱                                                                                     | 回傳值                        | 說明         |
| -------------------------------------------------------------------------------------------- | ----------------------------- | ------------ |
| `create(customName: string, keyNameKey: string, keyCode: number, keyGroupKey: string)` | `KeyBindEvent$KeyBindBuilder` | 創建按鍵綁定 |

### `create`

創建按鍵綁定

```ts
create(customName: string, keyNameKey: string, keyCode: number, keyGroupKey: string): KeyBindEvent$KeyBindBuilder
```

#### 參數

- `customName: string` - 自定義的名稱
- `keyNameKey: string` - 按鍵名稱的翻譯鍵
- `keyCode: number` - 按鍵的鍵碼
- `keyGroupKey: string` - 按鍵分組的翻譯鍵

#### 回傳值

- `KeyBindEvent$KeyBindBuilder` - `KeyBindBuilder` 的實例

### `KeyBindBuilder`

| 方法名稱                                          | 回傳值       | 說明                   |
| ------------------------------------------------- | ------------ | ---------------------- |
| `addModifier(keyModifier: KeyModifier_)`          | `this`       | 添加修飾按鍵           |
| `getBuildKeyMapping()` <br> `get buildKeyMapping` | `KeyMapping` | 獲取按鍵綁定的內部對象 |

#### `addModifier`

添加修飾按鍵

```ts
addModifier(keyModifier: KeyModifier_): this
```

##### 參數

- [`keyModifier: KeyModifier_`][KeyModifier_] - 修飾按鍵

[KeyModifier_]: ../ref#keymodifier

##### 回傳值

- `this`