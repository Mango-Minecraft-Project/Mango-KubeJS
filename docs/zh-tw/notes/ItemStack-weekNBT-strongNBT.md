---
isOriginal: true
---

# `ItemStack.weakNBT()` 與 `ItemStack.strongNBT()` 的差異

以 `Item.of("diamond_sword", "{damage:50}")` 舉例

- `.weakNBT()`
  若物品的nbt包含 `{damage:50}` 則可以使用
  舉例：
  - :o: `{damage:50}`
  - :o: `{damage:50, display:"Sword"}`
  - :x: `{display:"Sword"}`
- `.strongNBT()`
  若物品的nbt **僅** 包含 `"{damage:50}"` 則可以使用
  舉例：
  - :o: `{damage:50}`
  - :x: `{damage:50, display:"Sword"}`
  - :x: `{display:"Sword"}`