---
title: 事件（Moment）
---

## 1. 資料包登錄

::: details 範例

```json
{
  "bar_render_type": {
    "type": "heaven_destiny_moment:default",
  },
  "area": {},
  "moment_data": {
    "effects": {
      "type": "single",
      "entries": [
        {
          "data": {
            "id": "minecraft:speed",
            "duration": 10,
            "neoforge:cures": [
              "milk",
              "protected_by_totem"
            ],
            "show_icon": true
          },
          "weight": 10
        },
        {
          "data": {
            "id": "minecraft:bad_omen",
            "duration": 10,
            "neoforge:cures": [
              "milk",
              "protected_by_totem"
            ],
            "show_icon": true
          },
          "weight": 40
        },
        {
          "data": {
            "id": "minecraft:glowing",
            "duration": 10,
            "neoforge:cures": [
              "milk",
              "protected_by_totem"
            ],
            "show_icon": true
          },
          "weight": 5
        }
      ]
    }
  },
  "tips": {
    "soundEvents": {
      "ready": "minecraft:item.goat_horn.sound.2"
    },
    "text": {
      "ready": {
        "color": "#FF0000",
        "translate": "moment.tooltip.text.ready.terra_moment.blood_moon"
      },
      "start": {
        "color": "#FF0000",
        "translate": "moment.tooltip.text.start.terra_moment.blood_moon"
      },
    }
  },
  "clientSettings": {
    "clientMoonSettings": {
      "moon_size": 25.0,
      "moon_texture": "terra_moment:textures/gui/blood_moon.png",
    },
    "environmentColor": 16711680
  }
}
```

:::

## 2. KubeJS 登錄

```js
StartupEvents.registry("heaven_destiny_moment:moment", (event) => {
  event.create("minecraft:night") // 創建一個 Moment
    // 設置 BossBar 顯示
    .barRenderType(new DefaultBarRenderType(BossBarOverlay.PROGRESS, BossBarColor.PURPLE))

    // 設置事件獎勵
    .momentData((data) => {
      data.addReward(
        new EffectReward.Builder()
          .addEffect(new EffectInstance(MobEffects.MOVEMENT_SPEED))
          .build(),
        new XpReward().add(10),
        new AttributeReward.Builder()
          .addAttribute(new AttributeElement(Attributes.ATTACK_DAMAGE, 1))
          .build(),
        new ItemReward.Builder()
          .add(new ItemStack(Items.DIAMOND))
          .build()
      )
    })

    // 設置提示設置
    .tipSettings((setting) => {
      setting
        .tooltip(MomentState.READY, TerraMoment.asDescriptionId("slime_rain"))
        .tooltip(MomentState.READY, SoundEvent.GOAT_HORN_SOUND_VARIANTS.get(2))
    })
    
    // 設置客戶端設置
    .clientSettings((setting) => {
      setting
        .environmentColor(16711680)
        .clientMoonSetting((moonSetting) => {
          moonSetting
            .moonColor(16711680)
            .moonSize(25)
            .moonTexture(TerraMoment.asResource("textures/gui/blood_moon.png"))
        })
    })
})
```

### 2.1. MomentBuilder

| 方法                                                                          | 描述             | 備註           |
| ----------------------------------------------------------------------------- | ---------------- | -------------- |
| <code>barRenderType(type: [BossBarRenderType](#bossbarrendertype))</code>     | BossBar 顯示方式 |                |
| <code>area()</code>                                                           | 事件所覆蓋的區域 | 目前不推薦設置 |
| <code>momentData((data: [MomentData](#momentdata)) => {})</code>              | 事件資料         |                |
| <code>tipSettings((setting: [TipSetting](#tipsetting)) => {})</code>          | 提示設置         |                |
| <code>clientSettings((setting: [ClientSetting](#clientsetting)) => {})</code> | 客戶端設置       |                |

---

### 類別參考

#### `BossBarRenderType`

BossBar 渲染類型

天命時刻內建一個渲染類型：`DefaultBarRenderType`，即為原版的 BossBar，可以使用原版進度條的樣式和顏色

通過以下方法建立：

```ts
new DefaultBarRenderType(overlay: BossBarOverlay, color: BossBarColor): MomentBuilder
```
- [BossBarOverlay](#bossbaroverlay)
- [BossBarColor](#bossbarcolor)

附屬模組可以實現 IBarRenderType 介面達成自定義 BossBar，如：

![](/docs/zh-tw/addons/heaven_destiny_moment/Moment/CustomBarRenderTypeExample.png)

#### `BossBarOverlay`

BossBar 的樣式

| 值                          | 描述   |
| --------------------------- | ------ |
| `BossBarOverlay.PROGRESS`   | 進度條 |
| `BossBarOverlay.NOTCHED_6`  | 6格    |
| `BossBarOverlay.NOTCHED_10` | 10格   |
| `BossBarOverlay.NOTCHED_12` | 12格   |
| `BossBarOverlay.NOTCHED_20` | 20格   |

#### `BossBarColor`

BossBar 的顏色

| 值                    | 顏色   |
| --------------------- | ------ |
| `BossBarColor.PINK`   | 粉紅色 |
| `BossBarColor.BLUE`   | 藍色   |
| `BossBarColor.RED`    | 紅色   |
| `BossBarColor.GREEN`  | 綠色   |
| `BossBarColor.YELLOW` | 黃色   |
| `BossBarColor.PURPLE` | 紫色   |
| `BossBarColor.WHITE`  | 白色   |

#### `MomentData`

事件資料

| 方法                                                                                                              | 描述             |
| ----------------------------------------------------------------------------------------------------------------- | ---------------- |
| <code>MomentData.addReward(...rewards: [IReward](#ireward)[]): MomentData</code>                                  | 添加獎勵         |
| <code>MomentData.addConditionGroup((group: [ConditionGroup](#conditiongroup)) => {}): MomentData</code>           | 添加條件組       |
| <code>MomentData.addEntitySpawnSettings(settings: [EntitySpawnSettings](#entityspawnsettings)): MomentData</code> | 添加實體生成設置 |

#### `IReward`

獲勝後的獎勵

天命時刻內建獎勵類型：

- [`EffectReward`](#effectreward)：藥水效果
- [`XpReward`](#xpreward)：經驗
- [`AttributeReward`](#attributereward)：屬性
- [`ItemReward`](#itemreward)：物品

#### `EffectReward`

藥水效果獎勵

| 方法                                                                             | 描述       |
| -------------------------------------------------------------------------------- | ---------- |
| <code>EffectReward.Builder(): [EffectRewardBuilder](#effectrewardbuilder)</code> | 創建建構子 |

#### `EffectRewardBuilder`

藥水效果獎勵建構子

| 方法                                                                                                    | 描述                         |
| ------------------------------------------------------------------------------------------------------- | ---------------------------- |
| <code>EffectRewardBuilder.randomType(randomType: [RandomType](#randomtype)): EffectRewardBuilder</code> | 設置隨機類型                 |
| `EffectRewardBuilder.add(effectInstance: MobEffectInstance): EffectRewardBuilder`                       | 添加藥水效果，權重預設為 `1` |
| `EffectRewardBuilder.add(effectInstance: MobEffectInstance, weight: number): EffectRewardBuilder`       | 添加藥水效果                 |
| `EffectRewardBuilder.build(): EffectReward`                                                             | 建構藥水效果獎勵             |

#### `XpReward`

經驗獎勵

| 方法                                                 | 描述     |
| ---------------------------------------------------- | -------- |
| `XpReward.add(xp: number): XpReward`                 | 添加經驗 |
| `XpReward.add(xp: number, weight: number): XpReward` | 添加經驗 |

#### `AttributeReward`

屬性獎勵

| 方法                                                                                      | 描述       |
| ----------------------------------------------------------------------------------------- | ---------- |
| <code>AttributeReward.Builder(): [AttributeRewardBuilder](#attributerewardbuilder)</code> | 創建建構子 |

#### `AttributeRewardBuilder`

屬性獎勵建構子

| 方法                                                                                                          | 描述                     |
| ------------------------------------------------------------------------------------------------------------- | ------------------------ |
| <code>AttributeRewardBuilder.randomType(randomType: [RandomType](#randomtype)): AttributeRewardBuilder</code> | 設置隨機類型             |
| `AttributeRewardBuilder.add(attribute: AttributeElement): AttributeRewardBuilder`                             | 添加屬性，權重預設為 `1` |
| `AttributeRewardBuilder.add(attribute: AttributeElement, weight: number): AttributeRewardBuilder`             | 添加屬性                 |
| `AttributeRewardBuilder.build(): AttributeReward`                                                             | 建構屬性獎勵             |

#### `ItemReward`

物品獎勵

| 方法                                                                       | 描述       |
| -------------------------------------------------------------------------- | ---------- |
| <code>ItemReward.Builder(): [ItemRewardBuilder](#itemrewardbuilder)</code> | 創建建構子 |

#### `ItemRewardBuilder`

物品獎勵建構子

| 方法                                                                                                | 描述         |
| --------------------------------------------------------------------------------------------------- | ------------ |
| <code>ItemRewardBuilder.randomType(randomType: [RandomType](#randomtype)): ItemRewardBuilder</code> | 設置隨機類型 |
| `ItemRewardBuilder.add(item: ItemStack, weight: number): ItemRewardBuilder`                         | 添加物品     |
| `ItemRewardBuilder.build(): ItemReward`                                                             | 建構物品獎勵 |

#### `ConditionGroup`

獲勝條件

| 方法                                                                                   | 描述       |
| -------------------------------------------------------------------------------------- | ---------- |
| <code>ConditionGroup.Builder(): [ConditionGroupBuilder](#conditiongroupbuilder)</code> | 創建建構子 |

#### `ConditionGroupBuilder`

獲勝條件建構子

| 方法                                                                                                                        | 描述           |
| --------------------------------------------------------------------------------------------------------------------------- | -------------- |
| <code>ConditionGroupBuilder.create(auto: boolean, ...conditions: [ICondition](#icondition)[]): ConditionGroupBuilder</code> | 創建條件組     |
| <code>ConditionGroupBuilder.victory(...conditions: [ICondition](#icondition)[]): ConditionGroupBuilder</code>               | 創建獲勝條件組 |
| <code>ConditionGroupBuilder.lose(...conditions: [ICondition](#icondition)[]): ConditionGroupBuilder</code>                  | 創建失敗條件組 |
| <code>ConditionGroupBuilder.end(...conditions: [ICondition](#icondition)[]): ConditionGroupBuilder</code>                   | 創建結束條件組 |

#### `ICondition`

條件

天命時刻內建條件類型：
- [`LevelCondition`](#levelcondition)：維度條件
- [`LocationCondition`](#locationcondition)：位置條件
- [`PlayerCondition`](#playercondition)：玩家條件
- [`AutoProbabilityCondition`](#autoprobabilitycondition)：自動概率條件
- [`WorldUniqueCondition`](#worlduniquecondition)：世界唯一條件
- [`DifficultyCondition`](#difficultycondition)：難度條件
- [`TimeCondition`](#timecondition)：時間條件

#### `LevelCondition`

維度條件

::: warning (WIP)
:::

#### `LocationCondition`

位置條件

::: warning (WIP)
:::

#### `PlayerCondition`

玩家條件

::: warning (WIP)
:::

#### `AutoProbabilityCondition`

自動概率條件

::: warning (WIP)
:::

#### `WorldUniqueCondition`

世界唯一條件，世界內僅存在一種類型的事件

::: warning (WIP)
:::

#### `DifficultyCondition`

難度條件

::: warning (WIP)
:::

#### `TimeCondition`

時間條件

::: warning (WIP)
:::

#### `EntitySpawnSettings`

每輪實體的生成設置

::: warning (WIP)
:::

#### `Weighted`

加權

使用以下方法建立：

```ts
new Weighted(type: RandomType, totalWeight: number, list: WeightEntry[]): Weighted
```

#### `RandomType`

隨機類型

| 值                  | 描述                         |
| ------------------- | ---------------------------- |
| `RandomType.SINGLE` | 輸出 **1** 個物品            |
| `RandomType.SUBSET` | 根據每個資料獨立判斷         |
| `RandomType.ALL`    | （預設值）忽略全重並全部輸出 |

#### `TipSetting`

事件提示的設置

| 方法                                                                                              | 描述         |
| ------------------------------------------------------------------------------------------------- | ------------ |
| <code>TipSetting.tooltip(state: [MomentState](#momentstate), tooltip: TextComponent): void</code> | 設置提示文字 |
| <code>TipSetting.tooltip(state: [MomentState](#momentstate), soundEvent: SoundEvent): void</code> | 設置聲音事件 |

#### `MomentState`

事件狀態

| 值                    | 描述   |
| --------------------- | ------ |
| `MomentState.READY`   | 準備   |
| `MomentState.START`   | 開始   |
| `MomentState.ONGOING` | 進行中 |
| `MomentState.VICTORY` | 獲勝   |
| `MomentState.LOSE`    | 失敗   |
| `MomentState.END`     | 結束   |

#### `ClientSetting`

客戶端設置

| 方法                                                                                                   | 描述         |
| ------------------------------------------------------------------------------------------------------ | ------------ |
| `ClientSetting.environmentColor(color: number)`                                                        | 設置環境顏色 |
| <code>ClientSetting.clientMoonSetting((setting: [ClientMoonSetting](#clientmoonsetting)) => {})</code> | 設置月亮設置 |

#### `ClientMoonSetting`

客戶端顯示的月亮設置

| 方法                                                       | 描述         |
| ---------------------------------------------------------- | ------------ |
| `ClientMoonSetting.moonColor(color: number)`               | 設置月亮顏色 |
| `ClientMoonSetting.moonSize(size: number)`                 | 設置月亮大小 |
| `ClientMoonSetting.moonTexture(texture: ResourceLocation)` | 設置月亮材質 |

