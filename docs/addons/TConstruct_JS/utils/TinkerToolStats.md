---
title: TinkerToolStats
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

## Class Attributes/Methods

| Attribute              |          Scope          |         Description         |
| ---------------------- | :---------------------: | :-------------------------: |
| `ACCURACY`             |    <Ranged /> Ranged    |     Projectile accuracy     |
| `ARMOR_TOUGHNESS`      |     <Armor /> Armor     |       Armor toughness       |
| `ARMOR`                |     <Armor /> Armor     |         Armor value         |
| `ATTACK_DAMAGE`        |     <Melee /> Melee     |     Melee attack damage     |
| `ATTACK_SPEED`         |     <Melee /> Melee     |     Melee attack speed      |
| `BLOCK_AMOUNT`         | <Defensive /> Defensive |        Block damage         |
| `BLOCK_ANGLE`          | <Defensive /> Defensive |         Block angle         |
| `DRAW_SPEED`           |    <Ranged /> Ranged    |         Draw speed          |
| `DURABILITY`           |    <Common /> Common    |         Durability          |
| `HARVEST_TIER`         |    <Mining /> Mining    |      Tool harvest tier      |
| `KNOCKBACK_RESISTANCE` |     <Armor /> Armor     |    Knockback resistance     |
| `MINING_SPEED`         |    <Mining /> Mining    |        Mining speed         |
| `PROJECTILE_DAMAGE`    |    <Ranged /> Ranged    |      Projectile damage      |
| `USE_ITEM_SPEED`       |    <Common /> Common    |       Item use speed        |
| `VELOCITY`             |    <Ranged /> Ranged    | Initial projectile velocity |

## Usage Examples

- [`modifierRegistry$addToolStats`](../TConJSEvents/modifierRegistry.html#addtoolstats)

```js
TinkerToolStats.ATTACK_DAMAGE.add;
TinkerToolStats.ATTACK_DAMAGE.multiply;
TinkerToolStats.ATTACK_DAMAGE.multiplyAll;
TinkerToolStats.ATTACK_DAMAGE.update();
```

### Explanation

::: tip
Refer to [Operation Mode§MinecraftWiki](https://minecraft.fandom.com/wiki/Attribute#Operation_modes)
:::

| Method Name   |       Type       |         Description         |
| ------------- | :--------------: | :-------------------------: |
| `add`         |    Increment     |   Adds to the base value    |
| `multiply`    |    Multiplier    |  Multiplies the base value  |
| `multiplyAll` | Final Multiplier | Multiplies the final result |
| `update`      |      Update      |     Updates the result      |

#### Pseudocode

```js
((BASE + sum(...ADD)) * sum(...MULTIPLY)) * MULTIPLY_ALL_1 * MULTIPLY_ALL_2 * ...
```

<script setup>
import Armor from "@private-components/tconstruct_js/applicable/Armor.vue";
import Common from "@private-components/tconstruct_js/applicable/Common.vue";
import Defensive from "@private-components/tconstruct_js/applicable/Defensive.vue";
import Melee from "@private-components/tconstruct_js/applicable/Melee.vue";
import Mining from "@private-components/tconstruct_js/applicable/Mining.vue";
import Ranged from "@private-components/tconstruct_js/applicable/Ranged.vue";
</script>
