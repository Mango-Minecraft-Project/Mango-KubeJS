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

| 方法                                          | 適用範圍 | 簡介                                                                                                                                    |
| --------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [`addAttributes`](#addattributes)             | 通用     | 新增屬性修飾符                                                                                                                          |
| [`addToolStats`](#addtoolstats)               | 通用     | 新增物品基本數值                                                                                                                        |
| [`addVolatileData`](#addvolatiledata)         | 通用     | 工具更新時添加額外資料                                                                                                                  |
| [`armoTakeAttacked`](#armotakeattacked)       | 盔甲     | 裝備時受傷能力                                                                                                                          |
| [`canBlockAttacked`](#canblockattacked)       | 盔甲     | 免疫傷害能力                                                                                                                            |
| [`findBowAmmo`](#findbowammo)                 | 遠程武器 | 彈藥找尋邏輯                                                                                                                            |
| [`getBreakSpeed`](#getbreakspeed)             | 通用     | 方塊破壞速度                                                                                                                            |
| [`getDurabilityRGB`](#getdurabilityrgb)       | 通用     | 耐久度條顏色                                                                                                                            |
| [`getDurabilityWidth`](#getdurabilitywidth)   | 通用     | 耐久度條長度                                                                                                                            |
| [`getMeleeDamage`](#getmeleedamage)           | 近戰     | 攻擊傷害                                                                                                                                |
| [`getRepairFactor`](#getrepairfactor)         | 通用     | 物品修復工廠方法                                                                                                                        |
| [`getToolDamage`](#gettooldamage)             | 通用     | 工具耐久                                                                                                                                |
| [`getUseAnim`](#getuseanim)                   | 通用     | 工具使用動畫                                                                                                                            |
| [`getUseTime`](#getusetime)                   | 通用     | 使用時間                                                                                                                                |
| [`isDurabilityShowBar`](#isdurabilityshowbar) | 通用     | 耐久度條是否顯示                                                                                                                        |
| [`isSingleLevel`](#issinglelevel)             | 通用     | 是否單一等級                                                                                                                            |
| [`modifyDamageTake`](#modifydamagetake)       | 盔甲     | 裝備時受到的最終傷害修改                                                                                                                |
| [`modifyProtection`](#modifyprotection)       | 盔甲     | 修改[保護係數](https://zh.minecraft.wiki/w/%E7%9B%94%E7%94%B2%E6%9C%BA%E5%88%B6#%E4%BF%9D%E6%8A%A4%E9%AD%94%E5%92%92%E6%9C%BA%E5%88%B6) |
| [`modifyStat`](#modifystat)                   | 通用     | 修改物品基本數值                                                                                                                        |
| [`onAfterBreak`](#onafterbreak)               | 通用     | 方塊破壞事件（後）                                                                                                                      |
| [`onAfterMeleeHit`](#onaftermeleehit)         | 近戰武器 | 攻擊事件（後）                                                                                                                          |
| [`onBeforeMeleeHit`](#onbeforemeleehit)       | 近戰武器 | 攻擊事件（前）                                                                                                                          |
| [`onDamageDealt`](#ondamagedealt)             | 盔甲     | 裝備時攻擊實體事件                                                                                                                      |
| [`onEquip`](#onequip)                         | 盔甲     | 裝備事件                                                                                                                                |
| [`onFinishUsing`](#onfinishusing)             | 通用     | 長按使用結束事件                                                                                                                        |
| [`onInventoryTick`](#oninventorytick)         | 通用     | 物品欄刻事件                                                                                                                            |
| [`onModifierRemove`](#onmodifierremove)       | 通用     | 匠魂修飾符去除事件                                                                                                                      |
| [`onStoppedUsing`](#onstoppedusing)           | 通用     | 長按使用停止事件                                                                                                                        |
| [`onUnequip`](#onunequip)                     | 盔甲     | 取消裝備事件                                                                                                                            |
| [`onUseTool`](#onusool)                       | 通用     | 物品右鍵事件                                                                                                                            |
| [`onUsingTick`](#onusingtick)                 | 通用     | 長按使用刻事件                                                                                                                          |
| [`processLoot`](#processloot)                 | 通用     | 戰利品處理                                                                                                                              |
| [`projectileHitBlock`](#projectilehitblock)   | 遠程武器 | 彈射物擊中方塊                                                                                                                          |
| [`projectileHitEntity`](#projectilehitentity) | 遠程武器 | 彈射物擊中實體                                                                                                                          |
| [`projectileLaunch`](#projectilelaunch)       | 遠程武器 | 彈射物發射                                                                                                                              |
| [`setElytraFlight`](#setelytraflight)         | 盔甲     | 鞘翅滑翔能力                                                                                                                            |
| [`tooltipSetting`](#tooltipsetting)           | 通用     | 物品提示設置                                                                                                                            |
| [`toolUseAction`](#tooluseaction)             | 通用     | 操作行為                                                                                                                                |
| [`ToolValidate`](#toolvalidate)               | 通用     | 添加額外資料的檢查                                                                                                                      |
| [`updateArmorLooting`](#updatearmorlooting)   | 盔甲     | 修改掠奪等級                                                                                                                            |
| [`updateToolLooting`](#updatetoollooting)     | 通用     | 修改掠奪等級                                                                                                                            |

#### `addAttributes`

```ts
addAttributes(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentSlot, arg3: Map<ResourceLocation, AttributeModifier>) => Map_<ResourceLocation, AttributeModifier>) => this
```


#### `addToolStats`

```ts
addToolStats(consumer: (arg0: IToolContext, arg1: number, arg2: ModifierStatsBuilder) => void) => this
```


#### `addVolatileData`

```ts
addVolatileData(consumer: (arg0: IToolContext, arg1: number, arg2: ModDataNBT) => void) => this
```


#### `armoTakeAttacked`

```ts
armoTakeAttacked(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => boolean) => this
```


#### `canBlockAttacked`

```ts
canBlockAttacked(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => boolean) => this
```


#### `findBowAmmo`

```ts
findBowAmmo(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: ItemStack, arg4: Predicate<ItemStack>) => ItemStack_) => this
```


#### `getBreakSpeed`

```ts
getBreakSpeed(consumer: (arg0: IToolStackView, arg1: number, arg2: PlayerEvent$BreakSpeed, arg3: Direction, arg4: boolean, arg5: number) => void) => this
```


#### `getDurabilityRGB`

```ts
getDurabilityRGB(consumer: (arg0: IToolStackView, arg1: number) => number) => this
```


#### `getDurabilityWidth`

```ts
getDurabilityWidth(consumer: (arg0: IToolStackView, arg1: number) => number) => this
```


#### `getMeleeDamage`

```ts
getMeleeDamage(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolAttackContext, arg3: number, arg4: number) => number) => this
```


#### `getRepairFactor`

```ts
getRepairFactor(consumer: (arg0: IToolStackView, arg1: number, arg2: number) => number) => this
```


#### `getToolDamage`

```ts
getToolDamage(consumer: (arg0: IToolStackView, arg1: number, arg2: number, arg3: LivingEntity) => number) => this
```


#### `getUseAnim`

```ts
getUseAnim(consumer: (arg0: IToolStackView, arg1: number) => UseAnim_) => this
```


#### `getUseTime`

```ts
getUseTime(consumer: (arg0: IToolStackView, arg1: number) => number) => this
```


#### `isDurabilityShowBar`

```ts
isDurabilityShowBar(consumer: (arg0: IToolStackView, arg1: number) => boolean) => this
```


#### `isSingleLevel`

```ts
isSingleLevel() => this
```


#### `modifyDamageTake`

```ts
modifyDamageTake(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => number) => this
```


#### `modifyProtection`

```ts
modifyProtection(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => number) => this
```


#### `modifyStat`

```ts
modifyStat(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: FloatToolStat, arg4: number, arg5: number) => number) => this
```


#### `onAfterBreak`

```ts
onAfterBreak(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolHarvestContext)=> void) => this
```


#### `onAfterMeleeHit`

```ts
onAfterMeleeHit(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolAttackContext, arg3: number) => void) => this
```


#### `onBeforeMeleeHit`

```ts
onBeforeMeleeHit(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolAttackContext, arg3: number, arg4: number, arg5: number) => number) => this
```


#### `onDamageDealt`

```ts
onDamageDealt(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: LivingEntity, arg5: DamageSource, arg6: number, arg7: boolean)=> void) => this
```


#### `onEquip`

```ts
onEquip(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentChangeContext) => void) => this
```


#### `onFinishUsing`

```ts
onFinishUsing(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity) => void) => this
```


#### `onInventoryTick`

```ts
onInventoryTick(consumer: (arg0: IToolStackView, arg1: number, arg2: Level, arg3: LivingEntity, arg4: number, arg5: boolean, arg6: boolean, arg7: ItemStack)=> void) => this
```


#### `onModifierRemove`

```ts
onModifierRemove(consumer: (arg0: IToolStackView, arg1: Modifier)=> Component_) => this
```


#### `onStoppedUsing`

```ts
onStoppedUsing(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: number) => void) => this
```


#### `onUnequip`

```ts
onUnequip(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentChangeContext) => void) => this
```


#### `onUseTool`

```ts
onUseTool(consumer: (arg0: IToolStackView, arg1: number, arg2: Player, arg3: InteractionHand, arg4: InteractionSource) => boolean) => this
```


#### `onUsingTick`

```ts
onUsingTick(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: number) => void) => this
```


#### `processLoot`

```ts
processLoot(consumer: (arg0: IToolStackView, arg1: number, arg2: List<ItemStack>, arg3: LootContext) => void) => this
```


#### `projectileHitBlock`

```ts
projectileHitBlock(consumer: (arg0: ModifierNBT, arg1: NamespacedNBT, arg2: number, arg3: Projectile, arg4: BlockHitResult, arg5: LivingEntity) => boolean) => this
```


#### `projectileHitEntity`

```ts
projectileHitEntity(consumer: (arg0: ModifierNBT, arg1: NamespacedNBT, arg2: number, arg3: Projectile, arg4: EntityHitResult, arg5: LivingEntity, arg6: LivingEntity) => boolean) => this
```


#### `projectileLaunch`

```ts
projectileLaunch(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: Projectile, arg4: AbstractArrow, arg5: NamespacedNBT, arg6: boolean) => void) => this
```


#### `setElytraFlight`

```ts
setElytraFlight(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: number) => boolean) => this
```


#### `tooltipSetting`

```ts
tooltipSetting(consumer: (arg0: IToolStackView, arg1: number, arg2: Player, arg3: List<Component>, arg4: TooltipKey, arg5: TooltipFlag)=> void) => this
```


#### `toolUseAction`

```ts
toolUseAction(consumer: (arg0: IToolStackView, arg1: number) => ToolAction_) => this
```


#### `ToolValidate`

```ts
ToolValidate(consumer: (arg0: IToolStackView, arg1: number) => Component_) => this
```


#### `updateArmorLooting`

```ts
updateArmorLooting(consumer: (arg0: IToolStackView, arg1: number, arg2: LootingContext, arg3: EquipmentContext, arg4: EquipmentSlot, arg5: number) => number) => this
```


#### `updateToolLooting`

```ts
updateToolLooting(consumer: (arg0: IToolStackView, arg1: number, arg2: LootingContext, arg3: number) => number) => this
```

