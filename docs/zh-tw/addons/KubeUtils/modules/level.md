---
title: Level（建構）
---

Level 是一個 `constructed` 輔助類，這表示你必須先建立它才能使用。範例如下：

```javascript
const player = getPlayerFromSomewhere();
const kuLevel = new Ku.Level(player.level);

// 現在你可以使用 kuLevel 來調用下方的方法

// 另一個範例可能像這樣
PlayerEvents.tick((event) => {
  const player = event.player;
  const kuLevel = new Ku.Level(player.level);
})
```

## 方法

### `spawnStructure(structureFile: string, location: BlockPos)`

spawnStructure 顧名思義就是生成結構。給定一個特定的結構檔案（以字串形式的資源位置，例如：minecraft:structures/somestructure）和一個方塊位置，此方法會在該位置生成結構。

```javascript
const kuLevel = new Ku.Level(...);
kuLevel.spawnStructure("minecraft:structures/village_1", BlockPos.ZERO);
```

**注意**

此方法為軟性失敗，若結構不存在，方法將不會有任何動作。

### `findEntitiesWithinRadius(entityId: EntityType, start: BlockPos, range: Number)`
### `已棄用：請使用 findLivingEntitiesWithinRadius`

在指定半徑內尋找特定實體類型的生物。實體類型通常像是 `minecraft:skeleton`。模組中的實體類型可從其 Java 程式碼中找到。

搜尋半徑是以起始方塊位置為中心的立方體。例如範圍為 1 時，則為 3x3 的立方體。

`@return net.minecraft.world.entity.LivingEntity[]`

```javascript
const kuLevel = new Ku.Level(...);
const entities = kuLevel.findEntitiesWithinRadius("minecraft:skeleton", BlockPos.ZERO, 4);
console.log(entities)
```

### `findLivingEntitiesWithinRadius(entityId: EntityType, start: BlockPos, range: Number)`

在指定半徑內尋找特定實體類型的生物。實體類型通常像是 `minecraft:skeleton`。模組中的實體類型可從其 Java 程式碼中找到。

搜尋半徑是以起始方塊位置為中心的立方體。例如範圍為 1 時，則為 3x3 的立方體。

`@return net.minecraft.world.entity.LivingEntity[]`

```javascript
const kuLevel = new Ku.Level(...);
const entities = kuLevel.findLivingEntitiesWithinRadius("minecraft:skeleton", BlockPos.ZERO, 4);
console.log(entities)
```

### `findAnyEntitiesWithinRadius(entityId: EntityType, start: BlockPos, range: Number)`

在指定半徑內尋找特定實體類型的所有實體。實體類型通常像是 `minecraft:skeleton`。模組中的實體類型可從其 Java 程式碼中找到。

搜尋半徑是以起始方塊位置為中心的立方體。例如範圍為 1 時，則為 3x3 的立方體。

`@return net.minecraft.world.entity.Entity[]`

```javascript
const kuLevel = new Ku.Level(...);
const entities = kuLevel.findAnyEntitiesWithinRadius("minecraft:display", BlockPos.ZERO, 4);
console.log(entities)
```

### `findBlockWithinRadius(blockstate: BlockState, start: BlockPos, range: Number, absolute: boolean)`

在指定半徑內尋找符合給定狀態的方塊。若 `absolute` 為 true，則會比較方塊的絕對狀態（所有狀態必須完全相符）；否則只比較預設狀態。

搜尋半徑是以起始方塊位置為中心的立方體。例如範圍為 1 時，則為 3x3 的立方體。

`@return BlockPos[]`

```javascript
const kuLevel = new Ku.Level(...);

// 你也可以從世界取得方塊狀態
const locations = kuLevel.findBlockWithinRadius(Blocks.GRASS.defaultState(), BlockPos.ZERO, 4, false);
console.log(locations) // [{x: 0, y: 0; z: 0}]
```

### `findSingleBlockWithinRadius(blockstate: BlockState, start: BlockPos, range: number, absolute: boolean)`

與 `findBlockWithinRadius` 類似，但只會尋找第一個符合條件的方塊並提前返回其位置。若找不到則回傳 null。

`@return BlockPos | null`

### `findFirstBlockTagWithinRadius(tag: TagKey<Block>, start: BlockPos, range: number)`

與 `findBlockWithinRadius` 類似，但以方塊標籤來尋找方塊。

`@return BlockPos | null`

### `getRandomLocation(start: BlockPos, min: Number, max: Number)`

在指定的最小與最大範圍內產生一個隨機的 BlockPos。

搜尋範圍會建立兩個立方體邊界盒（bounding box），分別擴展到 min 與 max，形成內外區域。隨機位置會落在外部（max）邊界盒內且不在內部（min）邊界盒內。

`@return BlockPos`

```javascript
const kuLevel = new Ku.Level(...);

const locations = kuLevel.getRandomLocation(BlockPos.ZERO, 1, 10);
console.log(locations) // [{x: 0, y: 0; z: 0}]
```

### `seekCollectionOfBlocks(start: BlockPos, range: Number, validator: (pos) -> boolean, @Nullable belowValidator: (pos) -> boolean)`

這個方法很有趣。它可以利用驗證器（predicate）尋找一組符合條件的方塊，只有全部通過驗證才會返回這組方塊的位置。

- `startPos`：搜尋起點
- `range`：搜尋範圍（立方體，1 為 3x3，2 為 4x4，以此類推）
- `validator`：lambda 驗證器，每個方塊都需通過此驗證
- `belowValidator`：（可選）若設置，則中心下方的方塊也需通過驗證

**注意**
只有當所有驗證步驟都成功時，才會返回方塊位置清單，否則返回空清單。

`@return BlockPos[]`

```javascript
const level = event.level;
const kuLevel = new Ku.Level(...);

// 此驗證器要求所有方塊都不是空氣
const locations = kuLevel.seekCollectionOfBlocks(
  BlockPos.ZERO, // 起點
  4,             // 範圍
  (pos) => {     // 驗證器
    // pos 由 Kube Utils 提供
    return !level.getBlockState(pos).isAir()
  },
  null
);
console.log(locations) // [{x: 0, y: 0; z: 0}]

// 也可以使用下方驗證條件
// 此驗證器要求方塊不是空氣，且起點下方必須是鑽石方塊
const locations = kuLevel.seekCollectionOfBlocks(
  BlockPos.ZERO, // 起點
  4,             // 範圍
  (pos) => {     // 驗證器
    return !level.getBlockState(pos).isAir()
  },
  (pos) => {     // 下方驗證器
    return level.getBlockState(pos).getBlock() == Blocks.DIAMOND_BLOCK
  },
);
console.log(locations) // [{x: 0, y: 0; z: 0}]
```

### `isStructureAtLocation(location: BlockPos, structureId: String | ResourceLocation)`

嘗試檢查指定位置是否存在特定結構（以資源位置指定）。

`@return boolean`

```javascript
const kuLevel = new Ku.Level(...);

const isThere = kuLevel.isStructureAtLocation(BlockPos.ZERO, "minecraft:structures/god_knows");
console.log(isThere) // true 或 false
```

### `getStructuresAtLocation(location: BlockPos)`

此方法會返回指定位置的 `net.minecraft.world.level.levelgen.structure.Structure` 參考清單/集合。你可以用來檢查該位置的結構資訊。

`@return Set<Structure>`

```javascript
const kuLevel = new Ku.Level(...);

const structures = kuLevel.isStructureAtLocation(BlockPos.ZERO);
console.log(structures)
```

### `getStructureIdsAtLocation(location: BlockPos)`

這個方法會返回指定位置所有結構的資源位置（字串）清單。

`@return string[]`

```javascript
const kuLevel = new Ku.Level(...);

const structures = kuLevel.getStructureIdsAtLocation(BlockPos.ZERO);
console.log(structures) // ["minecraft:dungeon", "minecraft:jungle_mansion"]
```

### `blocksAreEqual(firstState: BlockState, secondState: BlockState, ignoreState: boolean)` `static`

比較兩個方塊狀態是否相同。若 `ignoreState` 為 true，則只比較方塊類型，不比較狀態。

`@return boolean`

```javascript
const isSame = Ku.Level.blocksAreEqual(Blocks.GRASS.defaultState(), Blocks.GRASS.defaultState());
console.log(isSame) // true
```
