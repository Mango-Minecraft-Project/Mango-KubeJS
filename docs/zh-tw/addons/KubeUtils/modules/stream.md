---
title: Streams（靜態）
---

## 方法

### `mapToBlock(level: Level | ServerLevel, locations: BlockPos[])`

輔助方法，用於將 BlockPos 位置列表轉換為 BlockContainerJS 資料

```javascript
const blocks = new Ku.Streams.mapToBlock(level, [{x: 0, y: 0, z: 0}]);

for (const block of blocks) {
  console.log(block.state) // minecraft:grass 
}
```