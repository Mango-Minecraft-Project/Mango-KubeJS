---
title: 天命時刻（Heaven Destiny Moment）
description: 提供 API 以創建各種事件，如血月、襲擊等事件。
isOriginal: true
dir:
  link: true
categories:
  - neoforge-1.21
layout: AddonPage
mod:
  name: 天命時刻
  author: XiaoHuNao
  CurseForge: mc-mods/heaven-destiny-moment
  GitHub: XiaoHuNao/HeavenDestinyMoment
  McMod: class/17474
---

提供 API 以創建各種事件，如血月、襲擊，允許使用資料包自訂

```js
//修改當前支持的生物生成規則
{
  "spawn_rule": {
    "allow_original_biome_spawn_settings": true, 
    //是否允許原始生物群系生成設置自然生成
    "slimes_spawn_everywhere": true, 
    //是否允許史萊姆無視方塊限制生成
    "ignoreLightLevel": true, 
    //是否允許生物無視光照等級生成
    "ignoreDistance": true 
    //是否允許生物無視與玩家的距離生成
  }
}
```

---

<Catalog hideHeading/>