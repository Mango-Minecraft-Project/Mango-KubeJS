---
title: TConJSEvents.modifierRegistry
shortTitle: modifierRegistry
isOriginal: true
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

| 方法                                          | 適用範圍           | 簡介                                                              |
| --------------------------------------------- | ------------------ | ----------------------------------------------------------------- |
| [`addAttributes`](#addattributes)             | <Common /> 通用    | 新增屬性修飾符                                                    |
| [`addToolStats`](#addtoolstats)               | <Common /> 通用    | 新增物品基本數值                                                  |
| [`addVolatileData`](#addvolatiledata)         | <Common /> 通用    | 工具更新時添加額外資料                                            |
| [`armoTakeAttacked`](#armotakeattacked)       | <Armor />  盔甲    | 裝備時受傷能力                                                    |
| [`canBlockAttacked`](#canblockattacked)       | <Armor /> 盔甲     | 免疫傷害能力                                                      |
| [`findBowAmmo`](#findbowammo)                 | <Ranged /> 遠程武器 | 彈藥找尋邏輯                                                      |
| [`getBreakSpeed`](#getbreakspeed)             | <Common /> 通用    | 方塊破壞速度                                                      |
| [`getDurabilityRGB`](#getdurabilityrgb)       | <Common /> 通用    | 耐久度條顏色                                                      |
| [`getDurabilityWidth`](#getdurabilitywidth)   | <Common /> 通用    | 耐久度條長度                                                      |
| [`getMeleeDamage`](#getmeleedamage)           | <Melee /> 近戰武器 | 攻擊傷害                                                          |
| [`getRepairFactor`](#getrepairfactor)         | <Common /> 通用    | 物品修復工廠方法                                                  |
| [`getToolDamage`](#gettooldamage)             | <Common /> 通用    | 工具耐久                                                          |
| [`getUseAnim`](#getuseanim)                   | <Common /> 通用    | 工具使用動畫                                                      |
| [`getUseTime`](#getusetime)                   | <Common /> 通用    | 使用時間                                                          |
| [`isDurabilityShowBar`](#isdurabilityshowbar) | <Common /> 通用    | 耐久度條是否顯示                                                  |
| [`isSingleLevel`](#issinglelevel)             | <Common /> 通用    | 是否單一等級                                                      |
| [`modifyDamageTake`](#modifydamagetake)       | <Armor /> 盔甲     | 裝備時受到的最終傷害修改                                          |
| [`modifyProtection`](#modifyprotection)       | <Armor /> 盔甲     | 修改[保護係數](https://zh.minecraft.wiki/w/盔甲机制#保护魔咒机制) |
| [`modifyStat`](#modifystat)                   | <Common /> 通用    | 修改物品基本數值                                                  |
| [`onAfterBreak`](#onafterbreak)               | <Common /> 通用    | 方塊破壞事件（後）                                                |
| [`onAfterMeleeHit`](#onaftermeleehit)         | <Melee /> 近戰武器 | 攻擊事件（後）                                                    |
| [`onBeforeMeleeHit`](#onbeforemeleehit)       | <Melee /> 近戰武器 | 攻擊事件（前）                                                    |
| [`onDamageDealt`](#ondamagedealt)             | <Armor /> 盔甲     | 裝備時攻擊實體事件                                                |
| [`onEquip`](#onequip)                         | <Armor /> 盔甲     | 裝備事件                                                          |
| [`onFinishUsing`](#onfinishusing)             | <Common /> 通用    | 長按使用結束事件                                                  |
| [`onInventoryTick`](#oninventorytick)         | <Common /> 通用    | 物品欄刻事件                                                      |
| [`onModifierRemove`](#onmodifierremove)       | <Common /> 通用    | 匠魂修飾符去除事件                                                |
| [`onStoppedUsing`](#onstoppedusing)           | <Common /> 通用    | 長按使用停止事件                                                  |
| [`onUnequip`](#onunequip)                     | <Armor /> 盔甲     | 取消裝備事件                                                      |
| [`onUseTool`](#onusool)                       | <Common /> 通用    | 物品右鍵事件                                                      |
| [`onUsingTick`](#onusingtick)                 | <Common /> 通用    | 長按使用刻事件                                                    |
| [`processLoot`](#processloot)                 | <Common /> 通用    | 戰利品處理                                                        |
| [`projectileHitBlock`](#projectilehitblock)   | <Ranged /> 遠程武器 | 彈射物擊中方塊                                                    |
| [`projectileHitEntity`](#projectilehitentity) | <Ranged /> 遠程武器 | 彈射物擊中實體                                                    |
| [`projectileLaunch`](#projectilelaunch)       | <Ranged /> 遠程武器 | 彈射物發射                                                        |
| [`setElytraFlight`](#setelytraflight)         | <Armor /> 盔甲     | 鞘翅滑翔能力                                                      |
| [`tooltipSetting`](#tooltipsetting)           | <Common /> 通用    | 物品提示設置                                                      |
| [`toolUseAction`](#tooluseaction)             | <Common /> 通用    | 操作行為                                                          |
| [`ToolValidate`](#toolvalidate)               | <Common /> 通用    | 添加額外資料的檢查                                                |
| [`updateArmorLooting`](#updatearmorlooting)   | <Armor /> 盔甲     | 修改掠奪等級                                                      |
| [`updateToolLooting`](#updatetoollooting)     | <Common /> 通用    | 修改掠奪等級                                                      |

---

#### `addAttributes`

```ts
addAttributes(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentSlot, arg3: Map<ResourceLocation, AttributeModifier>) => Map_<ResourceLocation, AttributeModifier>) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: EquipmentSlot` - 裝備槽
- `arg3: Map<ResourceLocation, AttributeModifier>` - 屬性修飾符

##### 回傳值

- `Map_<ResourceLocation, AttributeModifier>` - 屬性修飾符

##### 範例

::: details 範例
```js
const $AttributeModifier = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier");

event.createNew("speedy", (builder) => {
  builder.addAttributes((view, lvl, slot, attributes) => {
    attributes.put(
      new ResourceLocation("minecraft:generic.movement_speed" ),
      new $AttributeModifier(
        "b444bae1-abde-41ed-8688-f75a469fdbf4",
        "minecraft:generic.movement_speed",
        lvl * 0.1,
        "multiply_base"
      )
    );
    return attributes;
  });
});
```
:::

#### `addToolStats`

```ts
addToolStats(consumer: (arg0: IToolContext, arg1: number, arg2: ModifierStatsBuilder) => void) => this
```

##### 參數

- `arg0: IToolContext` - 工具上下文
- `arg1: number` - 匠魂修飾符等級
- `arg2: ModifierStatsBuilder` - 修飾符統計數據生成器

##### 範例

::: details 範例
```js

```
:::

#### `addVolatileData`

```ts
addVolatileData(consumer: (arg0: IToolContext, arg1: number, arg2: ModDataNBT) => void) => this
```

##### 參數

- `arg0: IToolContext` - 工具上下文
- `arg1: number` - 匠魂修飾符等級
- `arg2: ModDataNBT` - 額外資料

##### 範例

::: details 範例
```js

```
:::

#### `armoTakeAttacked`

```ts
armoTakeAttacked(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => boolean) => this
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

::: details 範例
```js

```
:::

#### `canBlockAttacked`

```ts
canBlockAttacked(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => boolean) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: EquipmentContext` - 裝備上下文
- `arg3: EquipmentSlot` - 裝備槽
- `arg4: DamageSource` - 傷害來源
- `arg5: number` - 傷害值

##### 回傳值

- `boolean` - 是否免疫傷害

##### 範例

::: details 範例
```js

```
:::

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

::: details 範例
```js

```
:::

#### `getBreakSpeed`

```ts
getBreakSpeed(consumer: (arg0: IToolStackView, arg1: number, arg2: PlayerEvent$BreakSpeed, arg3: Direction, arg4: boolean, arg5: number) => void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: PlayerEvent$BreakSpeed` - 玩家事件
- `arg3: Direction` - 方向
- `arg4: boolean` - 是否破壞
- `arg5: number` - 破壞速度

##### 範例

::: details 範例
```js

```
:::

#### `getDurabilityRGB`

```ts
getDurabilityRGB(consumer: (arg0: IToolStackView, arg1: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 損壞值

##### 回傳值

- `number` - 顏色值

##### 範例

::: details 範例
```js

```
:::

#### `getDurabilityWidth`

```ts
getDurabilityWidth(consumer: (arg0: IToolStackView, arg1: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 損壞值

##### 回傳值

- `number` - 寬度

##### 範例

::: details 範例
```js

```
:::

#### `getMeleeDamage`

```ts
getMeleeDamage(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolAttackContext, arg3: number, arg4: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: ToolAttackContext` - 工具攻擊上下文
- `arg3: number` - 傷害值
- `arg4: number` - 攻擊速度

##### 回傳值

- `number` - 傷害值

##### 範例

::: details 範例
```js

```
:::

#### `getRepairFactor`

```ts
getRepairFactor(consumer: (arg0: IToolStackView, arg1: number, arg2: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: number` - 修復因子

##### 回傳值

- `number` - 修復因子

##### 範例

::: details 範例
```js

```
:::

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

::: details 範例
```js

```
:::

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

::: details 範例
```js

```
:::

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

::: details 範例
```js

```
:::

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

::: details 範例
```js

```
:::

#### `isSingleLevel`

```ts
isSingleLevel() => this
```

##### 回傳值

- `this`

##### 範例

::: details 範例
```js

```
:::

#### `modifyDamageTake`

```ts
modifyDamageTake(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => number) => this
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

::: details 範例
```js

```
:::

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

::: details 範例
```js

```
:::

#### `modifyStat`

```ts
modifyStat(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: FloatToolStat, arg4: number, arg5: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: LivingEntity` - 生物
- `arg3: FloatToolStat` - 工具基本數值
- `arg4: number` - 數值
- `arg5: number` - 數值

##### 回傳值

- `number` - 數值

##### 範例

::: details 範例
```js

```
:::

#### `onAfterBreak`

```ts
onAfterBreak(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolHarvestContext)=> void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: ToolHarvestContext` - 工具收穫上下文

##### 範例

::: details 範例
```js

```
:::

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

::: details 範例
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
:::

#### `onBeforeMeleeHit`

```ts
onBeforeMeleeHit(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolAttackContext, arg3: number, arg4: number, arg5: number) => number) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: ToolAttackContext` - 工具攻擊上下文
- `arg3: number` - 傷害值
- `arg4: number` - 攻擊速度
- `arg5: number` - 傷害值

##### 回傳值

- `number` - 傷害值

##### 範例

::: details 範例
```js

```
:::

#### `onDamageDealt`

```ts
onDamageDealt(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: LivingEntity, arg5: DamageSource, arg6: number, arg7: boolean)=> void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: EquipmentContext` - 裝備上下文
- `arg3: EquipmentSlot` - 裝備槽
- `arg4: LivingEntity` - 生物
- `arg5: DamageSource` - 傷害來源
- `arg6: number` - 傷害值
- `arg7: boolean` - 是否致命

##### 範例

::: details 範例
```js

```
:::

#### `onEquip`

```ts
onEquip(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentChangeContext) => void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: EquipmentChangeContext` - 裝備更換上下文

##### 範例

::: details 範例
```js

```
:::

#### `onFinishUsing`

```ts
onFinishUsing(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity) => void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: LivingEntity` - 生物

##### 範例

::: details 範例
```js

```
:::

#### `onInventoryTick`

```ts
onInventoryTick(consumer: (arg0: IToolStackView, arg1: number, arg2: Level, arg3: LivingEntity, arg4: number, arg5: boolean, arg6: boolean, arg7: ItemStack)=> void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: Level` - 維度
- `arg3: LivingEntity` - 生物
- `arg4: number` - 時間
- `arg5: boolean` - 是否在物品欄
- `arg6: boolean` - 是否在主手
- `arg7: ItemStack` - 物品堆疊

##### 範例

::: details 範例
```js

```
:::

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

::: details 範例
```js

```
:::

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

::: details 範例
```js

```
:::

#### `onUnequip`

```ts
onUnequip(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentChangeContext) => void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: EquipmentChangeContext` - 裝備更換上下文

##### 範例

::: details 範例
```js

```
:::

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

::: details 範例
```js

```
:::

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

::: details 範例
```js

```
:::

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

::: details 範例
```js

```
:::

#### `projectileHitBlock`

```ts
projectileHitBlock(consumer: (arg0: ModifierNBT, arg1: NamespacedNBT, arg2: number, arg3: Projectile, arg4: BlockHitResult, arg5: LivingEntity) => boolean) => this
```

##### 參數

- `arg0: ModifierNBT` - 修飾符
- `arg1: NamespacedNBT` - 命名空間
- `arg2: number` - 傷害值
- `arg3: Projectile` - 彈射物
- `arg4: BlockHitResult` - 方塊擊中結果
- `arg5: LivingEntity` - 生物

##### 回傳值

- `boolean` - 是否擊中方塊

##### 範例

::: details 範例
```js

```
:::

#### `projectileHitEntity`

```ts
projectileHitEntity(consumer: (arg0: ModifierNBT, arg1: NamespacedNBT, arg2: number, arg3: Projectile, arg4: EntityHitResult, arg5: LivingEntity, arg6: LivingEntity) => boolean) => this
```

##### 參數

- `arg0: ModifierNBT` - 修飾符
- `arg1: NamespacedNBT` - 命名空間
- `arg2: number` - 傷害值
- `arg3: Projectile` - 彈射物
- `arg4: EntityHitResult` - 實體擊中結果
- `arg5: LivingEntity` - 攻擊者
- `arg6: LivingEntity` - 受害者

##### 回傳值

- `boolean` - 是否擊中實體

##### 範例

::: details 範例
```js
event.createNew("give_me_hat", (builder) => {
  builder
    .projectileHitEntity((modifier, namespaced, damage, projectile, hitResult, sourceEntity, targetEntity) => {
      targetEntity.block.up.popItem(targetEntity.headArmorItem);
      targetEntity.headArmorItem = "air";
      sourceEntity.statusMessage = ["帽子給我好嗎？"];

      return false;
    });
});
```
:::

#### `projectileLaunch`

```ts
projectileLaunch(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: Projectile, arg4: AbstractArrow, arg5: NamespacedNBT, arg6: boolean) => void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: LivingEntity` - 生物
- `arg3: Projectile` - 彈射物
- `arg4: AbstractArrow` - 抽象箭
- `arg5: NamespacedNBT` - 命名空間
- `arg6: boolean` - 是否成功

##### 範例

::: details 範例
```js

```
:::

#### `setElytraFlight`

```ts
setElytraFlight(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: number) => boolean) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: LivingEntity` - 生物
- `arg3: number` - 損壞值

##### 回傳值

- `boolean` - 是否滑翔

##### 範例

::: details 範例
```js

```
:::

#### `tooltipSetting`

```ts
tooltipSetting(consumer: (arg0: IToolStackView, arg1: number, arg2: Player, arg3: List<Component>, arg4: TooltipKey, arg5: TooltipFlag)=> void) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級
- `arg2: Player` - 玩家
- `arg3: List<Component>` - 組件列表
- `arg4: TooltipKey` - 提示鍵
- `arg5: TooltipFlag` - 提示標誌

##### 範例

::: details 範例
```js

```
:::

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

::: details 範例
```js

```
:::

#### `ToolValidate`

```ts
ToolValidate(consumer: (arg0: IToolStackView, arg1: number) => Component_) => this
```

##### 參數

- `arg0: IToolStackView` - 工具堆疊視圖
- `arg1: number` - 匠魂修飾符等級

##### 回傳值

- `Component_` - 組件

##### 範例

::: details 範例
```js

```
:::

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

::: details 範例
```js

```
:::

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

::: details 範例
```js

```
:::

<script setup>
import Common from "@components/tconstruct_js/applicable/Common.vue";
import Armor from "@components/tconstruct_js/applicable/Armor.vue";
import Melee from "@components/tconstruct_js/applicable/Melee.vue";
import Ranged from "@components/tconstruct_js/applicable/Ranged.vue";
</script>