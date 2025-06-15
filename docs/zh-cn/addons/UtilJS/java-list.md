---
title: 调用 Java 的 List？
---

嗯，经过考虑，不打算直接开放 Java 自己的 List，而是：

```javascript
IntArrayList;
LongArrayList;
DoubleArrayList;
FloatArrayList;
ObjectArrayList;
BooleanArrayList;
```

它们相比于 Java 自己的 `ArrayList` 更加高效，通过 `.of(T...)` 方法可以快速创建出一个新的 List。z