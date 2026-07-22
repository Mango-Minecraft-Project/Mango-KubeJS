::: details `MaterialStatsBuilder`

#### 匠魂3原版部件

<table><thead><tr>
  <th>種類</th>
  <th>方法</th>
  <th>說明</th>
</tr></thead><tbody><tr>
  <td rowspan="3">近戰/採集工具</td>
  <td>

```ts :no-line-numbers
head(
  durability: int, // 耐久度
  meleeAttack: float, // 近戰傷害
  miningSpeed: float, // 挖掘速度
  miningTier: string // 挖掘等級
)
```

  </td>
  <td>武器、工具頭部，如：鎬頭、小型斧刃、小型劍刃、牌板、錘頭、板斧刃、寬刃</td>
</tr><tr>
  <td>

```ts :no-line-numbers
handle(
  durability: int, // 耐久度
  meleeDamage: float, // 近戰傷害
  meleeSpeed: float, // 近戰攻擊速度
  miningSpeed: float, // 挖掘速度
)
```

  </td>
  <td>手柄，如：工具手柄、堅韌手柄</td>
</tr>
<tr>
  <td>

```ts :no-line-numbers
binding()
```

  </td>
  <td>綁定，如：綁定結、圓盤、大板</td>
</tr><tr>
  <td rowspan="3">遠程工具</td>
  <td>

```ts :no-line-numbers
limb(
  accuracy: float, // 精準度
  drawSpeed: float, // 拉弓速度
  durability: int, // 耐久度
  veocity: float // 射速
)
```

  </td>
  <td>弓臂</td>
</tr><tr>
  <td>

```ts :no-line-numbers
grip(
  accuracy: float, // 精準度
  durability: float, // 耐久度百分比
  meleeDamage: float // 近戰傷害
)
```

  </td>
  <td>弓把</td>
</tr><tr>
  <td>

```ts :no-line-numbers
bowstring()
```

  </td>
  <td>弓弦</td>
</tr><tr>
  <td rowspan="6">盔甲</td>
  <td>

```ts :no-line-numbers
platingHelmet(
  armor: float, // 盔甲
  durability: int, // 耐久度
  toughness: float, // 盔甲強度
  knockbackResistance: float // 擊退抗性
)
```

  </td>
  <td>鑲版頭盔</td> 
</tr><tr>
  <td>

```ts :no-line-numbers
platingChestplate(
  armor: float, // 盔甲
  durability: int, // 耐久度
  toughness: float, // 盔甲強度
  knockbackResistance: float // 擊退抗性
)
```

  </td>
  <td>鑲版胸甲</td>
</tr><tr>
  <td>

```ts :no-line-numbers
platingLeggings(
  armor: float, // 盔甲
  durability: int, // 耐久度
  toughness: float, // 盔甲強度
  knockbackResistance: float // 擊退抗性
)
```

  </td>
  <td>鑲版護腿</td>
</tr><tr>
  <td>

```ts :no-line-numbers
platingBoots(
  armor: float, // 盔甲
  durability: int, // 耐久度
  toughness: float, // 盔甲強度
  knockbackResistance: float // 擊退抗性
)
```

  </td>
  <td>鑲版靴子</td>
</tr><tr>
  <td>

```ts :no-line-numbers
platingShield(
  armor: float, // 盔甲
  durability: int, // 耐久度
  toughness: float, // 盔甲強度
  knockbackResistance: float // 擊退抗性
)
```

  </td>
  <td>鑲版盾牌</td>
</tr><tr>
  <td>

```ts :no-line-numbers
maille()
```

  </td>
  <td>鎖鏈基底</td>
</tr><tr>
  <td colspan="2">

```ts :no-line-numbers
repairKit()
```

  </td>
  <td>修補件，用於與其他工具合成恢復耐久度</td>
</tr><tr>
  <td colspan="2">

```ts :no-line-numbers 
skull(
  durability: int, // 耐久度
  armor: int, // 盔甲
)
```

  </td>
  <td>頭顱</td>
</tr></tbody></table>

#### 其他方法

<table><thead><tr>
  <th>方法</th>
  <th>說明</th>
</tr></thead><tbody><tr>
  <td>

```ts :no-line-numbers
fullArmor(
  armor: float, // 盔甲
  durability: int, // 耐久度
  toughness: float, // 盔甲強度
  knockbackResistance: float // 擊退抗性
)
```

  </td>
  <td>設置全套盔甲的屬性，會自動設置頭盔、胸甲、護腿、靴子、盾牌</td>
</tr><tr>
  <td>

```ts :no-line-numbers
part(
  partId: string, // 部件 ID
  data: map<string, object> // 部件屬性數據
)
```

  </td>
  <td>設置部件的屬性數據</td>
</tr></tbody></table>

:::
