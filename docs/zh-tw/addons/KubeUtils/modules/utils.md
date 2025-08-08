---
title: Utils（靜態）
---

## 方法

### `nullOrEmpty(input: any)`

絕對檢查任何輸入的 `item / block / blockstate / itemEntity / string / resource location / fluid / itemstack` 等是否為 null 或為空。

`@return boolean` 如果輸入為 null 或為空則回傳 true

```javascript
const isEmpty = new Ku.Utils.nullOrEmpty("minecraft:air");
const isEmpty2 = new Ku.Utils.nullOrEmpty(Items.AIR);
const isEmpty3 = new Ku.Utils.nullOrEmpty(Fluids.WATER);

console.log(isEmpty) // true
console.log(isEmpty2) // true
console.log(isEmpty3) // false
```

### `notNullOrEmpty(input: any)`

與上述方法相反。檢查輸入是否**不是** null 或為空。

`@return boolean` 如果輸入**不是** null 或為空則回傳 true