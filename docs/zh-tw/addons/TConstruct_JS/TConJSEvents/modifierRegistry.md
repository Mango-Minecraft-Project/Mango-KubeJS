---
title: TConJSEvents.modifierRegistry
shortTitle: modifierRegistry
isOriginal: true
headerDepth: 3
layout: AddonPage
mod:
  ref: "../README.md"
---

```ts
TConJSEvents.modifierRegistry(handler: (event: ModifierRegisterEventJS) => void): void
```

---

## 基本語法

```js
TConJSEvents.modifierRegistry((event) => {
  event.createEmpty("id");

  event.createNew("give_me_hat", (builder) => {});
});
```

## 事件屬性

| 方法          | 參數                                                                  | 說明               |
| ------------- | --------------------------------------------------------------------- | ------------------ |
| `createEmpty` | `(id: string) => void`                                                | 創建一個空的修飾符 |
| `createNew`   | `(id: string, builder: (builder: ModifierBuilderJS) => void) => void` | 創建一個新的修飾符 |

::: note
builder 實際在 ProbeJS 生成的文件中的類型顯示為 `Consumer_<com.xiaoyue.tconstruct_js.content.ModifierBuilder>`，為了方便理解，這裡將其簡化為 `ModifierBuilderJS`。
:::

## `ModifierBuilderJS`

### 方法列表

| 方法                                          | 適用範圍            | 簡介                     |
| --------------------------------------------- | ------------------- | ------------------------ |
| [`addAttributes`](#addattributes)             | <Common /> 通用     | 新增屬性修飾符           |
| [`addToolStats`](#addtoolstats)               | <Common /> 通用     | 新增物品基本數值         |
| [`addVolatileData`](#addvolatiledata)         | <Common /> 通用     | 工具更新時添加額外資料   |
| [`armorTakeAttacked`](#armotakeattacked)      | <Armor />  盔甲     | 裝備時受傷能力           |
| [`canBlockAttacked`](#canblockattacked)       | <Armor /> 盔甲      | 免疫傷害能力             |
| [`conditionalStat`](#conditionalstat)         | <Common /> 通用     | 修改物品基本數值         |
| [`findBowAmmo`](#findbowammo)                 | <Ranged /> 遠程武器 | 彈藥找尋邏輯             |
| [`getBreakSpeed`](#getbreakspeed)             | <Common /> 通用     | 方塊破壞速度             |
| [`getDurabilityRGB`](#getdurabilityrgb)       | <Common /> 通用     | 耐久度條顏色             |
| [`getDurabilityWidth`](#getdurabilitywidth)   | <Common /> 通用     | 耐久度條長度             |
| [`getMeleeDamage`](#getmeleedamage)           | <Melee /> 近戰武器  | 攻擊傷害                 |
| [`getRepairFactor`](#getrepairfactor)         | <Common /> 通用     | 物品修復工廠方法         |
| [`getToolDamage`](#gettooldamage)             | <Common /> 通用     | 工具耐久                 |
| [`getUseAnim`](#getuseanim)                   | <Common /> 通用     | 工具使用（右鍵）動畫     |
| [`getUseTime`](#getusetime)                   | <Common /> 通用     | 使用時間                 |
| [`isDurabilityShowBar`](#isdurabilityshowbar) | <Common /> 通用     | 耐久度條是否顯示         |
| [`isSingleLevel`](#issinglelevel)             | <Common /> 通用     | 是否單一等級             |
| [`modifyDamageTaken`](#modifydamagetaken)     | <Armor /> 盔甲      | 裝備時受到的最終傷害修改 |
| [`modifyProtection`](#modifyprotection)       | <Armor /> 盔甲      | 修改[保護係數]           |
| [`onAfterBreak`](#onafterbreak)               | <Common /> 通用     | 方塊破壞事件（後）       |
| [`onAfterMeleeHit`](#onaftermeleehit)         | <Melee /> 近戰武器  | 攻擊事件（後）           |
| [`onBeforeMeleeHit`](#onbeforemeleehit)       | <Melee /> 近戰武器  | 攻擊事件（前）           |
| [`onDamageDealt`](#ondamagedealt)             | <Armor /> 盔甲      | 裝備時攻擊實體事件       |
| [`onEquip`](#onequip)                         | <Armor /> 盔甲      | 裝備事件                 |
| [`onFinishUsing`](#onfinishusing)             | <Common /> 通用     | 長按使用結束事件         |
| [`onInventoryTick`](#oninventorytick)         | <Common /> 通用     | 物品欄刻事件             |
| [`onModifierRemove`](#onmodifierremove)       | <Common /> 通用     | 匠魂修飾符去除事件       |
| [`onStoppedUsing`](#onstoppedusing)           | <Common /> 通用     | 長按使用停止事件         |
| [`onUnequip`](#onunequip)                     | <Armor /> 盔甲      | 取消裝備事件             |
| [`onUseTool`](#onusool)                       | <Common /> 通用     | 物品右鍵事件             |
| [`onUsingTick`](#onusingtick)                 | <Common /> 通用     | 長按使用刻事件           |
| [`processLoot`](#processloot)                 | <Common /> 通用     | 戰利品處理               |
| [`projectileHitBlock`](#projectilehitblock)   | <Ranged /> 遠程武器 | 彈射物擊中方塊           |
| [`projectileHitEntity`](#projectilehitentity) | <Ranged /> 遠程武器 | 彈射物擊中實體           |
| [`projectileLaunch`](#projectilelaunch)       | <Ranged /> 遠程武器 | 彈射物發射               |
| [`setElytraFlight`](#setelytraflight)         | <Armor /> 盔甲      | 鞘翅滑翔能力             |
| [`tooltipSetting`](#tooltipsetting)           | <Common /> 通用     | 物品提示設置             |
| [`toolUseAction`](#tooluseaction)             | <Common /> 通用     | 物品左鍵行為             |
| [`updateArmorLooting`](#updatearmorlooting)   | <Armor /> 盔甲      | 修改掠奪等級             |
| [`updateToolLooting`](#updatetoollooting)     | <Common /> 通用     | 修改掠奪等級             |
| [`validateTool`](#validatetool)               | <Common /> 通用     | 添加額外資料的檢查       |

[保護係數]: https://zh.minecraft.wiki/w/盔甲机制#保护魔咒机制

---

#### `addAttributes`

```ts
addAttributes(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentSlot, arg3: Map<ResourceLocation, AttributeModifier>) => Map_<ResourceLocation, AttributeModifier>) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: EquipmentSlot` - 裝備槽
- `arg3: Map<string, AttributeModifier>` - 屬性修飾符

##### 回傳值

- `Map_<string, AttributeModifier>` - 屬性修飾符

##### 範例

::: tip
推薦使用 [`builder.getAttributeModifier()`](#getattributemodifier)
:::

每級增加玩家 10% 的移動速度

```js
builder.addAttributes((view, lvl, slot, attributes) => {
  attributes.put(
    "minecraft:generic.movement_speed",
    builder.getAttributeModifier(
      "b444bae1-abde-41ed-8688-f75a469fdbf4",
      "minecraft:generic.movement_speed",
      lvl * 0.1,
      "multiply_base"
    )
  );
  return attributes;
});
```

---

#### `addToolStats`

```ts
addToolStats(consumer: (arg0: IToolContext, arg1: number, arg2: ModifierStatsBuilder) => void) => this
```

##### 參數

- `arg0: IToolContext` - 工具上下文
- `arg1: number` - 匠魂修飾符等級
- `arg2: ModifierStatsBuilder` - 修飾符統計數據生成器

##### 範例

每等級增加 10% 的攻擊傷害和彈射物傷害

```js
builder.addToolStats((view, lvl, statsBuilder) => {
  TinkerToolStats.ATTACK_DAMAGE.multiply(statsBuilder, 1 + lvl * 0.1);
  TinkerToolStats.PROJECTILE_DAMAGE.multiply(statsBuilder, 1 + lvl * 0.1);
});
```

---

#### `addVolatileData`

```ts
addVolatileData(consumer: (arg0: IToolContext, arg1: number, arg2: ModDataNBT) => void) => this
```

##### 參數

- `arg0: IToolContext` - 工具上下文
- `arg1: number` - 匠魂修飾符等級
- `arg2: ModDataNBT` - 額外資料

##### 範例

使物品獲得附魔光效

```js
builder.addVolatileData((context, lvl, data) => {
  data.putBoolean("tconstruct:shiny", true);
});
```

---

#### `armorTakeAttacked`

```ts
armorTakeAttacked(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => boolean) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: EquipmentContext` - 裝備上下文
- `arg3: EquipmentSlot` - 裝備槽
- `arg4: DamageSource` - 傷害來源
- `arg5: number` - 傷害值

##### 回傳值

- `boolean` - 是否受到傷害

##### 範例

裝備時將傷害反彈給攻擊者

```js
builder.armorTakeAttacked((view, lvl, context, slot, source, damage) => {
  const returned = source.actual || source.immediate;
  if (returned != null) {
    returned.attack(source, damage);
  }
  return true;
});
```

---

#### `canBlockAttacked`

```ts
canBlockAttacked(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => boolean) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: EquipmentContext` - 裝備上下文
- `arg3: EquipmentSlot` - 盔甲裝備著的欄位
- `arg4: DamageSource` - 傷害來源
- `arg5: number` - 傷害值

##### 回傳值

- `boolean` - 是否免疫傷害

##### 範例

免疫近戰攻擊（直接攻擊者與實際攻擊者為同一人的攻擊）

```js
builder.canBlockAttacked((view, lvl, context, slot, source, damage) => {
  return !!(source.immediate && source.actual && source.immediate.is(source.actual));d
});
```

---

#### `conditionalStat`

```ts
conditionalStat(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: FloatToolStat, arg4: number, arg5: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: LivingEntity` - 生物
- `arg3: FloatToolStat` - 工具基本數值
- `arg4: number` - 基礎數值
- `arg5: number` - 倍率

##### 回傳值

- `number` - 數值

##### 範例

每級增加 10% 的攻擊傷害和彈射物傷害

```js
builder.modifyStat((view, lvl, entity, stat, base, magnification) => {
  switch (stat) {
    case TinkerToolStats.ATTACK_DAMAGE:
      return base * (1 + lvl * magnification);
    case TinkerToolStats.PROJECTILE_DAMAGE:
      return base * (1 + lvl * magnification);
    default:
      return base;
  }
});
```

---

#### `findBowAmmo`

```ts
findBowAmmo(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: ItemStack, arg4: Predicate<ItemStack>) => ItemStack_) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: LivingEntity` - 生物
- `arg3: ItemStack` - 物品堆疊
- `arg4: Predicate<ItemStack>` - 物品堆疊述詞

##### 回傳值

- `ItemStack_` - 物品堆疊

##### 範例

讓武器只能射出追跡之箭

```js
builder.findBowAmmo((view, lvl, living, stack, predicate) => {
  return stack.id == "minecraft:spectral_arrow" ? stack.withCount(stack.count - 1) : Item.empty();
});
```

---

#### `getBreakSpeed`

```ts
getBreakSpeed(consumer: (arg0: IToolStackView, arg1: number, arg2: PlayerEvent$BreakSpeed, arg3: Direction, arg4: boolean, arg5: number) => void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: PlayerEvent$BreakSpeed` - 玩家事件
- `arg3: Direction` - 方向
- `arg4: boolean` - 是否符合方塊採集所需的最低挖掘等級
- `arg5: number` - 當前破壞速度

##### 範例

當生物生命值低於 50% 時，每級增加 10% 的破壞速度

```js
builder.getBreakSpeed((view, lvl, breakSpeedEvent, direction, canDrop, currentSpeed) => {
  if (breakSpeedEvent.entity.health / breakSpeedEvent.entity.maxHealth < 0.5) {
    breakSpeedEvent.newSpeed = currentSpeed * (1 + lvl * 0.1);
  }
});
```

---

#### `getDurabilityRGB`

```ts
getDurabilityRGB(consumer: (arg0: IToolStackView, arg1: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級

##### 回傳值

- `number` - RGB 十進制顏色值，返回預設值為 `-1`

##### 範例

耐久度條顏色設置為紅色

```js
builder.getDurabilityRGB((view, lvl) => {
  return 0xff0000;
});
```

---

#### `getDurabilityWidth`

```ts
getDurabilityWidth(consumer: (arg0: IToolStackView, arg1: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級

##### 回傳值

- `number` - 寬度，返回預設值為 `-1`

##### 範例

耐久度條寬度設置為 6

```js
builder.getDurabilityWidth((view, lvl) => {
  return 6;
});
```

---

#### `getMeleeDamage`

```ts
getMeleeDamage(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolAttackContext, arg3: number, arg4: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: ToolAttackContext` - 工具攻擊上下文
- `arg3: number` - 基礎傷害值
- `arg4: number` - 最終傷害

##### 回傳值

- `number` - 傷害值

##### 範例

使傷害值隨機增加 0.0 到 2.0 倍

```js
builder.getMeleeDamage((view, lvl, context, baseDamage, finalDamage) => {
  return finalDamage * (context.attacker.random.nextInt(1, 20) / 10);
});
```

---

#### `getRepairFactor`

```ts
getRepairFactor(consumer: (arg0: IToolStackView, arg1: number, arg2: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: number` - 修復的耐久值

##### 回傳值

- `number` - 修復的耐久值

##### 範例

每等級提高 15 % 的修復耐久值

```js
builder.getRepairFactor((view, lvl, repaired) => {
  return repaired * (1 + lvl * 0.15);
});
```

---

#### `getToolDamage`

```ts
getToolDamage(consumer: (arg0: IToolStackView, arg1: number, arg2: number, arg3: LivingEntity) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: number` - 工具耐久
- `arg3: LivingEntity` - 生物

##### 回傳值

- `number` - 工具耐久

##### 範例
```js
builder.getToolDamage((view, lvl, damage, entity) =>
  Array(damage)
    .fill()
    .reduce((acc, cur) => acc + entity.random.nextBoolean(), 0)
);
```

---

#### `getUseAnim`

```ts
getUseAnim(consumer: (arg0: IToolStackView, arg1: number) => UseAnim_) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級

##### 回傳值

- `UseAnim_` - 使用動畫

##### 範例

使用望遠鏡的使用動畫

```js
builder.getUseAnim((view, lvl, ) => {
  return "spyglass";
});
```

---

#### `getUseTime`

```ts
getUseTime(consumer: (arg0: IToolStackView, arg1: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級

##### 回傳值

- `number` - 使用時間

##### 範例

減少 `1 / 1 + 等級` 的使用時間

```js
builder.getUseTime((view, lvl) => {
  return SimpleTCon.castToolStack(view).item.getUseDuration() / (1 + lvl);
});
```

---

#### `isDurabilityShowBar`

```ts
isDurabilityShowBar(consumer: (arg0: IToolStackView, arg1: number) => boolean) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 損壞值

##### 回傳值

- `boolean` - 是否顯示耐久度條

##### 範例

不顯示耐久度條

```js
builder.isDurabilityShowBar((view, lvl, ) => {
  return false;
});
```

---

#### `isSingleLevel`

```ts
isSingleLevel() => this
```

##### 回傳值

- `this`

##### 範例

此匠魂修飾符只有一個等級

```js
builder.isSingleLevel();
```

---

#### `modifyDamageTaken`

```ts
modifyDamageTaken(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: EquipmentContext` - 裝備上下文
- `arg3: EquipmentSlot` - 裝備槽
- `arg4: DamageSource` - 傷害來源
- `arg5: number` - 傷害值

##### 回傳值

- `number` - 傷害值

##### 範例

每級減少 10% 的受到傷害

```js
builder.modifyDamageTake((view, lvl, context, slot, source, damage) => {
  return damage - damage * (0.1 * lvl);
});
```

---

#### `modifyProtection`

```ts
modifyProtection(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: EquipmentContext` - 裝備上下文
- `arg3: EquipmentSlot` - 裝備槽
- `arg4: DamageSource` - 傷害來源
- `arg5: number` - 盔甲值

##### 回傳值

- `number` - 盔甲值

##### 範例

每級減少 10% 的保護係數

```js
builder.modifyProtection((view, lvl, context, slot, source, protection) => {
  return protection - protection * (0.1 * lvl);
});
```

---

#### `onAfterBreak`

```ts
onAfterBreak(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolHarvestContext)=> void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: ToolHarvestContext` - 工具收穫上下文

##### 範例

破壞方塊後將方塊替換為黃金方塊

```js
builder.onAfterBreak((view, lvl, context) => {
  context.world.getBlock(context.pos).set("minecraft:gold_block");
});
```

---

#### `onAfterMeleeHit`

```ts
onAfterMeleeHit(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolAttackContext, arg3: number) => void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: ToolAttackContext` - 工具攻擊上下文
- `arg3: number` - 傷害值

##### 範例
```js
event.createNew("give_me_hat", (builder) => {
  builder
    .onAfterMeleeHit((view, damage, context) => {
      const { headArmorItem } = context.livingTarget;

      context.livingTarget.block.up.popItem(headArmorItem);
      context.livingTarget.headArmorItem = "air";
      context.playerAttacker.statusMessage = ["帽子給我好嗎？"];
    });
});
```

---

#### `onBeforeMeleeHit`

```ts
onBeforeMeleeHit(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolAttackContext, arg3: number, arg4: number, arg5: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: ToolAttackContext` - 工具攻擊上下文
- `arg3: number` - 傷害值
- `arg4: number` - 基礎擊退值
- `arg5: number` - 最終擊退值

##### 回傳值

- `number` - 擊退值

##### 範例

每級增加 10% 的擊退值

```js
builder.onBeforeMeleeHit((view, lvl, context, damage, baseKnockback, finalKnockback) => {
  return finalKnockback * (1 + lvl * 0.1);
});
```

---

#### `onDamageDealt`

```ts
onDamageDealt(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: LivingEntity, arg5: DamageSource, arg6: number, arg7: boolean)=> void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: EquipmentContext` - 裝備上下文
- `arg3: EquipmentSlot` - 裝備槽
- `arg4: LivingEntity` - 被攻擊者
- `arg5: DamageSource` - 傷害來源
- `arg6: number` - 傷害值
- `arg7: boolean` - 是否為直接傷害

##### 範例

當攻擊實體時，交換攻擊者和被攻擊者的氧氣值

```js
builder.onDamageDealt((view, lvl, context, slot, living, source, damage) => {
  const { airSupply } = living;
  const attacker = (source.actual || source.immediate)
  if (attacker != null) {
    living.airSupply = attacker.airSupply;
    attacker.airSupply = airSupply;
  }
});
```

---

#### `onEquip`

```ts
onEquip(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentChangeContext) => void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: EquipmentChangeContext` - 裝備更換上下文

##### 範例

裝備時將生物點燃 1 秒

```js
builder.onEquip((view, lvl, context) => {
  context.entity.secondsOnFire = 1 * lvl;
});
```

---

#### `onFinishUsing`

```ts
onFinishUsing(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity) => void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: LivingEntity` - 生物

##### 範例

十字弓使用完畢後使玩家增加與金蘋果一樣的飽食度與營養度

```js
builder.onFinishUsing((view, lvl, living) => {
  if (view.item.id == "tconstruct:crossbow" && living.player) {
    living.foodData.eat("golden_apple", "golden_apple");
  }
});
```

---

#### `onInventoryTick`

```ts
onInventoryTick(consumer: (arg0: IToolStackView, arg1: number, arg2: Level, arg3: LivingEntity, arg4: number, arg5: boolean, arg6: boolean, arg7: ItemStack)=> void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: Level` - 維度
- `arg3: LivingEntity` - 生物
- `arg4: number` - 物品所在欄位
- `arg5: boolean` - 是否在主手
- `arg6: boolean` - 是否在可用的欄位
- `arg7: ItemStack` - 物品堆疊

##### 範例

在主慣用手持有物品時，每 tick 給予生物匠魂修飾符等級的力量效果。

```js
builder.onInventoryTick((view, lvl, level, entity, slot, inMainHand, inAvailableSlot, itemStack) => {
  if (inMainHand) {
    entity.potionEffects.add("minecraft:strength", 1, lvl);
  }
});
```

---

#### `onModifierRemove`

```ts
onModifierRemove(consumer: (arg0: IToolStackView, arg1: Modifier)=> Component_) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: Modifier` - 修飾符

##### 回傳值

- `Component_` - 組件

##### 範例
```js

```

---

#### `onStoppedUsing`

```ts
onStoppedUsing(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: number) => void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: LivingEntity` - 生物
- `arg3: number` - 使用時間

##### 範例

中斷使用工具時踢出玩家

```js
builder.onStoppedUsing((view, lvl, living, duration) => {
  if (living.player) {
    living.kick();
  }
});
```

---

#### `onUnequip`

```ts
onUnequip(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentChangeContext) => void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: EquipmentChangeContext` - 裝備更換上下文

##### 範例

卸下時使生物冷凍 20 秒

```js
builder.onUnequip((view, lvl, context) => {
  context.entity.ticksFrozen = 20 * 25;
});
```

---

#### `onUseTool`

```ts
onUseTool(consumer: (arg0: IToolStackView, arg1: number, arg2: Player, arg3: InteractionHand, arg4: InteractionSource) => boolean) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: Player` - 玩家
- `arg3: InteractionHand` - 交互手
- `arg4: InteractionSource` - 交互來源

##### 回傳值

- `boolean` - 是否使用工具

##### 範例

使用工具時告訴玩家手持物品的名稱

```js
builder.onUseTool((view, lvl, player, hand, source) => {
  player.tell(player.getItemInHand(hand).displayName);
  return true;
});
```

---

#### `onUsingTick`

```ts
onUsingTick(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: number) => void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: LivingEntity` - 生物
- `arg3: number` - 使用時間

##### 範例

使用工具時給予生物抗性 5 效果

```js
builder.onUsingTick((view, lvl, living, duration) => {
  living.potionEffects.add("resistance", 1, 4);
});
```

---

#### `processLoot`

```ts
processLoot(consumer: (arg0: IToolStackView, arg1: number, arg2: List<ItemStack>, arg3: LootContext) => void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: List<ItemStack>` - 物品堆疊列表
- `arg3: LootContext` - 戰利品上下文

##### 範例

清空掉落物品

```js
builder.processLoot((view, lvl, items, context) => {
  items.clear();
});
```

---

#### `projectileHitBlock`

```ts
projectileHitBlock(consumer: (arg0: ModifierNBT, arg1: ModDataNBT, arg2: number, arg3: Projectile, arg4: BlockHitResult, arg5: LivingEntity) => void) => this
```

##### 參數

- `arg0: ModifierNBT` - 修飾符
- `arg1: ModDataNBT` - 匠魂資料NBT
- `arg2: number` - 修飾符等級
- `arg3: Projectile` - 彈射物
- `arg4: BlockHitResult` - 方塊擊中結果
- `arg5: LivingEntity` - 生物

##### 範例
```js

```

---

#### `projectileHitEntity`

```ts
projectileHitEntity(consumer: (arg0: ModifierNBT, arg1: ModDataNBT, arg2: number, arg3: Projectile, arg4: EntityHitResult, arg5: LivingEntity, arg6: LivingEntity) => boolean) => this
```

##### 參數

- `arg0: ModifierNBT` - 修飾符
- `arg1: ModDataNBT` - 匠魂資料NBT
- `arg2: number` - 傷害值
- `arg3: Projectile` - 彈射物
- `arg4: EntityHitResult` - 實體擊中結果
- `arg5: LivingEntity` - 攻擊者
- `arg6: LivingEntity` - 受害者

##### 回傳值

- `boolean` - 是否擊中實體

##### 範例
```js
builder.projectileHitEntity((modifier, namespaced, damage, projectile, hitResult, sourceEntity, targetEntity) => {
  targetEntity.block.up.popItem(targetEntity.headArmorItem);
  targetEntity.headArmorItem = "air";

  return false;
});
```

---

#### `projectileLaunch`

```ts
projectileLaunch(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: Projectile, arg4: AbstractArrow, arg5: ModDataNBT, arg6: boolean) => void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: LivingEntity` - 生物
- `arg3: Projectile` - 彈射物
- `arg4: AbstractArrow` - 抽象箭
- `arg5: ModDataNBT` - 匠魂資料NBT
- `arg6: boolean` - 是否為第一次觸發，多重射擊可能觸發多次此事件

##### 範例

根據玩家的飽食度增加箭的傷害

```js
builder.projectileLaunch((view, lvl, living, projectile, arrow, modData, isPrimary) => {
  if (living.player) {
    arrow.baseDamage += living.foodData.foodLevel;
  }
});
```

---

#### `setElytraFlight`

```ts
setElytraFlight(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: number) => boolean) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: LivingEntity` - 生物
- `arg3: number` - 飛行時間

##### 回傳值

- `boolean` - 是否滑翔

##### 範例

使玩家無需滑翔即可飛行

```js
builder.setElytraFlight((view, lvl, living, flyDuration) => {
  return true;
});
```

---

#### `tooltipSetting`

```ts
tooltipSetting(consumer: (arg0: IToolStackView, arg1: number, arg2: Player, arg3: List<Component>, arg4: TooltipKey, arg5: TooltipFlag)=> void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: Player` - 玩家
- `arg3: List<Component>` - 組件列表
- `arg4: TooltipKey` - 工具提示的按鍵（SHIFT）
- `arg5: TooltipFlag` - 工具提示標誌（advanced、creative）

##### 範例
```js

顯示一串亂碼

builder.tooltipSetting((view, lvl, player, tooltip, key, flag) => {
  tooltip.add(Text.of("000000000").obfuscated());
});
```

---

#### `toolUseAction`

```ts
toolUseAction(consumer: (arg0: IToolStackView, arg1: number) => ToolAction_) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級

##### 回傳值

- `ToolAction_` - 工具操作行為

##### 範例
```js

```

---

#### `validateTool`

```ts
validateTool(consumer: (arg0: IToolStackView, arg1: number) => Component_) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級

##### 回傳值

- `Component_` - 組件

##### 範例
```js

```

---

#### `updateArmorLooting`

```ts
updateArmorLooting(consumer: (arg0: IToolStackView, arg1: number, arg2: LootingContext, arg3: EquipmentContext, arg4: EquipmentSlot, arg5: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: LootingContext` - 掠奪上下文
- `arg3: EquipmentContext` - 裝備上下文
- `arg4: EquipmentSlot` - 裝備槽
- `arg5: number` - 掠奪等級

##### 回傳值

- `number` - 掠奪等級

##### 範例

每級增加掠奪等級

```js
builder.updateArmorLooting((view, lvl, looting, equipment, slot, originalLvl) => {
  return originalLvl * lvl;
});
```

---

#### `updateToolLooting`

```ts
updateToolLooting(consumer: (arg0: IToolStackView, arg1: number, arg2: LootingContext, arg3: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: LootingContext` - 掠奪上下文
- `arg3: number` - 掠奪等級

##### 回傳值

- `number` - 掠奪等級

##### 範例

每級增加掠奪等級

```js
builder.updateToolLooting((view, lvl, looting,  originalLvl) => {
  return originalLvl * lvl;
});
```

---

### 特殊方法

| 方法名稱                                        | 簡介           |
| ----------------------------------------------- | -------------- |
| [`getAttributeModifier`](#getattributemodifier) | 獲取屬性修飾符 |
| [`toolActionOf`](#toolactionof)                 | 工具操作行為   |

---

#### `getAttributeModifier`

```ts
getAttributeModifier(arg0: string, arg1: string, arg2: number, arg3: string): AttributeModifier;
```

##### 參數

- `arg0: string` - 屬性修飾符 UUID
- `arg1: string` - 屬性修飾符 ID
- `arg2: number` - 數值
- `arg3: string` - 屬性修飾符類型，可參考 [運算模式§MinecraftWiki](https://zh.minecraft.wiki/w/属性#运算模式)
  - `"addition"`: 增量操作
  - `"multiply_base"`: 倍率操作
  - `"multiply_total"`: 最終倍乘操作

---

#### `toolActionOf`

```ts
toolActionOf(arg0: string): ToolAction;
```

##### 參數

- `arg0: string` - 工具操作 ID

<script setup>
import Common from "@private-components/tconstruct_js/applicable/Common.vue";
import Armor from "@private-components/tconstruct_js/applicable/Armor.vue";
import Melee from "@private-components/tconstruct_js/applicable/Melee.vue";
import Ranged from "@private-components/tconstruct_js/applicable/Ranged.vue";
</script>