---
title: 耐久歸零時破壞物品
tag:
  - "1.21"
  - "1.20"
category: 常見問題
---

:::note 疑問
如何在降低物品耐久度的同時，讓物品在耐久度歸零時被破壞？
:::

在 Minecraft 中，當物品的耐久度降至零時，物品會被破壞。要實現這一點，你可以使用以下方法：

```javascript
player.damageHeldItem(hand, 1, () => level.broadcastEntityEvent(player, hand == "MAIN_HAND"));
```