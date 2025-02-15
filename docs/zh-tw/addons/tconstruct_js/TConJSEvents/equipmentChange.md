---
title: TConJSEvents.equipmentChange
shortTitle: equipmentChange
isOriginal: true
---

```ts
TConJSEvents.equipmentChange(handler: (event: TinkerToolChangeEventJS) => void): void
```

---

## 事件屬性

| 屬性                 | 類型                                        | 說明                                                        |
| -------------------- | ------------------------------------------- | ----------------------------------------------------------- |
| `changeSlot`         | `EquipmentSlot`                             | 更換物品的欄位                                              |
| `context`            | `EquipmentChangeContext`                    | 原 Forge 事件的上下文                                       |
| `entity`             | `LivingEntity`                              | 觸發事件的實體                                              |
| `hasModifiableArmor` | `boolean`                                   | 實體是否具有匠魂盔甲值                                      |
| `original`           | `ItemStack`                                 | 原欄位的物品堆疊                                            |
| `originalTool`       | `IToolStackView`                            | 原欄位的匠魂 NBT 資料                                       |
| `player?`            | `Player`                                    | 觸發事件的玩家（若 `event.entity` 不為玩家，則回傳 `Null`） |
| `replacement`        | `ItemStack`                                 | 被替換的物品堆疊                                            |
| `replacementTool`    | `IToolStackView`                            | 被替換的匠魂 NBT 資料                                       |
| `tinkerData`         | `LazyOptional<TinkerDataCapability$Holder>` | 匠魂資料                                                    |
| `world`              | `Level`                                     | 玩家所在維度                                                |
