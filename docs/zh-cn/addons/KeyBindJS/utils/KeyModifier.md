---
title: KeyModifier
description: 与修饰按键相同的类型和方法
---

## 属性与方法

### 静态

| 属性／方法名称                                 | 返回值               | 说明                   |
| ---------------------------------------------- | -------------------- | ---------------------- |
| `getValues(arg0: boolean)`                     | `List<KeyModifier> ` | 获取所有修饰按键的列表 |
| `getModifier(arg0: InputConstants$Key_)`       | `KeyModifier`        | 通过键码获取修饰按键   |
| `valueOf(arg0: string)`                        | `KeyModifier`        | 通过名称获取修饰按键   |
| `valueFromString(arg0: string)`                | `KeyModifier`        | 通过名称获取修饰按键   |
| `values()`                                     | `KeyModifier[]`      | 获取所有修饰按键       |
| `isKeyCodeModifier(arg0: InputConstants$Key_)` | `boolean`            | 判断是否为修饰按键     |
| `NONE`                                         | `KeyModifier`        | 无修饰按键             |
| `ALT`                                          | `KeyModifier`        | ALT 鍵                 |
| `SHIFT`                                        | `KeyModifier`        | SHIFT 鍵               |
| `CONTROL`                                      | `KeyModifier`        | CONTROL 鍵             |

### 实例

| 方法名称                                                                 | 返回值      | 说明                 |
| ------------------------------------------------------------------------ | ----------- | -------------------- |
| `matches(arg0: InputConstants$Key_)`                                     | `boolean`   | 检查是否匹配修饰按键 |
| `isActive(arg0: IKeyConflictContext_)`                                   | `boolean`   | 检查是否激活修饰按键 |
| `getCombinedName(arg0: InputConstants$Key_, arg1: Supplier_<Component>)` | `Component` | 获取组合名称         |
| `name()`                                                                 | `string`    | 获取名称             |
| `ordinal()`                                                              | `number`    | 获取序号             |
