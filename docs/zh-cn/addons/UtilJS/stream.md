---
title: 流式处理（Stream）
---

想要处理数据，但是不想写什么 `for`，写起来觉得太麻烦？

来用Stream吧～

```javascript
// 将 String 转换为 int
Stream.of("1", "2", "3").map(s => {
  Integer.parseInt(s)
})
```

也许你对 Java 有所了解，认为 Stream 很吃性能不想使用他？没关系，这个使用的是 StreamEx 库，用起来和原本的 Stream 基本一致，但速度要快很多。