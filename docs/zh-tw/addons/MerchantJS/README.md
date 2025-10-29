---
title: MerchantJS
description: 拓展在交易系統方面的内容。
isOriginal: false
dir:
  link: true
categories:
  - forge-1.20
  - neoforge-1.21
layout: AddonPage
mod:
  name: FetchJS
  author: 真冬
  CurseForge: mc-mods/merchantjs
  Modrinth: mod/merchantjs
  GitHub: Tower-of-Sighs/MerchantJS
  McMod: class/22783
source: https://github.com/Tower-of-Sighs/MerchantJS/blob/master/README.md
---

本模組是 KubeJS 的附屬，擴充其在交易系統方面的功能。

## 自訂額外交易

本模組允許你在任意情境發起交易：與豬交易、與終界石交易、與附魔金蘋果交易，甚至是空手發起的交易！

```js title="<ServerSide/>"
ItemEvents.entityInteracted(event => {
  // 判斷是否與豬互動。
  if (event.getTarget().type === "minecraft:pig") {
    // 完整地建立一個交易條目。
    let offer0 = MerchantJSUtils.createMerchantOffer({
      buy: Item.of("minecraft:potato").toNBT(),
      buyB: Item.of("minecraft:bread").toNBT(),
      sell: Item.of("minecraft:stone").toNBT(),
      uses: 0,
      maxUses: 50,z
      xp: 5,
      priceMultiplier: 0,
      demand: 0
    });
    // 簡單地建立一個交易條目。
    let offer1 = MerchantJSUtils.createMerchantOffer({
      buy: Item.of("minecraft:beef").toNBT(),
      sell: Item.of("minecraft:egg").toNBT()
    });
    // 開啟自訂交易，需傳入玩家、介面標題與交易列表。
    MerchantJSUtils.openMerchant(
      event.player,
      Component.translatable("小飛豬卡通屋"),
      [offer0, offer1]
    );
  }
});
```

以上範例會讓玩家與豬豬進行交易，且交易介面可完全自訂！

若需要進階自訂，請繼續往下閱讀。

## 選擇性開放交易

先說明各參數的意義：

```javascript
let offer0 = MerchantJSUtils.createMerchantOffer({
  buy: Item.of("minecraft:potato").toNBT(), // 輸入物品 A，必填。
  buyB: Item.of("minecraft:bread").toNBT(), // 輸入物品 B，可選，預設為空。
  sell: Item.of("minecraft:stone").toNBT(), // 結果物品，必填。
  uses: 0, // 已交易次數，可選，預設為 0。
  maxUses: 50, // 最大可交易次數，可選，預設為 99。
  xp: 5, // 獎勵經驗值，可選，預設為 0。
  priceMultiplier: 0, // 價格浮動乘數，可選，預設為 0。
  demand: 0 // 初始需求值，可選，預設為 0。
});
```

若將最大可交易次數設定為 0，該交易項目會顯示為不可用狀態。

此時可搭配本模組提供的切換交易事件：

```javascript title="<ClientSide/>"
MerchantEvents.switchTrade(event => {
  if (event.titleKey == "小飛豬卡通屋") {
    // 判斷是否為小飛豬的交易介面，原版交易也會支援！
    if (event.getOffer().getMaxUses() == 0) {
      Client.player.tell("該交易已被鎖住...");
    }
  }
});
```

如此即可實現選擇性開放交易，適合用於階段性玩法。

## 承襲原版交易機制

原版交易功能相當完整，本模組主要提供便捷的額外交易介面；補貨、經驗、需求、價格波動等機制則需由你自行實作。

至少需要一個地方儲存庫存等交易相關資料，否則每次呼叫 openMerchant 都會重新定義交易。

KubeJS 提供的 persistentData 就很方便了，剩下的關鍵在於何時觸發資料刷新。

```javascript title="<ServerSide/>"
MerchantEvents.afterTrade(event => {
  event.player.tell(`非常感謝您購買 ${event.getOffer().result.id}，歡迎下次再來！`);
  event.player.addXP(event.getOffer().xp);
});
```

此事件在交易完成後觸發，對原版交易亦有效；若要在交易後執行額外行為，可在此處處理。

至於補貨，可於開啟交易介面時檢查時間間隔來判斷是否補貨。

## 後續計畫

暫無，歡迎許願。

<Attachment link="example.png" />