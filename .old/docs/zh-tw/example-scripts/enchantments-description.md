---
title: 附魔描述
description: 顯示附魔的描述，按住 Shift 鍵查看
author:
  - name: 芒果凍布丁
  - name: KL_jiana
isOriginal: 
tags: [KubeJS 6]
---

部分代碼來源自：KL_jiana

```js
ClientEvents.lang("zh_tw", (event) => {
  event.addAll("enchdesc", {
    "tooltip.enchdesc.hold_shift": "§6按住 §eShift §6查看附魔描述§r",
    "tooltip.enchdesc.embellish": " ◊ %s: %s",

    _comment: "Vanilla Enchantment Descriptions",
    "enchantment.minecraft.protection.desc": "減少大部分傷害。",
    "enchantment.minecraft.fire_protection.desc":
      "減少火焰傷害，並減少著火後的燃燒時間。",
    "enchantment.minecraft.feather_falling.desc":
      "減少摔落和使用終界珍珠傳送時的傷害。",
    "enchantment.minecraft.blast_protection.desc": "減少爆炸傷害和擊退效果。",
    "enchantment.minecraft.projectile_protection.desc":
      "減少投射物（如：箭矢、火焰彈）傷害。",
    "enchantment.minecraft.respiration.desc":
      "延長玩家於水中的活動時間，並強化於水中的視力。",
    "enchantment.minecraft.aqua_affinity.desc": "增加於水中的挖掘速度。",
    "enchantment.minecraft.thorns.desc": "對攻擊你的敵人造成傷害。",
    "enchantment.minecraft.sharpness.desc": "增加物品的傷害值。",
    "enchantment.minecraft.smite.desc":
      "增加攻擊不死生物（如：殭屍、骷髏）的傷害。",
    "enchantment.minecraft.bane_of_arthropods.desc":
      "增加攻擊節肢生物（如：蜘蛛、蠹魚）的傷害。",
    "enchantment.minecraft.knockback.desc": "增加武器的擊退強度。",
    "enchantment.minecraft.fire_aspect.desc": "對攻擊目標造成額外的火焰傷害。",
    "enchantment.minecraft.looting.desc": "擊殺生物時將獲得更多戰利品。",
    "enchantment.minecraft.efficiency.desc": "增加工具的挖掘速度。",
    "enchantment.minecraft.silk_touch.desc": "能取得易損方塊（如：玻璃）。",
    "enchantment.minecraft.unbreaking.desc": "使工具的損壞速度降低。",
    "enchantment.minecraft.fortune.desc":
      "額外增加某些方塊（如：煤礦、鑽石礦）的掉落物。",
    "enchantment.minecraft.power.desc": "增加弓的射擊傷害。",
    "enchantment.minecraft.punch.desc": "增加弓的擊退強度。",
    "enchantment.minecraft.flame.desc": "射出的箭矢將造成額外的火焰傷害。",
    "enchantment.minecraft.infinity.desc":
      "使弓能無限射出普通箭矢，必須擁有至少一支箭。",
    "enchantment.minecraft.luck_of_the_sea.desc":
      "增加釣魚獲得優良戰利品的機率。",
    "enchantment.minecraft.lure.desc": "減少等待魚上鉤的時間。",
    "enchantment.minecraft.depth_strider.desc": "增加於水中的移動速度。",
    "enchantment.minecraft.frost_walker.desc": "使玩家下方的水結冰。",
    "enchantment.minecraft.mending.desc": "以經驗回復盔甲和工具的耐久度。",
    "enchantment.minecraft.binding_curse.desc": "防止卸下盔甲欄中的詛咒物品。",
    "enchantment.minecraft.vanishing_curse.desc":
      "銷毀死亡時物品欄中的詛咒物品。",
    "enchantment.minecraft.sweeping.desc": "增加橫掃攻擊的傷害。",
    "enchantment.minecraft.loyalty.desc": "使三叉戟於射出後自動返回。",
    "enchantment.minecraft.impaling.desc": "增加攻擊玩家和水生生物的傷害。",
    "enchantment.minecraft.riptide.desc":
      "使玩家能使用三叉戟突進，僅於雨中或水中有效。",
    "enchantment.minecraft.channeling.desc":
      "使三叉戟能於暴風雨中召喚閃電電流。",
    "enchantment.minecraft.multishot.desc": "往相近方向射出額外箭矢。",
    "enchantment.minecraft.quick_charge.desc": "增加弩的裝填速度。",
    "enchantment.minecraft.piercing.desc": "使投射物能貫穿生物。",
    "enchantment.minecraft.soul_speed.desc": "增加於靈魂方塊上的移動速度。",
    "enchantment.minecraft.swift_sneak.desc": "增加於潛行時的移動速度。",
  });
});

ItemEvents.tooltip((event) => {
  const EMBELLISH_TEXT = (arg0, arg1) =>
    Text.translate("tooltip.enchdesc.embellish", arg0, arg1);
  const HOLD_SHIFT_TEXT = Text.translate("tooltip.enchdesc.hold_shift");
  const ENCHANTED_BOOK = Ingredient.of("minecraft:enchanted_book");

  event.addAdvanced(Ingredient.all, (item, advanced, text) => {
    if (!ENCHANTED_BOOK.test(item) && !item.enchanted) return;
    const { enchantments } = item;

    if (event.shift) {
      enchantments.forEach((enchantment) => {
        let descriptionId = `enchantment.${enchantment.replace(":", ".")}`;
        text.add(
          EMBELLISH_TEXT(
            Text.translate(descriptionId),
            Text.translate(`${descriptionId}.desc`).darkGray()
          )
        );
      });
    } else {
      text.add(HOLD_SHIFT_TEXT);
    }
  });
});
```
