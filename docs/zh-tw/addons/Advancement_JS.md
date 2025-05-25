---
title: Advancement JS
description: 使用 KubeJS 創建、修改進度（Advancement）
categories:
  - forge-1.18
  - forge-1.19
  - forge-1.20
  - fabric-1.18
  - fabric-1.19
  - fabric-1.20
tags:
  - 進度
layout: AddonPage
mod:
  name: Advancement JS
  author: Westernat
  CurseForge: mc-mods/advancementjs
  Modrinth: mod/advancementjs
  GitHub: Westernat/AdvancementJS
  Mcmod: class/13137
source: https://github.com/westernat/AdvancementJS/blob/2001/forge/README.md
---

## 快速範例（最新版本 ```2.9.4```）

### 啟動腳本

```js
// 創建自訂觸發器
AdvJSEvents.trigger(event => {
  event.create("advjs:get_adv")
    // 定義了多少匹配，就應該放多少測試
    // 在這個例子中，我們定義了2個匹配
    .match(advancement => advancement.getId() == "minecraft:story/smelt_iron")
    .match(playerName => playerName == "Dev")
})
```

### 伺服器腳本

```js
AdvJSEvents.advancement(event => {
  const { PREDICATE, TRIGGER } = event;

  // 定義觸發器
  const jump5times = TRIGGER.tick(triggerBuilder =>
    triggerBuilder.addStat(Stats.JUMP, Stats.CUSTOM, { min: 5 }));
  const bred_in_nether = TRIGGER.bredAnimals(triggerBuilder => {
    triggerBuilder.setChildByPredicate(PREDICATE.entityFromJson({
      stepping_on: {
        dimension: "the_nether"
      }
    }))
  });
  // AdvJS 自訂觸發器
  const destroy_dirt = TRIGGER.blockDestroyed(triggerBuilder => triggerBuilder.setBlock("dirt"));
  // 你的自訂觸發器
  const get_adv = TRIGGER.custom("advjs:get_adv");

  // 創建根進度
  const root = event.create("advjs:hell")
    .display(displayBuilder => {
      displayBuilder.setTitle("AdvancementJS")
      displayBuilder.setDescription("快速範例")
      displayBuilder.setIcon("diamond")
    })
    .criteria(criteriaBuilder => criteriaBuilder.add("dirt", destroy_dirt))
    .rewards(rewardsBuilder => {
      rewardsBuilder.setExperience(100)
      // AdvJS 自訂獎勵
      rewardsBuilder.addEffect("absorption", 200)
    })
    // 使其可重複
    .repeatable();

  // 為根進度添加子進度
  root.addChild("child1", childBuilder => {
    childBuilder
      .display(displayBuilder => {
        displayBuilder.setTitle(Text.red("Holy"))
        displayBuilder.setDescription(Text.red("地獄開始"))
      })
      .criteria(criteriaBuilder => {
        // 'OR' 意味著如果你想達成這個進度，
        // 你只需要匹配以下兩個觸發器中的一個
        criteriaBuilder.setStrategy(RequirementsStrategy.OR)
        criteriaBuilder.add("bred", bred_in_nether)
        criteriaBuilder.add("jump", jump5times)
        criteriaBuilder.add("get_adv", get_adv)
      })
      .rewards(rewardsBuilder => {
        rewardsBuilder.setRecipes("minecraft:lodestone", "minecraft:brewing_stand")
        rewardsBuilder.setExperience(100)
      })
  });

  // 使用 AdvancementFilter 移除現有進度，可用的過濾器在文檔中有寫。
  // 你也可以通過 id 移除：'event.remove("minecraft:story/lava_bucket");'
  event.remove({
    mod: "minecraft",
    icon: "minecraft:lava_bucket",
    frame: "task"
  });

  // 修改現有進度
  event.get("minecraft:story/smelt_iron")
    // 將偏移應用於顯示
    .displayOffset(1, 1, true)
    .modifyDisplay(displayBuilder => displayBuilder.setIcon("diamond_pickaxe"))
    .addChild("child2", childBuilder => {
      childBuilder
        .display(displayBuilder => {
          displayBuilder.setIcon("recovery_compass")
          displayBuilder.setTitle('我會回來的！')
          displayBuilder.setDescription(Text.green("祝你好運"))
          // 你也可以在 DisplayBuilder 中應用顯示
          displayBuilder.offset(-1, 0)
        })
        // 觸發器也可以從 json 創建
        .criteria(criteriaBuilder => criteriaBuilder.add("go_back_to_home", TRIGGER.fromJson({
          "trigger": "minecraft:changed_dimension",
          "conditions": {
            "from": "minecraft:the_end",
            "to": "minecraft:overworld"
          }
        })))
        // 檢查父進度是否完成，否則無法完成
        .requireParentDone()
    });
})

AdvJSEvents.lock(event => {
  event.result("stone_slab", "minecraft:story/smelt_iron");
  event.itemUse("spyglass", "minecraft:story/smelt_iron");
  event.blockInteract("chest", "minecraft:story/smelt_iron");
  event.entityInteract("villager", "minecraft:story/smelt_iron");
})

// 與 'Better Advancements' 兼容
AdvJSEvents.betterAdv(event => {
  event.modify("advjs:hell/child1").posX(0).posY(32).hideLines()
})

PlayerEvents.advancement(event => {
  const player = event.getPlayer();
  // 第一個參數用於匹配玩家謂詞，另外兩個是你定義的匹配
  CustomTriggers.of("advjs:get_adv").trigger(player, event.getAdvancement(), player.username)
})
```

# 如何重新加載

只需使用 `/reload`

# 功能

- 指令 `/advjs` 用於生成內置範例
- 你可以在啟動事件 `AdvJSEvents.trigger` 中創建自訂觸發器。
- AdvJS 自訂觸發器
  - `blockDestroyed`
    - 當玩家破壞方塊時觸發。
  - `playerTouch`
    - 當玩家觸碰實體時觸發。
  - `bossEvent`
    - 當玩家加入首領戰時觸發。
  - `increasedKillScore`
    - 當玩家殺死實體時觸發。
- AdvJS 自訂獎勵
  - `addEffect`
    - 給予效果。
- AdvJS 自訂方法
  - `displayOffset(offsetX: number, offsetY: number, modifyChildren?: boolean)`
    - 將偏移應用於進度顯示及其子進度
  - `requireParentDone()`
    - 檢查父進度是否完成，否則無法完成。
  - `requireOthersDone(requires[]: ResourceLocation...)`
    - 檢查你放入的進度是否已完成。
- 兼容
  - `Better Advancements`，新的伺服器事件：`AdvJSEvents.betterAdv`