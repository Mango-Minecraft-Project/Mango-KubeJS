---
title: KeyBindEvents.modify
shortTitle: modify
description: 修改按键绑定
---

<StartupSide/>

```ts title="@at startup"
modify(handler: (event: KeyBindModifyEvent) => void):void,
```

---

## 范例

```js title="@at startup"
KeyBindEvents.modify((event) => {
  // 修改默认按键
  event.modifyKey("key.curios.open.desc", GLFW.GLFW_KEY_X);

  // 修改默认修饰符
  event.modifyModifier("key.curios.open.desc", KeyModifier.ALT);

  // 修改按键分组，若不清楚有什么可以使用 @category_name 代码片段來查看
  event.modifyCategory("key.curios.open.desc", "key.categories.misc");

  // 移除按键
  event.remove("key.saveToolbarActivator"); // 保存快捷栏
  event.remove("key.loadToolbarActivator"); // 加载快捷栏
  event.remove("key.jade.narrate"); // 语音复述
});
```

## 方法列表

| 方法名称         | 说明           |
| ---------------- | -------------- |
| `modifyKey`      | 修改绑定的按键 |
| `modifyModifier` | 修改修饰按键   |
| `modifyCategory` | 修改按键分组   |
| `remove`         | 移除按键       |
| `addListener`    | 添加监听       |
| `addHideKey`     | 隐藏按键       |

### `modifyKey`

修改绑定的按键

```ts
modifyKey(keyBindName: string, keyCode: number): void;
```

#### 参数

- `keyBindName: string` - 按键绑定的名称
- `keyCode: number` - 按键的键码

### `modifyModifier`

修改修饰按键

```ts
modifyModifier(keyBindName: string, keyModifier: KeyModifier_): void;
```

#### 参数

- `keyBindName: string` - 按键绑定的名称
- `keyModifier: KeyModifier_` - 修饰按键

### `modifyCategory`

修改按键分组

```ts
modifyCategory(keyBindName: string, category: string): void;
```

#### 参数

- `keyBindName: string` - 按键绑定的名称
- `category: string` - 按键分组

### `remove`

移除按键

```ts
remove(keyBindName: string): void;
```

#### 参数

- `keyBindName: string` - 按键绑定的名称

### `addListener`

添加监听(已经不再需要，但仍然可用)

```ts
addListener(cusTomName: string, keyName: string): void;
```

#### 参数

- `customName: string` - 自定义名称
- `keyName: string` - 按键名称


### `addHideKey`

隐藏按键

```ts
addHideKey(keyBindName: string): void;
```

#### 参数

- `keyBindName: string` - 按键绑定的名称
