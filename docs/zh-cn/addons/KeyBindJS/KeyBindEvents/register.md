---
title: KeyBindEvents.register
shortTitle: register
description: 注册按键绑定
---
<StartupSide/>

```ts title="@at startup"
register(handler: (event: KeyBindEvent) => void):void
```

---

## 范例

```js title="@at startup"
KeyBindEvents.register((event) => {
  // 创建按键绑定 (第一个参数为标签，按键触发都会使用这个标签)
  event.create("create1", "key.test.create.1", -1, "key.group.debug");
  event.create("create2", "key.test.create.2", GLFW.GLFW_KEY_X, "key.group.debug")
    .addModifier(KeyModifier.ALT); // 添加修饰按键
});
```

## 方法

| 方法名称                                                                                     | 返回值                        | 说明         |
| -------------------------------------------------------------------------------------------- | ----------------------------- | ------------ |
| `create(customName: string, keyNameKey: string, keyCode: number, keyGroupKey: string)` | `KeyBindEvent$KeyBindBuilder` | 创建按键绑定 |

### `create`

创建按键绑定

```ts
create(customName: string, keyNameKey: string, keyCode: number, keyGroupKey: string): KeyBindEvent$KeyBindBuilder
```

#### 参数

- `customName: string` - 自定义的名称
- `keyNameKey: string` - 按键名称的翻译键
- `keyCode: number` - 按键的键码
- `keyGroupKey: string` - 按键分组的翻译键

#### 返回值

- `KeyBindEvent$KeyBindBuilder` - `KeyBindBuilder` 的实例

### `KeyBindBuilder`

| 方法名称                                          | 返回值       | 说明                   |
| ------------------------------------------------- | ------------ | ---------------------- |
| `addModifier(keyModifier: KeyModifier_)`          | `this`       | 添加修饰按键           |
| `getBuildKeyMapping()` <br> `get buildKeyMapping` | `KeyMapping` | 获取按键绑定的內部对象 |

#### `addModifier`

添加修饰按键

```ts
addModifier(keyModifier: KeyModifier_): this
```

##### 参数

- [`keyModifier: KeyModifier_`][KeyModifier_] - 修饰按键

[KeyModifier_]: ../ref#keymodifier

##### 返回值

- `this`