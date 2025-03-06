---
title: TConJSEvents.equipmentChange
shortTitle: equipmentChange
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

```ts
TConJSEvents.equipmentChange(handler: (event: TinkerToolChangeEventJS) => void): void
```

---

## Event Properties

| Property             | Type                                        | Description                                                                           |
| -------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------- |
| `changeSlot`         | `EquipmentSlot`                             | The slot where the item is changed                                                    |
| `context`            | `EquipmentChangeContext`                    | The context of the original Forge event                                               |
| `entity`             | `LivingEntity`                              | The entity that triggered the event                                                   |
| `hasModifiableArmor` | `boolean`                                   | Whether the entity has Tinkers' armor value                                           |
| `original`           | `ItemStack`                                 | The item stack in the original slot                                                   |
| `originalTool`       | `IToolStackView`                            | The Tinkers' NBT data of the original slot                                            |
| `player?`            | `Player`                                    | The player who triggered the event (returns `Null` if `event.entity` is not a player) |
| `replacement`        | `ItemStack`                                 | The item stack being replaced                                                         |
| `replacementTool`    | `IToolStackView`                            | The Tinkers' NBT data of the replacement slot                                         |
| `tinkerData`         | `LazyOptional<TinkerDataCapability$Holder>` | Tinkers' data                                                                         |
| `world`              | `Level`                                     | The dimension where the player is located                                             |
