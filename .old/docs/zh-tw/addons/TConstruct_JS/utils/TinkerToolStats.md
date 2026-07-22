---
title: TinkerToolStats
isOriginal: true
layout: AddonPage
mod:
  ref: "../README.md"
---

## 類別屬性／方法

| 屬性                   |      使用範圍       |      說明      |
| ---------------------- | :-----------------: | :------------: |
| `ACCURACY`             | <Ranged /> 遠程武器 |  彈射物精準度  |
| `ARMOR_TOUGHNESS`      |   <Armor /> 盔甲    |    盔甲強度    |
| `ARMOR`                |   <Armor /> 盔甲    |     盔甲值     |
| `ATTACK_DAMAGE`        | <Melee /> 近戰武器  |  近戰攻擊傷害  |
| `ATTACK_SPEED`         | <Melee /> 近戰武器  |  近戰攻擊速度  |
| `BLOCK_AMOUNT`         | <Defensive /> 盾牌  |    格檔傷害    |
| `BLOCK_ANGLE`          | <Defensive /> 盾牌  |    格檔角度    |
| `DRAW_SPEED`           | <Ranged /> 遠程武器 |    拉弓速度    |
| `DURABILITY`           |   <Common /> 通用   |     耐久值     |
| `HARVEST_TIER`         | <Mining /> 採集工具 |  工具採集等級  |
| `KNOCKBACK_RESISTANCE` |   <Armor /> 盔甲    |    擊退抗性    |
| `MINING_SPEED`         | <Mining /> 採集工具 |    挖掘速度    |
| `PROJECTILE_DAMAGE`    | <Ranged /> 遠程武器 |   彈射物傷害   |
| `USE_ITEM_SPEED`       |   <Common /> 通用   |  物品使用速度  |
| `VELOCITY`             | <Ranged /> 遠程武器 | 彈射物初始速度 |

## 使用範例

- [`modifierRegistry$addToolStats`](../TConJSEvents/modifierRegistry.html#addtoolstats)

```js
TinkerToolStats.ATTACK_DAMAGE.add;
TinkerToolStats.ATTACK_DAMAGE.multiply;
TinkerToolStats.ATTACK_DAMAGE.multiplyAll;
TinkerToolStats.ATTACK_DAMAGE.update();
```

### 說明

::: tip
參考 [運算模式§MinecraftWiki](https://zh.minecraft.wiki/w/属性#运算模式)
:::

| 方法名稱      |     類型     |        說明        |
| ------------- | :----------: | :----------------: |
| `add`         |   增量操作   |    加在基礎值上    |
| `multiply`    |   倍率操作   |    乘在基礎值上    |
| `multiplyAll` | 最終倍乘操作 | 最終乘在運算結果上 |
| `update`      |   更新操作   |    更新運算結果    |

#### 虛擬碼

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
