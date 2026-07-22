---
isOriginal: true
---

# DamageSource 中 `immediate` 與 `actual` 的差異

`immediate` 回傳直接傷害者
`actual` 回傳傷害所有者

舉例來說，玩家拿弓箭射實體：
- `immediate` 回傳 `Arrow` (弓箭)
- `actual` 回傳 `Player` (玩家)