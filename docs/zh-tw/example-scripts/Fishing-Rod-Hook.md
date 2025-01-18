---
isOriginal: true
category:
  - 範例腳本
tag:
  - 伺服器腳本
  - 向量
---

# 魚竿鉤子

<VidStack src="/example-scripts/Fishing-rod-hook/0.mp4"/>

```js
ItemEvents.rightClicked("fishing_rod", (event) => {
  const { player } = event;

  if (player.fishing) {
    let { fishing: hook } = player;
    player.deltaMovement = new Vec3d(
      hook.x - player.x,
      hook.y - player.y,
      hook.z - player.z
    ).scale(0.25);
    player.hurtMarked = true;
  }
});
```
