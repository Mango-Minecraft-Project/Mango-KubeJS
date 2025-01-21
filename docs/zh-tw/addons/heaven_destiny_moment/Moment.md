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
  "moment_data": {},
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

    // 設置提示設置
    .tipSettings((setting) => {
      setting.tooltip(MomentState.READY, TerraMoment.asDescriptionId("slime_rain"))
      setting.tooltip(MomentState.READY, SoundEvent.GOAT_HORN_SOUND_VARIANTS.get(2))
    })
})
```

### 2.1. MomentBuilder

| 方法                                                                                                                                                                    | 描述             | 備註           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------------- |
| <code>barRenderType(type: [BossBarRenderType](#bossbarrendertype))</code>                                                                                               | BossBar 顯示方式 |                |
| <code>area()</code>                                                                                                                                                     | 區域             | 目前不推薦設置 |
| <code>momentData(reward: [Reward](#reward), conditionGroup: [ConditionGroup](#conditiongroup), entitySpawnSettings: [EntitySpawnSettings](#entityspawnsettings))</code> | 時刻資料         |                |
| <code>tipSettings((setting: [TipSetting](#tipsetting)) => {})</code>                                                                                                    | 提示設置         |                |
| <code>clientSettings((setting: [ClientSetting](#clientsetting)) => {})</code>                                                                                           | 客戶端設置       |                |

---

### 類別參考

#### `BossBarRenderType`

BossBar 渲染類型

目前內建了 `DefaultBarRenderType`，即為原版的 BossBar，可以使用原版進度條的樣式和顏色

通過以下方法建立：

```ts
DefaultBarRenderType(overlay: BossBarOverlay, color: BossBarColor): MomentBuilder
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

#### `Reward`

獲勝後的獎勵

::: warning (WIP)
:::

#### `ConditionGroup`

獲勝條件

::: warning (WIP)
:::

#### `EntitySpawnSettings`

每輪實體的生成設置

::: warning (WIP)
:::

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

| 方法                                                                                     | 描述         |
| ---------------------------------------------------------------------------------------- | ------------ |
| `environmentColor(color: number)`                                                        | 設置環境顏色 |
| <code>clientMoonSetting((setting: [ClientMoonSetting](#clientmoonsetting)) => {})</code> | 設置月亮設置 |

#### `ClientMoonSetting`

客戶端顯示的月亮設置

| 方法                                     | 描述         |
| ---------------------------------------- | ------------ |
| `moonColor(color: number)`               | 設置月亮顏色 |
| `moonSize(size: number)`                 | 設置月亮大小 |
| `moonTexture(texture: ResourceLocation)` | 設置月亮材質 |

