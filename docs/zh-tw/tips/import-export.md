---
title: import 與 export
---

目前，你無法在 KubeJS 中使用 `import`/`export`。然而，在你的腳本中定義的變數會暴露給所有相同類型的腳本。例如：
```js
//priority: 10
let myList = [2, 8, 7]
console.log(myList) //[2, 8, 7]
```
```js
//priority: 100
console.log(myList) // 這將無法運作 // [!code error]
```
```js
myList.push(82)
console.log(myList) // [2, 8, 7, 82]
```