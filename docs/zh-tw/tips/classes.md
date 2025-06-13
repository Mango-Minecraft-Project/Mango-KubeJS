---
title: 在 KubeJS 中創建類別
description: 在 KubeJS 中創建類別的指南
isOriginal: true
---

<!-- #region custom-classes -->

在 KubeJS 中因為 Rhino 的限制，導致無法使用 `class` 關鍵字來創建類別。取而代之的是，我們使用 `function` 來定義類別（ES6 類別的語法），並使用 `prototype` 來添加方法。
這裡有一個簡單的範例，展示了如何在 KubeJS 中創建一個類別：

```javascript
function MyClass(name) {
  this.name = name;
}
MyClass.prototype.greet = function() {
  return `Hello, ${this.name}!`;
};

// 使用類別
const myInstance = new MyClass("World");
console.log(myInstance.greet()); // 輸出: Hello, World!
```

<!-- #endregion custom-classes -->