---
title: 在 JSDoc 中標示真正的 ItemStack
original: true
---

# 在 JSDoc 中標示真正的 ItemStack

在 ProbeJS 7 中無法直接用 `$ItemStack_` 來標示真正的 ItemStack。這是因為 JSDoc 的 `$ItemStack_` 標記會被轉換成 `Special.Item | ItemWithCount` 類型，而 `Special.Item` 並不是一個真正的 ItemStack，只是導出的所有物品字串 ID，又 `ItemWithCount` 無法直接使用，那麼該怎麼辦呢？

正確方法是使用 `$ItemStack$$Original` 標記。這個標記會將 JSDoc 中的 `$ItemStack_` 轉換成真正的 ItemStack 類型。
