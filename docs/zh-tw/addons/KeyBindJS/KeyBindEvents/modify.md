---
title: KeyBindEvents.modify
shortTitle: modify
description: 修改按鍵綁定
---

```ts title="@at startup"
modify(handler: (event: KeyBindModifyEvent) => void):void,
```

---

## 範例

```js title="startup_scripts/KeyBindJS.js"
KeyBindEvents.modify((event) => {
  // 修改默認按鍵
  event.modifyKey("key.curios.open.desc", GLFW.GLFW_KEY_X);

  // 修改默認修飾符
  event.modifyModifier("key.curios.open.desc", KeyModifier.ALT);

  // 修改按鍵分組，若不清楚有什麼可以使用 @category_name 程式碼片段來查看
  event.modifyCategory("key.curios.open.desc", "key.categories.misc");

  // 移除按鍵
  event.remove("key.saveToolbarActivator"); // 保存快捷欄
  event.remove("key.loadToolbarActivator"); // 加載快捷欄
  event.remove("key.jade.narrate"); // 語音複述
});
```

## 方法列表

| 方法名稱         | 說明           |
| ---------------- | -------------- |
| `modifyKey`      | 修改綁定的按鍵 |
| `modifyModifier` | 修改修飾按鍵   |
| `modifyCategory` | 修改按鍵分組   |
| `remove`         | 移除按鍵       |
| `addListener`    | 添加監聽       |

### `modifyKey`

修改綁定的按鍵

```ts
modifyKey(keyBindName: string, keyCode: number): void;
```

#### 參數

- `keyBindName: string` - 按鍵綁定的名稱
- `keyCode: number` - 按鍵的鍵碼

### `modifyModifier`

修改修飾按鍵

```ts
modifyModifier(keyBindName: string, keyModifier: KeyModifier_): void;
```

#### 參數

- `keyBindName: string` - 按鍵綁定的名稱
- `keyModifier: KeyModifier_` - 修飾按鍵

### `modifyCategory`

修改按鍵分組

```ts
modifyCategory(keyBindName: string, category: string): void;
```

#### 參數

- `keyBindName: string` - 按鍵綁定的名稱
- `category: string` - 按鍵分組

### `remove`

移除按鍵

```ts
remove(keyBindName: string): void;
```

#### 參數

- `keyBindName: string` - 按鍵綁定的名稱

### `addListener`

添加監聽

```ts
addListener(cusTomName: string, keyName: string): void;
```

#### 參數

- `cusTomName: string` - 自定義名稱
- `keyName: string` - 按鍵名稱
