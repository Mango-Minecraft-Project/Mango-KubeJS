---
title: 函数式编程？
---

利用一些简单的方法，UtilJS 使得一些常用类实现了 `let` `also` `run` `takeIf` `takeUnless` `repeat` 这些操作，嗯就是类似于 Kotlin 的那样。 所以怎么用在此不多赘述，大概就类似于

```js
ServerEvents.tick((event) => {
  event.server
    .wrap()
    .takeIf((take) => take.playerCount == 1)
    .also(al => {
      al.runCommandSilent("say player count = 1");
  });
});
```

由于一些限制，ProbeJS 无法做到不包装的情况下获取完整的补全，故此采用了包装器这种折中的方法。

对 `Block` `BlockPos` `BlockState` `CollectionTag` `CompoundTag` `Entity` `Item`…等类实现了包装。

稍后如果需要解除包装只要使用 `get()` 方法即可