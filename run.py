data = """| `addAttributes`       | `(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentSlot, arg3: Map<ResourceLocation, AttributeModifier>) => Map_<ResourceLocation, AttributeModifier>) => this`        |
| `addToolStats`        | `(consumer: (arg0: IToolContext, arg1: number, arg2: ModifierStatsBuilder) => void) => this`                                                                                        |
| `addVolatileData`     | `(consumer: (arg0: IToolContext, arg1: number, arg2: ModDataNBT) => void) => this`                                                                                                  |
| `armoTakeAttacked`    | `(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => boolean) => this`                                |
| `canBlockAttacked`    | `(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => boolean) => this`                                |
| `findBowAmmo`         | `(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: ItemStack, arg4: Predicate<ItemStack>) => ItemStack_) => this`                                           |
| `getBreakSpeed`       | `(consumer: (arg0: IToolStackView, arg1: number, arg2: PlayerEvent$BreakSpeed, arg3: Direction, arg4: boolean, arg5: number) => void) => this`                                      |
| `getDurabilityRGB`    | `(consumer: (arg0: IToolStackView, arg1: number) => number) => this`                                                                                                                |
| `getDurabilityWidth`  | `(consumer: (arg0: IToolStackView, arg1: number) => number) => this`                                                                                                                |
| `getMeleeDamage`      | `(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolAttackContext, arg3: number, arg4: number) => number) => this`                                                           |
| `getRepairFactor`     | `(consumer: (arg0: IToolStackView, arg1: number, arg2: number) => number) => this`                                                                                                  |
| `getToolDamage`       | `(consumer: (arg0: IToolStackView, arg1: number, arg2: number, arg3: LivingEntity) => number) => this`                                                                              |
| `getUseAnim`          | `(consumer: (arg0: IToolStackView, arg1: number) => UseAnim_) => this`                                                                                                              |
| `getUseTime`          | `(consumer: (arg0: IToolStackView, arg1: number) => number) => this`                                                                                                                |
| `isDurabilityShowBar` | `(consumer: (arg0: IToolStackView, arg1: number) => boolean) => this`                                                                                                               |
| `isSingleLevel`       | `() => this`                                                                                                                                                                        |
| `modifyDamageTake`    | `(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => number) => this`                                 |
| `modifyProtection`    | `(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: DamageSource, arg5: number) => number) => this`                                 |
| `modifyStat`          | `(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: FloatToolStat, arg4: number, arg5: number) => number) => this`                                           |
| `onAfterBreak`        | `(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolHarvestContext)=> void) => this`                                                                                         |
| `onAfterMeleeHit`     | `(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolAttackContext, arg3: number) => void) => this`                                                                           |
| `onBeforeMeleeHit`    | `(consumer: (arg0: IToolStackView, arg1: number, arg2: ToolAttackContext, arg3: number, arg4: number, arg5: number) => number) => this`                                             |
| `onDamageDealt`       | `(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentContext, arg3: EquipmentSlot, arg4: LivingEntity, arg5: DamageSource, arg6: number, arg7: boolean)=> void) => this` |
| `onEquip`             | `(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentChangeContext) => void) => this`                                                                                    |
| `onFinishUsing`       | `(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity) => void) => this`                                                                                              |
| `onInventoryTick`     | `(consumer: (arg0: IToolStackView, arg1: number, arg2: Level, arg3: LivingEntity, arg4: number, arg5: boolean, arg6: boolean, arg7: ItemStack)=> void) => this`                     |
| `onModifierRemove`    | `(consumer: (arg0: IToolStackView, arg1: Modifier)=> Component_) => this`                                                                                                           |
| `onStoppedUsing`      | `(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: number) => void) => this`                                                                                |
| `onUnequip`           | `(consumer: (arg0: IToolStackView, arg1: number, arg2: EquipmentChangeContext) => void) => this`                                                                                    |
| `onUseTool`           | `(consumer: (arg0: IToolStackView, arg1: number, arg2: Player, arg3: InteractionHand, arg4: InteractionSource) => boolean) => this`                                                 |
| `onUsingTick`         | `(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: number) => void) => this`                                                                                |
| `priority`            | `(consumer: number) => this`                                                                                                                                                        |
| `processLoot`         | `(consumer: (arg0: IToolStackView, arg1: number, arg2: List<ItemStack>, arg3: LootContext) => void) => this`                                                                        |
| `projectileHitBlock`  | `(consumer: (arg0: ModifierNBT, arg1: NamespacedNBT, arg2: number, arg3: Projectile, arg4: BlockHitResult, arg5: LivingEntity) => boolean) => this`                                 |
| `projectileHitEntity` | `(consumer: (arg0: ModifierNBT, arg1: NamespacedNBT, arg2: number, arg3: Projectile, arg4: EntityHitResult, arg5: LivingEntity, arg6: LivingEntity) => boolean) => this`            |
| `projectileLaunch`    | `(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: Projectile, arg4: AbstractArrow, arg5: NamespacedNBT, arg6: boolean) => void) => this`                   |
| `setElytraFlight`     | `(consumer: (arg0: IToolStackView, arg1: number, arg2: LivingEntity, arg3: number) => boolean) => this`                                                                             |
| `tooltipSetting`      | `(consumer: (arg0: IToolStackView, arg1: number, arg2: Player, arg3: List<Component>, arg4: TooltipKey, arg5: TooltipFlag)=> void) => this`                                         |
| `toolUseAction`       | `(consumer: (arg0: IToolStackView, arg1: number) => ToolAction_) => this`                                                                                                           |
| `ToolValidate`        | `(consumer: (arg0: IToolStackView, arg1: number) => Component_) => this`                                                                                                            |
| `updateArmorLooting`  | `(consumer: (arg0: IToolStackView, arg1: number, arg2: LootingContext, arg3: EquipmentContext, arg4: EquipmentSlot, arg5: number) => number) => this`                               |
| `updateToolLooting`   | `(consumer: (arg0: IToolStackView, arg1: number, arg2: LootingContext, arg3: number) => number) => this`                                                                            |"""

temp = """
#### `{method}`

```ts
{method}{code}
```

"""

d0 = data.replace("`", "").splitlines()
d1 = [[y.strip() for y in x[1:-1].split('|')] for x in d0]
d2 = [temp.format(method=x[0], code=x[1]) for x in d1]

print(''.join(d2))