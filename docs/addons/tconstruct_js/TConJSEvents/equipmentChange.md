---
title: TConJSEvents.equipmentChange
shortTitle: equipmentChange
isOriginal: true
---

```ts
TConJSEvents.equipmentChange(handler: (event: TinkerToolChangeEventJS) => void): void
```

---

## Event Properties

| Property             | Type                                        | Description            |
| -------------------- | ------------------------------------------- | ---------------------- |
| `originalTool`       | `IToolStackView`                            | Tinkers' NBT data of the original slot |
| `original`           | `ItemStack`                                 | Item stack of the original slot |
| `hasModifiableArmor` | `boolean`                                   | Whether the entity has Tinkers' armor value |
| `world`              | `Level`                                     | Dimension where the player is located |
| `tinkerData`         | `LazyOptional<TinkerDataCapability$Holder>` | Tinkers' data          |
| `replacementTool`    | `IToolStackView`                            | Tinkers' NBT data of the replacement slot |
| `replacement`        | `ItemStack`                                 | Item stack of the replacement slot |
| `context`            | `EquipmentChangeContext`                    | Context of the original Forge event |
| `entity`             | `LivingEntity`                              | Entity that triggered the event |
| `changeSlot`         | `EquipmentSlot`                             | Slot where the item was changed |
