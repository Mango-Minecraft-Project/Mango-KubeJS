---
title: ClassJS
description: 在 KubeJS 中建立 Java 類別。
isOriginal: false
dir:
  link: true
categories:
  - forge-1.20
layout: AddonPage
mod:
  name: ClassJS
  author: Pelemenguin
  CurseForge: mc-mods/classjs
  Modrinth: mod/classjs
  GitHub: Pelemenguin/ClassJS
  McMod: class/22556
source: https://github.com/Pelemenguin/ClassJS/blob/1.20.1/README.md
---

ClassJS 是一個在 KubeJS 中建立 Java 類別的模組。

## 基本範例

你可以操作 Java 位元組碼來建立自訂的方法。

注意：某些會與類別互動的指令（例如 `getstatic`、`invokestatic`、`new` 等）受 KubeJS 的類別過濾器保護。你不能使用這些指令存取 KubeJS 或其其他外掛不允許的類別，也不能擴充或實作這些被限制的類別。

```javascript
let ExampleClass = ClassCreator.create("ExampleClass")
    .toPublic()           // 設定類別為 public
    .defaultConstructor() // 新增預設建構子
    .createMethod("exampleMethod", [], "java.lang.String") // 方法名稱、參數型別、與回傳型別
        .toPublic()
        .code(builder => {
            builder.pushString("你好，ClassJS！")   // 將字串參考推到操作數棧
                .returnObject();                    // 回傳該字串
        })
    .defineClass();     // 定義該類別

console.info((new ExampleClass()).exampleMethod());
```

等價的 Java 程式碼：

```java
public class ExampleClass {

    public ExampleClass() {
        super();
    }

    public String exampleMethod() {
        return "你好，ClassJS！";
    }

}
```

## 在 JavaScript 中撰寫程式碼

如果你不想學習 Java 位元組碼，也可以使用 JavaScript 函數來建立方法。

```javascript
let ExampleClass = ClassCreator.create("ExampleClass")
    .toPublic()
    .createMethod("exampleMethod", ["int", "int"], "int")
        .toPublic().toStatic()
        .codeJS((num1, num2) => {
            return num1 + num2;
        })
    .defineClass();

console.info(ExampleClass.exampleMethod(1, 2));
// 在 startup.log 的輸出為
// 3.0
```

等價的 Java 程式碼：

```java
public class ExampleClass {

    // 注意：這個類別甚至沒有建構子，
    // 因為上面的 JavaScript 並未呼叫 `defaultConstructor`，
    // 也沒有建立其他建構子。

    public static int exampleMethod(int i1, int i2) {
        return i1 + i2;
    }

}
```

## 載入已建立的類別

類別只能在 *startup* 腳本中定義。如果你想在其他腳本中使用它們，可以使用 `ClassJSUtils.loadClass` 方法。

```javascript
ClassCreator.create("SomeClass")
    /** 對這個類別進行一些操作以加入內容 */
    .defineClass();

// 在其他腳本中：

let SomeClass = ClassJSUtils.loadClass("SomeClass");
// 然後就可以使用 `SomeClass`
```