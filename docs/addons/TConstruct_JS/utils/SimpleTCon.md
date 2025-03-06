---
title: SimpleTCon
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

## Class Attributes/Methods

| Attribute/Method       | Parameters                                                                    | Description                                             |
| ---------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------- |
| `castToolStack`        | `(arg0: IToolStackView_): ToolStack;`                                         | Converts IToolStackView to ToolStack                    |
| `getLocationKey`       | `(arg0: string): ResourceLocation;`                                           | Converts string to [ResourceLocation]                   |
| `getMaterialsInTool`   | `(arg0: IToolStackView_, arg1: string): number;`                              | Gets the specified material quantity in IToolStackView  |
| `getModifier`          | `(arg0: string): Modifier;`                                                   | Gets modifier by [ResourceLocation]                     |
| `getModifierEntry`     | `(arg0: Modifier_, arg1: number): ModifierEntry;`                             | Gets the specified level modifier entry                 |
| `getModifierEntry`     | `(arg0: string, arg1: number): ModifierEntry;`                                | Gets the specified level modifier entry                 |
| `getModifierId`        | `(arg0: string): ModifierId;`                                                 | Gets the unique ID of the specified modifier            |
| `getModifierLevel`     | `(arg0: ItemStack_, arg1: string): number;`                                   | Gets the modifier level of the specified item stack     |
| `getModifiersFromGame` | `(): Stream<Modifier>;`                                                       | (Getter) Gets all modifiers in the game                 |
| `modifiersFromGame`    | `Stream<Modifier>`                                                            | ([Beans]) Gets all modifiers in the game                |
| `getModifiersFromTag`  | `(arg0: string): List<Modifier>;`                                             | Gets the specified modifiers by modifier tag            |
| `getTinkerData`        | `(arg0: Entity_, arg1: NonNullConsumer_<TinkerDataCapability$Holder>): void;` | Gets Tinker data                                        |
| `getToolInSlot`        | `(arg0: LivingEntity_, arg1: EquipmentSlot_): ToolStack;`                     | Gets the tool stack in the specified slot of the entity |
| `getToolStack`         | `(arg0: ItemStack_): ToolStack;`                                              | Converts item stack to tool stack                       |
| `hasMaterialInTool`    | `(arg0: IToolStackView_, arg1: string): boolean;`                             | Checks if IToolStackView has the specified material     |
| `hasModifier`          | `(arg0: ItemStack_, arg1: string): boolean;`                                  | Checks if the item stack has a modifier                 |
| `newBuilder`           | `(): ModifierBuilder;`                                                        | Creates a new modifier builder                          |

::: tip Terminology
---
- `IToolStackView_`: Tinkers' tool stack interface
- `ToolStack`: Tinkers' tool stack
---
- `Modifier`: Modifier
- `ModifierEntry`: Modifier entry, includes modifier and additional information such as level
:::

[ResourceLocation]: https://minecraft.wiki/w/Resource_location
[Beans]: https://kubejs.com/wiki/tips/beans
