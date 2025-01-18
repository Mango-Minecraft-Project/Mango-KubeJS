---
title: 全域常數
---

## 常數與物件

| 名稱      | 類型                  | 描述                                                                                                 |
| --------- | --------------------- | ---------------------------------------------------------------------------------------------------- |
| `global`  | `Map<String, Object>` | [全域對象](./tips/global.md)，您可以使用它在啟動腳本中設定對象和回調，並從伺服器或客戶端腳本引用它們 |
| `console` | `Console`             | 控制台對象，用於記錄日誌                                                                             |
| `SECOND`  | `number`              | 1000（毫秒）                                                                                         |
| `MINUTE`  | `number`              | 60000（毫秒，60 * SECOND）                                                                           |
| `HOUR`    | `number`              | 3600000（毫秒，60 * MINUTE）                                                                         |
| ``        | ``                    |                                                                                                      |


## 類別

| 名稱                  | 描述                                      |
| --------------------- | ----------------------------------------- |
| `AABB`                | 軸對稱包圍盒（Axis-Aligned Bounding Box） |
| `Block`               |                                           |
| `BlockStatePredicate` |                                           |
| `Color`               |                                           |
| `Component`           |                                           |
| `Direction`           |                                           |
| `Facing`              |                                           |
| `Fluid`               |                                           |
| `ID`                  |                                           |
| `Ingredient`          |                                           |
| `Item`                |                                           |
| `Java`                |                                           |
| `JsonIO`              |                                           |
| `NBT`                 |                                           |
| `NBTIO`               |                                           |
| `Platform`            |                                           |
| `Text`                |                                           |
| `Utils`               |                                           |
| `UUID`                |                                           |


## 包裝類別

| 名稱              | 類別                                                                    |
| ----------------- | ----------------------------------------------------------------------- |
| `BlockPos`        | `net.minecraft.core.BlockPos`                                           |
| `BlockProperties` | `net.minecraft.world.level.block.state.properties.BlockStateProperties` |
| `Blocks`          | `net.minecraft.world.level.block.Blocks`                                |
| `DamageSource`    | `net.minecraft.world.damagesource.DamageSource`                         |
| `Items`           | `net.minecraft.world.item.Items`                                        |
| `JavaMath`        | `java.lang.Math`                                                        |
| `Stats`           | `net.minecraft.stats.Stats`                                             |
| `Vec3, Vec3d`     | `net.minecraft.world.phys.Vec3`                                         |
| `Vec3i`           | `net.minecraft.core.Vec3i`                                              |

---

:::details 待分類

```
Client;
Component;
Duration;
FluidAmounts;
JsonUtils;
KMath;
Matrix3f;
Matrix4f;
Notification;
ParticleOptions;
Quaternionf;
Registry;
RotationAxis;
SizedIngredient;
SoundType;
Stats;
TextIcons;
Types;
Vec3d;
Vec3f;
Vec3i;
Vec4f;
```

:::