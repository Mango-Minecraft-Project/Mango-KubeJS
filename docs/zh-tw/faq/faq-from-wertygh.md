---
title: 來自 临时性永恒 的常見問題
author: 
  - 临时性永恒（wertygh）
  - 芒果凍布丁
---

::: note
以下是一些來自临时性永恒（wertygh）的常見問題，這些問題涵蓋了 KubeJS 的各種使用場景和特性，對於使用 KubeJS 的開發者來說可能會遇到這些問題，希望能夠幫助大家更好地理解和使用 KubeJS。
:::: tip
以下的列表第二層開始皆為芒果提供的註釋，以幫助讀者更好地理解問題的背景和解決方案。
:::

- 對於 NBT 來說，當你使用 `.forEach` 來遍歷 `List` 時，列表末尾的最後一個不會被遍歷到；
  ```javascript
  // 假設這個 list 是 [1, 2, 3]
  let list = nbt.getList("list", 3);

  list.forEach(console.log);
  // 输出: 1, 2
  ```
- 舊版本 GTM 的 KubeJS 兼容，寫的配方裡有空物品時不會報錯，而是會原樣保留，然後在 JEI 裡顯示空白物品，配方也能跑，輸出空物品；
- `var` 函數作用域變成塊級作用域；
  - *這是特性*
- `Math` 下的所有常數失效（例如：`Math.PI`、`Math.E`）；
  - 使用 `KMath` 或 `JavaMath` 來代替 `Math`，例如：`KMath.PI`、`KMath.E`；
    - `KMath` 和 `JavaMath` 的區別是 `KMath` 是 KubeJS 提供的數學工具類，而 `JavaMath` 是 Java 的 Math 類的包裝；
- Java 的 `String` 和 JS 的 `String` 長得完全一樣，但是 replace 用法不一樣；
  - 可以使用 `console.printObject` 來判斷一個對象是 Java 的 String 還是 JS 的 String；
- Rhino 在無頭伺服器端載入用了用戶端類的類會缺方法；
- 有的 Java 方法的重載，參數數量一樣的，必須指定一個重載，但是有些方法指定以後又說不存在這個方法；
- 或操作（`||`）時右邊填寫一個 `[]`，他返回的是陣列中的元素而不是一整個陣列；
- 對於 NBT 來，使用可選鏈（`?.`）來選擇性調用方法時會報錯；
  - 這是可預見行為，因為可選鏈本來就不是用來調用方法的，而是用來訪問對象屬性的；
- 給方塊實體塞 `persistentData`，退出重進 `persistentData` 會消失，需要 `setChange`；
- 在 `for` 循環裡使用 `const` 設置變數（常見的 `i`、`j`、`k`、`l`）的時候，第一次 `const` 設置值後，後續循環這個變數的值不能被更改了；
  - 舉例來說：
    ```javascript
    for (const i = 0; i < 5; i++) {
      console.log(i);
    }
    ```
    這裡應該列印出 0、1、2、3、4，但由於 `i` 是用 `const` 定義的，第一次賦值後就不能再修改，所以會導致打印的都是 0。
- 解構 Java 對象的時候不能用嵌套解構；
- `Level` 對象的 `getEntity` 用 ID 作為參數的方法只能獲取到 `null`；
- `level.dimension` 在 KubeJS 環境下是 `$ResourceLocation`，而 modding 環境下是 `$ResourceKey`；