---
title: Lists（靜態）
---

## 方法

### `getEntryBasedOnWeight(input: WeightedInput[])`

#### `WeightedInput`

這是一種此方法所需的特定資料型別！型別如下所示：

```typescript
const inputData = [{
  weight: 0.3,
  entry: "hello" // （entry 可以是任何東西！）
}]
```

此方法會接收上述資料的清單，並根據每個項目的 `weight` 權重屬性，隨機回傳一個項目。隨機性會受到權重影響，權重越高的項目被選中的機率也越高。

`@return entry` 回傳 `inputData` 中被選中的 `entry` 欄位

```javascript
const entry = Ku.Lists.getEntryBasedOnWeight([
  {
    weight: 0.3,
    entry: "hello"
  },
  {
    weight: 0.2,
    entry: "hello2"
  },
  {
    weight: 0.6,
    entry: "hello3" 
  }
])

console.log(entry) // "hello" // 會回傳上述其中一個 entry，但不包含 weight
```