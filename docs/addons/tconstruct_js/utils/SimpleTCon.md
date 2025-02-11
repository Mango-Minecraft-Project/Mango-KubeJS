---
title: SimpleTCon
isOriginal: true
---

## Class Attributes/Methods

| Attribute/Method       | Parameters                                                | Description                                             |
| ---------------------- | --------------------------------------------------------- | ------------------------------------------------------- |
| `castToolStack`        | `(arg0: IToolStackView_): ToolStack;`                     | Converts IToolStackView to ToolStack                    |
| `getLocationKey`       | `(arg0: string): ResourceLocation;`                       | Converts a string to [ResourceLocation]                 |
| `getMaterialsInTool`   | `(arg0: IToolStackView_, arg1: string): number;`          | Gets the specified material quantity in IToolStackView  |
| `getModifier`          | `(arg0: string): Modifier;`                               | Gets a modifier by [ResourceLocation]                   |
| `getModifierEntry`     | `(arg0: Modifier_, arg1: number): ModifierEntry;`         | Gets a modifier entry of the specified level            |
| `getModifierEntry`     | `(arg0: string, arg1: number): ModifierEntry;`            | Gets a modifier entry of the specified level            |
| `getModifierId`        | `(arg0: string): ModifierId;`                             | Gets the unique ID of the specified modifier            |
| `getModifierLevel`     | `(arg0: ItemStack_, arg1: string): number;`               | Gets the modifier level of the specified item stack     |
| `getModifiersFromGame` | `(): Stream<Modifier>;`                                   | (Getter) Gets all modifiers in the game                 |
| `modifiersFromGame`    | `Stream<Modifier>`                                        | ([Beans]) Gets all modifiers in the game                |
| `getModifiersFromTag`  | `(arg0: string): List<Modifier>;`                         | Gets the specified modifiers by modifier tag            |
| `getToolInSlot`        | `(arg0: LivingEntity_, arg1: EquipmentSlot_): ToolStack;` | Gets the tool stack in the specified slot of the entity |
| `getToolStack`         | `(arg0: ItemStack_): ToolStack;`                          | Converts an item stack to a tool stack                  |
| `hasMaterialInTool`    | `(arg0: IToolStackView_, arg1: string): boolean;`         | Checks if IToolStackView has the specified material     |
| `hasModifier`          | `(arg0: ItemStack_, arg1: string): boolean;`              | Checks if the item stack has a modifier                 |
| `newBuilder`           | `(): ModifierBuilder;`                                    | Creates a new modifier builder                          |

::: tip Terminology
---
- `IToolStackView_`: Tinkers' Construct tool stack interface
- `ToolStack`: Tinkers' Construct tool stack
---
- `Modifier`: Modifier
- `ModifierEntry`: Modifier entry, includes additional information such as modifier and level
:::

[ResourceLocation]: https://minecraft.fandom.com/wiki/Resource_location
[Beans]: /tips/beans.md
